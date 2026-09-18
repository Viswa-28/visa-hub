import {
  Calendar,
  CalendarCheck,
  Car,
  ClipboardCheck,
  Eye,
  FileEdit,
  FileSearch,
  Handshake,
  Hourglass,
  MapPin,
  ShieldQuestion,
  UserCheck,
} from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import type { ProcessStep } from "@/lib/types";

const CHALLENGES = [
  {
    icon: ShieldQuestion,
    title: "Unsure whom to trust?",
    description:
      "Worried about fraudulent agents or mishandled original passports?",
  },
  {
    icon: Car,
    title: "No time to visit an office?",
    description:
      "Tired of travelling in traffic to sit in crowded visa waiting rooms?",
  },
  {
    icon: Hourglass,
    title: "Busy schedule at work?",
    description:
      "Can’t take leave from work or disrupt your business schedule?",
  },
];

const COMMITMENTS = [
  {
    icon: ClipboardCheck,
    title: "100% Transparent Process",
    description: "Everything prepared right before your eyes.",
  },
  {
    icon: Eye,
    title: "No Surprises",
    description: "Every step explained and confirmed with you upfront.",
  },
  {
    icon: Handshake,
    title: "Professional & Reliable",
    description: "Vetted consular specialists with years of expertise.",
  },
];

const PROCESS_STEPS: (ProcessStep & { icon: typeof FileSearch })[] = [
  {
    step: 1,
    title: "Document Verification",
    description: "Checking passport, financial ties, and eligibility criteria.",
    icon: FileSearch,
  },
  {
    step: 2,
    title: "Visa Application Filing",
    description: "Meticulous DS-160 / embassy form completion by our staff.",
    icon: FileEdit,
  },
  {
    step: 3,
    title: "Appointment Booking",
    description: "Securing the earliest biometric & consular interview dates.",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Your Approval Before Submission",
    description: "You review and approve each page before any submission.",
    icon: UserCheck,
  },
  {
    step: 5,
    title: "Complete Guidance Till Visa",
    description: "Mock interviews, document docketing & passport dispatch.",
    icon: CalendarCheck,
  },
];

export function Doorstep() {
  return (
    <section
      className="border-outline-variant/60 bg-surface-container-low border-y py-20"
      id="doorstep-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="border-primary/20 bg-primary/10 text-label-caps text-primary rounded-full border px-4 py-1.5 uppercase">
            Exclusive Service
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-display-hero-mobile mt-3">
            Doorstep Visa Assistance
          </h2>
          <p className="text-headline-sm text-tertiary mt-2">
            We Come to You, You Get Ready to Travel!
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="bg-primary relative flex flex-col justify-between overflow-hidden rounded-xl p-7 text-white shadow-xl sm:p-9 lg:col-span-5">
            <div>
              <span className="text-label-caps mb-2 block tracking-wide text-rose-300 uppercase">
                Common Challenges
              </span>
              <h3 className="text-headline-md mb-6 text-white">
                Need a Visa But Have Trust Issues?
              </h3>
              <div className="space-y-4">
                {CHALLENGES.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-3.5"
                  >
                    <span className="bg-secondary/20 text-secondary flex size-10 shrink-0 items-center justify-center rounded-md">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-label-lg text-white">{title}</h4>
                      <p className="text-body-sm text-white/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-label-md text-white uppercase">
                    We Come to Your Home or Office
                  </p>
                  <p className="text-[11px] text-white/60">
                    Sit back and relax while our experts visit you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-outline-variant bg-card flex flex-col justify-between rounded-xl border p-7 shadow-md sm:p-9 lg:col-span-7">
            <div>
              <div className="bg-tertiary/10 text-label-md text-tertiary mb-3 inline-flex items-center gap-2 rounded-md px-3 py-1 uppercase">
                <span className="bg-tertiary h-2 w-2 rounded-full" />
                VisaHub is Here to Help!
              </div>
              <h3 className="text-headline-md text-primary sm:text-headline-lg mb-4">
                Professional In-Person Consular Support Right At Your Door
              </h3>
              <p className="text-body-sm text-on-surface-variant sm:text-body-md mb-8">
                Our professional staff will visit your home or office and
                provide complete visa assistance with a{" "}
                <strong className="text-primary font-bold">
                  hassle-free and stress-free experience
                </strong>
                . We review your credentials in front of you, explain every
                question on your application, and submit with your full
                confidence.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {COMMITMENTS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="border-tertiary/15 bg-tertiary/5 rounded-lg border p-4 text-center"
                  >
                    <span className="bg-tertiary mx-auto mb-3 flex size-12 items-center justify-center rounded-lg text-white shadow-md">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <h4 className="text-label-md text-primary mb-1 uppercase">
                      {title}
                    </h4>
                    <p className="text-on-surface-variant text-[11px]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-outline-variant/60 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
              <p className="text-body-sm text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold">
                <span className="text-emerald-600">&#10003; Hassle-Free</span>
                <span className="text-emerald-600">&#10003; Stress-Free</span>
                <span className="text-emerald-600">
                  &#10003; Safe &amp; Secure
                </span>
              </p>
              <a
                href={whatsappHref(
                  "Hi VisaHub, I want to book doorstep visa service",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary text-label-lg text-tertiary-foreground hover:bg-tertiary/90 rounded-md px-5 py-2.5 shadow-md transition-colors"
              >
                Schedule Doorstep Visit &rarr;
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-outline-variant/60 bg-card mb-10 rounded-xl border p-6 shadow-sm sm:p-8"
          id="process"
        >
          <div className="mb-8 text-center">
            <span className="bg-primary text-label-caps rounded-full px-3.5 py-1 text-white uppercase">
              Our Process
            </span>
            <h3 className="text-headline-md text-primary sm:text-headline-lg mt-2">
              5-Step Seamless Doorstep Execution
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {PROCESS_STEPS.map(({ step, title, description, icon: Icon }) => (
              <div
                key={step}
                className="border-outline-variant/60 bg-surface-container-low flex flex-col items-center rounded-lg border p-4 text-center"
              >
                <span className="bg-tertiary mb-3 flex size-12 items-center justify-center rounded-lg text-white shadow-md">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <span className="text-label-caps text-tertiary mb-1 uppercase">
                  Step {String(step).padStart(2, "0")}
                </span>
                <h4 className="text-label-lg text-primary mb-1">{title}</h4>
                <p className="text-on-surface-variant text-[11px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="from-primary via-primary to-tertiary flex flex-col items-center justify-between gap-6 rounded-xl bg-gradient-to-r p-6 text-white shadow-xl sm:p-8 md:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
              <MapPin aria-hidden="true" className="text-secondary size-8" />
            </span>
            <div>
              <span className="text-label-caps text-secondary tracking-wide uppercase">
                Regional &amp; Corporate Availability
              </span>
              <h3 className="text-headline-sm sm:text-headline-md text-white">
                This Service is Available for Tamil Nadu Clients
              </h3>
              <p className="text-body-sm mt-1 text-white/70">
                Covering <strong>all cities &amp; districts</strong> (Chennai,
                Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Vellore, etc.).
                Corporate and organizational bookings welcome at your doorstep.
              </p>
            </div>
          </div>
          <a
            href={whatsappHref(
              "Hi VisaHub, I am from Tamil Nadu and need doorstep visa service",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-lg text-primary shrink-0 rounded-md bg-white px-6 py-3.5 text-center shadow-lg transition-colors hover:bg-white/90"
          >
            Book Doorstep Visit
          </a>
        </div>
      </div>
    </section>
  );
}
