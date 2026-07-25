"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ImagePlus,
  X,
  Loader2,
  Star,
  Check,
} from "lucide-react";
import {
  create,
  fileToDataUrl,
  PROPERTY_TYPES,
  type NewListingInput,
  type SafeAgent,
} from "@/lib/panel/store";

const MAX_PHOTOS = 15;

export default function ListingForm({
  agent,
  onBack,
  onSaved,
}: {
  agent: SafeAgent;
  onBack: () => void;
  onSaved: () => void;
}) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    status: "satilik" as "satilik" | "kiralik",
    type: "Daire",
    price: "",
    rooms: "",
    area: "",
    city: "Ankara",
    district: "",
    address: "",
    description: "",
  });

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onPickFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError("");
    const room = MAX_PHOTOS - photos.length;
    if (room <= 0) {
      setError(`En fazla ${MAX_PHOTOS} fotoğraf ekleyebilirsiniz.`);
      return;
    }
    const chosen = Array.from(files).slice(0, room);
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of chosen) {
        if (!file.type.startsWith("image/")) continue;
        urls.push(await fileToDataUrl(file));
      }
      setPhotos((p) => [...p, ...urls]);
      if (Array.from(files).length > room) {
        setError(`Sadece ilk ${room} fotoğraf eklendi (sınır: ${MAX_PHOTOS}).`);
      }
    } catch {
      setError("Bazı fotoğraflar yüklenemedi. Tekrar deneyin.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const removePhoto = (i: number) =>
    setPhotos((p) => p.filter((_, idx) => idx !== i));

  const makeCover = (i: number) =>
    setPhotos((p) => {
      const copy = [...p];
      const [pick] = copy.splice(i, 1);
      copy.unshift(pick);
      return copy;
    });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (photos.length === 0) {
      setError("En az 1 fotoğraf ekleyin.");
      return;
    }
    setSaving(true);
    try {
      const input: NewListingInput = {
        title: form.title.trim(),
        status: form.status,
        type: form.type,
        price: form.price.trim(),
        rooms: form.rooms.trim() || undefined,
        area: form.area.trim() || undefined,
        city: form.city.trim(),
        district: form.district.trim(),
        address: form.address.trim(),
        description: form.description.trim(),
        photos,
      };
      await create(input, agent);
      onSaved();
    } catch (err) {
      setError((err as Error).message);
      setSaving(false);
    }
  };

  const input =
    "w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-cream placeholder:text-stone/60 outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-gold-glow";
  const label = "mb-2 block text-[11px] font-medium uppercase tracking-luxe text-stone";

  return (
    <div className="container-luxe py-10 sm:py-14">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-stone transition-colors hover:text-gold"
      >
        <ArrowLeft size={14} /> Portföye dön
      </button>

      <p className="eyebrow mb-3">Yeni İlan</p>
      <h1 className="heading-lg !text-3xl sm:!text-4xl">
        Portföyünüze <span className="accent-serif">ilan ekleyin</span>
      </h1>

      <form onSubmit={submit} className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* Sol: fotoğraflar */}
        <div>
          <p className={label}>
            Fotoğraflar ({photos.length}/{MAX_PHOTOS})
          </p>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => onPickFiles(e.target.files)}
          />

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={p}
                  alt={`Fotoğraf ${i + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                  unoptimized
                />
                {i === 0 && (
                  <span className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold text-ink">
                    <Star size={9} fill="currentColor" /> KAPAK
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {i !== 0 && (
                    <button
                      type="button"
                      onClick={() => makeCover(i)}
                      title="Kapak yap"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-cream hover:text-gold"
                    >
                      <Star size={14} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    title="Kaldır"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-cream hover:text-red-300"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))}

            {photos.length < MAX_PHOTOS && (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 text-stone transition-colors hover:border-gold/50 hover:text-gold disabled:opacity-50"
              >
                {uploading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <ImagePlus size={20} />
                )}
                <span className="text-[10px]">
                  {uploading ? "Yükleniyor" : "Ekle"}
                </span>
              </button>
            )}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-stone/70">
            İlk fotoğraf kapak olur. Bir fotoğrafın üzerine gelip yıldıza
            basarak kapağı değiştirebilirsiniz. Fotoğraflar otomatik
            küçültülür.
          </p>
        </div>

        {/* Sağ: alanlar */}
        <div className="space-y-5">
          <div>
            <label className={label}>İlan Başlığı *</label>
            <input
              className={input}
              value={form.title}
              onChange={set("title")}
              placeholder="Ör. Bağlıca'da Site İçi 4+1 Lüks Daire"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>Durum *</label>
              <select className={input} value={form.status} onChange={set("status")}>
                <option value="satilik">Satılık</option>
                <option value="kiralik">Kiralık</option>
              </select>
            </div>
            <div>
              <label className={label}>Mülk Tipi *</label>
              <select className={input} value={form.type} onChange={set("type")}>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>Fiyat *</label>
              <input
                className={input}
                value={form.price}
                onChange={set("price")}
                placeholder="₺8.200.000 / ₺45.000 /ay"
                required
              />
            </div>
            <div>
              <label className={label}>Oda Sayısı</label>
              <input
                className={input}
                value={form.rooms}
                onChange={set("rooms")}
                placeholder="3+1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>Alan (m²)</label>
              <input
                className={input}
                value={form.area}
                onChange={set("area")}
                placeholder="160 m²"
              />
            </div>
            <div>
              <label className={label}>İl</label>
              <input className={input} value={form.city} onChange={set("city")} />
            </div>
          </div>

          <div>
            <label className={label}>İlçe / Semt *</label>
            <input
              className={input}
              value={form.district}
              onChange={set("district")}
              placeholder="Bağlıca, Etimesgut"
              required
            />
          </div>

          <div>
            <label className={label}>Açık Adres *</label>
            <input
              className={input}
              value={form.address}
              onChange={set("address")}
              placeholder="Mahalle, cadde/sokak, no…"
              required
            />
          </div>

          <div>
            <label className={label}>Açıklama</label>
            <textarea
              className={`${input} resize-none`}
              rows={5}
              value={form.description}
              onChange={set("description")}
              placeholder="Mülkün öne çıkan özellikleri, konum avantajları, ısıtma, otopark, site imkânları…"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving} className="btn-gold flex-1 disabled:opacity-60">
              {saving ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Kaydediliyor…
                </>
              ) : (
                <>
                  <Check size={16} /> İlanı Yayınla
                </>
              )}
            </button>
            <button type="button" onClick={onBack} className="btn-ghost">
              İptal
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
