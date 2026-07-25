"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, NAV_CATEGORIES } from "@/data/site";

const LINKS = [
  { label: "Portföy", href: "#portfoy", mega: true },
  { label: "İlanlar", href: "#ilanlar" },
  { label: "Satmak İstiyorum", href: "#sat" },
  { label: "Hakkımızda", href: "#hikayemiz" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "text-sm font-medium transition-colors duration-300";
  const linkColor = scrolled
    ? "text-slate hover:text-gold-deep"
    : "text-white/85 hover:text-gold-soft";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "border-b border-mist bg-porcelain/90 py-3 shadow-soft backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link href="#" aria-label="Enis Coşkun Gayrimenkul anasayfa">
          <Logo dark={!scrolled} />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {LINKS.map((link) =>
            link.mega ? (
              <button
                key={link.label}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                className={`group flex items-center gap-1.5 ${linkBase} ${linkColor}`}
              >
                {link.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    megaOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setMegaOpen(false)}
                className={`relative ${linkBase} ${linkColor} after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 after:ease-luxe hover:after:w-full`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className={`flex items-center gap-2 ${linkBase} ${linkColor}`}
          >
            <Phone size={15} className="text-gold" />
            {CONTACT.phone}
          </a>
          <a href="#iletisim" className="btn-gold !px-6 !py-2.5 !text-[13px]">
            Randevu Al
          </a>
        </div>

        {/* Mobil düğme */}
        <button
          className={`rounded-full border p-2.5 transition-colors lg:hidden ${
            scrolled ? "border-mist text-ink" : "border-white/25 text-white"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mega menü */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="container-luxe">
              <div className="mt-2 grid grid-cols-3 gap-10 rounded-card border border-mist bg-pearl p-10 shadow-lift">
                {NAV_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <p className="eyebrow mb-5">{cat.title}</p>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#ilanlar"
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-center gap-2 text-[15px] text-slate transition-all duration-300 hover:translate-x-1 hover:text-gold-deep"
                          >
                            <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobil menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-mist bg-porcelain shadow-lift lg:hidden"
            aria-label="Mobil menü"
          >
            <div className="container-luxe flex flex-col gap-1 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-cloud hover:text-gold-deep"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CONTACT.phoneHref}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-ink"
              >
                <Phone size={16} className="text-gold" />
                {CONTACT.phone}
              </a>
              <a
                href="#iletisim"
                onClick={() => setMobileOpen(false)}
                className="btn-gold mt-4 w-full"
              >
                Randevu Al
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
