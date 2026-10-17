import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: {
          950: "#05070A",
          900: "#0A0D12",
          800: "#10141C",
          700: "#171C26",
        },
        chrome: {
          300: "#E4E8ED",
          400: "#C3CAD3",
          500: "#9AA3AF",
          600: "#6B7280",
        },
        accent: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
          deep: "#0891B2",
        },
      },
      fontFamily: {
        // Devanagari font sits second in each stack: Latin renders in
        // Space Grotesk / Inter, Hindi falls through to Mukta per-character.
        display: ["var(--font-display)", "var(--font-devanagari)", "sans-serif"],
        body: ["var(--font-body)", "var(--font-devanagari)", "sans-serif"],
      },
      backgroundImage: {
        "chrome-gradient":
          "linear-gradient(135deg, #E4E8ED 0%, #9AA3AF 45%, #E4E8ED 55%, #6B7280 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(34,211,238,0.18), transparent 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        glow: "0 0 24px rgba(34, 211, 238, 0.35)",
        "glow-lg": "0 0 48px rgba(34, 211, 238, 0.45)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(34, 211, 238, 0.55)",
          },
          "50%": {
            boxShadow: "0 0 0 14px rgba(34, 211, 238, 0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
