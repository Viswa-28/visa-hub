import { whatsappHref } from "@/lib/constants";
import type { VisaCategoryCard } from "@/lib/types";

const CATEGORIES: VisaCategoryCard[] = [
  {
    id: "tourist",
    region: "United States",
    title: "Tourist / Visitor B1/B2",
    feeChip: "$185 Consular*",
    bullets: [
      "Full DS-160 form review",
      "Fast biometrics & slot booking",
      "1-on-1 mock interview session",
      "Doorstep document assistance",
    ],
    ctaLabel: "Select B1/B2 Plan",
  },
  {
    id: "student",
    region: "Academic & University",
    title: "Student Visa (F-1 / M-1)",
    feeChip: "$185 + SEVIS*",
    bullets: [
      "I-20 compliance & SEVIS I-901",
      "Fall/Spring intake emergency dates",
      "Sponsor & loan asset proofing",
      "University interview coaching",
    ],
    ctaLabel: "Select Student Plan",
  },
  {
    id: "work",
    region: "Employment & Tech",
    title: "Work Visa (H-1B / L-1)",
    feeChip: "$205 Consular*",
    bullets: [
      "I-797 petition validation",
      "Dropbox / interview waiver check",
      "H-4 dependent linking",
      "221(g) prevention audit",
    ],
    ctaLabel: "Select Work Plan",
  },
  {
    id: "global-partner",
    region: "UK • CAN • Schengen • AUS",
    title: "Global Visa Partner",
    feeChip: "From $45 Fee*",
    bullets: [
      "Canada TRV / Super Visa",
      "UK Standard Visitor & Business",
      "27 Schengen countries entry",
      "Australia / New Zealand e-Visitor",
    ],
    ctaLabel: "Explore Global Visas",
  },
];

export function Categories() {
  return (
    <section className="bg-card py-16" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Consular Services Portfolio
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            All Countries Visa Assistance
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            USA &bull; Canada &bull; UK &bull; Schengen &bull; Australia &amp;
            New Zealand
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="border-outline-variant bg-card hover:ring-secondary/40 flex flex-col justify-between overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2"
            >
              <div className="border-outline-variant/60 bg-surface-container-low flex items-center justify-between gap-2 border-b p-5">
                <div>
                  <span className="text-label-md text-neutral tracking-wide uppercase">
                    {category.region}
                  </span>
                  <h3 className="text-label-lg text-primary">
                    {category.title}
                  </h3>
                </div>
                <span className="border-tertiary/20 bg-tertiary/10 text-label-md text-tertiary shrink-0 rounded-md border px-2.5 py-1">
                  {category.feeChip}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                <ul className="text-body-sm text-on-surface-variant space-y-2">
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="font-bold text-emerald-600">
                        &#10003;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(
                    `Hi VisaHub, I would like to inquire about ${category.title}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-label-md text-primary-foreground hover:bg-tertiary block rounded-md px-4 py-2.5 text-center transition-colors"
                >
                  {category.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="text-neutral mt-6 text-center text-[11px]">
          *Fees shown are illustrative estimates, not verified government
          charges &mdash; confirm current consular fees with our team.
        </p>
      </div>
    </section>
  );
}
