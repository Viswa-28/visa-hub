"use client";

import { useEffect, useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY_SHORT, PHONE_TEL_HREF, SITE_TAGLINE } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`glass-nav sticky top-0 z-40 transition-[height,box-shadow] duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 md:h-20 lg:px-8">
        <a href="#main-content" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-xl text-lg font-black"
          >
            VH
          </span>
          <span className="min-w-0">
            <span className="text-headline-sm text-primary block truncate">
              Visa<span className="text-tertiary">Hub</span>
            </span>
            <span className="text-label-md text-neutral hidden truncate tracking-wide uppercase sm:block">
              {SITE_TAGLINE}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_TEL_HREF}
            className="text-label-md hidden items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 transition-colors hover:bg-emerald-100 sm:flex"
          >
            <PhoneCall aria-hidden="true" className="size-4" />
            {PHONE_DISPLAY_SHORT}
          </a>
          <Button className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90" size="lg">
            <a href="#doorstep-section" className="flex items-center gap-1.5">
              <span className="sm:hidden">Book Visit</span>
              <span className="hidden sm:inline">Book Doorstep Visit</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
