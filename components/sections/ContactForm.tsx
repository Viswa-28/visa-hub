"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_DEFAULT_HREF } from "@/lib/constants";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

export function ContactForm({ destinations }: { destinations: string[] }) {
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setIsSent(true);
    } catch {
      setSubmitError(
        "Sorry, we couldn't send your enquiry just now. Please try again, or message us on WhatsApp.",
      );
    }
  }

  if (isSent) {
    return (
      <div
        role="status"
        className="border-outline-variant bg-surface-container-low rounded-xl border p-8 text-center shadow-sm"
      >
        <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 aria-hidden="true" className="size-8" />
        </span>
        <h2 className="text-headline-sm text-primary">
          Thanks for your enquiry!
        </h2>
        <p className="text-body-sm text-on-surface-variant mt-2">
          We&rsquo;ve received your details. Our team will get back to you
          shortly on the number you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-outline-variant bg-surface-container-low space-y-5 rounded-xl border p-6 shadow-sm sm:p-8"
    >
      <Field
        id="contact-name"
        label="Full Name"
        error={errors.name?.message}
        inputProps={{
          type: "text",
          autoComplete: "name",
          placeholder: "e.g. Karthick Raja",
          ...register("name"),
        }}
      />

      <Field
        id="contact-email"
        label="Email Address"
        error={errors.email?.message}
        inputProps={{
          type: "email",
          autoComplete: "email",
          placeholder: "you@example.com",
          ...register("email"),
        }}
      />

      <Field
        id="contact-phone"
        label="Mobile Number"
        error={errors.phone?.message}
        inputProps={{
          type: "tel",
          inputMode: "numeric",
          autoComplete: "tel",
          placeholder: "e.g. 9876543210",
          ...register("phone"),
        }}
      />

      <div className="space-y-1.5">
        <Label htmlFor="contact-destination">Where are you travelling?</Label>
        <select
          id="contact-destination"
          defaultValue=""
          aria-invalid={!!errors.destination}
          aria-describedby={
            errors.destination ? "contact-destination-error" : undefined
          }
          className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive text-body-sm h-10 w-full rounded-lg border bg-transparent px-2.5 outline-none transition-colors focus-visible:ring-3"
          {...register("destination")}
        >
          <option value="" disabled>
            Select a destination…
          </option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
          <option value="Other / not sure yet">Other / not sure yet</option>
        </select>
        {errors.destination && (
          <p
            id="contact-destination-error"
            role="alert"
            className="text-destructive text-[12px]"
          >
            {errors.destination.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">
          Your enquiry <span className="text-neutral">(optional)</span>
        </Label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us about your trip, visa type, or any questions…"
          className="border-input focus-visible:border-ring focus-visible:ring-ring/50 text-body-sm w-full rounded-lg border bg-transparent px-2.5 py-2 outline-none transition-colors focus-visible:ring-3"
          {...register("message")}
        />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
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
            className="inline-flex items-center gap-1 underline"
          >
            <WhatsAppIcon aria-hidden="true" className="size-3.5" />
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
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </Button>

      <p className="text-neutral text-center text-[11px]">
        We&rsquo;ll only use these details to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  inputProps,
}: {
  id: string;
  label: string;
  error?: string;
  inputProps: React.ComponentProps<typeof Input>;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-destructive text-[12px]">
          {error}
        </p>
      )}
    </div>
  );
}
