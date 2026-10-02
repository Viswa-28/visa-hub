import type { Metadata } from "next";
import { Clock, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  CONSULAR_DISCLAIMER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SERVICE_REGIONS,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

const title = "Contact Us — Visa Enquiry in Madurai";
const description =
  "Talk to a VisaHub counselor about your visa. Send an enquiry, call, or message us on WhatsApp — doorstep assistance across Tamil Nadu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const DESTINATIONS = COUNTRY_GUIDES.map((country) => country.name);

export default function ContactPage() {
  return (
    <div className="bg-surface-container-low py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Contact Us
          </span>
          <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Talk to a Visa Counselor
          </h1>
          <p className="text-body-md text-on-surface-variant mt-3">
            Tell us where you&rsquo;re headed and we&rsquo;ll walk you through
            what the visa actually needs. No obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm destinations={DESTINATIONS} />
          </div>

          <aside className="space-y-4 lg:col-span-2">
            <div className="border-outline-variant bg-card rounded-xl border p-6 shadow-sm">
              <h2 className="text-label-md text-primary mb-4 tracking-wide uppercase">
                Reach Us Directly
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={PHONE_TEL_HREF}
                    className="text-primary hover:text-tertiary flex items-center gap-3 font-bold transition-colors"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <PhoneCall aria-hidden="true" className="size-4" />
                    </span>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_DEFAULT_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-tertiary flex items-center gap-3 transition-colors"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <WhatsAppIcon aria-hidden="true" className="size-4" />
                    </span>
                    Message on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-tertiary flex items-center gap-3 transition-colors"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                      <InstagramIcon aria-hidden="true" className="size-4" />
                    </span>
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-outline-variant bg-card rounded-xl border p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="bg-tertiary/10 text-tertiary flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <MapPin aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <h2 className="text-label-md text-primary mb-1 tracking-wide uppercase">
                    Where We Operate
                  </h2>
                  <p className="text-body-sm text-on-surface-variant">
                    Based in Madurai, with doorstep visits across{" "}
                    {SERVICE_REGIONS.join(", ")} and the rest of Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-outline-variant bg-card rounded-xl border p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="bg-tertiary/10 text-tertiary flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <Clock aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <h2 className="text-label-md text-primary mb-1 tracking-wide uppercase">
                    Response Time
                  </h2>
                  <p className="text-body-sm text-on-surface-variant">
                    Enquiries sent through this form are answered on the number
                    you provide, usually the same day.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-neutral border-outline-variant/60 rounded-lg border p-4 text-[11px]">
              {CONSULAR_DISCLAIMER}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
