"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogIn, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, NAV_CATEGORIES } from "@/data/site";

const LINKS = [
  { label: "Portföy", href: "#portfoy", mega: true },
  { label: "Satmak İstiyorum", href: "#sat" },
  { label: "Hakkımızda", href: "#hikayemiz" },
  { label: "Yorumlar", href: "#yorumlar" },
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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/85 py-3 shadow-luxe backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link href="#" aria-label="UYG Gold Estate anasayfa">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {LINKS.map((link) =>
            link.mega ? (
              <button
                key={link.label}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                className="group flex items-center gap-1.5 text-sm font-medium text-cream/80 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${megaOpen ? "rotate-180 text-gold" : ""}`}
                />
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setMegaOpen(false)}
                className="relative text-sm font-medium text-cream/80 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 after:ease-luxe hover:after:w-full"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
          >
            <Phone size={15} className="text-gold" />
            {CONTACT.phone}
          </a>
          <Link
            href="/panel"
            className="flex items-center gap-1.5 rounded-full border border-gold/30 px-4 py-2 text-[13px] font-medium text-gold transition-all duration-300 hover:border-gold/70 hover:shadow-gold-glow"
          >
            <LogIn size={14} />
            Emlakçı Girişi
          </Link>
          <a href="#iletisim" className="btn-gold !px-6 !py-2.5 !text-[13px]">
            Randevu Al
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full border border-white/15 p-2.5 text-cream lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mega menu */}
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
              <div className="glass mt-2 grid grid-cols-3 gap-10 rounded-card bg-ink/95 p-10 shadow-luxe-lg">
                {NAV_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <p className="eyebrow mb-5">{cat.title}</p>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#ilanlar"
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-center gap-2 text-[15px] text-cream/70 transition-all duration-300 hover:translate-x-1 hover:text-gold"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobil menü"
          >
            <div className="container-luxe flex flex-col gap-1 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-white/[0.04] hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/panel"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-gold transition-colors hover:bg-white/[0.04]"
              >
                <LogIn size={16} />
                Emlakçı Girişi
              </Link>
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
