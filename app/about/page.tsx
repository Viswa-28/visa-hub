import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import {
  Briefcase,
  Building2,
  ClipboardList,
  Compass,
  Eye,
  FileCheck2,
  GraduationCap,
  Handshake,
  MessagesSquare,
  Plane,
  Quote,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import { CallBanner } from "@/components/sections/CallBanner";
import { SocialProof } from "@/components/sections/SocialProof";
import {
  APPROVALS_COUNT,
  CONSULAR_DISCLAIMER,
  SITE_NAME,
} from "@/lib/constants";
import { COUNTRY_GUIDES } from "@/lib/visa-guide-data";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    "VisaHub is a Tamil Nadu-based visa consultancy built around doorstep assistance — our counselors visit you, not the other way around.",
  alternates: { canonical: "/about" },
};

/**
 * PLACEHOLDER — replace with the real Managing Director details before
 * this page goes live. Drop a photo in `public/` and set `photo` to its
 * path (e.g. "/md-photo.jpg"); leaving it null renders the icon avatar.
 */
const MANAGING_DIRECTOR = {
  name: "[Managing Director name]",
  designation: `Managing Director, ${SITE_NAME}`,
  photo: null as string | null,
  bio: [
    "[Add a short professional background here — years in the travel and visa documentation industry, the consulates and visa categories handled, and any prior roles that built this expertise.]",
    "[Add the vision behind VisaHub and the commitment made to every client.]",
  ],
  message:
    "[Add the Managing Director's message to clients — why the doorstep model was chosen, and what every client can expect when they work with VisaHub.]",
};

const SERVICES = [
  {
    icon: Compass,
    title: "Tourist Visa",
    description: "Short-stay leisure travel, family visits, and holidays.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description: "University admissions, financial proof, and study permits.",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description: "Employment-based applications and sponsorship paperwork.",
  },
  {
    icon: Building2,
    title: "Business Visa",
    description: "Meetings, conferences, and short commercial trips.",
  },
  {
    icon: Users,
    title: "Family / Dependent Visa",
    description: "Spouse, children, and dependent applications filed together.",
  },
  {
    icon: Plane,
    title: "Visit Visa",
    description: "Visiting relatives or friends living abroad.",
  },
  {
    icon: FileCheck2,
    title: "Document Assistance",
    description: "Checklists, verification, and correctly ordered files.",
  },
  {
    icon: MessagesSquare,
    title: "Visa Interview Guidance",
    description: "Mock interviews and consular question preparation.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    description: "Understand your travel purpose and requirements.",
  },
  {
    step: "02",
    title: "Visa Assessment",
    description: "Identify the appropriate visa category and requirements.",
  },
  {
    step: "03",
    title: "Document Preparation",
    description: "Help you understand and organize the required documents.",
  },
  {
    step: "04",
    title: "Application Support",
    description: "Guide you through the application and appointment process.",
  },
  {
    step: "05",
    title: "Follow-Up",
    description: "Guidance on application status and the next steps.",
  },
];

const WHY_US = [
  {
    title: "Personalized Assistance",
    description:
      "Your file is handled case by case, not run through a template.",
  },
  {
    title: "Clear Communication",
    description: "Every requirement explained in plain language, in person.",
  },
  {
    title: "Organized Documentation",
    description: "Files assembled in consular order so nothing gets queried.",
  },
  {
    title: "Professional Guidance",
    description: "Counselors who work these categories and consulates daily.",
  },
  {
    title: "Transparent Process",
    description: "You review and approve every page before it is submitted.",
  },
  {
    title: "Customer-Focused Support",
    description: "We travel to your home or office anywhere in Tamil Nadu.",
  },
];

const DESTINATION_SLUGS = [
  "usa",
  "canada",
  "uk",
  "australia",
  "schengen",
  "new-zealand",
];

const DESTINATIONS = DESTINATION_SLUGS.map(
  (slug) => COUNTRY_GUIDES.find((country) => country.slug === slug)!,
);

