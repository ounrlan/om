import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import Reveal from "./Reveal";
import { hero, business } from "@/data/site";

export default function Hero() {
  return (
    // Negatif üst marj: fotoğraf sticky header'ın arkasına uzanır (full-bleed).
    <section
      id="top"
      className="relative -mt-16 flex min-h-screen items-center overflow-hidden sm:-mt-[72px]"
    >
      {/* Tam ekran arka plan fotoğrafı */}
      <Image
        src="/images/hero.jpg"
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Okunabilirlik karartması — pine tonlu gradient (~%50-60) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(7,26,20,0.78)] via-[rgba(7,26,20,0.55)] to-[rgba(7,26,20,0.3)]"
        aria-hidden="true"
      />

      {/* İçerik — fotoğrafın üzerinde, solda */}
      <div className="container-x relative z-10 pb-24 pt-32 sm:pt-36">
        <Reveal>
          <p className="eyebrow mb-6 text-sesame [&::before]:bg-sesame/60">
            {hero.eyebrow}
          </p>
          <h1 className="heading-xl max-w-[16ch] text-cream">{hero.title}</h1>
          <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.55] text-cream/90">
            {hero.paragraph}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <ButtonPrimary href={hero.primaryCta.href} variant="cream">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonPrimary>
            <a
              href={hero.textCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--cream"
            >
              {hero.textCta.label}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Fırın fişi hissi — çalışma saati çipi */}
      <div className="absolute bottom-6 left-5 z-10 rounded-pill bg-cream/95 px-4 py-2 shadow-soft backdrop-blur-sm sm:left-8 lg:left-12">
        <span className="font-mono text-[12px] font-semibold uppercase tracking-label text-pine">
          Her gün {business.hoursShort}
        </span>
      </div>
    </section>
  );
}
