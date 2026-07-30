import { Phone, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import GoldButton from "./GoldButton";
import Reveal, { MaskLine } from "./Reveal";
import { footer, nav, business } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(212,177,106,0.16)] bg-night">
      {/* Alt merkezden yükselen altın parıltı */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[34rem] w-[62rem] -translate-x-1/2 opacity-[0.12] blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,177,106,0.9) 0%, transparent 70%)",
        }}
      />

      {/* Mobilde alt sipariş çubuğu için ekstra boşluk */}
      <div className="container-x relative pb-24 pt-24 sm:pt-28 lg:pb-10">
        {/* Büyük CTA başlığı */}
        <div className="flex flex-col items-start justify-between gap-12 pb-20 lg:flex-row lg:items-end">
          <div>
            <h2 className="heading-lg max-w-[16ch]">
              <MaskLine>{footer.heading}</MaskLine>
              <MaskLine delay={0.1}>
                <em className="gold-text font-display font-light italic">
                  {footer.headingAccent}
                </em>
              </MaskLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-[42ch] text-[15.5px] font-light leading-[1.8] text-cream2">
                {footer.blurb}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.22}>
            <GoldButton href={footer.callCta.href} variant="solid">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.5} />
              {footer.callCta.label}
            </GoldButton>
          </Reveal>
        </div>

        {/* Orta blok — marka / menü / iletişim */}
        <div className="grid gap-12 border-t border-[rgba(212,177,106,0.14)] py-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo size={46} />
          </div>

          <nav aria-label="Alt menü">
            <p className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
              Menü
            </p>
            <ul className="mt-6 space-y-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-baseline gap-3 text-[15px] font-light text-cream2 transition-colors hover:text-gold"
                  >
                    <span className="font-mono text-[9px] tracking-label text-gold/50">
                      {item.index}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
              İletişim
            </p>
            <address className="mt-6 space-y-4 not-italic">
              <p className="text-[15px] font-light leading-[1.7] text-cream2">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={business.phoneHref}
                  className="font-display text-[20px] font-light tracking-wide text-cream transition-colors hover:text-gold"
                >
                  {business.phoneDisplay}
                </a>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wide2 text-cream3">
                {business.hoursLabel}
              </p>
            </address>
          </div>
        </div>

        {/* Alt satır */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-[rgba(212,177,106,0.14)] pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-wide2 text-cream3">
            {footer.copyright}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-label text-cream3 transition-colors hover:text-gold"
          >
            {footer.toTop}
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-1"
              aria-hidden="true"
              strokeWidth={1.25}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
