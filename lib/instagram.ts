export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  thumbnail_url?: string;
}

export interface InstagramFeedData {
  posts: InstagramPost[];
  isLive: boolean;
}

// Curated fallback — shown when no live feed is connected.
const CURATED_POSTS: InstagramPost[] = [
  { id: 'c1', media_url: '/DSC03765.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c2', media_url: '/DSC03551.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c3', media_url: '/DSC00044.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c4', media_url: '/IMG_8148.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c5', media_url: '/File_055.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c6', media_url: '/Belhaven-1.jpg', permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c7', media_url: '/Belhaven-2.jpg', permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
  { id: 'c8', media_url: '/File_027.jpg',   permalink: 'https://www.instagram.com/yardiedesign/', media_type: 'IMAGE' },
];

// ── Behold.so feed (recommended — no Meta developer app required) ─────────────
async function fetchBehold(widgetId: string, limit: number): Promise<InstagramPost[]> {
  const res = await fetch(`https://feeds.behold.so/${widgetId}`, {
    next: { revalidate: 300 }, // refresh every 5 minutes
  });
  if (!res.ok) throw new Error(`Behold API error: ${res.status}`);

  const data = await res.json();
  const posts = (Array.isArray(data) ? data : data.posts ?? []) as Array<{
    id: string;
    mediaType: string;
    mediaUrl: string;
    thumbnailUrl?: string;
    permalink: string;
    caption?: string;
  }>;

  return posts
    .filter((p) => p.mediaType === 'IMAGE' || p.mediaType === 'CAROUSEL_ALBUM')
    .slice(0, limit)
    .map((p) => ({
      id: p.id,
      media_url: p.mediaUrl,
      permalink: p.permalink,
      media_type: p.mediaType as InstagramPost['media_type'],
      caption: p.caption,
      thumbnail_url: p.thumbnailUrl,
    }));
}

// ── Meta Graph API (alternative) ─────────────────────────────────────────────
async function fetchGraphApi(token: string, limit: number): Promise<InstagramPost[]> {
  const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url';
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`,
    { next: { revalidate: 300 } },
  );
  if (!res.ok) throw new Error(`Instagram Graph API error: ${res.status}`);

  const data = await res.json();
  const posts: InstagramPost[] = (data.data ?? []).filter(
    (p: InstagramPost) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM',
  );
  if (posts.length === 0) throw new Error('No image posts returned');
  return posts.slice(0, limit);
}

// ── Public entry point ────────────────────────────────────────────────────────
export async function getInstagramFeed(limit = 8): Promise<InstagramFeedData> {
  const beholdId = process.env.BEHOLD_WIDGET_ID;
  const graphToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // Try Behold first (simpler setup)
  if (beholdId) {
    try {
      const posts = await fetchBehold(beholdId, limit);
      if (posts.length > 0) return { posts, isLive: true };
    } catch (err) {
      console.warn('[Instagram] Behold fetch failed, trying fallback:', err);
    }
  }

  // Try Meta Graph API
  if (graphToken) {
    try {
      const posts = await fetchGraphApi(graphToken, limit);
      return { posts, isLive: true };
    } catch (err) {
      console.warn('[Instagram] Graph API failed, using curated posts:', err);
    }
  }

  return { posts: CURATED_POSTS.slice(0, limit), isLive: false };
}
