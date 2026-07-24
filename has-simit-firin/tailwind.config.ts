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
        // ── Duotone disiplin: tek krem zemin + tek koyu marka rengi ──
        cream: "#F7EFE2", // gövde zemini — her yerde sabit
        cream2: "#F0E3CB", // ikincil yüzey / kart zemini
        pine: "#0E3B2E", // marka koyu yeşili — başlık, buton, ikon, footer
        ink: "rgba(14,59,46,0.78)", // paragraf metni (%78 opak yeşil)
        // ── Cimrice kullanılan aksanlar ──
        sesame: "#D4A94C", // susam altını — yıldız, hover gölge-kartı, vurgu
        coffee: "#8B5E34", // kahve — rozet/ayraç/ürün etiketi
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        // Köşe token sistemi — her yerde tutarlı tekrar
        card: "10px", // görseller + kartlar
        btn: "7px", // butonlar
        pill: "9px", // küçük pill'ler / etiketler
      },
      letterSpacing: {
        label: "0.08em", // UPPERCASE etiket ~ +1px @13px
        tightlg: "-0.01em", // büyük başlıklarda hafif negatif
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(14,59,46,0.28)",
        card: "0 26px 54px -28px rgba(14,59,46,0.32)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
