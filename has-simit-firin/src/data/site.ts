// Tüm site metinleri ve işletme verileri burada toplanır.
// Bileşenler içeriği yalnızca buradan okur.
// `// TODO(gerçek veri):` işaretli satırlar kullanıcının onaylaması/güncellemesi
// gereken, doğrulanmamış tanıtım metinleridir (olgu değil, ton metnidir).

// ── Doğrulanmış işletme bilgileri ──
export const business = {
  name: "Has Simit & Fırın",
  address: "Bağlıca Mah., Mermeroğlu Cd. No:64/B-B, 06790 Etimesgut/Ankara",
  addressLines: ["Bağlıca Mah., Mermeroğlu Cd.", "No:64/B-B, 06790 Etimesgut/Ankara"],
  district: "Bağlıca, Etimesgut / Ankara",
  phoneDisplay: "+90 312 544 40 04",
  phoneHref: "tel:+903125444004",
  hoursLabel: "Her gün 06:00 – 19:30",
  hoursShort: "06:00 · 19:30",
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
  { label: "Ürünler", href: "#urunler" },
  { label: "Hikâyemiz", href: "#hikaye" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "Ziyaret", href: "#ziyaret" },
] as const;

// ── Duyuru şeridi ──
export const announcement = {
  text: "Her sabah 06.00'dan itibaren tezgâhta sıcak simit",
  phone: business.phoneDisplay,
} as const;

// ── Hero ──
export const hero = {
  eyebrow: "Bağlıca · Etimesgut",
  // TODO(gerçek veri): Slogan önerisi — dilerseniz değiştirin.
  title: "Sabahın ilk sıcak simidi buradan çıkar.",
  paragraph:
    "Bağlıca'da, Mermeroğlu Caddesi'nde her sabah 06.00'dan itibaren sıcak simit, taze poğaça ve günün böreğiyle kapımız açık. Komşunun fırını, tam da olması gerektiği gibi.",
  primaryCta: { label: "Ürünlere Bak", href: "#urunler" },
  textCta: { label: "Yol Tarifi Al", href: business.directionsUrl },
  imageAlt:
    "Fırından yeni çıkmış, susamıyla bol taze Ankara simitleri tezgâhta üst üste dizili",
} as const;

// ── Güven şeridi (marquee) — yalnızca doğrulanabilir ifadeler ──
export const marqueeItems = [
  "Her Gün 06:00–19:30",
  "Bağlıca, Etimesgut",
  "Google'da 4,1 ★",
  "Sıcak Simit, Taze Börek",
  "Telefonla Sipariş",
] as const;

// ── Ürünler ──
export const products = {
  eyebrow: "Ürünler",
  heading: "Fırından Bu Sabah Çıkanlar",
  intro:
    "Sabahın erken saatinden akşama kadar tezgâhımız taze kalır. İşte her gün elimizden geçenler.",
  items: [
    {
      image: "/images/urun-simit.png",
      alt: "Hasır sepette, bol susamlı çıtır simit halkaları",
      tag: "HER SABAH TAZE",
      title: "Ankara Simidi & Tereyağlı Simit",
      desc: "Susamıyla bol, dışı çıtır içi yumuşacık. Sade ya da bol tereyağlı — sabahın vazgeçilmez klasiği.",
    },
    {
      image: "/images/urun-pogaca.png",
      alt: "Tepside fırından yeni çıkmış, üzeri bol susamlı poğaçalar",
      tag: "FIRINDAN SICAK",
      title: "Poğaça & Açma",
      desc: "Tahinli açmadan peynirli, patatesli poğaçaya; el emeği yumuşacık hamurlar sıcak sıcak tezgâhta.",
    },
    {
      image: "/images/urun-borek.png",
      alt: "Tepsiden dilimlenmiş, kat kat kızarmış spiral kol böreği",
      tag: "GÜNLÜK TEPSİ",
      title: "Börek Çeşitleri",
      desc: "Kıymalı, peynirli, ıspanaklı… Tepsi böreği her gün taze açılır, katmanları elde şekillenir.",
    },
    {
      image: "/images/pide.png",
      alt: "Ahşap tahta üzerinde dizili, fırından yeni çıkmış kıymalı kır pideleri",
      tag: "HAFTA SONUNA ÖZEL",
      title: "Kır Pidesi",
      desc: "Hafta sonuna özel yapılan kır pidemiz; ince açılan hamuru ve bol iç harcıyla tezgâhtaki yerini alır.",
    },
    {
      image: "/images/urun-ekmek.png",
      alt: "Ahşap kütük üzerinde, unlu kabuğu çatlamış rustik somun ekmek",
      tag: "GÜNÜN EKMEĞİ",
      title: "Ekmekler",
      desc: "Her gün fırından çıkan taze ekmek; kabuğu çıtır, içi sıcak. Sofranın en sade, en gerekli parçası.",
    },
    {
      image: "/images/urun-kahvalti.jpg",
      alt: "Sıcak simidin yanında demli çay ile kahvaltı köşesi",
      tag: "SICAK SERVİS",
      title: "Çay & Kahvaltılık",
      desc: "Sıcak simidin yanına demli çay; oturup keyifle kahvaltı edebileceğiniz sıcacık bir köşe.",
    },
  ],
} as const;

