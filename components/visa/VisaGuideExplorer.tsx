"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { Search } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import {
  VISA_CATEGORY_LABELS,
  type CountryGuide,
  type VisaCategory,
} from "@/lib/visa-guide-data";

const FILTERS: { value: VisaCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "visa-free", label: VISA_CATEGORY_LABELS["visa-free"] },
  { value: "e-visa", label: VISA_CATEGORY_LABELS["e-visa"] },
  { value: "stamping", label: VISA_CATEGORY_LABELS.stamping },
];

export function VisaGuideExplorer({
  countries,
}: {
  countries: CountryGuide[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<VisaCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((country) => {
      const matchesCategory =
        category === "all" || country.category === category;
      const matchesQuery = !q || country.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [countries, query, category]);

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
        aria-label="Filter by visa category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setCategory(option.value)}
            aria-pressed={category === option.value}
            className={`text-label-md rounded-full border px-4 py-1.5 transition-colors ${
              category === option.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground/80 border-outline-variant hover:border-tertiary"
            }`}
          >
            {option.label}
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
                className="border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 relative isolate flex items-start gap-3 overflow-hidden rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2"
              >
                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 -right-8 -z-10 h-32 w-48 opacity-[0.14] blur-[2px] [mask-image:linear-gradient(to_right,transparent,black_75%)]"
                  />
                )}
                <span className="from-card via-card/85 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r to-transparent" />

                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-7 shrink-0 rounded-[2px] object-cover"
                  />
                )}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-label-lg text-primary">
                      {country.name}
                    </h3>
                    <span className="border-tertiary/25 bg-tertiary/10 text-tertiary rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase">
                      {VISA_CATEGORY_LABELS[country.category]}
                    </span>
                  </div>
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
