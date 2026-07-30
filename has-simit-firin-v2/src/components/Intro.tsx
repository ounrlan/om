"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BASE } from "@/data/site";

/**
 * Sinematik açılış (~2,5 sn):
 *  1. Siyah perde; ortada altın hairline merkezden dışa doğru çizilir.
 *  2. İşletme rozeti belirir, etrafına altın halka çizilir.
 *  3. Wordmark harf harf yukarı süzülür, altında konum satırı.
 *  4. Perde iki yarıya ayrılıp yukarı/aşağı çekilir; hero ortaya çıkar.
 * prefers-reduced-motion açıksa hiç gösterilmez.
 */

const WORD = "HAS SİMİT & FIRIN";
const EASE = [0.19, 1, 0.22, 1] as const;

export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 1650);
    return () => clearTimeout(t);
  }, [reduce]);

  const unlock = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && !reduce && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Perde — üst yarı */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-night"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: EASE }}
          />
          {/* Perde — alt yarı */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-night"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.85, ease: EASE }}
          />

          {/* Perdenin tam ortasındaki altın ayrılma çizgisi */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,177,106,0.85), transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          {/* İçerik katmanı */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            <div className="relative grid h-[132px] w-[132px] place-items-center">
              {/* Çizilen altın halka */}
              <svg
                viewBox="0 0 132 132"
                className="absolute inset-0 h-full w-full -rotate-90"
              >
                <motion.circle
                  cx="66"
                  cy="66"
                  r="64"
                  fill="none"
                  stroke="rgba(212,177,106,0.75)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.25, delay: 0.25, ease: EASE }}
                />
              </svg>

              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: EASE }}
              >
                <Image
                  src={`${BASE}/images/logo-badge.png`}
                  alt=""
                  width={96}
                  height={96}
                  priority
                  className="h-24 w-24 rounded-full"
                />
              </motion.div>
            </div>

            {/* Wordmark — harf harf */}
            <p className="mt-7 flex font-display text-[26px] font-light tracking-[0.24em] text-cream sm:text-[30px]">
              {WORD.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className={ch === "&" ? "gold-text" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + i * 0.028,
                    ease: EASE,
                  }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </p>

            <motion.p
              className="mt-4 font-mono text-[10px] uppercase tracking-label text-cream3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              Bağlıca · Etimesgut · Ankara
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
