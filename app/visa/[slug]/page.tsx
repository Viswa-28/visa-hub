import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Flags from "country-flag-icons/react/3x2";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  FileText,
  PhoneCall,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_NAME,
  SITE_URL,
  whatsappHref,
} from "@/lib/constants";
import { COUNTRY_GUIDES, getCountryGuideBySlug } from "@/lib/visa-guide-data";

export function generateStaticParams() {
  return COUNTRY_GUIDES.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryGuideBySlug(slug);
  if (!country) return {};

  // Country names run long ("United States of America"), so the title stays
  // minimal to survive Google's ~60-char cut; the detail lives in the
  // description instead.
  const title = `${country.name} Visa Guide`;
  const description =
    `${country.tagline} Eligibility, documents and process, explained.`.slice(
      0,
      158,
    );
  const path = `/visa/${country.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
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
}

export default async function CountryVisaGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryGuideBySlug(slug);
  if (!country) notFound();

  const Flag = Flags[country.code as keyof typeof Flags];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Visa Guide",
        item: `${SITE_URL}/visa`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `${SITE_URL}/visa/${country.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${country.name} Visa Assistance`,
    serviceType: `${country.name} visa consulting and documentation`,
    description: country.tagline,
    url: `${SITE_URL}/visa/${country.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "State", name: "Tamil Nadu" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${country.name} visa types`,
      itemListElement: country.visaTypes.map((visaType) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: visaType.name },
      })),
    },
  };

  // Per-country FAQs, where the guide has them.
  const faqJsonLd = country.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: country.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <div className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/visa"
          className="text-label-md text-tertiary mb-6 inline-flex items-center gap-1 hover:underline"
        >
          <ChevronLeft aria-hidden="true" className="size-4" />
          All destinations
        </Link>

        <div className="mb-8 flex items-center gap-4">
          {Flag && (
            <Flag
              aria-hidden="true"
              className="h-10 w-14 shrink-0 rounded-md object-cover shadow-sm"
            />
          )}
          <div>
            <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
              {country.name} Visa Guide
            </h1>
            <p className="text-body-sm text-on-surface-variant mt-1">
              {country.tagline}
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref(
              `Hi VisaHub, I would like to inquire about a visa for ${country.name}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-lg flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-emerald-500 sm:w-auto"
          >
            <WhatsAppIcon aria-hidden="true" className="size-5" />
            Message on WhatsApp
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="border-outline-variant bg-card text-primary hover:border-tertiary hover:text-tertiary text-label-lg flex w-full items-center justify-center gap-2 rounded-md border px-6 py-3 shadow-sm transition-colors sm:w-auto"
          >
            <PhoneCall aria-hidden="true" className="size-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="space-y-10">
          {country.visaTypes.map((visaType) => (
            <section
              key={visaType.id}
              className="border-outline-variant/60 bg-card rounded-xl border p-6 sm:p-8"
            >
              <h2 className="text-headline-sm text-primary mb-4">
                {visaType.name}
              </h2>

              <div className="mb-5">
                <InfoTile
                  icon={Calendar}
                  label="Processing Time"
                  value={visaType.processingTime}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-label-caps text-neutral mb-2 uppercase">
                    Who Can Apply
                  </h3>
                  <ul className="space-y-1.5">
                    {visaType.eligibility.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-label-caps text-neutral mb-2 uppercase">
                    Documents Checklist
                  </h3>
                  <ul className="space-y-1.5">
                    {visaType.documents.map((item) => (
                      <BulletItem key={item} icon={FileText}>
                        {item}
                      </BulletItem>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-dashed pt-5">
                <h3 className="text-label-caps text-neutral mb-2 uppercase">
                  Application Steps
                </h3>
                <ol className="space-y-2">
                  {visaType.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground text-label-md flex size-6 shrink-0 items-center justify-center rounded-full">
                        {index + 1}
                      </span>
                      <span className="text-body-sm text-on-surface-variant pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ))}

          {country.faqs.length > 0 && (
            <section>
              <h2 className="text-headline-sm text-primary mb-4">
                {country.name} Visa FAQs
              </h2>
              <div className="space-y-3">
                {country.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-outline-variant/60 bg-card rounded-lg border p-4"
                  >
                    <p className="text-label-lg text-primary">
                      {faq.question}
                    </p>
                    <p className="text-body-sm text-on-surface-variant mt-1.5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <p className="text-neutral mt-10 text-center text-[11px]">
          Visa rules change often. This guide is general information to help
          you prepare — always confirm current requirements with the
          official consulate, embassy, or e-Visa portal before applying.
        </p>
      </div>
    </div>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface-container-low rounded-lg p-3">
      <div className="text-label-caps text-neutral mb-1 flex items-center gap-1.5 uppercase">
        <Icon aria-hidden="true" className="size-3.5" />
        {label}
      </div>
      <p className="text-body-sm text-primary font-semibold">{value}</p>
    </div>
  );
}

function BulletItem({
  children,
  icon: Icon = CheckCircle2,
}: {
  children: React.ReactNode;
  icon?: typeof CheckCircle2;
}) {
  return (
    <li className="text-body-sm text-on-surface-variant flex items-start gap-2">
      <Icon
        aria-hidden="true"
        className="text-emerald-600 mt-0.5 size-4 shrink-0"
      />
      {children}
    </li>
  );
}
