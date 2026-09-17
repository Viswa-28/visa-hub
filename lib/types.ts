export interface ProcessStep {
  step: number;
  title: string;
  description: string;
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
