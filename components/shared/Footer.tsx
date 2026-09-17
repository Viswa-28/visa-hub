import { Phone } from "lucide-react";
import {
  CONSULAR_DISCLAIMER,
  FOOTER_DOORSTEP_LINKS,
  FOOTER_GLOBAL_VISA_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SERVICE_LINKS,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-body-sm border-t border-white/10 pt-16 pb-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="text-primary flex size-10 items-center justify-center rounded-xl bg-white text-sm font-black"
              >
                VH
              </span>
              <span className="text-headline-sm text-white">
                Visa<span className="text-secondary">Hub</span>
              </span>
            </div>
            <p className="text-body-sm max-w-sm text-white/70">
              {SITE_TAGLINE} Premier flight bookings, dummy tickets, travel
              insurance, foreign exchange, and doorstep visa consulting.
            </p>
            <div className="pt-2">
              <a
                href={PHONE_TEL_HREF}
                className="hover:text-secondary flex items-center gap-2 font-bold text-white transition-colors"
              >
                <Phone aria-hidden="true" className="size-4 text-emerald-400" />
                Call / WhatsApp: {PHONE_DISPLAY}
              </a>
              <p className="mt-1 text-[11px] text-white/50">
                Instagram: {INSTAGRAM_HANDLE}
              </p>
            </div>
          </div>

          <FooterColumn
            title="Our Core Services"
            links={FOOTER_SERVICE_LINKS}
          />
          <FooterColumn
            title="Doorstep Assistance"
            links={FOOTER_DOORSTEP_LINKS}
          />
          <FooterColumn title="Global Visas" links={FOOTER_GLOBAL_VISA_LINKS} />
        </div>

        <div className="space-y-4 pt-8 text-[11px] text-white/50">
          <p>{CONSULAR_DISCLAIMER}</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:justify-start">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-between gap-2 pt-4 text-white/60 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved. 31k+ Approvals Globally.
            </p>
            <p className="font-medium">{SITE_TAGLINE}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-label-md mb-3 tracking-wide text-white uppercase">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
