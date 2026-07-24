import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CONTACT, SAHIBINDEN } from "@/data/site";

const ITEMS = [
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Hemen yazın, dakikalar içinde dönelim",
    href: CONTACT.whatsappHref,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Ofis",
    value: CONTACT.address,
    href: CONTACT.mapsDirections,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    rows: [
      { day: "Pazartesi – Cumartesi", time: "08:00 – 21:00" },
      { day: "Pazar", time: "10:00 – 21:00" },
    ],
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@uyggold_estate",
    href: CONTACT.instagram,
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="İletişim"
          title="Bir kahve içimi"
          accent="uzağınızdayız."
          description="Portföyümüz, mülkünüzün değerlemesi ya da yatırım planlarınız için ofisimize bekleriz."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {ITEMS.map((item, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold">
                    <item.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-medium uppercase tracking-luxe text-stone">
                      {item.label}
                    </span>
                    {"rows" in item && item.rows ? (
                      <span className="mt-2 block space-y-1.5">
                        {item.rows.map((r) => (
                          <span
                            key={r.day}
                            className="flex items-baseline justify-between gap-3"
                          >
                            <span className="text-[13px] text-stone">{r.day}</span>
                            <span className="mx-1 hidden h-px flex-1 self-center bg-white/[0.08] sm:block" />
                            <span className="whitespace-nowrap text-sm font-medium text-gold">
                              {r.time}
                            </span>
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className="mt-1 block text-sm font-medium leading-snug text-cream">
                        {item.value}
                      </span>
                    )}
                  </span>
                </>
              );
              const cls =
                "card-luxe flex items-center gap-4 p-5 sm:p-6 h-full";
              return (
                <Reveal key={item.label} delay={i * 0.07}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.45} className="sm:col-span-2">
              <a
                href={SAHIBINDEN.store}
                target="_blank"
                rel="noopener"
                className="card-luxe flex items-center justify-between gap-4 p-5 sm:p-6"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffe800] font-display text-lg font-black text-[#004b93]">
                    S
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium uppercase tracking-luxe text-stone">
                      sahibinden.com
                    </span>
                    <span className="mt-1 block text-sm font-medium text-cream">
                      Tüm ilanlarımızı mağazamızda inceleyin
                    </span>
                  </span>
                </span>
                <Navigation size={16} className="shrink-0 text-gold" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-card border border-white/[0.07] shadow-luxe-lg">
              <iframe
                src={CONTACT.mapsEmbed}
                title="UYG Gold Estate ofis konumu"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.4] contrast-[1.05]"
                allowFullScreen
              />
              <a
                href={CONTACT.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold absolute bottom-5 right-5 !px-5 !py-2.5 !text-[12px]"
              >
                <Navigation size={13} />
                Yol Tarifi Al
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
