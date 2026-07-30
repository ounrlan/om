"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sunrise, Wheat, Store, type LucideIcon } from "lucide-react";
import Reveal, { MaskLine } from "./Reveal";
import { story, BASE } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  wheat: Wheat,
  store: Store,
};

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="hikaye" className="scroll-mt-28 bg-night">
      <div className="container-x py-24 sm:py-28 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.02fr] lg:gap-24">
          {/* Sol — metin */}
          <div>
            <Reveal>
              <p className="eyebrow mb-7">
                <span className="text-gold/60">{story.index}</span>
                <span className="text-gold">{story.eyebrow}</span>
              </p>
            </Reveal>

            <h2 className="heading-lg max-w-[13ch]">
              <MaskLine>{story.heading}</MaskLine>
              <MaskLine delay={0.1}>
                <em className="gold-text font-display font-light italic">
                  {story.headingAccent}
                </em>
              </MaskLine>
            </h2>

            <div className="mt-9 space-y-6">
              {story.body.map((para, i) => (
                <Reveal key={i} delay={0.16 + i * 0.08}>
                  <p className="max-w-[52ch] text-[16.5px] font-light leading-[1.85] text-cream2">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sağ — parallax fotoğraf, kaydırılmış altın çerçeve içinde */}
          <Reveal delay={0.14}>
            <div ref={ref} className="relative">
              {/* Kaydırılmış hairline çerçeve */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -right-5 top-5 hidden w-full border border-[rgba(212,177,106,0.30)] lg:block"
              />
              <div className="img-frame group relative aspect-[4/5] w-full lg:aspect-[5/6]">
                <motion.div
                  className="absolute inset-0 h-[116%] -top-[8%]"
                  style={reduce ? undefined : { y: imgY }}
                >
                  <Image
                    src={`${BASE}/images/hikaye.jpg`}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(8,12,10,0.55)_100%)]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Değerler — roma rakamlı, hairline ayraçlı üçlü */}
        <div className="mt-24 grid border-t border-[rgba(212,177,106,0.16)] sm:grid-cols-3">
          {story.values.map((v, i) => {
            const Icon = icons[v.icon] ?? Store;
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <div
                  className={`group h-full py-10 sm:py-12 ${
                    i > 0
                      ? "border-t border-[rgba(212,177,106,0.16)] sm:border-l sm:border-t-0 sm:pl-10"
                      : "sm:pr-10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-label text-gold/70">
                      {v.no}
                    </span>
                    <Icon
                      className="h-[18px] w-[18px] text-gold transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="mt-6 font-display text-[24px] font-light leading-tight text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-[14.5px] font-light leading-[1.75] text-cream2">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
