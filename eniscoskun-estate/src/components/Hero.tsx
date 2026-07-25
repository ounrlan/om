"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Star, MapPin } from "lucide-react";
import { GOOGLE } from "@/data/site";

const HERO_IMAGE = "/ofis.webp";

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
};

const lineReveal = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-graphite">
      {/* Arka plan */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Enis Coşkun Gayrimenkul Eryaman ofisi — resepsiyon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_50%] lg:object-left [filter:contrast(1.08)_saturate(1.06)_brightness(1.04)]"
        />
        {/* Fotoğraf önceden karartılmış olduğundan kaplamalar hafif tutuldu */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/45 via-graphite/15 to-graphite/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/35 to-transparent" />
      </motion.div>

      <motion.div
        className="container-luxe relative z-10 pb-24 pt-40 sm:pb-28"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-6">
          Eryaman&apos;ın Güvenilir Emlak Adresi
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6.6vw,5.2rem)] font-semibold leading-[1.04] tracking-tight text-white">
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} className="block">
              Hayalinizdeki eve
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span variants={lineReveal} className="block">
              <span className="accent-serif-light">güvenle</span> açılan kapı.
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Enis Coşkun Gayrimenkul; Eryaman merkez ofisiyle Etimesgut, Sincan,
          Çankaya ve Gölbaşı&apos;nda satılık ve kiralık konut, işyeri ve arsa
          portföyünü yılların tecrübesi ve güler yüzüyle sizinle buluşturur.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#portfoy" className="btn-gold group">
            Portföyü Keşfet
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
            />
          </a>
          <a href="#ilanlar" className="btn-ghost">
            Güncel İlanlar
          </a>

          {/* Google güven rozeti */}
          <a
            href={GOOGLE.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark ml-1 flex items-center gap-3 rounded-full px-5 py-2.5 transition-colors hover:border-gold-soft/50"
          >
            <span className="flex items-center gap-1">
              <Star size={15} className="text-gold-bright" fill="currentColor" />
              <span className="font-display text-lg font-semibold text-white">
                {GOOGLE.rating.toFixed(1).replace(".", ",")}
              </span>
            </span>
            <span className="text-xs leading-tight text-white/70">
              Google&apos;da
              <br />
              {GOOGLE.count} değerlendirme
            </span>
          </a>
        </motion.div>

        {/* Konum + kaydırma ipucu */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <span className="flex items-center gap-2 text-sm text-white/60">
            <MapPin size={15} className="text-gold-bright" />
            Eryaman Mah., Dil Devrimi Cd. — Etimesgut / Ankara
          </span>
          <a
            href="#portfoy"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-white/50 transition-colors hover:text-gold-soft"
            aria-label="Aşağı kaydır"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors duration-500 group-hover:border-gold-soft/60">
              <ArrowDown size={14} className="animate-bounce" />
            </span>
            Keşfetmeye Başlayın
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
