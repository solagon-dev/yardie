#!/usr/bin/env node
// Upload every image under /public/{projects,renderings,photoshoot,journal,
// staff,cities,brand,sketches} to Vercel Blob, preserving the path. The
// Blob pathname is just the public-relative path (e.g. "projects/foo.jpg"),
// so a Next.js rewrite can map "/projects/:path*" → "{BLOB_BASE}/projects/:path*"
// without rewriting any image src in the codebase.
//
// Idempotent: re-runs replace existing blobs (allowOverwrite: true). Saves a
// manifest at .blob-manifest.json so we can introspect what got uploaded.

import { put } from "@vercel/blob";
import fs from "node:fs/promises";
import path from "node:path";

const PUBLIC_DIR = path.resolve("public");
const TARGETS = [
  "projects",
  "renderings",
  "photoshoot",
  "journal",
  "staff",
  "cities",
  "brand",
  "sketches",
];
const CONCURRENCY = 8;

// Read the BLOB_READ_WRITE_TOKEN from the env-pull file the dev pulled
// down with `vercel env pull`. Falls back to process.env if exported.
async function loadToken() {
  if (process.env.BLOB_READ_WRITE_TOKEN) return process.env.BLOB_READ_WRITE_TOKEN;
  for (const file of [".env.vercel-pull", ".env.local", ".env"]) {
    try {
      const text = await fs.readFile(file, "utf8");
      const match = text.match(/^BLOB_READ_WRITE_TOKEN="?([^"\n\r]+)"?$/m);
      if (match) return match[1];
    } catch { /* missing file is fine */ }
  }
  throw new Error("BLOB_READ_WRITE_TOKEN not found");
}

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

const MIME = {
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
  ".gif": "image/gif", ".webp": "image/webp", ".svg": "image/svg+xml",
  ".avif": "image/avif", ".ico": "image/x-icon", ".mp4": "video/mp4",
  ".webm": "video/webm", ".mov": "video/quicktime", ".pdf": "application/pdf",
};
const mimeFor = (file) => MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream";

async function collectFiles() {
  const out = [];
  for (const target of TARGETS) {
    for await (const abs of walk(path.join(PUBLIC_DIR, target))) {
      const rel = path.relative(PUBLIC_DIR, abs).split(path.sep).join("/");
      out.push({ abs, rel });
    }
  }
  return out;
}

async function uploadOne(file, token) {
  const body = await fs.readFile(file.abs);
  const result = await put(file.rel, body, {
    access: "public",
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: mimeFor(file.abs),
    cacheControlMaxAge: 60 * 60 * 24 * 365, // one year — assets are immutable
  });
  return { rel: file.rel, url: result.url, size: body.length };
}

async function main() {
  console.log("[blob] loading token…");
  const token = await loadToken();

  console.log("[blob] scanning public/…");
  const files = await collectFiles();
  const totalBytes = (await Promise.all(files.map(async (f) => (await fs.stat(f.abs)).size)))
    .reduce((a, b) => a + b, 0);
  console.log(`[blob] ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB total`);

  const manifest = [];
  let done = 0;
  let failed = 0;
  let baseUrl = null;
  const start = Date.now();

  // Hand-rolled bounded-concurrency runner so we can track progress.
  let cursor = 0;
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (true) {
      const i = cursor++;
      if (i >= files.length) return;
      const f = files[i];
      try {
        const r = await uploadOne(f, token);
        manifest.push(r);
        if (!baseUrl) baseUrl = new URL(r.url).origin;
        done++;
        if (done % 25 === 0 || done === files.length) {
          const pct = ((done / files.length) * 100).toFixed(1);
          const elapsed = ((Date.now() - start) / 1000).toFixed(0);
          console.log(`[blob] ${done}/${files.length} (${pct}%, ${elapsed}s, ${failed} failed)`);
        }
      } catch (err) {
        failed++;
        console.error(`[blob] FAIL ${f.rel}: ${err.message}`);
      }
    }
  });
  await Promise.all(workers);

  await fs.writeFile(".blob-manifest.json", JSON.stringify({ baseUrl, files: manifest.sort((a, b) => a.rel.localeCompare(b.rel)) }, null, 2));

  console.log("\n[blob] DONE");
  console.log(`[blob] uploaded: ${manifest.length}`);
  console.log(`[blob] failed:   ${failed}`);
  console.log(`[blob] base url: ${baseUrl}`);
  console.log(`[blob] manifest: .blob-manifest.json`);

  if (failed > 0) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
