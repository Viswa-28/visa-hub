"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import { ALL_COUNTRIES } from "@/lib/all-countries";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

const SCHENGEN_CODES = new Set([
  "AT", "BE", "HR", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS",
  "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "SK", "SI",
  "ES", "SE", "CH",
]);

/**
 * What people actually type vs what the data calls the country. Without these
 * "usa" and "uk" return nothing at all — despite being the two examples in the
 * placeholder — because the list stores "United States" and "United Kingdom".
 */
const ALIASES: Record<string, string[]> = {
  "United States": ["usa", "us", "america", "united states of america"],
  "United Kingdom": ["uk", "britain", "great britain", "england"],
  "United Arab Emirates": ["uae", "dubai", "abu dhabi"],
  Netherlands: ["holland"],
  "South Korea": ["korea"],
  "Czech Republic": ["czechia"],
  Myanmar: ["burma"],
  "Sri Lanka": ["ceylon"],
};

/**
 * Every country gets a destination: the 40 with a guide route there, the rest
 * open a pre-filled WhatsApp enquiry. Built from name/code data only — the
 * flag icon library must stay out of this client component, it costs ~57kB.
 */
const SEARCHABLE = (() => {
  const slugByCode: Record<string, string> = {};
  for (const guide of COUNTRY_GUIDES) {
    if (guide.code !== "EU") slugByCode[guide.code] = guide.slug;
  }
  for (const code of SCHENGEN_CODES) slugByCode[code] = "schengen";

  const countries = ALL_COUNTRIES.map((country) => ({
    name: country.name,
    slug: slugByCode[country.code] ?? null,
    aliases: ALIASES[country.name] ?? [],
  }));

  // "Schengen" isn't a country, but it's a guide people search for by name.
  const schengen = COUNTRY_GUIDES.find((g) => g.slug === "schengen");
  if (schengen) {
    countries.push({
      name: schengen.name,
      slug: schengen.slug,
      aliases: ["schengen", "europe", "eu"],
    });
  }

  return countries;
})();

export function HeroSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    // Ranked in three tiers. An exact alias has to outrank a name prefix,
    // otherwise "uk" surfaces Ukraine above the United Kingdom.
    const exactAlias: typeof SEARCHABLE = [];
    const starts: typeof SEARCHABLE = [];
    const contains: typeof SEARCHABLE = [];

    for (const country of SEARCHABLE) {
      const name = country.name.toLowerCase();
      if (country.aliases.includes(q)) exactAlias.push(country);
      else if (name.startsWith(q) || country.aliases.some((a) => a.startsWith(q)))
        starts.push(country);
      else if (name.includes(q)) contains.push(country);
    }

    return [...exactAlias, ...starts, ...contains].slice(0, 7);
  }, [query]);

  const openCountry = (country: (typeof SEARCHABLE)[number]) => {
    setIsFocused(false);
    if (country.slug) {
      router.push(`/visa/${country.slug}`);
      return;
    }
    window.open(
      whatsappHref(
        `Hi VisaHub, I would like to inquire about a visa for ${country.name}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (matches.length > 0) {
      openCountry(matches[0]);
      return;
    }
    const trimmed = query.trim();
    const message = trimmed
      ? `Hi VisaHub, I would like to inquire about a visa for ${trimmed}`
      : "Hi VisaHub, I would like to inquire about visa assistance";
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-white/40 bg-white/95 p-1.5 pl-5 shadow-lg"
      >
        <Search aria-hidden="true" className="text-neutral size-5 shrink-0" />
        <label htmlFor="hero-country-search" className="sr-only">
          Search your visa by country
        </label>
        <input
          id="hero-country-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Search any of 195 countries — e.g. USA, Canada, UK…"
          autoComplete="off"
          suppressHydrationWarning
          className="text-body-sm text-foreground placeholder:text-neutral min-w-0 flex-1 bg-transparent outline-none"
        />
        <button
          type="submit"
          className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 text-label-md shrink-0 rounded-full px-5 py-2.5 transition-colors"
        >
          Search
        </button>
      </form>

      {isFocused && matches.length > 0 && (
        <ul className="border-outline-variant bg-card absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl border shadow-lg">
          {matches.map((country) => (
            <li key={country.name}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => openCountry(country)}
                className="hover:bg-surface-container-low text-label-md text-foreground flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors"
              >
                <span className="min-w-0 truncate">{country.name}</span>
                <span className="text-neutral text-body-sm shrink-0">
                  {country.slug ? "View guide →" : "Ask on WhatsApp →"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
