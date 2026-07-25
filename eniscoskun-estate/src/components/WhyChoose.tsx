"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, MapPin, Handshake, LineChart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { STATS } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const duration = 1800;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    // Yedek: gözlemci herhangi bir sebeple tetiklenmezse yine de sayar.
    const fallback = setTimeout(run, 2600);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [value]);

  return (
    <span
      ref={ref}
      className="font-display text-5xl font-semibold text-gold-bright sm:text-6xl"
    >
      {display.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

const FEATURES = [
  {
    icon: MapPin,
    title: "Yerel Uzmanlık",
    text: "Eryaman ve Ankara'nın batı aksını sokak sokak biliriz. Doğru bölge, doğru mülk, doğru fiyat.",
  },
  {
    icon: ShieldCheck,
    title: "Güven & Şeffaflık",
    text: "Alıcı ve satıcı arasında kurduğumuz güven bağıyla, her adımda açık ve dürüst bilgi veririz.",
  },
  {
    icon: Handshake,
    title: "Uçtan Uca Süreç",
    text: "İlk görüşmeden tapuya kadar; pazarlık, evrak ve süreç yönetiminde tek yetkili danışmanınız yanınızda.",
  },
  {
    icon: LineChart,
    title: "Hızlı ve Etkin Sonuç",
    text: "Doğru fiyatlama ve etkili tanıtımla mülkünüzü değerinde ve kısa sürede alıcı/kiracıyla buluştururuz.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-graphite py-24 sm:py-32">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Neden Enis Coşkun?"
          title="Emlak, güven"
          accent="işidir."
          align="center"
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="glass-dark h-full rounded-card p-8">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-soft/25 bg-gold/10 text-gold-bright">
                  <f.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-medium text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-xs font-medium uppercase tracking-luxe text-white/50">
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
