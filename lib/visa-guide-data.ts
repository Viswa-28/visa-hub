export interface VisaTypeGuide {
  id: string;
  name: string;
  eligibility: string[];
  documents: string[];
  processingTime: string;
  steps: string[];
}

export interface CountryGuide {
  slug: string;
  name: string;
  code: string;
  region:
    | "North America"
    | "Europe"
    | "Asia"
    | "Middle East"
    | "Africa"
    | "Oceania"
    | "South America";
  tagline: string;
  visaTypes: VisaTypeGuide[];
  faqs: { question: string; answer: string }[];
}

export const COUNTRY_GUIDES: CountryGuide[] = [
  {
    slug: "usa",
    name: "United States",
    code: "US",
    region: "North America",
    tagline: "B1/B2 tourist & business, F-1 student, and H-1B/L-1 work visas.",
    visaTypes: [
      {
        id: "b1-b2",
        name: "B1/B2 Tourist / Business Visa",
        eligibility: [
          "Traveling for tourism, visiting family, or short business trips",
          "Sufficient ties to India and intent to return after the trip",
          "Financially able to support the trip",
        ],
        documents: [
          "DS-160 confirmation page",
          "Valid passport + old passports (if any)",
          "Visa photo per US specification",
          "MRV fee payment receipt",
          "Bank statements & ITR for last 2-3 years",
          "Employment/business proof",
          "Invitation letter (if visiting family/friends)",
        ],
        processingTime: "Varies by consulate slot availability; interview + 3-7 business days after approval",
        steps: [
          "Complete the DS-160 online form",
          "Pay the MRV fee and schedule your biometrics + interview",
          "Attend biometrics appointment at VFS/OFC",
          "Attend the visa interview at the US Consulate",
          "Passport dispatched after approval",
        ],
      },
      {
        id: "f1",
        name: "F-1 Student Visa",
        eligibility: [
          "Accepted (I-20 issued) by a SEVP-certified US institution",
          "Sufficient funds or sponsor to cover tuition + living costs",
          "Genuine intent to study and return after the program",
        ],
        documents: [
          "Form I-20 from your university",
          "SEVIS I-901 fee receipt",
          "DS-160 confirmation page",
          "Academic transcripts & test scores (TOEFL/IELTS/GRE/GMAT)",
          "Financial/sponsor documents covering full program cost",
          "Loan sanction letter (if applicable)",
        ],
        processingTime: "Interview-slot dependent; decision usually same day or within 2-3 weeks (administrative processing)",
        steps: [
          "Receive I-20 and pay the SEVIS fee",
          "Complete DS-160 and pay the MRV fee",
          "Schedule and attend biometrics + visa interview",
          "Prepare for a fully-funded-study interview focus",
        ],
      },
      {
        id: "h1b-l1",
        name: "H-1B / L-1 Work Visa",
        eligibility: [
          "Sponsored by a US employer with an approved petition (I-129/I-797)",
          "H-1B: specialty-occupation role matching your qualifications",
          "L-1: intra-company transfer with 1+ year at the overseas office",
        ],
        documents: [
          "Approved I-797 petition notice",
          "DS-160 confirmation page",
          "Educational & employment credentials",
          "Company offer letter / transfer letter",
          "Passport and prior US visa history (if any)",
        ],
        processingTime: "Petition timeline set by USCIS; consular stage typically 1-2 weeks after slot",
        steps: [
          "Employer files and receives an approved petition",
          "Complete DS-160 and pay the MRV fee",
          "Schedule biometrics and the visa interview",
          "Attend interview with petition and employment evidence",
        ],
      },
    ],
    faqs: [
      {
        question: "Can doorstep assistance help with the US visa interview?",
        answer:
          "Yes — we review your DS-160 and documents with you in person, run a mock interview, and help you book the earliest available biometric and interview slot.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    code: "CA",
    region: "North America",
    tagline: "Visitor visa (TRV), Super Visa, study permits, and work permits.",
    visaTypes: [
      {
        id: "trv",
        name: "Temporary Resident Visa (Visitor)",
        eligibility: [
          "Traveling for tourism, visiting family, or short business",
          "No immigration violations on prior visits",
          "Able to demonstrate funds for the trip",
        ],
        documents: [
          "Valid passport",
          "Digital photo per IRCC specification",
          "Proof of funds (bank statements)",
          "Travel itinerary / invitation letter",
          "Employment or business proof",
          "Biometrics (fingerprints & photo) at VAC",
        ],
        processingTime: "Typically 3-8 weeks depending on visa office load",
        steps: [
          "Create an IRCC online account and complete the application",
          "Pay fees and give biometrics at the Visa Application Centre",
          "Wait for processing and passport request (if approved)",
          "Submit passport for visa stamping",
        ],
      },
      {
        id: "super-visa",
        name: "Super Visa (Parents & Grandparents)",
        eligibility: [
          "Parent or grandparent of a Canadian citizen/PR",
          "Child/grandchild meets minimum income requirement (LICO)",
          "Purchase of Canadian medical insurance for the visit",
        ],
        documents: [
          "Invitation letter from child/grandchild in Canada",
          "Proof of relationship",
          "Host's income proof (Notice of Assessment)",
          "Proof of Canadian medical insurance (min. CAD 100,000, 1 year)",
          "Medical exam results",
        ],
        processingTime: "Roughly 4-8 weeks",
        steps: [
          "Host arranges the invitation letter and income proof",
          "Purchase the required medical insurance",
          "Complete medical exam with a panel physician",
          "Submit the application online",
        ],
      },
    ],
    faqs: [
      {
        question: "How is the Super Visa different from a regular visitor visa?",
        answer:
          "The Super Visa allows parents/grandparents to stay up to 5 years per entry (vs. typically 6 months on a regular TRV) but requires proof of Canadian medical insurance and the host's income.",
      },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    code: "GB",
    region: "Europe",
    tagline: "Standard Visitor visa, Student visa, and Skilled Worker visa.",
    visaTypes: [
      {
        id: "standard-visitor",
        name: "Standard Visitor Visa",
        eligibility: [
          "Tourism, visiting family, or business meetings",
          "Intend to leave the UK at the end of the visit",
          "Enough funds to support the stay without working",
        ],
        documents: [
          "Valid passport",
          "Bank statements (6 months)",
          "Proof of accommodation",
          "Return flight itinerary",
          "Employment/business proof and leave letter",
        ],
        processingTime: "Standard: ~3 weeks; Priority: 5 business days; Super Priority: next day",
        steps: [
          "Complete the online application on GOV.UK",
          "Book and attend a biometric appointment at VFS Global",
          "Upload supporting documents",
          "Track your application and collect your passport",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get a UK visa faster than 3 weeks?",
        answer:
          "Yes — Priority Service (5 working days) and Super Priority (next working day) are available for an additional fee, subject to availability at your visa center.",
      },
    ],
  },
  {
    slug: "schengen",
    name: "Schengen Area (Europe)",
    code: "EU",
    region: "Europe",
    tagline: "One short-stay visa for France, Germany, Italy, Spain & 23 more.",
    visaTypes: [
      {
        id: "short-stay-c",
        name: "Short-Stay Schengen Visa (Type C)",
        eligibility: [
          "Tourism, business meetings, or visiting family/friends",
          "Stay of up to 90 days within any 180-day period",
          "Apply through the consulate of your main destination country (or first entry point)",
        ],
        documents: [
          "Schengen visa application form",
          "Passport valid 3+ months beyond intended departure from Schengen",
          "Travel insurance meeting the Schengen-mandated minimum medical coverage",
          "Confirmed flight reservation (round trip)",
          "Day-by-day itinerary and hotel bookings",
          "Bank statements (last 3-6 months) and ITR",
          "Employment/business proof and cover letter",
        ],
        processingTime: "Typically 10-15 calendar days after biometrics; up to 30 in busy season",
        steps: [
          "Decide your main destination to pick the correct consulate",
          "Book a biometric appointment at VFS/consulate",
          "Buy Schengen-compliant travel insurance",
          "Submit your application with full itinerary and financials",
        ],
      },
    ],
    faqs: [
      {
        question: "Which country's consulate should I apply to?",
        answer:
          "Apply through the consulate of the Schengen country where you'll spend the most nights, or your first point of entry if time is split evenly.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    code: "AU",
    region: "Oceania",
    tagline: "Visitor visa (600), Student visa (500), and Working Holiday visa.",
    visaTypes: [
      {
        id: "subclass-600",
        name: "Visitor Visa (Subclass 600)",
        eligibility: [
          "Genuine visitor for tourism or to see family",
          "Adequate funds for the length of stay",
          "Health and character requirements met",
        ],
        documents: [
          "Valid passport",
          "Financial evidence (bank statements/ITR)",
          "Travel itinerary",
          "Employment proof and leave sanction",
          "Health insurance (recommended)",
        ],
        processingTime: "Most decided within 20-30 days; can vary widely",
        steps: [
          "Create an ImmiAccount and lodge online",
          "Upload supporting documents",
          "Complete any requested health checks",
          "Wait for a decision via ImmiAccount",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a medical exam for a visitor visa?",
        answer:
          "Usually not for short stays, but the department may request one depending on your health declarations or length of stay — we'll flag this if it applies to you.",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    region: "Oceania",
    tagline: "Visitor visa and NZeTA for eligible short trips.",
    visaTypes: [
      {
        id: "visitor-visa",
        name: "Visitor Visa",
        eligibility: [
          "Tourism or visiting family/friends",
          "Sufficient funds for the visit (approx. NZD 1,000/month or a sponsor)",
          "Genuine intention to return home afterward",
        ],
        documents: [
          "Valid passport and photo",
          "Bank statements / sponsor's declaration",
          "Travel itinerary and accommodation details",
          "Employment proof",
        ],
        processingTime: "Around 3-4 weeks on average",
        steps: [
          "Apply online via Immigration New Zealand",
          "Upload financial and itinerary documents",
          "Complete biometrics if requested",
          "Await the outcome via your online account",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "uae",
    name: "United Arab Emirates (Dubai)",
    code: "AE",
    region: "Middle East",
    tagline: "Fast e-Visa/visit visa processing, often within 3-4 days.",
    visaTypes: [
      {
        id: "visit-visa",
        name: "Tourist / Visit Visa",
        eligibility: [
          "Indian passport holders generally need a pre-arranged visit visa",
          "Sponsored by an airline, hotel, or UAE-based sponsor/agent",
        ],
        documents: [
          "Passport copy (valid 6+ months)",
          "Passport-size photo (white background)",
          "Confirmed return flight ticket",
          "Hotel booking or host's Emirates ID copy (if visiting family)",
        ],
        processingTime: "3-4 working days (express options available)",
        steps: [
          "Submit passport copy and photo to your visa agent",
          "Choose visa validity (14/30/60/90 days)",
          "Pay the visa fee",
          "Receive the e-Visa by email before travel",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "singapore",
    name: "Singapore",
    code: "SG",
    region: "Asia",
    tagline: "Straightforward e-Visa process for Indian tourists.",
    visaTypes: [
      {
        id: "tourist-evisa",
        name: "Tourist e-Visa",
        eligibility: [
          "Indian nationals require a visa for entry",
          "Sufficient funds and a return/onward ticket",
        ],
        documents: [
          "Passport copy",
          "Recent photograph",
          "Confirmed return flight",
          "Hotel booking",
          "Bank statement (last 3 months)",
        ],
        processingTime: "3-5 working days",
        steps: [
          "Submit documents online via an authorized agent",
          "Pay the visa fee",
          "Receive the e-Visa approval letter by email",
          "Carry a printed copy while traveling",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "thailand",
    name: "Thailand",
    code: "TH",
    region: "Asia",
    tagline: "e-Visa or visa-on-arrival for short tourist trips.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Tourist Visa / e-Visa",
        eligibility: [
          "Traveling for tourism up to 60 days (e-Visa) or 15 days (VOA)",
          "Sufficient funds (THB 20,000 per person minimum for VOA)",
        ],
        documents: [
          "Passport valid 6+ months",
          "Passport photo",
          "Confirmed return flight",
          "Hotel booking",
          "Bank statement",
        ],
        processingTime: "e-Visa: 3-5 working days; VOA: on arrival",
        steps: [
          "Apply via the Thai e-Visa portal or agent",
          "Upload documents and pay the fee",
          "Receive approval and print the e-Visa",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    code: "MY",
    region: "Asia",
    tagline: "eNTRI/eVISA options make short visits simple.",
    visaTypes: [
      {
        id: "evisa",
        name: "eVISA / eNTRI",
        eligibility: [
          "Indian passport holders can use eNTRI (max 15 days, entry via air only) or a standard eVisa for longer/flexible stays",
        ],
        documents: [
          "Passport copy (valid 6+ months)",
          "Passport photo",
          "Confirmed return flight",
          "Hotel booking",
        ],
        processingTime: "2-4 working days",
        steps: [
          "Choose eNTRI (short, air-only) or eVisa (flexible) based on your trip",
          "Submit documents online",
          "Pay the fee and receive approval by email",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "japan",
    name: "Japan",
    code: "JP",
    region: "Asia",
    tagline: "Tourist visa processed through an approved travel agent.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Temporary Visitor Visa",
        eligibility: [
          "Traveling for tourism, visiting family, or short business",
          "Sponsored/guaranteed by a Japan-based contact or via a registered travel agent",
        ],
        documents: [
          "Passport and photo",
          "Visa application form",
          "Day-by-day itinerary",
          "Bank statements & ITR (3 years)",
          "Employment/business proof",
          "Guarantor letter (if applicable)",
        ],
        processingTime: "5-7 working days",
        steps: [
          "Prepare itinerary and financial documents",
          "Submit through a JNTO-registered travel agent (individual applications aren't accepted directly)",
          "Attend biometrics if requested",
          "Collect passport with visa",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    code: "KR",
    region: "Asia",
    tagline: "K-ETA for short visits or a standard tourist visa for longer stays.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Short-Term Tourist Visa (C-3)",
        eligibility: [
          "Traveling for tourism up to 90 days",
          "Sufficient funds and a clear travel purpose",
        ],
        documents: [
          "Passport and photo",
          "Bank statement and ITR",
          "Flight and hotel booking",
          "Employment proof",
        ],
        processingTime: "Around 5-7 working days",
        steps: [
          "Submit the application at the Korean Consulate/VFS",
          "Provide biometrics if requested",
          "Collect the visa once approved",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    code: "VN",
    region: "Asia",
    tagline: "Simple e-Visa for stays up to 90 days.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Available to Indian passport holders for tourism/business"],
        documents: [
          "Passport copy (valid 6+ months)",
          "Digital passport photo",
          "Confirmed return flight",
        ],
        processingTime: "3 working days (standard); rush options available",
        steps: [
          "Apply online via the e-Visa portal or agent",
          "Pay the fee",
          "Download and print your e-Visa approval",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "indonesia",
    name: "Indonesia (Bali)",
    code: "ID",
    region: "Asia",
    tagline: "Visa-on-arrival, extendable, for short tourist trips.",
    visaTypes: [
      {
        id: "voa",
        name: "Visa on Arrival",
        eligibility: ["Tourism/business stays up to 30 days (extendable once)"],
        documents: [
          "Passport valid 6+ months",
          "Confirmed return flight",
          "Proof of accommodation",
        ],
        processingTime: "On arrival, or pre-apply online for e-VOA",
        steps: [
          "Pre-register for e-VOA online (recommended) or pay on arrival",
          "Present passport and return ticket at immigration",
          "Extend once at a local immigration office if needed",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    region: "Asia",
    tagline: "Fast Electronic Travel Authorization (ETA) online.",
    visaTypes: [
      {
        id: "eta",
        name: "Electronic Travel Authorization (ETA)",
        eligibility: ["Tourism, business, or transit up to 30 days"],
        documents: ["Passport copy", "Confirmed return flight"],
        processingTime: "Usually within 24 hours",
        steps: [
          "Apply online via the official ETA portal or agent",
          "Pay the fee",
          "Receive ETA approval by email",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "maldives",
    name: "Maldives",
    code: "MV",
    region: "Asia",
    tagline: "Free visa on arrival for up to 30 days.",
    visaTypes: [
      {
        id: "voa",
        name: "Free Visa on Arrival",
        eligibility: ["All nationalities including India get a free 30-day visa on arrival"],
        documents: [
          "Passport valid 6+ months",
          "Confirmed return flight",
          "Confirmed resort/hotel booking",
          "Sufficient funds for the stay",
        ],
        processingTime: "Granted on arrival",
        steps: [
          "Book your resort/hotel in advance",
          "Carry return flight proof and accommodation confirmation",
          "Immigration stamps a 30-day visa on arrival",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "turkey",
    name: "Turkey",
    code: "TR",
    region: "Europe",
    tagline: "Quick e-Visa application, usually approved within a day.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Tourism/business stays up to 30 days"],
        documents: ["Passport copy (valid 6+ months)", "Confirmed return flight"],
        processingTime: "Typically within 24 hours",
        steps: [
          "Apply online via the e-Visa portal or agent",
          "Pay the fee online",
          "Download the e-Visa PDF to carry while traveling",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "qatar",
    name: "Qatar",
    code: "QA",
    region: "Middle East",
    tagline: "Visa-on-arrival for tourism, or a sponsor-based visit visa.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Tourist / Visit Visa",
        eligibility: ["Tourism or visiting family/friends"],
        documents: [
          "Passport copy",
          "Photo",
          "Confirmed return flight",
          "Hotel booking or sponsor's ID (if visiting family)",
        ],
        processingTime: "2-4 working days",
        steps: [
          "Submit passport and photo to your agent",
          "Choose visa duration",
          "Receive e-visa approval before travel",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    code: "HK",
    region: "Asia",
    tagline: "Pre-arranged visa required for Indian passport holders.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Visit Visa",
        eligibility: ["Indian nationals require a visa arranged before travel"],
        documents: [
          "Passport copy",
          "Photo",
          "Flight and hotel booking",
          "Bank statement",
        ],
        processingTime: "Around 4-6 weeks",
        steps: [
          "Submit the application form with supporting documents",
          "Wait for Immigration Department approval",
          "Receive the visa label/entry permit",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "china",
    name: "China",
    code: "CN",
    region: "Asia",
    tagline: "Standard tourist (L) visa through the Chinese Visa Application Service Centre.",
    visaTypes: [
      {
        id: "l-visa",
        name: "Tourist (L) Visa",
        eligibility: ["Tourism or visiting family/friends"],
        documents: [
          "Passport and photo",
          "Completed application form",
          "Flight and hotel booking",
          "Invitation letter (if applicable)",
        ],
        processingTime: "4-5 working days (standard)",
        steps: [
          "Book an appointment at the Chinese Visa Application Service Centre",
          "Submit biometrics and documents in person",
          "Collect the passport once the visa is issued",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    code: "ZA",
    region: "Africa",
    tagline: "Tourist visa via VFS Global, biometrics required.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Visitor's Visa",
        eligibility: ["Tourism, business, or visiting family"],
        documents: [
          "Passport and photo",
          "Bank statements & ITR",
          "Flight and hotel booking",
          "Yellow fever certificate (if transiting a risk country)",
        ],
        processingTime: "Around 5-8 working days",
        steps: [
          "Book a biometric appointment at VFS Global",
          "Submit application and supporting documents",
          "Collect the passport once processed",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "egypt",
    name: "Egypt",
    code: "EG",
    region: "Africa",
    tagline: "e-Visa available online for short tourist trips.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Tourism stays up to 30 days"],
        documents: ["Passport copy", "Digital photo", "Confirmed return flight"],
        processingTime: "5-7 working days",
        steps: [
          "Apply online via the Egypt e-Visa portal or agent",
          "Pay the fee",
          "Print the approval to present on arrival",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "kenya",
    name: "Kenya",
    code: "KE",
    region: "Africa",
    tagline: "Online eTA required before travel.",
    visaTypes: [
      {
        id: "eta",
        name: "Electronic Travel Authorization (eTA)",
        eligibility: ["Required for all visitors, including tourists"],
        documents: ["Passport copy", "Photo", "Flight and hotel booking", "Yellow fever certificate"],
        processingTime: "3-5 working days",
        steps: [
          "Apply online via the Kenya eTA portal",
          "Upload documents and pay the fee",
          "Receive approval by email before departure",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "mexico",
    name: "Mexico",
    code: "MX",
    region: "South America",
    tagline: "Visa often waived if you hold a valid US visa — otherwise apply directly.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Tourist Visa",
        eligibility: [
          "May be exempt with a valid US, Canada, UK, or Schengen visa (subject to current rules)",
          "Otherwise, a standard visa application applies",
        ],
        documents: ["Passport copy", "Photo", "Flight and hotel booking", "Valid US/UK/Schengen visa copy (if using the exemption)"],
        processingTime: "Around 5-7 working days if a full application is needed",
        steps: [
          "Check if your existing US/UK/Schengen visa qualifies for entry",
          "If not, submit a full application at the consulate",
          "Attend an interview if required",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "brazil",
    name: "Brazil",
    code: "BR",
    region: "South America",
    tagline: "e-Visa application for tourism and business.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Tourism or business stays up to 90 days"],
        documents: ["Passport copy", "Digital photo", "Flight and hotel booking", "Bank statement"],
        processingTime: "5-10 working days",
        steps: [
          "Apply online via the Brazil e-Visa portal",
          "Upload documents and pay the fee",
          "Print the e-Visa approval to carry while traveling",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "ireland",
    name: "Ireland",
    code: "IE",
    region: "Europe",
    tagline: "Separate short-stay visa — not covered by the Schengen visa.",
    visaTypes: [
      {
        id: "short-stay",
        name: "Short-Stay 'C' Visa",
        eligibility: ["Tourism, business, or visiting family"],
        documents: [
          "Passport and photo",
          "Bank statements & ITR",
          "Flight and hotel booking",
          "Invitation letter (if applicable)",
        ],
        processingTime: "Typically 4-8 weeks",
        steps: [
          "Apply online via AVATS (Irish visa system)",
          "Submit supporting documents to the visa office",
          "Wait for the decision and passport return",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    code: "KH",
    region: "Asia",
    tagline: "e-Visa or visa-on-arrival for short trips.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa / Visa on Arrival",
        eligibility: ["Tourism stays up to 30 days"],
        documents: ["Passport copy", "Digital photo", "Confirmed return flight"],
        processingTime: "3 working days (e-Visa) or on arrival",
        steps: [
          "Apply online via the e-Visa portal, or pay on arrival",
          "Present the approval/receipt at immigration",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "philippines",
    name: "Philippines",
    code: "PH",
    region: "Asia",
    tagline: "Visa required for Indian passport holders, or via the e-Travel exemption schemes.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Tourist Visa",
        eligibility: ["Tourism or business, or exemption if holding qualifying visas/PR"],
        documents: ["Passport copy", "Photo", "Flight and hotel booking", "Bank statement"],
        processingTime: "Around 5-7 working days",
        steps: [
          "Check eligibility for visa-exemption schemes",
          "If not exempt, apply at the Philippine Embassy/Consulate",
          "Collect the visa once approved",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "georgia",
    name: "Georgia",
    code: "GE",
    region: "Asia",
    tagline: "Simple e-Visa, popular for both tourism and short business trips.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Tourism/business stays up to 90 days"],
        documents: ["Passport copy", "Digital photo", "Confirmed return flight"],
        processingTime: "Usually within 5-10 working days",
        steps: [
          "Apply online via the Georgia e-Visa portal",
          "Pay the fee",
          "Print the approval to carry while traveling",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    code: "KZ",
    region: "Asia",
    tagline: "e-Visa application ahead of travel.",
    visaTypes: [
      {
        id: "evisa",
        name: "e-Visa",
        eligibility: ["Tourism/business stays up to 30 days"],
        documents: ["Passport copy", "Digital photo", "Flight booking"],
        processingTime: "5 working days",
        steps: [
          "Apply online via the Kazakhstan e-Visa portal",
          "Pay the fee",
          "Receive approval by email",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "jordan",
    name: "Jordan",
    code: "JO",
    region: "Middle East",
    tagline: "Visa on arrival available for most tourists.",
    visaTypes: [
      {
        id: "voa",
        name: "Visa on Arrival",
        eligibility: ["Tourism stays; visa-on-arrival available at major entry points"],
        documents: ["Passport valid 6+ months", "Confirmed return flight"],
        processingTime: "On arrival",
        steps: [
          "Arrive with passport and return ticket",
          "Pay the visa fee at the border/airport",
          "Consider the Jordan Pass, which can waive the visa fee with certain tours",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "morocco",
    name: "Morocco",
    code: "MA",
    region: "Africa",
    tagline: "Visa required for Indian passport holders, applied via embassy.",
    visaTypes: [
      {
        id: "tourist-visa",
        name: "Tourist Visa",
        eligibility: ["Tourism or business visits"],
        documents: ["Passport copy", "Photo", "Flight and hotel booking", "Bank statement"],
        processingTime: "Around 1-2 weeks",
        steps: [
          "Apply at the Moroccan Embassy/Consulate or via an agent",
          "Submit itinerary and financial documents",
          "Collect the visa once approved",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "mauritius",
    name: "Mauritius",
    code: "MU",
    region: "Africa",
    tagline: "Visa-free entry for short tourist stays.",
    visaTypes: [
      {
        id: "visa-free",
        name: "Visa-Free Tourist Entry",
        eligibility: ["Indian passport holders can enter visa-free for tourism (up to 60 days, subject to current rules)"],
        documents: [
          "Passport valid 6+ months",
          "Confirmed return flight",
          "Proof of accommodation",
          "Sufficient funds for the stay",
        ],
        processingTime: "Granted on arrival",
        steps: [
          "Book flights and accommodation",
          "Carry proof of funds and return ticket",
          "Immigration grants entry on arrival",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    code: "SC",
    region: "Africa",
    tagline: "Free visitor's permit issued on arrival.",
    visaTypes: [
      {
        id: "visitor-permit",
        name: "Visitor's Permit (on arrival)",
        eligibility: ["All nationalities receive a free visitor's permit on arrival, subject to conditions"],
        documents: [
          "Passport valid for the length of stay",
          "Confirmed return flight",
          "Proof of accommodation",
          "Sufficient funds",
        ],
        processingTime: "Granted on arrival",
        steps: [
          "Book accommodation in advance (required for the permit)",
          "Carry return flight and accommodation proof",
          "Immigration issues the permit on arrival",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "nepal",
    name: "Nepal",
    code: "NP",
    region: "Asia",
    tagline: "No visa required for Indian citizens with valid ID.",
    visaTypes: [
      {
        id: "visa-free",
        name: "Visa-Free Entry",
        eligibility: ["Indian citizens do not need a visa to enter Nepal"],
        documents: ["Valid passport or voter ID/other accepted photo ID"],
        processingTime: "Not applicable",
        steps: ["Carry a valid passport or accepted photo ID", "Cross the border or fly in directly — no visa formalities"],
      },
    ],
    faqs: [],
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    code: "BT",
    region: "Asia",
    tagline: "Entry permit for Indian nationals, arranged before travel.",
    visaTypes: [
      {
        id: "entry-permit",
        name: "Entry Permit",
        eligibility: ["Indian nationals need an entry permit (not a visa) for travel beyond border towns"],
        documents: ["Valid passport (6+ months) or voter ID", "Passport photo", "Hotel/tour booking"],
        processingTime: "Typically issued within a few days via a registered tour operator",
        steps: [
          "Book through a registered Bhutanese tour operator or agent",
          "Submit ID and photo for the permit",
          "Collect the permit on arrival at Paro or the border",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "israel",
    name: "Israel",
    code: "IL",
    region: "Middle East",
    tagline: "Visa-free entry for eligible tourist stays.",
    visaTypes: [
      {
        id: "visa-free",
        name: "Visa-Free Tourist Entry",
        eligibility: ["Indian passport holders can generally enter visa-free for short tourist stays, subject to current bilateral rules"],
        documents: ["Passport valid 6+ months", "Confirmed return flight", "Proof of accommodation"],
        processingTime: "Granted on arrival",
        steps: [
          "Book flights and accommodation",
          "Carry return flight proof",
          "Immigration grants entry on arrival, subject to standard checks",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    region: "Middle East",
    tagline: "e-Visa for tourism, separate process for Umrah/work.",
    visaTypes: [
      {
        id: "tourist-evisa",
        name: "Tourist e-Visa",
        eligibility: ["Tourism visits; e-Visa available online for eligible nationalities"],
        documents: ["Passport copy", "Digital photo", "Flight and hotel booking"],
        processingTime: "Usually within a few days",
        steps: [
          "Apply online via the Saudi e-Visa portal",
          "Pay the fee (includes travel insurance)",
          "Print the e-Visa to carry while traveling",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    code: "AZ",
    region: "Asia",
    tagline: "Simple e-Visa (ASAN Visa) for short visits.",
    visaTypes: [
      {
        id: "asan-visa",
        name: "ASAN e-Visa",
        eligibility: ["Tourism/business stays up to 30 days"],
        documents: ["Passport copy", "Digital photo", "Flight booking"],
        processingTime: "Usually within 3 working days",
        steps: [
          "Apply online via the ASAN Visa portal",
          "Pay the fee",
          "Print the e-Visa approval",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    code: "CY",
    region: "Europe",
    tagline: "Pro-Visa online application, separate from the Schengen visa.",
    visaTypes: [
      {
        id: "pro-visa",
        name: "Pro-Visa / Category C Visa",
        eligibility: ["Tourism or business visits"],
        documents: ["Passport copy", "Photo", "Flight and hotel booking", "Bank statement"],
        processingTime: "Around 1-2 weeks",
        steps: [
          "Apply online via the Cyprus Pro-Visa portal or embassy",
          "Submit financial and itinerary documents",
          "Collect approval before travel",
        ],
      },
    ],
    faqs: [],
  },
];

export function getCountryGuideBySlug(slug: string) {
  return COUNTRY_GUIDES.find((country) => country.slug === slug);
}
