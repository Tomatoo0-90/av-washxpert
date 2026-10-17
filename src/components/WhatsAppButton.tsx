"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AV's WashXpert on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass animate-pulse-glow sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
      <span className="sr-only">Book on WhatsApp</span>
    </motion.a>
  );
}
