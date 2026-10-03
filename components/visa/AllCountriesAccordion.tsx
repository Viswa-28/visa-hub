import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { ChevronDown } from "lucide-react";
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

function CountryTile({ country }: { country: WorldCountry }) {
  const Flag = Flags[country.code as keyof typeof Flags];
  const guideSlug = GUIDE_SLUG_BY_CODE[country.code];
  const className =
    "border-outline-variant/60 bg-card hover:border-tertiary flex items-center gap-2.5 rounded-lg border p-2.5 transition-colors";

  const content = (
    <>
      {Flag && (
        <Flag
          aria-hidden="true"
          className="ring-outline-variant/40 h-4 w-6 shrink-0 rounded-[2px] object-cover ring-1"
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

  return guideSlug ? (
    <Link href={`/visa/${guideSlug}`} className={className}>
      {content}
    </Link>
  ) : (
    <a
      href={whatsappHref(
        `Hi VisaHub, I would like to inquire about a visa for ${country.name}`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}

/**
 * All 195 countries, collapsed by continent. Native <details> so this costs
 * zero client JS, and the flag library stays server-side — importing it into a
 * client component previously added ~57kB to the bundle.
 */
export function AllCountriesAccordion() {
  const regions = getCountriesByRegion();

  return (
    <section id="all-countries" className="scroll-mt-24">
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <h2 className="text-headline-md text-primary sm:text-headline-lg">
          All {ALL_COUNTRIES.length} Countries We Serve
        </h2>
        <p className="text-body-sm text-on-surface-variant mt-2">
          Destinations marked{" "}
          <span className="text-tertiary font-semibold">Guide</span> have a full
          breakdown. For any other country, message us and we&rsquo;ll walk you
          through it.
        </p>
      </div>

      <div className="space-y-3">
        {regions.map((region) => (
          <details
            key={region.name}
            className="border-outline-variant bg-card group rounded-xl border"
          >
            <summary className="text-label-lg text-primary flex cursor-pointer list-none items-center justify-between gap-3 p-4 marker:content-['']">
              <span>
                {region.name}
                <span className="text-neutral ml-2 text-[12px] font-normal">
                  {region.countries.length} countries
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className="text-neutral size-5 shrink-0 transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="grid grid-cols-2 gap-2 px-4 pb-4 sm:grid-cols-3 lg:grid-cols-5">
              {region.countries.map((country) => (
                <CountryTile key={country.code} country={country} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
