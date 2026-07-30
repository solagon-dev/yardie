# public/ contents

`public/` holds only files that must be served from the app's own origin at a
fixed path. Everything else — all project photography, renderings, journal
covers, city photos, brand assets — lives on Vercel Blob and is reached through
the rewrites in `next.config.js`. See the "Images" section of the README.

| File(s) | Why it must be here |
| --- | --- |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` | Browsers request these at fixed root paths |
| `yardieopengraph.png` | Default `og:image`; social scrapers need a stable absolute URL |
| `yardielogofullblack.svg` | `publisher.logo` in the Organization / Article JSON-LD |
| `8dc320b7d7c776c5208ef128d2c8aacf.txt` | IndexNow key verification — Bing fetches it directly, nothing links to it |
| `scott-baldwin.jpg`, `mario-taxho.jpg` | Staff photography referenced from `lib/media.ts` |
| `Belhaven-*.jpg`, `DSC*.jpg`, `File_*.jpg`, `IMG_8148.jpg` | Curated Instagram fallback in `lib/instagram.ts`, shown when `BEHOLD_WIDGET_ID` is unset |

## History

This directory previously held 231 files / 165 MB — the raw output of the
migration off the old site, including duplicate exports, Midjourney artifacts,
and the entire legacy blog image set. 206 of those files (160 MB) were
referenced by nothing: not by any source file, and not by any of the 56 routes
in the sitemap. They were removed on 2026-07-29, after a full-site crawl
confirmed all 150 distinct assets on all 56 routes still return 200.

They remain in git history. To restore one:

```bash
git checkout 8ccde15 -- public/<filename>
```

The per-file audit that informed the removal (`asset-manifest.json`, 4293
entries) was also removed — it was a stale one-off scan of a backup tree that
no longer matches this repo, and nothing read it. It is in git history at the
same commit.

## Adding assets

Put new photography on Blob via `scripts/upload-to-blob.mjs`, not here. Only add
a file to `public/` when a third party needs it at a fixed, predictable URL.
