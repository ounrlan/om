"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Reveal from "./Reveal";

const selectClass =
  "w-full appearance-none rounded-2xl border border-mist bg-porcelain px-5 py-4 text-sm text-slate outline-none transition-all duration-300 focus:border-gold/60 focus:bg-white focus:shadow-gold-glow";

export default function PropertySearch() {
  const [mode, setMode] = useState<"buy" | "rent">("buy");

  return (
    <section className="relative z-20 -mt-16 pb-4">
      <div className="container-luxe">
        <Reveal>
          <div className="rounded-card border border-mist bg-pearl/95 p-6 shadow-lift backdrop-blur-sm sm:p-8">
            {/* Satılık / Kiralık geçişi */}
            <div className="mb-6 inline-flex rounded-full border border-mist bg-porcelain p-1">
              {(
                [
                  { key: "buy", label: "Satılık" },
                  { key: "rent", label: "Kiralık" },
                ] as const
              ).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setMode(t.key)}
                  className={`rounded-full px-7 py-2.5 text-sm font-medium transition-all duration-400 ease-luxe ${
                    mode === t.key
                      ? "bg-gold text-white shadow-soft"
                      : "text-ash hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <form
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Gayrimenkul arama"
            >
              <select className={selectClass} aria-label="Lokasyon" defaultValue="">
                <option value="" disabled>
                  Lokasyon
                </option>
                <option>Eryaman</option>
                <option>Etimesgut</option>
                <option>Sincan</option>
                <option>Çankaya</option>
                <option>Gölbaşı</option>
              </select>
              <select className={selectClass} aria-label="Mülk tipi" defaultValue="">
                <option value="" disabled>
                  Mülk Tipi
                </option>
                <option>Daire</option>
                <option>Rezidans</option>
                <option>İşyeri / Ofis</option>
                <option>Arsa</option>
              </select>
              <select className={selectClass} aria-label="Oda sayısı" defaultValue="">
                <option value="" disabled>
                  Oda Sayısı
                </option>
                <option>1+0 / 1+1</option>
                <option>2+1</option>
                <option>3+1</option>
                <option>4+1 ve üzeri</option>
              </select>
              <select
                className={selectClass}
                aria-label="Fiyat aralığı"
                defaultValue=""
              >
                <option value="" disabled>
                  Fiyat Aralığı
                </option>
                <option>₺0 – ₺5M</option>
                <option>₺5M – ₺10M</option>
                <option>₺10M – ₺15M</option>
                <option>Kiralık</option>
              </select>
              <a href="#ilanlar" className="btn-gold w-full !rounded-2xl">
                <Search size={16} />
                Ara
              </a>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
