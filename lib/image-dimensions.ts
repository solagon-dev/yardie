// Resolves natural image dimensions for any /public-rooted path.
//
// The gallery page uses this so each tile reserves the right amount
// of space BEFORE the image loads — without it the CSS-columns
// masonry reflows as each picture downloads, which reads as a
// stuttery glitch on first paint.
//
// Bulk image assets live on Vercel Blob (not in the repo), so we ship
// a precomputed dimensions manifest at lib/blob-image-dimensions.json
// (built by scripts/build-image-dimensions.mjs after each upload).
// In local dev we still fall back to filesystem lookups via image-size
// for any file that isn't yet in the manifest.

import manifest from "./blob-image-dimensions.json";

export type Dim = { width: number; height: number };

const dims = manifest as unknown as Record<string, [number, number]>;
const cache = new Map<string, Dim>();

export function getImageDim(publicPath: string): Dim {
  const cached = cache.get(publicPath);
  if (cached) return cached;

  const entry = dims[publicPath];
  if (entry) {
    const dim: Dim = { width: entry[0], height: entry[1] };
    cache.set(publicPath, dim);
    return dim;
  }

  // Local-dev fallback: try reading the file off disk if it's there.
  // Avoids breaking pages when a brand-new image hasn't been added to
  // the manifest yet. Wrapped in try/catch so missing files (Vercel)
  // gracefully fall through to the default.
  if (process.env.NODE_ENV !== "production") {
    try {
      // require() so fs/path don't get bundled into client builds.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require("node:fs") as typeof import("node:fs");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require("node:path") as typeof import("node:path");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { imageSize } = require("image-size") as typeof import("image-size");
      const abs = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
      const buf = fs.readFileSync(abs);
      const { width, height } = imageSize(buf);
      if (typeof width === "number" && typeof height === "number") {
        const dim: Dim = { width, height };
        cache.set(publicPath, dim);
        return dim;
      }
    } catch {
      // fall through to default
    }
  }

  const fallback: Dim = { width: 1600, height: 1200 };
  cache.set(publicPath, fallback);
  return fallback;
}
