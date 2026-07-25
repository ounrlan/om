import { Star, PenLine, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { getGoogleReviews } from "@/lib/googleReviews";
import { TESTIMONIALS, GOOGLE } from "@/data/site";

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C41.4 35.2 44 30 44 24c0-1.3-.1-2.6-.4-3.9z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} yıldız`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.round(rating) ? "text-gold" : "text-mist"}
          fill={i < Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

type ReviewItem = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

function ReviewCard({ r }: { r: ReviewItem }) {
  return (
    <figure className="card-still flex h-full w-[340px] shrink-0 flex-col p-7 sm:w-[420px]">
      <div className="mb-5 flex items-center justify-between">
        <Stars rating={r.rating} />
        <GoogleG size={18} />
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate">
        &ldquo;{r.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-mist pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-pale font-display text-sm font-semibold text-gold-deep">
          {r.author.charAt(0).toUpperCase()}
        </span>
        <span>
          <span className="block text-sm font-medium text-ink">{r.author}</span>
          <span className="block text-xs text-ash">{r.relativeTime}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function RatingCard({
  rating,
  count,
  profileUrl,
}: {
  rating: number;
  count: number;
  profileUrl: string;
}) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-still flex h-full w-[300px] shrink-0 flex-col items-center justify-center gap-4 p-7 text-center sm:w-[340px]"
    >
      <GoogleG size={44} />
      <span className="flex items-center gap-3">
        <span className="font-display text-5xl font-semibold text-ink">
          {rating.toFixed(1).replace(".", ",")}
        </span>
        <Stars rating={rating} />
      </span>
      <span className="text-sm text-ash">
        Google&apos;da <span className="font-semibold text-ink">{count}</span>{" "}
        değerlendirme
      </span>
      <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-gold-deep">
        Profili görüntüle <ArrowUpRight size={14} />
      </span>
    </a>
  );
}

export default async function GoogleReviews() {
  const live = await getGoogleReviews();

  const reviews: ReviewItem[] =
    live?.reviews ??
    TESTIMONIALS.map((t) => ({
      author: t.name,
      rating: t.rating,
      text: t.text,
      relativeTime: t.date,
    }));

  const profileUrl = live?.mapsUri ?? GOOGLE.profileUrl;
  const writeUrl = live?.writeReviewUri ?? GOOGLE.writeReviewUrl;
  const rating = live?.rating ?? GOOGLE.rating;
  const count = live?.count ?? GOOGLE.count;

  // Akan şerit içeriği: yorum kartları + Google puan kartı (kesintisiz
  // döngü için iki kez basılır)
  const strip = (keyPrefix: string) => (
    <>
      {reviews.map((r, i) => (
        <ReviewCard key={`${keyPrefix}-r-${i}`} r={r} />
      ))}
      <RatingCard
        key={`${keyPrefix}-rating`}
        rating={rating}
        count={count}
        profileUrl={profileUrl}
      />
    </>
  );

  return (
    <section
      id="yorumlar"
      className="relative overflow-hidden border-y border-mist bg-cloud py-24 sm:py-32"
    >
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Müşterilerimiz Ne Diyor?"
            title="Güven, müşterilerimizin"
            accent="kelimeleriyle."
            description="Yorumlar Google işletme profilimizden alınmaktadır — çünkü gerçek deneyimden daha iyi bir referans yoktur."
          />

          <Reveal delay={0.15} className="mb-14 shrink-0">
            <div className="flex items-center gap-5 rounded-card border border-mist bg-pearl px-7 py-5 shadow-soft">
              <GoogleG size={34} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-semibold text-ink">
                    {rating.toFixed(1).replace(".", ",")}
                  </span>
                  <Stars rating={rating} />
                </div>
                <p className="mt-1 text-xs text-ash">
                  Google&apos;da {count} değerlendirme
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Otomatik akan yorum şeridi — üzerine gelince duraklar */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cloud to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cloud to-transparent sm:w-28" />
        <div className="flex w-max animate-marquee-reviews items-stretch gap-6 pr-6">
          {strip("a")}
          {strip("b")}
        </div>
      </div>

      <div className="container-luxe">
        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href={writeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-6 !py-3 !text-[13px]"
          >
            <PenLine size={15} />
            Google&apos;da Değerlendirin
          </a>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-6 !py-3 !text-[13px]"
          >
            Tüm Yorumları Görün
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
