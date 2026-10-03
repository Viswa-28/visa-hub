import { PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { PHONE_TEL_HREF, WHATSAPP_DEFAULT_HREF } from "@/lib/constants";

/**
 * Always-reachable WhatsApp/Call pair pinned to the bottom on mobile. Replaces
 * the floating button below lg (the two would otherwise overlap), and the body
 * carries matching bottom padding so this never covers footer content.
 */
export function MobileCtaBar() {
  return (
    <div
      className="border-outline-variant bg-card/95 fixed inset-x-0 bottom-0 z-40 border-t shadow-[0_-4px_16px_rgba(7,27,59,0.08)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-stretch gap-2 p-2">
        <a
          href={WHATSAPP_DEFAULT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-label-lg flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white transition-colors hover:bg-emerald-500"
        >
          <WhatsAppIcon aria-hidden="true" className="size-5" />
          WhatsApp
        </a>
        <a
          href={PHONE_TEL_HREF}
          className="bg-primary text-primary-foreground hover:bg-tertiary text-label-lg flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg transition-colors"
        >
          <PhoneCall aria-hidden="true" className="size-5" />
          Call Now
        </a>
      </div>
    </div>
  );
}
