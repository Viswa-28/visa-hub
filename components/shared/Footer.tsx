import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  APPROVALS_COUNT,
  CONSULAR_DISCLAIMER,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  FOOTER_LEGAL_LINKS,
  FOOTER_SERVICE_LINKS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-body-sm border-t border-white/10 pt-16 pb-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt=""
                width={1024}
                height={1024}
                className="size-11 shrink-0 rounded-lg object-cover"
              />
              <span className="font-brand text-[26px] leading-tight font-bold tracking-tight text-white">
                Visa<span className="text-secondary">Hub</span>
              </span>
            </div>
            <p className="text-body-sm max-w-sm text-white/70">
              {SITE_TAGLINE} &mdash; premier flight bookings, travel insurance,
              foreign exchange, and doorstep visa consulting.
            </p>
          </div>

          <FooterColumn title="Our Services" links={FOOTER_SERVICE_LINKS} />

          <div>
            <h4 className="text-label-md mb-3 tracking-wide text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_TEL_HREF}
                  className="hover:text-secondary flex items-center gap-2 font-bold text-white transition-colors"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-emerald-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_DEFAULT_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary flex items-center gap-2 transition-colors"
                >
                  <WhatsAppIcon
                    aria-hidden="true"
                    className="size-4 shrink-0 text-emerald-400"
                  />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="hover:text-secondary flex items-center gap-2 transition-colors"
                >
                  <Mail
                    aria-hidden="true"
                    className="size-4 shrink-0 text-sky-400"
                  />
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary flex items-center gap-2 transition-colors"
                >
                  <InstagramIcon aria-hidden="true" className="size-4 shrink-0 text-rose-400" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-8 text-[11px] text-white/60">
          {/* Legally required notice — kept at readable contrast rather than
              the muted size/colour used for the rest of this block. */}
          <p className="text-body-sm rounded-lg border border-white/15 bg-white/5 p-4 text-white/80">
            {CONSULAR_DISCLAIMER}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:justify-start">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Right padding keeps the tagline clear of the fixed WhatsApp FAB. */}
          <div className="flex flex-col items-center justify-between gap-2 pt-4 text-white/60 sm:flex-row sm:pr-20">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved. {APPROVALS_COUNT} Approvals Globally.
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
            <Link
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
