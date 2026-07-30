// Tüm site metinleri ve işletme verileri burada toplanır.
// Bileşenler içeriği yalnızca buradan okur.
// `// TODO(gerçek veri):` işaretli satırlar kullanıcının onaylaması/güncellemesi
// gereken, doğrulanmamış tanıtım metinleridir (olgu değil, ton metnidir).
//
// SÜRÜM 2 (premium) — işletme OLGULARI v1 ile birebir aynıdır; yalnızca
// sunum/ton metinleri lüks çizgiye göre yeniden yazılmıştır.

// GitHub Pages alt yolu (statik export) — dev'de boş, üretimde "/has-simit-v2"
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ── Doğrulanmış işletme bilgileri ──
export const business = {
  name: "Has Simit & Fırın",
  address: "Bağlıca Mah., Mermeroğlu Cd. No:64/B-B, 06790 Etimesgut/Ankara",
  addressLines: [
    "Bağlıca Mah., Mermeroğlu Cd.",
    "No:64/B-B, 06790 Etimesgut/Ankara",
  ],
  district: "Bağlıca, Etimesgut / Ankara",
  phoneDisplay: "+90 312 544 40 04",
  phoneHref: "tel:+903125444004",
  // TODO(gerçek veri): Bu numarada WhatsApp yoksa doğru numarayı yazın.
  whatsappHref:
    "https://wa.me/903125444004?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.",
  hoursLabel: "Her gün 06:00 – 19:30",
  hoursShort: "06:00 — 19:30",
  // Canlı "açık/kapalı" rozeti bu iki değerden hesaplanır (dk cinsinden).
  opensAt: 6 * 60,
  closesAt: 19 * 60 + 30,
  rating: 4.1,
  reviewCount: 65,
  googleProfileUrl: "https://share.google/S2CHOf8w19xGkaWdE",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Has+Simit+%26+F%C4%B1r%C4%B1n+Ba%C4%9Fl%C4%B1ca+Mah.+Mermero%C4%9Flu+Cd.+No:64+Etimesgut+Ankara",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Has+Simit+%26+F%C4%B1r%C4%B1n+Ba%C4%9Fl%C4%B1ca+Mermero%C4%9Flu+Etimesgut&output=embed",
} as const;

// ── Navigasyon ──
export const nav = [
  { label: "Ürünler", href: "#urunler", index: "01" },
  { label: "Hikâyemiz", href: "#hikaye", index: "02" },
  { label: "Yorumlar", href: "#yorumlar", index: "03" },
  { label: "Yerimiz", href: "#ziyaret", index: "04" },
] as const;

// ── Duyuru şeridi ──
export const announcement = {
  text: "Her sabah 06.00'dan itibaren tezgâhta sıcak simit",
  phone: business.phoneDisplay,
} as const;

// ── Hero ──
export const hero = {
  eyebrow: "Bağlıca · Etimesgut · Ankara",
  // TODO(gerçek veri): Slogan önerisi — dilerseniz değiştirin.
  // Satır satır verilir; her satır ayrı maskeyle açılır.
  titleLines: ["Sabahın ilk", "sıcak simidi"] as const,
  titleAccent: "buradan çıkar.",
  paragraph:
    "Mermeroğlu Caddesi'nde, gün ağarmadan yanan bir fırın. Her sabah 06.00'dan itibaren sıcak simit, taze poğaça ve günün böreğiyle kapımız açık.",
  primaryCta: { label: "Fırından Çıkanlar", href: "#urunler" },
  textCta: { label: "Yol Tarifi Al", href: business.directionsUrl },
  scrollHint: "Aşağı Kaydırın",
  imageAlt:
    "Fırından yeni çıkmış, susamıyla bol taze Ankara simitleri tezgâhta üst üste dizili",
} as const;

// ── Hero altı rakam şeridi — yalnızca doğrulanmış veriler ──
export const stats = [
  { value: "06.00", label: "İlk fırın saati" },
  { value: "7/7", label: "Haftanın her günü" },
  { value: "4,1", label: `Google puanı · ${business.reviewCount} yorum` },
  { value: "1", label: "Mahalle fırını, Bağlıca" },
] as const;

