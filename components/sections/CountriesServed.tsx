import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { whatsappHref } from "@/lib/constants";
import { ALL_COUNTRIES } from "@/lib/all-countries";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

const SCHENGEN_CODES = [
  "AT", "BE", "HR", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS",
  "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "SK", "SI",
  "ES", "SE", "CH",
];

const GUIDE_SLUG_BY_CODE: Record<string, string> = {};
for (const guide of COUNTRY_GUIDES) {
  if (guide.code !== "EU") GUIDE_SLUG_BY_CODE[guide.code] = guide.slug;
}
for (const code of SCHENGEN_CODES) GUIDE_SLUG_BY_CODE[code] = "schengen";

export function CountriesServed() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Countries We Serve
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            {ALL_COUNTRIES.length} Countries, One Trusted Partner
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            We can help with a visa application to any of these{" "}
            {ALL_COUNTRIES.length} countries — tap a flag to get started.
            Destinations marked <span className="text-tertiary font-semibold">Guide</span>{" "}
            have a full eligibility &amp; document breakdown ready now.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ALL_COUNTRIES.map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            const guideSlug = GUIDE_SLUG_BY_CODE[country.code];
            const tileClassName =
              "border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 flex items-center gap-2.5 rounded-lg border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2";

            const content = (
              <>
                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="h-4 w-6 shrink-0 rounded-[2px] object-cover"
                  />
                )}
                <span className="text-label-md text-foreground/80 min-w-0 flex-1 truncate">
                  {country.name}
                </span>
                {guideSlug && (
                  <span className="text-tertiary shrink-0 text-[10px] font-semibold uppercase">
                    Guide
                  </span>
                )}
              </>
            );

            if (guideSlug) {
              return (
                <Link
                  key={country.code}
                  href={`/visa/${guideSlug}`}
                  className={tileClassName}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={country.code}
                href={whatsappHref(
                  `Hi VisaHub, I would like to inquire about a visa for ${country.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClassName}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
