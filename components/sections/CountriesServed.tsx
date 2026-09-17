import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { COUNTRIES_SERVED } from "@/lib/constants";

const CODE_TO_GUIDE_SLUG: Record<string, string> = {
  US: "usa",
  CA: "canada",
  GB: "uk",
  AU: "australia",
  NZ: "new-zealand",
};

function guideSlugFor(code: string) {
  return CODE_TO_GUIDE_SLUG[code] ?? "schengen";
}

export function CountriesServed() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Countries We Serve
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            {COUNTRIES_SERVED.length} Destinations, One Trusted Partner
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            USA, Canada, UK, Australia &amp; New Zealand, plus every Schengen
            member state — tap any flag for the full visa guide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {COUNTRIES_SERVED.map((country) => {
            const Flag = Flags[country.code];
            return (
              <Link
                key={country.name}
                href={`/visa/${guideSlugFor(country.code)}`}
                className="border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 flex items-center gap-2.5 rounded-lg border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2"
              >
                <Flag
                  aria-hidden="true"
                  className="h-4 w-6 shrink-0 rounded-[2px] object-cover"
                />
                <span className="text-label-md text-foreground/80 truncate">
                  {country.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
