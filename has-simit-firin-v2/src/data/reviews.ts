// Google yorumları — GERÇEK veriler.
// Metinler harfiyen korunmuştur (yazım/noktalama düzeltmesi YAPILMAMIŞTIR),
// çünkü bunlar müşteri alıntılarıdır.

export type Review = {
  author: string;
  rating: number;
  text: string;
  featured: boolean;
};

// Google toplam puanı (aggregateRating). JSON-LD'ye KOYULMAZ (Google politikası).
export const aggregate = {
  rating: 4.1,
  count: 65,
  url: "https://share.google/S2CHOf8w19xGkaWdE",
} as const;

export const reviews: Review[] = [
  // ── Öne çıkanlar (kartlarda gösterilir) ──
  {
    author: "Bugra Gunesdogan",
    rating: 5,
    text: "Kaliteli ekibi ile güler yüzlü ve hijyenik bir ortamda oturup gönül rahatlığı ile kahvaltınızı edebileceğiniz bir mekan",
    featured: true,
  },
  {
    author: "Onder H.",
    rating: 5,
    text: "Her zaman lezzetli ürünler ve güzel ilgi alaka ile karşılaşıyorum simiti de çok iyi, tavsiye ederim.",
    featured: true,
  },
  {
    author: "İlteber Arseven",
    rating: 5,
    text: "Tereyağlı simit favorim, Ankara simidi de çıtır çıtır. Çok iyiler bu konuda.",
    featured: true,
  },
  {
    author: "emine güneşdogan",
    rating: 5,
    text: "Son derece güler yüzlü insanlar muhteşem ustalar, sıcacık bir ortam Oktay Bey'in neşeli ve şakacı halleri",
    featured: true,
  },
  {
    author: "hasan hüseyin şimşeki",
    rating: 5,
    text: "Kaliteli malzeme Güler yüzlü personel. Hafta sonuna özel yapılan kır pidesinin tadı tarif edilemez.",
    featured: true,
  },
  {
    author: "Hasan Ölmez",
    rating: 5,
    text: "İşini çok iyi yapan, güler yüzlü ve dostane insanlar. Özellikle simitleri Ankara'nın en iyilerinden.",
    featured: true,
  },
  {
    author: "pervin tolgay",
    rating: 5,
    text: "Civarın en nefis simitleri burada, net. Ayrıca sabahları işe yetişme koşturmacasında son derece seri davranıyorlar.",
    featured: true,
  },
  {
    author: "Zekids çayyolu",
    rating: 5,
    text: "Ankara'da yediğim en güzel simit ve poğaça tebrik ediyorum",
    featured: true,
  },
  {
    author: "Murat Ayaz",
    rating: 5,
    text: "Sıcacık simitleri var sabahları Öğlen lahmacun veya pideyi deneyin Çalışan arkadaşlar samimi Ellerinize sağlık fiyatlar güzel",
    featured: true,
  },
  // ── Öne çıkmayanlar (dosyada saklanır, kartlarda gösterilmez) ──
  {
    author: "Aysun Ozdemir",
    rating: 5,
    text: "Lezzetli bir simit yedik, güleryüz ve uygun fiyat gördük.",
    featured: false,
  },
  {
    author: "ECOMAR MARKET",
    rating: 5,
    text: "Bağlıca da en güzel pide lahmacun burada ayrıca sabahları taze çıtır simit sıcak sıcak denemekte fayda var",
    featured: false,
  },
  {
    author: "cemre Işık",
    rating: 5,
    text: "Güler yüzlü personel temiz ve nezih bir ortam ürünlerde oldukça lezzetli ellerinize sağlık",
    featured: false,
  },
  {
    author: "Sait Yılmaz",
    rating: 5,
    text: "Güler yüzlü insanlar. Unlu Mamul olarak malzemeleri çeşit ve taze",
    featured: false,
  },
  {
    author: "Selahatin Deveci",
    rating: 5,
    text: "Ellerinze sağlık hersey çok güzel herkes gidebileceğiniz adres",
    featured: false,
  },
  {
    author: "Burak Demirci",
    rating: 5,
    text: "Simit süper, çay da güzel.. Tek eleştirim kıymalı börek mide yakıyor.. Yağı değiştirilebilir..",
    featured: false,
  },
  {
    author: "Sıla Sema Kasap",
    rating: 5,
    text: "Taze.",
    featured: false,
  },
  {
    author: "Burak Balkan",
    rating: 5,
    text: "Tavsiye ederim",
    featured: false,
  },
  {
    author: "murat selim özçelik",
    rating: 5,
    text: "Çok şahane",
    featured: false,
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
