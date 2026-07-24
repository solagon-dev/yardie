# public/ Asset Inventory Manifest (brief §13.2)

**Non-destructive scan — nothing was deleted or moved.** Recommendations only; act after approval.
Full per-file data: `asset-manifest.json` (4293 entries).

> **Which tree was scanned:** `/Users/stonebaldwin/dev/yardie-corrupted-backup/public/`. The image
> directories under `public/` (`projects`, `renderings`, `photoshoot`, `journal`, `staff`, `cities`,
> `brand`, `sketches`) are **gitignored**, so the fresh clone that became the canonical repo contains
> only the 232 tracked `public/` files — the 8.5 GB of local imagery still lives in the preserved
> backup directory. This does **not** affect the site: `next.config.js` rewrites those paths to Vercel
> Blob, and image dimensions come from the tracked `lib/blob-image-dimensions.json`, so builds and both
> local and production rendering work without the local copies. Restoring them is dev-convenience only.
> Code-reference counts below were computed against the **current** canonical codebase.

## Totals

| Category | Files | Size |
|---|---:|---:|
| **All of public/** | 4293 | 9.11 GB |
| Editor backups (`*~`) | 2937 | 8.13 GB |
| Exact duplicates (sha256) | 2843 | 6.29 GB |
| No code reference found | 79 | 0.02 GB |
| Oversized originals (>20 MB) | 0 | 0.00 GB |
| Large (5–20 MB) | 11 | 0.13 GB |

**Reclaimable with zero visual change** (backups + exact duplicates): **8.64 GB**

## Recommended actions

1. **Delete `*~` editor backups (2937 files, 8.13 GB).** Already gitignored; created by the image-compression script. Zero risk.
2. **De-duplicate 2843 exact hash-identical files (6.29 GB).** Keep the canonical path listed below, repoint any references, then remove the copies.
3. **Review 79 files with no code reference (0.02 GB).** Not proof they're unused — they may be referenced dynamically or reserved for upcoming content. **Do not bulk-delete**; confirm against Blob usage first.
4. **Recompress 0 oversized originals (>20 MB).** Move masters outside the production tree (e.g. `_archive/`) and serve compressed derivatives via Blob.

> Reminder (§13.2): move masters out of `public/` rather than destroying them, update references, then re-verify every page.

## Largest oversized originals (>20 MB)

| Path | Size | Dimensions | Duplicate of |
|---|---:|---|---|
| _none_ | | | |

## Largest exact duplicates

| Path | Size | Dimensions | Duplicate of |
|---|---:|---|---|
| `/projects/728-remington/04-progress.jpg~` | 41.5 MB | — | `/projects/remington-extra-08.jpg~` |
| `/projects/728-remington/08-extra.jpg~` | 41.5 MB | — | `/projects/remington-extra-08.jpg~` |
| `/projects/landscapes/remington-extra-08.jpg~` | 41.5 MB | — | `/projects/remington-extra-08.jpg~` |
| `/projects/process/remington-progress-04.jpg~` | 41.5 MB | — | `/projects/remington-extra-08.jpg~` |
| `/projects/remington-progress-04.jpg~` | 41.5 MB | — | `/projects/remington-extra-08.jpg~` |
| `/projects/728-remington/03-progress.jpg~` | 40.6 MB | — | `/projects/remington-extra-07.jpg~` |
| `/projects/728-remington/07-extra.jpg~` | 40.6 MB | — | `/projects/remington-extra-07.jpg~` |
| `/projects/masonry/remington-extra-07.jpg~` | 40.6 MB | — | `/projects/remington-extra-07.jpg~` |
| `/projects/process/remington-progress-03.jpg~` | 40.6 MB | — | `/projects/remington-extra-07.jpg~` |
| `/projects/remington-progress-03.jpg~` | 40.6 MB | — | `/projects/remington-extra-07.jpg~` |
| `/projects/728-remington/02-progress.jpg~` | 38.9 MB | — | `/projects/remington-extra-06.jpg~` |
| `/projects/728-remington/06-extra.jpg~` | 38.9 MB | — | `/projects/remington-extra-06.jpg~` |
| `/projects/masonry/remington-extra-06.jpg~` | 38.9 MB | — | `/projects/remington-extra-06.jpg~` |
| `/projects/process/remington-progress-02.jpg~` | 38.9 MB | — | `/projects/remington-extra-06.jpg~` |
| `/projects/remington-progress-02.jpg~` | 38.9 MB | — | `/projects/remington-extra-06.jpg~` |
