import { MessageCircle, PhoneCall } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";

export function CallBanner() {
  return (
    <section className="bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-tertiary/30 from-tertiary/5 via-card to-secondary/5 flex flex-col items-center justify-between gap-8 rounded-xl border-2 bg-gradient-to-r p-6 shadow-lg sm:p-10 lg:flex-row">
          <div className="flex items-center gap-5 text-center lg:text-left">
            <span className="bg-primary hidden size-16 shrink-0 items-center justify-center rounded-xl text-white shadow-lg sm:flex">
              <PhoneCall aria-hidden="true" className="size-8" />
            </span>
            <div>
              <span className="text-label-caps text-tertiary tracking-wide uppercase">
                Call Us Now &bull; We&rsquo;re Here to Help!
              </span>
              <h3 className="text-headline-md text-primary sm:text-headline-lg">
                Call / WhatsApp:{" "}
                <span className="text-tertiary">{PHONE_DISPLAY}</span>
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1 font-semibold">
                Let&rsquo;s turn your{" "}
                <span className="text-primary font-extrabold uppercase">
                  dream trip
                </span>{" "}
                into{" "}
                <span className="text-tertiary font-extrabold uppercase">
                  reality!
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PHONE_TEL_HREF}
              className="bg-primary text-label-lg text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-md px-6 py-3.5 shadow-md transition-colors"
            >
              <PhoneCall aria-hidden="true" className="size-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_DEFAULT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-lg flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3.5 text-white shadow-md transition-colors hover:bg-emerald-500"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
