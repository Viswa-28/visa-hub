import type { Metadata, Viewport } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import {
  APPROVALS_COUNT,
  PHONE_DISPLAY,
  SERVICE_REGIONS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Closest free Google Fonts equivalent to the tall, ultra-heavy condensed
// "Headliner" display face requested — that specific font is a commercial
// product not distributed on Google Fonts, so it can't be self-hosted via
// next/font/google. Anton matches the same poster-headline character.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const title = "VisaHub | One Destination, All Your Travel Needs";
const description = `Hassle-free travel and doorstep visa services for USA, Canada, UK, Schengen, Australia & New Zealand. ${APPROVALS_COUNT} approvals, doorstep assistance across Tamil Nadu.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "USA visa consultant Tamil Nadu",
    "doorstep visa assistance",
    "Canada visa agent",
    "Schengen visa Chennai",
    "dummy ticket for visa",
    "visa guide by country",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  description: SITE_TAGLINE,
  telephone: PHONE_DISPLAY,
  areaServed: SERVICE_REGIONS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${anton.variable} h-full scroll-smooth`}
    >
      <body
        className="flex min-h-full flex-col antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
