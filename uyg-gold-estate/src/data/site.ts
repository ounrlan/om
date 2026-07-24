/**
 * ─── UYG GOLD ESTATE — SİTE VERİLERİ ─────────────────────────────────
 * Bu dosya sitenin tek içerik kaynağıdır. Telefon, adres, ilanlar ve
 * yorumları buradan güncelleyebilirsiniz. Ayrıntılı rehber: README.md
 */

export const CONTACT = {
  // Ofis Sahibi (Broker) Uğur Yalçın'ın hattı
  phone: "0 (530) 404 83 94",
  phoneHref: "tel:+905304048394",
  whatsapp: "905304048394",
  whatsappHref:
    "https://wa.me/905304048394?text=Merhaba%2C%20UYG%20Gold%20Real%20Estate%20portf%C3%B6y%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "info@uyggold.com",
  address: "Bağlıca, Zirve Cd., 06790 Etimesgut / Ankara",
  hours: "Pzt – Cmt: 08:00 – 21:00",
  hoursSunday: "Pazar: 10:00 – 21:00",
  instagram: "https://www.instagram.com/uyggold_estate/",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Zirve%20Cd.%20Etimesgut%20Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Ba%C4%9Fl%C4%B1ca+Zirve+Cd.+06790+Etimesgut+Ankara",
};

/**
 * Sahibinden.com entegrasyonu
 * - `store`: Mağaza sayfanızın adresi. Sahibinden mağaza adresinizi öğrenince
 *   (ör. https://uyggold.sahibinden.com) burayı güncelleyin. Şimdilik
 *   "UYG GOLD" araması tüm ilanlarınızı listeler (ilan başlıklarınız
 *   UYG GOLD ile başladığı için).
 */
export const SAHIBINDEN = {
  store: "https://uyggoldestate.sahibinden.com/",
  storeLabel: "sahibinden.com'da UYG GOLD",
};

/**
 * Google Yorumları entegrasyonu
 * - `.env.local` içine GOOGLE_MAPS_API_KEY (ve varsa GOOGLE_PLACE_ID)
 *   eklendiğinde yorumlar Google'dan CANLI çekilir (bkz. src/lib/googleReviews.ts).
 * - Anahtar yoksa aşağıdaki TESTIMONIALS listesi gösterilir — buraya gerçek
 *   Google yorumlarınızı elle de yazabilirsiniz.
 */
export const GOOGLE = {
  /** Google Haritalar'daki gerçek işletme kaydı (CID: 13757053160385024258) */
  profileUrl: "https://maps.google.com/?cid=13757053160385024258",
  writeReviewUrl: "https://maps.google.com/?cid=13757053160385024258",
  // 17 Temmuz 2026'da Google profilinden alınan gerçek değerler.
  // Canlı API bağlanana kadar bu değerler gösterilir.
  rating: 4.8,
  count: 18,
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
  /** İlanın sahibinden.com sayfası — kart "Görüntüle" butonu buraya gider */
  sahibindenUrl?: string;
};

/**
 * ─── SAHİBİNDEN İLANLARI ──────────────────────────────────────────────────
 * TÜMÜ GERÇEK: uyggoldestate.sahibinden.com mağazasından alınmıştır
 * (17 Temmuz 2026). Fotoğraflar /public/ilanlar altında yereldir.
 * Yeni ilan eklemek için mağazadaki ilan linkini sahibindenUrl alanına,
 * fotoğrafını da /public/ilanlar klasörüne koymanız yeterli.
 */