// ── Güven şeridi (marquee) — yalnızca doğrulanabilir ifadeler ──
export const marqueeItems = [
  "Her Gün 06:00 – 19:30",
  "Bağlıca, Etimesgut",
  "Google'da 4,1 ★",
  "Sıcak Simit, Taze Börek",
  "Telefonla Sipariş",
] as const;

// ── Ürünler ──
export const products = {
  eyebrow: "Ürünler",
  index: "01",
  heading: "Fırından bu sabah çıkanlar",
  intro:
    "Gün ağarmadan başlayan tezgâh, akşama kadar taze kalır. Her gün elimizden geçenler:",
  items: [
    {
      image: `${BASE}/images/urun-simit.png`,
      alt: "Hasır sepette, bol susamlı çıtır simit halkaları",
      tag: "Her Sabah Taze",
      no: "01",
      title: "Ankara Simidi & Tereyağlı Simit",
      desc: "Susamıyla bol, dışı çıtır içi yumuşacık. Sade ya da bol tereyağlı — sabahın vazgeçilmez klasiği.",
    },
    {
      image: `${BASE}/images/urun-pogaca.webp`,
      alt: "Tepside fırından yeni çıkmış, üzeri bol susamlı poğaçalar",
      tag: "Fırından Sıcak",
      no: "02",
      title: "Poğaça & Açma",
      desc: "Tahinli açmadan peynirli, patatesli poğaçaya; el emeği yumuşacık hamurlar sıcak sıcak tezgâhta.",
    },
    {
      image: `${BASE}/images/urun-borek.png`,
      alt: "Tepsiden dilimlenmiş, kat kat kızarmış spiral kol böreği",
      tag: "Günlük Tepsi",
      no: "03",
      title: "Börek Çeşitleri",
      desc: "Kıymalı, peynirli, ıspanaklı… Tepsi böreği her gün taze açılır, katmanları elde şekillenir.",
    },
    {
      image: `${BASE}/images/pide.png`,
      alt: "Ahşap tahta üzerinde dizili, fırından yeni çıkmış kıymalı kır pideleri",
      tag: "Hafta Sonuna Özel",
      no: "04",
      title: "Kır Pidesi",
      desc: "Hafta sonuna özel yapılan kır pidemiz; ince açılan hamuru ve bol iç harcıyla tezgâhtaki yerini alır.",
    },
    {
      image: `${BASE}/images/urun-ekmek.png`,
      alt: "Ahşap kütük üzerinde, unlu kabuğu çatlamış rustik somun ekmek",
      tag: "Günün Ekmeği",
      no: "05",
      title: "Ekmekler",
      desc: "Her gün fırından çıkan taze ekmek; kabuğu çıtır, içi sıcak. Sofranın en sade, en gerekli parçası.",
    },
    {
      image: `${BASE}/images/urun-kahvalti.jpg`,
      alt: "Sıcak simidin yanında demli çay ile kahvaltı köşesi",
      tag: "Sıcak Servis",
      no: "06",
      title: "Çay & Kahvaltılık",
      desc: "Sıcak simidin yanına demli çay; oturup keyifle kahvaltı edebileceğiniz sıcacık bir köşe.",
    },
  ],
} as const;

// ── Ürün kartı CTA'sı (hover'da beliren çip) ──
export const productCardCta = "Sipariş için Ara";

// ── Kahvaltı köşesi vitrini (Pide & Lahmacun'un simetriği) ──
export const kahvalti = {
  tag: "Kahvaltı Köşesi",
  heading: "Demli çay, sıcak simit, sakin bir köşe.",
  body: "Sabah simidini kapıda alıp gidebilirsiniz; ama dilerseniz içeride oturun, çayınız demlensin. Fırından yeni çıkan simidin yanında sıcacık bir kahvaltı — günün en sade keyfi.",
  image: `${BASE}/images/urun-kahvalti.jpg`,
  imageAlt: "Sıcak simidin yanında demli çay ile kahvaltı köşesi",
  cta: { label: "Kahvaltıya Gelin", href: business.directionsUrl },
} as const;

