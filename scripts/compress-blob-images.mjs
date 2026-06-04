#!/usr/bin/env node
// One-off: re-encode every oversized image in Vercel Blob in place.
//
// Why this exists: Ahrefs site audit flagged 180 images served from
// /projects/*, /renderings/*, etc. — paths that next.config.js rewrites
// to the Vercel Blob origin. The original uploads are DSLR full-res
// JPEGs in the 20–40 MB range. Browsers download them as-is when the
// raw path is hit, so the audit error stays even after Next/Image
// optimization is applied client-side.
//
// What it does:
//   1. Lists every blob in the store (paginated).
//   2. Filters to JPG/PNG/WebP > 800 KB.
//   3. For each: downloads, sharp-resizes to ≤ 1920 px wide,
//      re-encodes (JPEG q78 progressive | PNG palette | WebP q80),
//      strips EXIF, writes back to the SAME pathname so existing
//      URLs keep working.
//   4. Skips anything that's already smaller after compression than
//      it was (defensive — never make a file bigger).
//
// Idempotent: re-running compresses nothing new because the files
// are already under the threshold the second time through.

import { list, put, head } from "@vercel/blob";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

// ---- Read BLOB_READ_WRITE_TOKEN from .env.vercel-pull ----
function loadToken() {
  const envFile = path.resolve(".env.vercel-pull");
  if (!fs.existsSync(envFile)) throw new Error("Missing .env.vercel-pull");
  const txt = fs.readFileSync(envFile, "utf8");
  const m = txt.match(/^BLOB_READ_WRITE_TOKEN="?([^"\n\r]+)"?$/m);
  if (!m) throw new Error("BLOB_READ_WRITE_TOKEN not found in .env.vercel-pull");
  return m[1];
}

const TOKEN = loadToken();
const MIN_SIZE_BYTES = 800 * 1024;          // 800 KB — only touch files bigger than this
const MAX_DIMENSION  = 1920;                // resize down to this on the long edge
const JPEG_QUALITY   = 78;
const PNG_QUALITY    = 80;
const WEBP_QUALITY   = 80;

// ---- Helpers ----
function fmtBytes(n) {
  if (n < 1024) return n + " B";
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
  return (n / 1024 / 1024).toFixed(2) + " MB";
}

async function listAllBlobs() {
  const out = [];
  let cursor = undefined;
  do {
    const page = await list({ token: TOKEN, cursor, limit: 1000 });
    out.push(...page.blobs);
    cursor = page.cursor;
  } while (cursor);
  return out;
}

function isImage(pathname) {
  return /\.(jpe?g|png|webp)$/i.test(pathname);
}

// Sharp pipeline that produces a buffer roughly the size we want.
async function compress(input, pathname) {
  const ext = path.extname(pathname).toLowerCase();
  const img = sharp(input, { failOn: "none" })
    .rotate()                                // apply EXIF orientation
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  if (ext === ".png") {
    return await img.png({ quality: PNG_QUALITY, palette: true, compressionLevel: 9 }).toBuffer();
  }
  if (ext === ".webp") {
    return await img.webp({ quality: WEBP_QUALITY }).toBuffer();
  }
  // default: JPEG. progressive=true loads in passes which is good for big photos.
  return await img.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();
}

function contentType(pathname) {
  const ext = path.extname(pathname).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

// ---- Main ----
async function main() {
  console.log("Listing blobs…");
  const all = await listAllBlobs();
  const candidates = all.filter(b => isImage(b.pathname) && b.size >= MIN_SIZE_BYTES);
  console.log(`Found ${all.length} total blobs, ${candidates.length} above ${fmtBytes(MIN_SIZE_BYTES)}.`);

  // Sort largest-first so the user sees the biggest wins early.
  candidates.sort((a, b) => b.size - a.size);

  const CONCURRENCY = 8;
  let i = 0;
  let savedBytes = 0;
  let skipped = 0;
  let failed = 0;
  let nextIndex = 0;

  async function processOne(blob) {
    const myIdx = ++i;
    const idx = String(myIdx).padStart(3, " ");
    const tag = `[${idx}/${candidates.length}]`;
    try {
      const res = await fetch(blob.url);
      if (!res.ok) throw new Error(`download HTTP ${res.status}`);
      const original = Buffer.from(await res.arrayBuffer());

      const compressed = await compress(original, blob.pathname);

      if (compressed.length >= original.length) {
        console.log(`${tag} ${blob.pathname} — already small (${fmtBytes(original.length)} -> ${fmtBytes(compressed.length)}), skipping`);
        skipped++;
        return;
      }

      await put(blob.pathname, compressed, {
        token: TOKEN,
        access: "public",
        contentType: contentType(blob.pathname),
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge: 31536000,
      });

      const saved = original.length - compressed.length;
      savedBytes += saved;
      console.log(`${tag} ${blob.pathname}   ${fmtBytes(original.length)} -> ${fmtBytes(compressed.length)}   (-${fmtBytes(saved)})`);
    } catch (err) {
      failed++;
      console.error(`${tag} ${blob.pathname} — FAILED: ${err.message}`);
    }
  }

  // Run with bounded concurrency.
  async function worker() {
    while (true) {
      const idx = nextIndex++;
      if (idx >= candidates.length) return;
      await processOne(candidates[idx]);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log("");
  console.log("=".repeat(60));
  console.log(`Processed: ${candidates.length}`);
  console.log(`Compressed: ${candidates.length - skipped - failed}`);
  console.log(`Skipped (already small): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total saved: ${fmtBytes(savedBytes)}`);
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
