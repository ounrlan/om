"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import PropertyCard from "./PropertyCard";
import Reveal from "./Reveal";
import { LISTINGS, SAHIBINDEN } from "@/data/site";

const TABS = [
  { key: "satilik", label: "Satılık" },
  { key: "kiralik", label: "Kiralık" },
] as const;

export default function Listings() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("satilik");
  const items = LISTINGS.filter((p) => p.status === tab);

  return (
    <section id="ilanlar" className="relative overflow-hidden bg-charcoal/60 py-24 sm:py-32">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Güncel İlanlar"
            title="Satılık ve kiralık"
            accent="fırsatlar."
            description="İlanlarımız sahibinden.com mağazamız üzerinden yayınlanır; karttaki 'Görüntüle' bağlantısı sizi ilanın sahibinden.com sayfasına götürür."
          />
          <Reveal delay={0.15} className="mb-14 shrink-0">
            <div className="inline-flex rounded-full border border-white/10 bg-ink p-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`rounded-full px-8 py-3 text-sm font-medium transition-all duration-400 ease-luxe ${
                    tab === t.key
                      ? "bg-gold text-ink shadow-gold-glow"
                      : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={`${tab}-${p.id}`} delay={(i % 3) * 0.1}>
              <PropertyCard property={p} detailsHref={p.sahibindenUrl} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={SAHIBINDEN.store}
            target="_blank"
            rel="noopener"
            className="btn-ghost group !border-[#ffe800]/30 hover:!border-[#ffe800]/70"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#ffe800] text-[11px] font-black text-[#004b93]">
              S
            </span>
            Tüm İlanlarımız — {SAHIBINDEN.storeLabel}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
      <div className="gold-divider absolute inset-x-0 bottom-0" />
    </section>
  );
}
