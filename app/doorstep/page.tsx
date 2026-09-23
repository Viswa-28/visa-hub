import type { Metadata } from "next";
import { Doorstep } from "@/components/sections/Doorstep";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Doorstep Visa Assistance | ${SITE_NAME}`,
  description:
    "Our visa counselor visits your home or office anywhere in Tamil Nadu — document verification, form filing, appointment booking, and your approval before anything is submitted.",
  alternates: { canonical: "/doorstep" },
};

export default function DoorstepPage() {
  return <Doorstep standalone />;
}
