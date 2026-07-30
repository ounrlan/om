import Reveal from "./Reveal";
import { pullQuote } from "@/data/site";

/**
 * Tam genişlik alıntı bandı — fotoğrafsız, saf tipografik nefes alanı.
 * Metin GERÇEK bir Google yorumundan, harfiyen alınmıştır.
 */
export default function PullQuote() {
  return (
    <section className="relative overflow-hidden border-y border-[rgba(212,177,106,0.16)] bg-night2">
      {/* Dev dekoratif tırnak */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 select-none font-display text-[22rem] leading-none text-gold/[0.06]"
      >
        &ldquo;
      </span>
      {/* Merkezi altın parıltı */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.10] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,177,106,0.85) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative py-24 text-center sm:py-28 lg:py-32">
        <Reveal>
          <blockquote>
            <p className="mx-auto max-w-[22ch] font-display text-[30px] font-light italic leading-[1.28] tracking-tightlg text-cream sm:max-w-[26ch] sm:text-[42px] lg:text-[52px]">
              &ldquo;{pullQuote.text}&rdquo;
            </p>
            <footer className="mt-10 flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-14 bg-[rgba(212,177,106,0.45)]"
              />
              <cite className="font-mono text-[10.5px] uppercase not-italic tracking-label text-gold">
                {pullQuote.author}
              </cite>
              <span className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
                {pullQuote.source}
              </span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
