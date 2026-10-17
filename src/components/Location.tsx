"use client";

import { Clock, MapPin, Navigation } from "lucide-react";
import { business, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section id="location" className="relative bg-base-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {copy.location.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.location.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl glass-panel">
              {/* असली लोकेशन का embed src src/lib/config.ts में बदलें। */}
              <iframe
                src={business.mapEmbedSrc}
                title={business.fullAddress}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full grayscale invert-[0.92] contrast-[1.1] hue-rotate-180"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-3xl glass-panel p-6 sm:p-8">
              <div>
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    {copy.location.addressLabel}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-chrome-400">
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                  <br />
                  {business.addressLine3}
                </p>
                <ul className="mt-3 space-y-1">
                  {business.landmarks.map((mark) => (
                    <li key={mark} className="text-sm text-chrome-500">
                      • {mark}
                    </li>
                  ))}
                </ul>
                <a
                  href={business.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft"
                >
                  <Navigation className="h-4 w-4" />
                  {copy.location.directions}
                </a>
              </div>

              <div className="h-px w-full bg-white/[0.08]" />

              <div>
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <Clock className="h-5 w-5" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    {copy.location.hoursLabel}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {business.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between gap-3 text-sm text-chrome-400"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium text-chrome-300">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
