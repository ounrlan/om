"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ShieldCheck, Gem, Handshake, LineChart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { STATS } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold text-gold sm:text-6xl">
      {display.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

const FEATURES = [
  {
    icon: Gem,
    title: "Seçkin Portföy",
    text: "Piyasaya açılmadan önce yalnızca müşterilerimize sunulan, özenle seçilmiş mülkler.",
  },
  {
    icon: ShieldCheck,
    title: "Mutlak Gizlilik",
    text: "Varlıklarınız ve süreçleriniz, banka düzeyinde bir gizlilik anlayışıyla korunur.",
  },
  {
    icon: Handshake,
    title: "Uçtan Uca Temsil",
    text: "Değerlemeden tapuya; hukuk, finans ve pazarlık masasında hep yanınızdayız.",
  },
  {
    icon: LineChart,
    title: "Veriyle Değerleme",
    text: "Mülkünüzün gerçek değerini duygularla değil, güncel piyasa verisiyle belirleriz.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-olive-deep/40 py-24 sm:py-32">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Neden UYG Gold Estate?"
          title="Ayrıcalık bir vaat değil,"
          accent="standarttır."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="card-luxe h-full p-8">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold">
                  <f.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-medium text-cream">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-xs font-medium uppercase tracking-luxe text-stone">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="gold-divider absolute inset-x-0 bottom-0" />
    </section>
  );
}
