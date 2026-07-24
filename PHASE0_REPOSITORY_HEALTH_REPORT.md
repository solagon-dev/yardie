# Phase 0 — Repository Health Report (Yardie)

**Status: 🛑 STOP — implementation is unsafe until recovery. Do not build on the current working copy.**
Generated during Phase 0 preflight, per the brief §1.2 (Repository-health gate) and the operating constraint: *"If repository corruption makes implementation unsafe, stop before altering affected files and report the exact problem and safest recovery options."*

No destructive command was run. No file was reset, reverted, checked out, or overwritten. This report and its recommendations are read-only findings.

---

## 1. Verdict

The repository suffered a **localized data-corruption event on July 16 (~12:49–12:54)** that:

1. Corrupted **399 of 956 loose Git objects (~42%)** — they cannot be decompressed.
2. **Zeroed out 19 source files** in the working tree — they are now 100% null bytes (content destroyed).

Both symptoms the brief warned about are **confirmed present, not stale.** Because the destroyed files are foundational to the entire brief (central content model, SEO helpers, media helpers, header/nav, consultation form, the signature before/after interaction), and because Git itself can no longer be trusted for diff/checkout/commit, **no feature work can proceed safely until the working copy is restored.**

**The good news:** the damage is bounded and fully recoverable. The GitHub remote is a pristine copy at the exact same commit, and all non-Git local assets (8.5 GB of images, `.env` secrets) survived intact.

---

## 2. Evidence

### 2.1 Git object store — 42% corrupt, no packfiles
- `git fsck --full` → **399** objects reported `object corrupt or missing` with zlib `inflate: data stream error (unknown compression method)`.
- **956** total loose objects on disk; **0** packfiles (`.git/objects/pack/` is empty). All history lives in loose objects, so ~42% of local history is unreadable **locally**.
- HEAD *commit* and its top tree read, but subtrees/blobs under it are corrupt — e.g. the `components` tree object `d8992661…` and the `BeforeAfterSlider.tsx` blob `305c8907…`. Consequently these fail:
  - `git diff`, `git diff --stat`
  - `git show HEAD`, `git ls-tree HEAD <path>`
  - `git cat-file -t/-p <most objects>`
- Implication: **local Git cannot reconstruct even the committed versions** of the destroyed files. Recovery must come from the remote.

### 2.2 Working tree — 19 source files destroyed (100% null bytes)
Confirmed 100% `0x00`, size preserved but content gone (not iCloud placeholders — `brctl` confirms the path is outside any CloudDocs library; no relevant xattrs). These are exactly the 19 files `git status` shows as `M`:

| File | Size (all null) | Role in the brief |
|---|---|---|
| `lib/content.ts` | 171,114 b | **Central content / case-study model** (§6) |
| `lib/media.ts` | 61,714 b | Media / responsive-image helpers (§13) |
| `lib/seo.ts` | 5,854 b | **SEO / metadata / JSON-LD helpers** (§12) |
| `lib/form-handler.ts` | 1,787 b | Shared form-submission layer (§9.2) |
| `lib/resend.ts` | 1,078 b | Email delivery (§9.2) |
| `components/Header.tsx` | 23,178 b | Primary navigation (§4.1) |
| `components/Footer.tsx` | 14,603 b | Footer nav + NAP (§4, §12.1) |
| `components/ConsultationForm.tsx` | 19,076 b | **Consultation form** (§9.1) |
| `components/ContactForm.tsx` | 8,007 b | Contact form (§9) |
| `components/BeforeAfterSlider.tsx` | 5,992 b | **Signature plan-to-built interaction** (§2.3/§5.5) |
| `components/Reviews.tsx` | 9,242 b | Testimonials (§5.6) |
| `components/ServiceAreaPostcards.tsx` | 9,266 b | Local relevance (§5.7/§12.2) |
| `components/QuotePromptModal.tsx` | 5,307 b | Conversion (§4.4) |
| `components/StoryVideo.tsx` | 4,241 b | Homepage media |
| `components/InstagramFeed.tsx` | 6,691 b | Social (§15) |
| `components/PreFooterCTA.tsx` | 2,625 b | Final CTA (§5.8) |
| `components/CookieConsent.tsx` | 2,262 b | Privacy (§9.3) |
| `components/MobileCTA.tsx` | 1,393 b | Sticky mobile CTA (§14) |
| `components/JournalCard.tsx` | 1,351 b | Journal (§12.7) |

- **No other source files are damaged.** A repo-wide scan (excluding `public/`, `.git`, `node_modules`) found the corruption confined to these 19; all `app/` router files, configs, and remaining components are intact.

