import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A08",
        charcoal: "#141412",
        graphite: "#1C1C19",
        olive: {
          DEFAULT: "#3B3A26",
          deep: "#23231A",
          soft: "#4C4B33",
        },
        khaki: {
          DEFAULT: "#8A8460",
          dark: "#6B6547",
        },
        gold: {
          DEFAULT: "#C9A962",
          soft: "#D8BE7F",
          deep: "#A8863B",
          muted: "#9C8654",
        },
        cream: "#F3EFE6",
        stone: "#A8A494",
        navy: "#0B1220",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "999px",
      },
      boxShadow: {
        luxe: "0 24px 60px -24px rgba(0,0,0,0.6)",
        "luxe-lg": "0 40px 90px -30px rgba(0,0,0,0.75)",
        "gold-glow": "0 0 0 1px rgba(201,169,98,0.25), 0 20px 50px -20px rgba(201,169,98,0.2)",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,169,98,0.6), transparent)",
        "hero-vignette":
          "linear-gradient(180deg, rgba(10,10,8,0.55) 0%, rgba(10,10,8,0.25) 40%, rgba(10,10,8,0.85) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
