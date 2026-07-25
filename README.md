# UYG Ortak Projeler

Bu depo üç web sitesi projesini içerir. Hepsi **Next.js 14 + Tailwind CSS** ile geliştirilmiştir.

| Klasör | Proje | Açıklama |
| --- | --- | --- |
| [`uyg-gold-estate/`](uyg-gold-estate/) | **UYG Gold Estate** | Ankara Bağlıca merkezli lüks emlak sitesi (altın + koyu tema) |
| [`has-simit-firin/`](has-simit-firin/) | **Has Simit & Fırın** | Bağlıca/Etimesgut fırını sitesi (yeşil + krem tema) |
| [`eniscoskun-estate/`](eniscoskun-estate/) | **Enis Coşkun Gayrimenkul** | Eryaman/Etimesgut emlak sitesi |

## Kurulum (her proje için ayrı ayrı)

Bilgisayarınızda **Node.js 18+** kurulu olmalıdır ([nodejs.org](https://nodejs.org)).

```bash
# 1) Depoyu bilgisayarınıza indirin
git clone https://github.com/ounrlan/om.git
cd om

# 2) Çalıştırmak istediğiniz projeye girin
cd uyg-gold-estate        # veya: cd has-simit-firin

# 3) Bağımlılıkları kurun (ilk seferde, birkaç dakika sürer)
npm install

# 4) Geliştirme sunucusunu başlatın
npm run dev
```

Ardından tarayıcıda açılan adrese gidin (**http://localhost:3000**). Her projenin kendi
detaylı README dosyası kendi klasörünün içindedir.

## Birlikte Çalışma Kuralları

- Her değişiklikten önce en güncel hali çekin: `git pull`
- Değişiklik yaptıktan sonra: `git add -A && git commit -m "ne yaptığınız" && git push`
- Aynı dosyayı aynı anda ikiniz birden düzenlemekten kaçının (çakışma olmaması için).
- İçerik güncellemelerinin çoğu her projenin `src/data/site.ts` dosyasından yapılır.