export const LISTINGS: Property[] = [
  // ── SATILIK ──
  {
    id: 1309081783,
    title: "Bağlıca'da Ara Katta 4+1 Sıfır Daireler",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺14.750.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "170 m²",
    image: "/ilanlar/1309081783.jpg",
    tag: "Sıfır",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-yatirim-baglica-da-ara-katta-4-plus1-sifir-daireler-1309081783/detay",
  },
  {
    id: 1328132081,
    title: "Giysi Odalı, Sıfır, Ara Kat Premium 4+1 Daire",
    location: "Yenimahalle / Ankara",
    price: "₺13.500.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "170 m²",
    image: "/ilanlar/1328132081.jpg",
    tag: "Premium",
    agent: "Uğur Yalçın",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-ugur-yalcin-gyo-giysi-odasi-sifir-ara-kat-premium-daire-1328132081/detay",
  },
  {
    id: 1324929879,
    title: "3 Cepheli, Hobi Bahçeli, A+ Geniş Lüks Daire",
    location: "Etimesgut / Ankara",
    price: "₺12.980.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "200 m²",
    image: "/ilanlar/1324929879.jpg",
    agent: "Uğur Yalçın",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-ugur-yalcin-gyo-3-cephe-hobi-bahcesi-a-plus-genis-luks-daire-1324929879/detay",
  },
  {
    id: 1296123636,
    title: "Bağlıca'da Site İçi Ara Kat 4+1, Geniş Peyzaj",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺11.948.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "185 m²",
    image: "/ilanlar/1296123636.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-golg-baglica-da-4-plus1-site-ici-ara-kat-genis-peyzaj-1296123636/detay",
  },
  {
    id: 1311725044,
    title: "Elvan Mahallesi'nde Şehir Manzaralı Ara Kat 3+1",
    location: "Elvan, Etimesgut / Ankara",
    price: "₺8.200.000",
    type: "Daire",
    status: "satilik",
    rooms: "3+1",
    area: "160 m²",
    image: "/ilanlar/1311725044.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-yatirim-elvan-mah-3-plus1-ara-kat-sehir-manzarali-1311725044/detay",
  },
  {
    id: 1324779497,
    title: "Premium 2+1: Ebeveyn Banyolu, Giysi Odalı, Ada Mutfak",
    location: "Yenimahalle / Ankara",
    price: "₺7.095.000",
    type: "Daire",
    status: "satilik",
    rooms: "2+1",
    area: "97 m²",
    image: "/ilanlar/1324779497.jpg",
    agent: "Uğur Yalçın",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-ugur-yalcin-gyo-premium-2-plus1-e.banyo-giysi-odasi-ada-mutfak-1324779497/detay",
  },
  // ── KİRALIK ──
  {
    id: 1322316731,
    title: "Bağlıca'da Asansörlü Ara Kat 4+1, Geniş Peyzaj",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺68.000 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "4+1",
    area: "170 m²",
    image: "/ilanlar/1322316731.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-uyg-baglica-4-plus1-asansorlu-ara-kat-genis-peyzaj-1322316731/detay",
  },
  {
    id: 1320161160,
    title: "Bağlıca'da Cadde Üzeri, Depolu Ticari İşyeri",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺67.000 /ay",
    type: "İşyeri",
    status: "kiralik",
    image: "/ilanlar/1320161160.jpg",
    tag: "Ticari",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-is-yeri-kiralik-uyg-baglica-da-cadde-uzeri-kiralik-ticari-depolu-1320161160/detay",
  },
  {
    id: 1328428018,
    title: "Bağlıca'da Site İçi Ara Kat 4+1, Cephesi Açık",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺65.000 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "4+1",
    area: "170 m²",
    image: "/ilanlar/1328428018.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-uyg-baglica-site-ici-ara-kat-4-plus1-cehpesi-acik-1328428018/detay",
  },
  {
    id: 1328437664,
    title: "Site İçi, Güvenlikli, Geniş 2+1 — A+ Donatılar",
    location: "Etimesgut / Ankara",
    price: "₺39.000 /ay",
    type: "Daire",
    status: "kiralik",
    rooms: "2+1",
    area: "110 m²",
    image: "/ilanlar/1328437664.jpg",
    tag: "Yeni",
    agent: "Uğur Yalçın",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-kiralik-ugur-yalcin-gyo-site-ici-guvenlik-genis-2-plus1-a-plus-donatilar-1328437664/detay",
  },
];

