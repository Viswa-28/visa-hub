import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { ArrowRight } from "lucide-react";
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
] as const;

const FEATURED_DESTINATIONS = FEATURED_SLUGS.map(
  (slug) => COUNTRY_GUIDES.find((country) => country.slug === slug)!,
);

export function Categories() {
  return (
    <section className="bg-card py-16" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Visa Consulting
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Popular Visa Destinations
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Eligibility, documents, and process for {COUNTRY_GUIDES.length}+
            destinations — start with a popular one below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_DESTINATIONS.map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            return (
              <Link
                key={country.slug}
                href={`/visa/${country.slug}`}
                className="border-outline-variant bg-card hover:ring-secondary/40 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2"
              >
                <div className="border-outline-variant/60 bg-surface-container-low flex items-center gap-3 border-b p-5">
                  {Flag && (
                    <Flag
                      aria-hidden="true"
                      className="h-6 w-9 shrink-0 rounded-[2px] object-cover shadow-sm"
                    />
                  )}
                  <h3 className="text-label-lg text-primary">
                    {country.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <p className="text-body-sm text-on-surface-variant">
                    {country.tagline}
                  </p>
                  <span className="text-tertiary text-label-md flex items-center gap-1">
                    View visa guide
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/visa"
            className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg inline-flex items-center gap-2 rounded-md px-6 py-3 shadow-md transition-colors"
          >
            Explore All {COUNTRY_GUIDES.length}+ Destinations
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
