import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TIMELINE = [
  {
    year: "Başlangıç",
    title: "Eryaman'da güvenle atılan ilk adım",
    text: "Eryaman'ın kalbinde, iki basit ilkeyle yola çıktık: dürüstlük ve güler yüz. Kapımızdan giren herkesin kendini rahat hissettiği; verdiği sözün senet değerinde olduğu bir ofis kurduk.",
  },
  {
    year: "Bugün",
    title: "Konuttan arsaya geniş portföy",
    text: "Eryaman merkez ofisimizle Etimesgut, Sincan, Çankaya ve Gölbaşı'nda; seçkin konutlardan yatırımlık arsalara, ofislerden rezidanslara uzanan portföyümüzle her bütçeye danışmanlık sunuyoruz.",
  },
  {
    year: "Yarın",
    title: "Ankara'nın referans emlak markası",
    text: "Yılların birikimini güven, şeffaflık ve müşteri memnuniyetiyle harmanlayarak; Ankara'da gayrimenkul denince ilk akla gelen isimlerden biri olmaya devam edeceğiz.",
  },
];

export default function OurStory() {
  return (
    <section id="hikayemiz" className="relative py-24 sm:py-32">
      <div className="container-luxe grid items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Hikayemiz"
            accent="güvenle yazıldı."
            description="Enis Coşkun Gayrimenkul, Eryaman merkezli güvenilir bir emlak ofisidir. Gayrimenkulü bir işlem değil, bir emanet olarak gören anlayışımızla; bölgenin konut, işyeri ve arsa portföyünü ev sahipleri ve yatırımcılarla güven üzerine kurulu bir ilişkiyle buluşturuyoruz."
          />

          <div className="relative border-l border-gold/30 pl-10">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.15} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[45px] top-1 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-gold/20" />
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ash">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="lg:sticky lg:top-28">
          <div className="img-zoom relative overflow-hidden rounded-card shadow-card">
            <Image
              src="/ilanlar/1324187548.jpg"
              alt="Ankara Etimesgut'ta modern rezidans"
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent" />
            <blockquote className="absolute inset-x-8 bottom-8">
              <p className="font-display text-2xl font-medium italic leading-snug text-white">
                &ldquo;Bir evi satmak kolaydır. Zor olan, ona emanet gibi
                davranmaktır.&rdquo;
              </p>
              <footer className="mt-4 text-xs uppercase tracking-luxe text-gold-soft">
                Enis Coşkun Gayrimenkul
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
