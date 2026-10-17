"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { media, contact, copy } from "@/lib/config";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-base-950"
    >
      {/* Background layer: real footage first, poster image as guaranteed fallback. */}
      <div className="absolute inset-0">
        {!videoFailed && (
          // PLACEHOLDER VIDEO — replace media.heroVideoSrc in src/lib/config.ts
          // with a real looping clip (foam, water spray, shine reveal).
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={media.heroPosterImage}
            onError={() => setVideoFailed(true)}
          >
            <source src={media.heroVideoSrc} type="video/mp4" />
          </video>
        )}
        {videoFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.heroPosterImage}
            alt="Car being detailed at AV's WashXpert"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/70 to-base-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-base-950/80 via-transparent to-base-950/40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:pt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-sm font-medium text-accent-soft"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {copy.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {copy.hero.headlineTop}
            <span className="block text-accent">{copy.hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-chrome-400"
          >
            {copy.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-4 text-sm font-semibold text-base-950 shadow-glow transition-transform duration-300 ease-out-expo hover:scale-[1.03] active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 ease-out-expo group-hover:translate-x-full" />
              <MessageCircle className="relative h-4 w-4" />
              <span className="relative">{copy.hero.ctaPrimary}</span>
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full glass-panel px-7 py-4 text-sm font-semibold text-white transition-all duration-300 ease-out-expo hover:border-accent/40 hover:text-accent"
            >
              {copy.hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() =>
          document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer text-chrome-500 transition-colors hover:text-accent sm:block"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.button>
    </section>
  );
}
