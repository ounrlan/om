"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, LogIn } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import Logo from "./Logo";
import { CONTACT, SAHIBINDEN, GOOGLE } from "@/data/site";

const MENU = [
  { label: "Öne Çıkan Portföy", href: "#portfoy" },
  { label: "Satılık İlanlar", href: "#ilanlar" },
  { label: "Kiralık İlanlar", href: "#ilanlar" },
  { label: "Hakkımızda", href: "#hikayemiz" },
  { label: "Müşteri Yorumları", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

const LEGAL = [
  { label: "KVKK Aydınlatma Metni", href: "#" },
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Çerez Politikası", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Basit bülten kaydı: talebi e-posta olarak iletir.
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Bülten Kaydı"
    )}&body=${encodeURIComponent(`Bülteninize kaydolmak istiyorum: ${email}`)}`;
    setSent(true);
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070706]">
      <div className="container-luxe grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        {/* Marka */}
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
            Ankara Bağlıca merkezli butik gayrimenkul ofisi. Seçkin portföy,
            gizlilik esaslı danışmanlık ve uçtan uca süreç yönetimi.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { icon: InstagramIcon, href: CONTACT.instagram, label: "Instagram" },
              { icon: MessageCircle, href: CONTACT.whatsappHref, label: "WhatsApp" },
              { icon: Mail, href: `mailto:${CONTACT.email}`, label: "E-posta" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition-all duration-300 hover:text-gold hover:shadow-gold-glow"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Menü */}
        <nav aria-label="Alt menü">
          <p className="eyebrow mb-6">Keşfet</p>
          <ul className="space-y-3.5">
            {MENU.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SAHIBINDEN.store}
                target="_blank"
                rel="noopener"
                className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
              >
                sahibinden.com Mağazamız ↗
              </a>
            </li>
            <li>
              <a
                href={GOOGLE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
              >
                Google&apos;da Biz ↗
              </a>
            </li>
          </ul>
        </nav>

        {/* İletişim */}
        <div>
          <p className="eyebrow mb-6">İletişim</p>
          <ul className="space-y-4 text-sm text-cream/70">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-gold"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 transition-colors hover:text-gold"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        {/* Bülten */}
        <div>
          <p className="eyebrow mb-6">Bülten</p>
          <p className="text-sm leading-relaxed text-stone">
            Yeni portföy ve fırsatları ilk öğrenen siz olun.
          </p>
          {sent ? (
            <p className="mt-5 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4 text-sm text-gold">
              Teşekkürler! Talebiniz e-posta uygulamanız üzerinden iletiliyor.
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-5 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                aria-label="Bülten için e-posta adresi"
                className="w-full rounded-full border border-white/10 bg-charcoal px-5 py-3.5 text-sm text-cream placeholder:text-stone/60 outline-none transition-all duration-300 focus:border-gold/60"
              />
              <button
                type="submit"
                aria-label="Bültene kaydol"
                className="btn-gold shrink-0 !p-3.5"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-7 text-xs text-stone/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} UYG Gold Estate — Tüm hakları
            saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/panel"
                className="inline-flex items-center gap-1.5 text-gold/70 transition-colors hover:text-gold"
              >
                <LogIn size={13} />
                Emlakçı Girişi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
