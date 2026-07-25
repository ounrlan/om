/**
 * ─── EMLAKÇI PANELİ — VERİ KATMANI ────────────────────────────────────────
 *
 * Bu dosya panelin TEK veri kaynağıdır. Şu an tarayıcı hafızasını
 * (localStorage) kullanır — DEMO amaçlıdır.
 *
 * SUPABASE'E GEÇİŞ: Tüm fonksiyonlar `async` (Promise döndürür). Supabase'e
 * geçerken yalnızca bu dosyanın İÇİNİ değiştirmeniz yeterli olur; panel
 * arayüzünün (giriş, liste, form, detay) hiçbir satırı değişmez.
 *   - authenticate()  → supabase.auth.signInWithPassword()
 *   - listAll()/listByOwner()/getById() → supabase.from('listings').select()
 *   - create()        → supabase.from('listings').insert() + storage.upload()
 *
 * DEMO SINIRI: Veriler yalnızca kullanılan tarayıcıda tutulur; ortaklar
 * birbirinin gerçek verisini GÖREMEZ (aynı tarayıcıda seed veriyle çalışır).
 * Supabase'e geçince bu sınır kalkar.
 */

import { FEATURED_PROPERTIES, LISTINGS } from "@/data/site";

export type Agent = {
  id: string;
  username: string;
  password: string;
  name: string;
  role: "broker" | "agent";
  phone?: string;
};

export type PanelListing = {
  id: string;
  ownerId: string;
  ownerName: string;
  title: string;
  status: "satilik" | "kiralik";
  type: string;
  price: string;
  rooms?: string;
  area?: string;
  city: string;
  district: string;
  address: string;
  description: string;
  photos: string[]; // data URL veya /public yolu (en çok 15)
  createdAt: number;
};

export type NewListingInput = Omit<
  PanelListing,
  "id" | "ownerId" | "ownerName" | "createdAt"
>;

/* ─── Demo emlakçı hesapları (Supabase'de auth.users olacak) ─────────────── */
export const AGENTS: Agent[] = [
  {
    id: "ugur",
    username: "ugur",
    password: "uyg2026",
    name: "Uğur Yalçın",
    role: "broker",
    phone: "0 (530) 404 83 94",
  },
  {
    id: "furkan",
    username: "furkan",
    password: "uyg2026",
    name: "Furkan Kaya",
    role: "agent",
    phone: "0 (546) 686 97 98",
  },
  {
    id: "sidar",
    username: "sidar",
    password: "uyg2026",
    name: "Sidar Yalçın",
    role: "agent",
    phone: "0 (539) 581 65 46",
  },
  {
    id: "dincer",
    username: "dincer",
    password: "uyg2026",
    name: "Dinçer Bedir",
    role: "agent",
    phone: "0 (538) 952 06 49",
  },
];

export type SafeAgent = Omit<Agent, "password">;

const LS_LISTINGS = "uyg_panel_listings_v1";
const LS_SESSION = "uyg_panel_session_v1";

/* ─── Yardımcı: mevcut site ilanlarından başlangıç portföyü üret ─────────── */
function locationParts(loc: string): { city: string; district: string } {
  // "Bağlıca, Etimesgut / Ankara" → district: "Bağlıca, Etimesgut", city: "Ankara"
  const [left, right] = loc.split(" / ");
  return { district: (left ?? loc).trim(), city: (right ?? "Ankara").trim() };
}

function seedListings(): PanelListing[] {
  const source = [...FEATURED_PROPERTIES, ...LISTINGS];
  return source.map((p, i) => {
    const owner = AGENTS[i % AGENTS.length];
    const { city, district } = locationParts(p.location);
    return {
      id: `seed-${p.id}`,
      ownerId: owner.id,
      ownerName: owner.name,
      title: p.title,
      status: p.status,
      type: p.type,
      price: p.price,
      rooms: p.rooms,
      area: p.area,
      city,
      district,
      address: p.location,
      description:
        "Bölgenin değerli konumunda, özenle seçilmiş bir portföy ilanı. Detaylı bilgi ve yerinde gösterim için danışmanınızla iletişime geçin.",
      photos: [p.image],
      createdAt: Date.now() - (source.length - i) * 86_400_000,
    };
  });
}

function readListings(): PanelListing[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_LISTINGS);
    if (!raw) {
      const seeded = seedListings();
      window.localStorage.setItem(LS_LISTINGS, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw) as PanelListing[];
  } catch {
    return [];
  }
}

function writeListings(list: PanelListing[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LS_LISTINGS, JSON.stringify(list));
  } catch {
    // localStorage kotası (fotoğraflar) dolabilir
    throw new Error(
      "Tarayıcı hafızası doldu (demo sınırı). Daha az/daha küçük fotoğraf deneyin. Supabase'e geçince bu sınır kalkar."
    );
  }
}

/* ─── Oturum ─────────────────────────────────────────────────────────────── */
export async function authenticate(
  username: string,
  password: string
): Promise<SafeAgent | null> {
  const u = username.trim().toLowerCase();
  const found = AGENTS.find(
    (a) => a.username === u && a.password === password
  );
  if (!found) return null;
  const safe: SafeAgent = {
    id: found.id,
    username: found.username,
    name: found.name,
    role: found.role,
    phone: found.phone,
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LS_SESSION, JSON.stringify(safe));
  }
  return safe;
}

export function getSession(): SafeAgent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LS_SESSION);
    return raw ? (JSON.parse(raw) as SafeAgent) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(LS_SESSION);
  }
}

/* ─── İlanlar ────────────────────────────────────────────────────────────── */
export async function listAll(): Promise<PanelListing[]> {
  return readListings().sort((a, b) => b.createdAt - a.createdAt);
}

export async function listByOwner(ownerId: string): Promise<PanelListing[]> {
  return (await listAll()).filter((l) => l.ownerId === ownerId);
}

export async function getById(id: string): Promise<PanelListing | null> {
  return readListings().find((l) => l.id === id) ?? null;
}

export async function create(
  input: NewListingInput,
  owner: SafeAgent
): Promise<PanelListing> {
  const listing: PanelListing = {
    ...input,
    id: `u-${owner.id}-${readListings().length + 1}-${Math.floor(
      (typeof performance !== "undefined" ? performance.now() : 0) * 1000
    )}`,
    ownerId: owner.id,
    ownerName: owner.name,
    createdAt: nowMs(),
    photos: input.photos.slice(0, 15),
  };
  const all = readListings();
  all.push(listing);
  writeListings(all);
  return listing;
}

export async function remove(id: string, requesterId: string): Promise<void> {
  const all = readListings();
  const target = all.find((l) => l.id === id);
  if (!target) return;
  if (target.ownerId !== requesterId) {
    throw new Error("Yalnızca kendi ilanınızı silebilirsiniz.");
  }
  writeListings(all.filter((l) => l.id !== id));
}

/* new Date() export'ta kısıtlı olabildiği için güvenli zaman damgası */
function nowMs(): number {
  try {
    return Date.now();
  } catch {
    return 0;
  }
}

/* ─── Fotoğraf: dosyayı küçültülmüş JPEG data URL'e çevir ─────────────────── */
export function fileToDataUrl(
  file: File,
  maxDim = 1400,
  quality = 0.82
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Dosya okunamadı"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Görsel açılamadı"));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          const scale = maxDim / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas desteklenmiyor"));
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export const PROPERTY_TYPES = [
  "Daire",
  "Villa",
  "Rezidans",
  "Dubleks",
  "Müstakil",
  "İşyeri",
  "Ofis",
  "Arsa",
];
