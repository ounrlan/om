"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Reveal from "./Reveal";

const selectClass =
  "w-full appearance-none rounded-2xl border border-white/10 bg-charcoal px-5 py-4 text-sm text-cream outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-gold-glow";

export default function PropertySearch() {
  const [mode, setMode] = useState<"buy" | "rent">("buy");

  return (
    <section className="relative py-10">
      <div className="container-luxe">
        <Reveal>
          <div className="glass rounded-card bg-ink/60 p-6 shadow-luxe-lg sm:p-8">
            {/* Buy / Rent toggle */}
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-charcoal p-1">
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
                      ? "bg-gold text-ink shadow-gold-glow"
                      : "text-cream/60 hover:text-cream"
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
                <option>Bağlıca</option>
                <option>Etimesgut</option>
                <option>Yenimahalle</option>
                <option>Sincan</option>
                <option>Çankaya</option>
              </select>
              <select className={selectClass} aria-label="Mülk tipi" defaultValue="">
                <option value="" disabled>
                  Mülk Tipi
                </option>
                <option>Villa</option>
                <option>Rezidans</option>
                <option>Daire</option>
                <option>Dubleks</option>
              </select>
              <select className={selectClass} aria-label="Oda sayısı" defaultValue="">
                <option value="" disabled>
                  Oda Sayısı
                </option>
                <option>2+1</option>
                <option>3+1</option>
                <option>4+1</option>
                <option>5+1 ve üzeri</option>
              </select>
              <select className={selectClass} aria-label="Fiyat aralığı" defaultValue="">
                <option value="" disabled>
                  Fiyat Aralığı
                </option>
                <option>₺5M – ₺15M</option>
                <option>₺15M – ₺30M</option>
                <option>₺30M – ₺50M</option>
                <option>₺50M+</option>
              </select>
              <button type="submit" className="btn-gold w-full !rounded-2xl">
                <Search size={16} />
                Ara
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
