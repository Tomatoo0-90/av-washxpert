"use client";

import Image from "next/image";
import {
  Droplets,
  Sparkles,
  Armchair,
  CircleDot,
  Shield,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { services, copy } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Sparkles,
  Armchair,
  CircleDot,
  Shield,
  Wind,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-base-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {copy.services.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.services.heading}
          </h2>
          <p className="mt-4 text-lg text-chrome-500">{copy.services.sub}</p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const spanClass =
              i === 0
                ? "lg:col-span-2 lg:row-span-1"
                : i === 4
                ? "sm:col-span-2 lg:col-span-1"
                : "";

            return (
              <ScrollReveal
                key={service.title}
                delay={0.06 * (i % 3)}
                className={spanClass}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl glass-panel transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-base-950/80 text-accent ring-1 ring-accent/30 backdrop-blur-md">
                      {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-chrome-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
