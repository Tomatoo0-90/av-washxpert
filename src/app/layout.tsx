import type { Metadata } from "next";
import { Space_Grotesk, Inter, Mukta } from "next/font/google";
import "./globals.css";

// Latin display face — logo, section headings and stat numbers only.
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Space Grotesk and Inter carry no Devanagari glyphs. Mukta does, so the
// browser falls through to it per-character for all Hindi text.
const devanagariFont = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AV's WashXpert | Car Wash & Detailing Studio, Simga",
  // Description carries the Hindi terms too, so the site is findable either way.
  description:
    "Car wash and detailing in Simga, Tilda, Chhattisgarh — foam wash, interior detailing, polishing and ceramic coating. सिमगा में कार वॉश और डिटेलिंग। WhatsApp पर बुक करें।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${devanagariFont.variable} bg-base-950 text-white antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
