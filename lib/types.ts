export interface ServiceCard {
  id: string;
  index: number;
  title: string;
  description: string;
  bullets: string[];
  footerLabel: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface VisaCategoryCard {
  id: string;
  region: string;
  title: string;
  feeChip: string;
  bullets: string[];
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
