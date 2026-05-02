// ============================================================
// Photo registry — keeps image paths and alt text co-located so
// pages don't have to remember filenames.
//
// All photo paths point at the FLAT curated set under /public/:
//   - /public/projects/    — every real project photo (~300 files)
//   - /public/renderings/  — every 3D model rendering
//   - /public/staff/       — every staff portrait
//   - /public/sketches/    — AI/Midjourney decorative sketches
//   - /public/blog/        — journal post cover images
//   - /public/photoshoot/  — studio photoshoot photos
//   - /public/brand/       — Yardie + partner logos
//   - /public/plans/       — SVG plan illustrations
//
// The previous per-project subfolder layout has been flattened.
// File names are now descriptive and locatable on disk without
// remembering project slugs.
// ============================================================

export interface Photo {
  src: string;
  alt: string;
}

// ── Projects — semantic photos by job ───────────────────────
//   Keys are kept stable so existing component imports keep working,
//   but every src now points at the new flat /projects/ tree.
export const projectPhotos = {
  // 106 Williamsburg — Southern brick + lighted columns + walkway
  williamsburg106: {
    front:    { src: "/projects/facades/williamsburg-106-front-elevation-01.jpg", alt: "Southern brick home — front elevation with lighted entry columns and walkway." },
    walkway:  { src: "/projects/hardscapes/williamsburg-106-walkway-02.jpg",         alt: "Hand-laid brick walkway leading to a Southern home entry." },
    columns:  { src: "/projects/masonry/williamsburg-106-columns-03.jpg",         alt: "Lighted brick columns at the entry of a residential property." },
    entry:    { src: "/projects/facades/williamsburg-106-entry-04.jpg",           alt: "Front entry composition with planting and brick column." },
    detail:   { src: "/projects/facades/williamsburg-106-detail-05.jpg",          alt: "Detail of brick coursework and stone-cap finish." },
    twilight: { src: "/projects/lighting/williamsburg-106-twilight-06.jpg",        alt: "Brick facade at twilight with column lighting." },
  },

  // 109 Williamsburg — rear-garden redesign
  williamsburg109: {
    foundation:  { src: "/projects/landscapes/williamsburg-109-foundation-planting-01.jpg", alt: "Layered foundation planting at the front of a Greenville home." },
    rearGarden:  { src: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",         alt: "Rear-garden landscape with composed planting beds." },
    patio:       { src: "/projects/hardscapes/williamsburg-109-patio-03.jpg",               alt: "Stone patio with built-in seating wall on the garden edge." },
    seatWall:    { src: "/projects/masonry/williamsburg-109-seating-wall-04.jpg",        alt: "Detail of a stone seating wall framing a finished terrace." },
    plantDetail: { src: "/projects/landscapes/williamsburg-109-planting-detail-05.jpg",     alt: "Detail of a planting bed against a stone retaining wall." },
    canopy:      { src: "/projects/landscapes/williamsburg-109-canopy-06.jpg",              alt: "Mature canopy trees framing the rear yard at golden hour." },
    finish:      { src: "/projects/landscapes/williamsburg-109-finish-07.jpg",              alt: "Finished landscape after install." },
  },

  // 6047 May Blvd — multi-level terrace + fireplace + grill
  mayBlvd: {
    overview:     { src: "/projects/landscapes/may-blvd-overview-01.jpg",         alt: "Composed rear yard with multi-level stone terrace." },
    stepped:      { src: "/projects/hardscapes/may-blvd-stepped-terrace-02.jpg",  alt: "Stepped stone terrace with low seating wall and fire feature." },
    fireplace:    { src: "/projects/masonry/may-blvd-fireplace-03.jpg",        alt: "Patio fireplace integrated into a hand-laid stone surround." },
    // NOTE: file is misnamed at the source — actually shows the front
    // yard mulch bed, not a grill area. Kept the key for legacy refs;
    // any "outdoor kitchen" usage should pull from photosByService["outdoor-kitchens"].
    grill:        { src: "/projects/outdoor-kitchens/may-blvd-grill-surround-04.jpg",   alt: "May Blvd — front yard with mulched bed and brick ranch home." },
    plantingBed:  { src: "/projects/landscapes/may-blvd-planting-bed-05.jpg",     alt: "Garden bed composed against the rear terrace." },
    seatWall:     { src: "/projects/landscapes/may-blvd-seat-wall-06.jpg",        alt: "Detail of a planting bed served by drip irrigation." },
    stoneDetail:  { src: "/projects/masonry/may-blvd-stone-detail-07.jpg",     alt: "Hand-laid stone detail with tight jointing." },
    canopyTrees:  { src: "/projects/landscapes/may-blvd-canopy-trees-08.jpg",     alt: "Multi-level patio with crepe myrtle canopy." },
    rearLawn:     { src: "/projects/landscapes/may-blvd-rear-lawn-09.jpg",        alt: "Drip-zoned planting bed with mature shrub layer." },
    eveningLight: { src: "/projects/lighting/may-blvd-evening-light-10.jpg",    alt: "Architectural lighting on a stone seating wall at dusk." },
    paths:        { src: "/projects/hardscapes/may-blvd-paths-11.jpg",            alt: "Stone paths threading through the rear garden." },
    finished:     { src: "/projects/landscapes/may-blvd-finished-view-12.jpg",    alt: "Finished property view at golden hour." },
    finishedPatio:    { src: "/projects/landscapes/may-blvd-extra-25.jpg", alt: "Finished patio with stone fireplace at golden hour." },
    chimneyDetail:    { src: "/projects/landscapes/may-blvd-extra-28.jpg", alt: "Newly-laid sod with planting against tree line." },
    afterHardscape:   { src: "/projects/hardscapes/may-blvd-extra-31.jpg", alt: "Finished hardscape with planting bed." },
    closingView:      { src: "/projects/landscapes/may-blvd-extra-34.jpg", alt: "Final property view." },
  },

  // Holton — full property build
  holton: {
    overview:    { src: "/projects/landscapes/holton-overview-01.jpg",       alt: "Holton residence — overall property view." },
    frontWalk:   { src: "/projects/hardscapes/holton-front-walk-02.jpg",     alt: "Hand-laid brick walkway with stone-cap detail." },
    elevation:   { src: "/projects/facades/holton-front-elevation-03.jpg", alt: "Front elevation with composed foundation planting." },
    sideBed:     { src: "/projects/landscapes/holton-side-bed-04.jpg",       alt: "Side garden bed against mature lawn edge." },
    stoneDetail: { src: "/projects/masonry/holton-stone-detail-05.jpg",   alt: "Stone-cap detail along a finished walk." },
    stepDetail:  { src: "/projects/masonry/holton-step-detail-06.jpg",    alt: "Stone steps integrated with brick walkway." },
    rearYard:    { src: "/projects/landscapes/holton-rear-yard-07.jpg",      alt: "Rear yard with layered planting and mature canopy." },
    planting:    { src: "/projects/landscapes/holton-planting-08.jpg",       alt: "Planting bed composed for color and structure." },
    finishedBed: { src: "/projects/landscapes/holton-finished-bed-09.jpg",   alt: "Finished planting bed in summer growth." },
    finish:      { src: "/projects/landscapes/holton-finish-10.jpg",         alt: "Holton residence — finished landscape." },
    extra11: { src: "/projects/landscapes/holton-extra-11.jpg", alt: "Established planting under pine canopy." },
    extra12: { src: "/projects/landscapes/holton-extra-12.jpg", alt: "Pine-needle bed against the lawn edge." },
    extra13: { src: "/projects/landscapes/holton-extra-13.jpg", alt: "Composed garden corner under canopy." },
    extra14: { src: "/projects/landscapes/holton-extra-14.jpg", alt: "Stone-edged planting bed in summer." },
    extra15: { src: "/projects/landscapes/holton-extra-15.jpg", alt: "Front foundation planting from the walk." },
    extra16: { src: "/projects/landscapes/holton-extra-16.jpg", alt: "Established perennial bed." },
    extra17: { src: "/projects/landscapes/holton-extra-17.jpg", alt: "Garden bed against mature shrubs." },
    extra18: { src: "/projects/landscapes/holton-extra-18.jpg", alt: "Finished landscape with mulched bed line." },
    extra19: { src: "/projects/landscapes/holton-extra-19.jpg", alt: "Layered planting against the architecture." },
    extra20: { src: "/projects/landscapes/holton-extra-20.jpg", alt: "Stone walk threading through the planting." },
    extra21: { src: "/projects/landscapes/holton-extra-21.jpg", alt: "Garden detail at golden hour." },
    extra22: { src: "/projects/landscapes/holton-extra-22.jpg", alt: "Finished planting bed against the lawn." },
    extra23: { src: "/projects/landscapes/holton-extra-23.jpg", alt: "Bed line with established perennials." },
    extra24: { src: "/projects/landscapes/holton-extra-24.jpg", alt: "Mature canopy framing the property." },
    extra25: { src: "/projects/landscapes/holton-extra-25.jpg", alt: "Garden corner at sunset." },
    extra27: { src: "/projects/landscapes/holton-extra-27.jpg", alt: "Established perennial bed under canopy." },
    extra28: { src: "/projects/landscapes/holton-extra-28.jpg", alt: "Finished landscape view." },
    extra29: { src: "/projects/landscapes/holton-extra-29.jpg", alt: "Pine-needle bed under mature trees." },
    extra30: { src: "/projects/landscapes/holton-extra-30.jpg", alt: "Crew laying brick pavers on a job site." },
    extra31: { src: "/projects/landscapes/holton-extra-31.jpg", alt: "Layered foundation planting." },
    extra32: { src: "/projects/landscapes/holton-extra-32.jpg", alt: "Finished bed under canopy." },
    extra33: { src: "/projects/landscapes/holton-extra-33.jpg", alt: "Garden corner at golden hour." },
    extra34: { src: "/projects/landscapes/holton-extra-34.jpg", alt: "Established planting in summer growth." },
    extra35: { src: "/projects/landscapes/holton-extra-35.jpg", alt: "Finished landscape at sunset." },
  },

  // Autumn Lakes — pool + planting
  autumnLakes: {
    overview:    { src: "/projects/landscapes/autumn-lakes-overview-01.jpg",     alt: "Autumn Lakes residence — overview at golden hour." },
    poolDeck:    { src: "/projects/pools/autumn-lakes-pool-deck-02.jpg",    alt: "Stone pool deck with shaded lounge area." },
    waterFeature:{ src: "/projects/pools/autumn-lakes-water-feature-03.jpg", alt: "Water feature integrated with stone hardscape." },
    terrace:     { src: "/projects/pools/autumn-lakes-terrace-04.jpg",      alt: "Terrace bordered by low planting." },
    planting:    { src: "/projects/landscapes/autumn-lakes-planting-05.jpg",     alt: "Layered planting against the architecture." },
    detail:      { src: "/projects/landscapes/autumn-lakes-detail-06.jpg",       alt: "Material detail." },
    shadedCorner:{ src: "/projects/landscapes/autumn-lakes-shaded-corner-07.jpg", alt: "Shaded garden corner under canopy trees." },
    stoneWalk:   { src: "/projects/hardscapes/autumn-lakes-stone-walk-08.jpg",   alt: "Stone walkway threading through the garden." },
    finish:      { src: "/projects/landscapes/autumn-lakes-finish-09.jpg",       alt: "Finished view." },
    portrait:    { src: "/projects/pools/autumn-lakes-portrait-10.jpg",     alt: "Portrait-orientation feature shot." },
  },

  castlebrook: {
    front:  { src: "/projects/landscapes/castlebrook-front-01.jpg",  alt: "Castlebrook — front elevation." },
    walk:   { src: "/projects/hardscapes/castlebrook-walk-02.jpg",   alt: "Castlebrook — front walkway detail." },
    detail: { src: "/projects/landscapes/castlebrook-detail-03.jpg", alt: "Castlebrook — material detail." },
    finish: { src: "/projects/landscapes/castlebrook-finish-04.jpg", alt: "Castlebrook — finished view." },
  },

  emmaCannon: {
    front:  { src: "/projects/landscapes/emma-cannon-front-01.jpg",  alt: "Emma Cannon residence — front facade." },
    detail: { src: "/projects/landscapes/emma-cannon-detail-02.jpg", alt: "Emma Cannon — masonry detail at the entry." },
  },

  allenDonald: {
    progress1: { src: "/projects/process/donald-drive-progress-01.jpg", alt: "Donald Drive — install in progress." },
    progress2: { src: "/projects/process/donald-drive-progress-02.jpg", alt: "Donald Drive — base prep stage." },
    progress3: { src: "/projects/process/donald-drive-progress-03.jpg", alt: "Donald Drive — masonry stage." },
    progress4: { src: "/projects/process/donald-drive-progress-04.jpg", alt: "Donald Drive — planting stage." },
    progress5: { src: "/projects/process/donald-drive-progress-05.jpg", alt: "Donald Drive — final detailing." },
    stonePillar:   { src: "/projects/masonry/donald-drive-extra-06.jpg", alt: "Donald Drive — stone pillar at the property entry." },
    driveway:      { src: "/projects/hardscapes/donald-drive-extra-07.jpg", alt: "Donald Drive — finished driveway approach." },
    lawnEdge:      { src: "/projects/landscapes/donald-drive-extra-08.jpg", alt: "Donald Drive — lawn edge against the planting bed." },
    finishedFront: { src: "/projects/landscapes/donald-drive-extra-09.jpg", alt: "Donald Drive — finished front yard composition." },
    closingDetail: { src: "/projects/landscapes/donald-drive-extra-10.jpg", alt: "Donald Drive — closing detail shot." },
  },

  speightSeed: {
    overview: { src: "/projects/process/speight-seed-overview-01.jpg", alt: "Speight Seed Farm Rd — site overview." },
    before1:  { src: "/projects/process/speight-seed-before-1-02.jpg", alt: "Speight Seed Farm Rd — site before install." },
    before2:  { src: "/projects/process/speight-seed-before-2-03.jpg", alt: "Speight Seed Farm Rd — alt angle." },
    before3:  { src: "/projects/process/speight-seed-before-3-04.jpg", alt: "Speight Seed Farm Rd — site before install." },
    before4:  { src: "/projects/process/speight-seed-before-4-05.jpg", alt: "Speight Seed Farm Rd — site before install." },
    before5:  { src: "/projects/process/speight-seed-before-5-06.jpg", alt: "Speight Seed Farm Rd — site before install." },
    stucco1:  { src: "/projects/landscapes/speight-seed-extra-07.jpg", alt: "Speight Seed Farm Rd — stucco home with stone landscaping." },
    stucco2:  { src: "/projects/landscapes/speight-seed-extra-08.jpg", alt: "Speight Seed Farm Rd — stone hardscape detail." },
    stucco3:  { src: "/projects/landscapes/speight-seed-extra-09.jpg", alt: "Speight Seed Farm Rd — finished landscape view." },
    stucco4:  { src: "/projects/landscapes/speight-seed-extra-10.jpg", alt: "Speight Seed Farm Rd — bedline against the architecture." },
    stucco5:  { src: "/projects/landscapes/speight-seed-extra-11.jpg", alt: "Speight Seed Farm Rd — stone pillar detail." },
    stucco6:  { src: "/projects/landscapes/speight-seed-extra-12.jpg", alt: "Speight Seed Farm Rd — front elevation with planting." },
    stucco7:  { src: "/projects/landscapes/speight-seed-extra-13.jpg", alt: "Speight Seed Farm Rd — garden corner under canopy." },
    stucco8:  { src: "/projects/landscapes/speight-seed-extra-14.jpg", alt: "Speight Seed Farm Rd — finished view at golden hour." },
    stucco9:  { src: "/projects/landscapes/speight-seed-extra-15.jpg", alt: "Speight Seed Farm Rd — landscape composition with mature canopy." },
    stucco10: { src: "/projects/landscapes/speight-seed-extra-16.jpg", alt: "Speight Seed Farm Rd — closing landscape view." },
  },

  remington: {
    progress1: { src: "/projects/process/remington-progress-01.jpg", alt: "728 Remington — install in progress." },
    progress2: { src: "/projects/process/remington-progress-02.jpg", alt: "728 Remington — install in progress." },
    progress3: { src: "/projects/process/remington-progress-03.jpg", alt: "728 Remington — install in progress." },
    progress4: { src: "/projects/process/remington-progress-04.jpg", alt: "728 Remington — install in progress." },
    patio:        { src: "/projects/hardscapes/remington-extra-05.jpg", alt: "728 Remington — patio hardscape." },
    fireplace:    { src: "/projects/masonry/remington-extra-06.jpg", alt: "728 Remington — outdoor fireplace detail." },
    hardscape:    { src: "/projects/masonry/remington-extra-07.jpg", alt: "728 Remington — hardscape composition." },
    closingShot:  { src: "/projects/landscapes/remington-extra-08.jpg", alt: "728 Remington — finished hardscape view." },
  },

  evans: {
    photo: { src: "/projects/landscapes/evans-photo-01.jpg", alt: "Evan's residence — finished view." },
  },

  // Yardie portfolio — mixed jobs from the legacy /Yardie folder.
  //
  // IMPORTANT: All of files 01-09 (property/detail/rear/bed/corner/
  // walk/canopy/stone/finished) plus 11-18 and 23-28 turned out to be
  // INTERIOR real-estate shots (bedrooms with teal carpet, bathrooms,
  // kitchens, etc.) of a single listing — completely off-brand for a
  // landscape company gallery. They've been deleted from disk and are
  // intentionally NOT registered. Do not re-add.
  //
  // Only the verified exterior shots remain below. The legacy keys
  // (canopy, finished, etc.) have been retired — downstream consumers
  // were repointed at differentJob / exteriorRanch* / other projects.
  yardiePortfolio: {
    differentJob:   { src: "/projects/landscapes/yardie-portfolio-different-job-10.jpg", alt: "Eastern NC residence — brick ranch home with mature canopy." },
    exteriorRanch1: { src: "/projects/landscapes/yardie-portfolio-extra-19.jpg",         alt: "Eastern NC residence — rear elevation of stucco home with composed lawn." },
    exteriorRanch2: { src: "/projects/landscapes/yardie-portfolio-extra-20.jpg",         alt: "Eastern NC residence — full rear elevation with mature canopy backdrop." },
    exteriorRanch3: { src: "/projects/landscapes/yardie-portfolio-extra-21.jpg",         alt: "Eastern NC residence — modern stucco home with circular drive." },
    exteriorRanch4: { src: "/projects/landscapes/yardie-portfolio-extra-22.jpg",         alt: "Eastern NC residence — front elevation with mature lawn." },
  },
} as const;

// ── Loose / standalone project photos that don't belong to a job ─
//    These are the renamed DSC*/IMG*/File_* root files. Grouped by
//    visual theme so pages can pull them by category.
export const loosePhotos = {
  // White-brick / Southern formal homes
  whiteBrickMansionFront:    { src: "/projects/facades/white-brick-mansion-front-elevation-01.jpg",     alt: "White-brick Southern formal home — front elevation." },
  whiteBrickMansionSide:     { src: "/projects/facades/white-brick-mansion-side-front-elevation-01.jpg", alt: "White-brick Southern formal home — side-front elevation." },
  whiteBrickArchedEntry:     { src: "/projects/facades/white-brick-front-arched-entry-01.jpg",          alt: "White-brick home with arched entry and formal landscaping." },
  whiteBrickPaverEntry:      { src: "/projects/hardscapes/white-brick-side-paver-entry-01.jpg",            alt: "White-brick side entry with paver walkway." },
  whiteBrickFrontTopiary:    { src: "/projects/hardscapes/white-brick-front-paver-walk-topiary-01.jpg",    alt: "White-brick front entry with paver walk and topiary." },
  whiteBrickSideHedge:       { src: "/projects/landscapes/white-brick-side-foundation-hedge-01.jpg",       alt: "White-brick side elevation with formal hedge foundation bed." },
  whiteBrickRearFirepit:     { src: "/projects/masonry/white-brick-rear-elevation-firepit-bench-01.jpg", alt: "White-brick rear elevation with firepit and bench." },
  whiteBrickRearPergola1:    { src: "/projects/masonry/white-brick-rear-firepit-pergola-01.jpg",        alt: "White-brick rear yard with firepit and pergola." },
  whiteBrickRearPergola2:    { src: "/projects/masonry/white-brick-rear-firepit-pergola-02.jpg",        alt: "White-brick rear yard with firepit and pergola — angle 2." },
  whiteBrickRearPergola3:    { src: "/projects/masonry/white-brick-rear-firepit-pergola-03.jpg",        alt: "White-brick rear yard with firepit and pergola — angle 3." },

  // Modern-farmhouse pool series
  modernFarmhouseRearPool:   { src: "/projects/pools/modern-farmhouse-pool-spa-rear-elevation-01.jpg", alt: "Modern farmhouse rear elevation with pool and spa." },
  modernFarmhousePoolFront:  { src: "/projects/pools/modern-farmhouse-pool-front-symmetric-01.jpg",   alt: "Modern farmhouse front elevation with symmetric pool." },
  modernFarmhouseRearWalk:   { src: "/projects/pools/modern-farmhouse-rear-pool-paver-walk-01.jpg",   alt: "Modern farmhouse rear with pool and paver walk." },
  modernFarmhouseRearWalls:  { src: "/projects/pools/modern-farmhouse-rear-pool-retaining-walls-01.jpg", alt: "Modern farmhouse rear with pool and retaining walls." },
  whiteFarmhousePoolFront:   { src: "/projects/pools/white-farmhouse-pool-spillway-front-01.jpg",     alt: "White farmhouse front with pool and spillway." },
  whiteFarmhousePoolElev:    { src: "/projects/pools/white-farmhouse-pool-spillway-elevation-01.jpg", alt: "White farmhouse pool with stone spillway." },
  whiteFarmhouseFrontPaver:  { src: "/projects/hardscapes/white-farmhouse-front-elevation-paver-walk-01.jpg", alt: "White farmhouse front with paver walkway." },

  // Pool spillway series
  poolSpillwayCloseup:       { src: "/projects/pools/pool-spillway-stone-veneer-closeup-01.jpg",      alt: "Pool spillway with stone veneer — close detail." },
  poolThreeSpillways:        { src: "/projects/pools/pool-three-spillways-stone-deck-01.jpg",         alt: "Pool with three stone spillways and deck." },
  modernPoolSpillway:        { src: "/projects/pools/modern-pool-spillway-stone-veneer-01.jpg",       alt: "Modern pool with spillway and stone veneer." },
  poolTwinSpillways:         { src: "/projects/pools/pool-twin-spillways-house-backdrop-01.jpg",      alt: "Pool with twin spillways and house backdrop." },

  // Pond-dock & flagstone series
  pondDockStonePillars:      { src: "/projects/masonry/pond-dock-stone-pillars-flagstone-01.jpg",       alt: "Pond dock with stone pillars and flagstone." },
  pondDockFlagstoneWalk:     { src: "/projects/masonry/pond-dock-flagstone-walkway-01.jpg",             alt: "Pond dock with flagstone walkway." },
  pondDockPillarsFront:      { src: "/projects/masonry/pond-dock-stone-pillars-front-view-01.jpg",      alt: "Pond dock — stone pillars front view." },
  pondDockFlagstonePillars:  { src: "/projects/masonry/pond-dock-flagstone-pillars-front-01.jpg",       alt: "Pond dock with flagstone and pillars." },
  pondDockTwinLanterns:      { src: "/projects/masonry/pond-dock-twin-lantern-pillars-01.jpg",          alt: "Pond dock with twin lantern pillars." },
  flagstoneWalkPillars:      { src: "/projects/masonry/flagstone-walkway-stone-pillars-yard-01.jpg",    alt: "Flagstone walkway between stone pillars in a yard." },
  pondDockSide:              { src: "/projects/masonry/pond-dock-stone-pillars-side-view-01.jpg",       alt: "Pond dock — side view of stone pillars." },
  pondDockRear:              { src: "/projects/masonry/pond-dock-flagstone-pillars-rear-01.jpg",        alt: "Pond dock — flagstone and pillars from the rear." },
  flagstonePondOverlook:     { src: "/projects/hardscapes/flagstone-pavers-pond-overlook-01.jpg",          alt: "Flagstone pavers overlooking a pond." },
  flagstoneSteppingPond:     { src: "/projects/hardscapes/flagstone-stepping-stones-river-rock-01.jpg",    alt: "Flagstone stepping stones with river rock edge." },
  flagstoneStepsToPaver:     { src: "/projects/hardscapes/flagstone-steps-to-paver-patio-01.jpg",          alt: "Flagstone steps leading to a paver patio." },
  flagstoneIronFence:        { src: "/projects/hardscapes/flagstone-stepping-stones-iron-fence-01.jpg",    alt: "Flagstone stepping stones along an iron fence." },

  // Brick-fireplace & firepit series
  brickFireplacePool:        { src: "/projects/pools/brick-fireplace-pool-twilight-01.jpg",           alt: "Brick fireplace by pool at twilight." },
  freestandingBrickFire:     { src: "/projects/masonry/freestanding-brick-fireplace-01.jpg",            alt: "Freestanding brick fireplace in a rear yard." },
  herringboneBrickFire:      { src: "/projects/masonry/herringbone-brick-fireplace-patio-lounge-01.jpg", alt: "Herringbone brick fireplace and patio lounge." },
  rectPoolBrickFire:         { src: "/projects/pools/rectangular-pool-brick-fireplace-01.jpg",        alt: "Rectangular pool with brick fireplace." },
  freeformPoolStoneFire:     { src: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg", alt: "Freeform pool with stone fireplace and paver deck." },
  tallStoneFire:             { src: "/projects/masonry/tall-stone-fireplace-paver-patio-01.jpg",        alt: "Tall stone fireplace on a paver patio." },
  rearFirepitStone:          { src: "/projects/masonry/rear-patio-firepit-stone-veneer-01.jpg",         alt: "Rear patio with firepit and stone veneer." },
  rearFirepitIron:           { src: "/projects/masonry/rear-patio-firepit-iron-fence-01.jpg",           alt: "Rear patio firepit beside an iron fence." },
  brickFirepitBench:         { src: "/projects/masonry/brick-firepit-bench-rear-patio-01.jpg",          alt: "Brick firepit with built-in bench on a rear patio." },
  brickFirepitCorner:        { src: "/projects/masonry/brick-firepit-bench-corner-rear-01.jpg",         alt: "Corner brick firepit with bench on a rear patio." },
  grassPaverFirepit:         { src: "/projects/masonry/grass-paver-patio-firepit-adirondack-01.jpg",    alt: "Grass-paver patio with firepit and Adirondack chairs." },

  // Outdoor kitchens
  outdoorKitchenGrill:       { src: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg",        alt: "Outdoor kitchen with built-in grill on a stone base." },
  outdoorKitchenStoneVeneer: { src: "/projects/outdoor-kitchens/outdoor-kitchen-stone-veneer-01.jpg",            alt: "Outdoor kitchen clad in stone veneer." },
  coveredKitchenWoodCols:    { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-wood-columns-01.jpg",    alt: "Covered outdoor kitchen with wood columns." },
  coveredKitchenGrillBar:    { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-grill-bar-01.jpg",       alt: "Covered outdoor kitchen with grill and bar." },
  coveredPatioWicker:        { src: "/projects/outdoor-kitchens/covered-patio-wicker-seating-01.jpg",            alt: "Covered patio with wicker seating." },
  coveredPatioWoodFan:       { src: "/projects/outdoor-kitchens/covered-patio-wood-ceiling-fan-01.jpg",          alt: "Covered patio with wood ceiling and ceiling fan." },

  // Brick-front facades
  brickRanchFall:            { src: "/projects/facades/brick-ranch-front-fall-leaves-01.jpg",           alt: "Brick ranch front with fall leaves." },
  brickRanchMulchBed:        { src: "/projects/facades/brick-ranch-with-fresh-mulch-bed-01.jpg",        alt: "Brick ranch with fresh mulch bed." },
  brickHomeArched:           { src: "/projects/facades/brick-home-arched-entry-front-elevation-01.jpg", alt: "Brick home with arched entry — front elevation." },
  brickHomeFrontCorner:      { src: "/projects/facades/brick-home-front-corner-elevation-01.jpg",       alt: "Brick home — front corner elevation." },
  brickHomeSideTree:         { src: "/projects/facades/brick-home-side-elevation-young-tree-01.jpg",    alt: "Brick home side elevation with young tree." },
  brickCapeCodLawn:          { src: "/projects/facades/brick-cape-cod-front-elevation-lawn-01.jpg",     alt: "Brick Cape Cod home — front elevation with lawn." },
  brickCapeCodLawn2:         { src: "/projects/facades/brick-cape-cod-front-elevation-lawn-02.jpg",     alt: "Brick Cape Cod home — front elevation with lawn (alt)." },
  brickSideShrubBed:         { src: "/projects/facades/brick-side-elevation-shrub-bed-01.jpg",          alt: "Brick side elevation with shrub bed." },
  brickRearScreenedPorch:    { src: "/projects/facades/brick-rear-elevation-screened-porch-01.jpg",     alt: "Brick rear elevation with screened porch." },
  brickRearPlantingBed:      { src: "/projects/hardscapes/brick-ranch-rear-patio-planting-bed-01.jpg",     alt: "Brick ranch rear patio with planting bed." },
  brickWalkwayShed:          { src: "/projects/hardscapes/brick-walkway-shed-lantern-01.jpg",              alt: "Brick walkway with shed and lantern." },
  brickCottageDoubleDoor:    { src: "/projects/facades/brick-cottage-front-double-door-01.jpg",         alt: "Brick cottage front with double doors." },
  brickBackSteps:            { src: "/projects/hardscapes/brick-back-steps-french-doors-01.jpg",          alt: "Brick back steps leading to french doors." },
  brickFrontTulips:          { src: "/projects/hardscapes/brick-front-elevation-paver-walk-tulips-01.jpg", alt: "Brick front elevation with paver walk and tulips." },
  brickFrontMaple:           { src: "/projects/facades/brick-front-corner-japanese-maple-01.jpg",      alt: "Brick front corner with Japanese maple." },
  brickFarmhouseFrontCorner: { src: "/projects/facades/brick-farmhouse-front-corner-elevation-01.jpg", alt: "Brick farmhouse — front corner elevation." },
  herringbonePaverPillars:   { src: "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",      alt: "Herringbone paver walkway between brick pillars." },
  tudorPaverWalk:            { src: "/projects/hardscapes/tudor-front-elevation-paver-walk-01.jpg",       alt: "Tudor home front elevation with paver walkway." },
  colonialPaverDriveway:     { src: "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",          alt: "Colonial home with paver driveway." },
  gravelDriveFormalGarden:   { src: "/projects/hardscapes/gravel-driveway-formal-garden-01.jpg",          alt: "Gravel driveway through a formal garden." },

  // White cottages / Cape Cods
  whiteCottageFront:         { src: "/projects/facades/white-cottage-front-foundation-bed-01.jpg",     alt: "White cottage with front foundation bed." },
  whiteCottageFlagstone:     { src: "/projects/facades/white-cottage-flagstone-walkway-01.jpg",        alt: "White cottage with flagstone walkway." },
  whiteCottageIronFence:     { src: "/projects/facades/white-cottage-iron-fence-front-01.jpg",         alt: "White cottage with iron fence at the front." },
  whiteCapeCodFall:          { src: "/projects/facades/white-cape-cod-front-fall-01.jpg",              alt: "White Cape Cod in fall." },
  whiteCapeCodFlag:          { src: "/projects/facades/white-cape-cod-front-elevation-flag-01.jpg",    alt: "White Cape Cod — front elevation with flagpole." },
  manicuredFlagpole:         { src: "/projects/landscapes/manicured-shrub-fall-flagpole-01.jpg",          alt: "Manicured shrub bed with flagpole in fall." },
  whitePaintedSide:          { src: "/projects/facades/white-painted-brick-side-elevation-01.jpg",     alt: "White-painted brick side elevation." },

  // Tan-brick / mid-Southern series
  tanBrickFrontDriveway:     { src: "/projects/landscapes/tan-brick-front-driveway-foundation-bed-01.jpg", alt: "Tan-brick home — front driveway and foundation bed." },
  tanBrickSideBed:           { src: "/projects/landscapes/tan-brick-side-foundation-bed-01.jpg",          alt: "Tan-brick home — side foundation bed." },
  tanRearBrickPatio:         { src: "/projects/hardscapes/tan-rear-elevation-brick-patio-01.jpg",         alt: "Tan rear elevation with brick patio." },

  // Stone-column / pillar series
  stoneColumnMailbox:        { src: "/projects/masonry/stone-column-mailbox-lantern-01.jpg",            alt: "Stone column mailbox with lantern." },
  stoneColumnLantern:        { src: "/projects/masonry/stone-column-lantern-closeup-01.jpg",            alt: "Stone column lantern — closeup." },
  stoneRetainingBluestone:   { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",    alt: "Stone retaining wall with bluestone steps." },
  ironFenceStoneColumns:     { src: "/projects/masonry/iron-fence-stone-columns-paver-patio-01.jpg",    alt: "Iron fence between stone columns on a paver patio." },
  landscapeEntryPillars:     { src: "/projects/masonry/landscape-entry-pillars-paver-walk-01.jpg",      alt: "Landscape entry with stone pillars and paver walkway." },

  // White-vinyl-fence series
  whiteVinylCornerHouse:     { src: "/projects/fences/white-vinyl-fence-corner-residential-01.jpg",   alt: "White vinyl fence at a residential corner." },
  whiteVinylRearElev:        { src: "/projects/fences/white-vinyl-fence-rear-elevation-01.jpg",       alt: "White vinyl fence at a rear elevation." },
  whiteVinylCornerTan:       { src: "/projects/fences/white-vinyl-fence-corner-tan-house-01.jpg",     alt: "White vinyl fence at corner of a tan-brick house." },
  whiteVinylRoadside:        { src: "/projects/fences/white-vinyl-fence-roadside-01.jpg",             alt: "White vinyl fence at the roadside." },
  whiteVinylSideYard:        { src: "/projects/fences/white-vinyl-fence-side-yard-01.jpg",            alt: "White vinyl fence in a side yard." },

  // Iron-fence / shrub-bed series
  ironFenceMulchBed:         { src: "/projects/fences/iron-fence-mulch-bed-rear-01.jpg",              alt: "Iron fence with mulch bed in a rear yard." },
  ironFenceShrubBed:         { src: "/projects/fences/iron-fence-shrub-bed-curved-01.jpg",            alt: "Iron fence with curved shrub bed." },

  // Foundation-bed / planting series
  fdnBedRiverRock:           { src: "/projects/landscapes/front-foundation-bed-river-rock-edge-01.jpg",   alt: "Front foundation bed with river rock edge." },
  fdnBedJapaneseMaple:       { src: "/projects/landscapes/foundation-bed-japanese-maple-01.jpg",          alt: "Foundation bed with Japanese maple." },
  fdnBedBoxwoodPond:         { src: "/projects/landscapes/boxwood-foundation-bed-pond-view-01.jpg",       alt: "Boxwood foundation bed with pond view." },
  fdnCornerLantern:          { src: "/projects/landscapes/front-corner-bed-lantern-japanese-maple-01.jpg", alt: "Front corner bed with lantern and Japanese maple." },
  fdnSideRiverRock:          { src: "/projects/landscapes/side-foundation-bed-river-rock-edge-01.jpg",    alt: "Side foundation bed with river rock edge." },
  fdnFrontTopiary:           { src: "/projects/landscapes/front-foundation-topiary-shrubs-01.jpg",        alt: "Front foundation with topiary shrubs." },
  fdnBedMulchSide:           { src: "/projects/landscapes/foundation-bed-mulch-shrubs-side-01.jpg",       alt: "Side foundation bed with fresh mulch and shrubs." },
  fdnBedPineStraw:           { src: "/projects/landscapes/side-foundation-bed-pinestraw-01.jpg",          alt: "Side foundation bed with pine straw." },

  // Driveways
  grassPaverCircle:          { src: "/projects/hardscapes/grass-paver-driveway-circle-01.jpg",            alt: "Grass-paver circular driveway." },
  grassPaverFrontYard:       { src: "/projects/hardscapes/grass-paver-driveway-front-yard-01.jpg",        alt: "Grass-paver driveway across a front yard." },

  // Walkways
  sideSteppingPond:          { src: "/projects/hardscapes/side-stepping-stone-walkway-pond-01.jpg",       alt: "Side stepping-stone walkway near a pond." },
  sideYardPaverFenced:       { src: "/projects/hardscapes/side-yard-paver-walkway-fenced-01.jpg",         alt: "Side-yard paver walkway with fence." },
  smallPaverFrenchDoors:     { src: "/projects/pools/small-paver-patio-french-doors-01.jpg",         alt: "Small paver patio outside french doors." },
  smallPaverSideYard:        { src: "/projects/pools/small-paver-patio-side-yard-01.jpg",            alt: "Small paver patio in a side yard." },

  // Pool series
  rectPoolPondView:          { src: "/projects/pools/rectangular-pool-pond-view-01.jpg",             alt: "Rectangular pool with pond view." },
  poolsideRiverRock:         { src: "/projects/pools/poolside-river-rock-border-pond-01.jpg",        alt: "Poolside with river-rock border and pond." },
  poolsideArborvitae:        { src: "/projects/pools/poolside-arborvitae-river-rock-edge-01.jpg",    alt: "Poolside arborvitae screen with river-rock edge." },
  poolDeckArborvitae:        { src: "/projects/pools/pool-deck-arborvitae-pond-view-01.jpg",         alt: "Pool deck with arborvitae and pond view." },
  freeformPoolPaver:         { src: "/projects/pools/freeform-pool-paver-coping-01.jpg",             alt: "Freeform pool with paver coping." },
  brickCourtyardPool:        { src: "/projects/pools/brick-courtyard-pool-gate-view-01.jpg",         alt: "Brick courtyard pool — view through the gate." },
  smallRectPoolWooded:       { src: "/projects/pools/small-rectangular-pool-wooded-01.jpg",          alt: "Small rectangular pool in a wooded yard." },
  rectPoolDeckPorch:         { src: "/projects/pools/rectangular-pool-deck-screened-porch-01.jpg",   alt: "Rectangular pool deck adjacent to a screened porch." },
  rectPoolTravertine:        { src: "/projects/pools/rectangular-pool-travertine-deck-01.jpg",       alt: "Rectangular pool with travertine deck." },

  // Screened-porch series
  screenedPorchRear:         { src: "/projects/porches/screened-porch-rear-elevation-01.jpg",          alt: "Screened porch — rear elevation." },
  screenedPorchStone:        { src: "/projects/porches/screened-porch-stone-foundation-01.jpg",        alt: "Screened porch with stone foundation." },
  screenedPorchSideBed:      { src: "/projects/porches/screened-porch-side-foundation-bed-01.jpg",     alt: "Screened porch with side foundation bed." },
  screenedPorchShed:         { src: "/projects/porches/screened-porch-shed-rear-elevation-01.jpg",     alt: "Screened porch and shed — rear elevation." },

  // Process / install in progress (lower priority for hero use)
  crewInstallShrubs:         { src: "/projects/process/crew-installing-shrubs-01.jpg",                 alt: "Crew installing shrubs on a front yard." },
  crewCuttingPavers:         { src: "/projects/process/crew-cutting-pavers-stihl-saw-01.jpg",          alt: "Crew cutting pavers with a Stihl saw." },
  crewLayingPaversPatio:     { src: "/projects/process/crew-laying-pavers-patio-01.jpg",               alt: "Crew laying pavers on a patio." },
  crewBlueprints:            { src: "/projects/process/crew-reviewing-blueprints-truck-tailgate-01.jpg", alt: "Crew reviewing blueprints on a truck tailgate." },
  crewLevelingBase:          { src: "/projects/process/crew-leveling-paver-base-01.jpg",               alt: "Crew leveling a paver base." },
  crewInstallEdging:         { src: "/projects/process/crew-installing-paver-edging-01.jpg",           alt: "Crew installing paver edging." },
  crewClearingDebris:        { src: "/projects/process/crew-clearing-debris-01.jpg",                   alt: "Crew clearing debris from a job site." },
  crewStakingShrubs:         { src: "/projects/process/crew-staking-out-shrubs-01.jpg",                alt: "Crew staking out shrubs before planting." },
  shrubsStaged:              { src: "/projects/process/shrubs-staged-for-planting-01.jpg",             alt: "Shrubs staged for planting." },
  bobcatClearingYard:        { src: "/projects/process/bobcat-clearing-yard-01.jpg",                   alt: "Bobcat clearing a yard." },
  bobcatClearingSide:        { src: "/projects/process/bobcat-clearing-side-yard-01.jpg",              alt: "Bobcat clearing a side yard." },
  bobcatStumpClearing:       { src: "/projects/process/bobcat-stump-clearing-01.jpg",                  alt: "Bobcat clearing tree stumps." },
  brickRanchGrading:         { src: "/projects/process/brick-ranch-grading-prep-01.jpg",               alt: "Brick ranch site — grading prep." },
  workerTrenching:           { src: "/projects/process/worker-trenching-paver-edge-01.jpg",            alt: "Worker trenching for paver edging." },
  inGroundPoolInstall:       { src: "/projects/process/inground-pool-during-install-01.jpg",           alt: "In-ground pool — during install." },
  inGroundPoolGravel:        { src: "/projects/process/inground-pool-gravel-surround-progress-01.jpg", alt: "In-ground pool with gravel surround in progress." },
  rectPoolRoughGrade:        { src: "/projects/process/rectangular-pool-rough-grade-01.jpg",           alt: "Rectangular pool — rough grade." },
  rectPoolArborvitaeProg:    { src: "/projects/process/rectangular-pool-arborvitae-screen-progress-01.jpg", alt: "Rectangular pool — arborvitae screen install in progress." },
  emptyPoolShell:            { src: "/projects/process/empty-pool-shell-rough-grade-01.jpg",           alt: "Empty pool shell at rough grade." },
  rectPoolTwilight:          { src: "/projects/process/rectangular-pool-rough-grade-twilight-01.jpg",  alt: "Rectangular pool at rough grade — twilight." },
  rectPoolFormedShell:       { src: "/projects/process/rectangular-pool-formed-shell-01.jpg",          alt: "Rectangular pool with formed shell." },
  rectPoolFormwork:          { src: "/projects/process/rectangular-pool-shell-formwork-01.jpg",       alt: "Rectangular pool — shell formwork." },
  freeformPoolSpaRough:      { src: "/projects/pools/freeform-pool-spa-rough-construction-01.jpg",  alt: "Freeform pool and spa — rough construction." },
  freeformPoolSpaShells:     { src: "/projects/process/freeform-pool-spa-shells-progress-01.jpg",     alt: "Freeform pool and spa shells — progress." },
  freeformPoolConcrete:      { src: "/projects/process/freeform-pool-concrete-deck-poured-01.jpg",    alt: "Freeform pool — concrete deck poured." },
  freeformPoolDeckProg:      { src: "/projects/process/freeform-pool-deck-progress-01.jpg",           alt: "Freeform pool deck — progress." },
  freeformPoolPorch:         { src: "/projects/process/freeform-pool-screened-porch-progress-01.jpg", alt: "Freeform pool with screened porch — progress." },
  retainingWallProgress:     { src: "/projects/process/retaining-wall-rear-yard-progress-01.jpg",     alt: "Retaining wall in a rear yard — progress." },
  retainingWallShed:         { src: "/projects/process/retaining-wall-shed-progress-01.jpg",          alt: "Retaining wall and shed — progress." },
  newBuildCornerBed:         { src: "/projects/landscapes/new-build-corner-shrub-bed-01.jpg",            alt: "New-build corner shrub bed." },
  screenedPorchRearProg:     { src: "/projects/process/screened-porch-progress-rear-yard-01.jpg",    alt: "Screened porch — progress in the rear yard." },
  screenedPorchSideProg:     { src: "/projects/process/screened-porch-progress-side-01.jpg",         alt: "Screened porch — progress, side angle." },
  screenedPorchFdn:          { src: "/projects/process/screened-porch-foundation-progress-01.jpg",   alt: "Screened porch — foundation progress." },
  screenedPorchProgress:     { src: "/projects/process/screened-porch-progress-rear-01.jpg",         alt: "Screened porch — rear-angle progress." },

  // Rear-yard / arborvitae screens
  rearArborvitaePatio:       { src: "/projects/hardscapes/rear-yard-arborvitae-screen-patio-01.jpg",     alt: "Rear yard with arborvitae screen and patio." },
} satisfies Record<string, Photo>;

// ── Photoshoot — curated studio photoshoot photos ───────────
//   Now flattened to /photoshoot/ root with clearer names.
export const photoshoot: Photo[] = Array.from({ length: 30 }, (_, i) => ({
  src: `/photoshoot/studio-photoshoot-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Studio photoshoot — composition ${i + 1}.`,
}));

// ── Renderings — 3D MODEL PLANS — used only on the Process page
//    where we explicitly say "before we build, we draw". NEVER as
//    project photography.
export const renderings = {
  autumnLakes: [1, 2, 3, 4, 5].map((n) => ({
    src: `/renderings/autumn-lakes-plan-0${n}.jpg`,
    alt: `3D site plan rendering — Autumn Lakes (view ${n}).`,
  })),
  chakalos: [1, 2, 3, 4].map((n) => ({
    src: `/renderings/chakalos-plan-0${n}.jpg`,
    alt: `3D site plan rendering — Chakalos (view ${n}).`,
  })),
  connelly: [1, 2, 3, 4, 5].map((n) => ({
    src: `/renderings/connelly-plan-0${n}.jpg`,
    alt: `3D site plan rendering — Connelly (view ${n}).`,
  })),
  nagypal: [1, 2, 3, 4, 5].map((n) => ({
    src: `/renderings/nagypal-plan-0${n}.jpg`,
    alt: `3D site plan rendering — Nagypal (view ${n}).`,
  })),
};

// ── Brand assets ────────────────────────────────────────────
export const brand = {
  logoFullWhite: "/brand/logo-full-white.svg",
  logoFullBlack: "/brand/logo-full-black.svg",
  logoBlack:     "/brand/logo-black.svg",
  logo:          "/brand/logo.svg",
  favicon:       "/brand/favicon.svg",
  opengraph:     "/brand/og.png",
};

// ── Staff portraits ─────────────────────────────────────────
export const staffPhotos = {
  scottBaldwin: {
    src: "/staff/scott-baldwin.jpg",
    alt: "Scott Baldwin — Yardie founder and lead designer.",
    name: "Scott Baldwin",
    role: "Founder · Lead Designer",
    bio: "Founded Yardie in Greenville in 2004. Walks every property, draws every plan, and still spends afternoons on site with the masons.",
  },
  marioTaxho: {
    src: "/staff/mario-taxho.jpg",
    alt: "Mario Taxho — Yardie crew lead.",
    name: "Mario Taxho",
    role: "Crew Lead · Masonry",
    bio: "Leads our masonry crew. Has set every column, step, and seat wall that bears the Yardie name for the last decade.",
  },
  scottAndWife: {
    src: "/staff/scott-and-wife-portrait.jpg",
    alt: "Scott Baldwin with his wife in the studio.",
    name: "Scott Baldwin",
    role: "Founder",
    bio: "",
  },
  scottDrafting: {
    src: "/staff/scott-baldwin-drafting.jpg",
    alt: "Scott Baldwin drafting a site plan.",
    name: "Scott Baldwin",
    role: "Lead Designer",
    bio: "",
  },
  scottDesignTable: {
    src: "/staff/scott-baldwin-design-table.jpg",
    alt: "Scott Baldwin at the design table.",
    name: "Scott Baldwin",
    role: "Lead Designer",
    bio: "",
  },
  yardieCrew: {
    src: "/staff/yardie-crew-group.jpg",
    alt: "Yardie crew — group portrait.",
    name: "Yardie Crew",
    role: "The team behind every project",
    bio: "",
  },
} as const;

export const team = [staffPhotos.scottBaldwin, staffPhotos.marioTaxho];

// ── Friendly aliases used by existing pages ─────────────────
//    Spread across as many distinct projects as possible so no
//    single property dominates a page.
export const photos = {
  // Hero rotators — six distinct projects
  heroAman:      projectPhotos.mayBlvd.overview,
  heroBelhaven:  projectPhotos.williamsburg106.front,
  heroFlagstone: projectPhotos.autumnLakes.terrace,
  heroPool:      projectPhotos.autumnLakes.waterFeature,
  heroPatioFire: projectPhotos.holton.rearYard,
  heroLawn:      projectPhotos.williamsburg109.canopy,

  // Landscapes
  landscapeFront:  projectPhotos.williamsburg109.foundation,
  landscapeWide:   projectPhotos.holton.elevation,
  landscapeDetail: projectPhotos.autumnLakes.planting,
  landscapeBorder: projectPhotos.castlebrook.detail,
  landscapeGround: projectPhotos.holton.finishedBed,

  // Hardscapes
  hardscapeTerrace: projectPhotos.mayBlvd.stepped,
  hardscapeBrick:   projectPhotos.williamsburg106.walkway,
  hardscapeFront:   projectPhotos.holton.frontWalk,
  hardscapeStep:    projectPhotos.castlebrook.walk,
  hardscapeMulti:   projectPhotos.autumnLakes.stoneWalk,

  // Masonry
  masonryWall:    projectPhotos.holton.stoneDetail,
  masonryColumn:  projectPhotos.williamsburg106.columns,
  masonryDetail:  projectPhotos.mayBlvd.stoneDetail,
  masonryFire:    projectPhotos.williamsburg109.seatWall,

  // Lighting
  lightingFacade: projectPhotos.williamsburg106.twilight,
  lightingPath:   projectPhotos.mayBlvd.paths,
  lightingTree:   projectPhotos.mayBlvd.eveningLight,

  // Irrigation
  irrigationDetail: projectPhotos.holton.finishedBed,
  irrigationField:  projectPhotos.holton.planting,

  // About — studio at work
  aboutTeam:    staffPhotos.scottBaldwin,
  aboutDrawing: projectPhotos.allenDonald.progress1,
  aboutCraft:   projectPhotos.remington.progress2,

  // Pool / waterfront
  poolWide:     projectPhotos.autumnLakes.poolDeck,
  poolDeck:     projectPhotos.autumnLakes.shadedCorner,
  poolTwilight: projectPhotos.autumnLakes.portrait,

  // CTA / divider
  ctaWide:      projectPhotos.mayBlvd.finished,
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// ── Service-area city photos ────────────────────────────────
// Wikimedia Commons lead image per city. Used by the homepage
// postcard rail and by the service-area dynamic page hero.
// Files live at /public/cities/{slug}.jpg (CC-BY-SA, attribution
// rendered in the homepage postcards section).
export const cityPhotos: Record<string, Photo> = {
  greenville:    { src: "/cities/greenville.jpg",    alt: "Greenville, NC City Hall." },
  winterville:   { src: "/cities/winterville.jpg",   alt: "Winterville, NC — town view." },
  ayden:         { src: "/cities/ayden.jpg",         alt: "Ayden, NC — historic main street." },
  farmville:     { src: "/cities/farmville.jpg",     alt: "Farmville, NC — town view." },
  washington:    { src: "/cities/washington.jpg",    alt: "Washington, NC — Pamlico riverfront." },
  kinston:       { src: "/cities/kinston.jpg",       alt: "Kinston, NC — Queen Street United Methodist Church." },
  "new-bern":    { src: "/cities/new-bern.jpg",      alt: "New Bern, NC — Municipal Building." },
  goldsboro:     { src: "/cities/goldsboro.jpg",     alt: "Goldsboro, NC — fountain in the park." },
  wilson:        { src: "/cities/wilson.jpg",        alt: "Wilson, NC — City Hall." },
  "rocky-mount": { src: "/cities/rocky-mount.jpg",   alt: "Rocky Mount, NC — City Lake fountain." },
};

// ── Service-specific photo collections ──────────────────────
// One curated 4–6 photo list per service. Every photo here lives in
// the right /projects/{category}/ subfolder for its discipline (so
// the picture actually shows the service it's labelled with), and no
// photo appears in two services' lists. The first entry is what shows
// on the homepage service-card grid via serviceImageFor().
export const photosByService: Record<string, Photo[]> = {
  // Landscape Design — gardens, foundation beds, mature plantings.
  // First photo (Japanese maple foundation bed) reads as composed
  // planting design at a glance — strong card image.
  landscapes: [
    { src: "/projects/landscapes/foundation-bed-japanese-maple-01.jpg",         alt: "Foundation bed featuring a specimen Japanese maple, layered shrubs, river-rock edge." },
    { src: "/projects/landscapes/autumn-lakes-planting-05.jpg",                 alt: "Layered planting against the architecture at Autumn Lakes." },
    { src: "/projects/landscapes/williamsburg-109-foundation-planting-01.jpg",  alt: "Layered foundation planting at the front of a Greenville home." },
    { src: "/projects/landscapes/foundation-bed-mulch-shrubs-side-01.jpg",      alt: "Side foundation bed with fresh mulch and healthy shrubs." },
    { src: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",          alt: "Rear-garden landscape with composed planting beds." },
  ],

  // Patios & Pavers — outdoor rooms in stone/brick/paver.
  // First photo (grass-paver patio with Adirondack chairs) reads as a
  // composed outdoor room at a glance.
  "patios-pavers": [
    { src: "/projects/masonry/grass-paver-patio-firepit-adirondack-01.jpg",   alt: "Grass-paver patio with Adirondack chairs and a stone firepit centerpiece." },
    { src: "/projects/hardscapes/may-blvd-stepped-terrace-02.jpg",            alt: "Stepped stone terrace with low seating wall." },
    { src: "/projects/hardscapes/brick-ranch-rear-patio-planting-bed-01.jpg", alt: "Brick ranch rear patio with planting bed border." },
    { src: "/projects/hardscapes/rear-yard-arborvitae-screen-patio-01.jpg",   alt: "Rear-yard patio with arborvitae screen." },
    { src: "/projects/hardscapes/tan-rear-elevation-brick-patio-01.jpg",      alt: "Tan-brick rear elevation with a brick paver patio." },
  ],

  // Walkways & Driveways — entry walks, garden paths, paver drives
  "walkways-driveways": [
    { src: "/projects/hardscapes/williamsburg-106-walkway-02.jpg",            alt: "Hand-laid brick walkway leading to a Southern home entry." },
    { src: "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",   alt: "Herringbone paver walkway threaded between brick pillars." },
    { src: "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",       alt: "Colonial home with a brick paver driveway." },
    { src: "/projects/hardscapes/holton-front-walk-02.jpg",                   alt: "Hand-laid brick front walk with stone-cap detail." },
    { src: "/projects/hardscapes/grass-paver-driveway-circle-01.jpg",         alt: "Grass-paver circular driveway." },
  ],

  // Stone & Brick Masonry — columns, walls, veneer (NOT firepits — those are fire-features)
  masonry: [
    { src: "/projects/masonry/williamsburg-106-columns-03.jpg",   alt: "Lighted brick columns at the entry of a residential property." },
    { src: "/projects/masonry/holton-stone-detail-05.jpg",        alt: "Stone-cap detail along a finished walk." },
    { src: "/projects/masonry/may-blvd-stone-detail-07.jpg",      alt: "Hand-laid stone detail with tight jointing." },
    { src: "/projects/masonry/stone-column-lantern-closeup-01.jpg", alt: "Stone column with lantern — closeup detail." },
    { src: "/projects/masonry/landscape-entry-pillars-paver-walk-01.jpg", alt: "Stone entry pillars with paver walkway." },
  ],

  // Retaining Walls — engineered grade-change + seat walls
  "retaining-walls": [
    { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",  alt: "Stone retaining wall with bluestone steps." },
    { src: "/projects/masonry/williamsburg-109-seating-wall-04.jpg",         alt: "Detail of a stone seating wall framing a finished terrace." },
    { src: "/projects/landscapes/may-blvd-seat-wall-06.jpg",                 alt: "Seat-wall integrated with a planting bed and patio." },
    { src: "/projects/masonry/holton-step-detail-06.jpg",                    alt: "Stone steps integrated with brick walkway." },
    { src: "/projects/hardscapes/flagstone-steps-to-paver-patio-01.jpg",     alt: "Flagstone steps leading to a paver patio." },
  ],

  // Outdoor Kitchens — built-in grills, bars, masonry kitchens
  // (NOTE: /outdoor-kitchens/may-blvd-grill-surround-04.jpg is a misnamed
  // front-yard shot — kept on disk but excluded from this list.)
  "outdoor-kitchens": [
    { src: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg", alt: "Built-in stainless grill, wine fridge, and stone-clad cabinetry under a covered patio." },
    { src: "/projects/outdoor-kitchens/outdoor-kitchen-stone-veneer-01.jpg",      alt: "Outdoor kitchen with stone-veneer base, built-in grill and side burner with stainless cabinet doors." },
    { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-grill-bar-01.jpg", alt: "Covered outdoor kitchen with built-in grill, bar seating, and travertine floor." },
    { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-wood-columns-01.jpg", alt: "Covered outdoor kitchen with wood columns and integrated counter run." },
  ],

  // Fire Features — fireplaces, firepits, hearths.
  // First photo (herringbone-brick fireplace + lounge) is unmistakably
  // a fireplace at a glance. (NOTE: may-blvd-fireplace-03.jpg is misnamed
  // — the file actually shows a stone-column lantern, so it's been moved
  // to the lighting list and removed from fire-features.)
  "fire-features": [
    { src: "/projects/masonry/herringbone-brick-fireplace-patio-lounge-01.jpg", alt: "Hand-laid brick fireplace with white-cushion lounge on a herringbone brick patio." },
    { src: "/projects/masonry/freestanding-brick-fireplace-01.jpg",          alt: "Freestanding brick fireplace with arched wood-storage alcoves on each side." },
    { src: "/projects/masonry/brick-firepit-bench-rear-patio-01.jpg",        alt: "Brick firepit with built-in bench on a rear patio." },
    { src: "/projects/masonry/rear-patio-firepit-stone-veneer-01.jpg",       alt: "Rear-patio firepit with stone-veneer surround." },
  ],

  // Pergolas & Pavilions — pergolas, covered patios, screened porches
  "pergolas-pavilions": [
    { src: "/projects/masonry/white-brick-rear-firepit-pergola-01.jpg",     alt: "White-brick rear yard with firepit and pergola." },
    { src: "/projects/masonry/white-brick-rear-firepit-pergola-02.jpg",     alt: "White-brick rear yard with pergola — second angle." },
    { src: "/projects/outdoor-kitchens/covered-patio-wicker-seating-01.jpg", alt: "Covered patio with wicker seating." },
    { src: "/projects/outdoor-kitchens/covered-patio-wood-ceiling-fan-01.jpg", alt: "Covered patio with wood ceiling and fan." },
    { src: "/projects/porches/screened-porch-rear-elevation-01.jpg",        alt: "Screened porch — rear elevation." },
    { src: "/projects/porches/screened-porch-stone-foundation-01.jpg",      alt: "Screened porch with stone foundation." },
  ],

  // Pool Decks & Surrounds — pool decks, coping, pool-side landscape
  "pool-decks": [
    { src: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg", alt: "Freeform pool with stone fireplace and paver deck." },
    { src: "/projects/pools/rectangular-pool-travertine-deck-01.jpg",         alt: "Rectangular pool with travertine deck." },
    { src: "/projects/pools/freeform-pool-paver-coping-01.jpg",               alt: "Freeform pool with paver coping detail." },
    { src: "/projects/pools/autumn-lakes-pool-deck-02.jpg",                   alt: "Stone pool deck with shaded lounge area." },
    { src: "/projects/pools/poolside-arborvitae-river-rock-edge-01.jpg",      alt: "Poolside arborvitae screen with river-rock edge." },
    { src: "/projects/pools/rectangular-pool-deck-screened-porch-01.jpg",     alt: "Rectangular pool deck adjacent to a screened porch." },
  ],

  // Outdoor Lighting — lantern-lit columns, twilight shots.
  // First photo is the stone-column lantern (formerly miscategorized
  // under fire-features) — actually a strong lighting card image.
  lighting: [
    { src: "/projects/masonry/may-blvd-fireplace-03.jpg",            alt: "Stone column with a coach-style lantern lighting a front-yard mulch bed." },
    { src: "/projects/lighting/may-blvd-evening-light-10.jpg",       alt: "Architectural lighting on a stone column with a coach lantern." },
    { src: "/projects/pools/brick-fireplace-pool-twilight-01.jpg",   alt: "Brick fireplace by pool at twilight." },
    { src: "/projects/hardscapes/brick-walkway-shed-lantern-01.jpg", alt: "Brick walkway with shed lantern at the property edge." },
    { src: "/projects/lighting/williamsburg-106-twilight-06.jpg",    alt: "Brick facade with column lighting." },
  ],

  // Irrigation Systems — established, healthy, lush gardens (proof an irrigation system is doing its job)
  irrigation: [
    { src: "/projects/landscapes/holton-finished-bed-09.jpg",                alt: "Finished planting bed in summer growth — irrigation tuned." },
    { src: "/projects/landscapes/holton-extra-15.jpg",                       alt: "Established foundation planting in full summer growth." },
    { src: "/projects/landscapes/foundation-bed-mulch-shrubs-side-01.jpg",   alt: "Side foundation bed with fresh mulch and healthy shrubs." },
    { src: "/projects/landscapes/holton-extra-18.jpg",                       alt: "Finished landscape with mulched bed line — drip-zoned." },
    { src: "/projects/landscapes/autumn-lakes-shaded-corner-07.jpg",         alt: "Shaded garden corner with established planting." },
  ],

  // Water Features — spillways, fountains, waterfalls
  "water-features": [
    { src: "/projects/pools/pool-spillway-stone-veneer-closeup-01.jpg",   alt: "Pool spillway with stone-veneer face — close detail." },
    { src: "/projects/pools/autumn-lakes-water-feature-03.jpg",            alt: "Water feature integrated with stone hardscape." },
    { src: "/projects/pools/pool-three-spillways-stone-deck-01.jpg",       alt: "Pool with three stone spillways and deck." },
    { src: "/projects/pools/modern-pool-spillway-stone-veneer-01.jpg",     alt: "Modern pool with stone-veneer spillway." },
    { src: "/projects/pools/pool-twin-spillways-house-backdrop-01.jpg",    alt: "Pool with twin spillways and house backdrop." },
  ],
};

// ── Drift / Instagram pool ──────────────────────────────────
export const instagramFeed: Photo[] = [
  projectPhotos.mayBlvd.overview,
  projectPhotos.williamsburg106.twilight,
  projectPhotos.holton.frontWalk,
  projectPhotos.autumnLakes.poolDeck,
  projectPhotos.williamsburg109.patio,
  projectPhotos.castlebrook.front,
  projectPhotos.emmaCannon.detail,
  projectPhotos.yardiePortfolio.differentJob,
  projectPhotos.allenDonald.stonePillar,
  projectPhotos.remington.fireplace,
  projectPhotos.speightSeed.stucco1,
  projectPhotos.holton.extra13,
  projectPhotos.mayBlvd.finishedPatio,
  projectPhotos.holton.extra24,
  projectPhotos.speightSeed.stucco6,
  projectPhotos.allenDonald.driveway,
];

// Helper — pick a hero photo by service slug.
export function serviceHero(slug: string): Photo {
  const list = photosByService[slug];
  return list?.[0] ?? photos.heroAman;
}
