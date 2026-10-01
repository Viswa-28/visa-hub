import { z } from "zod";

export const doorstepBookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  address: z
    .string()
    .trim()
    .min(10, "Enter your full home or office address")
    .max(500),
  dob: z.string().min(1, "Select your date of birth").max(20),
});

export type DoorstepBookingValues = z.infer<typeof doorstepBookingSchema>;
