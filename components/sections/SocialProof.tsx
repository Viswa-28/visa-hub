import { Star } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
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
      className="border-outline-variant/60 bg-card border-t py-14 md:py-16"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
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

        {/* Horizontal snap-scroll below md so three testimonials cost one
            screen instead of three; plain grid from md up. */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&>*]:w-[86%] [&>*]:shrink-0 [&>*]:snap-start md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:[&>*]:w-auto [&::-webkit-scrollbar]:hidden">
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

        <div className="border-tertiary/20 bg-primary mt-8 flex flex-col items-center justify-between gap-5 rounded-xl border p-5 text-white sm:flex-row sm:p-6">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="to-tertiary flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 shadow-lg sm:size-14"
            >
              <InstagramIcon className="size-6 text-white sm:size-7" />
            </span>
            <div>
              <p className="text-label-lg text-white">
                See more on Instagram
              </p>
              <p className="text-body-sm text-white/60">
                {INSTAGRAM_HANDLE} &mdash; approved passport stories and live
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
