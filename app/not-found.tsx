import Link from "next/link";
import { Compass, MessageCircle, PhoneCall } from "lucide-react";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_DEFAULT_HREF,
} from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-surface-container-low flex flex-1 items-center py-20"
      >
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <span className="bg-tertiary/10 text-tertiary mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl">
            <Compass aria-hidden="true" className="size-8" />
          </span>
          <h1 className="text-headline-lg-mobile text-primary md:text-headline-lg">
            This page took a wrong turn
          </h1>
          <p className="text-body-md text-on-surface-variant mt-3">
            The page you were looking for doesn&rsquo;t exist or has moved. Our
            team is still here to help with your visa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/visa"
              className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg rounded-md px-6 py-3 shadow-md transition-colors"
            >
              Browse Visa Guide
            </Link>
            <a
              href={WHATSAPP_DEFAULT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-lg flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-emerald-500"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              WhatsApp Us
            </a>
            <a
              href={PHONE_TEL_HREF}
              className="text-label-lg border-outline-variant bg-card text-primary hover:border-tertiary flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
            >
              <PhoneCall aria-hidden="true" className="size-5" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <p className="text-neutral mt-8 text-[12px]">
            Or head back to the{" "}
            <Link href="/" className="text-tertiary underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
