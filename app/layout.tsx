import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/shared/Analytics";
import {
  INSTAGRAM_URL,
  EMAIL_ADDRESS,
  PHONE_DISPLAY,
  SERVICE_REGIONS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

/**
 * Self-hosted rather than next/font/google. Google-hosted fonts are fetched at
 * build time, so a blocked or rate-limited request from the CI builder fails
 * the whole deployment ("An error occurred in `next/font`"). These are the
 * same latin woff2 files Google serves, committed to the repo so builds have
 * no external dependency. Licensed OFL/Apache — self-hosting is permitted.
 */
const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-plus-jakarta-sans",
  weight: "300 800",
  display: "swap",
});

// Closest free equivalent to the tall, ultra-heavy condensed "Headliner"
// display face requested — that one is a commercial product, so Anton stands
// in for the same poster-headline character.
const anton = localFont({
  src: "./fonts/Anton-Regular.woff2",
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

// Logo wordmark only — geometric shapes that echo the lettering in the mark.
const outfit = localFont({
  src: "./fonts/Outfit-Variable.woff2",
  variable: "--font-outfit",
  weight: "600 700",
  display: "swap",
});

// Kept under ~60 chars so Google doesn't truncate it in results. Leads with
// the city because local intent ("visa consultant madurai") converts hardest.
const title = `Visa Consultant in Madurai — Doorstep Service | ${SITE_NAME}`;
const socialTitle = "Expert Visa Consulting, With Doorstep Filing";
const description = `USA, Canada, UK, Schengen & Australia visa consulting with doorstep document assistance across Chennai, Coimbatore, Madurai & Trichy. Our counselor visits you.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Child routes set their own title; this suffixes it with the brand.
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  keywords: [
    "visa consultant Madurai",
    "visa agent Tamil Nadu",
    "USA visa consultant Chennai",
    "doorstep visa assistance",
    "Canada visa agent Coimbatore",
    "Schengen visa Madurai",
  ],
  alternates: { canonical: "/" },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in the host env to emit the
  // Search Console meta tag; omitted entirely while unset.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: socialTitle,
    description,
    siteName: SITE_NAME,
    locale: "en_IN",
    // og:image comes from app/opengraph-image.tsx (generated, not a static file).
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// TODO: streetAddress, postalCode, geo coordinates and openingHours are still
// missing — Google needs a full street address before it will show a local
// rich result or tie this to a Google Business Profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description,
  slogan: SITE_TAGLINE,
  telephone: PHONE_DISPLAY,
  email: EMAIL_ADDRESS,
  image: `${SITE_URL}/logo.jpeg`,
  logo: `${SITE_URL}/logo.jpeg`,
  sameAs: [INSTAGRAM_URL],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: SERVICE_REGIONS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visa & Travel Services",
    itemListElement: [
      "Visa Consulting",
      "Doorstep Visa Assistance",
      "Flight Tickets",
      "Hotel Booking",
      "Travel Insurance",
      "Currency Exchange",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${plusJakartaSans.variable} ${anton.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body
        className="flex min-h-full flex-col pb-20 antialiased lg:pb-0"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
