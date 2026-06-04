#!/usr/bin/env node
// Walk every image referenced by the app's Blob-hosted asset directories
// and write a dimensions manifest the gallery page can read at build
// time. Images don't live in git (they're on Vercel Blob), so the
// runtime helper can't fall back to fs.readFileSync on Vercel — we
// ship this JSON instead.
//
// Run after `scripts/upload-to-blob.mjs`. Uses the same local /public
// tree as the upload, since dimensions only need to be computed once.

import fs from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";

const PUBLIC_DIR = path.resolve("public");
const TARGETS = ["projects", "renderings", "photoshoot", "journal", "staff", "cities", "brand", "sketches"];
const OUT = path.resolve("lib/blob-image-dimensions.json");

async function* walk(dir) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile()) yield full;
  }
}

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function main() {
  const manifest = {};
  let count = 0;
  let skipped = 0;

  for (const target of TARGETS) {
    for await (const abs of walk(path.join(PUBLIC_DIR, target))) {
      if (!IMAGE_EXT.has(path.extname(abs).toLowerCase())) continue;
      const rel = "/" + path.relative(PUBLIC_DIR, abs).split(path.sep).join("/");
      try {
        const buf = await fs.readFile(abs);
        const { width, height } = imageSize(buf);
        if (typeof width === "number" && typeof height === "number") {
          manifest[rel] = [width, height];
          count++;
        } else {
          skipped++;
        }
      } catch (err) {
        skipped++;
        console.warn(`[dim] skip ${rel}: ${err.message}`);
      }
    }
  }

  // Stable ordering so diffs stay clean as files are added.
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(OUT, JSON.stringify(sorted, null, 2));
  console.log(`[dim] wrote ${count} entries to ${path.relative(process.cwd(), OUT)} (${skipped} skipped)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
