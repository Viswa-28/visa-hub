import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { whatsappHref } from "@/lib/constants";
import {
  ALL_COUNTRIES,
  getCountriesByRegion,
  type WorldCountry,
} from "@/lib/all-countries";
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

function regionSlug(name: string) {
  return `countries-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

const VISIBLE_PER_REGION = 12;

/** Countries with a real Guide surface first — those are the "important"
 * ones to show by default; the rest sit behind "View All". */
function sortByImportance(countries: WorldCountry[]) {
  return [...countries].sort((a, b) => {
    const aHasGuide = a.code in GUIDE_SLUG_BY_CODE;
    const bHasGuide = b.code in GUIDE_SLUG_BY_CODE;
    if (aHasGuide === bHasGuide) return 0;
    return aHasGuide ? -1 : 1;
  });
}

function CountryTile({ country }: { country: WorldCountry }) {
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
      <Link href={`/visa/${guideSlug}`} className={tileClassName}>
        {content}
      </Link>
    );
  }

  return (
    <a
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
}

export function CountriesServed() {
  const regionGroups = getCountriesByRegion();

  return (
    <section
      id="countries-served"
      className="bg-surface-container-low scroll-mt-24 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Countries We Serve
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            {ALL_COUNTRIES.length} Countries, One Trusted Partner
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            We can help with a visa application to any of these{" "}
            {ALL_COUNTRIES.length} countries. Destinations marked{" "}
            <span className="text-tertiary font-semibold">Guide</span> have a
            full eligibility &amp; document breakdown ready now.
          </p>
        </div>

        {/* Jump-to-region nav — plain anchors, no client JS needed. */}
        <nav
          aria-label="Jump to region"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {regionGroups.map((group) => (
            <a
              key={group.name}
              href={`#${regionSlug(group.name)}`}
              className="text-label-md border-outline-variant bg-card text-foreground/80 hover:border-tertiary hover:text-tertiary rounded-full border px-4 py-1.5 transition-colors"
            >
              {group.name}{" "}
              <span className="opacity-70">({group.countries.length})</span>
            </a>
          ))}
        </nav>

        <div className="space-y-10">
          {regionGroups.map((group) => {
            const sorted = sortByImportance(group.countries);
            const visible = sorted.slice(0, VISIBLE_PER_REGION);
            const rest = sorted.slice(VISIBLE_PER_REGION);

            return (
              <div
                key={group.name}
                id={regionSlug(group.name)}
                className="scroll-mt-24"
              >
                <h3 className="text-label-caps text-neutral mb-4 tracking-wide uppercase">
                  {group.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {visible.map((country) => (
                    <CountryTile key={country.code} country={country} />
                  ))}
                </div>

                {rest.length > 0 && (
                  <details className="group mt-3">
                    <summary className="text-label-md text-tertiary hover:text-primary marker:content-[''] flex cursor-pointer list-none items-center gap-1">
                      View all {group.countries.length} in {group.name}
                      <span aria-hidden="true" className="transition-transform group-open:rotate-180">
                        &#9662;
                      </span>
                    </summary>
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {rest.map((country) => (
                        <CountryTile key={country.code} country={country} />
                      ))}
                    </div>
                  </details>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
