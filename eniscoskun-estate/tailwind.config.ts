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
        // ── Nötr gri skala (açık → koyu) ──
        porcelain: "#F7F6F2", // ana sayfa zemini (sıcak inci beyazı)
        cloud: "#EFEDE7", // alternatif bölüm zemini (yumuşak gri)
        mist: "#E2DFD7", // kenarlık / ayraç grisi
        pearl: "#FCFBF8", // kart zemini (neredeyse beyaz)
        steel: "#9A9CA1", // soluk gri (alt metin)
        ash: "#6C6F75", // gövde metni grisi
        slate: "#44474D", // ikincil koyu gri
        graphite: "#2C2E33", // koyu bölümler (hero/footer bandı)
        ink: "#1B1C20", // en koyu (metin / footer)
        // ── Altın ──
        gold: {
          DEFAULT: "#B68A44", // ana altın (buton, ikon, aksan)
          deep: "#8A6A2C", // açık zeminde okunur altın metin
          soft: "#D9C08A", // yumuşak altın (koyu zeminde metin, kenarlık)
          bright: "#CBA85F", // koyu zeminde parlak aksan
          pale: "#EFE7D3", // hafif altın tonlu zemin
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
        brand: ["var(--font-brand)", "Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        btn: "999px",
      },
      boxShadow: {
        soft: "0 10px 30px -14px rgba(28,30,36,0.14)",
        card: "0 20px 46px -22px rgba(28,30,36,0.20)",
        lift: "0 34px 70px -28px rgba(28,30,36,0.30)",
        "gold-glow":
          "0 0 0 1px rgba(182,138,68,0.30), 0 22px 48px -22px rgba(182,138,68,0.32)",
        dark: "0 30px 70px -30px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(182,138,68,0.55), transparent)",
        "hero-vignette":
          "linear-gradient(180deg, rgba(24,25,29,0.30) 0%, rgba(24,25,29,0.55) 45%, rgba(20,21,25,0.92) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
