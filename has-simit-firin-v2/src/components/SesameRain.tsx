"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";

// #urunler'e giden herhangi bir bağlantıya (header nav, mobil menü, hero CTA)
// tıklanınca kısa bir susam tanesi yağmuru oynatır.
// v2: gece zemininde ALTIN tonlu taneler — varak konfetisi hissi.
// Overlay pointer-events-none'dur; anchor navigasyonunu/scroll'u engellemez.

// Hızlı ve akıcı: taneler ~0,6 sn'de düşer; overlay kısa sürede kalkar.
const DURATION_MS = 1100;

// Gerçek susam tonları (referans foto) — krem/bej ağırlıklı, arada kavrulmuş
// altın; koyu zeminde doğal tane gibi görünür. [taban, açık uç] çiftleri:
// her tane hafif degrade alır (ışık üstten vurur).
const TONES: ReadonlyArray<readonly [string, string]> = [
  ["#EFE3C8", "#FAF3E0"],
  ["#EFE3C8", "#FAF3E0"],
  ["#E8DCC3", "#F6EDD8"],
  ["#E8DCC3", "#F6EDD8"],
  ["#DCC9A5", "#EFE3C8"],
  ["#DCC9A5", "#EFE3C8"],
  ["#D4BD90", "#EADCB8"],
  ["#C9A96B", "#E3CD9C"], // kavrulmuş — azınlıkta
  ["#B98A55", "#D8BC8A"], // kavrulmuş — azınlıkta
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
  tone: readonly [string, string]; // [taban, açık uç] — tane degradesi
  duration: number; // sn
  delay: number; // sn
};

function makeGrains(): Grain[] {
  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  // Yoğun ama akıcı — performans için tane sayısı sınırlı (min 130, max 240).
  const count = Math.min(240, Math.max(130, Math.round(vw / 7)));
  const slice = 100 / count; // eşit yatay dilim
  return Array.from({ length: count }, (_, id) => {
    const w = 5.5 + Math.random() * 4.5; // 5.5–10px (belirgin)
    // Taneler zamanla değil, DİKEYDE kademelenir: bir kısmı ekranın üstünde,
    // bir kısmı zaten ekranın içinde başlar → ilk kareden itibaren TÜM sayfa
    // susam dolu olur ve yağmur kesintisiz akar.
    const startY = vh * (Math.random() * 1.9 - 1.0); // −vh … +0.9vh
    const fall = vh + 100;
    return {
      id,
      left: (id + Math.random()) * slice,
      startY,
      fall,
      drift: (Math.random() - 0.5) * 120,
      rotate: (Math.random() - 0.5) * 420,
      w,
      h: w * (1.7 + Math.random() * 0.4), // gerçek susam oranı ~1:1.8
      tone: TONES[Math.floor(Math.random() * TONES.length)],
      duration: 0.55 + Math.random() * 0.15, // ~0,6 sn'de düşüş
      delay: Math.random() * 0.15,
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
    setBurst((b) => b + 1);
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
        <span
          key={g.id}
          className="sesame-grain"
          style={
            {
              left: `${g.left}%`,
              width: g.w,
              height: g.h,
              // Gerçek susam formu: üstü sivri, altı dolgun damla + üstten
              // vuran ışık degradesi ve tabanda ince gölge.
              borderRadius: "50% 50% 50% 50% / 64% 64% 36% 36%",
              background: `linear-gradient(175deg, ${g.tone[1]} 8%, ${g.tone[0]} 62%, ${g.tone[0]} 100%)`,
              boxShadow: "inset 0 -1px 1px rgba(120,90,45,0.4)",
              // CSS animasyon parametreleri — sesame-fall (globals.css)
              "--y0": `${g.startY}px`,
              "--y1": `${g.fall}px`,
              "--dx": `${g.drift}px`,
              "--rot": `${g.rotate}deg`,
              "--dur": `${g.duration}s`,
              "--dly": `${g.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>,
    document.body
  );
}
