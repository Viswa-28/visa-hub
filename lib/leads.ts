import nodemailer from "nodemailer";

/**
 * Shared delivery pipeline for every lead form on the site.
 *
 * Email and the Google Sheet are written in PARALLEL, not in sequence: Vercel
 * terminates a Hobby function at 10s, and SMTP (3-7s cold) plus the Apps
 * Script call (1-3s) can exceed that back to back — at which point the
 * platform kills the request before any error handling runs and the lead is
 * lost. Running both at once keeps the worst case under ~7s.
 */
const SEND_TIMEOUT_MS = 7_000;

export interface LeadField {
  label: string;
  value: string;
}

export interface Lead {
  /** Which form this came from, recorded in the sheet and the log. */
  source: string;
  subject: string;
  /** Ordered for the notification email. */
  fields: LeadField[];
  /** Flat payload for the sheet; keys must match the Apps Script columns. */
  row: Record<string, string>;
  /** Shown as one-tap links in the email when present. */
  phone?: string;
}

export interface DeliveryResult {
  delivered: boolean;
  email: "ok" | "failed" | "not-configured";
  sheet: "ok" | "failed" | "not-configured";
}

/**
 * "2026-10-02 13:56:49" in IST. Google Sheets parses this shape as a real
 * datetime (so it sorts and filters correctly), unlike a raw ISO string with
 * a Z suffix, which lands as plain text — and in UTC, which is 5h30m off.
 */
function istTimestamp() {
  const now = new Date();
  const date = now.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const time = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
  return `${date} ${time}`;
}

/**
 * Written before anything is allowed to fail, so a lead is always recoverable
 * from the platform logs even when both delivery channels are down.
 */
function recordLead(lead: Lead, outcome: string) {
  console.log(
    `[lead:${lead.source}] ${outcome} ${JSON.stringify({
      ...lead.row,
      receivedAt: new Date().toISOString(),
    })}`,
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(lead: Lead) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const port = Number(process.env.SMTP_PORT ?? 587);

  if (!host || !user || !pass || !to) throw new Error("SMTP not configured");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 is implicit TLS; 587 upgrades via STARTTLS.
    auth: { user, pass },
    connectionTimeout: SEND_TIMEOUT_MS,
    greetingTimeout: SEND_TIMEOUT_MS,
    socketTimeout: SEND_TIMEOUT_MS,
  });

  const rows = [
    ...lead.fields,
    { label: "Received", value: istTimestamp() },
  ];

  const text = rows.map((f) => `${f.label}: ${f.value}`).join("\n");
  const html = `
    <div style="font-family:system-ui,sans-serif;color:#0b1f3a">
      <h2 style="margin:0 0 4px">${escapeHtml(lead.subject)}</h2>
      <p style="margin:0 0 16px;color:#475569">Submitted from thevisahub.in</p>
      <table cellpadding="8" style="border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            (f) =>
              `<tr>
                 <td style="border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">${escapeHtml(f.label)}</td>
                 <td style="border:1px solid #e2e8f0">${escapeHtml(f.value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      ${
        lead.phone
          ? `<p style="margin:16px 0 0">
               <a href="tel:+91${lead.phone}" style="color:#1d4ed8">Call ${escapeHtml(lead.phone)}</a>
               &nbsp;·&nbsp;
               <a href="https://wa.me/91${lead.phone}" style="color:#1d4ed8">WhatsApp</a>
             </p>`
          : ""
      }
    </div>
  `;

  await transporter.sendMail({
    from: process.env.BOOKING_FROM_EMAIL ?? user,
    to,
    subject: lead.subject,
    text,
    html,
  });
}

async function appendToSheet(lead: Lead) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("Sheet webhook not configured");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // `source` deliberately isn't sent to the sheet — it stays in the server
    // log and the email subject for triage.
    body: JSON.stringify({
      submittedAt: istTimestamp(),
      ...lead.row,
    }),
    signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
  });

  // Apps Script redirects to googleusercontent.com, which answers 200 even
  // when the script itself threw — so the body has to confirm the write.
  const body = await response.text();
  if (!response.ok || !body.toLowerCase().includes('"ok":true')) {
    throw new Error(`Sheet rejected: ${response.status} ${body.slice(0, 200)}`);
  }
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const [emailResult, sheetResult] = await Promise.allSettled([
    sendEmail(lead),
    appendToSheet(lead),
  ]);

  const describe = (
    result: PromiseSettledResult<void>,
    channel: string,
  ): "ok" | "failed" | "not-configured" => {
    if (result.status === "fulfilled") return "ok";
    const message = String(result.reason?.message ?? result.reason);
    if (message.includes("not configured")) return "not-configured";
    console.error(`[lead:${lead.source}] ${channel} failed:`, result.reason);
    return "failed";
  };

  const email = describe(emailResult, "email");
  const sheet = describe(sheetResult, "sheet");

  // One surviving channel is enough to call the lead captured.
  const delivered = email === "ok" || sheet === "ok";
  recordLead(lead, delivered ? `DELIVERED email=${email} sheet=${sheet}` : "UNDELIVERED");

  return { delivered, email, sheet };
}

/**
 * Per-instance only. On Vercel each serverless instance keeps its own Map and
 * cold starts reset it, so this slows casual abuse rather than preventing it.
 * A shared store (Upstash Redis) is the real fix if this gets targeted.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

export function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT_WINDOW_MS,
  );
  hits.push(now);
  recentSubmissions.set(ip, hits);

  if (recentSubmissions.size > 5000) recentSubmissions.clear();
  return hits.length > RATE_LIMIT_MAX;
}

export function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}
