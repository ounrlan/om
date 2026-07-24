"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { nav, business } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken arka planı kilitle (kapalıyken body.overflow'a dokunma —
  // açılış animasyonunun scroll kilidiyle çakışmasın)
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/80 shadow-[0_1px_0_rgba(14,59,46,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#top" aria-label="Has Simit & Fırın — ana sayfa">
          {/* Hero fotoğrafı üzerindeyken açık (krem) varyant */}
          <Logo tone={scrolled ? "dark" : "light"} />
        </a>

        {/* Masaüstü navigasyon */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[13px] font-medium uppercase tracking-label transition-colors ${
                scrolled
                  ? "text-pine/75 hover:text-pine"
                  : "text-cream/85 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={business.phoneHref}
            className={`text-link ${scrolled ? "" : "text-link--cream"}`}
            aria-label={`Sipariş için ara: ${business.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Sipariş için Ara
          </a>
        </div>

        {/* Mobil menü düğmesi */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
          className={`hover-scale inline-flex h-10 w-10 items-center justify-center rounded-btn lg:hidden ${
            scrolled ? "text-pine" : "text-cream"
          }`}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobil tam ekran panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-pine text-cream lg:hidden">
          <div className="container-x flex h-16 items-center justify-between">
            <Logo tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menüyü kapat"
              className="hover-scale inline-flex h-10 w-10 items-center justify-center rounded-btn text-cream"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="container-x flex flex-1 flex-col justify-center gap-2"
            aria-label="Mobil menü"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/15 py-4 font-display text-3xl font-medium text-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-label text-sesame"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
