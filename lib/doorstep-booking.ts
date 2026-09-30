import { z } from "zod";

export const doorstepBookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  address: z.string().trim().min(10, "Enter your full home or office address"),
  dob: z.string().min(1, "Select your date of birth"),
});

export type DoorstepBookingValues = z.infer<typeof doorstepBookingSchema>;
