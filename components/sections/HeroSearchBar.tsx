"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

export function HeroSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return COUNTRY_GUIDES.filter((country) =>
      country.name.toLowerCase().includes(q),
    ).slice(0, 6);
  }, [query]);

  const goToCountry = (slug: string) => {
    setIsFocused(false);
    router.push(`/visa/${slug}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (matches.length > 0) {
      goToCountry(matches[0].slug);
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
          placeholder="Search your visa by country — e.g. USA, Canada, UK…"
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
            <li key={country.slug}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => goToCountry(country.slug)}
                className="hover:bg-surface-container-low text-label-md text-foreground flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors"
              >
                {country.name}
                <span className="text-neutral text-body-sm">
                  View guide &rarr;
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
