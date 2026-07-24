import { Phone } from "lucide-react";
import Logo from "./Logo";
import ButtonPrimary from "./ButtonPrimary";
import { footer, nav, business } from "@/data/site";

export default function Footer() {
  return (
    <footer className="pb-6 pt-16 sm:pt-20">
      {/* Krem zeminden 15px içeride duran büyük pine paneli */}
      <div className="px-[15px]">
        <div className="rounded-card bg-pine px-7 py-12 text-cream sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1.1fr] lg:gap-12">
            {/* Marka + CTA */}
            <div>
              <Logo tone="light" />
              <h2 className="mt-6 max-w-[15ch] font-display text-[30px] font-semibold leading-[1.1] sm:text-[38px]">
                {footer.heading}
              </h2>
              <p className="mt-4 max-w-[40ch] text-[15.5px] leading-relaxed text-cream/75">
                {footer.blurb}
              </p>
              <div className="mt-7">
                <ButtonPrimary href={footer.callCta.href} variant="cream">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {footer.callCta.label}
                </ButtonPrimary>
              </div>
            </div>

            {/* Bağlantılar */}
            <nav aria-label="Alt menü">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-label text-sesame">
                Menü
              </p>
              <ul className="mt-4 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[15.5px] text-cream/85 underline-offset-4 transition-colors hover:text-cream hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* İletişim */}
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-label text-sesame">
                İletişim
              </p>
              <address className="mt-4 space-y-3 not-italic text-[15.5px] leading-relaxed text-cream/85">
                <p>
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p>
                  <a
                    href={business.phoneHref}
                    className="font-mono font-semibold text-cream underline-offset-4 hover:underline"
                  >
                    {business.phoneDisplay}
                  </a>
                </p>
                <p className="font-mono text-[14px] text-cream/85">
                  {business.hoursLabel}
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Telif */}
      <p className="container-x mt-6 text-center text-[13px] text-ink/70">
        {footer.copyright}
      </p>
    </footer>
  );
}