### 2.3 Timeline
- Corrupt Git loose objects: mtime **Jul 16 12:49**.
- Zeroed source files: mtime **Jul 16 12:54**.
- Single correlated event (consistent with a disk/filesystem fault, interrupted write, or bad sync that wrote zeros). Directory metadata survived; data blocks were lost.

---

## 3. What is SAFE (recovery assets)

- **GitHub remote is a clean recovery target.** `origin` = `https://github.com/solagon-dev/yardie.git`; `origin/main` = `8fee61be851f9a1529b1ab005d41f531ecf40f19` = **exactly** local `refs/heads/main`. The last-committed version of every file, including clean versions of all 19 destroyed files, is safe on GitHub.
- **`public/` image assets survived.** 1,106 images across the gitignored dirs (`projects`, `renderings`, `photoshoot`, `journal`, `staff`, `cities`, `brand`, `sketches`) sampled — all valid magic bytes, none zeroed. These are **gitignored** (not on the remote), so they exist **only locally** and must be preserved through any recovery.
- **`.env`, `.env.local`, `.env.vercel-pull` intact** (no null bytes). Gitignored secrets — not on the remote; must be preserved.
- **`YARDIE_FULL_IMPLEMENTATION_BRIEF.md`** (untracked) is intact.
- **Only uncommitted, non-remote work** in the repo is: the 19 zeroed files (content already destroyed on disk) + the intact brief. A fresh clone therefore loses nothing that is still recoverable from the working tree.

---

## 4. `public/` hygiene (brief §1.2 / §13.2 — confirmed, for later)
- Size **8.5 GB**, **4,293** files. Mostly gitignored working assets (only **232** `public/` files tracked), so a fresh clone stays small.
- **2,937** backup files ending in `~` (gitignored).
- **30** files > 20 MB.
- These feed the later non-destructive **asset-inventory/manifest** work (§13.2) — deferred until after recovery; **no deletions** without a manifest + approval.

---

## 5. Was genuine uncommitted work lost?
Cannot be determined from the current state: the working copies are already all-zeros, and the Git index blobs needed to compare are among the corrupt objects. Two possibilities:
- The 19 files matched their committed versions and were merely zeroed (⇒ **nothing lost**, restore from remote); or
- They held genuine unsaved edits that the corruption destroyed (⇒ recoverable **only** from an OS/editor backup, not from disk).

**Before any overwrite/restore, it is worth checking Time Machine or your editor's local history** for these 19 paths, in case they held unsaved work.

---

## 6. Recovery options (require your approval)

**Option A — Fresh clone + copy local assets (recommended).** Clone `origin` into a new directory (pristine git, clean versions of all 19 files at `8fee61b`), then copy the intact gitignored assets (`public/` image dirs, `.env*`, `.blob-manifest.json`) and the brief from this directory into the clone; verify typecheck/build; continue the brief there. Leaves the corrupted directory 100% untouched for forensics. Needs GitHub auth for the private repo.

**Option B — In-place restore of the 19 files from origin.** Keeps the 8.5 GB of assets where they are; restores only the destroyed files from the remote. Downside: operates on and leaves behind the corrupt object store (399 bad objects) — Git stays fragile and future `gc`/pack operations will fail until the store is rebuilt.

**Option C — Forensic recovery first.** Pause and recover the 19 files from Time Machine / editor local history before anything is overwritten, in case they contained unsaved work. Can precede A or B.

Not recommended: attempting in-place object repair without a known-good backup.

---

## 7. Phased plan (mapped to the brief) — gated on recovery
Phase 0 preflight ran and **hit the gate**; Phases 1–5 are blocked until the working copy is restored. Mapping for when work resumes:
- **Phase 1 Foundations** → brief §4 (routing/nav), §10.1 (typography), §1.3/§3 (central verified-facts + launch-checklist model), §6.1 (case-study model), §12.3 (SEO helpers). *Note: `lib/content.ts`, `lib/seo.ts`, `lib/media.ts` — the natural homes for this — are among the destroyed files.*
- **Phase 2** → §5 homepage rebuild + one flagship case study (§6) + signature Fieldbook interaction (§2.3/§5.5).
- **Phase 3** → §4.3/§6.3 portfolio hub, §7 service pages, §8 About.
- **Phase 4** → §9 consultation/contact + delivery test, §12 local SEO, §12.7 journal, §12.4 structured data, §12.5 sitemap/redirects.
- **Phase 5** → §13 performance, §14 accessibility, §16 QA, §13.2 approved asset cleanup, §19 handoff.
