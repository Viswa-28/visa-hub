import type { Metadata } from "next";
import { Doorstep } from "@/components/sections/Doorstep";
import { DoorstepBookingForm } from "@/components/sections/DoorstepBookingForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Doorstep Visa Assistance Across Tamil Nadu",
  description:
    "Our visa counselor visits your home or office anywhere in Tamil Nadu — document verification, form filing, appointment booking, and your approval before anything is submitted.",
  alternates: { canonical: "/doorstep" },
  openGraph: {
    type: "website",
    url: "/doorstep",
    title: `Doorstep Visa Assistance Across Tamil Nadu | ${SITE_NAME}`,
    description:
      "Our visa counselor visits your home or office anywhere in Tamil Nadu — document verification, form filing, appointment booking, and your approval before anything is submitted.",
  },
};

export default function DoorstepPage() {
  return (
    <>
      <Doorstep standalone />
      <DoorstepBookingForm />
    </>
  );
}
