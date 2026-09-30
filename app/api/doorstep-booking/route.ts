import { NextResponse } from "next/server";
import { doorstepBookingSchema } from "@/lib/doorstep-booking";

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "GOOGLE_SHEET_WEBHOOK_URL is not set — doorstep booking was NOT recorded.",
    );
    return NextResponse.json(
      { error: "Booking is not configured yet." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = doorstepBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...parsed.data,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!sheetResponse.ok) {
    console.error(
      "Google Sheet webhook rejected a doorstep booking:",
      sheetResponse.status,
      await sheetResponse.text(),
    );
    return NextResponse.json(
      { error: "Could not record your booking." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