// ── Pide & Lahmacun vitrini ──
export const pideLahmacun = {
  tag: "Pide & Lahmacun",
  heading: "İçi sizden, pide bizden.",
  body: "Evde hazırladığınız harcı getirin; hamurunu ustalarımız açsın, fırınımızda pişirsin. Dilerseniz kendi pidemizden ve her gün taze çıkan lahmacunumuzdan da tadın.",
  image: `${BASE}/images/lahmacun.webp`,
  imageAlt:
    "Ahşap tahta üzerinde, domates ve maydanozla servis edilen taze lahmacunlar",
  cta: { label: "Sipariş için Ara", href: business.phoneHref },
} as const;

// ── Tam genişlik alıntı bandı — GERÇEK bir Google yorumundan ──
export const pullQuote = {
  text: "İşini çok iyi yapan, güler yüzlü ve dostane insanlar. Özellikle simitleri Ankara'nın en iyilerinden.",
  author: "Hasan Ölmez",
  source: "Google Yorumu",
} as const;

// ── Hikâye ──
export const story = {
  eyebrow: "Hikâyemiz",
  index: "02",
  // TODO(gerçek veri): Aşağıdaki hikâye metni evrensel-otantik bir taslaktır;
  // işletmeye özel gerçek detayları siz ekleyip onaylayın (yıl/kişi eklemeden).
  heading: "Taşın sıcağı,",
  headingAccent: "hamurun sabrı.",
  body: [
    "Mermeroğlu Caddesi'nde gün ağarmadan bir ışık yanar. Hamur yoğrulur, dinlenir, sıcakta kabarır; saat tam 06.00'da ilk tepsi fırından çıkar ve ilk simit, daha buharı üzerindeyken komşusunu bulur.",
    "Burada iş gösterişli değil, sabırlı: hamur elde açılır, börek her gün taze tepsiyle çıkar, kır pidesi hafta sonlarına saklanır. Harcını getiren komşunun pidesini de aynı taşta biz pişiririz — mahallenin fırını olmak tam da bu.",
  ],
  imageAlt: "Fırıncının elinde şekillenen hamur ve un bulutu",
  values: [
    {
      icon: "sunrise",
      no: "I",
      title: "Her Sabah Taze",
      text: "06.00'dan itibaren tezgâh yeniden dolar.",
    },
    {
      icon: "wheat",
      no: "II",
      title: "Geleneksel Usül",
      text: "Hamur elde açılır, acele ettirilmez.",
    },
    {
      icon: "store",
      no: "III",
      title: "Mahallenin Fırını",
      text: "Bağlıca'nın komşu sıcaklığıyla.",
    },
  ],
} as const;

// ── Yorumlar bölümü ──
export const reviewsSection = {
  eyebrow: "Yorumlar",
  index: "03",
  heading: "Siz değerli müşterilerimizden",
  intro:
    "Google'daki değerlendirmelerden birkaçı — hepsi gerçek müşterilerimizden, harfiyen.",
  ctaPrimary: {
    label: "Tüm Yorumları Google'da Gör",
    href: business.googleProfileUrl,
  },
  ctaText: { label: "Siz de Yorum Yazın", href: business.googleProfileUrl },
} as const;

// ── Ziyaret ──
export const visit = {
  eyebrow: "Yerimiz",
  index: "04",
  heading: "Bağlıca'da buluşalım",
  intro:
    "Sabah simidini kapıda alın ya da içeride demli çayla keyfini çıkarın. Yolunuz Mermeroğlu Caddesi'ne düşsün.",
  addressLabel: "Adres",
  phoneLabel: "Telefon",
  hoursLabel: "Çalışma Saatleri",
  hoursRows: [
    { days: "Pazartesi – Cuma", hours: business.hoursShort },
    { days: "Cumartesi – Pazar", hours: business.hoursShort },
  ],
  directionsCta: { label: "Yol Tarifi Al", href: business.directionsUrl },
  callCta: { label: "Sipariş için Ara", href: business.phoneHref },
  mapTitle: "Has Simit & Fırın konumu — Google Haritalar",
} as const;

// ── Footer ──
export const footer = {
  heading: "Sabahın ilk simidi",
  headingAccent: "sizin olsun.",
  blurb:
    "Telefonla sipariş verin, yolunuzu tarif edelim; sıcak simit sizi beklesin.",
  callCta: { label: "Sipariş için Ara", href: business.phoneHref },
  toTop: "Başa Dön",
  copyright: "© 2026 Has Simit & Fırın — Bağlıca, Etimesgut/Ankara",
} as const;
