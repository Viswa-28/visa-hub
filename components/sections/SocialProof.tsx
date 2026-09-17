import { Star } from "lucide-react";
import {
  APPROVALS_COUNT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/constants";
import type { Testimonial } from "@/lib/types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "ramesh",
    quote:
      "Their doorstep service in Coimbatore was incredible! The executive came directly to my office, reviewed my bank statements and DS-160, and booked our interview slot without me having to leave work.",
    name: "Ramesh S.",
    location: "Coimbatore • Doorstep B1/B2 Approved",
    initials: "RS",
  },
  {
    id: "ananya",
    quote:
      "Needed verifiable dummy tickets and urgent F-1 visa appointment expediting for fall intake. VisaHub sorted both within 48 hours. Got my student visa approved smoothly!",
    name: "Ananya M.",
    location: "Chennai • F-1 Student Visa Approved",
    initials: "AM",
  },
  {
    id: "david",
    quote:
      "Extremely seamless service. Called their hotline and received prompt support from their founders. Managed our family of 4 tourist visas together with synchronized interview windows.",
    name: "David L.",
    location: "Bengaluru • Family B2 Visas Approved",
    initials: "DL",
  },
];

export function SocialProof() {
  return (
    <section
      className="border-outline-variant/60 bg-card border-t py-20"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-label-caps rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1.5 text-emerald-700 uppercase">
            Verified Success Stories
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            {APPROVALS_COUNT} Happy Travelers Reached the World
          </h2>
          <p className="text-body-sm text-on-surface-variant sm:text-body-md mt-2">
            From first-time travelers to previously rejected applicants, see
            what our clients say across Instagram ({INSTAGRAM_HANDLE}) and
            direct reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-outline-variant/60 bg-surface-container-low flex flex-col justify-between rounded-lg border p-6 shadow-sm"
            >
              <div className="space-y-3">
                <div
                  aria-label="5 out of 5 stars"
                  className="flex items-center gap-0.5 text-amber-400"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="size-4 fill-current"
                    />
                  ))}
                </div>
                <p className="text-body-sm text-on-surface-variant italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="border-outline-variant/60 mt-4 flex items-center gap-3 border-t pt-4">
                <span className="bg-primary text-label-md flex size-9 items-center justify-center rounded-full text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-label-lg text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-neutral text-[10px]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-tertiary/20 bg-primary mt-10 flex flex-col items-center justify-between gap-6 rounded-xl border p-6 text-white sm:flex-row">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="to-tertiary flex size-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 shadow-lg"
            >
              <svg
                className="size-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <div>
              <p className="text-label-lg text-white">
                Follow {INSTAGRAM_HANDLE} on Instagram
              </p>
              <p className="text-body-sm text-white/60">
                Daily visa slot alerts, approved passport stories, and live
                consular updates.
              </p>
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-md text-primary shrink-0 rounded-md bg-white px-5 py-2.5 transition-colors hover:bg-white/90"
          >
            View Instagram Proofs &#8599;
          </a>
        </div>
      </div>
    </section>
  );
}
