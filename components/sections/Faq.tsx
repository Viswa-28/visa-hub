"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/types";

const FAQS: FaqItem[] = [
  {
    id: "doorstep-how",
    question: "How does the Doorstep Visa Assistance work?",
    answer:
      "When you request a doorstep visit, our trained visa counselor arrives at your designated home or corporate office in Tamil Nadu. We verify your physical documents, fill out the online forms with your live confirmation, clarify interview queries, and secure your biometric appointments.",
  },
  {
    id: "dummy-tickets",
    question: "Are your dummy tickets valid and verifiable with airlines?",
    answer:
      "Yes! We generate genuine flight reservation dummy tickets that come with an authentic airline PNR number. Consulates and visa officers can verify the booking on the official airline website.",
  },
  {
    id: "non-usa-visas",
    question: "Do you assist with non-USA visas as well?",
    answer:
      "Yes. We offer end-to-end documentation, visa applications, and slot bookings for Canada, United Kingdom, Schengen (all 27 European countries), Australia, and New Zealand.",
  },
  {
    id: "fee-estimate",
    question: "Are the fees shown on this site final?",
    answer:
      "No — fees shown across the site and in the calculator are illustrative placeholders based on typical consular charges. We confirm the exact, current government and concierge fees with you before any payment or filing.",
  },
];

export function Faq() {
  return (
    <section
      className="border-outline-variant/60 bg-surface-container-low border-t py-16"
      id="faq"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-headline-md text-primary sm:text-headline-lg">
            Frequently Asked Questions
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-1">
            Everything you need to know about travel &amp; doorstep visa
            services
          </p>
        </div>

        <Accordion className="space-y-3">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-outline-variant bg-card rounded-lg border px-4"
            >
              <AccordionTrigger className="text-label-lg text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body-sm text-on-surface-variant">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