// ── Pide & Lahmacun vitrini (ürün grid'inin altındaki geniş banner) ──
export const pideLahmacun = {
  tag: "PİDE & LAHMACUN",
  heading: "İçi sizden, pide bizden.",
  body: "Evde hazırladığınız harcı getirin; hamurunu ustalarımız açsın, fırınımızda pişirsin. Dilerseniz kendi pidemizden ve her gün taze çıkan lahmacunumuzdan da tadın.",
  image: "/images/lahmacun.webp",
  imageAlt:
    "Ahşap tahta üzerinde, domates ve maydanozla servis edilen taze lahmacunlar",
  cta: { label: "Sipariş için Ara", href: business.phoneHref },
} as const;

// ── Hikâye ──
export const story = {
  eyebrow: "Hikâyemiz",
  // TODO(gerçek veri): Aşağıdaki hikâye metni evrensel-otantik bir taslaktır;
  // işletmeye özel gerçek detayları siz ekleyip onaylayın (yıl/kişi eklemeden).
  heading: "Taşın sıcağı, hamurun sabrı.",
  body: [
    "Her sabah gün ağarmadan fırının önünde bir ışık yanar. Hamur yoğrulur, dinlenir, sıcakta kabarır; ilk simitler tezgâha sıcacık dizilir.",
    "Bizim işimiz gösterişli değil, sabırlı. Aynı özeni her güne, her simide, her poğaçaya veriyoruz. Mahallenin fırını olmak tam da bu: komşuya kapıyı taze ekmek kokusuyla açmak.",
  ],
  imageAlt: "Fırıncının elinde şekillenen hamur ve un bulutu",
  values: [
    {
      icon: "sunrise",
      title: "Her Sabah Taze",
      text: "06.00'dan itibaren tezgâh yeniden dolar.",
    },
    {
      icon: "wheat",
      title: "Geleneksel Usül",
      text: "Hamur elde açılır, acele ettirilmez.",
    },
    {
      icon: "store",
      title: "Mahallenin Fırını",
      text: "Bağlıca'nın komşu sıcaklığıyla.",
    },
  ],
} as const;

// ── Yorumlar bölümü ──
export const reviewsSection = {
  eyebrow: "Yorumlar",
  heading: "Siz Değerli Müşterilerimizden",
  intro: "Google'daki değerlendirmelerden birkaçı — hepsi gerçek müşterilerimizden.",
  ctaPrimary: {
    label: "Tüm Yorumları Google'da Gör",
    href: business.googleProfileUrl,
  },
  ctaText: { label: "Siz de Yorum Yazın", href: business.googleProfileUrl },
} as const;

// ── Ziyaret ──
export const visit = {
  eyebrow: "Ziyaret",
  heading: "Bağlıca'da Buluşalım",
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
  mapTitle: "Has Simit & Fırın konumu — Google Haritalar",
} as const;

// ── Footer ──
export const footer = {
  heading: "Sabahın ilk simidi sizin olsun.",
  blurb: "Telefonla sipariş verin, yolunuzu tarif edelim; sıcak simit sizi beklesin.",
  callCta: { label: "Sipariş için Ara", href: business.phoneHref },
  copyright:
    "© 2026 Has Simit & Fırın — Bağlıca, Etimesgut/Ankara",
} as const;
