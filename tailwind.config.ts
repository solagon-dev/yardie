import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f7f6f4',
          100: '#e8e5df',
          200: '#d4cdc0',
          300: '#baae9a',
          400: '#a08f75',
          500: '#8a7a60',
          600: '#6d6049',
          700: '#584d3c',
          800: '#4a4134',
          900: '#3f382e',
        },
        moss: {
          50: '#f3f7f3',
          100: '#e4ede3',
          200: '#cad9c8',
          300: '#a5bfa2',
          400: '#7a9c76',
          500: '#5a7f57',
          600: '#456543',
          700: '#385037',
          800: '#2e402d',
          900: '#263526',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
