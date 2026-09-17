"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_DEFAULT_HREF } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_DEFAULT_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${PHONE_DISPLAY}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="fixed right-4 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/30 transition-colors hover:bg-emerald-500 sm:right-6"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <MessageCircle aria-hidden="true" className="size-7" />
    </motion.a>
  );
}
