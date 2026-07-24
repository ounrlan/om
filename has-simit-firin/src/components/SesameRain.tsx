"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";

// #urunler'e giden herhangi bir bağlantıya (header nav, mobil menü, hero CTA)
// tıklanınca 0.7 sn'lik kısa bir susam tanesi yağmuru oynatır.
// Overlay pointer-events-none'dur; anchor navigasyonunu/scroll'u engellemez.

const DURATION_MS = 3200;

// Susam tonları — kahve ve koyu tonlar ağırlıklı (krem zeminde kaybolmasınlar),
// arada sesame altını.
const TONES = [
  "#8B5E34",
  "#8B5E34",
  "#6F4722",
  "#5C3A1C",
  "#B8843F",
  "#C79A3E",
  "#D4A94C",
];

type Grain = {
  id: number;
  left: number; // yüzde (viewport genişliği)
  startY: number; // px (ekranın hemen üstünde)
  fall: number; // px (düşüş mesafesi)
  drift: number; // px (yatay salınım)
  rotate: number; // derece (toplam dönüş)
  w: number; // px
  h: number; // px
  color: string;
  duration: number; // sn
  delay: number; // sn
};

function makeGrains(): Grain[] {
  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  // Yoğun döküm: ~her 12px genişliğe 1 tane (min 80, max 170).
  const count = Math.min(170, Math.max(80, Math.round(vw / 12)));
  const slice = 100 / count; // eşit yatay dilim — tüm genişlikte boşluk yok
  // Basit sürekli yağmur: her tane ekranın üstünden altına ~0.8–1.0 sn'de
  // düşer; gecikmeler 0–2.0 sn'ye yayıldığı için taneler art arda dökülür ve
  // 3 sn boyunca kesintisiz yağmur olur (son tane ≤3.0 sn'de biter).
  return Array.from({ length: count }, (_, id) => {
    const w = 4.5 + Math.random() * 3.5; // 4.5–8px (belirgin)
    return {
      id,
      // Stratified yatay dağılım: her tane kendi dilimi içinde rastgele.
      left: (id + Math.random()) * slice,
      startY: -40 - Math.random() * 80, // ekran üstü (−40..−120px)
      fall: vh + 80, // ekranın altına kadar — linear
      drift: (Math.random() - 0.5) * 90,
      rotate: (Math.random() - 0.5) * 540,
      w,
      h: w * (1.9 + Math.random() * 0.6), // oval — boy > en
      color: TONES[Math.floor(Math.random() * TONES.length)],
      duration: 0.8 + Math.random() * 0.2, // 0.8–1.0 sn düşüş
      // 0–2.0 sn gecikme, hafif öne yüklü (üs 1.3) — yağmur ilk anda da
      // yoğun başlar, akış yine 3 sn'ye yayılır.
      delay: 2.0 * Math.pow(Math.random(), 1.3),
    };
  });
}

export default function SesameRain() {
  const reduce = useReducedMotion();
  const [grains, setGrains] = useState<Grain[]>([]);
  const [burst, setBurst] = useState(0);
  const timer = useRef<number>();

  const trigger = useCallback(() => {
    if (reduce) return;
    setGrains(makeGrains());
    setBurst((b) => b + 1); // yeni key → art arda tıklamada temiz yeniden başlar
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setGrains([]), DURATION_MS);
  }, [reduce]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href$="#urunler"]');
      if (anchor) trigger();
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [trigger]);

  if (grains.length === 0) return null;

  // Portal ile doğrudan body'ye render — transform'lu bir atanın
  // `position: fixed`i viewport yerine kendine bağlamasına takılmaz.
  return createPortal(
    <div
      key={burst}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {grains.map((g) => (
        <motion.span
          key={g.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${g.left}%`,
            top: 0,
            width: g.w,
            height: g.h,
            background: g.color,
          }}
          initial={{ y: g.startY, x: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: g.fall,
            x: g.drift,
            rotate: g.rotate,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: g.duration,
            delay: g.delay,
            // Sabit hızlı süpürme; her tur sonunda kolon başa sarar (repeat).
            // Tur sonundaki kısa opacity solması sarma anını gizler; süreler
            // tane başına farklı olduğundan turlar desenkronize akar.
            ease: "linear",
            repeat: 2,
            opacity: { times: [0, 0.9, 1] },
          }}
        />
      ))}
    </div>,
    document.body
  );
}
