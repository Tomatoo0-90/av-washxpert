# AV's WashXpert

Premium single-page website for AV's WashXpert, a car wash & detailing studio
in Simga, Tilda, Chhattisgarh. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion, and lucide-react.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Before going live — replace these placeholders

Everything below is centralized in **`src/lib/config.ts`** — edit that one
file to update content across the whole site.

1. **WhatsApp number** — `contact.whatsappNumber` in `src/lib/config.ts`.
   Use international format, digits only (e.g. `91XXXXXXXXXX`).
2. **Hero video** — drop a real looping clip (foam/water/shine) into
   `public/videos/hero-wash-loop.mp4`. The path is already wired up in
   `media.heroVideoSrc`; if the file is missing the hero gracefully falls
   back to the poster image via the native `<video poster>` attribute.
3. **Process clips** — `public/videos/foam-wash-clip.mp4` and
   `shine-reveal-clip.mp4`, referenced in `gallery.processClips`.
4. **Photos** — every `services`, `gallery`, and `media.heroPosterImage`
   entry currently points to Unsplash placeholder photography. Swap for
   real business photos (drop files in `public/images/` and point the
   config at `/images/your-file.jpg`).
5. **Google Maps embed** — `business.mapEmbedSrc`. Get the real embed URL
   from Google Maps → Share → Embed a map → copy the `<iframe src>`.
6. **Testimonials / stats / hours** — also in `src/lib/config.ts`, replace
   with real customer reviews and current business stats.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — dark "detailing studio" theme (matte black + chrome +
  electric cyan) defined in `tailwind.config.ts`
- Framer Motion — scroll reveals (`src/components/ScrollReveal.tsx`),
  animated counters (`src/components/AnimatedCounter.tsx`), hover/tap
  micro-interactions
- lucide-react — icon set (no emoji icons, no brand-logo icons)
- Fonts: Space Grotesk (display) + Inter (body) via `next/font/google`
