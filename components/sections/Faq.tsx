"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APPROVALS_COUNT } from "@/lib/constants";
import type { FaqItem } from "@/lib/types";

const FAQS: FaqItem[] = [
  {
    id: "doorstep-how",
    question: "How does the Doorstep Visa Assistance work?",
    answer:
      "When you request a doorstep visit, our trained visa counselor arrives at your designated home or corporate office in Tamil Nadu. We verify your physical documents, fill out the online forms with your live confirmation, clarify interview queries, and secure your biometric appointments.",
  },
  {
    id: "usa-appointment-wait",
    question: "How many days does it take to get a US visa appointment?",
    answer:
      "Interview slot availability at Indian US consulates changes week to week, and stretches to several months at some consulates during peak season — that's set and published by the US Department of State, not by us or any consultancy. This is exactly where our doorstep assistance earns its keep: our counselor tracks open slots on your behalf, handles rebooking the moment an earlier one opens up, and preps your paperwork at your home in advance so you're ready to walk in the day it's confirmed — instead of losing your slot to a document you forgot.",
  },
  {
    id: "usa-appointment-cost",
    question: "How much does the US visa appointment cost?",
    answer:
      "The visa application (MRV) fee is a fixed, non-refundable fee set by the US Department of State and paid directly to the government — it isn't ours to set, and it can change, so we'll confirm the current figure with you before you pay anything. Our own doorstep consulting fee is quoted separately and upfront when we visit — no hidden charges added after the fact.",
  },
  {
    id: "approval-ratio",
    question: "What's your visa approval ratio?",
    answer:
      "No honest consultancy can promise a guaranteed approval rate — the final decision rests solely with the consular officer, based on your individual profile and ties to home country, which is outside anyone's control, including ours. What we do control is the accuracy and completeness of your documentation, the single biggest factor an applicant can influence, and it's why we've supported " +
      APPROVALS_COUNT +
      " approvals across the destinations we serve. Our doorstep counselor personally reviews every document with you, face-to-face, before it's submitted — catching the small errors that most often cause delays or rejections.",
  },
  {
    id: "usa-visa-categories",
    question: "What are the different US visa categories?",
    answer:
      "The most common categories for applicants from India are B1/B2 (Business/Tourist), F-1 (Student), H-1B (Work), and J-1 (Exchange Visitor) — each with its own eligibility rules and document checklist, covered in full in our Visa Guide. Not sure which applies to you? Our doorstep counselor reviews your situation in person and confirms the right category before you start any paperwork.",
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
