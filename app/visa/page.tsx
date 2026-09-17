import type { Metadata } from "next";
import { VisaGuideExplorer } from "@/components/visa/VisaGuideExplorer";
import { SITE_NAME, whatsappHref } from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

export const metadata: Metadata = {
  title: `Visa Guide — ${COUNTRY_GUIDES.length} Destinations | ${SITE_NAME}`,
  description: `Eligibility, required documents, and step-by-step process for ${COUNTRY_GUIDES.length}+ visa destinations — tourist, student, and work visas, explained clearly.`,
};

export default function VisaGuidePage() {
  return (
    <div className="bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Visa Guide
          </span>
          <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Everything You Need to Know, Before You Apply
          </h1>
          <p className="text-body-md text-on-surface-variant mt-2">
            Eligibility, documents, and processing time for{" "}
            {COUNTRY_GUIDES.length}+ destinations — search or filter by
            region below.
          </p>
        </div>

        <VisaGuideExplorer countries={COUNTRY_GUIDES} />

        <p className="text-neutral mx-auto mt-12 max-w-2xl text-center text-[11px]">
          Visa rules change often. This guide is general information to help
          you prepare — always confirm current requirements with the
          official consulate, embassy, or e-Visa portal before applying, or{" "}
          <a
            href={whatsappHref(
              "Hi VisaHub, I'd like help verifying visa requirements",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary underline"
          >
            ask our team
          </a>{" "}
          to verify for you.
        </p>
      </div>
    </div>
  );
}
