"use client";

import { useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { business } from "@/data/site";

/**
 * Fırın saati karesi — sol kenara yapışık küçük kare. Sayfanın en üstünde
 * 06.00'ı gösterir; aşağı indikçe saat ilerler ve sayfanın sonunda tam
 * 19.30 olur (fırının açılış–kapanış saatleri).
 */
export default function ScrollClock() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [mins, setMins] = useState(business.opensAt);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(1, Math.max(0, v));
    setMins(
      Math.round(business.opensAt + (business.closesAt - business.opensAt) * p)
    );
  });

  if (reduce) return null;

  const h = String(Math.floor(mins / 60)).padStart(2, "0");
  const m = String(mins % 60).padStart(2, "0");

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 z-40 hidden flex-col items-center gap-1.5 border-r border-t border-[rgba(212,177,106,0.35)] bg-night2/85 px-3 py-3.5 backdrop-blur-sm lg:flex"
    >
      <span className="font-mono text-[13px] font-medium tabular-nums leading-none text-gold">
        {h}.{m}
      </span>
      {/* Gün ilerleme çizgisi — 06.00→19.30 arası doluluk */}
      <span className="block h-px w-9 bg-[rgba(212,177,106,0.2)]">
        <span
          className="block h-px bg-gold transition-[width] duration-150 ease-linear"
          style={{
            width: `${((mins - business.opensAt) / (business.closesAt - business.opensAt)) * 100}%`,
          }}
        />
      </span>
      <span className="font-mono text-[7.5px] uppercase leading-none tracking-[0.22em] text-cream3">
        Fırın Saati
      </span>
    </div>
  );
}
