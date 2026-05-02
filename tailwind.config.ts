import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Yardie Design palette ────────────────────────────────
      // Warm, architectural, restrained. The palette frames
      // photography rather than competing with it.
      colors: {
        // Backgrounds
        cream: "#F8F4EE",            // primary background — warm parchment
        "cream-alt": "#F0EBE2",      // alternate section background
        stone: "#E4DDD4",            // cards, dividers, subtle backgrounds

        // Text
        bark: "#1A1814",             // primary dark — near-black with warm undertone
        earth: "#3D3830",            // body text — softer than bark
        clay: "#6B5D50",             // secondary text, captions, metadata

        // Brand accent
        moss: "#6B7A5C",             // muted sage/olive — architectural
        "moss-light": "#8A9B7A",     // hover states, subtle accents

        // Borders
        border: "#C8BEB0",
        "border-light": "#E4DDD4",

        // Dark section
        "dark-bg": "#1A1814",
        "dark-surface": "#252118",
        "dark-border": "#3D3830",
        "dark-text": "#F8F4EE",
        "dark-muted": "#9E9488",

        // Accents (used sparingly)
        terracotta: "#C17F5A",
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],   // Cormorant Garamond
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],  // DM Sans
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        signature: ["var(--font-signature)", "cursive"],         // Mr Dafoe — handwritten
      },

      fontSize: {
        // Display sizes (Cormorant) — fluid where useful
        "display-xl": ["clamp(60px,8vw,120px)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(44px,5.5vw,80px)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(36px,4.5vw,64px)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(28px,3.2vw,48px)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],

        // Body (DM Sans)
        "body-lg": ["18px", { lineHeight: "1.75" }],
        "body": ["16px", { lineHeight: "1.7" }],
        "body-sm": ["15px", { lineHeight: "1.65" }],

        // Utility
        label: ["11px", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },

      spacing: {
        "section": "clamp(80px,10vw,160px)",
        "section-sm": "clamp(64px,8vw,96px)",
        "gutter": "clamp(24px,5vw,80px)",
      },

      maxWidth: {
        content: "1320px",
        wide: "1600px",
        editorial: "720px",
        narrow: "560px",
      },

      transitionTimingFunction: {
        "smooth-out": "cubic-bezier(0.22,1,0.36,1)",
        "smooth-in-out": "cubic-bezier(0.4,0,0.2,1)",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "hero-zoom": {
          "0%":   { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.10)" },
        },
        "wipe-up": {
          from: { clipPath: "inset(0 0 100% 0)" },
          to:   { clipPath: "inset(0 0 0% 0)" },
        },
      },

      animation: {
        "fade-up":         "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-delay-1": "fade-up 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-delay-2": "fade-up 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-delay-3": "fade-up 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":   "fade-in 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "hero-zoom": "hero-zoom 18s ease-in-out infinite alternate",
        "wipe-up":   "wipe-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },

      borderRadius: {
        DEFAULT: "2px",
        none: "0px",
        sm: "2px",
        md: "2px",
        lg: "4px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
