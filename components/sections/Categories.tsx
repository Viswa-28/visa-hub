import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { ArrowRight, MessageSquarePlus } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

const FEATURED_SLUGS = [
  "usa",
  "uk",
  "canada",
  "schengen",
  "australia",
  "uae",
  "singapore",
  "thailand",
  "japan",
  "malaysia",
  "new-zealand",
  "ireland",
  "vietnam",
  "sri-lanka",
  "turkey",
  "saudi-arabia",
] as const;

const FEATURED_DESTINATIONS = FEATURED_SLUGS.map(
  (slug) => COUNTRY_GUIDES.find((country) => country.slug === slug)!,
);

export function Categories() {
  return (
    <section className="bg-card py-14 md:py-16" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Visa Consulting
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Popular Visa Destinations
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Eligibility, documents, and process for {COUNTRY_GUIDES.length}+
            destinations &mdash; or search any of the 195 countries above.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {FEATURED_DESTINATIONS.map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            return (
              <Link
                key={country.slug}
                href={`/visa/${country.slug}`}
                className="border-outline-variant bg-surface-container-low hover:border-tertiary hover:ring-secondary/40 flex items-center gap-3 rounded-xl border p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 sm:p-4"
              >
                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="ring-outline-variant/40 h-6 w-9 shrink-0 rounded-[3px] object-cover ring-1"
                  />
                )}
                <span className="text-label-lg text-primary min-w-0 flex-1 truncate">
                  {country.name}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="text-tertiary size-4 shrink-0"
                />
              </Link>
            );
          })}

          {/* Catch-all for the 155 destinations without a dedicated guide. */}
          <a
            href={whatsappHref(
              "Hi VisaHub, I would like to inquire about a visa for a country not listed on your site",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 transition-colors hover:bg-emerald-100 sm:col-span-1 sm:p-4"
          >
            <MessageSquarePlus
              aria-hidden="true"
              className="size-6 shrink-0 text-emerald-600"
            />
            <span className="text-label-md min-w-0 flex-1 text-emerald-800">
              Don&rsquo;t see your country? Message us on WhatsApp
            </span>
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/visa"
            className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg inline-flex items-center gap-2 rounded-md px-6 py-3 shadow-md transition-colors"
          >
            View all destinations
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
