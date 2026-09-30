"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WHATSAPP_DEFAULT_HREF } from "@/lib/constants";
import {
  doorstepBookingSchema,
  type DoorstepBookingValues,
} from "@/lib/doorstep-booking";

export function DoorstepBookingForm() {
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoorstepBookingValues>({
    resolver: zodResolver(doorstepBookingSchema),
  });

  async function onSubmit(data: DoorstepBookingValues) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/doorstep-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");
      setIsSent(true);
    } catch {
      setSubmitError(
        "Sorry, we couldn't submit your request just now. Please try again, or message us on WhatsApp.",
      );
    }
  }

  return (
    <section className="bg-card py-16" id="book-doorstep">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="border-tertiary/20 bg-tertiary/10 text-label-caps text-tertiary rounded-full border px-3.5 py-1.5 uppercase">
            Book Your Visit
          </span>
          <h2 className="text-headline-lg-mobile text-primary md:text-headline-lg mt-3">
            Schedule Your Doorstep Appointment
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-2">
            Share a few details and our counselor will call you to confirm your
            appointment.
          </p>
        </div>

        {isSent ? (
          <div
            role="status"
            className="border-outline-variant bg-surface-container-low rounded-xl border p-8 text-center shadow-sm"
          >
            <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 aria-hidden="true" className="size-8" />
            </span>
            <h3 className="text-headline-sm text-primary">
              Thanks for your response!
            </h3>
            <p className="text-body-sm text-on-surface-variant mt-2">
              We&rsquo;ve received your details. Our counselor will call you
              shortly to confirm your doorstep appointment.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="border-outline-variant bg-surface-container-low space-y-5 rounded-xl border p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-1.5">
              <Label htmlFor="booking-name">Full Name</Label>
              <Input
                id="booking-name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Karthick Raja"
                aria-invalid={!!errors.name}
                aria-describedby={
                  errors.name ? "booking-name-error" : undefined
                }
                {...register("name")}
              />
              {errors.name && (
                <p
                  id="booking-name-error"
                  role="alert"
                  className="text-destructive text-[12px]"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="booking-mobile">Mobile Number</Label>
              <Input
                id="booking-mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="e.g. 9876543210"
                aria-invalid={!!errors.mobile}
                aria-describedby={
                  errors.mobile ? "booking-mobile-error" : undefined
                }
                {...register("mobile")}
              />
              {errors.mobile && (
                <p
                  id="booking-mobile-error"
                  role="alert"
                  className="text-destructive text-[12px]"
                >
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="booking-address">Home / Office Address</Label>
              <Input
                id="booking-address"
                type="text"
                autoComplete="street-address"
                placeholder="e.g. 12 Anna Nagar, Chennai"
                aria-invalid={!!errors.address}
                aria-describedby={
                  errors.address ? "booking-address-error" : undefined
                }
                {...register("address")}
              />
              {errors.address && (
                <p
                  id="booking-address-error"
                  role="alert"
                  className="text-destructive text-[12px]"
                >
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="booking-dob">Date of Birth</Label>
              <Input
                id="booking-dob"
                type="date"
                autoComplete="bday"
                aria-invalid={!!errors.dob}
                aria-describedby={errors.dob ? "booking-dob-error" : undefined}
                {...register("dob")}
              />
              {errors.dob && (
                <p
                  id="booking-dob-error"
                  role="alert"
                  className="text-destructive text-[12px]"
                >
                  {errors.dob.message}
                </p>
              )}
            </div>

            {submitError && (
              <p
                role="alert"
                className="border-destructive/30 bg-destructive/5 text-destructive rounded-lg border p-3 text-[12px]"
              >
                {submitError}{" "}
                <a
                  href={WHATSAPP_DEFAULT_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open WhatsApp
                </a>
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 w-full gap-2"
            >
              <Send aria-hidden="true" className="size-4" />
              {isSubmitting ? "Sending…" : "Book My Doorstep Visit"}
            </Button>

            <p className="text-neutral text-center text-[11px]">
              We&rsquo;ll only use these details to confirm your doorstep
              appointment.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
