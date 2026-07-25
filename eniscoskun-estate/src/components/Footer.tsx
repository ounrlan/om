"use client";

import { type FormEvent, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
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
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Bülten Kaydı"
    )}&body=${encodeURIComponent(`Bülteninize kaydolmak istiyorum: ${email}`)}`;
    setSent(true);
  };

  const socials = [
    CONTACT.instagram && {
      icon: InstagramIcon,
      href: CONTACT.instagram,
      label: "Instagram",
    },
    { icon: MessageCircle, href: CONTACT.whatsappHref, label: "WhatsApp" },
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: "E-posta" },
  ].filter(Boolean) as { icon: typeof Mail; href: string; label: string }[];

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink text-white/70">
      <div className="container-luxe grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        {/* Marka */}
        <div>
          <Logo dark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Eryaman merkezli güvenilir emlak ofisi. Etimesgut, Sincan, Çankaya ve
            Gölbaşı&apos;nda satılık &amp; kiralık konut, işyeri ve arsa
            danışmanlığı.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-gold-soft/50 hover:text-gold-soft"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Menü */}
        <nav aria-label="Alt menü">
          <p className="eyebrow eyebrow-light mb-6">Keşfet</p>
          <ul className="space-y-3.5">
            {MENU.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-soft"
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
                className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-soft"
              >
                sahibinden.com Mağazamız ↗
              </a>
            </li>
            <li>
              <a
                href={GOOGLE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-soft"
              >
                Google&apos;da Biz ↗
              </a>
            </li>
          </ul>
        </nav>

        {/* İletişim */}
        <div>
          <p className="eyebrow eyebrow-light mb-6">İletişim</p>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-gold-bright" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-gold-bright" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold-bright" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        {/* Bülten */}
        <div>
          <p className="eyebrow eyebrow-light mb-6">Bülten</p>
          <p className="text-sm leading-relaxed text-white/55">
            Yeni portföy ve fırsatları ilk öğrenen siz olun.
          </p>
          {sent ? (
            <p className="mt-5 rounded-2xl border border-gold-soft/30 bg-gold/10 px-5 py-4 text-sm text-gold-soft">
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
                className="w-full rounded-full border border-white/12 bg-white/[0.05] px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-gold-soft/60"
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
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-7 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Enis Coşkun Gayrimenkul — Tüm hakları
            saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-gold-soft">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
