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
    question: "Do you assist with visas beyond the USA?",
    answer:
      "Yes. Our Visa Guide covers 40+ destinations — Canada, United Kingdom, Schengen (all 27 European countries), Australia, New Zealand, UAE, Singapore, Japan, and many more — with end-to-end documentation, applications, and slot bookings.",
  },
  {
    id: "guide-accuracy",
    question: "How accurate is the information in your Visa Guide?",
    answer:
      "It's general guidance to help you prepare — documents, eligibility, and process can change. We always recommend confirming current requirements with the official consulate or e-Visa portal, or asking our team to verify for you.",
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
