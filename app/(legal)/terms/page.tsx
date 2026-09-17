import type { Metadata } from "next";
import { CONSULAR_DISCLAIMER, SITE_NAME, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description: `The terms governing visa consultancy, doorstep assistance, flight, dummy ticket, hotel, and insurance services provided by ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
          Terms &amp; Conditions
        </h1>
        <p className="text-body-sm text-neutral mt-2">
          Last updated: January 2026
        </p>
      </header>

      <Section title="Our Role">
        <p>{CONSULAR_DISCLAIMER}</p>
      </Section>

      <Section title="No Guarantee of Approval">
        <p>
          We prepare, review, and file your application to the best
          professional standard, and coach you for interviews where
          applicable. However, the final decision to approve or reject any
          visa, ESTA, or e-Visa application rests entirely with the
          consulate, embassy, or immigration authority of the destination
          country. Fees paid for our filing and concierge services are
          non-refundable once filing has begun, regardless of outcome.
        </p>
      </Section>

      <Section title="Fees & Payment">
        <p>
          Consular/government fees (e.g. MRV fees) are collected on behalf
          of, and paid directly to, the relevant government or consular
          authority at the rate they set at the time of filing. Our
          concierge and doorstep service fees are quoted separately and
          confirmed with you in writing (message or email) before any work
          begins. Figures shown on this website are illustrative estimates,
          not final invoices.
        </p>
      </Section>

      <Section title="Dummy Tickets & Hotel Vouchers">
        <p>
          Dummy tickets and hotel reservation vouchers are provided solely
          to support your visa application and are not valid for actual
          travel or check-in unless separately confirmed and paid for as a
          real booking.
        </p>
      </Section>

      <Section title="Doorstep Visits">
        <p>
          Doorstep appointments are scheduled subject to staff availability
          in your city or district. We reserve the right to reschedule a
          visit with reasonable notice in case of unforeseen circumstances.
        </p>
      </Section>

      <Section title="Cancellations">
        <p>
          You may cancel a service request at any time before filing begins
          for a full refund of concierge fees. Once an application has been
          submitted to a consulate or airline/hotel partner, fees already
          paid to that third party are governed by their own cancellation
          policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For any questions about these terms, reach us on{" "}
          <a
            href={whatsappHref(
              "Hi VisaHub, I have a question about your terms and conditions",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary underline underline-offset-2"
          >
            WhatsApp
          </a>
          .
        </p>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2 className="text-headline-sm text-primary">{title}</h2>
      <div className="text-body-md text-on-surface-variant space-y-3">
        {children}
      </div>
    </section>
  );
}
