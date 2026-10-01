import { NextResponse } from "next/server";
import { doorstepBookingSchema } from "@/lib/doorstep-booking";

const WEBHOOK_TIMEOUT_MS = 10_000;
const MAX_BODY_BYTES = 8_000;

/**
 * Per-instance only — serverless spins up multiple instances, so this throttles
 * casual abuse rather than a determined attacker. A shared store (Upstash/Redis)
 * is the real fix if this endpoint ever gets targeted.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT_WINDOW_MS,
  );
  hits.push(now);
  recentSubmissions.set(ip, hits);

  if (recentSubmissions.size > 5000) recentSubmissions.clear();
  return hits.length > RATE_LIMIT_MAX;
}

/**
 * A booking is a real sales lead, so it is written to the server log before
 * anything is allowed to fail. If the Sheet webhook is down or misconfigured,
 * the lead is still recoverable from the hosting platform's logs instead of
 * being destroyed.
 */
function recordLead(lead: Record<string, string>, outcome: string) {
  console.log(
    `[doorstep-booking] ${outcome} ${JSON.stringify({
      ...lead,
      receivedAt: new Date().toISOString(),
    })}`,
  );
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Invalid request." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = doorstepBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const lead = parsed.data;
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    recordLead(lead, "UNDELIVERED (GOOGLE_SHEET_WEBHOOK_URL is not set)");
    return NextResponse.json(
      { error: "Booking is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });

    // Apps Script redirects to googleusercontent.com, which answers 200 even
    // when the script itself threw — so the body has to confirm the write.
    const responseText = await sheetResponse.text();
    const accepted =
      sheetResponse.ok && responseText.toLowerCase().includes('"ok":true');

    if (!accepted) {
      recordLead(lead, "UNDELIVERED (webhook rejected)");
      console.error(
        "[doorstep-booking] webhook returned",
        sheetResponse.status,
        responseText.slice(0, 500),
      );
      return NextResponse.json(
        { error: "Could not record your booking." },
        { status: 502 },
      );
    }
  } catch (error) {
    recordLead(lead, "UNDELIVERED (webhook unreachable)");
    console.error("[doorstep-booking] webhook threw:", error);
    return NextResponse.json(
      { error: "Could not record your booking." },
      { status: 502 },
    );
  }

  recordLead(lead, "DELIVERED");
  return NextResponse.json({ ok: true });
}
