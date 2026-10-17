"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-base-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <ScrollReveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {copy.testimonials.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.testimonials.heading}
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl glass-panel px-6 py-10 sm:px-14 sm:py-14">
            <Quote className="absolute left-6 top-6 h-8 w-8 text-accent/20 sm:left-8 sm:top-8" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                {/* Body font, not the display face — this is a long line of
                    Hindi and readability beats personality here. */}
                <p className="text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 text-base font-semibold text-white">
                  {current.name}
                </p>
                <p className="text-sm text-chrome-500">{current.vehicle}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label={copy.testimonials.heading}
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 cursor-pointer rounded-full glass-panel p-3 text-chrome-300 transition-colors hover:text-accent sm:-translate-x-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={copy.testimonials.heading}
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 cursor-pointer rounded-full glass-panel p-3 text-chrome-300 transition-colors hover:text-accent sm:translate-x-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={t.name}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
