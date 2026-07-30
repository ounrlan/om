import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/site";

/**
 * Mobil yapışık sipariş çubuğu — telefonda alta sabitlenir: Ara + WhatsApp.
 * lg ve üzeri ekranlarda gizli (masaüstünde header CTA'ları görünür).
 */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[rgba(212,177,106,0.3)] bg-night/95 backdrop-blur-md lg:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2.5 py-4 font-mono text-[11px] font-medium uppercase tracking-wide2 text-cream"
        aria-label={`Sipariş için ara: ${business.phoneDisplay}`}
      >
        <Phone className="h-4 w-4 text-gold" aria-hidden="true" strokeWidth={1.5} />
        Sipariş için Ara
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 py-4 font-mono text-[11px] font-medium uppercase tracking-wide2 text-night"
        style={{
          background:
            "linear-gradient(135deg, #F1E1B4 0%, #D4B16A 48%, #9C7828 100%)",
        }}
        aria-label="WhatsApp ile sipariş verin"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
        WhatsApp
      </a>
    </div>
  );
}
