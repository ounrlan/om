import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TIMELINE = [
  {
    year: "2010",
    title: "Dürüstlükle atılan ilk adım",
    text: "Ankara Bağlıca'da, iki ilkeye yaslanarak yola çıktık: dürüstlük ve güler yüz. Kapımızdan giren herkesin kendini evinde hissettiği bir ofis kurduk; verdiğimiz her söz, bugün hâlâ senet değerindedir.",
  },
  {
    year: "Bugün",
    title: "Lüks konuttan arsaya geniş portföy",
    text: "Bağlıca ve çevresinde; seçkin konutlardan yatırımlık arsalara uzanan portföyümüzle, her hedefe ve her bütçeye müşteri odaklı danışmanlık sunuyoruz. Bizim için önce insan, sonra mülk gelir.",
  },
  {
    year: "Yarın",
    title: "Bölgenin referans markası",
    text: "On beş yılı aşan birikimimizi; güven, gizlilik ve zarafetle harmanlayarak Ankara'nın batı aksında gayrimenkulün ilk akla gelen ismi olmaya devam edeceğiz.",
  },
];

export default function OurStory() {
  return (
    <section id="hikayemiz" className="relative py-24 sm:py-32">
      <div className="container-luxe grid items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="2010'dan Bugüne"
            title="Hikayemiz"
            accent="güvenle yazıldı."
            description="UYG Gold Estate, 2010 yılında Ankara Bağlıca'da kuruldu. Gayrimenkulü bir işlem değil, bir emanet olarak gören anlayışımızla; bölgenin lüks konutlarından arsalarına uzanan geniş portföyü, ev sahipleri ve yatırımcılarla güven üzerine kurulu bir ilişkiyle buluşturuyoruz."
          />

          <div className="relative border-l border-gold/25 pl-10">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.15} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[45px] top-1 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-gold/20" />
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="lg:sticky lg:top-28">
          <div className="img-zoom relative overflow-hidden rounded-card shadow-luxe-lg">
            <Image
              src="/hikaye.jpg"
              alt="Gün batımında modern mimarili lüks villa"
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <blockquote className="absolute inset-x-8 bottom-8">
              <p className="font-serif text-2xl italic leading-snug text-cream">
                &ldquo;Bir evi satmak kolaydır. Zor olan, ona emanet gibi
                davranmaktır.&rdquo;
              </p>
              <footer className="mt-4 text-xs uppercase tracking-luxe text-gold">
                UYG Gold Estate — 2010&apos;dan bugüne
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
