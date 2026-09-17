import Image from "next/image";
import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import {
  APPROVALS_COUNT,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";

const STATS = [
  { value: APPROVALS_COUNT, label: "Approved Visas" },
  { value: "100%", label: "Transparent Process" },
  { value: "Doorstep", label: "Home / Office Visits" },
  { value: "24/7", label: "Direct Assistance" },
] as const;

export function Hero() {
  return (
    <section className="bg-primary relative isolate overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/hero-flight-sky.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Uniform navy scrim so text stays legible everywhere over the
            photo — over sky, cloud, or the plane itself — rather than
            relying on a shape that only protects one zone. */}
        <div className="bg-primary/55 absolute inset-0" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="bg-tertiary text-label-caps text-tertiary-foreground rounded-full px-4 py-1.5 uppercase shadow-sm">
            &#9733; Travel Smart, Travel Easy!
          </span>
          <span className="text-label-md text-primary flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-1.5 shadow-sm">
            <ShieldCheck aria-hidden="true" className="text-tertiary size-4" />
            Your Journey, Our Expertise!
          </span>
          <span className="text-label-md flex items-center gap-2 rounded-full border border-emerald-400/40 bg-white/90 px-3.5 py-1.5 text-emerald-700 shadow-sm">
            <span
              aria-hidden="true"
              className="animate-pulse-glow h-2 w-2 rounded-full bg-emerald-500"
            />
            {APPROVALS_COUNT} Approvals Globally
          </span>
        </div>

        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="text-label-md text-secondary mb-2 tracking-wide uppercase">
            One Destination, All Your Travel Needs!
          </p>
          <h1 className="text-display-hero-mobile md:text-display-hero mb-4 text-white">
            Hassle-Free Travel &amp; Doorstep{" "}
            <span className="text-secondary">
              Visa Services Under One Roof
            </span>
          </h1>
          <p className="text-body-md sm:text-body-lg mx-auto max-w-2xl text-white/85">
            From international flights, dummy tickets, and worldwide hotels to
            complete doorstep visa application filing with 100% transparent
            process.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_DEFAULT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-7 py-3.5 text-label-lg text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-500 sm:w-auto"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Chat on WhatsApp
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="text-primary flex w-full items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-label-lg shadow-lg transition-colors hover:bg-white/90 sm:w-auto"
          >
            <PhoneCall aria-hidden="true" className="size-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/30 bg-white/10 p-4 backdrop-blur-sm"
            >
              <p className="text-headline-sm text-white">{stat.value}</p>
              <p className="text-label-md text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
