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

/**
 * Contents stack below md (flag above name) and sit on one line from md up.
 * Width is left to the container, so the same tile works both in the mobile
 * swipe row (fixed width) and in the expanded grid (full cell).
 */
const TILE_CLASSNAME =
  "border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 flex flex-col items-start gap-2 rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 md:flex-row md:items-center md:gap-2.5 md:rounded-lg";

function CountryTile({ country }: { country: WorldCountry }) {
  const Flag = Flags[country.code as keyof typeof Flags];
  const guideSlug = GUIDE_SLUG_BY_CODE[country.code];

  const content = (
    <>
      {Flag && (
        <Flag
          aria-hidden="true"
          className="ring-outline-variant/40 h-6 w-9 shrink-0 rounded-[3px] object-cover ring-1 md:h-4 md:w-6 md:rounded-[2px]"
        />
      )}
      <span className="text-label-md text-foreground/80 line-clamp-2 min-w-0 flex-1 md:truncate">
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
      <Link href={`/visa/${guideSlug}`} className={TILE_CLASSNAME}>
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
      className={TILE_CLASSNAME}
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

        {/* Jump-to-region nav — one scrollable line on mobile, wraps on
            desktop. Plain anchors, no client JS needed. */}
        <nav
          aria-label="Jump to region"
          className="-mx-4 mb-10 flex snap-x gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {regionGroups.map((group) => (
            <a
              key={group.name}
              href={`#${regionSlug(group.name)}`}
              className="text-label-md border-outline-variant bg-card text-foreground/80 hover:border-tertiary hover:text-tertiary shrink-0 snap-start rounded-full border px-4 py-1.5 whitespace-nowrap transition-colors"
            >
              {group.name}{" "}
              <span className="opacity-70">({group.countries.length})</span>
            </a>
          ))}
        </nav>

        <div className="space-y-8 md:space-y-10">
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
                <div className="border-outline-variant/60 mb-4 flex items-baseline justify-between gap-3 border-b pb-2">
                  <h3 className="text-label-caps text-primary tracking-wide uppercase">
                    {group.name}
                  </h3>
                  <span className="text-neutral text-[11px] whitespace-nowrap">
                    {group.countries.length} countries
                  </span>
                </div>

                <div className="relative">
                  <div className="-mx-4 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&>*]:w-[132px] [&>*]:shrink-0 [&>*]:snap-start md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-6 md:[&>*]:w-auto [&::-webkit-scrollbar]:hidden">
                    {visible.map((country) => (
                      <CountryTile key={country.code} country={country} />
                    ))}
                  </div>
                  {/* Fade at the right edge hints there is more to swipe. */}
                  <span
                    aria-hidden="true"
                    className="from-surface-container-low pointer-events-none absolute inset-y-0 -right-4 w-12 bg-gradient-to-l to-transparent md:hidden"
                  />
                </div>

                {rest.length > 0 && (
                  <details className="group mt-3">
                    <summary className="text-label-md text-tertiary hover:text-primary marker:content-[''] inline-flex cursor-pointer list-none items-center gap-1">
                      View all {group.countries.length} in {group.name}
                      <span
                        aria-hidden="true"
                        className="transition-transform group-open:rotate-180"
                      >
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
