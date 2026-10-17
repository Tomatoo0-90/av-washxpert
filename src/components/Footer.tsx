"use client";

import { AtSign, Share2, MessageCircle, Sparkles } from "lucide-react";
import { business, contact, navLinks, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-base-950 pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="rounded-3xl glass-panel px-6 py-14 text-center sm:px-14 sm:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.footer.ctaHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-chrome-500">
              {copy.footer.ctaSub}
            </p>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-base-950 shadow-glow transition-transform duration-300 ease-out-expo hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              {copy.footer.ctaButton}
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/[0.06] py-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/30">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-chrome-gradient">{business.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-chrome-500">
              {business.addressLine1}
              <br />
              {business.addressLine2}
              <br />
              {business.addressLine3}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-chrome-400">
              {copy.footer.linksLabel}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer text-sm text-chrome-500 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-chrome-400">
              {copy.footer.connectLabel}
            </h4>
            <div className="flex gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full glass-panel text-chrome-400 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full glass-panel text-chrome-400 transition-colors hover:text-accent"
              >
                <AtSign className="h-4 w-4" />
              </a>
              {/* Facebook icon stays hidden until a real page URL is set. */}
              {contact.facebookUrl && (
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full glass-panel text-chrome-400 transition-colors hover:text-accent"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6 text-center text-xs text-chrome-600">
          © {new Date().getFullYear()} {business.name}. {copy.footer.rights}
        </div>
      </div>
    </footer>
  );
}
