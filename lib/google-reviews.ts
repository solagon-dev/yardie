export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

export async function getGoogleReviews(): Promise<GooglePlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { rating: 0, totalReviews: 0, reviews: [] };
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          // Required for server-side calls when the API key has HTTP referrer restrictions.
          // In Google Cloud Console, ensure https://yardiedesign.com/* is an allowed referrer,
          // or switch the key to "None" / IP-address restrictions for server-side use.
          'Referer': 'https://yardiedesign.com/',
          'Origin': 'https://yardiedesign.com',
        },
        next: { revalidate: 86400 }, // re-fetch once per day
      }
    );

    if (!res.ok) return { rating: 0, totalReviews: 0, reviews: [] };

    const data = await res.json();

    const fiveStarWithText: GoogleReview[] = (data.reviews ?? [])
      .filter((r: { rating: number; text?: { text: string } }) => r.rating === 5 && r.text?.text)
      .map((r: { authorAttribution: { displayName: string }; rating: number; text: { text: string }; relativePublishTimeDescription: string }) => ({
        author: r.authorAttribution.displayName,
        rating: r.rating,
        text: r.text.text,
        relativeTime: r.relativePublishTimeDescription,
      }));

    return {
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: fiveStarWithText,
    };
  } catch {
    return { rating: 0, totalReviews: 0, reviews: [] };
  }
}
