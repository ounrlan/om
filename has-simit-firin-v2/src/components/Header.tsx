"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import Logo from "./Logo";
import StatusChip from "./StatusChip";
import { nav, business } from "@/data/site";

const EASE = [0.19, 1, 0.22, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken arka planı kilitle (açılış animasyonunun kilidiyle
  // çakışmaması için yalnızca açıkken müdahale edilir)
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(212,177,106,0.16)] bg-night/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Hero üzerindeyken üstten aşağı karartma — logo/nav okunurluğu */}
      {!scrolled && (
        <div
          className="top-veil pointer-events-none absolute inset-x-0 top-0 h-32"
          aria-hidden="true"
        />
      )}

      <div className="container-x relative flex h-[86px] items-center justify-between">
        <a href="#top" aria-label="Has Simit & Fırın — ana sayfa">
          <Logo size={scrolled ? 40 : 46} />
        </a>

        {/* Masaüstü navigasyon */}
        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Ana menü"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-baseline gap-2 py-1 font-mono text-[11px] uppercase tracking-label text-cream2 transition-colors hover:text-cream"
            >
              <span className="text-[9px] text-gold/70">{item.index}</span>
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href={business.phoneHref}
            className="link-gold"
            aria-label={`Sipariş için ara: ${business.phoneDisplay}`}
          >
            <Phone className="h-3 w-3" aria-hidden="true" strokeWidth={1.5} />
            Sipariş için Ara
          </a>
        </div>

        {/* Mobil menü düğmesi — üç altın çizgi */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
          className="group inline-flex h-11 w-11 flex-col items-end justify-center gap-[5px] lg:hidden"
        >
          <span className="block h-px w-7 bg-gold transition-all duration-300 group-hover:w-5" />
          <span className="block h-px w-5 bg-gold transition-all duration-300 group-hover:w-7" />
          <span className="block h-px w-7 bg-gold transition-all duration-300 group-hover:w-4" />
        </button>
      </div>

      {/* Mobil tam ekran panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-night lg:hidden"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="container-x flex h-[86px] items-center justify-between">
              <Logo size={40} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
                className="hover-scale inline-flex h-11 w-11 items-center justify-center text-gold"
              >
                <X className="h-6 w-6" aria-hidden="true" strokeWidth={1.25} />
              </button>
            </div>

            <nav
              className="container-x flex flex-1 flex-col justify-center"
              aria-label="Mobil menü"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.07,
                    ease: EASE,
                  }}
                  className="flex items-baseline gap-5 border-b border-[rgba(212,177,106,0.14)] py-6"
                >
                  <span className="font-mono text-[10px] tracking-label text-gold/70">
                    {item.index}
                  </span>
                  <span className="font-display text-[38px] font-light leading-none text-cream">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="container-x flex flex-col gap-5 pb-12">
              <StatusChip />
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-3 font-mono text-[13px] tracking-wide2 text-gold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                {business.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
