import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getImageDim } from "@/lib/image-dimensions";
import GalleryClient, { type GalleryPhoto } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery & Portfolio | Yardie — Greenville, NC",
  description:
    "Finished landscape, hardscape, masonry, lighting, and irrigation projects from Yardie across Greenville and Eastern North Carolina. Browse the portfolio.",
  path: "/gallery",
  keywords: [
    "landscape portfolio Greenville NC",
    "hardscape project gallery",
    "paver patio examples",
    "backyard design photos Eastern NC",
  ],
});

interface Photo {
  src: string;
  alt: string;
}

// Hand-curated gallery of finished work. Rules followed when picking:
//   1. NO duplicates — every src path appears once.
//   2. NO workers / crew / install-in-progress shots.
//   3. NO 3D renderings.
//   4. NO subpar / out-of-context / mislabeled photos.
//
// Pulls from the flat /public/projects/{category}/ structure directly
// rather than the projectPhotos namespace (which still includes some
// progress and process shots that don't belong in a gallery).
const curated: Photo[] = [
  // ─── Outdoor Kitchens ───────────────────────────────────────
  { src: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg",   alt: "Built-in stainless grill, wine fridge, and stone-clad cabinetry under a covered patio." },
  { src: "/projects/outdoor-kitchens/outdoor-kitchen-stone-veneer-01.jpg",       alt: "Outdoor kitchen with stone-veneer base, built-in grill, and stainless cabinet doors." },
  { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-grill-bar-01.jpg",  alt: "Covered outdoor kitchen with built-in grill, bar seating, and travertine floor." },
  { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-wood-columns-01.jpg", alt: "Covered outdoor kitchen with wood columns and integrated counter run." },
  { src: "/projects/outdoor-kitchens/covered-patio-wicker-seating-01.jpg",       alt: "Covered patio with wicker seating." },
  { src: "/projects/outdoor-kitchens/covered-patio-wood-ceiling-fan-01.jpg",     alt: "Covered patio with wood ceiling and ceiling fan." },

  // ─── Pools & Water ──────────────────────────────────────────
  { src: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg",      alt: "Freeform pool with stone fireplace and paver deck." },
  { src: "/projects/pools/rectangular-pool-travertine-deck-01.jpg",              alt: "Rectangular pool with travertine deck." },
  { src: "/projects/pools/rectangular-pool-brick-fireplace-01.jpg",              alt: "Rectangular pool with brick fireplace." },
  { src: "/projects/pools/freeform-pool-paver-coping-01.jpg",                    alt: "Freeform pool with paver coping detail." },
  { src: "/projects/pools/autumn-lakes-pool-deck-02.jpg",                        alt: "Stone pool deck with shaded lounge area." },
  { src: "/projects/pools/autumn-lakes-water-feature-03.jpg",                    alt: "Water feature integrated with stone hardscape." },
  { src: "/projects/pools/autumn-lakes-terrace-04.jpg",                          alt: "Terrace bordered by low planting." },
  { src: "/projects/pools/autumn-lakes-portrait-10.jpg",                         alt: "Autumn Lakes — portrait feature shot." },
  { src: "/projects/pools/poolside-arborvitae-river-rock-edge-01.jpg",           alt: "Poolside arborvitae screen with river-rock edge." },
  { src: "/projects/pools/rectangular-pool-deck-screened-porch-01.jpg",          alt: "Rectangular pool deck adjacent to a screened porch." },
  { src: "/projects/pools/rectangular-pool-pond-view-01.jpg",                    alt: "Rectangular pool with pond view." },
  { src: "/projects/pools/pool-spillway-stone-veneer-closeup-01.jpg",            alt: "Pool spillway with stone-veneer face — close detail." },
  { src: "/projects/pools/pool-three-spillways-stone-deck-01.jpg",               alt: "Pool with three stone spillways and deck." },
  { src: "/projects/pools/modern-pool-spillway-stone-veneer-01.jpg",             alt: "Modern pool with stone-veneer spillway." },
  { src: "/projects/pools/pool-twin-spillways-house-backdrop-01.jpg",            alt: "Pool with twin spillways and house backdrop." },
  { src: "/projects/pools/modern-farmhouse-pool-spa-rear-elevation-01.jpg",      alt: "Modern farmhouse rear elevation with pool and spa." },
  { src: "/projects/pools/modern-farmhouse-pool-front-symmetric-01.jpg",         alt: "Modern farmhouse front elevation with symmetric pool." },
  { src: "/projects/pools/modern-farmhouse-rear-pool-paver-walk-01.jpg",         alt: "Modern farmhouse rear with pool and paver walk." },
  { src: "/projects/pools/modern-farmhouse-rear-pool-retaining-walls-01.jpg",    alt: "Modern farmhouse rear with pool and retaining walls." },
  { src: "/projects/pools/white-farmhouse-pool-spillway-front-01.jpg",           alt: "White farmhouse front with pool and spillway." },
  { src: "/projects/pools/white-farmhouse-pool-spillway-elevation-01.jpg",       alt: "White farmhouse pool with stone spillway." },
  { src: "/projects/pools/brick-courtyard-pool-gate-view-01.jpg",                alt: "Brick courtyard pool — view through the gate." },
  { src: "/projects/pools/brick-fireplace-pool-twilight-01.jpg",                 alt: "Brick fireplace by pool at twilight." },
  { src: "/projects/pools/pool-deck-arborvitae-pond-view-01.jpg",                alt: "Pool deck with arborvitae and pond view." },
  { src: "/projects/pools/poolside-river-rock-border-pond-01.jpg",               alt: "Poolside with river-rock border and pond." },
  { src: "/projects/pools/small-rectangular-pool-wooded-01.jpg",                 alt: "Small rectangular pool in a wooded yard." },

  // ─── Masonry — fireplaces, firepits, columns, walls ─────────
  { src: "/projects/masonry/freestanding-brick-fireplace-01.jpg",                alt: "Freestanding brick fireplace with arched wood-storage alcoves." },
  { src: "/projects/masonry/herringbone-brick-fireplace-patio-lounge-01.jpg",    alt: "Hand-laid brick fireplace with white-cushion lounge on a herringbone brick patio." },
  { src: "/projects/masonry/brick-firepit-bench-rear-patio-01.jpg",              alt: "Brick firepit with built-in bench on a rear patio." },
  { src: "/projects/masonry/brick-firepit-bench-corner-rear-01.jpg",             alt: "Brick firepit with corner bench on a rear patio." },
  { src: "/projects/masonry/grass-paver-patio-firepit-adirondack-01.jpg",        alt: "Grass-paver patio with firepit and Adirondack chairs." },
  { src: "/projects/masonry/rear-patio-firepit-stone-veneer-01.jpg",             alt: "Rear-patio firepit with stone-veneer surround." },
  { src: "/projects/masonry/rear-patio-firepit-iron-fence-01.jpg",               alt: "Rear-patio firepit beside an iron fence." },
  { src: "/projects/masonry/stone-column-lantern-closeup-01.jpg",                alt: "Stone column with coach-style lantern — closeup detail." },
  { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",        alt: "Stone retaining wall with bluestone steps." },
  { src: "/projects/masonry/iron-fence-stone-columns-paver-patio-01.jpg",        alt: "Iron fence between stone columns on a paver patio." },
  { src: "/projects/masonry/landscape-entry-pillars-paver-walk-01.jpg",          alt: "Stone entry pillars with paver walkway." },
  { src: "/projects/masonry/pond-dock-stone-pillars-flagstone-01.jpg",           alt: "Pond dock with stone pillars and flagstone." },
  { src: "/projects/masonry/pond-dock-flagstone-walkway-01.jpg",                 alt: "Pond dock with flagstone walkway." },
  { src: "/projects/masonry/pond-dock-stone-pillars-front-view-01.jpg",          alt: "Pond dock — stone pillars front view." },
  { src: "/projects/masonry/pond-dock-flagstone-pillars-front-01.jpg",           alt: "Pond dock with flagstone and pillars." },
  { src: "/projects/masonry/pond-dock-twin-lantern-pillars-01.jpg",              alt: "Pond dock with twin lantern pillars." },
  { src: "/projects/masonry/flagstone-walkway-stone-pillars-yard-01.jpg",        alt: "Flagstone walkway between stone pillars in a yard." },
  { src: "/projects/masonry/holton-stone-detail-05.jpg",                         alt: "Stone-cap detail along a finished walk." },
  { src: "/projects/masonry/holton-step-detail-06.jpg",                          alt: "Stone steps integrated with brick walkway." },
  { src: "/projects/masonry/may-blvd-stone-detail-07.jpg",                       alt: "Hand-laid stone detail with tight jointing." },
  { src: "/projects/masonry/williamsburg-106-columns-03.jpg",                    alt: "Lighted brick columns at the entry of a residential property." },
  { src: "/projects/masonry/williamsburg-109-seating-wall-04.jpg",               alt: "Detail of a stone seating wall framing a finished terrace." },
  { src: "/projects/masonry/white-brick-rear-firepit-pergola-01.jpg",            alt: "White-brick rear yard with firepit and pergola." },
  { src: "/projects/masonry/white-brick-rear-firepit-pergola-02.jpg",            alt: "White-brick rear yard with pergola — second angle." },
  { src: "/projects/masonry/white-brick-rear-firepit-pergola-03.jpg",            alt: "White-brick rear yard with pergola — third angle." },
  { src: "/projects/masonry/donald-drive-extra-06.jpg",                          alt: "Donald Drive — stone pillar at the property entry." },
  { src: "/projects/masonry/remington-extra-06.jpg",                             alt: "728 Remington — outdoor fireplace detail." },
  { src: "/projects/masonry/remington-extra-07.jpg",                             alt: "728 Remington — hardscape composition." },

  // ─── Hardscapes — patios, walks, drives ─────────────────────
  { src: "/projects/hardscapes/may-blvd-stepped-terrace-02.jpg",                 alt: "Stepped stone terrace with low seating wall." },
  { src: "/projects/hardscapes/tan-rear-elevation-brick-patio-01.jpg",           alt: "Tan-brick rear elevation with a brick paver patio." },
  { src: "/projects/hardscapes/brick-ranch-rear-patio-planting-bed-01.jpg",      alt: "Brick ranch rear patio with planting bed border." },
  { src: "/projects/hardscapes/rear-yard-arborvitae-screen-patio-01.jpg",        alt: "Rear-yard patio with arborvitae screen." },
  { src: "/projects/hardscapes/may-blvd-extra-31.jpg",                           alt: "Finished hardscape with planting bed." },
  { src: "/projects/hardscapes/williamsburg-106-walkway-02.jpg",                 alt: "Hand-laid brick walkway leading to a Southern home entry." },
  { src: "/projects/hardscapes/holton-front-walk-02.jpg",                        alt: "Hand-laid brick front walk with stone-cap detail." },
  { src: "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",        alt: "Herringbone paver walkway threaded between brick pillars." },
  { src: "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",            alt: "Colonial home with a brick paver driveway." },
  { src: "/projects/hardscapes/grass-paver-driveway-circle-01.jpg",              alt: "Grass-paver circular driveway." },
  { src: "/projects/hardscapes/grass-paver-driveway-front-yard-01.jpg",          alt: "Grass-paver driveway across a front yard." },
  { src: "/projects/hardscapes/gravel-driveway-formal-garden-01.jpg",            alt: "Gravel driveway through a formal garden." },
  { src: "/projects/hardscapes/brick-walkway-shed-lantern-01.jpg",               alt: "Brick walkway with shed lantern." },
  { src: "/projects/hardscapes/brick-back-steps-french-doors-01.jpg",            alt: "Brick back steps leading to french doors." },
  { src: "/projects/hardscapes/side-yard-paver-walkway-fenced-01.jpg",           alt: "Side-yard paver walkway with fence." },
  { src: "/projects/hardscapes/side-stepping-stone-walkway-pond-01.jpg",         alt: "Side stepping-stone walkway near a pond." },
  { src: "/projects/hardscapes/flagstone-stepping-stones-river-rock-01.jpg",     alt: "Flagstone stepping stones with river-rock edge." },
  { src: "/projects/hardscapes/flagstone-stepping-stones-iron-fence-01.jpg",     alt: "Flagstone stepping stones along an iron fence." },
  { src: "/projects/hardscapes/flagstone-steps-to-paver-patio-01.jpg",           alt: "Flagstone steps leading to a paver patio." },
  { src: "/projects/hardscapes/white-brick-side-paver-entry-01.jpg",             alt: "White-brick side entry with paver walkway." },
  { src: "/projects/hardscapes/white-brick-front-paver-walk-topiary-01.jpg",     alt: "White-brick front entry with paver walk and topiary." },
  { src: "/projects/hardscapes/brick-front-elevation-paver-walk-tulips-01.jpg",  alt: "Brick front elevation with paver walk and tulips." },
  { src: "/projects/hardscapes/castlebrook-walk-02.jpg",                         alt: "Castlebrook — front walkway detail." },
  { src: "/projects/hardscapes/autumn-lakes-stone-walk-08.jpg",                  alt: "Stone walkway threading through the garden." },
  { src: "/projects/hardscapes/may-blvd-paths-11.jpg",                           alt: "Stone paths threading through the rear garden." },
  { src: "/projects/hardscapes/donald-drive-extra-07.jpg",                       alt: "Donald Drive — finished driveway approach." },
  { src: "/projects/hardscapes/remington-extra-05.jpg",                          alt: "728 Remington — patio hardscape." },

  // ─── Landscapes — gardens, foundation beds, mature plantings ─
  { src: "/projects/landscapes/foundation-bed-japanese-maple-01.jpg",            alt: "Foundation bed featuring a specimen Japanese maple." },
  { src: "/projects/landscapes/autumn-lakes-planting-05.jpg",                    alt: "Layered planting against the architecture at Autumn Lakes." },
  { src: "/projects/landscapes/autumn-lakes-shaded-corner-07.jpg",               alt: "Shaded garden corner with established planting." },
  { src: "/projects/landscapes/autumn-lakes-overview-01.jpg",                    alt: "Autumn Lakes residence — overview at golden hour." },
  { src: "/projects/landscapes/autumn-lakes-detail-06.jpg",                      alt: "Autumn Lakes — material detail." },
  { src: "/projects/landscapes/autumn-lakes-finish-09.jpg",                      alt: "Autumn Lakes — finished view." },
  { src: "/projects/landscapes/foundation-bed-mulch-shrubs-side-01.jpg",         alt: "Side foundation bed with fresh mulch and healthy shrubs." },
  { src: "/projects/landscapes/front-foundation-bed-river-rock-edge-01.jpg",     alt: "Front foundation bed with river-rock edge." },
  { src: "/projects/landscapes/boxwood-foundation-bed-pond-view-01.jpg",         alt: "Boxwood foundation bed with pond view." },
  { src: "/projects/landscapes/front-corner-bed-lantern-japanese-maple-01.jpg",  alt: "Front corner bed with lantern and Japanese maple." },
  { src: "/projects/landscapes/side-foundation-bed-river-rock-edge-01.jpg",      alt: "Side foundation bed with river-rock edge." },
  { src: "/projects/landscapes/side-foundation-bed-pinestraw-01.jpg",            alt: "Side foundation bed with pine straw." },
  { src: "/projects/landscapes/front-foundation-topiary-shrubs-01.jpg",          alt: "Front foundation with topiary shrubs." },
  { src: "/projects/landscapes/holton-finished-bed-09.jpg",                      alt: "Finished planting bed in summer growth." },
  { src: "/projects/landscapes/holton-extra-11.jpg",                             alt: "Established planting under pine canopy." },
  { src: "/projects/landscapes/holton-extra-12.jpg",                             alt: "Pine-needle bed against the lawn edge." },
  { src: "/projects/landscapes/holton-extra-15.jpg",                             alt: "Front foundation planting from the walk." },
  { src: "/projects/landscapes/holton-extra-18.jpg",                             alt: "Finished landscape with mulched bed line." },
  { src: "/projects/landscapes/holton-extra-24.jpg",                             alt: "Mature canopy framing the property." },
  { src: "/projects/landscapes/holton-extra-31.jpg",                             alt: "Layered foundation planting." },
  { src: "/projects/landscapes/williamsburg-109-foundation-planting-01.jpg",     alt: "Layered foundation planting at the front of a Greenville home." },
  { src: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",             alt: "Rear-garden landscape with composed planting beds." },
  { src: "/projects/landscapes/williamsburg-109-canopy-06.jpg",                  alt: "Mature canopy trees framing the rear yard at golden hour." },
  { src: "/projects/landscapes/williamsburg-109-finish-07.jpg",                  alt: "Williamsburg — finished landscape after install." },
  { src: "/projects/landscapes/castlebrook-detail-03.jpg",                       alt: "Castlebrook — material detail." },
  { src: "/projects/landscapes/castlebrook-finish-04.jpg",                       alt: "Castlebrook — finished view." },
  { src: "/projects/landscapes/emma-cannon-detail-02.jpg",                       alt: "Emma Cannon — masonry detail at the entry." },
  { src: "/projects/landscapes/evans-photo-01.jpg",                              alt: "Evans residence — finished view." },
  { src: "/projects/landscapes/may-blvd-overview-01.jpg",                        alt: "Composed rear yard with multi-level stone terrace." },
  { src: "/projects/landscapes/may-blvd-canopy-trees-08.jpg",                    alt: "Multi-level patio with crepe myrtle canopy." },
  { src: "/projects/landscapes/may-blvd-finished-view-12.jpg",                   alt: "May Blvd — finished property view at golden hour." },
  { src: "/projects/landscapes/may-blvd-extra-25.jpg",                           alt: "Finished patio with stone fireplace at golden hour." },
  { src: "/projects/landscapes/speight-seed-extra-07.jpg",                       alt: "Speight Seed Farm — stucco home with stone landscaping." },
  { src: "/projects/landscapes/speight-seed-extra-09.jpg",                       alt: "Speight Seed Farm — finished landscape view." },
  { src: "/projects/landscapes/speight-seed-extra-12.jpg",                       alt: "Speight Seed Farm — front elevation with planting." },
  { src: "/projects/landscapes/speight-seed-extra-14.jpg",                       alt: "Speight Seed Farm — finished view at golden hour." },
  { src: "/projects/landscapes/new-build-corner-shrub-bed-01.jpg",               alt: "New-build corner shrub bed." },
  { src: "/projects/landscapes/white-brick-side-foundation-hedge-01.jpg",        alt: "White-brick side elevation with formal hedge foundation bed." },
  { src: "/projects/landscapes/tan-brick-front-driveway-foundation-bed-01.jpg",  alt: "Tan-brick home — front driveway and foundation bed." },
  { src: "/projects/landscapes/tan-brick-side-foundation-bed-01.jpg",            alt: "Tan-brick home — side foundation bed." },

  // ─── Facades — front elevations of homes ────────────────────
  { src: "/projects/facades/williamsburg-106-front-elevation-01.jpg",            alt: "Southern brick home — front elevation with lighted entry columns." },
  { src: "/projects/facades/williamsburg-106-entry-04.jpg",                      alt: "Front entry composition with planting and brick column." },
  { src: "/projects/facades/williamsburg-106-detail-05.jpg",                     alt: "Detail of brick coursework and stone-cap finish." },
  { src: "/projects/facades/holton-front-elevation-03.jpg",                      alt: "Front elevation with composed foundation planting." },
  { src: "/projects/facades/brick-cape-cod-front-elevation-lawn-01.jpg",         alt: "Brick Cape Cod home — front elevation with lawn." },
  { src: "/projects/facades/brick-cape-cod-front-elevation-lawn-02.jpg",         alt: "Brick Cape Cod home — front elevation, alternate angle." },
  { src: "/projects/facades/brick-cottage-front-double-door-01.jpg",             alt: "Brick cottage front with double doors." },
  { src: "/projects/facades/brick-farmhouse-front-corner-elevation-01.jpg",      alt: "Brick farmhouse — front corner elevation." },
  { src: "/projects/facades/brick-front-corner-japanese-maple-01.jpg",           alt: "Brick front corner with Japanese maple." },
  { src: "/projects/facades/brick-home-arched-entry-front-elevation-01.jpg",     alt: "Brick home with arched entry — front elevation." },
  { src: "/projects/facades/brick-home-front-corner-elevation-01.jpg",           alt: "Brick home — front corner elevation." },
  { src: "/projects/facades/brick-home-side-elevation-young-tree-01.jpg",        alt: "Brick home side elevation with young tree." },
  { src: "/projects/facades/brick-ranch-front-fall-leaves-01.jpg",               alt: "Brick ranch front with fall leaves." },
  { src: "/projects/facades/brick-rear-elevation-screened-porch-01.jpg",         alt: "Brick rear elevation with screened porch." },
  { src: "/projects/facades/brick-side-elevation-shrub-bed-01.jpg",              alt: "Brick side elevation with shrub bed." },
  { src: "/projects/facades/white-brick-front-arched-entry-01.jpg",              alt: "White-brick home with arched entry and formal landscaping." },
  { src: "/projects/facades/white-brick-mansion-front-elevation-01.jpg",         alt: "White-brick Southern formal home — front elevation." },
  { src: "/projects/facades/white-brick-mansion-side-front-elevation-01.jpg",    alt: "White-brick Southern formal home — side-front elevation." },
  { src: "/projects/facades/white-cape-cod-front-elevation-flag-01.jpg",         alt: "White Cape Cod — front elevation with flagpole." },
  { src: "/projects/facades/white-cape-cod-front-fall-01.jpg",                   alt: "White Cape Cod in fall." },
  { src: "/projects/facades/white-cottage-flagstone-walkway-01.jpg",             alt: "White cottage with flagstone walkway." },
  { src: "/projects/facades/white-cottage-iron-fence-front-01.jpg",              alt: "White cottage with iron fence at the front." },
  { src: "/projects/facades/white-painted-brick-side-elevation-01.jpg",          alt: "White-painted brick side elevation." },

  // ─── Lighting ───────────────────────────────────────────────
  { src: "/projects/lighting/williamsburg-106-twilight-06.jpg",                  alt: "Brick facade with column lighting." },
  { src: "/projects/lighting/may-blvd-evening-light-10.jpg",                     alt: "Architectural lighting on a stone column with a coach lantern." },

  // ─── Porches ────────────────────────────────────────────────
  { src: "/projects/porches/screened-porch-rear-elevation-01.jpg",               alt: "Screened porch — rear elevation." },
  { src: "/projects/porches/screened-porch-stone-foundation-01.jpg",             alt: "Screened porch with stone foundation." },
  { src: "/projects/porches/screened-porch-side-foundation-bed-01.jpg",          alt: "Screened porch with side foundation bed." },
  { src: "/projects/porches/screened-porch-shed-rear-elevation-01.jpg",          alt: "Screened porch and shed — rear elevation." },

  // ─── Fences ─────────────────────────────────────────────────
  { src: "/projects/fences/iron-fence-mulch-bed-rear-01.jpg",                    alt: "Iron fence with mulch bed in a rear yard." },
  { src: "/projects/fences/iron-fence-shrub-bed-curved-01.jpg",                  alt: "Iron fence with curved shrub bed." },
  { src: "/projects/fences/white-vinyl-fence-corner-residential-01.jpg",         alt: "White vinyl fence at a residential corner." },
  { src: "/projects/fences/white-vinyl-fence-side-yard-01.jpg",                  alt: "White vinyl fence in a side yard." },
];

// Belt-and-suspenders dedupe — guarantees no src appears twice even
// if the curated list above is edited in the future.
const seen = new Set<string>();
const galleryPhotos: Photo[] = curated.filter((p) => {
  if (seen.has(p.src)) return false;
  seen.add(p.src);
  return true;
});

// Mulberry32 — tiny deterministic PRNG so the shuffled order is the
// same on every render but feels "scattered" rather than sequential.
function shuffle<T>(arr: T[], seed = 0xBADC0DE): T[] {
  let s = seed >>> 0;
  const next = () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const shuffledGallery = shuffle(galleryPhotos);

// Resolve natural dimensions for every tile at module-load time so the
// client masonry can reserve the correct space and not stutter as
// images download. Cached per server process by getImageDim.
const galleryWithDims: GalleryPhoto[] = shuffledGallery.map((p) => {
  const { width, height } = getImageDim(p.src);
  return { ...p, width, height };
});

export default function GalleryPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1 · HERO — clean editorial header, no full-bleed photo
          ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-14 lg:-mt-[68px] bg-cream text-bark border-b border-border">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 pt-32 lg:pt-44 pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tabular-nums text-clay/70 tracking-[0.22em] mb-6 uppercase">
                Gallery &middot; Selected Work
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] text-bark leading-[0.98] tracking-tight max-w-[18ch] font-light">
                A gallery of{" "}
                <span className="italic text-moss">finished work.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] sm:text-[16px] text-earth leading-relaxed max-w-md">
                Photographs from projects we&rsquo;ve drawn, built, and continue to look after &mdash; across Greenville and the broader Eastern North Carolina region.
              </p>
              <p className="mt-5 font-mono text-[11px] tabular-nums text-clay/65 tracking-[0.22em] uppercase">
                {String(galleryWithDims.length).padStart(3, "0")} photographs &middot; click any to enlarge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2 · PUZZLE MOSAIC + LIGHTBOX — natural aspect ratios are
              reserved on the server (no first-paint stutter), and
              clicking any tile opens the lightbox.
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream text-bark">
        <div className="mx-auto max-w-[1500px] px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <GalleryClient photos={galleryWithDims} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3 · CTA — close the loop with a request-a-quote prompt
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt text-bark border-y border-border py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 text-center">
          <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5">
            See something you like?
          </p>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch] mx-auto">
            Let&rsquo;s draw something{" "}
            <span className="italic text-moss">like it for you.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] text-earth leading-relaxed max-w-xl mx-auto">
            Every project starts with a property visit at no cost. We walk the site, listen, and let you know whether we&rsquo;re the right studio.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors"
            >
              Request a Quote
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-9 py-4 border border-bark/30 text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bark hover:text-cream hover:border-bark transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
