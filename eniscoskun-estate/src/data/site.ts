/**
 * ─── ENİS COŞKUN GAYRİMENKUL — SİTE VERİLERİ ─────────────────────────
 * Bu dosya sitenin tek içerik kaynağıdır. Telefon, adres, ilanlar ve
 * yorumları buradan güncelleyebilirsiniz. Ayrıntılı rehber: README.md
 */

export const CONTACT = {
  phone: "(0312) 282 60 26",
  phoneHref: "tel:+903122826026",
  /**
   * ⚠️ WhatsApp için CEP numarası gerekir. Şu an ofis sabit hattı
   * yer tutucu olarak kullanılıyor — WhatsApp'a kayıtlı cep numaranızı
   * (ör. 905XXXXXXXXX) buraya yazın; tüm "Bilgi Al" / WhatsApp butonları
   * otomatik güncellenir.
   */
  whatsapp: "903122826026",
  whatsappHref:
    "https://wa.me/903122826026?text=Merhaba%2C%20Enis%20Co%C5%9Fkun%20Gayrimenkul%20portf%C3%B6y%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "info@eniscoskun.com",
  address:
    "Eryaman Mah., Dil Devrimi Cd., Uzuner Apt. No:11/4, 06824 Etimesgut / Ankara",
  hours: "Hafta içi & Cumartesi: 09:00 – 19:00",
  hoursSunday: "Pazar: Kapalı",
  // Bilinen bir Instagram hesabı henüz yok — hesabınızı ekleyince buraya yazın.
  instagram: "",
  mapsEmbed:
    "https://maps.google.com/maps?q=Enis%20Co%C5%9Fkun%20Gayrimenkul%20Eryaman%20Etimesgut&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Enis%20Co%C5%9Fkun%20Gayrimenkul%2C%20Dil%20Devrimi%20Cd.%2011%2F4%2C%20Etimesgut%20Ankara",
};

/**
 * Sahibinden.com entegrasyonu — mağazanızın adresi.
 */
export const SAHIBINDEN = {
  store: "https://eniscoskun.sahibinden.com/",
  storeLabel: "sahibinden.com'da Enis Coşkun",
};

/**
 * Google Yorumları
 * - Aşağıdaki TESTIMONIALS listesi GERÇEK Google yorumlarınızdır.
 * - Yeni yorum eklemek için listeye aynı formatta bir kayıt ekleyin.
 * - İsterseniz .env.local içine GOOGLE_MAPS_API_KEY ekleyerek yorumları
 *   Google'dan canlı da çekebilirsiniz (bkz. src/lib/googleReviews.ts).
 */
export const GOOGLE = {
  /** Google Haritalar işletme kaydı (CID: 6426814148118837697) */
  profileUrl: "https://maps.google.com/?cid=6426814148118837697",
  writeReviewUrl: "https://maps.google.com/?cid=6426814148118837697",
  // 17 Temmuz 2026'da Google profilinden alınan gerçek değerler.
  rating: 4.0,
  count: 86,
};

export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  status: "satilik" | "kiralik";
  /** Oda düzeni, ör. "3+1" (arsa/işyeri için boş bırakın) */
  rooms?: string;
  area?: string;
  image: string;
  tag?: string;
  agent?: string;
  /** İlanın sahibinden.com sayfası — kart butonları buraya gider */
  sahibindenUrl?: string;
};

/**
 * ─── SAHİBİNDEN İLANLARI ──────────────────────────────────────────────────
 * TÜMÜ GERÇEK: eniscoskun.sahibinden.com mağazasından alınmıştır
 * (17 Temmuz 2026). Fotoğraflar /public/ilanlar altında yereldir.
 * Yeni ilan eklemek için mağazadaki ilan linkini sahibindenUrl alanına,
 * fotoğrafını da /public/ilanlar klasörüne koymanız yeterli.
 */