/** Vitrin: ana sayfanın üst kısmında sergilenen seçkin portföy (gerçek ilanlar) */
export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 1326954787,
    title: "Bağlıca'da Köşe Başı, Oturmaya Hazır 4+1 Villa",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺27.500.000",
    type: "Villa",
    status: "satilik",
    rooms: "4+1",
    area: "260 m²",
    image: "/ilanlar/1326954787.jpg",
    tag: "Öne Çıkan",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-baglica-da-4-plus1-kose-basi-oturma-hazir-villa-1326954787/detay",
  },
  {
    id: 1328443325,
    title: "Bağlıca'da Emsal Olacak Süper Lüks Villa",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺26.500.000",
    type: "Villa",
    status: "satilik",
    rooms: "4+1",
    area: "320 m²",
    image: "/ilanlar/1328443325.jpg",
    tag: "Özel Portföy",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-baglica-da-emsal-olacak-super-luks-satilik-villa-1328443325/detay",
  },
  {
    id: 1312058023,
    title: "Bağlıca'da Lüks ve Konforlu 4+1 Villa",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺24.500.000",
    type: "Villa",
    status: "satilik",
    rooms: "4+1",
    area: "260 m²",
    image: "/ilanlar/1312058023.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-baglica-4-plus1-luks-ve-konforlu-villa-1312058023/detay",
  },
  {
    id: 1328286359,
    title: "Melih Gökçek Bulvarı'nda 3 Katlı Merkezi Ticari Bina",
    location: "Yenimahalle / Ankara",
    price: "₺23.000.000",
    type: "Ticari Bina",
    status: "satilik",
    image: "/ilanlar/1328286359.jpg",
    tag: "Yatırım",
    agent: "Uğur Yalçın",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-is-yeri-satilik-ugur-yalcin-gyo-3-katli-merkezi-konum-melih-gokcek-bulvari-1328286359/detay",
  },
  {
    id: 1321118990,
    title: "Beytepe'de Geleceğe Yatırım Fırsatı 4+1",
    location: "Beytepe, Çankaya / Ankara",
    price: "₺18.850.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "185 m²",
    image: "/ilanlar/1321118990.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-4-plus1-gelecege-yatirim-firsati-beytepe-akcali-yapi-koop-1321118990/detay",
  },
  {
    id: 1327514617,
    title: "Bağlıca'da Site İçi, Geniş ve Kullanışlı 4+1 Daire",
    location: "Bağlıca, Etimesgut / Ankara",
    price: "₺16.490.000",
    type: "Daire",
    status: "satilik",
    rooms: "4+1",
    area: "180 m²",
    image: "/ilanlar/1327514617.jpg",
    sahibindenUrl:
      "https://www.sahibinden.com/ilan/emlak-konut-satilik-uyg-baglica-site-ici-ara-kat-genis-ve-kullanisli-daire-1327514617/detay",
  },
];

/** Hizmet bölgeleri — sahibinden mağazasındaki gerçek çalışma bölgeleri */
export const REGIONS = [
  {
    name: "Bağlıca",
    note: "Merkez Ofisimiz",
    image: "/ilanlar/1328443325.jpg",
  },
  {
    name: "Etimesgut",
    note: "Konut & Ticari",
    image: "/ilanlar/1327514617.jpg",
  },
  {
    name: "Yenimahalle",
    note: "Premium Daireler",
    image: "/ilanlar/1328132081.jpg",
  },
  {
    name: "Sincan",
    note: "Yatırım Fırsatları",
    image: "/ilanlar/1311725044.jpg",
  },
  {
    name: "Çankaya",
    note: "Prestijli Konutlar",
    image: "/ilanlar/1321118990.jpg",
  },
];

export const TEAM = [
  {
    name: "Uğur Yalçın",
    role: "Ofis Sahibi (Broker)",
    phone: "0 (530) 404 83 94",
    phoneHref: "tel:+905304048394",
    image: "/ekip/ugur-yalcin-v2.jpg",
  },
  {
    name: "Furkan Kaya",
    role: "Gayrimenkul Danışmanı",
    phone: "0 (546) 686 97 98",
    phoneHref: "tel:+905466869798",
    image: "",
  },
  {
    name: "Sidar Yalçın",
    role: "Gayrimenkul Danışmanı",
    phone: "0 (539) 581 65 46",
    phoneHref: "tel:+905395816546",
    image: "",
  },
  {
    name: "Dinçer Bedir",
    role: "Gayrimenkul Danışmanı",
    phone: "0 (538) 952 06 49",
    phoneHref: "tel:+905389520649",
    image: "",
  },
];

/**
 * GERÇEK Google yorumları — 17 Temmuz 2026'da işletme profilinden eksiksiz
 * alındı (18 değerlendirmenin metin içeren 13 tanesi; tümü 5 yıldız).
 * Metinler birebir orijinaldir. Canlı API (GOOGLE_MAPS_API_KEY)
 * bağlandığında bölüm en güncel yorumları otomatik çeker.
 */
