import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { doorstepBookingSchema } from "@/lib/doorstep-booking";
import type { DoorstepBookingValues } from "@/lib/doorstep-booking";

/**
 * Vercel kills a Hobby-plan function at 10s. The SMTP timeouts must fire
 * *before* that, otherwise the platform terminates the request first and the
 * catch block never runs — which would lose the lead instead of logging it.
 */
export const maxDuration = 10;
const SEND_TIMEOUT_MS = 7_000;
const MAX_BODY_BYTES = 8_000;

/**
 * Per-instance only. On Vercel each serverless instance keeps its own Map and
 * cold starts reset it, so this slows casual abuse rather than preventing it.
 * A shared store (Upstash Redis) is the real fix if this ever gets targeted.
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
 * A booking is a real sales lead, so it goes to the server log before anything
 * is allowed to fail. If SMTP is down or misconfigured the lead is still
 * recoverable from the logs rather than destroyed.
 */
function recordLead(lead: DoorstepBookingValues, outcome: string) {
  console.log(
    `[doorstep-booking] ${outcome} ${JSON.stringify({
      ...lead,
      receivedAt: new Date().toISOString(),
    })}`,
  );
}

function buildEmail(lead: DoorstepBookingValues) {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Mobile", lead.mobile],
    ["Address", lead.address],
    ["Date of Birth", lead.dob],
    ["Received", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#0b1f3a">
      <h2 style="margin:0 0 4px">New doorstep booking request</h2>
      <p style="margin:0 0 16px;color:#475569">Submitted from thevisahub.in</p>
      <table cellpadding="8" style="border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">${label}</td>
                 <td style="border:1px solid #e2e8f0">${escapeHtml(value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:16px 0 0">
        <a href="tel:+91${lead.mobile}" style="color:#1d4ed8">Call ${lead.mobile}</a>
        &nbsp;·&nbsp;
        <a href="https://wa.me/91${lead.mobile}" style="color:#1d4ed8">WhatsApp</a>
      </p>
    </div>
  `;

  return { text, html };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const port = Number(process.env.SMTP_PORT ?? 587);

  if (!host || !user || !pass || !to) {
    recordLead(lead, "UNDELIVERED (SMTP env vars are not set)");
    return NextResponse.json(
      { error: "Booking is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      // 465 is implicit TLS; 587 upgrades via STARTTLS.
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: SEND_TIMEOUT_MS,
      greetingTimeout: SEND_TIMEOUT_MS,
      socketTimeout: SEND_TIMEOUT_MS,
    });

    const { text, html } = buildEmail(lead);

    await transporter.sendMail({
      // Must be a mailbox the SMTP account is allowed to send as, otherwise
      // the provider rejects or the mail lands in spam.
      from: process.env.BOOKING_FROM_EMAIL ?? user,
      to,
      subject: `New doorstep booking — ${lead.name} (${lead.mobile})`,
      text,
      html,
    });
  } catch (error) {
    recordLead(lead, "UNDELIVERED (SMTP send failed)");
    console.error("[doorstep-booking] SMTP error:", error);
    return NextResponse.json(
      { error: "Could not record your booking." },
      { status: 502 },
    );
  }

  recordLead(lead, "DELIVERED");
  return NextResponse.json({ ok: true });
}
