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
        // ── Gece zemini: sıcak, yeşile çalan siyah katmanları ──
        night: "#080C0A", // sayfa zemini
        night2: "#0D1310", // yükseltilmiş bölüm zemini
        night3: "#131C17", // kart / hover yüzeyi
        pine: "#0E3B2E", // v1'den korunan marka yeşili

        // ── Krem tipografi ──
        cream: "#F3EADB",
        cream2: "rgba(243,234,219,0.64)", // ikincil metin
        cream3: "rgba(243,234,219,0.40)", // üçüncül / meta

        // ── Altın varak ailesi ──
        gold: "#D4B16A", // ana altın
        goldlt: "#F1E1B4", // varak parlaması
        golddk: "#9C7828", // varak gölgesi
        copper: "#B98A55", // bakır — ikincil aksan
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        // Lüks = keskin köşe. Yalnızca 2px'lik bir yumuşama.
        card: "2px",
        btn: "2px",
        pill: "999px",
      },
      letterSpacing: {
        label: "0.3em", // uppercase mikro etiketler
        wide2: "0.16em",
        tightlg: "-0.02em", // dev serif başlıklar
      },
      boxShadow: {
        lift: "0 40px 90px -50px rgba(0,0,0,0.9)",
        goldsoft:
          "0 0 0 1px rgba(212,177,106,0.22), 0 34px 70px -44px rgba(212,177,106,0.30)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        marquee: "marquee 46s linear infinite",
        floaty: "floaty 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
