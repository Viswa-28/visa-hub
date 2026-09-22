"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { Search } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import type { CountryGuide } from "@/lib/visa-guide-data";

const REGIONS = [
  "All",
  "Asia",
  "Europe",
  "North America",
  "Middle East",
  "Africa",
  "Oceania",
  "South America",
] as const;

export function VisaGuideExplorer({
  countries,
}: {
  countries: CountryGuide[];
}) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((country) => {
      const matchesRegion = region === "All" || country.region === region;
      const matchesQuery = !q || country.name.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [countries, query, region]);

  return (
    <div>
      <div className="mx-auto mb-8 max-w-xl">
        <div className="border-outline-variant bg-card flex items-center gap-2 rounded-full border p-1.5 pl-5 shadow-sm">
          <Search aria-hidden="true" className="text-neutral size-5 shrink-0" />
          <label htmlFor="visa-guide-search" className="sr-only">
            Search destinations
          </label>
          <input
            id="visa-guide-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a destination…"
            className="text-body-sm min-w-0 flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter by region"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {REGIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setRegion(option)}
            aria-pressed={region === option}
            className={`text-label-md rounded-full border px-4 py-1.5 transition-colors ${
              region === option
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground/80 border-outline-variant hover:border-tertiary"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-body-md text-neutral py-12 text-center">
          No destinations match &ldquo;{query}&rdquo;. Try another search or{" "}
          <a
            href={whatsappHref(
              query.trim()
                ? `Hi VisaHub, I'd like to ask about a visa for ${query.trim()}`
                : "Hi VisaHub, I'd like to ask about a visa destination",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary underline"
          >
            ask us directly
          </a>
          .
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            return (
              <Link
                key={country.slug}
                href={`/visa/${country.slug}`}
                className="border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 flex items-start gap-3 rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2"
              >
                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-7 shrink-0 rounded-[2px] object-cover"
                  />
                )}
                <div>
                  <h3 className="text-label-lg text-primary">
                    {country.name}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant mt-0.5">
                    {country.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
