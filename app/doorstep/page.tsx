import type { Metadata } from "next";
import { Doorstep } from "@/components/sections/Doorstep";
import { DoorstepBookingForm } from "@/components/sections/DoorstepBookingForm";
import { OG_IMAGE, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Doorstep Visa Assistance Across Tamil Nadu",
  description:
    "Our visa counselor visits your home or office anywhere in Tamil Nadu — document checks, form filing and appointment booking, approved by you before submission.",
  alternates: { canonical: "/doorstep" },
  openGraph: {
    type: "website",
    url: "/doorstep",
    title: `Doorstep Visa Assistance Across Tamil Nadu | ${SITE_NAME}`,
    description:
      "Our visa counselor visits your home or office anywhere in Tamil Nadu — document checks, form filing and appointment booking, approved by you before submission.",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
};

export default function DoorstepPage() {
  return (
    <>
      <Doorstep standalone />
      <DoorstepBookingForm />
    </>
  );
}
