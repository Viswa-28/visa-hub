import Link from "next/link";
import { CalendarCheck, Car, FileSearch, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { BOOKING_HREF, whatsappHref } from "@/lib/constants";

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book",
    description: "Pick a time that suits you.",
  },
  {
    icon: Car,
    title: "We visit",
    description: "Our counselor comes to your home or office.",
  },
  {
    icon: FileSearch,
    title: "Documents reviewed",
    description: "Checked in front of you, nothing hidden.",
  },
  {
    icon: Send,
    title: "Filed",
    description: "Submitted only after you approve it.",
  },
];

const TRUST_POINTS = [
  "100% Transparent Process",
  "No Surprises",
  "Vetted Consular Specialists",
];

/**
 * Compact homepage version of the doorstep pitch. The full breakdown — pain
 * points, commitments, 5-step rail, regional banner — lives on /doorstep.
 */
export function DoorstepSteps() {
  return (
    <section
      id="doorstep-section"
      className="border-outline-variant/60 bg-surface-container-low scroll-mt-24 border-y py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="border-primary/20 bg-primary/10 text-label-caps text-primary rounded-full border px-4 py-1.5 uppercase">
            Exclusive Service
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Doorstep Visa Assistance
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            We come to you. No queues, no leave from work, no handing your
            passport to a stranger.
          </p>
        </div>

        <ol className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="border-outline-variant/60 bg-card relative rounded-xl border p-4 shadow-sm"
            >
              <span className="bg-tertiary mb-3 flex size-10 items-center justify-center rounded-lg text-white shadow-sm">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span className="text-label-caps text-tertiary block uppercase">
                Step {index + 1}
              </span>
              <h3 className="text-label-lg text-primary mt-0.5">{title}</h3>
              <p className="text-on-surface-variant mt-1 text-[12px]">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-center gap-4">
          <ul className="text-body-sm flex flex-wrap justify-center gap-x-5 gap-y-1 font-semibold text-emerald-700">
            {TRUST_POINTS.map((point) => (
              <li key={point}>&#10003; {point}</li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref(
                "Hi VisaHub, I want to book doorstep visa service",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-lg flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-emerald-500"
            >
              <WhatsAppIcon aria-hidden="true" className="size-5" />
              Schedule Doorstep Visit
            </a>
            <Link
              href={BOOKING_HREF}
              className="border-outline-variant bg-card text-primary hover:border-tertiary hover:text-tertiary text-label-lg flex items-center justify-center rounded-md border px-6 py-3 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
