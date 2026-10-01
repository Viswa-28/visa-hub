"use client";

import { useEffect } from "react";
import { PhoneCall, RotateCcw } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[route error]", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="bg-surface-container-low flex min-h-screen items-center py-20"
    >
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
          Something went wrong
        </h1>
        <p className="text-body-md text-on-surface-variant mt-3">
          Sorry — this page didn&rsquo;t load properly. You can try again, or
          reach us directly and we&rsquo;ll help straight away.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg flex items-center gap-2 rounded-md px-6 py-3 shadow-md transition-colors"
          >
            <RotateCcw aria-hidden="true" className="size-5" />
            Try again
          </button>
          <a
            href={WHATSAPP_DEFAULT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-lg flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-emerald-500"
          >
            <WhatsAppIcon aria-hidden="true" className="size-5" />
            WhatsApp Us
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="text-label-lg border-outline-variant bg-card text-primary hover:border-tertiary flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
          >
            <PhoneCall aria-hidden="true" className="size-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}
