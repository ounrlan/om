import Image from "next/image";
import { Phone } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import Reveal from "./Reveal";
import { products, pideLahmacun } from "@/data/site";

export default function Products() {
  return (
    <section id="urunler" className="scroll-mt-24">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{products.eyebrow}</p>
          <h2 className="heading-lg">{products.heading}</h2>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink">
            {products.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <article className="card group h-full">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11.5px] font-semibold uppercase tracking-label text-coffee">
                    {item.tag}
                  </span>
                  <h3 className="mt-2.5 font-display text-[24px] font-semibold leading-tight text-pine">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Pide & Lahmacun vitrin banner'ı — grid kartlarından ayrışan geniş blok */}
        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-card bg-cream2 lg:grid-cols-2">
            <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[380px]">
              <Image
                src={pideLahmacun.image}
                alt={pideLahmacun.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-12">
              <span className="font-mono text-[11.5px] font-semibold uppercase tracking-label text-coffee">
                {pideLahmacun.tag}
              </span>
              <h3 className="mt-3 font-display text-[30px] font-semibold leading-[1.1] tracking-tightlg text-pine sm:text-[38px]">
                {pideLahmacun.heading}
              </h3>
              <p className="mt-4 max-w-[46ch] text-[16.5px] leading-relaxed text-ink">
                {pideLahmacun.body}
              </p>
              <div className="mt-7">
                <ButtonPrimary href={pideLahmacun.cta.href}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {pideLahmacun.cta.label}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
