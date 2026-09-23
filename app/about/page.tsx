import type { Metadata } from "next";
import { Home, MapPinned, ShieldCheck, Users } from "lucide-react";
import { CallBanner } from "@/components/sections/CallBanner";
import {
  APPROVALS_COUNT,
  CONSULAR_DISCLAIMER,
  SITE_NAME,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    "VisaHub is a Tamil Nadu-based visa consultancy built around doorstep assistance — our counselors visit you, not the other way around.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Home,
    title: "Doorstep First",
    description:
      "Our core service is built around visiting you at your home or office — not a counter you have to travel to.",
  },
  {
    icon: ShieldCheck,
    title: "Documentation Accuracy",
    description:
      "We review every document with you, face-to-face, before anything is submitted — the biggest factor within an applicant's control.",
  },
  {
    icon: Users,
    title: "No Hidden Charges",
    description:
      "Our service fee is quoted upfront during your doorstep visit, kept separate from official government/consular fees.",
  },
  {
    icon: MapPinned,
    title: "Tamil Nadu Coverage",
    description:
      "Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Vellore, and surrounding districts, plus corporate on-site visits.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            About Us
          </span>
          <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Visa Consulting, Brought to Your Doorstep
          </h1>
          <p className="text-body-md text-on-surface-variant mx-auto mt-3 max-w-2xl">
            {SITE_NAME} is a private travel concierge and documentation
            consultancy built for people who don&rsquo;t have time to sit in a
            waiting room. Instead of you coming to us, our counselor comes to
            you — reviews your documents in person, files your application,
            and stays with you through to your consular appointment. We&rsquo;ve
            supported {APPROVALS_COUNT} approvals across the destinations we
            serve, built on the same principle every time: careful,
            in-person, document-first preparation.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-outline-variant bg-card rounded-xl border p-6 shadow-sm"
            >
              <span className="bg-tertiary mb-4 flex size-11 items-center justify-center rounded-lg text-white shadow-md">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h2 className="text-label-lg text-primary mb-1">{title}</h2>
              <p className="text-body-sm text-on-surface-variant">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-neutral border-outline-variant/60 rounded-lg border p-5 text-center text-[11px]">
          {CONSULAR_DISCLAIMER}
        </p>
      </div>

      <div className="mt-16">
        <CallBanner />
      </div>
    </div>
  );
}
