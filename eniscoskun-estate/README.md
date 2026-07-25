# ENİS COŞKUN GAYRİMENKUL — Kurumsal Web Sitesi

Eryaman (Etimesgut / Ankara) merkezli emlak ofisi için tek sayfalık, modern
kurumsal web sitesi. **Next.js 14 + Tailwind CSS + Framer Motion** ile
geliştirilmiştir. Tasarım dili: **altın + şık gri**, aydınlık ve güven veren.

---

## 🎤 Sunum Modu (tek tık)

Proje klasöründeki **`sunum-baslat.bat`** dosyasına çift tıklayın:
site derlenir (ilk seferde), sunucu başlar ve Chrome'da
**http://localhost:3002** otomatik açılır. Pencereyi kapatınca site durur.

> Aynı Wi-Fi'daki telefon/tablette göstermek için o cihazın tarayıcısına
> `http://<bilgisayarın-IP-adresi>:3002` yazın (Windows güvenlik duvarı
> ilk seferde izin isteyebilir).

## 🚀 Çalıştırma

```bash
cd eniscoskun-estate
npm install        # (ilk kez, bağımlılıklar için)
npm run dev        # geliştirme sunucusu → http://localhost:3000
npm run build      # üretim derlemesi
npm run start      # üretim sunucusu
```

## ✏️ İçeriği Güncelleme — `src/data/site.ts`

Sitenin **tüm içeriği** bu tek dosyadadır. Kod bilmeden güncelleyebilirsiniz:

| Ne | Nerede |
|---|---|
| Telefon, e-posta, adres, çalışma saatleri | `CONTACT` |
| **WhatsApp cep numarası** (aşağıya bakın) | `CONTACT.whatsapp` |
| Sahibinden mağaza linki | `SAHIBINDEN` |
| Google puanı ve yorum sayısı | `GOOGLE` |
| İlanlar (satılık + kiralık) | `LISTINGS` |
| Öne çıkan vitrin ilanları | `FEATURED_PROPERTIES` |
| Google müşteri yorumları | `TESTIMONIALS` |
| Ekip üyeleri | `TEAM` |
| Hizmet bölgeleri | `REGIONS` |
| İstatistik sayaçları | `STATS` |

### ⚠️ Öncelikli: WhatsApp numarası
Şu an `CONTACT.whatsapp` alanında **ofis sabit hattı yer tutucu** olarak
duruyor. WhatsApp butonlarının çalışması için buraya **WhatsApp'a kayıtlı cep
numaranızı** yazın (ör. `905XXXXXXXXX`). Tüm "Bilgi Al" / WhatsApp bağlantıları
otomatik güncellenir.

### Yeni ilan eklemek
1. Sahibinden ilan fotoğrafını `public/ilanlar/<ilan-no>.jpg` olarak kaydedin.
2. `LISTINGS` dizisine yeni bir kayıt ekleyin (mevcut kayıtları örnek alın);
   `sahibindenUrl` alanına ilanın sahibinden.com linkini koyun.

### Yeni Google yorumu eklemek
`TESTIMONIALS` dizisine `{ name, text, rating, date }` formatında ekleyin.
Yorumlar Google profilinizden **birebir gerçek** metinlerdir.

## 🖼️ Görseller

- **Logo** (gerçek marka logosu, şeffaf zemin): `public/logo.png` (koyu
  metinli — açık zeminler), `public/logo-white.png` (beyaz metinli — koyu
  zeminler), `public/logo-mark.png` (yalnızca chevron işareti). Daha yüksek
  çözünürlüklü orijinalleriniz varsa aynı adlarla üzerine yazmanız yeterli —
  site otomatik kullanır.
- İlan fotoğrafları: `public/ilanlar/` (17 Tem 2026'da sahibinden mağazasından
  alınıp yerelleştirildi; AVIF orijinaller + JPG kopyalar).
- Ekip fotoğrafları: `TEAM` içinde `image` alanı boşsa altın harf monogramı
  gösterilir. Fotoğraf eklemek için görseli `public/ekip/` altına koyup yolu
  yazın (ör. `/ekip/enis-coskun.jpg`).

## 🔌 Google Yorumları — canlı bağlama (opsiyonel)

Varsayılan olarak `TESTIMONIALS` (gerçek, elle girilmiş yorumlar) gösterilir.
Yorumları Google'dan otomatik çekmek isterseniz `.env.local` oluşturun:

```
GOOGLE_MAPS_API_KEY=AIza...
GOOGLE_PLACE_ID=ChIJ...   # opsiyonel
```

Ayrıntılar: `src/lib/googleReviews.ts`.

## 📌 Bekleyen gerçek veriler (sizden)

- [ ] **WhatsApp cep numarası** (`CONTACT.whatsapp`)
- [ ] Instagram / sosyal medya hesabı (`CONTACT.instagram`)
- [ ] Ekip fotoğrafları (Enis Coşkun, Gökhan Z.)
- [ ] İsteğe bağlı: daha fazla Google yorumu, watermark'sız ilan fotoğrafları

## 🎨 Tasarım Sistemi

- **Renkler:** `tailwind.config.ts` (porcelain/cloud/mist gri skala + altın)
- **Yazı tipleri:** Fraunces (başlıklar/serif) + Inter (gövde)
- **Global sınıflar:** `src/app/globals.css` (`.card`, `.btn-gold`,
  `.btn-outline`, `.eyebrow`, `.heading-lg` …)
