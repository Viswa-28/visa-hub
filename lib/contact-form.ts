import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  destination: z.string().trim().min(1, "Choose where you're travelling").max(80),
  message: z.string().trim().max(1000).optional(),
  /** Honeypot — bots fill hidden inputs, people can't see them. */
  company: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
