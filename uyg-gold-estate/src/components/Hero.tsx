"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, CalendarCheck } from "lucide-react";

const HERO_IMAGE = "/hero.jpg";

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
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Lüks modern villa, gün batımında"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-vignette" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="container-luxe relative z-10 pb-24 pt-40 sm:pb-28"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Gayrimenkulün Altın Standardı
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-cream">
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} className="block">
              Sıradan evler değil,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} className="block">
              <span className="accent-serif">imzalı</span> yaşamlar.
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          UYG Gold Estate; seçkin portföyü, gizlilik esaslı danışmanlığı
          ve kusursuz süreç yönetimiyle Ankara&apos;nın en prestijli
          adreslerini sahipleriyle buluşturur.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a href="#portfoy" className="btn-gold group">
            Portföyü Keşfet
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
            />
          </a>
          <a href="#ilanlar" className="btn-ghost">
            Güncel İlanları İnceleyin
          </a>
          <a href="#iletisim" className="btn-ghost">
            <CalendarCheck size={16} className="text-gold" />
            Özel Danışmanlık
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#portfoy"
          variants={fadeUp}
          className="group mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-cream/50 transition-colors hover:text-gold"
          aria-label="Aşağı kaydır"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-500 group-hover:border-gold/60">
            <ArrowDown size={14} className="animate-bounce" />
          </span>
          Keşfetmeye Başlayın
        </motion.a>
      </motion.div>
    </section>
  );
}
