"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import GoldButton from "./GoldButton";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { reviewsSection } from "@/data/site";
import { aggregate, featuredReviews } from "@/data/reviews";

/** Google'ın 4 renkli "G" logosu — yorum kaynağını belirtir. */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/** Orantılı dolgu ile yıldız satırı (altın). */
function Stars({ value, size = 15 }: { value: number; size?: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const pct = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star
              width={size}
              height={size}
              className="absolute inset-0 text-gold/35"
              fill="none"
              strokeWidth={1.25}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pct}%` }}
            >
              <Star
                width={size}
                height={size}
                className="text-gold"
                fill="#D4B16A"
                strokeWidth={1.25}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Otomatik ilerleme yalnızca `pausedUntil` zamanından sonra çalışır.
  const pausedUntil = useRef(0);
  // Sürekli akışın kesirli konumu — scrollLeft tam sayıya yuvarlandığı için
  // düşük hızda takılmasın diye ayrı bir float olarak tutulur.
  const pos = useRef(0);
  const ratingText = String(aggregate.rating).replace(".", ",");

  const cardStep = (el: HTMLDivElement) =>
    (el.firstElementChild?.getBoundingClientRect().width ?? 340) + 24;

  const pause = (ms = 4000) => {
    pausedUntil.current = Date.now() + ms;
  };

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * cardStep(el), behavior: "smooth" });
    pause();
  };

  // Kesintisiz akış — kartlar marquee gibi kendiliğinden sola akar.
  // Liste iki kez render edildiği için yarıya gelince görünmez biçimde başa
  // sarar. Hover/dokunma/ok etkileşiminde duraklar, sonra kaldığı yerden akar.
  useEffect(() => {
    if (reduce) return;
    const el = scrollerRef.current;
    if (!el) return;
    const SPEED = 36; // px/sn
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const half = el.scrollWidth / 2;
      if (half > el.clientWidth) {
        if (Date.now() < pausedUntil.current) {
          // Etkileşim sırasında kullanıcının konumunu benimse
          pos.current = el.scrollLeft;
        } else {
          // Konum dışarıdan değiştiyse (kullanıcı sürükledi, tarayıcı yazmayı
          // atladı vb.) önce gerçek konuma senkronlan — sıçrama olmasın.
          if (Math.abs(el.scrollLeft - pos.current) > 2) {
            pos.current = el.scrollLeft;
          }
          pos.current += SPEED * dt;
          if (pos.current >= half) pos.current -= half;
          el.scrollLeft = pos.current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <section id="yorumlar" className="scroll-mt-28 bg-night">
      <div className="container-x py-24 sm:py-28 lg:py-36">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index={reviewsSection.index}
            eyebrow={reviewsSection.eyebrow}
            heading={reviewsSection.heading}
            intro={reviewsSection.intro}
          />

          {/* Google puan paneli */}
          <Reveal delay={0.18}>
            <div className="hair-frame flex items-center gap-6 px-8 py-7">
              <GoogleG className="h-7 w-7 shrink-0" />
              <div>
                <div className="flex items-end gap-3.5">
                  <span className="font-display text-[46px] font-light leading-none text-cream">
                    {ratingText}
                  </span>
                  <div className="pb-1.5">
                    <Stars value={aggregate.rating} size={15} />
                  </div>
                </div>
                <a
                  href={aggregate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-[10px] uppercase tracking-label text-cream3 transition-colors hover:text-gold"
                >
                  Google&apos;da {aggregate.count} yorum
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Kaydırma okları */}
        <div className="mt-14 flex items-center justify-between gap-6">
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-[rgba(212,177,106,0.16)]"
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Önceki yorumlar"
              className="grid h-12 w-12 place-items-center border border-[rgba(212,177,106,0.28)] text-gold transition-colors duration-500 hover:bg-gold hover:text-night"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Sonraki yorumlar"
              className="grid h-12 w-12 place-items-center border border-[rgba(212,177,106,0.28)] text-gold transition-colors duration-500 hover:bg-gold hover:text-night"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        {/* Yorum kaydırıcısı */}
        <div
          ref={scrollerRef}
          onMouseEnter={() => pause(365 * 24 * 60 * 60 * 1000)}
          onMouseLeave={() => pause()}
          onPointerDown={() => pause()}
          onWheel={() => pause()}
          className="no-scrollbar mt-8 flex gap-6 overflow-x-auto pb-2"
        >
          {/* Liste iki kez render edilir — sürekli akışın dikişsiz sarması için */}
          {[...featuredReviews, ...featuredReviews].map((r, i) => (
            <article
              key={`${r.author}-${i}`}
              aria-hidden={i >= featuredReviews.length ? "true" : undefined}
              className="hair-frame group flex w-[300px] shrink-0 flex-col p-8 transition-colors duration-500 hover:border-[rgba(212,177,106,0.42)] sm:w-[368px]"
            >
              <span
                aria-hidden="true"
                className="font-display text-[52px] leading-[0.6] text-gold/25"
              >
                &ldquo;
              </span>
              <p className="mt-5 flex-1 text-[15px] font-light leading-[1.8] text-cream2">
                {r.text}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-[rgba(212,177,106,0.16)] pt-6">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[rgba(212,177,106,0.35)] font-display text-[17px] font-light text-gold"
                  aria-hidden="true"
                >
                  {r.author.charAt(0).toLocaleUpperCase("tr-TR")}
                </span>
                <div>
                  <p className="text-[14px] font-normal text-cream">{r.author}</p>
                  <div className="mt-1.5">
                    <Stars value={r.rating} size={12} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA'lar */}
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          <GoldButton href={reviewsSection.ctaPrimary.href} external>
            {reviewsSection.ctaPrimary.label}
          </GoldButton>
          <a
            href={reviewsSection.ctaText.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-gold"
          >
            {reviewsSection.ctaText.label}
          </a>
        </div>
      </div>
    </section>
  );
}
