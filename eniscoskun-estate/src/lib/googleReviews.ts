/**
 * Google Yorumları — Places API (New) üzerinden opsiyonel canlı veri.
 *
 * Varsayılan olarak site, src/data/site.ts içindeki GERÇEK yorumları
 * (TESTIMONIALS) gösterir. İsterseniz canlı çekim için:
 *  1. Google Cloud Console'da "Places API (New)" etkinleştirin.
 *  2. `.env.local` dosyasına ekleyin:
 *       GOOGLE_MAPS_API_KEY=AIza...
 *       GOOGLE_PLACE_ID=ChIJ...   (opsiyonel)
 *  3. Sunucuyu yeniden başlatın. Yorumlar 6 saatte bir tazelenir.
 *
 * Anahtar tanımlı değilse `null` döner ve TESTIMONIALS listesi gösterilir.
 */

const REVALIDATE_SECONDS = 21600; // 6 saat
const SEARCH_QUERY = "Enis Coşkun Gayrimenkul Eryaman Etimesgut Ankara";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsData = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
  mapsUri?: string;
  writeReviewUri?: string;
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string };
  }>;
};

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id",
      },
      body: JSON.stringify({ textQuery: SEARCH_QUERY, languageCode: "tr" }),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { places?: Array<{ id?: string }> };
    return data.places?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  const placeId = process.env.GOOGLE_PLACE_ID || (await resolvePlaceId(apiKey));
  if (!placeId) return null;

  try {
    const fields = "rating,userRatingCount,googleMapsUri,reviews";
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&languageCode=tr&key=${apiKey}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) return null;
    const place = (await res.json()) as PlaceDetails;

    const reviews: GoogleReview[] = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google Kullanıcısı",
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
      }))
      .filter((r) => r.text.length > 0)
      .slice(0, 6);

    if (!place.rating || reviews.length === 0) return null;

    return {
      rating: place.rating,
      count: place.userRatingCount ?? reviews.length,
      reviews,
      mapsUri: place.googleMapsUri,
      writeReviewUri: `https://search.google.com/local/writereview?placeid=${placeId}`,
    };
  } catch {
    return null;
  }
}
