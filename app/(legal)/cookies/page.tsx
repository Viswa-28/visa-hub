import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} uses cookies and similar technologies on this website.`,
};

export default function CookiePolicyPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
          Cookie Policy
        </h1>
        <p className="text-body-sm text-neutral mt-2">
          Last updated: January 2026
        </p>
      </header>

      <Section title="What Are Cookies">
        <p>
          Cookies are small text files stored on your device that help
          websites remember information about your visit, such as your
          preferences or how you navigated the site.
        </p>
      </Section>

      <Section title="How We Use Them">
        <p>
          This website does not set any advertising, analytics, or
          cross-site tracking cookies. Interface features such as the
          mobile menu and FAQ accordion run entirely in your browser session
          and are not persisted via cookies. Our hosting provider may set a
          minimal technical cookie required to serve the site reliably.
        </p>
      </Section>

      <Section title="Managing Cookies">
        <p>
          Most browsers let you block or delete cookies through their
          settings. Doing so will not affect your ability to browse this
          site or contact us. If we introduce analytics or marketing
          cookies in the future, we will update this policy accordingly.
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