export const TESTIMONIALS = [
  {
    name: "Muaiia Yıldız",
    text: "Hüseyin bey bize doğru zamanda doğru yerden ev almamı sağlayan kişi kendisine çok çok teşekkür ediyorum. UYG Gold çalışanlarına ayrı ayrı teşekkür ediyorum, gerçekten çok güvenilir ve profesyonel çalışma ekibi. Allah böyle işini dürüstçe yapanlardan razı olsun.",
    rating: 5,
    date: "5 ay önce",
  },
  {
    name: "Soli Saat",
    text: "Özellikle Hüseyin bey başta olmak üzere tüm arkadaşlara teşekkür ederiz. Şehir dışından geldik, ev kiralama sürecimizde bize inanılmaz yardımcı olup tüm işlerimizi çözen Hüseyin beye minnet borçluyum, herkese gönül rahatlığı ile tavsiye ederiz. Teşekkürler.",
    rating: 5,
    date: "5 ay önce",
  },
  {
    name: "Haydar Yıldız",
    text: "Kardeşim hepinizden Allah razı olsun, iyi ki varsınız; sayenizde bir ev sahibi olduk. İlk pazarlık aşamasından tapumuzu alana kadar gösterdiğiniz yakınlık ve iyi niyetle canla başla bizimle bir oldunuz, beraber oldunuz. Sağ olun, var olun; tüm canlara sizleri öneriyorum. Sonsuz teşekkürler Hüseyin kardeşim, iyi ki varsınız.",
    rating: 5,
    date: "5 ay önce",
  },
  {
    name: "Arda Tunccekic",
    text: "Hüseyin Bey'e, Harun Bey'e ve tüm UYG GOLD çalışanlarına ilgilerinden dolayı teşekkür ediyorum. Evi almadan önce de, evi aldıktan sonra da gerekli her türlü desteği sağladılar. Güvenilir ve tecrübeli ekip.",
    rating: 5,
    date: "8 ay önce",
  },
  {
    name: "Öner Tanrıseven",
    text: "Etimesgut Alsancak mahallesinde bulunan evimin satış sürecini UYG GOLD ESTATE ile tamamlamış bulunmaktayım. Sürecin başından sonuna kadar gerek fotoğraf/video çekimi, gerek daire gösterimi/sunumu, gerekse adaylarla iletişim konusunda oldukça başarılı, profesyonel bir hizmet aldık. Kiralamayı ya da satmayı düşündüğünüz mülkünüz varsa gönül rahatlığıyla UYG GOLD ESTATE'ten hizmet alabilirsiniz.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "İshak Eren Doğan",
    text: "Ev alırken her konuda profesyonel bir destek sağladılar; aldığım evin avantajlarını, dezavantajlarını, her konuyu açık açık anlatarak dürüst bir hizmet verdiler, çok teşekkür ediyorum. Evimizde çok mutluyuz.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Sema Kasapoğlu",
    text: "Harun Bey ve ekibi ev alma sürecinde her konuda destek verdiler. Kendilerine çok teşekkür ederim. İyi ki yollarımız kesişmiş...",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Batuhan Samur",
    text: "Ev alma sürecimi UYG GOLD ESTATE ile tamamlamış bulunmaktayım. Bu süreçte nezaketini, çabasını ve özverisini esirgemeyen Furkan Bey ile Aykut Bey'e teşekkür ediyorum.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Utku Doğan",
    text: "Beyefendi insanlar, ilgililer; süreci çok iyi takip ediyorlar. Bütçemize uygun daireler ve seçenekler sundular. Teşekkürler.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Mert Çiğdem",
    text: "Furkan Bey ev alma sürecimiz boyunca bize çok yardımcı oldu, ilgisinden dolayı teşekkür ederiz.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Halime Tokur",
    text: "Ev alma sürecimizi Furkan Bey ile yürüttük, her şey çok güzel ilerledi; bilgisi ve emeği için teşekkür ederim.",
    rating: 5,
    date: "bir yıl önce",
  },
  {
    name: "Figen Erkek",
    text: "Profesyonel ve işini en iyi şekilde yapan bir firma. Özellikle Aykut Bey'e hem kiralama hem kiralama sonrası yardımları için çok teşekkür ederiz. Sayelerinde her şeyi kolayca hallettik.",
    rating: 5,
    date: "2 yıl önce",
  },
  {
    name: "Beyza Poyraz",
    text: "Güler yüzle, doğru ve kaliteli iletişimleri ile bize çok yardımcı oldular. Başarılar dileriz, teşekkür ederiz :)",
    rating: 5,
    date: "2 yıl önce",
  },
];

export const STATS = [
  { value: 16, suffix: "", label: "Yıllık Deneyim (2010'dan beri)" },
  { value: 850, suffix: "+", label: "Mutlu Müşteri" },
  { value: 1200, suffix: "+", label: "Tamamlanan İşlem" },
  { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
];

export const NAV_CATEGORIES = [
  {
    title: "Satılık",
    items: ["Villa", "Rezidans", "Daire", "Dubleks"],
  },
  {
    title: "Kiralık",
    items: ["Daire", "Villa", "Rezidans", "Ofis"],
  },
  {
    title: "Yatırım",
    items: ["Arsa", "Projeden Satış", "Ticari Gayrimenkul", "Portföy Yönetimi"],
  },
];
