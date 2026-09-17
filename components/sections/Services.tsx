import {
  Banknote,
  Building,
  HeartPulse,
  PlaneTakeoff,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { whatsappHref } from "@/lib/constants";

interface ExtraService {
  id: string;
  title: string;
  description: string;
  ctaHref: string;
  icon: LucideIcon;
}

const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "flight-tickets",
    title: "Flight Tickets",
    description: "Domestic & international flight bookings.",
    ctaHref: whatsappHref("Hi VisaHub, I want to book flight tickets"),
    icon: PlaneTakeoff,
  },
  {
    id: "dummy-tickets",
    title: "Dummy Tickets",
    description: "Embassy-compliant reservation, delivered in minutes.",
    ctaHref: whatsappHref("Hi VisaHub, I need a dummy ticket for visa"),
    icon: Ticket,
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Verified vouchers for your visa application.",
    ctaHref: whatsappHref("Hi VisaHub, I need hotel booking assistance"),
    icon: Building,
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description: "Meets Schengen's mandatory coverage requirement.",
    ctaHref: whatsappHref("Hi VisaHub, I need travel insurance"),
    icon: HeartPulse,
  },
  {
    id: "currency-exchange",
    title: "Currency Exchange",
    description: "Zero-markup rates & multi-currency forex cards.",
    ctaHref: whatsappHref("Hi VisaHub, I need currency exchange"),
    icon: Banknote,
  },
];

export function Services() {
  return (
    <section className="border-outline-variant/60 bg-surface-container-low border-y py-12" id="all-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="text-label-caps text-neutral uppercase">
            Also Available
          </span>
          <h2 className="text-headline-sm text-primary mt-1">
            Round Out Your Trip
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-1">
            Flights, dummy tickets, hotels, insurance & forex — handled
            alongside your visa, on request.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {EXTRA_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={service.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-outline-variant/60 bg-card hover:border-tertiary hover:ring-secondary/40 flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-2"
              >
                <span className="bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg text-white">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-label-md text-primary">
                  {service.title}
                </span>
                <span className="text-body-sm text-on-surface-variant">
                  {service.description}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
