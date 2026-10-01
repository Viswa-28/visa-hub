import type { Metadata, Viewport } from "next";
import { Anton, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import {
  INSTAGRAM_URL,
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

// Logo wordmark only — geometric shapes that echo the lettering in the mark.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Kept under ~60 chars so Google doesn't truncate it in results.
const title = `Doorstep Visa Consultant in Tamil Nadu | ${SITE_NAME}`;
const socialTitle = "Expert Visa Consulting, With Doorstep Filing";
const description = `USA, Canada, UK, Schengen & Australia visa consulting with doorstep document assistance across Chennai, Coimbatore, Madurai & Trichy. Our counselor visits you.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Child routes set their own title; this suffixes it with the brand.
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  keywords: [
    "visa consultant Tamil Nadu",
    "USA visa consultant Chennai",
    "doorstep visa assistance",
    "Canada visa agent Coimbatore",
    "Schengen visa Chennai",
    "dummy ticket for visa",
  ],
  alternates: { canonical: "/" },
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

// TODO: add streetAddress, addressLocality, postalCode and geo once the
// registered office address is confirmed — without them Google will not
// produce a local-business rich result.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description,
  slogan: SITE_TAGLINE,
  telephone: PHONE_DISPLAY,
  image: `${SITE_URL}/logo.jpeg`,
  logo: `${SITE_URL}/logo.jpeg`,
  sameAs: [INSTAGRAM_URL],
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
      className={`${plusJakartaSans.variable} ${anton.variable} ${outfit.variable} h-full scroll-smooth`}
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
