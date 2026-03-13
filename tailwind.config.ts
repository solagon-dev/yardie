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
      colors: {
        // Primary backgrounds
        cream: "#F8F4EE",
        "cream-alt": "#F0EBE2",
        "warm-stone": "#E4DDD4",
        // Text
        bark: "#1A1814",
        earth: "#3D3830",
        clay: "#6B5D50",
        // Brand accent
        moss: "#6B7A5C",
        "moss-light": "#8A9B7A",
        "moss-dark": "#556249",
        // Borders
        "border-warm": "#C8BEB0",
        "border-light": "#E4DDD4",
        // Accent
        terracotta: "#C17F5A",
        // Dark section surfaces
        "dark-surface": "#252118",
        "dark-border": "#3D3830",
        "dark-muted": "#9E9488",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,7.5rem)", { lineHeight: "0.97" }],
        "display-lg": ["clamp(2.8rem,5.5vw,5rem)", { lineHeight: "1.02" }],
        "display-md": ["clamp(2.2rem,4vw,3.5rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.75rem,3vw,2.75rem)", { lineHeight: "1.12" }],
      },
      spacing: {
        "section": "clamp(80px,10vw,160px)",
        "section-sm": "clamp(56px,6vw,96px)",
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
        "clip-up": {
          from: { clipPath: "inset(0 0 100% 0)" },
          to: { clipPath: "inset(0 0 0% 0)" },
        },
        "line-expand": {
          from: { transform: "scaleX(0)", transformOrigin: "left" },
          to: { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up-delay-1": "fade-up 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up-delay-2": "fade-up 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up-delay-3": "fade-up 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up-delay-4": "fade-up 0.6s 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "clip-up": "clip-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        none: "0px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
