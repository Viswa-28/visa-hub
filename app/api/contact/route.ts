import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-form";
import { clientIp, deliverLead, isRateLimited } from "@/lib/leads";

export const maxDuration = 10;
const MAX_BODY_BYTES = 8_000;

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
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

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { name, email, phone, destination, message, company } = parsed.data;

  // Honeypot tripped. Answer 200 so a bot can't tell it was caught, but log
  // the payload: if a browser ever autofills the hidden field, that's a real
  // enquiry being dropped and it must stay recoverable from the logs.
  if (company) {
    console.warn(
      `[lead:contact] HONEYPOT ${JSON.stringify({ name, email, phone, destination })}`,
    );
    return NextResponse.json({ ok: true });
  }

  const result = await deliverLead({
    source: "contact",
    subject: `New enquiry — ${name} (${destination})`,
    phone,
    fields: [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: phone },
      { label: "Travelling to", value: destination },
      ...(message ? [{ label: "Message", value: message }] : []),
    ],
    row: {
      name,
      email,
      phone,
      destination,
      message: message ?? "",
      address: "",
      dob: "",
    },
  });

  if (!result.delivered) {
    return NextResponse.json(
      { error: "Could not send your enquiry." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
