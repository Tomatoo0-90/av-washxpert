"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle, MoveHorizontal } from "lucide-react";
import { gallery, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

function BeforeAfterSlider({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="group relative overflow-hidden rounded-3xl glass-panel">
      <div className="relative aspect-[4/3] w-full select-none">
        <Image
          src={after}
          alt={`${label} — ${copy.gallery.after}`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* The "before" photo is a genuinely dirty car — no colour filter.
            A grayscale trick would only show black-and-white vs colour,
            which is not the difference a customer cares about. */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={before}
            alt={`${label} — ${copy.gallery.before}`}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-accent"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base-950 shadow-glow">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-base-950/75 px-3 py-1 text-xs font-semibold text-chrome-300">
          {copy.gallery.before}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-base-950">
          {copy.gallery.after}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`${label} — ${copy.gallery.sub}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="px-5 py-4 text-sm font-medium text-chrome-300">{label}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-base-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {copy.gallery.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.gallery.heading}
          </h2>
          <p className="mt-4 text-lg text-chrome-500">{copy.gallery.sub}</p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {gallery.beforeAfter.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.1 * i}>
              <BeforeAfterSlider {...item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <h3 className="font-display text-2xl font-semibold">
            {copy.gallery.moreHeading}
          </h3>
        </ScrollReveal>

        <div className="mt-6 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {gallery.masonry.map((src, i) => (
            <ScrollReveal key={src} delay={0.05 * i} direction="none">
              <div className="group relative overflow-hidden rounded-2xl glass-panel">
                <Image
                  src={src}
                  alt={copy.gallery.moreHeading}
                  width={700}
                  height={i % 3 === 0 ? 850 : 550}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {gallery.processClips.map((clip) => (
            <ScrollReveal key={clip.src}>
              <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl glass-panel">
                {/* PLACEHOLDER — असली वीडियो /public/videos में डालें। */}
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={clip.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-base-950/30 transition-colors group-hover:bg-base-950/10" />
                <PlayCircle className="relative h-14 w-14 text-white/90 drop-shadow-lg" />
                <span className="absolute bottom-4 left-4 rounded-full bg-base-950/70 px-3 py-1 text-xs font-medium text-chrome-300">
                  {clip.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