const STATS = [
  { value: APPROVALS_COUNT, label: "Approvals Supported" },
  { value: `${COUNTRY_GUIDES.length}+`, label: "Destinations Covered" },
  { value: "Doorstep", label: "Across Tamil Nadu" },
  { value: "24/7", label: "Direct Assistance" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary relative isolate overflow-hidden py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/hero-flight-sky.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="bg-primary/65 absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-label-caps rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-white uppercase">
            About Us
          </span>
          <h1 className="text-display-hero-mobile md:text-display-hero mt-4 text-white">
            About Visa Hub
          </h1>
          <p className="text-body-md sm:text-headline-sm mt-4 text-white/80">
            Your trusted partner for a simpler and more confident visa journey.
          </p>
        </div>
      </section>

      <Section id="who-we-are" title="Who We Are" tone="card">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-body-md text-on-surface-variant">
            {SITE_NAME} is a private travel concierge and visa documentation
            consultancy based in Tamil Nadu. We help individuals, families,
            students, and businesses apply for visas across{" "}
            {COUNTRY_GUIDES.length}+ destinations — tourist, student, work,
            business, and dependent categories alike.
          </p>
          <p className="text-body-md text-on-surface-variant">
            What makes our approach different is where the work happens. Instead
            of asking you to take leave and sit in a crowded office, our
            counselor comes to your home or workplace, verifies your original
            documents in front of you, completes the forms with your
            confirmation, and books your appointment. You stay in control of
            your own paperwork at every stage, and nothing is submitted until
            you have seen and approved it.
          </p>
        </div>
      </Section>

      <Section id="our-story" title="Our Story">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-body-md text-on-surface-variant">
            VisaHub was started for a simple reason: too many capable applicants
            were being let down by the process rather than by their profile.
            Files were handed to agents who never explained what was inside
            them, passports left home for weeks without updates, and questions
            went unanswered until it was too late to fix anything.
          </p>
          <p className="text-body-md text-on-surface-variant">
            We wanted to remove that distance entirely. By bringing the
            consultation to the client&rsquo;s own table, the paperwork stops
            being a black box — you watch your file being built, ask questions as
            they occur to you, and know exactly what has been submitted on your
            behalf.
          </p>
          <p className="text-body-md text-on-surface-variant">
            That principle still guides how we work today, and it is what we
            intend to keep scaling across Tamil Nadu: transparent, in-person visa
            assistance that treats every applicant&rsquo;s documents with the
            seriousness they deserve.
          </p>
        </div>
      </Section>

      <Section id="managing-director" title="Meet Our Managing Director" tone="card">
        <div className="border-outline-variant bg-surface-container-low mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 rounded-xl border p-6 shadow-sm sm:p-8 md:grid-cols-5">
          <div className="md:col-span-2">
            {MANAGING_DIRECTOR.photo ? (
              <Image
                src={MANAGING_DIRECTOR.photo}
                alt={MANAGING_DIRECTOR.name}
                width={640}
                height={800}
                className="border-outline-variant aspect-[4/5] w-full rounded-xl border object-cover shadow-md"
              />
            ) : (
              <div className="border-outline-variant bg-card text-neutral flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed">
                <UserRound aria-hidden="true" className="size-14 opacity-40" />
                <p className="px-4 text-center text-[11px]">
                  Managing Director photo
                </p>
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <h3 className="text-headline-sm text-primary">
              {MANAGING_DIRECTOR.name}
            </h3>
            <p className="text-label-md text-tertiary mt-1 uppercase">
              {MANAGING_DIRECTOR.designation}
            </p>
            <div className="mt-4 space-y-3">
              {MANAGING_DIRECTOR.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-body-sm text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="border-tertiary/20 bg-tertiary/5 mt-5 rounded-lg border p-4">
              <Quote
                aria-hidden="true"
                className="text-tertiary mb-2 size-5"
              />
              <p className="text-body-sm text-on-surface-variant italic">
                {MANAGING_DIRECTOR.message}
              </p>
              <footer className="text-label-md text-primary mt-2">
                &mdash; {MANAGING_DIRECTOR.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section id="mission-vision" title="Our Mission &amp; Vision">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border-outline-variant bg-card rounded-xl border p-7 shadow-sm">
            <span className="bg-tertiary mb-4 flex size-12 items-center justify-center rounded-lg text-white shadow-md">
              <Target aria-hidden="true" className="size-6" />
            </span>
            <h3 className="text-headline-sm text-primary mb-2">Our Mission</h3>
            <p className="text-body-sm text-on-surface-variant">
              To simplify the visa application journey by providing clear
              information, personalized guidance, and professional support at
              every stage.
            </p>
          </div>
          <div className="border-outline-variant bg-card rounded-xl border p-7 shadow-sm">
            <span className="bg-primary mb-4 flex size-12 items-center justify-center rounded-lg text-white shadow-md">
              <Eye aria-hidden="true" className="size-6" />
            </span>
            <h3 className="text-headline-sm text-primary mb-2">Our Vision</h3>
            <p className="text-body-sm text-on-surface-variant">
              To become a trusted visa assistance brand known for transparency,
              professionalism, and customer-focused service.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="what-we-do"
        title="What We Do"
        subtitle="The visa categories and support our counselors handle directly."
        tone="card"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-outline-variant bg-surface-container-low rounded-xl border p-5 shadow-sm"
            >
              <span className="bg-tertiary/10 text-tertiary mb-3 flex size-11 items-center justify-center rounded-lg">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-label-lg text-primary mb-1">{title}</h3>
              <p className="text-body-sm text-on-surface-variant">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="how-we-help"
        title="How We Help You"
        subtitle="A five-step process, start to finish."
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map(({ step, title, description }) => (
            <div
              key={step}
              className="border-outline-variant bg-card flex flex-col rounded-xl border p-5 shadow-sm"
            >
              <span className="text-display-hero-mobile text-tertiary/25 leading-none">
                {step}
              </span>
              <h3 className="text-label-lg text-primary mt-2 mb-1">{title}</h3>
              <p className="text-body-sm text-on-surface-variant">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="why-choose-us" title="Why Choose Visa Hub?" tone="card">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map(({ title, description }) => (
            <div
              key={title}
              className="border-outline-variant bg-surface-container-low flex gap-3 rounded-lg border p-5"
            >
              <Handshake
                aria-hidden="true"
                className="text-tertiary mt-0.5 size-5 shrink-0"
              />
              <div>
                <h3 className="text-label-lg text-primary mb-1">{title}</h3>
                <p className="text-body-sm text-on-surface-variant">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="destinations"
        title="Visa Destinations"
        subtitle={`Our most requested destinations — full guides for ${COUNTRY_GUIDES.length}+ countries are in the Visa Guide.`}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DESTINATIONS.map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            return (
              <Link
                key={country.slug}
                href={`/visa/${country.slug}`}
                className="border-outline-variant bg-card hover:border-tertiary hover:ring-secondary/40 flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2"
              >
                {Flag && (
                  <Flag
                    aria-hidden="true"
                    className="h-7 w-10 rounded-[2px] shadow-sm"
                  />
                )}
                <span className="text-label-md text-primary">
                  {country.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/visa"
            className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg inline-flex items-center gap-2 rounded-md px-6 py-3 shadow-md transition-colors"
          >
            View All {COUNTRY_GUIDES.length}+ Destinations
          </Link>
        </div>
      </Section>

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-headline-lg-mobile md:text-headline-lg text-secondary">
                  {value}
                </p>
                <p className="text-label-md mt-1 text-white/70 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />

      <Section id="transparency" title="Transparency Notice" tone="card">
        <div className="border-outline-variant bg-surface-container-low mx-auto max-w-3xl rounded-xl border p-6">
          <div className="text-on-surface-variant mb-3 flex items-center gap-2">
            <ClipboardList aria-hidden="true" className="text-tertiary size-5" />
            <span className="text-label-md text-primary uppercase">
              Important
            </span>
          </div>
          <p className="text-body-sm text-on-surface-variant">
            Visa decisions are made solely by the relevant embassy, consulate,
            immigration authority, or government department. {SITE_NAME}{" "}
            provides assistance and guidance but does not guarantee visa
            approval.
          </p>
          <p className="text-neutral mt-4 border-t border-dashed pt-4 text-[11px]">
            {CONSULAR_DISCLAIMER}
          </p>
        </div>
      </Section>

      <section id="get-started" className="bg-surface-container-low scroll-mt-24 pt-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="text-body-md text-on-surface-variant mt-3">
            Have questions about your visa? Our team is here to help you
            understand the process and prepare for the next step.
          </p>
        </div>
        <CallBanner />
      </section>
    </>
  );
}

function Section({
  id,
  title,
  subtitle,
  tone = "default",
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "card";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 ${
        tone === "card" ? "bg-card" : "bg-surface-container-low"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-md text-on-surface-variant mt-3">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
