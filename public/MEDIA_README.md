# Yardie — Media Inventory

A guide to what lives where in `/public`, and which files the site actually pulls from.

---

## Folder Map

```
/public/
  brand/               Logo files + favicon + OG image — used by the layout
  plans/               Hand-drawn site plan SVGs (existing, kept)
  photoshoot/          Curated subset of the studio photoshoot
    featured/          29 photos used across hero rotators + galleries
    landscapes/        (reserved for future curation)
    hardscapes/        (reserved for future curation)
    details/           (reserved for future curation)
  projects/            Project photography, organized by job slug
    williamsburg-106/  6 photos — Southern brick + lighted columns
    williamsburg-109/  7 photos — rear-garden redesign
    may-blvd-6047/     12 photos — multi-level terrace + fireplace (Farmville)
    holton/            10 photos — full property build
    autumn-lakes/      10 photos — pool + planting
    castlebrook/       4 photos
    emma-cannon/       2 photos
    allen-donald/      5 in-process photos (Donald Drive, Greenville)
    speight-seed-farm/ 6 photos — overview + before
    728-remington/     4 in-process photos
    evans/             1 photo
    yardie-portfolio/  12 mixed-job portfolio shots from /Yardie source folder
  renderings/          ⚠️ 3D MODEL PLANS — NEVER use as project photography
    autumn-lakes/      5 renderings
    chakalos/          4 renderings
    connelly/          5 renderings
    nagypal/           5 renderings
```

---

## What the site uses

The site pulls **only** from `/projects/`, `/photoshoot/`, `/plans/`, `/brand/`, and (sparingly, on the Process page) `/renderings/`. Every photo path used in code is registered in `lib/media.ts`.

---

## Source folders (NOT used by site — safe to delete)

These are the original Google Drive download archives. They contain the
unprocessed library from which the curated subset above was selected.
They include 506 HEIC files (which browsers can't display) and many
duplicates. Once you've confirmed the curated subset looks right, you
can delete them safely:

```
/public/drive-download-20260501T012949Z-3-001/
/public/drive-download-20260501T012949Z-3-002/
/public/drive-download-20260501T012949Z-3-003/
/public/drive-download-20260501T012949Z-3-004/
```

These four folders together total roughly **7 GB** of source photography
and **will balloon Vercel deploy size** if left in `/public/`. Recommend
deleting from the published site (keep them in your local backup).

---

## Loose files at /public root (legacy)

The Aman-*.png, Belhaven-*.jpg, DSC*.jpg, File_*.jpg, IMG_*.jpg, blog*.png
files at the root were used by an earlier build. They're still served by
Next but no longer referenced. Safe to delete after a final visual check.
The four `yardielogo*.svg` and `yardie-favicon.svg` originals are kept
at root as well as in `/brand/` so existing component imports keep
working until they're migrated.

---

## Naming convention used in `/projects/`

`{NN}-{semantic-description}.jpg`

Numbers control the sort order in galleries; the description gives
future humans (and copywriters) a clue about the shot. Original DSC#
filenames are deliberately not preserved — they meant nothing without
the camera roll.

---

## What was excluded

- **HEIC files** (506) — Apple's container, no browser support without
  conversion. The original `/Before/` folder of 6047 May Blvd, for
  example, is entirely HEIC; that project's gallery only shows After.
- **MOV files** (53) — QuickTime. Convert to MP4 before using.
- **Duplicates** — files like `DSC03748.jpg` and `DSC03748(1).jpg`
  were deduped at copy time.
- **Empty subfolders** — Country Club, Wilson Job Greenville, Windsor
  in the source download had no files inside.