export const LISTINGS: Property[] = [
  // ── SATILIK ──
  {
    id: 1322464141,
    title: "Criter Residence'ta Ön Cephe 2+1 Rezidans",
    location: "Çankaya / Ankara",
    price: "₺13.900.000",
    type: "Rezidans",
    status: "satilik",
    rooms: "2+1",
    area: "94 m²",
    image: "/ilanlar/1322464141.jpg",
    tag: "Rezidans",
    agent: "Enis Coşkun",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-eniscoskungmk-criter-residence-on-cephe-2-plus1-satilik-1322464141/detay",
  },
  {
    id: 1307278008,
    title: "Bahşılı TOKİ Yanı 4.511 m² Yatırımlık Arsa",
    location: "Bahşılı / Kırıkkale",
    price: "₺12.750.000",
    type: "Arsa",
    status: "satilik",
    area: "4.511 m²",
    image: "/ilanlar/1307278008.jpg",
    tag: "Yatırım",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-arsa-satilik-eniscoskungayrimenkul-kirikkale-bahsili-toki-yani-arsa-4511-m2-1307278008/detay",
  },
  {
    id: 1324187548,
    title: "Prime Plaza Suite Köşe 2+1 — Konut & Ofis",
    location: "Etimesgut / Ankara",
    price: "₺10.250.000",
    type: "Konut & Ofis",
    status: "satilik",
    rooms: "2+1",
    area: "90 m²",
    image: "/ilanlar/1324187548.jpg",
    tag: "Prime",
    agent: "Enis Coşkun",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-eniscoskungmk-prime-plaza-suite-kose-2-plus1-konut-ofis-1324187548/detay",
  },
  {
    id: 1307294467,
    title: "Döşemealtı Sun City 2 — A Tip 2+1 Daire",
    location: "Döşemealtı / Antalya",
    price: "₺7.500.000",
    type: "Daire",
    status: "satilik",
    rooms: "2+1",
    area: "76 m²",
    image: "/ilanlar/1307294467.jpg",
    tag: "Antalya",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-eniscoskungayrimenkul-dosemealti-sun-city-2-a-tip-2-plus1-satilik-1307294467/detay",
  },
  {
    id: 1326181050,
    title: "Güzel Ankara Sitesi'nde 3+1, 115 m² Daire",
    location: "Etimesgut / Ankara",
    price: "₺5.700.000",
    type: "Daire",
    status: "satilik",
    rooms: "3+1",
    area: "115 m²",
    image: "/ilanlar/1326181050.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-enis-coskun-gayrimenkul-guzel-ankara-sitesi-3-plus1-115-m2-daire-1326181050/detay",
  },
  {
    id: 1327540842,
    title: "1. Etap Betontaş'ta 3+1 Ara Kat Daire",
    location: "Etimesgut / Ankara",
    price: "₺5.500.000",
    type: "Daire",
    status: "satilik",
    rooms: "3+1",
    area: "100 m²",
    image: "/ilanlar/1327540842.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-enis-coskun-gayrimenkul-1.etap-betontas-3-plus1-100-m2-arakat-daire-1327540842/detay",
  },
  {
    id: 1322153422,
    title: "Yıldırım Port Meydan Cephe 1+0 Ofis",
    location: "Gölbaşı / Ankara",
    price: "₺4.950.000",
    type: "İşyeri",
    status: "satilik",
    rooms: "1+0",
    image: "/ilanlar/1322153422.jpg",
    tag: "Ofis",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-is-yeri-satilik-eniscoskungayrimenkul-yildirim-port-meydan-cephe-1-plus0-ofis-1322153422/detay",
  },
  {
    id: 1307483414,
    title: "MOOD Metro'da Full Yapılı 1+1 Daire",
    location: "Sincan / Ankara",
    price: "₺3.725.000",
    type: "Daire",
    status: "satilik",
    rooms: "1+1",
    area: "55 m²",
    image: "/ilanlar/1307483414.jpg",
    tag: "Yatırım",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-eniscoskungayrimenkul-mood-metro-da-full-yapili-1-plus1-satilik-1307483414/detay",
  },
  {
    id: 1324135283,
    title: "Eryaman'da Yapılı Dükkan + Depo",
    location: "Etimesgut / Ankara",
    price: "₺2.900.000",
    type: "İşyeri",
    status: "satilik",
    image: "/ilanlar/1324135283.jpg",
    tag: "Ticari",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-is-yeri-satilik-eniscoskungayrimenkul-eryaman-mahallesi-yapili-dukkan-plusdepo-1324135283/detay",
  },
  // ── KİRALIK ──
  {
    id: 1323010120,
    title: "Eryaman Evleri'nde Ara Kat 3+1, 105 m²",
    location: "Etimesgut / Ankara",
    price: "₺45.000 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "3+1",
    area: "110 m²",
    image: "/ilanlar/1323010120.jpg",
    agent: "Enis Coşkun",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-enis-coskun-gayrimenkul-eryaman-evlerinde-3-plus1-ara-kat-105-m2-1323010120/detay",
  },
  {
    id: 1321698309,
    title: "Eryaman Mahallesi'nde Güney Cephe 3+1",
    location: "Etimesgut / Ankara",
    price: "₺33.000 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "3+1",
    area: "115 m²",
    image: "/ilanlar/1321698309.jpg",
    tag: "Güney Cephe",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-enis-coskun-gayrimenkul-eryaman-mahallesi-3-plus1-guney-110-m2-1321698309/detay",
  },
  {
    id: 1322720030,
    title: "Yunus Emre Mah. Ara Kat 3+1, Kombili",
    location: "Sincan / Ankara",
    price: "₺25.500 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "3+1",
    area: "110 m²",
    image: "/ilanlar/1322720030.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-enis-coskun-gayrimenkul-yunus-emre-mah-3-plus1-ara-kat-kombili-1322720030/detay",
  },
];

