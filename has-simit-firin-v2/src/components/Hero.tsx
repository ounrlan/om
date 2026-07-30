"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import GoldButton from "./GoldButton";
import { MaskLine } from "./Reveal";
import { hero, stats, BASE } from "@/data/site";

const EASE = [0.19, 1, 0.22, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Fotoğraf, içerikten daha yavaş kayar — derinlik hissi
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  // İçerik parallax'ı YOK — aşağı kaydırınca rakam şeridinin üzerine binmesin;
  // yalnızca yumuşakça solar.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative -mt-[86px] flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Arka plan fotoğrafı — yavaş yakınlaşma + parallax */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
        aria-hidden="true"
      >
        <motion.div
          className="relative h-full w-full"
          initial={reduce ? false : { scale: 1.1 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
        >
          <Image
            src={`${BASE}/images/hero.jpg`}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Karartma katmanları — alt ağır, sol ağır, üst hafif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.72)_0%,rgba(8,12,10,0.28)_38%,rgba(8,12,10,0.86)_82%,rgba(8,12,10,0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,10,0.85)_0%,rgba(8,12,10,0.35)_46%,transparent_78%)]"
      />
      {/* Sıcak altın ışık — sağ üstten gelen fırın parıltısı */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full opacity-[0.14] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,177,106,0.9) 0%, transparent 68%)",
        }}
      />

      {/* İçerik */}
      <motion.div
        className="container-x relative z-10 pb-14 pt-40 sm:pb-16 sm:pt-44"
        style={reduce ? undefined : { opacity: contentOpacity }}
      >
        <motion.p
          className="eyebrow mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="heading-xl max-w-[15ch]">
          {hero.titleLines.map((line, i) => (
            <MaskLine key={line} delay={0.2 + i * 0.12}>
              {line}
            </MaskLine>
          ))}
          <MaskLine delay={0.2 + hero.titleLines.length * 0.12}>
            <em className="gold-text font-display font-light italic">
              {hero.titleAccent}
            </em>
          </MaskLine>
        </h1>

        <motion.p
          className="mt-9 max-w-[48ch] text-[17px] font-light leading-[1.75] text-cream2 sm:text-[18px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
        >
          {hero.paragraph}
        </motion.p>

        <motion.div
          className="mt-11 flex flex-wrap items-center gap-x-10 gap-y-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.86, ease: EASE }}
        >
          <GoldButton href={hero.primaryCta.href} variant="solid">
            {hero.primaryCta.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.5} />
          </GoldButton>
          <a
            href={hero.textCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-gold"
          >
            {hero.textCta.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Alt rakam şeridi — hairline ızgara */}
      <motion.div
        className="relative z-10 border-t border-[rgba(212,177,106,0.18)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.05 }}
      >
        <div className="container-x">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1.5 py-6 lg:py-7 ${
                  i > 0 ? "lg:border-l lg:border-[rgba(212,177,106,0.14)] lg:pl-8" : ""
                } ${i % 2 === 1 ? "border-l border-[rgba(212,177,106,0.14)] pl-6 lg:pl-8" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[30px] font-light leading-none text-cream sm:text-[34px]">
                  {s.value}
                </dd>
                <p
                  aria-hidden="true"
                  className="font-mono text-[9.5px] uppercase tracking-label text-cream3"
                >
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* Kaydırma ipucu */}
      <motion.a
        href="#urunler"
        className="absolute bottom-[8.5rem] right-6 z-10 hidden flex-col items-center gap-3 text-cream3 transition-colors hover:text-gold lg:flex lg:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-label={hero.scrollHint}
      >
        <span className="font-mono text-[9.5px] uppercase tracking-label [writing-mode:vertical-rl]">
          {hero.scrollHint}
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-floaty" aria-hidden="true" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
