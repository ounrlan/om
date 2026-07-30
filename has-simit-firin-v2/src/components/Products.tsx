import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import GoldButton from "./GoldButton";
import Reveal, { MaskLine } from "./Reveal";
import SectionHead from "./SectionHead";
import {
  products,
  productCardCta,
  pideLahmacun,
  kahvalti,
  business,
} from "@/data/site";

export default function Products() {
  return (
    <section id="urunler" className="relative scroll-mt-28 bg-night">
      <div className="container-x py-24 sm:py-28 lg:py-36">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index={products.index}
            eyebrow={products.eyebrow}
            heading={products.heading}
            intro={products.intro}
          />
          <Reveal delay={0.2}>
            <p className="font-mono text-[10px] uppercase tracking-label text-cream3">
              {String(products.items.length).padStart(2, "0")} Çeşit · Her gün taze
            </p>
          </Reveal>
        </div>

        {/* Ürün ızgarası — çerçevesiz, hairline ayraçlı editoryal düzen */}
        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              {/* Kart tıklanabilir — telefonla sipariş */}
              <a
                href={business.phoneHref}
                aria-label={`${item.title} — sipariş için arayın: ${business.phoneDisplay}`}
                className="group block h-full"
              >
                <article className="h-full">
                  <div className="img-frame relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                    />
                    {/* Alt karartma — numara ve etiket okunurluğu */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.45)_0%,transparent_32%,transparent_58%,rgba(8,12,10,0.72)_100%)]"
                    />
                    <span className="absolute left-6 top-5 z-[3] font-mono text-[10px] tracking-label text-gold">
                      {item.no}
                    </span>
                    <span className="absolute bottom-5 left-6 right-6 z-[3] font-mono text-[9.5px] uppercase tracking-label text-cream/85">
                      {item.tag}
                    </span>
                    {/* Hover'da beliren sipariş çipi */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 z-[3] inline-flex translate-y-2 items-center gap-2 bg-gold px-3.5 py-2 font-mono text-[9.5px] font-medium uppercase tracking-wide2 text-night opacity-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Phone className="h-3 w-3" strokeWidth={1.5} />
                      {productCardCta}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-[27px] font-light leading-[1.15] tracking-tightlg text-cream transition-colors duration-500 group-hover:text-goldlt">
                    {item.title}
                  </h3>
                  {/* Hover'da soldan açılan altın çizgi */}
                  <span className="mt-4 block h-px w-full bg-[rgba(212,177,106,0.16)]">
                    <span className="block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                  </span>
                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-cream2">
                    {item.desc}
                  </p>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Kahvaltı köşesi vitrini — metin solda, görsel sağda ── */}
      <div className="container-x pb-14 sm:pb-16 lg:pb-20">
        <Reveal>
          <div className="hair-frame grid overflow-hidden lg:grid-cols-[1fr_1.05fr]">
            <div className="order-2 flex flex-col items-start justify-center p-8 sm:p-12 lg:order-1 lg:p-16">
              <p className="eyebrow mb-7">{kahvalti.tag}</p>
              <h3 className="heading-md max-w-[18ch]">
                <MaskLine>
                  <em className="gold-text font-display font-light italic">
                    {kahvalti.heading}
                  </em>
                </MaskLine>
              </h3>
              <p className="mt-6 max-w-[46ch] text-[15.5px] font-light leading-[1.8] text-cream2">
                {kahvalti.body}
              </p>
              <div className="mt-10">
                <GoldButton href={kahvalti.cta.href} external>
                  {kahvalti.cta.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.5} />
                </GoldButton>
              </div>
            </div>

            <div className="group relative order-1 min-h-[300px] lg:order-2 lg:min-h-[460px]">
              <Image
                src={kahvalti.image}
                alt={kahvalti.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(270deg,rgba(8,12,10,0.35)_0%,transparent_55%)]"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Pide & Lahmacun vitrini ── */}
      <div className="container-x pb-24 sm:pb-28 lg:pb-36">
        <Reveal>
          <div className="hair-frame grid overflow-hidden lg:grid-cols-[1.05fr_1fr]">
            <div className="group relative min-h-[300px] lg:min-h-[460px]">
              <Image
                src={pideLahmacun.image}
                alt={pideLahmacun.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,10,0.35)_0%,transparent_55%)]"
              />
            </div>

            <div className="flex flex-col items-start justify-center p-8 sm:p-12 lg:p-16">
              <p className="eyebrow mb-7">{pideLahmacun.tag}</p>
              <h3 className="heading-md max-w-[16ch]">
                <MaskLine>
                  <em className="gold-text font-display font-light italic">
                    {pideLahmacun.heading}
                  </em>
                </MaskLine>
              </h3>
              <p className="mt-6 max-w-[46ch] text-[15.5px] font-light leading-[1.8] text-cream2">
                {pideLahmacun.body}
              </p>
              <div className="mt-10">
                <GoldButton href={pideLahmacun.cta.href}>
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.5} />
                  {pideLahmacun.cta.label}
                </GoldButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
