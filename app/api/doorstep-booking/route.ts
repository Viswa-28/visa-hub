import { NextResponse } from "next/server";
import { doorstepBookingSchema } from "@/lib/doorstep-booking";
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

  const parsed = doorstepBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { name, mobile, address, dob } = parsed.data;

  const result = await deliverLead({
    source: "doorstep-booking",
    subject: `New doorstep booking — ${name} (${mobile})`,
    phone: mobile,
    fields: [
      { label: "Name", value: name },
      { label: "Mobile", value: mobile },
      { label: "Address", value: address },
      { label: "Date of Birth", value: dob },
    ],
    // Address stays out of the sheet by request — it's still in the
    // notification email, which is where visit details get read from.
    row: {
      name,
      email: "",
      phone: mobile,
      destination: "",
      dob,
      message: "",
    },
  });

  if (!result.delivered) {
    return NextResponse.json(
      { error: "Could not record your booking." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
