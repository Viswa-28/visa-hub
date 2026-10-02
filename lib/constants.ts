export const SITE_NAME = "VisaHub";
export const SITE_TAGLINE = "Connecting You to the World";
/**
 * The www host is canonical: thevisahub.in issues a 308 to www.thevisahub.in,
 * so canonicals/sitemap/JSON-LD must use www or they point at a redirect.
 */
export const SITE_URL = "https://www.thevisahub.in";

export const PHONE_DISPLAY = "+91 63691 53144";
export const PHONE_TEL_HREF = "tel:+916369153144";
export const WHATSAPP_NUMBER = "916369153144";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_HREF = whatsappHref(
  "Hi VisaHub, I would like to inquire about visa assistance",
);

export const INSTAGRAM_HANDLE = "@usa_visa_hub___";
export const INSTAGRAM_URL = "https://instagram.com/usa_visa_hub___";

export const APPROVALS_COUNT = "100k+";
export const SERVICE_REGIONS = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Tirunelveli",
  "Vellore",
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Visa Consulting", href: "/visa" },
  { label: "Flight Tickets", href: "/#all-services" },
  { label: "Hotel Booking", href: "/#all-services" },
  { label: "Travel Insurance", href: "/#all-services" },
  { label: "Currency Exchange", href: "/#all-services" },
] as const;

/** Every "book a visit" CTA points here — the page that holds the form. */
export const BOOKING_HREF = "/doorstep#book-doorstep";

/**
 * Next replaces (not merges) the whole `openGraph` object when a child route
 * declares one, so any page setting its own OG tags must re-attach the image
 * explicitly or it ships a preview card with no picture.
 * Served by app/opengraph-image.tsx.
 */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
} as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Visa", href: "/visa" },
  { label: "Doorstep Assistance", href: "/doorstep" },
  { label: "About", href: "/about" },
] as const;

/**
 * Legally load-bearing — carry forward unchanged unless the user gives new
 * wording (CLAUDE.md §9).
 */
export const CONSULAR_DISCLAIMER =
  "Consular Regulatory Notice: USA Visa Hub is an independent private travel concierge and documentation consultancy firm. We are not an official government embassy or affiliate of the U.S. Department of State, IRCC, or UKVI. Final visa grant decisions remain solely with consular officers.";
