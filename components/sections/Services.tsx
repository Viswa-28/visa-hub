import {
  Banknote,
  Building,
  HeartPulse,
  PlaneTakeoff,
  ShieldCheck,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { GraduationCap, Headset, Users } from "lucide-react";
import { whatsappHref } from "@/lib/constants";
import type { ServiceCard } from "@/lib/types";

const SERVICES: (ServiceCard & { icon: LucideIcon })[] = [
  {
    id: "flight-tickets",
    index: 1,
    title: "Flight Tickets",
    description:
      "Domestic & international flight bookings at the best prices with real-time seat availability and flexible baggage allowances.",
    bullets: [
      "Exclusive discounted airline deals",
      "Zero cancellation fee options",
    ],
    footerLabel: "Best Price Guarantee",
    ctaLabel: "Inquire Now",
    ctaHref: whatsappHref("Hi VisaHub, I want to book flight tickets"),
    icon: PlaneTakeoff,
  },
  {
    id: "dummy-tickets",
    index: 2,
    title: "Dummy Tickets",
    description:
      "Valid & verifiable dummy tickets / flight reservation itinerary for smooth visa applications without spending on full tickets.",
    bullets: [
      "100% embassy-compliant with live PNR",
      "Instant delivery within 15 minutes",
    ],
    footerLabel: "Valid PNR Itinerary",
    ctaLabel: "Get Dummy Ticket",
    ctaHref: whatsappHref("Hi VisaHub, I need a dummy ticket for visa"),
    icon: Ticket,
  },
  {
    id: "visa-services",
    index: 3,
    title: "Visa Services",
    description:
      "Tourist, Business, Study & Work Visas (USA, Canada, UK, Schengen, Australia & New Zealand) — we make the process easy for you.",
    bullets: [
      "DS-160, VFS & biometrics scheduling",
      "Doorstep home/office assistance",
    ],
    footerLabel: "31k+ Approvals",
    ctaLabel: "Apply Visa",
    ctaHref: "#doorstep-section",
    icon: ShieldCheck,
  },
  {
    id: "hotel-booking",
    index: 4,
    title: "Hotel Booking",
    description:
      "Wide range of hotels worldwide at competitive rates. Verified hotel reservation vouchers compliant for visa applications.",
    bullets: [
      "Free cancellation options available",
      "Budget, boutique & 5-star properties",
    ],
    footerLabel: "Worldwide Stays",
    ctaLabel: "Book Hotel",
    ctaHref: whatsappHref("Hi VisaHub, I need hotel booking assistance"),
    icon: Building,
  },
  {
    id: "travel-insurance",
    index: 5,
    title: "Travel Insurance",
    description:
      "Stay protected on your journey with reliable travel insurance plans providing medical, baggage loss, and trip cancellation coverage.",
    bullets: [
      "Schengen-mandatory €30k coverage",
      "Cashless hospital network worldwide",
    ],
    footerLabel: "Instant Policy Delivery",
    ctaLabel: "Get Insurance",
    ctaHref: whatsappHref("Hi VisaHub, I need travel insurance"),
    icon: HeartPulse,
  },
  {
    id: "currency-exchange",
    index: 6,
    title: "Currency Exchange",
    description:
      "Best exchange rates for major currencies (USD, EUR, GBP, CAD, AUD) with safe, secure transactions and prepaid forex card assistance.",
    bullets: ["Zero markup rate alerts", "Cash & multi-currency forex cards"],
    footerLabel: "Secure Forex Solutions",
    ctaLabel: "Exchange Rates",
    ctaHref: whatsappHref("Hi VisaHub, I need currency exchange"),
    icon: Banknote,
  },
];

const TRUST_MARKERS = [
  { icon: ShieldCheck, label: "Best Prices Guaranteed" },
  { icon: Headset, label: "24×7 Support" },
  { icon: GraduationCap, label: "Study & Work Experts" },
  { icon: Users, label: "Trusted by Thousands" },
];

export function Services() {
  return (
    <section className="bg-card py-20" id="all-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-4 py-1.5 uppercase">
            Our Services
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            All Your Travel Needs Handled Seamlessly Under One Roof
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            From flight bookings and verifiable dummy tickets to comprehensive
            visa consulting, hotels, and foreign exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>

        <div className="bg-primary mt-12 rounded-xl p-6 shadow-xl sm:p-7">
          <div className="divide-outline-variant/20 grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:divide-x">
            {TRUST_MARKERS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 px-2"
              >
                <Icon
                  aria-hidden="true"
                  className="text-secondary mb-1 size-7"
                />
                <span className="text-label-md tracking-wide text-white uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  service,
}: {
  service: ServiceCard & { icon: LucideIcon };
}) {
  const { icon: Icon } = service;
  const isExternal = service.ctaHref.startsWith("http");

  return (
    <article className="group border-outline-variant/60 bg-surface-container-low hover:border-tertiary hover:ring-secondary/40 flex flex-col justify-between rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <span className="bg-primary flex size-12 shrink-0 items-center justify-center rounded-lg text-white shadow-md transition-transform group-hover:scale-105">
            <Icon aria-hidden="true" className="size-6" />
          </span>
          <div>
            <span className="text-label-caps text-tertiary tracking-wide uppercase">
              Service {String(service.index).padStart(2, "0")}
            </span>
            <h3 className="text-headline-sm text-primary">{service.title}</h3>
          </div>
        </div>
        <p className="text-body-sm text-on-surface-variant mb-4">
          {service.description}
        </p>
        <ul className="text-body-sm text-on-surface-variant mb-4 space-y-1.5">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span aria-hidden="true" className="font-bold text-emerald-600">
                &#10003;
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-outline-variant/60 flex items-center justify-between border-t pt-3">
        <span className="text-label-md text-foreground/80">
          {service.footerLabel}
        </span>
        <a
          href={service.ctaHref}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-label-md text-tertiary hover:text-primary flex items-center gap-1 transition-colors"
        >
          {service.ctaLabel} &rarr;
        </a>
      </div>
    </article>
  );
}
