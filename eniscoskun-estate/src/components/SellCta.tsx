"use client";

import { useState, type FormEvent } from "react";
import { Send, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT } from "@/data/site";

const inputClass =
  "w-full rounded-2xl border border-mist bg-porcelain px-5 py-4 text-sm text-slate placeholder:text-steel outline-none transition-all duration-300 focus:border-gold/60 focus:bg-white focus:shadow-gold-glow";

export default function SellCta() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    intent: "Satmak",
    district: "",
    note: "",
  });

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Merhaba, gayrimenkulüm için değerleme talep ediyorum.",
      `• Ad Soyad: ${form.name}`,
      `• Telefon: ${form.phone}`,
      `• Talep: Gayrimenkulümü ${form.intent.toLowerCase()} istiyorum`,
      form.district && `• Bölge: ${form.district}`,
      form.note && `• Not: ${form.note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="sat" className="relative overflow-hidden py-24 sm:py-32">
      {/* Sıcak altın arka plan vurgusu */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 80% at 15% 25%, rgba(182,138,68,0.10), transparent 60%), radial-gradient(45% 70% at 90% 80%, rgba(182,138,68,0.06), transparent 65%)",
        }}
      />
      <div className="container-luxe relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-6">Mülk Sahipleri İçin</p>
          <h2 className="heading-lg">
            Gayrimenkulünüzü satmak ya da{" "}
            <span className="accent-serif">kiraya vermek</span> mi
            istiyorsunuz?
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ash">
            Talep formunu doldurun; güncel piyasa verileriyle ücretsiz değerleme
            yapalım, mülkünüzü doğru alıcı veya kiracıyla buluşturalım.
            Dilerseniz bize doğrudan da ulaşabilirsiniz.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate">
            {[
              "Ücretsiz ve taahhütsüz değerleme",
              "sahibinden.com mağazamızda profesyonel ilan yönetimi",
              "Süreç boyunca tek yetkili danışman",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <ShieldCheck size={16} className="shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="rounded-card border border-mist bg-pearl p-7 shadow-card sm:p-9"
            aria-label="Değerleme talep formu"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Ad Soyad *"
                className={inputClass}
                autoComplete="name"
              />
              <input
                required
                value={form.phone}
                onChange={set("phone")}
                placeholder="Telefon *"
                type="tel"
                className={inputClass}
                autoComplete="tel"
              />
              <select
                value={form.intent}
                onChange={set("intent")}
                className={inputClass}
                aria-label="Talep türü"
              >
                <option>Satmak</option>
                <option>Kiraya Vermek</option>
                <option>Değerleme İstiyorum</option>
              </select>
              <input
                value={form.district}
                onChange={set("district")}
                placeholder="Bölge / Semt"
                className={inputClass}
              />
            </div>
            <textarea
              value={form.note}
              onChange={set("note")}
              placeholder="Mülkünüz hakkında kısa bilgi (tip, oda sayısı, m²...)"
              rows={4}
              className={`${inputClass} mt-4 resize-none`}
            />
            <button type="submit" className="btn-gold mt-6 w-full">
              <Send size={15} />
              WhatsApp ile Gönder
            </button>
            <p className="mt-4 text-center text-[11px] leading-relaxed text-steel">
              Form, WhatsApp üzerinden bize iletilir. Bilgileriniz yalnızca
              sizinle iletişim kurmak için kullanılır.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
