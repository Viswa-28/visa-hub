import type { Metadata } from "next";
import { PHONE_DISPLAY, SITE_NAME, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses, and protects your personal and passport information during visa, travel, and doorstep consultancy services.`,
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
          Privacy Policy
        </h1>
        <p className="text-body-sm text-neutral mt-2">
          Last updated: January 2026
        </p>
      </header>

      <Section title="What We Collect">
        <p>
          To process visa, flight, dummy ticket, hotel, insurance, and
          doorstep consultation requests, we collect information you provide
          directly — your name, phone number, email, passport and travel
          document details, financial documents you share for visa filing,
          and your home or office address for doorstep visits.
        </p>
      </Section>

      <Section title="How We Use It">
        <p>
          Your information is used solely to prepare and file your visa or
          travel application, coordinate doorstep appointments, communicate
          appointment and status updates over call or WhatsApp, and — where
          you have opted in — send relevant travel or slot-availability
          updates.
        </p>
      </Section>

      <Section title="Document Handling & Security">
        <p>
          Original passports and financial documents are reviewed in your
          presence during doorstep visits and are not retained by our staff
          beyond what is required to complete your specific application.
          Digital copies are stored securely and shared only with the
          relevant consulate, VFS center, or airline/hotel partner needed to
          fulfill your request.
        </p>
      </Section>

      <Section title="Third Parties">
        <p>
          We share your details only with the consulates, visa application
          centers, airlines, hotel partners, and insurance providers
          necessary to complete the specific service you have requested. We
          do not sell your personal information to third parties.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          You may request a copy of the information we hold about you, ask
          us to correct inaccurate details, or request deletion of your data
          once your engagement with us is complete, subject to any
          retention required by consular or legal record-keeping rules.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          Questions about this policy can be sent to us at{" "}
          <a
            href={whatsappHref(
              "Hi VisaHub, I have a question about your privacy policy",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary underline underline-offset-2"
          >
            {PHONE_DISPLAY}
          </a>{" "}
          on WhatsApp or by phone.
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