/** Vitrin: ana sayfanın üst kısmında sergilenen seçkin portföy (gerçek ilanlar) */
export const FEATURED_PROPERTIES: Property[] = LISTINGS.filter((p) =>
  [
    1322464141, 1307278008, 1324187548, 1307294467, 1326181050, 1327540842,
  ].includes(p.id)
);

/** Portföy türleri — ana sayfadaki adetli kırılım (LISTINGS'ten türetilir) */
export const PROPERTY_TYPES = [
  {
    key: "konut",
    label: "Konut",
    note: "Daire & Rezidans",
    match: (p: Property) => ["Daire", "Rezidans"].includes(p.type),
  },
  {
    key: "isyeri",
    label: "İşyeri & Ofis",
    note: "Ofis, dükkan, plaza",
    match: (p: Property) => ["İşyeri", "Konut & Ofis"].includes(p.type),
  },
  {
    key: "arsa",
    label: "Arsa",
    note: "Yatırımlık arsalar",
    match: (p: Property) => p.type === "Arsa",
  },
  {
    key: "kiralik",
    label: "Kiralık",
    note: "Kiralık konut & işyeri",
    match: (p: Property) => p.status === "kiralik",
  },
];

/** Hizmet bölgeleri — sahibinden mağazasındaki gerçek çalışma bölgeleri */
export const REGIONS = [
  {
    name: "Eryaman / Etimesgut",
    note: "Merkez Ofisimiz",
    image: "/ilanlar/1326181050.jpg",
  },
  {
    name: "Çankaya",
    note: "Rezidans & Prestij",
    image: "/ilanlar/1322464141.jpg",
  },
  {
    name: "Sincan",
    note: "Konut & Yatırım",
    image: "/ilanlar/1307483414.jpg",
  },
  {
    name: "Gölbaşı",
    note: "Ticari & Ofis",
    image: "/ilanlar/1322153422.jpg",
  },
  {
    name: "Antalya / Döşemealtı",
    note: "Tatil & Yatırım",
    image: "/ilanlar/1307294467.jpg",
  },
  {
    name: "Kırıkkale / Bahşılı",
    note: "Arsa Fırsatları",
    image: "/ilanlar/1307278008.jpg",
  },
];

export const TEAM = [
  {
    name: "Enis Coşkun",
    role: "Ofis Sahibi (Broker)",
    phone: "(0312) 282 60 26",
    phoneHref: "tel:+903122826026",
    image: "",
  },
  {
    name: "Gökhan Z.",
    role: "Gayrimenkul Danışmanı",
    phone: "",
    phoneHref: "tel:+903122826026",
    image: "",
  },
];

/**
 * GERÇEK Google yorumları — 17 Temmuz 2026'da işletme profilinden alındı.
 * (İşletmenin 86 değerlendirmesinin çoğu yıldız-yorumdur; metin içeren
 * gerçek yorumlar buraya eklenmiştir. Metinler birebir orijinaldir.)
 * Yeni yorumları aynı formatta ekleyebilirsiniz.
 */
export const TESTIMONIALS = [
  {
    name: "Serdar K.",
    text: "Hızlı, çözüm odaklı yaklaşımları ve güler yüzü sayesinde evimiz bir hafta içinde değerinden satıldı. Tapu süreci dahil her zaman yanımızda oldular; alıcı-satıcı arasında kurdukları güven bağı sayesinde hiç tedirginlik yaşamadan satış işlemini gerçekleştirdik. Teşekkür ederim.",
    rating: 5,
    date: "Google değerlendirmesi",
  },
  {
    name: "Emre Göksu",
    text: "Eryaman'ın en kaliteli emlak ofisi diyebilirim. Yılların verdiği tecrübeleri ve güler yüzlü çalışanlarıyla, sonuna kadar güven duyabileceğiniz sorunsuz ve sağlıklı bir işleyişleri var. Her konuda yanınızda oluyorlar.",
    rating: 5,
    date: "Google değerlendirmesi",
  },
];

export const STATS = [
  { value: 7, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 12, suffix: "", label: "Güncel Portföy" },
  { value: 86, suffix: "", label: "Google Değerlendirmesi" },
  { value: 4, suffix: "", label: "Ankara Hizmet Bölgesi" },
];

export const NAV_CATEGORIES = [
  {
    title: "Satılık",
    items: ["Konut", "Rezidans", "İşyeri & Ofis", "Arsa"],
  },
  {
    title: "Kiralık",
    items: ["Daire", "İşyeri", "Ofis"],
  },
  {
    title: "Bölgeler",
    items: ["Eryaman", "Etimesgut", "Sincan", "Çankaya", "Gölbaşı"],
  },
];
