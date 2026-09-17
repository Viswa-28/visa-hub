export const SITE_NAME = "VisaHub";
export const SITE_TAGLINE = "Your Journey, Our Expertise!";
export const SITE_URL = "https://www.usavisahub.com";

export const PHONE_DISPLAY = "+91 63691 53144";
export const PHONE_DISPLAY_SHORT = "63691 53144";
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

export const APPROVALS_COUNT = "31k+";
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
  { label: "Flight Tickets", href: "#all-services" },
  { label: "Dummy Tickets", href: "#all-services" },
  { label: "Hotel Booking", href: "#all-services" },
  { label: "Travel Insurance", href: "#all-services" },
  { label: "Currency Exchange", href: "#all-services" },
] as const;

export const FOOTER_DOORSTEP_LINKS = [
  { label: "Chennai & Suburbs", href: "#doorstep-section" },
  { label: "Coimbatore & Tirupur", href: "#doorstep-section" },
  { label: "Madurai & Trichy", href: "#doorstep-section" },
  { label: "Salem & Erode", href: "#doorstep-section" },
  { label: "Corporate On-Site Visits", href: "#doorstep-section" },
] as const;

export const FOOTER_GLOBAL_VISA_LINKS = [
  { label: "USA Visa (B1/B2 & F-1)", href: "/visa/usa" },
  { label: "Canada TRV & Study", href: "/visa/canada" },
  { label: "UK Standard Visitor", href: "/visa/uk" },
  { label: "27 Schengen Countries", href: "/visa/schengen" },
  { label: "Australia & New Zealand", href: "/visa/australia" },
  { label: "View Full Visa Guide", href: "/visa" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;

/**
 * Legally load-bearing — carry forward unchanged unless the user gives new
 * wording (CLAUDE.md §9).
 */
export const CONSULAR_DISCLAIMER =
  "Consular Regulatory Notice: USA Visa Hub is an independent private travel concierge and documentation consultancy firm. We are not an official government embassy or affiliate of the U.S. Department of State, IRCC, or UKVI. Final visa grant decisions remain solely with consular officers.";

/**
 * Only the destinations this consultancy actually serves (matches the
 * "USA • CANADA • UK • SCHENGEN • AUS & NZ" positioning used site-wide) —
 * unlike tripate.com's 240+ country claim, this list stays honest to scope.
 */
export const COUNTRIES_SERVED = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "United Kingdom", code: "GB" },
  { name: "Australia", code: "AU" },
  { name: "New Zealand", code: "NZ" },
  { name: "Austria", code: "AT" },
  { name: "Belgium", code: "BE" },
  { name: "Croatia", code: "HR" },
  { name: "Czechia", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Estonia", code: "EE" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Greece", code: "GR" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "Italy", code: "IT" },
  { name: "Latvia", code: "LV" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Malta", code: "MT" },
  { name: "Netherlands", code: "NL" },
  { name: "Norway", code: "NO" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
] as const;
