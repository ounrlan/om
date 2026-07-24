# UYG GOLD ESTATE — Kurumsal Web Sitesi

Ankara Bağlıca merkezli **UYG Gold Estate** için altın + koyu füme kimlikli,
tek sayfalık (one-page) lüks emlak sitesi. Next.js 14 + Tailwind CSS +
Framer Motion ile geliştirilmiştir.

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # üretim derlemesi
```

## İçerik Nasıl Güncellenir?

Sitenin **tüm içeriği tek dosyadadır**: [`src/data/site.ts`](src/data/site.ts)

| Ne? | Nerede? |
| --- | --- |
| Telefon, WhatsApp, e-posta, adres | `CONTACT` |
| Sahibinden mağaza linki | `SAHIBINDEN.store` |
| Satılık/Kiralık ilanlar | `LISTINGS` |
| Vitrindeki seçkin portföy | `FEATURED_PROPERTIES` |
| Hizmet bölgeleri şeridi | `REGIONS` |
| Ekip üyeleri | `TEAM` |
| Yedek müşteri yorumları | `TESTIMONIALS` |
| Sayaçlar (yıl, müşteri...) | `STATS` |

> **Önemli:** `TODO` yorumuyla işaretli alanlar (telefon, adres, örnek
> ilan fiyatları, ekip fotoğrafları) yayına almadan önce gerçek
> bilgilerinizle değiştirilmelidir.

## Sahibinden.com Entegrasyonu

Sahibinden.com'un herkese açık bir API'si yoktur ve otomatik veri çekmeye
(scraping) kullanım koşulları gereği izin vermez. Bu yüzden en sağlıklı ve
sürdürülebilir model şudur:

1. Her ilanınızı `LISTINGS` dizisine bir kayıt olarak ekleyin ve ilanın
   sahibinden.com adresini `sahibindenUrl` alanına yapıştırın.
2. Karttaki **"Görüntüle"** butonu ziyaretçiyi doğrudan sahibinden.com'daki
   ilana götürür; **"Bilgi Al"** butonu WhatsApp'ınıza ilan başlığıyla
   birlikte mesaj başlatır.
3. İlk iki kayıt, sahibinden.com'daki **gerçek ilanlarınızdır** (İncek 3+1
   dubleks ve Karapınar 1+1 suit) — fiyat/m²/fotoğrafları güncelleyin.
4. `SAHIBINDEN.store` şu an "UYG GOLD" aramasına gider (ilan başlıklarınız
   böyle başladığı için tüm ilanlarınızı listeler). Sahibinden mağaza
   adresinizi (ör. `https://uyggold.sahibinden.com`) öğrenince burayı
   güncellemeniz yeterli.

## Google Yorumları Entegrasyonu

Site, Google işletme profilinizdeki yorumları **canlı** çekebilir:

1. [Google Cloud Console](https://console.cloud.google.com)'da bir proje
   oluşturun ve **Places API (New)**'i etkinleştirin (aylık ücretsiz kota
   bu kullanım için fazlasıyla yeterlidir).
2. Bir **API anahtarı** oluşturun.
3. Proje kökündeki `.env.local.example` dosyasını `.env.local` adıyla
   kopyalayıp anahtarı girin:

   ```
   GOOGLE_MAPS_API_KEY=AIza...
   GOOGLE_PLACE_ID=            # opsiyonel — boşsa işletme adıyla otomatik bulunur
   ```

4. Sunucuyu yeniden başlatın. Yorumlar, puan ve değerlendirme sayısı
   Google'dan alınır ve 6 saatte bir tazelenir.

API anahtarı tanımlı değilse bölüm, `src/data/site.ts` içindeki
`TESTIMONIALS` listesini gösterir — buraya Google profilinizdeki gerçek
yorumları elle kopyalayabilirsiniz. "Google'da Değerlendirin" ve "Tüm
Yorumları Görün" butonları her durumda Google profilinize gider
(`GOOGLE.profileUrl`).

## Sayfa Yapısı

Hero → Hızlı Arama → Öne Çıkan Portföy → Satılık/Kiralık İlanlar
(sahibinden bağlantılı) → "Satmak mı istiyorsunuz?" talep formu (WhatsApp'a
iletir) → Neden Biz + Sayaçlar → Hikayemiz → Google Yorumları → Ekip →
Bölgeler → İletişim + Harita → Footer (bülten, KVKK).

## Yayına Alma Kontrol Listesi

- [ ] `CONTACT` içindeki telefon/WhatsApp/e-posta/adresi gerçekleriyle değiştir
- [ ] Örnek ilanları gerçek ilanlarla değiştir, fotoğrafları güncelle
- [ ] `TEAM` fotoğraflarını gerçek ekip fotoğraflarıyla değiştir
- [ ] `.env.local` ile Google yorumlarını bağla
- [ ] `SAHIBINDEN.store` mağaza linkini doğrula
- [ ] KVKK / Gizlilik / Çerez metinlerini hazırlayıp footer'a bağla
- [ ] Alan adı + Vercel (veya benzeri) üzerinde yayınla
