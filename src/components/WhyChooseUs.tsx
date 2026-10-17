"use client";

import {
  ShieldCheck,
  Timer,
  ThumbsUp,
  Award,
  type LucideIcon,
} from "lucide-react";
import { stats, trustBadges, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Timer,
  ThumbsUp,
  Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-base-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {copy.whyUs.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.whyUs.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.08 * i} direction="none">
              <div className="rounded-2xl glass-panel px-4 py-8 text-center sm:px-6">
                <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-chrome-500">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon];
            return (
              <ScrollReveal key={badge.title} delay={0.06 * i}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-base-900/60 p-6 transition-all duration-300 ease-out-expo hover:border-accent/30 hover:bg-base-900">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {badge.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-chrome-500">
                    {badge.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
