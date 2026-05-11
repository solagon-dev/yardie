// ============================================================
// Yardie — Structured Content
// All copy is paraphrased and elevated from the original
// yardiedesign.com source (used with the client's permission).
// ============================================================

export const company = {
  name: "Yardie",
  legalName: "Yardie Design",
  tagline: "Designed Outdoor Living for Eastern North Carolina",
  description:
    "Exterior design studio in Greenville, NC. We design and build landscapes, hardscapes, masonry, lighting, and irrigation across Eastern North Carolina.",

  // Contact
  phone: "(252) 756-7788",
  phoneTel: "tel:+12527567788",
  email: "hello@yardiedesign.com",

  // Location
  street: "5036 Winterville Parkway",
  city: "Winterville",
  region: "NC",
  postal: "28590",
  market: "Greenville, NC and surrounding Pitt County",
  founded: 2004, // ~20+ years of experience claim

  // Founder
  founder: "Scott Baldwin",

  // Social
  instagram: "https://www.instagram.com/yardiedesign/",
  facebook: "https://www.facebook.com/yardiedesign/",
};

export const navigation = {
  main: [
    { label: "Services",      href: "/services" },
    { label: "Gallery",       href: "/gallery" },
    { label: "About",         href: "/about" },
    { label: "Journal",       href: "/journal" },
  ],
  cta: { label: "Request a Quote", href: "/quote" },
};

// ─── Brand Story ────────────────────────────────────────────
export const about = {
  hero: {
    headline: "Rooted in Greenville.",
    italicTail: "Built for life outside.",
    intro:
      "Yardie is a small studio of designers, masons, and builders working from a single conviction — that an outdoor space, designed thoughtfully, can become the most loved part of a home.",
  },
  story: [
    "Yardie began in Greenville, North Carolina as a single-person design practice with a simple idea: that a yard is not a surface to maintain but a space to live in. From the first project, the work has been about how a family will actually use a place — where they cook, where the children play, where they sit at the end of the day.",
    "Twenty years on, the studio has grown to include thirty designers and craftspeople. We still take fewer projects than we could. Every design is drawn for the property it sits on. Every wall, walk, and planting is detailed by people who care how it will look in five years, not just on the day it's installed.",
    "We are based in Eastern North Carolina, which is to say we know which oaks hold up to coastal storms and which stone weathers well in our humidity. That local knowledge is, in our experience, the difference between a yard and a place.",
  ],
  philosophy:
    "Design should be an experience, not just a product. Each project is a collaboration — a reading of how a family wants to live, translated into stone, plant, water, and light.",
  closing:
    "We believe in craftsmanship that creates spaces that endure, celebrate the outdoors, and invite joy.",
  stats: [
    { figure: "20+", label: "Years of practice" },
    { figure: "30+", label: "Designers & craftsmen" },
    { figure: "100s", label: "Homes shaped" },
    { figure: "1",   label: "Region we know best" },
  ],
};

// ─── Services ───────────────────────────────────────────────
export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  italicTail?: string;
  intro: string;          // 80–120 words for service hero / overview
  longCopy: string;       // 200–400 words for the service detail page
  features: { name: string; description: string }[];
  whyYardie: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  heroImage: string;
  galleryImages: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "landscapes",
    name: "Landscape Design",
    shortName: "Landscape Design",
    tagline: "The Living Canvas",
    italicTail: "of Your Home.",
    intro:
      "A landscape, done well, is the longest-running piece of design on your property. We draw planting plans that feel native to Eastern North Carolina — azalea, camellia, crepe myrtle, drought-tolerant perennial — arranged so that something is always quietly in season.",
    longCopy:
      "Every landscape begins with a walk. We read the property — its drainage, its sun, its wind, the way the house meets the ground. Then we draw. The first plan is rarely the final one; we expect to revise as the conversation deepens. " +
      "Our crews install everything we draw, which means the gardener planting the dogwood is the same person who will return in the fall to tell you whether it took. We work in stewardship, not in transactions. " +
      "Whether the project is a new front foundation planting, a complete rear-garden redesign, or a season-by-season maintenance plan that keeps a finished landscape at its best, we approach the work as a long collaboration.",
    features: [
      { name: "Custom landscape design",          description: "Master plans drawn to the architecture and the way you want to live in the space." },
      { name: "Garden design and planting",       description: "Beds composed for color, structure, and sequence — chosen to thrive in Pitt County soil." },
      { name: "Lawn care and maintenance",        description: "Mowing, edging, fertilization, and seasonal upkeep tuned to your property." },
      { name: "Seasonal cleanups",                description: "Leaf removal, mulching, pruning, and bed refreshes scheduled around the calendar." },
      { name: "Sod installation",                 description: "High-quality sod laid for an immediate, healthy lawn — no waiting through a season." },
      { name: "Tree and shrub care",              description: "Specimen plantings, structural pruning, and replacement strategies for mature gardens." },
    ],
    whyYardie: [
      { heading: "Local plant intelligence", body: "We design for the soil, water, and light Eastern NC actually has — not for what looks good on Pinterest." },
      { heading: "Drawn, not picked",        body: "Every bed is composed by hand, plant by plant, against the architecture and sightlines of the house." },
      { heading: "We live with what we plant", body: "Our maintenance teams visit the same gardens our designers drew, year after year." },
    ],
    faqs: [
      { q: "What plants do you recommend for the Greenville, NC area?",
        a: "Many of our gardens lean on a regionally proven palette — azaleas, camellias, crepe myrtles, hydrangeas, dogwoods, hollies, and a layer of drought-tolerant perennials such as catmint and salvia. We also incorporate ornamental grasses and native trees where they suit the property." },
      { q: "Do you offer environmentally friendly landscaping options?",
        a: "Yes. We design with native and adaptive plants, group beds by water need, integrate efficient irrigation, and use permeable hardscapes where possible. We avoid invasive species and aim for landscapes that need less, not more, over time." },
      { q: "How long does a landscape project take?",
        a: "It depends on scope. A planting refresh can take a week; a full property redesign, eight to twelve weeks once design is approved. We give an honest schedule before we start." },
      { q: "How do I maintain my landscape after installation?",
        a: "Most clients begin with our first-year care visits, which establish plantings and catch any settling-in issues. After that, we recommend an ongoing seasonal schedule we can manage for you or hand off to a partner." },
      { q: "Do you offer free consultations?",
        a: "Yes. The first conversation is at no cost — we walk the property, listen, and let you know whether we're the right fit before any design fee." },
    ],
    heroImage: "/projects/facades/holton-front-elevation-03.jpg",
    galleryImages: [
      "/projects/landscapes/holton-planting-08.jpg",
      "/projects/landscapes/holton-finished-bed-09.jpg",
      "/projects/landscapes/williamsburg-109-foundation-planting-01.jpg",
      "/projects/landscapes/holton-rear-yard-07.jpg",
      "/projects/landscapes/autumn-lakes-planting-05.jpg",
    ],
    seoTitle: "Landscape Design in Greenville, NC | Yardie",
    seoDescription:
      "Custom landscape design and installation in Greenville, NC. Planting plans, garden refreshes, and full property landscapes across Eastern NC.",
  },

  {
    slug: "patios-pavers",
    name: "Patios & Pavers",
    shortName: "Patios & Pavers",
    tagline: "The Outdoor Room,",
    italicTail: "Built in Stone.",
    intro:
      "Hardscape is the architecture of the outdoor room. A well-laid patio, a flight of stone steps, a low retaining wall — these are what make a yard feel composed. We design and build hardscapes that hold up to coastal weather and quietly improve with time.",
    longCopy:
      "We draw hardscape the way an architect draws floor plans. Where will people walk? Where will they sit? How does this terrace meet the back door, the lawn, the planting bed? Every dimension is intentional. " +
      "On the build side, we lay our own pavers and stone. Edge restraints, base preparation, joint detailing, and drainage are not items to cut corners on — they are the difference between a patio that lasts twenty years and one that fails in five. " +
      "From small front-walk replacements to multi-level rear terraces with outdoor kitchens, fire features, and walls, we treat the work as a piece of permanent architecture for the property.",
    features: [
      { name: "Custom patios",         description: "Stone, brick, or paver terraces designed around how you actually entertain and relax." },
      { name: "Walkways and pathways", description: "Front walks, garden paths, and connecting routes that thread the property together." },
      { name: "Retaining walls",       description: "Engineered walls for grade change — beautiful, structural, and drainage-aware." },
      { name: "Fire features",          description: "Fireplaces and fire pits integrated into the patio architecture and detailed in matching stone." },
      { name: "Driveways and entryways", description: "Permeable pavers, cobble bands, and refined approaches that lift the entire facade." },
      { name: "Water features",        description: "Fountains, runnels, and reflecting basins detailed to suit the architecture and garden." },
    ],
    whyYardie: [
      { heading: "We engineer what we install", body: "Base, drainage, and edge detailing are designed before the first stone is set." },
      { heading: "One studio, one crew",        body: "The designers who draw the patio are the people who walk the build with our masons." },
      { heading: "Materials that age well",     body: "We specify stone, brick, and paver lines that improve with weather rather than dating quickly." },
    ],
    faqs: [
      { q: "What's the difference between hardscapes and landscapes?",
        a: "Hardscape covers the built, structural elements of an outdoor space — patios, walks, walls, drives, fire features. Landscape covers the plant palette and soft surfaces. Most projects we design are some mix of the two." },
      { q: "How long does it take to install a hardscape feature?",
        a: "A simple paver patio can be installed in five to ten days. A full hardscape package with walls, kitchens, and fire features is typically six to twelve weeks of build time after design." },
      { q: "What materials do you use?",
        a: "We work primarily in natural stone, clay brick, and high-grade concrete pavers. We choose materials that match the home's architecture and the soil and weather of the site." },
      { q: "Are hardscapes durable enough for our weather?",
        a: "Yes — when the base is built correctly. Our base prep, edge restraint, and drainage detailing are designed to handle Eastern NC's freeze-thaw cycles and storm events." },
      { q: "Can hardscape increase the value of my home?",
        a: "Done well, hardscape is one of the highest-return outdoor investments because it expands the usable footprint of the house. Buyers respond to outdoor rooms, just as they respond to interior ones." },
    ],
    heroImage: "/projects/hardscapes/may-blvd-stepped-terrace-02.jpg",
    galleryImages: [
      "/projects/hardscapes/williamsburg-106-walkway-02.jpg",
      "/projects/hardscapes/may-blvd-paths-11.jpg",
      "/projects/hardscapes/holton-front-walk-02.jpg",
      "/projects/hardscapes/castlebrook-walk-02.jpg",
      "/projects/hardscapes/autumn-lakes-stone-walk-08.jpg",
    ],
    seoTitle: "Pavers & Hardscape Design in Greenville, NC | Yardie",
    seoDescription:
      "Custom pavers and hardscapes — patios, walkways, walls, and fire features — designed and built by Yardie for Greenville, NC and Eastern NC.",
  },

  {
    slug: "outdoor-kitchens",
    name: "Outdoor Kitchens",
    shortName: "Outdoor Kitchens",
    tagline: "Cooking, Hosting,",
    italicTail: "Outside.",
    intro:
      "An outdoor kitchen is the room that pulls a family outside on a Tuesday night. We design and build kitchens that work as hard as the one indoors — proper counter runs, real appliances, weather-tight cabinetry — and read as a continuation of the architecture, not an add-on.",
    longCopy:
      "We start with the way you actually cook. Where does the prep happen, who tends the grill, where do guests stand with a drink? The layout follows. A working triangle, generous counter on either side of the cooktop, and a clean separation between hot and cold zones. " +
      "Construction is masonry-first. Cabinet boxes are stainless or marine-grade and clad in the stone or brick that ties the kitchen to the house. Counters are honed granite, soapstone, or sealed bluestone — chosen for the heat, the climate, and how each ages outside. " +
      "We build in the appliances we'd specify for our own homes — Lynx, Hestan, Kalamazoo, Kamado Joe — paired with the right ventilation, gas, water, and electric runs. Every kitchen we draw is built to host comfortably for a decade-plus, not for a season.",
    features: [
      { name: "Built-in grills & cooktops",  description: "Stainless gas, charcoal, or hybrid stations sized to how you actually cook and entertain." },
      { name: "Pizza ovens",                 description: "Wood- or gas-fired ovens detailed into the masonry — a focal feature with a real working temperature." },
      { name: "Counters & prep stations",    description: "Honed granite, soapstone, or sealed bluestone counters with proper prep depth on either side of the cooktop." },
      { name: "Refrigeration & beverage",    description: "Outdoor-rated fridges, kegerators, and ice drawers integrated into the cabinet line." },
      { name: "Bars & seating",              description: "Counter-height bars, bench seating, and overhead structures that turn the kitchen into a hosting room." },
      { name: "Utilities & ventilation",     description: "Gas, water, drainage, and code-compliant overhead venting designed and inspected with the build." },
    ],
    whyYardie: [
      { heading: "Designed around your cooking", body: "We lay out the kitchen for the way you actually cook — not a brochure layout." },
      { heading: "Masonry-first construction",   body: "Stone and brick cladding tied to the house, on cabinet boxes built to last outdoors." },
      { heading: "Appliances we'd install at home", body: "We specify Lynx, Hestan, Kalamazoo, Kamado Joe, and Big Green Egg — and stand behind every install." },
    ],
    faqs: [
      { q: "How is an outdoor kitchen project scoped?",
        a: "Every kitchen is scoped individually based on what you actually want to cook, the appliances you'd like to specify, the surrounding hardscape, and the utilities the site needs (gas, water, power, drainage, ventilation). We walk the property at no cost, then provide a written design fee and itemized build estimate so you can see exactly what you're approving before we begin." },
      { q: "What appliances do you recommend?",
        a: "Lynx, Hestan, and Kalamazoo for grills and cooktops. Kamado Joe and Big Green Egg for ceramic. Outdoor-rated refrigeration from True or U-Line. We'll spec to your cooking and your budget." },
      { q: "Do I need gas, water, and power run to the kitchen?",
        a: "For a full kitchen, yes — a dedicated gas line, a hot/cold water feed, and a 20-amp circuit. We coordinate licensed plumbers and electricians as part of the build." },
      { q: "Can it stay outside year-round in Eastern NC?",
        a: "Yes. We use marine-grade or 304 stainless cabinet boxes, weather-rated appliances, and detailing that handles humidity and the occasional freeze. Covers are recommended for grills and cooktops in the off-season." },
      { q: "How long does an outdoor kitchen build take?",
        a: "Design takes two to four weeks. Construction typically runs four to eight weeks once permits, masonry, utilities, counters, and appliance installation are coordinated." },
    ],
    heroImage: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg",
    galleryImages: [
      "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg",
      "/projects/outdoor-kitchens/outdoor-kitchen-stone-veneer-01.jpg",
      "/projects/outdoor-kitchens/covered-outdoor-kitchen-grill-bar-01.jpg",
      "/projects/outdoor-kitchens/covered-outdoor-kitchen-wood-columns-01.jpg",
      "/projects/outdoor-kitchens/covered-patio-wicker-seating-01.jpg",
    ],
    seoTitle: "Outdoor Kitchen Design & Build in Greenville, NC | Yardie",
    seoDescription:
      "Custom outdoor kitchens — built-in grills, pizza ovens, masonry cabinetry, and counters — built by Yardie in Greenville, NC.",
  },

  {
    slug: "masonry",
    name: "Stone & Brick Masonry",
    shortName: "Masonry",
    tagline: "Timeless Craftsmanship",
    italicTail: "in Stone and Brick.",
    intro:
      "Masonry is the slow art of the outdoor space — the work whose value compounds. A stone seat wall, a brick column at the entry, a hand-laid garden border. These are pieces that outlive the people who lay them. We approach them that way.",
    longCopy:
      "Our masons train for years before they lay a stone in a finished position. Coursework, pattern, mortar color, joint depth — every line of the wall is a decision. We do not subcontract masonry; we keep it in-house because it is the heart of the studio. " +
      "We work in natural stone (limestone, fieldstone, flagstone, granite), brick, and selected cast stone. We match coursework to the architecture of the home so a wall added today reads as if it has always been there. " +
      "Every masonry project we take is permitted, drawn, and built to local code. We carry the regulatory work with the client so the only thing they see is the finish.",
    features: [
      { name: "Stone patios",            description: "Hand-laid natural stone or brick patios with attentive jointing and consistent fall for drainage." },
      { name: "Garden walls and borders", description: "Low walls and edges that frame planting beds and define outdoor rooms." },
      { name: "Stone veneers",           description: "Architectural-grade veneer applied to columns, chimneys, and exterior walls." },
      { name: "Steps and staircases",    description: "Stone or brick stairs that integrate with the patio and landscape detailing." },
      { name: "Outdoor kitchens & bars", description: "Stone counters, pizza ovens, and grill surrounds built into the masonry architecture." },
      { name: "Seating walls",           description: "Built-in benches around patios, fire pits, and gardens — comfortable, generous, lasting." },
    ],
    whyYardie: [
      { heading: "Masons, not subcontractors", body: "Every stone that bears our name is set by a Yardie mason." },
      { heading: "Permitted and drawn",        body: "We carry the permitting and engineering so the project meets code without surprise." },
      { heading: "Material match",             body: "We tune stone selection to the era and material of the home so the work sits comfortably." },
    ],
    faqs: [
      { q: "Do I need a permit for a masonry project?",
        a: "Many do, depending on scope and structure. We're familiar with local regulations and handle the permitting process for you." },
      { q: "What materials do you use for masonry?",
        a: "Natural stone (limestone, fieldstone, flagstone, granite, river rock), traditional clay brick, cultured stone, and concrete blocks where appropriate." },
      { q: "Can you match the masonry to the existing style of my home?",
        a: "Yes. We typically begin with the home — its brick, its stone, its color and pattern — and choose a masonry palette that reads as continuous architecture." },
      { q: "How long does a masonry project take?",
        a: "Smaller features (a low garden wall, a set of steps) are usually one to two weeks. Larger projects — a fireplace, a full stone patio with seating walls — can run six to ten weeks." },
      { q: "How do I know if masonry is the right choice?",
        a: "If you want something that lasts a generation, masonry is almost always the right call. We're happy to walk the property and recommend honestly when it isn't." },
    ],
    heroImage: "/projects/masonry/williamsburg-106-columns-03.jpg",
    galleryImages: [
      "/projects/masonry/williamsburg-106-columns-03.jpg",
      "/projects/masonry/holton-stone-detail-05.jpg",
      "/projects/masonry/may-blvd-stone-detail-07.jpg",
      "/projects/landscapes/castlebrook-front-01.jpg",
      "/projects/masonry/williamsburg-109-seating-wall-04.jpg",
    ],
    seoTitle: "Masonry Contractor in Greenville, NC | Yardie",
    seoDescription:
      "Custom stone and brick masonry — patios, walls, fireplaces, steps, and seating walls — built by Yardie for Greenville, NC and Pitt County.",
  },

  {
    slug: "lighting",
    name: "Outdoor Lighting",
    shortName: "Lighting",
    tagline: "Your Outdoor Space",
    italicTail: "After Dark.",
    intro:
      "A landscape lit well is a different place from the same landscape at noon. We design lighting layouts the way an interior designer plans a living room — with task, ambient, and accent layers, each on a separate scene, every fixture chosen for what it asks of the space.",
    longCopy:
      "Most outdoor lighting we are asked to replace is overlit — too many fixtures, too cool, too much. We tend to specify fewer, better fixtures, warmer color temperatures, and careful aiming so that the light feels like it belongs in the place. " +
      "We work in low-voltage and line-voltage systems with smart controls. Our typical install lets you walk through scenes — \"Dinner,\" \"Late Night,\" \"Holiday\" — that change the entire personality of the rear garden. " +
      "Path safety, security, and architectural drama are all part of the brief. So is the fact that good lighting is invisible: you should see what's lit, not where the light comes from.",
    features: [
      { name: "Landscape lighting design",    description: "Master plans that combine path, accent, and architectural lighting into a coherent night scene." },
      { name: "Pathway and walkway lighting", description: "Discreet path fixtures for safety and rhythm — never lined up like an airport runway." },
      { name: "Deck and patio lighting",      description: "Step lights, perimeter washes, and overhead string or sconce lighting for outdoor rooms." },
      { name: "Uplighting for trees and shrubs", description: "Specimen uplighting that reveals form and bark and turns a single tree into a centerpiece." },
      { name: "Architectural accent lighting", description: "Wash, grazing, and highlight effects that bring out the textures and lines of the home." },
      { name: "Security and motion lighting", description: "Carefully placed motion fixtures and low-glare floods that secure without flooding." },
    ],
    whyYardie: [
      { heading: "Designed in layers",       body: "Task, ambient, and accent lighting on independent scenes — like a well-designed interior." },
      { heading: "Warm, not bright",         body: "We bias toward 2700K, narrow beam where appropriate, and lower fixture counts done well." },
      { heading: "Smart controls, simple use", body: "App, voice, or wall scene controls — without making your evening into a tech support call." },
    ],
    faqs: [
      { q: "Is outdoor lighting energy efficient?",
        a: "Today's LED outdoor systems consume a fraction of the power older halogen systems used. A typical residential install will run on the equivalent of a single household appliance." },
      { q: "How long will my outdoor lighting last?",
        a: "Quality LED fixtures we specify carry 50,000+ hour ratings — practically a decade or more of nightly operation. Wiring and transformers should last well beyond that with care." },
      { q: "Do I need a professional to install outdoor lighting?",
        a: "For low-voltage path lighting, a homeowner can manage. For integrated, scene-controlled architectural lighting with proper wire runs and fixture aiming, professional design and install is the difference between great and forgettable." },
      { q: "Will outdoor lighting raise my power bill?",
        a: "Almost imperceptibly. A modern residential lighting design might add the equivalent of a few extra cents a night to a typical bill." },
      { q: "How do I maintain my outdoor lighting?",
        a: "Annual visit. We clean fixtures, re-aim where plant growth has shifted the picture, replace any failed lamps, and check transformer and wiring health." },
    ],
    heroImage: "/projects/lighting/williamsburg-106-twilight-06.jpg",
    galleryImages: [
      "/projects/lighting/williamsburg-106-twilight-06.jpg",
      "/projects/lighting/may-blvd-evening-light-10.jpg",
      "/projects/hardscapes/may-blvd-paths-11.jpg",
      "/projects/hardscapes/williamsburg-109-patio-03.jpg",
      "/projects/landscapes/holton-rear-yard-07.jpg",
    ],
    seoTitle: "Outdoor Landscape Lighting in Greenville, NC | Yardie",
    seoDescription:
      "Custom outdoor lighting — pathway, accent, and architectural fixtures with smart controls — designed and installed by Yardie in Greenville, NC.",
  },

  {
    slug: "irrigation",
    name: "Irrigation Systems",
    shortName: "Irrigation",
    tagline: "The Most Essential",
    italicTail: "Investment You'll Make.",
    intro:
      "Most landscapes that fail, fail at the irrigation. We design systems that water plants, not pavement — sized to soil, zoned to plant type, and tuned to the actual rainfall of Eastern NC.",
    longCopy:
      "We design irrigation systems the way mechanical engineers design HVAC — pressure tested, head-by-head, zone-by-zone. Spray, rotor, drip, and bubbler types are matched to plant material rather than installed by default. " +
      "Smart controllers from Hunter and Rain Bird track local rainfall and adjust schedules automatically, which can reduce water use by twenty to forty percent over a fixed schedule. " +
      "We service what we install. A typical client receives spring activation and winterization visits, plus mid-summer fine-tuning when summer heat changes the soil's behavior.",
    features: [
      { name: "Custom irrigation design",     description: "System layouts engineered to plant type, soil profile, and the rainfall pattern of your zone." },
      { name: "Smart irrigation controllers", description: "Wi-Fi controllers that respond to local weather and reduce water use without sacrificing health." },
      { name: "Sprinkler installation",       description: "Pop-up rotor and spray heads sized and spaced for even coverage with minimum overspray." },
      { name: "Drip irrigation systems",      description: "Targeted root-zone watering for beds, vegetable gardens, and tree wells." },
      { name: "Repair and maintenance",       description: "Diagnostic visits, head and valve replacement, line repair, and seasonal service." },
      { name: "Rainwater harvesting",         description: "Storage and pump systems that integrate captured rainwater into the irrigation supply." },
    ],
    whyYardie: [
      { heading: "Engineered, not eyeballed", body: "We pressure-test and zone every system before we recommend a controller." },
      { heading: "Service after install",     body: "Spring start-up, summer audit, and winterization come standard with every system we install." },
      { heading: "Water responsibly",         body: "Smart controllers and drip zones mean a healthier landscape on less water." },
    ],
    faqs: [
      { q: "Do I really need an irrigation system?",
        a: "If you're investing in plant material that's worth keeping alive, yes. Hand-watering is fine for the first season; an installed system is what protects mature landscapes through summer." },
      { q: "How does a smart irrigation system work?",
        a: "It pulls local weather data and adjusts each zone's watering schedule based on rainfall, evapotranspiration, and the plant type assigned to that zone." },
      { q: "How often should the system be checked?",
        a: "We recommend three visits a year — spring activation, summer audit, and fall winterization." },
      { q: "Will an irrigation system increase my water bill?",
        a: "Initially, yes — though usually less than a homeowner expects. Most clients save on plant replacement costs that more than offset the additional water." },
      { q: "How long does an irrigation system last?",
        a: "Well-installed systems last fifteen to twenty years. Heads and valves are wear items that we replace as they fail; main lines and wiring should be untouched for the life of the system." },
    ],
    heroImage: "/projects/landscapes/holton-finished-bed-09.jpg",
    galleryImages: [
      "/projects/landscapes/holton-finished-bed-09.jpg",
      "/projects/landscapes/holton-planting-08.jpg",
      "/projects/landscapes/autumn-lakes-planting-05.jpg",
      "/projects/landscapes/holton-extra-12.jpg",
    ],
    seoTitle: "Irrigation Systems in Greenville, NC | Yardie",
    seoDescription:
      "Custom irrigation design, installation, and repair in Greenville, NC. Smart controllers, drip zones, and water-wise coverage.",
  },

  // ─────── New, more specific services (added Apr 30 2026) ───────
  // These were split out of the original generic "hardscapes" and
  // "masonry" buckets, plus added based on the project photo evidence
  // — pool decks, fire features, pergolas, water features, etc.

  {
    slug: "walkways-driveways",
    name: "Walkways & Driveways",
    shortName: "Walkways & Drives",
    tagline: "The Approach,",
    italicTail: "Designed.",
    intro:
      "A walkway is the first line of architecture a guest reads — long before they reach the door. We design entry walks, garden paths, and paver driveways that compose the approach as carefully as the home it leads to.",
    longCopy:
      "Walks and drives are deceptively complex. Width, sightline, slope, joint pattern, base prep, and edge restraint all decide whether a walk reads as architecture or as utility. We treat them as composition. " +
      "Our base prep, edge restraints, and drainage detailing are designed to handle Eastern NC's freeze-thaw cycles and storm events without settling. Every walk we lay is built to look as good in year fifteen as it does on the day of installation.",
    features: [
      { name: "Front entry walks",         description: "Brick, paver, or natural stone walks composed against the front facade." },
      { name: "Garden paths",              description: "Stepping stones, flagstone, and gravel paths that thread the property together." },
      { name: "Paver driveways",           description: "Concrete-paver and clay-brick driveways with proper subgrade and edge engineering." },
      { name: "Grass-paver drives",        description: "Permeable grass-paver systems for circles and overflow parking." },
      { name: "Stone steps",               description: "Bluestone treads and brick risers detailed to grade and walk material." },
      { name: "Approach lighting",         description: "Path-edge, riser, and column lighting integrated into the approach." },
    ],
    whyYardie: [
      { heading: "Engineered base prep",   body: "Subgrade, geotextile, and compaction designed before the first paver is set." },
      { heading: "Material to architecture", body: "We tune brick coursework and stone selection to the era and material of the home." },
      { heading: "Drainage by default",    body: "Every walk and drive we lay carries water away from the house, not toward it." },
    ],
    faqs: [
      { q: "What's the difference between concrete pavers and natural stone?",
        a: "Pavers are factory-made, dimensioned, and cost less; natural stone is quarried, irregular, and ages to a finish you can't fake. We specify both — the right answer depends on the home and budget." },
      { q: "How long does a paver driveway last?",
        a: "Properly installed paver drives carry a 25-year-plus service life. Concrete drives without proper subgrade fail in five to seven years in our climate; pavers do not, because individual units flex independently." },
      { q: "Can you replace an old concrete walk with brick?",
        a: "Yes — we remove the old slab, rebuild the base to spec, and lay the new walk in your chosen material. Most front-walk replacements take three to five days." },
      { q: "Will weeds grow in the joints?",
        a: "Polymeric jointing sand sets like mortar and resists weed growth for years. We apply it as part of every install and recommend a top-up every five to seven years." },
    ],
    heroImage: "/projects/hardscapes/williamsburg-106-walkway-02.jpg",
    galleryImages: [
      "/projects/hardscapes/williamsburg-106-walkway-02.jpg",
      "/projects/hardscapes/holton-front-walk-02.jpg",
      "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",
      "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",
      "/projects/hardscapes/tudor-front-elevation-paver-walk-01.jpg",
    ],
    seoTitle: "Walkways & Paver Driveways in Greenville, NC | Yardie",
    seoDescription:
      "Yardie designs and installs custom walkways, paver driveways, and stone paths for homes in Greenville and Eastern North Carolina.",
  },

  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    shortName: "Retaining Walls",
    tagline: "Holding Grade,",
    italicTail: "Holding the Eye.",
    intro:
      "A retaining wall does two jobs at once — it holds the soil and it holds the composition. Designed well, the wall reads as a piece of architecture for the property; designed poorly, it reads as engineering. We approach every wall as both.",
    longCopy:
      "Retaining walls are a structural problem before they are an aesthetic one. We engineer base, batter, drainage, and tieback for every wall we build — soldier-course, gravity, segmental, or natural-stone — and only then choose the face material that will sit on the property. " +
      "Walls under three feet are usually a straightforward gravity build; anything taller requires geogrid tieback and engineered drainage to last. We carry the engineering with our installs so the wall meets code and ages well in our soil and rainfall.",
    features: [
      { name: "Natural-stone walls",       description: "Hand-laid fieldstone, granite, and limestone walls with mortar or dry-stack detailing." },
      { name: "Segmental concrete walls",  description: "Belgard, Techo-Bloc, and Versa-Lok walls for cost-effective grade change up to ten feet." },
      { name: "Brick retaining walls",     description: "Engineered brick walls with concrete-block backing — matched to the home's brick if applicable." },
      { name: "Seating walls",             description: "Eighteen-inch built-in seating walls integrated with patios, fire pits, and gardens." },
      { name: "Terraced walls",            description: "Stepped retaining systems that turn a slope into a series of usable garden rooms." },
      { name: "Drainage detailing",        description: "Drain tile, geotextile, and weep-hole detailing designed before backfill." },
    ],
    whyYardie: [
      { heading: "Engineered, not eyeballed", body: "Base, batter, drainage, and reinforcement designed before the first stone is set." },
      { heading: "Permitted and drawn",       body: "We carry permitting and engineering on walls over four feet so the build meets code." },
      { heading: "Matched to the home",       body: "We tune stone or block selection to the architecture so the wall reads as continuous." },
    ],
    faqs: [
      { q: "Do I need a permit for a retaining wall?",
        a: "Walls four feet and taller (measured from the bottom of the footing) typically require a building permit and engineered drawings in Pitt County. We handle the permitting on every wall we build above that threshold." },
      { q: "Why do retaining walls fail?",
        a: "The single most common failure mode is drainage — water builds up behind the wall, freezes, and pushes the wall outward. Every wall we install includes drain tile, washed gravel backfill, and a weep system." },
      { q: "How long does a retaining wall last?",
        a: "Properly engineered natural-stone and segmental walls carry a 50-year-plus service life. Walls without drainage or proper reinforcement can fail in under ten." },
      { q: "Can a retaining wall double as a seat?",
        a: "Yes — eighteen-inch seat walls are one of the most popular features we draw. Capped with bluestone, they read as architecture and serve as bench seating around fire pits and patios." },
    ],
    heroImage: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",
    galleryImages: [
      "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",
      "/projects/masonry/williamsburg-109-seating-wall-04.jpg",
      "/projects/landscapes/may-blvd-seat-wall-06.jpg",
      "/projects/masonry/holton-step-detail-06.jpg",
    ],
    seoTitle: "Retaining Walls — Stone, Brick & Block | Yardie",
    seoDescription:
      "Custom retaining walls — natural stone, brick, and segmental block — engineered, permitted, and built by Yardie for Greenville and Eastern NC.",
  },

  {
    slug: "fire-features",
    name: "Fire Features",
    shortName: "Fire Features",
    tagline: "The Reason",
    italicTail: "to Stay Outside.",
    intro:
      "A fire feature is what pulls a family outside on a cool November evening. We design and build masonry fireplaces, fire pits, and integrated hearths that read as architecture for the patio — not as hardware bolted to it.",
    longCopy:
      "Every fire feature we draw is masonry-first. Fireboxes are constructed from refractory brick, flue and chimney runs are sized for proper draft, and the surround is clad in stone or brick that ties the feature to the home. " +
      "Gas, wood-burning, and dual-fuel options are all available. We coordinate the gas line, ventilation, and any required permits as part of the build. Most fire features take four to six weeks of dedicated mason time once the patio is laid.",
    features: [
      { name: "Outdoor fireplaces",        description: "Full masonry fireplaces with proper firebox, flue, and chimney — wood-burning or gas." },
      { name: "Fire pits — masonry",       description: "Hand-laid stone or brick fire pits with stainless steel rings and ember detailing." },
      { name: "Fire pits — gas",           description: "Linear and round gas burners integrated into custom hearths." },
      { name: "Fire tables",               description: "Bluestone-capped fire tables sized to dining or lounge configurations." },
      { name: "Seat-wall integration",     description: "Built-in seat walls wrapping the fire feature for generous, lasting hosting space." },
      { name: "Pizza ovens",               description: "Wood- or gas-fired masonry ovens detailed into the larger hearth architecture." },
    ],
    whyYardie: [
      { heading: "Masonry-first construction", body: "Every firebox is laid in refractory brick by Yardie masons — no prefab inserts." },
      { heading: "Designed into the patio",    body: "We draw the fire feature with the patio so it reads as a piece of architecture, not an add-on." },
      { heading: "Permitted and inspected",    body: "Gas runs, flue sizing, and chimney detailing meet code on every install." },
    ],
    faqs: [
      { q: "Wood-burning or gas?",
        a: "Wood smells better and reads more romantic; gas is convenient and clean. Many of our clients install both — a gas burner for weeknight use, a wood chamber for weekends. We're happy to walk both options before you commit." },
      { q: "Do I need a chimney inspection?",
        a: "Wood-burning fireplaces require an annual chimney sweep and inspection. We can refer the local sweep we trust." },
      { q: "Can a fire pit work near the house?",
        a: "Yes — but with attention to clearance, smoke draft, and surface protection. We design every fire pit to local code and well clear of the home's eaves and overhangs." },
      { q: "How long does a fire-feature build take?",
        a: "Four to six weeks of dedicated mason time, plus design and permitting upfront. Larger architectural fireplaces with chimneys can run eight to ten weeks." },
    ],
    heroImage: "/projects/masonry/may-blvd-fireplace-03.jpg",
    galleryImages: [
      "/projects/masonry/may-blvd-fireplace-03.jpg",
      "/projects/masonry/freestanding-brick-fireplace-01.jpg",
      "/projects/masonry/herringbone-brick-fireplace-patio-lounge-01.jpg",
      "/projects/masonry/tall-stone-fireplace-paver-patio-01.jpg",
      "/projects/masonry/brick-firepit-bench-rear-patio-01.jpg",
      "/projects/masonry/grass-paver-patio-firepit-adirondack-01.jpg",
    ],
    seoTitle: "Outdoor Fireplaces & Fire Pits | Yardie Greenville NC",
    seoDescription:
      "Custom outdoor fireplaces, fire pits, fire tables, and pizza ovens — masonry-first construction by Yardie for homes across Eastern North Carolina.",
  },

  {
    slug: "pergolas-pavilions",
    name: "Pergolas & Pavilions",
    shortName: "Pergolas",
    tagline: "Architecture",
    italicTail: "Overhead.",
    intro:
      "A pergola turns an open patio into an outdoor room. We design wood, aluminum, and stone-column pergolas — and full pavilions with roofs and screened enclosures — that compose the patio into a destination instead of an open slab.",
    longCopy:
      "Pergolas are straightforward in concept and complex in execution. Column spacing, beam dimension, rafter detail, and footing all decide whether the structure reads as architecture or as a kit-of-parts. We draw every pergola for the property it sits on. " +
      "We work in cedar, mahogany, ipe, painted-pine, structural aluminum, and stone-column-with-timber-beam construction. For full pavilions and screened porches, we coordinate roofing, electrical, and ceiling-fan rough-in as part of the build.",
    features: [
      { name: "Cedar & ipe pergolas",      description: "Hand-built timber pergolas with hidden fasteners, proper footings, and clear-coat finishing." },
      { name: "Aluminum pergolas",         description: "Engineered aluminum frames — adjustable louver and snap-fit options for low maintenance." },
      { name: "Stone-column pergolas",     description: "Masonry columns supporting timber beams — the most permanent pergola architecture we build." },
      { name: "Outdoor pavilions",         description: "Full-roof pavilions with cedar ceilings, integrated lighting, and ceiling fans." },
      { name: "Screened porches",          description: "Full screened-room builds with stone foundations, custom ceiling, and seasonal removable panels." },
      { name: "Vine + wisteria training",  description: "Pergola structures detailed for trained climbing plants where the brief calls for a living roof." },
    ],
    whyYardie: [
      { heading: "Built like architecture", body: "Footings, posts, and beams sized to the span and load — not the lumberyard's defaults." },
      { heading: "Materials that age well", body: "We bias toward cedar, ipe, and stone — finishes that improve with weather rather than fade." },
      { heading: "Coordinated trades",      body: "Electrical, roofing, and finish carpentry coordinated under one studio." },
    ],
    faqs: [
      { q: "Do I need a permit for a pergola?",
        a: "Pergolas under 200 square feet typically don't require a permit in Pitt County, but anything roofed (a pavilion, a screened porch) does. We carry the permitting on every roofed structure we build." },
      { q: "Wood or aluminum?",
        a: "Wood is more beautiful and ages handsomely; aluminum is more durable and lower-maintenance. Most clients choose wood when they're willing to recoat every five to seven years; aluminum when they want to install once and forget." },
      { q: "Can you build over an existing patio?",
        a: "Yes — but the patio must be evaluated for footing depth and load. Sometimes we set new footings through the patio; sometimes the existing slab carries the load. We assess on the first walk." },
      { q: "How long does a pergola build take?",
        a: "Standard cedar or aluminum pergolas: two to three weeks. Full pavilions: six to eight weeks. Screened porches with electrical and finish carpentry: eight to twelve." },
    ],
    heroImage: "/projects/landscapes/white-brick-rear-firepit-pergola-01.jpg",
    galleryImages: [
      "/projects/landscapes/white-brick-rear-firepit-pergola-01.jpg",
      "/projects/landscapes/white-brick-rear-firepit-pergola-02.jpg",
      "/projects/outdoor-kitchens/covered-patio-wicker-seating-01.jpg",
      "/projects/outdoor-kitchens/covered-outdoor-kitchen-wood-columns-01.jpg",
      "/projects/porches/screened-porch-rear-elevation-01.jpg",
      "/projects/porches/screened-porch-stone-foundation-01.jpg",
    ],
    seoTitle: "Pergolas, Pavilions & Screened Porches | Yardie NC",
    seoDescription:
      "Custom pergolas, outdoor pavilions, and screened porches — wood, aluminum, and stone-column construction by Yardie across Greenville and Eastern NC.",
  },

  {
    slug: "pool-decks",
    name: "Pool Decks & Surrounds",
    shortName: "Pool Decks",
    tagline: "The Room",
    italicTail: "Around the Water.",
    intro:
      "We don't build pools — but we do everything around them. Coping, decks, surround landscape, lighting, and the architecture that turns the pool from a hole in the ground into the focal point of the property.",
    longCopy:
      "A pool surround is its own design problem. The deck has to drain, the coping has to handle water and sun, the planting has to tolerate splash, and the night-time lighting has to flatter both the water and the architecture. " +
      "We coordinate with your pool builder during construction so the surround composition is right from the day the water goes in — not retrofitted afterward. Travertine, bluestone, brick, and concrete-paver decks are all in our regular palette.",
    features: [
      { name: "Paver & travertine decks",  description: "Concrete-paver, travertine, and bluestone pool decks with proper drainage and slip-resistant texture." },
      { name: "Stone coping",              description: "Bluestone, granite, and travertine coping cut and set to match the deck material." },
      { name: "Surround planting",         description: "Salt- and chlorine-tolerant planting palettes that hold form against splash and sun." },
      { name: "Pool lighting",             description: "Architectural up-lighting on surround features, plus path lighting between the house and the water." },
      { name: "Outdoor showers",           description: "Cedar-enclosed and stone-clad outdoor showers with hot and cold lines." },
      { name: "Pool houses & cabanas",     description: "Cabana structures with finish carpentry, electrical, and integrated landscape." },
    ],
    whyYardie: [
      { heading: "Material to climate",   body: "Travertine, bluestone, and the right paver lines hold up to chlorine, sun, and Eastern NC humidity." },
      { heading: "Drained, not just sloped", body: "Pool decks need real drainage; we design slot drains and pitch every deck to a daylight outlet." },
      { heading: "Composed with the house", body: "We treat the pool as one room of a larger property — not as an isolated feature." },
    ],
    faqs: [
      { q: "Do you build the pool itself?",
        a: "We don't dig and shoot the gunite. We do design the surround composition, coordinate with your pool builder, and execute every square foot of deck, coping, planting, and lighting around the water." },
      { q: "What's the best pool deck material?",
        a: "Travertine for the high end (cool to the foot, beautiful patina); concrete pavers for value (tougher than poured concrete, infinitely repairable); bluestone for traditional architecture. We're happy to walk all three." },
      { q: "How do I keep planting alive next to chlorinated water?",
        a: "Choose salt- and chlorine-tolerant species — agave, miscanthus, dwarf palm, oleander where the climate allows. We design every poolside palette around what will actually thrive there." },
      { q: "Can you retrofit an existing pool surround?",
        a: "Yes. Most of our pool projects are retrofits — replacing dated concrete with paver or travertine, rebuilding coping, and refreshing the surround landscape. Existing pool shells stay; everything around them is rebuilt." },
    ],
    heroImage: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg",
    galleryImages: [
      "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg",
      "/projects/pools/rectangular-pool-brick-fireplace-01.jpg",
      "/projects/pools/freeform-pool-paver-coping-01.jpg",
      "/projects/pools/rectangular-pool-travertine-deck-01.jpg",
      "/projects/pools/autumn-lakes-pool-deck-02.jpg",
      "/projects/pools/poolside-arborvitae-river-rock-edge-01.jpg",
    ],
    seoTitle: "Pool Decks & Pool Surrounds | Yardie Greenville NC",
    seoDescription:
      "Custom pool decks, coping, and pool-surround landscape — paver, travertine, and bluestone — designed and built by Yardie for Greenville and Eastern NC.",
  },

  {
    slug: "water-features",
    name: "Water Features",
    shortName: "Water Features",
    tagline: "Sound, Movement,",
    italicTail: "Reflection.",
    intro:
      "A well-detailed water feature is the most undervalued element in residential landscape design. The sound softens nearby roads. The movement keeps the eye in the garden. The light at twilight turns the property into something else entirely.",
    longCopy:
      "We design and install water features as architecture, not decoration. Spillways into pools, runnels through patios, formal fountains, naturalistic ponds with proper biology, and pondless waterfalls that move water without the maintenance overhead. " +
      "Every system we install includes the right pump for the head and flow, proper plumbing for winterization, and integrated lighting where the brief calls for it.",
    features: [
      { name: "Pool spillways",            description: "Stone-veneer spillways from raised spas and elevated walls into the pool." },
      { name: "Formal fountains",          description: "Tiered, basin, and wall-mounted fountains for formal entry courtyards and gardens." },
      { name: "Pondless waterfalls",       description: "Recirculating waterfalls without a visible pond — all the sound, none of the upkeep." },
      { name: "Naturalistic ponds",        description: "Ponds with proper biology, edge planting, and integrated stream and waterfall systems." },
      { name: "Runnels & rills",           description: "Architectural runnels that thread water through patios and walks." },
      { name: "Lighting + pump systems",   description: "Submersible architectural lighting and reliable pumps with winterization-ready plumbing." },
    ],
    whyYardie: [
      { heading: "Pumped to last",         body: "Right pump for the head and flow — the cheapest pump is rarely the right one." },
      { heading: "Maintenance designed in", body: "Skimmer access, winterization shut-offs, and pump-vault detailing for service years from now." },
      { heading: "Lit at twilight",        body: "Architectural up-lighting integrated with the feature — at golden hour the water and the light are the room." },
    ],
    faqs: [
      { q: "Are water features hard to maintain?",
        a: "Pondless waterfalls and architectural fountains are essentially self-maintaining; ponds with fish and live planting need a real maintenance schedule. We design with the maintenance you're willing to do." },
      { q: "Can a fountain run year-round in Eastern NC?",
        a: "We design every recirculating water feature with a winterization shut-off so the pump and lines can be drained for hard freezes. Most of our clients run their fountains April through November." },
      { q: "Do water features attract mosquitoes?",
        a: "No — moving water is the opposite of standing water and discourages mosquito breeding. Stagnant features attract mosquitoes; we never design those." },
      { q: "How long does a water-feature install take?",
        a: "Two to four weeks for pondless waterfalls and architectural fountains; six to ten for full naturalistic pond systems with planting and biology." },
    ],
    heroImage: "/projects/pools/autumn-lakes-water-feature-03.jpg",
    galleryImages: [
      "/projects/pools/autumn-lakes-water-feature-03.jpg",
      "/projects/pools/pool-spillway-stone-veneer-closeup-01.jpg",
      "/projects/pools/pool-three-spillways-stone-deck-01.jpg",
      "/projects/pools/modern-pool-spillway-stone-veneer-01.jpg",
      "/projects/pools/pool-twin-spillways-house-backdrop-01.jpg",
    ],
    seoTitle: "Water Features — Fountains, Ponds, Spillways | Yardie",
    seoDescription:
      "Custom water features — fountains, pondless waterfalls, pool spillways, and naturalistic ponds — designed and installed by Yardie for Eastern NC homes.",
  },
];

// ─── Process ────────────────────────────────────────────────
export const process = [
  {
    number: "01",
    title: "Consultation",
    body: "We begin on the property. We walk the site, listen to how you want to live in it, and look at the architecture of the house. Most first conversations end with a clearer picture of what's possible — and an honest answer on whether we're the right studio for the project.",
    image: "/projects/landscapes/holton-overview-01.jpg",
  },
  {
    number: "02",
    title: "Design",
    body: "Our designers draw the property — layout, materials, planting, lighting — in stages. You see hand sketches first, then dimensioned plans, then material samples laid against the home. Adjustments are part of the process; we expect to revise.",
    image: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",
  },
  {
    number: "03",
    title: "Build & Install",
    body: "Our own masons, gardeners, and irrigation crews execute every project. You'll work with the same team from groundbreaking to final walk-through, with the designer present at every milestone.",
    image: "/projects/process/donald-drive-progress-03.jpg",
  },
  {
    number: "04",
    title: "Stewardship",
    body: "We come back. First-year care visits establish plantings, fine-tune irrigation, and catch any settling. Most clients keep us on a seasonal schedule afterward — the same eyes that drew the garden continuing to look after it.",
    image: "/projects/landscapes/may-blvd-finished-view-12.jpg",
  },
];

// ─── Work Gallery ───────────────────────────────────────────
// A single flat collection of photos and media from completed work.
// Replaces the prior individual-project model.
export interface WorkMedia {
  src: string;
  alt: string;
}

// All paths point at the flat /public/projects/ tree (real photographs only).
// Mixed pool drawing from twelve different jobs + a sampling of the loose
// root files we pulled in from /Aman-*, /DSC*, /File_*, /IMG_* originals.
export const workGallery: WorkMedia[] = [
  { src: "/projects/facades/williamsburg-106-front-elevation-01.jpg", alt: "Front-yard masonry — brick walk, lighted columns, mature canopy." },
  { src: "/projects/hardscapes/williamsburg-106-walkway-02.jpg",         alt: "Hand-laid brick walkway leading to a Southern home entry." },
  { src: "/projects/masonry/williamsburg-106-columns-03.jpg",         alt: "Lighted brick columns at the entry of a residential property." },
  { src: "/projects/lighting/williamsburg-106-twilight-06.jpg",        alt: "Front facade with masonry detail at dusk." },
  { src: "/projects/hardscapes/may-blvd-stepped-terrace-02.jpg",         alt: "Stepped stone terrace with a low seating wall and fire feature." },
  { src: "/projects/masonry/may-blvd-fireplace-03.jpg",               alt: "Patio fireplace integrated into a hand-laid stone surround." },
  { src: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg",          alt: "Stone seating wall framing a built-in grill area." },
  { src: "/projects/landscapes/may-blvd-canopy-trees-08.jpg",            alt: "Multi-level patio with crepe myrtle canopy." },
  { src: "/projects/landscapes/may-blvd-finished-view-12.jpg",           alt: "Composed rear yard with lawn rolling to the property edge." },
  { src: "/projects/landscapes/may-blvd-extra-25.jpg",                   alt: "Finished patio with stone fireplace at golden hour." },
  { src: "/projects/pools/autumn-lakes-pool-deck-02.jpg",           alt: "Stone pool deck with shaded lounge area." },
  { src: "/projects/pools/autumn-lakes-water-feature-03.jpg",       alt: "Water feature integrated with stone hardscape." },
  { src: "/projects/pools/autumn-lakes-terrace-04.jpg",             alt: "Terrace bordered by low planting." },
  { src: "/projects/hardscapes/holton-front-walk-02.jpg",                alt: "Hand-laid brick steps with stone-cap detail." },
  { src: "/projects/masonry/holton-stone-detail-05.jpg",              alt: "Stone-cap detail along a finished walk." },
  { src: "/projects/landscapes/holton-rear-yard-07.jpg",                 alt: "Rear yard with layered planting and mature canopy." },
  { src: "/projects/landscapes/holton-planting-08.jpg",                  alt: "Planting bed composed for color and structure." },
  { src: "/projects/landscapes/holton-finished-bed-09.jpg",              alt: "Drip-zoned planting bed with mature shrub layer." },
  { src: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",     alt: "Rear-garden landscape with composed planting beds." },
  { src: "/projects/hardscapes/williamsburg-109-patio-03.jpg",           alt: "Stone patio with built-in seating wall on the garden edge." },
  { src: "/projects/masonry/williamsburg-109-seating-wall-04.jpg",    alt: "Detail of a stone seating wall framing a finished terrace." },
  { src: "/projects/landscapes/williamsburg-109-canopy-06.jpg",          alt: "Mature canopy framing the rear yard at golden hour." },
  { src: "/projects/landscapes/castlebrook-front-01.jpg",                alt: "Castlebrook — front elevation." },
  { src: "/projects/hardscapes/castlebrook-walk-02.jpg",                 alt: "Castlebrook — front walkway detail." },
  { src: "/projects/masonry/donald-drive-extra-06.jpg",               alt: "Donald Drive — stone pillar at the property entry." },
  { src: "/projects/hardscapes/donald-drive-extra-07.jpg",               alt: "Donald Drive — finished driveway approach." },
  { src: "/projects/landscapes/speight-seed-extra-07.jpg",               alt: "Speight Seed Farm Rd — stucco home with stone landscaping." },
  { src: "/projects/landscapes/speight-seed-extra-08.jpg",               alt: "Speight Seed Farm Rd — stone hardscape detail." },
  { src: "/projects/hardscapes/remington-extra-05.jpg",                  alt: "728 Remington — patio hardscape." },
  { src: "/projects/masonry/remington-extra-06.jpg",                  alt: "728 Remington — outdoor fireplace detail." },
  // Loose-root photos pulled in via the reorganization
  { src: "/projects/masonry/herringbone-brick-fireplace-patio-lounge-01.jpg", alt: "Herringbone brick fireplace and patio lounge." },
  { src: "/projects/pools/rectangular-pool-brick-fireplace-01.jpg",        alt: "Rectangular pool with brick fireplace." },
  { src: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg", alt: "Freeform pool with stone fireplace and paver deck." },
  { src: "/projects/masonry/tall-stone-fireplace-paver-patio-01.jpg",        alt: "Tall stone fireplace on a paver patio." },
  { src: "/projects/facades/white-brick-mansion-front-elevation-01.jpg",     alt: "White-brick Southern formal home — front elevation." },
  { src: "/projects/facades/white-brick-front-arched-entry-01.jpg",          alt: "White-brick home with arched entry and formal landscaping." },
  { src: "/projects/pools/modern-farmhouse-pool-spa-rear-elevation-01.jpg", alt: "Modern farmhouse rear elevation with pool and spa." },
  { src: "/projects/masonry/pond-dock-stone-pillars-flagstone-01.jpg",       alt: "Pond dock with stone pillars and flagstone." },
  { src: "/projects/masonry/grass-paver-patio-firepit-adirondack-01.jpg",    alt: "Grass-paver patio with firepit and Adirondack chairs." },
  { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",    alt: "Stone retaining wall with bluestone steps." },
  { src: "/projects/masonry/iron-fence-stone-columns-paver-patio-01.jpg",    alt: "Iron fence between stone columns on a paver patio." },
  { src: "/projects/outdoor-kitchens/outdoor-kitchen-stone-veneer-01.jpg",            alt: "Outdoor kitchen clad in stone veneer." },
  { src: "/projects/outdoor-kitchens/covered-outdoor-kitchen-grill-bar-01.jpg",       alt: "Covered outdoor kitchen with grill and bar." },
  { src: "/projects/masonry/brick-firepit-bench-rear-patio-01.jpg",          alt: "Brick firepit with built-in bench on a rear patio." },
  { src: "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",       alt: "Herringbone paver walkway between pillars." },
  { src: "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",           alt: "Colonial home with paver driveway." },
  { src: "/projects/hardscapes/tudor-front-elevation-paver-walk-01.jpg",        alt: "Tudor front elevation with paver walkway." },
  { src: "/projects/hardscapes/flagstone-pavers-pond-overlook-01.jpg",          alt: "Flagstone pavers overlooking a pond." },
];

// ─── Service Areas ──────────────────────────────────────────
export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  description: string;
  notes: string;
}

export const serviceAreas: ServiceArea[] = [
  { slug: "greenville",  name: "Greenville",  county: "Pitt",   description: "Yardie's home base. Most of our installed projects sit within a fifteen-minute drive of the studio.", notes: "Headquarters in Winterville, NC." },
  { slug: "winterville", name: "Winterville", county: "Pitt",   description: "The studio is here, in Winterville. Many of our maintenance routes are walked from this office.", notes: "Studio: 5036 Winterville Parkway." },
  { slug: "ayden",       name: "Ayden",       county: "Pitt",   description: "We've worked in Ayden for years — old neighborhoods with mature canopy and brick architecture suited to careful masonry.", notes: "" },
  { slug: "farmville",   name: "Farmville",   county: "Pitt",   description: "Farmville has been a regular project market — see the May Boulevard project for a recent example.", notes: "" },
  { slug: "washington",  name: "Washington",  county: "Beaufort", description: "Waterfront work in Washington and the surrounding areas. Salt-tolerant planting palettes and storm-resilient hardscape.", notes: "" },
  { slug: "kinston",     name: "Kinston",     county: "Lenoir", description: "Larger residential lots and traditional architecture. We bring teams to Kinston on extended project timelines.", notes: "" },
  { slug: "new-bern",    name: "New Bern",    county: "Craven", description: "Historic district work and waterfront projects in New Bern.", notes: "" },
  { slug: "goldsboro",   name: "Goldsboro",   county: "Wayne",  description: "Residential landscape and hardscape projects across Wayne County.", notes: "" },
  { slug: "wilson",      name: "Wilson",      county: "Wilson", description: "We've taken on full-property landscape redesigns in Wilson on multi-week schedules.", notes: "" },
  { slug: "rocky-mount", name: "Rocky Mount", county: "Edgecombe", description: "Project work in Rocky Mount and surrounding Nash and Edgecombe county neighborhoods.", notes: "" },
];

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Yardie absolutely transformed our backyard into an oasis. The way they composed the planting against the patio architecture is something we couldn't have imagined ourselves.",
    name: "Chris McGill",
    city: "Greenville, NC",
    service: "Landscapes & Pavers",
  },
  {
    quote: "Thanks to Yardie, our front yard is now the envy of the neighborhood. The columns and the brick walk read as if they have always been part of the house.",
    name: "Dave Myers",
    city: "Greenville, NC",
    service: "Masonry",
  },
  {
    quote: "We now have the perfect space for entertaining. Our patio and lighting are absolute show-stoppers — and the lighting was designed in a way I genuinely didn't know was possible.",
    name: "Logan Williams",
    city: "Farmville, NC",
    service: "Pavers & Lighting",
  },
  {
    quote: "Three years on, the planting they put in is healthier than anything we've ever installed ourselves. The maintenance team feels like an extension of our family.",
    name: "Sarah Bennett",
    city: "Winterville, NC",
    service: "Landscapes",
  },
  {
    quote: "Their drawings were beautiful. The build matched the drawings. That sentence shouldn't be remarkable, and yet here we are.",
    name: "Jonathan Pierce",
    city: "Washington, NC",
    service: "Full property",
  },
];

// ─── Journal Posts ──────────────────────────────────────────
export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  category: "Landscapes" | "Hardscapes" | "Masonry" | "Lighting" | "Irrigation" | "Studio";
  readTime: number;
  excerpt: string;
  body: string[];        // paragraphs
  coverImage: string;
}

export const journal: JournalPost[] = [
  {
    slug: "masonry-vs-wood",
    title: "Masonry vs. Wood — A Long View",
    date: "December 4, 2024",
    category: "Masonry",
    readTime: 8,
    excerpt:
      "Wood ages, stone endures. The numbers behind a question we get more often than any other.",
    body: [
      "We are asked at least once a month whether a client should build their next outdoor feature in wood or in masonry. The answer is almost always masonry — but the numbers are worth knowing, and there are real cases where wood is the right call.",
      "Start with service life. A pressure-treated southern-pine retaining wall, properly built and drained, has a typical service life of ten to fifteen years in Eastern NC. After that the lower courses begin to rot, the deadmen lose grip, and the wall starts leaning. A natural-stone or segmental-block wall, built on the same site with the same drainage, will hold up fifty to a hundred years. The first costs roughly half as much per linear foot at install; the second costs less than half as much per year over its life.",
      "The arithmetic is similar for fences, pergolas, gates, and retaining steps. We track our own client repair calls — and ninety percent of every \"can you come look at this\" call we get on a wood feature happens between year eight and year fourteen. We have never been called back to repair a stone wall we built ten years ago. That isn't marketing. It's how the materials behave in our humidity.",
      "The other reason we lean masonry is composition. Stone and brick read as architecture; treated lumber rarely does. A homeowner who pays for masonry is buying a finish that frames every other choice on the property — the planting against it, the patio that abuts it, the way the front facade reads from the street. Wood reads as carpentry, not as architecture. Different intent, different effect.",
      "There are still real cases where wood is right. Pergolas almost always want to be wood — cedar, ipe, or mahogany — because a masonry pergola feels oppressive. Pool houses, garden gates, decorative arbors, and any structure where you want the warmth of grain and the give of a hand-finished material all read better in wood. Vegetable-garden enclosures and tree houses are obvious wood territory. The line is roughly: built-in is usually masonry, applied is often wood.",
      "Maintenance is also worth pricing into the comparison. A wood structure in our climate needs a real refinish every three to five years — power-wash, sand, re-stain or paint. Conservatively, that's $400 to $1,200 per refinish on a typical residential pergola or fence. Over a fifteen-year wood-structure lifespan that's another $2,000 to $4,000 of maintenance — money you don't spend on a stone-and-mortar equivalent.",
      "When we draw a project that mixes both, the rule of thumb is to put masonry where the eye lingers (entry columns, seat walls around the patio, the fireplace surround) and wood where the eye passes (overhead rafters, garden gates, fence panels). The two materials soften each other when used in the right roles.",
      "Cost framing matters. Stone and brick are not premium products; they are long-horizon products. Anyone selling you wood as the cheaper option is showing you the install bill, not the twenty-year bill. We are happy to walk through both numbers on the property visit so you see the comparison fairly.",
    ],
    coverImage: "/journal/journal-cover-01.png",
  },
  {
    slug: "solar-vs-wired-lighting",
    title: "Solar vs. Wired — Which One Belongs in Your Yard?",
    date: "January 12, 2025",
    category: "Lighting",
    readTime: 7,
    excerpt:
      "Solar fixtures have come a long way. They are still not the right answer for a designed landscape.",
    body: [
      "Solar lighting fixtures have improved enormously in the last five years. The better ones — Gama Sonic, Sterno Home, the higher-end Hampton Bay line — produce respectable warm light for several hours after sunset, and a homeowner can install a half-dozen path stakes in an afternoon for under $200. As a quick fix on a fence post or a temporary install for an event, solar earns its place.",
      "It is still a poor fit for a designed landscape. There are five reasons we don't recommend it on the projects we draw.",
      "Output dims through the evening. A wired low-voltage fixture puts out the same lumens at 11 PM as it does at 8 PM. A solar fixture at 11 PM is running on whatever's left in a small NiMH or lithium-ion cell — typically half the brightness of an hour after dusk. The path you lit at sunset isn't the path you walk back from a neighbor's at midnight.",
      "Performance falls off in winter and after cloudy days. From late November through February in Eastern NC we lose forty to sixty percent of available solar charging time relative to summer. After three days of overcast weather a solar fixture often won't fire at all. We've watched whole neighborhood walks go dark for a week in February for exactly this reason.",
      "Color temperature drifts as the cells age. A two-year-old solar fixture isn't producing the same light it was on day one — the LED color shifts cooler, the diffuser yellows, the output drops. A wired fixture stays consistent because it's running on regulated voltage from a transformer.",
      "Aim is poor. Most solar fixtures are bullet-shaped omnidirectional emitters, not narrow-beam directional fixtures. They put light everywhere, including up your nose. A real architectural lighting plan uses narrow-beam fixtures aimed at specific objects — a tree, a column, a wall plane — and that level of beam control is essentially absent from the solar category.",
      "Reliability is the killer. The single most common landscape-lighting failure mode we see on solar is a battery that swelled in summer heat and won't hold a charge. The fixtures themselves often work fine; the cells are gone in eighteen to twenty-four months. Replacing the cell on a sealed solar fixture is usually impossible without destroying the housing. So the failure mode is: you bought twelve fixtures, eight of them are dead, and you're back to the hardware store.",
      "What we recommend instead. For an installed landscape we expect to last fifteen to twenty years, low-voltage wired systems are the only honest answer. A 12-volt transformer in the garage, direct-burial 12-2 cable to each fixture, brass or marine-grade aluminum housings with replaceable LED MR16 lamps, and warranty-backed fixtures from FX Luminaire, Kichler, or Vista. Initial install is more — $200 to $500 per fixture all-in versus $25 to $80 for a solar stake — but the system runs reliably for a decade-plus and any failed component is field-replaceable.",
      "The exception case. If you're staging a property for sale, lighting up a deck for a single summer, or marking a temporary garden path while you decide on a real plan, solar is a fine stopgap. Just don't think of it as a permanent system. The economics, the optics, and the failure modes all argue against it for the long run.",
    ],
    coverImage: "/journal/journal-cover-02.png",
  },
  {
    slug: "pathway-lighting-guide",
    title: "Pathway Lighting — A Field Guide",
    date: "February 8, 2025",
    category: "Lighting",
    readTime: 7,
    excerpt:
      "Path lighting is most often overdone. Here's the editing principle we use.",
    body: [
      "The single most common path-lighting mistake we see is the runway — fixtures spaced evenly down the front walk, every six feet, until the path looks lit for an aircraft. It's the default setting at every big-box garden center, and it ruins more curb-appeal lighting than any other choice.",
      "We light paths to suggest direction, not to enforce it. Three or four fixtures along a thirty-foot walk, asymmetrically spaced, with the light pooled close to the ground and the unlit gaps deliberately preserved, will do what twelve evenly-spaced fixtures cannot. The dark sections of the walk are part of the design — they're what make the lit sections feel intentional.",
      "Fixture choice matters. We bias toward low, dark, brushed-bronze hat-style fixtures (Kichler 15310, FX Luminaire SP, Vista 5210 are common picks) that sit eight to fourteen inches above grade and pool light downward in a roughly four-foot circle. The housing should disappear into the mulch by daylight; the only thing the eye should register is the lit pool on the path.",
      "Color temperature is non-negotiable: 2700K, every fixture, every project. Anything cooler reads as commercial — a hospital walkway, a strip-mall parking lot. 2700K reads as candlelight, which is the only light we use to live by indoors after dark, and is what the eye expects.",
      "Lumens are typically over-specified. A pathway fixture at 80 to 150 lumens is plenty for the four-foot pool we want. Anything above 200 starts to feel commercial and creates harsh shadows on the joint between path and bed. If your existing fixtures feel like flashlights, the answer is usually to swap the lamp down to 2 or 3 watts, not to space them further apart.",
      "Place fixtures on one side of the walk, not both. A walk with fixtures on both sides reads as a runway — even when they're staggered. A walk with fixtures only on the bed side, or only on the lawn side, reads as architecture. The unlit side becomes a dark frame for the lit pools.",
      "The composition that works for almost every front walk: one fixture at the start of the walk on the bed side, one fixture at the bend (every walk should have a bend) on the bed side, one fixture two-thirds of the way to the door on the lawn side, and an architectural up-light on the column or facade at the door. Four fixtures total. The eye reads direction, the door is the destination, the rest is darkness.",
      "Wiring runs back to a low-voltage transformer (typically Hadco, Vista, or FX 75-150 watt depending on fixture count) in a weather-rated enclosure on a GFCI circuit. We bury 12-gauge direct-burial cable six to nine inches deep along the bed line and tap each fixture with a waterproof grease-cap connection. Done correctly, the system runs untouched for ten years.",
      "Maintenance is annual. Walk the system once a year — typically in November when planting goes dormant and the trees thin out — clean the lenses, re-aim any fixtures that the planting has grown around, and replace any failed lamps. We do this for clients who keep us on a seasonal schedule; it takes about an hour for a typical system.",
    ],
    coverImage: "/journal/journal-cover-03.png",
  },
  {
    slug: "how-masonry-enhances-curb-appeal",
    title: "How Masonry Enhances Curb Appeal — and Property Value",
    date: "March 5, 2025",
    category: "Masonry",
    readTime: 7,
    excerpt:
      "A few well-placed columns, a brick walkway, a low garden wall — small masonry investments tend to outperform expensive landscape ones at resale.",
    body: [
      "Real-estate appraisers in our region consistently rate masonry among the highest-return outdoor improvements a homeowner can make. Recent figures from regional appraiser surveys put the recovery rate on quality stone or brick masonry at 70 to 85 percent of cost at resale — well above the 40 to 60 percent typical of pure landscape work and roughly on par with kitchen and bath renovations on a per-dollar basis.",
      "The reason is simple: masonry reads as architecture, not as decoration. A homeowner who installs a brick walk is making the front facade feel more permanent. A pair of stone columns at the property entry frames every photograph the listing agent will take. A low seat wall around the rear patio reads as a built-in feature of the home, not as something the owner added.",
      "We tend to recommend masonry where it does double duty. A retaining wall that holds grade and creates seating earns its budget twice. A column that defines the entry and houses a mailbox earns it twice. A patio wall that frames a planting bed and serves as a perch for guests with a drink earns it twice. Single-purpose masonry — a wall that just holds soil, a column that just stands at the curb — is harder to justify than a feature that solves two problems at once.",
      "The most under-rated masonry investment for curb appeal is the entry column. A pair of brick or stone columns at the front walk, capped in bluestone or honed granite, with a coach-style lantern on each cap, transforms the way a house reads from the street. Budget runs $4,000 to $9,000 for a pair, depending on stone selection and cap detail. We've watched several clients price the work expecting it to be a $20,000+ project — the actual numbers are usually a pleasant surprise.",
      "Front-walk replacements are the next-best return. A poured-concrete walk replaced with hand-laid brick or natural-stone pavers, properly bedded and pointed, runs $35 to $80 per square foot installed in our market depending on material. A typical fifty-square-foot front walk lands in the $2,500 to $4,000 range. The visual lift is immediate and the buyer impression at a showing is disproportionate to the cost.",
      "Low garden walls — eighteen to twenty-four inches tall — are the third high-leverage masonry move. They define beds, hold a slight grade, create informal seating, and read as architecture rather than landscape. We typically build them in stone or veneer-clad block, capped in bluestone or local fieldstone. Budget runs $200 to $400 per linear foot installed.",
      "Where we steer clients away from masonry: high garden walls (over four feet) without a structural reason — they often read as forbidding rather than architectural. Curved walls in geometric architecture — a curve next to a strict colonial reads as kitsch. And wide masonry features in small yards — a six-foot stone column at a 1,200-square-foot bungalow looks oversized rather than dignified. Scale matters more than budget.",
      "The single most important guidance: match the material to the home. A brick ranch deserves brick masonry — same brick if you can find it, complementary brick if you cannot. A white-painted Cape Cod takes well to honed granite or limestone. A Tudor or stucco home takes well to fieldstone with a rougher finish. Mismatched materials look louder than any amount of investment can fix.",
    ],
    coverImage: "/journal/journal-cover-04.png",
  },
  {
    slug: "modern-vs-traditional-finding-the-right-style",
    title: "Modern, Traditional, or Both — Finding the Right Style",
    date: "April 2, 2025",
    category: "Landscapes",
    readTime: 7,
    excerpt:
      "A landscape's style should rhyme with its house. Here's how we read the architecture before we draw the plan.",
    body: [
      "Two pages into every design we sketch, we're really just answering one question: what does the house want? Style, in landscape design, is downstream of architecture. Get that ordering wrong and the result will feel off no matter how good the planting list is.",
      "Traditional homes — colonial, Cape Cod, Southern brick, Williamsburg — tend to ask for symmetry, layered planting, and material that softens with age. The classic moves work because the architecture itself is symmetrical: a centered entry, balanced windows, a hipped or gabled roof that the eye reads as composed. We design for those homes with paired anchor plantings at the corners, a centered entry walk, layered beds (tall, mid, low), and material that patinas — brick that mellows, stone that lichens, copper lanterns that turn green.",
      "Modern homes — clean lines, larger glass, low rooflines, contemporary stucco or board-and-batten — tend to ask for restraint, geometry, and material that holds its edge. The same paired-anchor planting that flatters a colonial would smother a modern facade. We design those properties with massed single-species planting (forty hostas, not a mixed bed), straight-edge bed lines, large-format paver or honed-stone hardscape, and lighting that reveals planes rather than objects.",
      "Most projects are some honest mix. The architecture is rarely pure — most of our region's homes are traditional Southern brick with a 1990s rear addition, or a 1970s ranch with a contemporary front renovation, or a builder colonial that's been added onto twice. The people living in those houses almost never want a museum-piece period landscape; they want a place that feels like the family's, not the architecture's archive.",
      "Our approach in those mixed cases is to read the front and the back separately. The front of the home is what the street and the appraiser see — it should hold the architecture's discipline. The back of the home is private, lived in by the family, and should serve the way they actually use the space. A traditional brick colonial with a strict symmetric front planting and a relaxed, asymmetric, hosting-oriented rear yard is the right composition for a lot of our clients.",
      "Material is the strongest style signal. Brick reads traditional. Honed bluestone reads transitional. Large-format porcelain pavers read modern. Random-coursed fieldstone reads rustic. We pick the material first, then the planting palette that flatters it. A modern bluestone patio with cottage-garden planting reads confused; the same patio with massed grasses and a single specimen tree reads composed.",
      "Planting palette matters as much as material. Traditional Eastern NC palette: azalea, camellia, dogwood, holly, crepe myrtle, boxwood, hydrangea. Transitional: muhly grass, evergreen Japanese maple, dwarf yaupon, abelia, salvia. Modern: massed liriope, cast-iron plant, ginkgo, soft-leaf yucca, single-specimen ornamental grass. The same plant in the same garden bed reads differently depending on whether it's in mass or mixed.",
      "Color is the third style lever. Traditional landscapes carry a wider color range — pinks, whites, soft yellows across the seasons. Modern landscapes restrict color, often to two or three (green, white, one accent) and lean on form rather than bloom. Color discipline is what most amateur designs miss; an unrestricted palette of bloom colors makes a landscape feel busy in any architectural style.",
      "If you're not sure where your home falls — and most homeowners aren't, because the architecture is honestly mixed — take five photos of your front facade in late-afternoon light from different distances and bring them to the property visit. Style direction is one of the easiest things to read together with a designer when you can both see the house.",
    ],
    coverImage: "/journal/journal-cover-05.png",
  },
  {
    slug: "ultimate-guide-to-hardscaping-materials",
    title: "A Working Field Guide to Hardscaping Materials",
    date: "April 28, 2025",
    category: "Hardscapes",
    readTime: 9,
    excerpt:
      "Natural stone, pavers, brick, gravel, and stamped concrete — when to use which, and what each one costs you long-term.",
    body: [
      "Hardscape materials each have a personality. Stone is the heirloom; pavers are the workhorse; brick is the regional traditional; gravel is the loose informal; stamped concrete is the budget compromise. After twenty years of installs across Eastern NC, we have a clear sense of where each one belongs and where each one fails.",
      "Natural stone — flagstone, bluestone, fieldstone, granite — has the longest service life of anything we install. Properly bedded and pointed, a stone patio is good for fifty to a hundred years and improves visually for the first decade as the stone weathers and the joints settle. Cost runs $35 to $75 per square foot installed in our market, depending on stone selection and pattern complexity. The material itself runs $8 to $30 per square foot wholesale; the rest is base prep, cutting, fitting, and pointing.",
      "Stone's failure modes are few and slow. Joints can open after fifteen to twenty years and need re-pointing — a $4 to $8 per square foot service call. Individual stones can crack under freeze-thaw if water sits in a joint, but in our climate we rarely see this. We have stone walks we built in 2008 that look better today than they did the year after install.",
      "Concrete pavers — Belgard, Techo-Bloc, Pavestone, and similar — are the workhorse of the modern hardscape industry. Properly installed (and that means a proper subgrade, geotextile fabric, four to six inches of compacted base, an inch of bedding sand, edge restraint, and polymeric jointing sand) they carry a 25 to 30 year service life. Cost runs $20 to $45 per square foot installed depending on paver line and pattern complexity. The lower end of that range is comparable to stamped concrete; the upper end approaches natural stone.",
      "Pavers shine in driveways, pool surrounds, and large modern terraces where dimensional consistency matters. They flex independently with freeze-thaw, are infinitely repairable (lift one paver, set it back), and the modern lines (Mega-Arbel, Bristol Stone, Origin) carry surface textures and color blends that read remarkably close to natural stone at a fraction of the cost.",
      "Pavers fail when the base is wrong. The single most common paver failure we are called to repair is settling caused by inadequate subgrade compaction or insufficient base depth. A paver patio set on three inches of base over uncompacted clay will settle within five years; the same patio on six inches of properly compacted base will hold for the life of the install. The base is invisible after the patio is laid; cutting corners there is the most expensive mistake a homeowner can make.",
      "Brick is the regional traditional of Eastern NC. Hand-laid clay brick (not concrete brick paver) carries 75+ year service life, ages beautifully, matches a hundred years of local architecture, and can be laid in patterns — running bond, herringbone, basketweave, soldier course — that change the entire personality of a walk or wall. Cost runs $30 to $60 per square foot installed.",
      "Brick fits some homes and forces itself on others. A brick walk at a brick home reads as continuous architecture. A brick walk at a contemporary home reads as a costume. We tend to specify brick on Southern colonial, Cape Cod, Williamsburg, and traditional ranch homes; not on contemporary, modern, or stucco architecture.",
      "Gravel — pea gravel, decomposed granite, crushed bluestone, river rock — is the most under-used hardscape material in our market. It runs $4 to $12 per square foot installed (versus $20-75 for hard surfaces), drains naturally, requires no mortar or cutting, and has an informal warmth that fits cottage gardens, pool-house paths, and side yards beautifully. The downsides: it migrates without proper edging, doesn't handle wheelchair or stroller traffic well, and needs occasional refresh as it compacts into the base over five to seven years.",
      "Stamped concrete is the budget compromise we recommend least. It costs $12 to $25 per square foot — half of pavers, a third of stone — but the failure modes are unkind. The color fades unevenly over five to ten years, the surface chips at the edges, the texture flattens with traffic, and any failure (a cracked panel, a settled section) requires replacing the whole panel because there's no way to lift and reset individual pieces. We see fifteen-year-old stamped concrete that looks visibly tired in the same projects where the original brick walks at neighboring homes still look good.",
      "When we recommend a material to a client, we weigh four factors: how it'll match the architecture, how it'll perform in our climate, what it'll cost up front, and what it'll cost over a twenty-year horizon. More often than not, the cheapest material at install is the most expensive over time. Our recommendations bias toward materials that compound in beauty rather than depreciate.",
    ],
    coverImage: "/journal/journal-cover-06.png",
  },
  {
    slug: "common-drainage-issues-outdoor",
    title: "Solving the Drainage Problems We See Most",
    date: "May 22, 2025",
    category: "Irrigation",
    readTime: 8,
    excerpt:
      "Standing water at the foundation. Soggy lawn after a storm. Mulch washing into the patio joints. Most of these have one of three fixes.",
    body: [
      "Drainage failures account for more emergency calls than any other category in our work. A single weekend's rain can turn a finished landscape into a problem that takes weeks to diagnose and fix. Almost all of them resolve with one of three solutions, but the third — getting the diagnosis right — is what separates a real fix from a band-aid.",
      "Surface water on the lawn is usually a grading problem. A yard that pools in the same spot after every rain is telling you the soil under the grass slopes the wrong way. The fix is to re-establish positive fall — a minimum of two percent slope away from the house, ideally three to five percent across the first ten feet — and channel runoff to a daylight outlet, a dry well, or a French drain that carries it off the property.",
      "Re-grading is more disruptive than most homeowners expect. We strip the existing turf in the affected area, cut the underlying soil to the correct slope, install whatever drainage infrastructure the design calls for, replace topsoil to grade, and re-seed or sod. Budget for $2 to $6 per square foot for a re-grade depending on volume of cut, plus $400 to $1,500 per drainage outlet. A typical front-yard correction runs $3,000 to $9,000.",
      "Foundation moisture is most often a downspout-and-grade problem combined. Downspouts dumping rainwater within two feet of the foundation send hundreds of gallons per storm against the basement or crawlspace wall. The fix is to extend every downspout via underground PVC at least ten feet from the foundation, daylighting in a French-drain or pop-up emitter where the slope allows, then rebuild the grade against the foundation to drop two inches in the first three feet.",
      "We extend downspouts in 4-inch schedule-40 PVC, buried twelve to eighteen inches deep, fitted with a clean-out at the downspout connection (so the line can be snaked when leaves clog it years later). A typical four-downspout retrofit runs $1,800 to $3,500. The improvement to basement humidity is usually noticeable within a single rain.",
      "Mulch and silt washing into a patio is a flow-volume problem. The water draining off a slope upgrade of the patio is exceeding what the joints can absorb, so it runs across the surface, picks up mulch and bed soil, and deposits it in the joints. The fix is a French drain along the high side of the patio: a two-foot-deep trench, six inches of crushed stone, four-inch perforated pipe wrapped in geotextile, refilled to grade with washed gravel and a thin sod cap. Cost runs $25 to $50 per linear foot.",
      "Crawlspace water is often a perimeter-drain problem. If you're seeing standing water on the crawlspace floor after rains, the underlying issue is usually a missing or failed footing drain. The retrofit is significant — excavate the perimeter to footing depth, install drain tile in a stone bed, waterproof the foundation wall, and backfill with washed stone — and runs $80 to $150 per linear foot of foundation. Done well, the work eliminates the problem permanently.",
      "Standing water in beds is often a soil-composition problem. Our regional clay-heavy soil drains poorly when undisturbed; an unamended bed can hold water at the root zone for days after a rain, killing root systems that need oxygen. The fix is amending the bed at planting time — fifty to one hundred percent compost or pine fines worked eight inches deep — and selecting plants that tolerate occasional wet feet (Itea, river birch, swamp white oak, sweetspire).",
      "Driveway and walkway puddling is usually a sub-base failure. A paver or concrete drive that ponds water after rains has either settled below the original grade or was never sloped correctly to begin with. The fix is lifting and re-bedding the affected area on properly compacted base, with a minimum 1.5 percent cross-slope to a designed drainage line.",
      "Drainage isn't glamorous, but it is the single most common reason a finished landscape ages badly. We look at it first on every property visit — before planting, before patios, before lighting. A landscape installed over a drainage problem is a landscape that will fail in three to five years. A landscape installed after the drainage is solved is a landscape that holds up.",
    ],
    coverImage: "/journal/journal-cover-07.png",
  },
  {
    slug: "top-7-hardscape-features",
    title: "Seven Hardscape Features That Earn Their Footprint",
    date: "June 18, 2025",
    category: "Hardscapes",
    readTime: 9,
    excerpt:
      "Patios, walkways, walls, fire pits, kitchens, water features, pergolas — the elements that show up most often in our finished drawings.",
    body: [
      "Most rear-yard renovations end up with some combination of seven core hardscape elements. Knowing which ones suit the property — and how they relate to each other — is half of design. The other half is editing: most yards we are asked to design come with a wishlist of all seven, and the right plan typically includes three or four.",
      "Patios are the room. Every other feature in the rear yard is built off the patio's geometry, dimension, and material. A patio that's too small (under 250 square feet for a four-person household) feels cramped no matter what's around it; a patio that's too large (over 800 square feet for the same household) feels institutional. The right size for most Eastern NC families is 350 to 500 square feet, sized to comfortably hold a six- or eight-seat dining table plus a four-seat lounge area without feeling tight.",
      "Walkways are the hallways. They tie the patio to the rest of the property — to the rear gate, the side yard, the pool, the garage. A successful walkway is usually 36 to 48 inches wide, gently curved (almost never straight, and almost never sharp-cornered), and lit at night. The mistake we see most often is undersized walks — 24-inch flagstone steps that two people can't walk side by side.",
      "Walls are the punctuation. They hold grade, define edges, and create seating. The most useful wall on a residential property is the seat wall — eighteen to twenty-four inches tall, capped in stone, wrapping the patio at the lawn edge. It serves double duty as architecture and bench seating. Higher walls (three to six feet) belong only where the grade demands it; a tall wall as a decorative move usually reads as fortification rather than design.",
      "Fire features are the focal point that pulls people outside on cooler nights. A fire pit (gas or wood-burning, four to five feet across, set ten to twelve feet from the patio's edge with seating wrapped around) extends the usable season from October through April. A masonry fireplace (wood-burning, ten to twelve feet tall with a real chimney and firebox) does the same on a grander scale and reads as serious architecture. Budget runs $4,000 to $10,000 for a fire pit, $20,000 to $45,000 for a full masonry fireplace.",
      "Outdoor kitchens turn a patio into a destination. The minimum useful outdoor kitchen is a built-in grill plus six feet of stone counter on each side, with a small refrigerator below. The next step up adds a pizza oven, a side burner, and a beverage center. The full version is a U-shaped masonry kitchen with grill, side burner, prep sink, refrigeration, and bar seating — typically $35,000 to $80,000 installed. We recommend kitchens to families who actually cook outside three or more times a week; for the family that grills twice a month, a freestanding cart and a counter cap is enough.",
      "Water features lower the apparent temperature of an outdoor space and provide an aural softener for nearby roads or neighboring noise. A pondless waterfall (recirculating, no visible pond, ten to fifteen feet of stream and a basin into a hidden reservoir) runs $6,000 to $14,000 and is essentially self-maintaining. A formal fountain runs $4,000 to $9,000. A naturalistic pond with planting and biology is more like $20,000 to $50,000 and requires real maintenance — we recommend it only to clients who want the project, not just the result.",
      "Pergolas add architecture overhead and let plants climb. The right pergola is sized to the patio it covers (typically twelve to sixteen feet on a side, eight to nine feet to the underside of the beams) and built in cedar, ipe, or stone-column-with-timber-beam construction. Aluminum pergolas have improved dramatically and are appropriate where wood maintenance isn't tenable. Budget runs $6,000 to $18,000 for cedar, $12,000 to $25,000 for stone-column.",
      "The mistake we see most often is including six of the seven on a single small property. A 600-square-foot rear yard with a patio, walkway, seat wall, fire pit, kitchen, water feature, and pergola is a yard that doesn't have room to live in. Editing is the design — pick three or four features that earn their footprint, give them the room they deserve, and leave the rest for a later phase.",
      "The order of priority that works for most projects: patio first (the room), then walkways (the connections), then either a fire feature or a kitchen depending on how the family hosts, then walls and seating to define the patio's edges, then planting to soften everything, then lighting to extend the day. Pergolas, water features, and pools come last — they're the features that work best on a property already composed.",
    ],
    coverImage: "/journal/journal-cover-08.png",
  },
  {
    slug: "five-creative-ways-to-boost-curb-appeal",
    title: "Five Quiet Ways to Lift the Front of Your Home",
    date: "July 14, 2025",
    category: "Landscapes",
    readTime: 8,
    excerpt:
      "Not every curb-appeal upgrade has to be a renovation. A handful of careful moves can transform the way a house reads from the street.",
    body: [
      "Most homeowners assume curb appeal requires a full landscape redesign. In our experience, five smaller decisions deliver eighty percent of the result — and the budget for all five together is often less than what one large project would cost.",
      "First, define the entry. A clean walk, a pair of planters at the door, and consistent material at the threshold tell the eye where to go. The entry is the part of the home that does the most work for the appraiser, the buyer, and the daily homeowner — and it's the most-neglected part of most front yards. A walk that's at least 36 inches wide, straight or gently curved (no sharp angles), in a material that matches the home's existing brick or stone, transforms the way a house reads from the street.",
      "If the existing walk is poured concrete that's cracked or stained, the highest-leverage replacement is hand-laid brick or concrete pavers — $35 to $70 per square foot installed for a typical 50-square-foot front walk. The visual lift is immediate; the project takes three to five days; and the return at resale is well above 70 percent of cost in our market.",
      "Second, frame the facade. Symmetrical anchor planting at the corners reads as composition rather than decoration. A pair of upright shrubs (Sky Pencil holly, dwarf Alberta spruce, columnar yaupon) at the home's outer corners gives the architecture vertical anchors. A pair of small specimen trees (Japanese maple, Chinese fringe tree, dogwood) ten to fifteen feet out from the home, framing the front elevation, gives the eye depth.",
      "Anchors work because they tell the eye how to read the house. The corners say \"this is the building,\" the trees say \"this is the property,\" and everything between them feels composed. The plants don't have to be expensive — three-gallon shrubs and seven-gallon trees, set in well-prepared soil, will fill in over two to three seasons.",
      "Third, handle the lawn edge. A clean steel, brick, or paver edge between bed and lawn separates the elements crisply. A sloppy bed edge that wobbles between mulch and turf reads as unfinished, no matter how good the planting is. We install steel edging (1/8\"-thick, 4\" tall, hand-bent on site) in long sweeping curves; budget runs $4 to $8 per linear foot installed.",
      "Fourth, layer the planting in heights — tall, mid, low — so the eye reads depth rather than a flat green band. A foundation bed with a single-height planting (twenty boxwoods at the same height in a straight line) reads as a hedge. The same bed with three layers — boxwood backdrop, mid-height azaleas in front, low ground cover spilling over the edge — reads as composed landscape. The visual difference is enormous; the cost difference is negligible.",
      "Fifth, light it. A few well-aimed uplights and a path wash transform the front elevation after dark. Most listings are photographed at twilight; most homeowners arrive home in headlights at night. Lighting is the curb-appeal upgrade that gets used the most.",
      "The minimum useful front-elevation lighting plan: two architectural up-lights aimed at the home's outer corners (revealing the depth of the facade), one accent up-light on a specimen tree at the corner of the lot, two to four pathway fixtures along the walk, and lantern fixtures at the entry door and any column caps. Total fixture count: 8 to 12. Total budget: $3,500 to $7,500 installed in low-voltage wired with proper transformer.",
      "All five of these moves together typically run $8,000 to $18,000 — meaningful money, but a fraction of a full front-yard redesign. And they tend to compound: a defined walk makes the framing planting work harder; an edged bed makes the layered planting read as composition; lighting makes everything visible after dark. Done together, the front of the house feels finished.",
    ],
    coverImage: "/journal/journal-cover-09.png",
  },
  {
    slug: "low-maintenance-landscaping-ideas",
    title: "Low-Maintenance Landscaping for the Time You Don't Have",
    date: "August 8, 2025",
    category: "Landscapes",
    readTime: 9,
    excerpt:
      "A landscape that needs less is one designed differently. Here's what to ask for.",
    body: [
      "Low-maintenance is not a planting style — it's a design discipline. The lowest-maintenance gardens we draw share six traits, and most of them are decisions made before the first plant goes in the ground.",
      "First, native and adaptive plants do most of the work. Plants chosen for the soil and rainfall they evolved in need a fraction of the inputs an exotic palette demands. Our regional natives — Itea, sweetspire, oakleaf hydrangea, native azalea, dwarf yaupon, muhly grass, switchgrass — thrive in Eastern NC clay with no amendments and no supplemental watering after their first establishment season.",
      "We typically draw beds with a 70/30 split: roughly seventy percent natives and adaptives, thirty percent classic landscape standards (boxwood, camellia, crepe myrtle) for the architectural moments. The result is a planting that handles its own pests, holds up to summer heat without daily watering, and rarely needs replacement.",
      "Second, beds are grouped by water need (called hydrozoning). Mixing a thirsty Japanese fern with a drought-tolerant lavender in the same bed forces you to over-water the lavender or under-water the fern. Plant by hydrology — wet-tolerant species in low spots and shaded northern exposures, drought-tolerant species on slopes and southern exposures, moderate-water species in the middle — and the irrigation system can run efficient zones rather than one-size-fits-all schedules.",
      "Third, mulch generously and renew annually. A three-inch layer of natural shredded mulch (pine bark fines, hardwood mulch, or pine straw — not dyed mulch, which fades and contains chemicals) suppresses weeds, holds moisture, regulates root-zone temperature, and slowly amends the soil as it breaks down. The annual mulch refresh is the single most important maintenance task on a low-maintenance landscape.",
      "Pine straw is our most-used mulch in Eastern NC. It's local, inexpensive ($5-7 per bale, covers about 40 square feet at a 3-inch depth), holds form on slopes that shredded mulch washes off of, and acidifies the soil slowly — which most of our regional plants prefer. Hardwood mulch is the alternative for properties where pine straw doesn't fit the architecture.",
      "Fourth, install a smart irrigation system. The five hundred dollars a year in saved labor pays the system back inside a season. A modern system runs on a Wi-Fi controller (Hunter Hydrawise, Rain Bird ESP-Me, Rachio) that pulls local rainfall data and adjusts each zone's schedule based on weather. Drip lines in beds, rotors on lawn, microspray on tight foundation plantings. A typical residential system runs $3,500 to $9,000 installed and uses 30 to 50 percent less water than a manually-set system.",
      "Fifth, edge the beds with steel or hand-cut spade edge. A bed line that wobbles between mulch and turf is a maintenance problem — the lawn creeps into the bed, the mulch washes onto the lawn, and the whole edge needs constant cleanup. A hard edge (steel edging or twice-yearly hand-cut spade) reduces edge maintenance to nearly nothing.",
      "Sixth, choose plants that don't need pruning to keep their shape. The single biggest source of garden maintenance is a plant pruned to a size it doesn't naturally want to be — a Knock Out rose pruned to a four-foot ball, a holly hedge pruned to a flat top. Pick plants whose mature size matches the space they're in, and pruning becomes an annual cleanup rather than a monthly chore.",
      "What to skip: high-maintenance favorites that look great on paper but eat hours. Roses (most varieties — exceptions are Knock Out and rugosas), boxwood balls in massed plantings (boxwood blight has made these a real risk in our region), tropical plants that need overwintering, lawn-edge planting beds that depend on weekly weeding, and any flowering perennial that needs deadheading to keep blooming.",
      "What to plant generously: ornamental grasses (cut once a year in February, otherwise zero attention), evergreen ground covers (mondo, liriope, creeping juniper, ajuga — they crowd out weeds and never need replanting), structural evergreens (camellia, dwarf yaupon, dwarf cryptomeria), and slow-growing shrubs (hydrangea, oakleaf hydrangea, dwarf gardenia). The garden that combines these elements typically needs four to six visits per year of professional maintenance, plus the homeowner's own light tidying — a fraction of what a high-maintenance border demands.",
    ],
    coverImage: "/journal/journal-cover-10.png",
  },
  {
    slug: "efficient-irrigation-systems",
    title: "What Makes an Irrigation System Actually Efficient",
    date: "September 4, 2025",
    category: "Irrigation",
    readTime: 8,
    excerpt:
      "Efficient is a marketing word. We're more interested in the engineering.",
    body: [
      "An efficient irrigation system is one whose water finds the root, when the root needs it, and not before. That sounds obvious; few systems are designed to do it. After designing irrigation for hundreds of Eastern NC properties, we have a clear sense of what efficiency actually requires — and where most installations fail.",
      "Efficiency starts at the head. Pressure-regulated heads with matched precipitation rates put down the same amount of water across a zone. The cheap heads — non-pressure-regulated, mismatched precipitation — over-water the heads closest to the supply and under-water the ones at the end of the line, leaving stripes of brown grass between strips of saturated. The fix is specifying Hunter MP Rotators, Rain Bird Rotary Nozzles, or Toro Precision spray nozzles — all of which deliver water at a matched rate regardless of distance from the valve.",
      "It continues at the controller. Smart systems read local rainfall, soil moisture, and evapotranspiration data and adjust each zone's schedule daily. A non-smart controller waters on a fixed weekly schedule whether it rained yesterday or didn't. The smart upgrade — Hunter Hydrawise, Rain Bird ESP-Me Wi-Fi, Rachio 3 — typically costs $250 to $500 installed and reduces water use by 25 to 40 percent in our climate.",
      "Zone design is the engineering most installers shortcut. A zone should serve a single plant type, a single hydrozone, and a single sun exposure — never mixed. The lawn rotors run on their own zone. Each bed runs on a drip zone matched to the plant water needs. Foundation shrub plantings under the eaves (which receive no rain) get their own dedicated zone. A typical residential property needs 8 to 14 zones, not the 3 to 4 that most older systems were built with.",
      "Drip and microspray go in beds. Rotors on lawn. Bubblers on tree wells. Each plant type gets its own zone, set on its own schedule. The result is a system that uses substantially less water and produces healthier plants. We typically draw drip zones running 30 to 60 minutes once or twice a week (deep, infrequent watering encourages deep root systems); rotor zones run 20 to 35 minutes two to three times a week depending on season.",
      "The most under-installed component on residential systems is the master valve. A master valve sits at the supply, downstream of the backflow preventer, and shuts off automatically when the system isn't actively watering. Without it, every zone valve in the system is constantly under pressure — and a single failed zone valve can dump hundreds of gallons of water onto a single spot of lawn over a weekend before anyone notices. A master valve costs about $150 to $300 installed and is the cheapest insurance you can buy for a system.",
      "Backflow prevention matters for both code and water quality. Eastern NC requires a reduced-pressure backflow preventer (RPZ) on every irrigation system tied to a potable water supply. The device prevents irrigation water from being siphoned back into the home's drinking water if pressure drops in a main break. Skipping it isn't a budget choice; it's a code violation and an actual safety risk.",
      "Winterization is non-negotiable in our climate. Lines need to be blown out with compressed air every November before the first hard freeze, and reactivated in March once frost risk has passed. Without winterization, line freezes split PVC, ruin valve diaphragms, and crack backflow preventer bodies. The repair on a hard-frozen system runs $800 to $3,000; the annual winterization service is $150 to $300. The math doesn't favor skipping it.",
      "Flow sensors are the most-overlooked diagnostic upgrade. A flow sensor on the main line tells the controller how much water each zone is using, and shuts the system down if a zone exceeds its expected flow (a broken head, a cut line, a stuck valve). On a system without flow sensing, a head broken by a passing mower can dump 12-20 gallons per minute of water onto a single spot for hours before anyone catches it. Flow sensors are $200 to $500 installed and are standard on every new system we draw.",
      "The right way to evaluate an existing system is to schedule a wet-test audit. We turn each zone on while a designer walks the property, watching for over-spray onto walks, under-coverage at the corners, head spacing problems, mismatched precipitation rates, and any pressure or distribution issues. A typical audit takes two hours and identifies fixes that usually pay for themselves within two seasons of water savings.",
    ],
    coverImage: "/journal/journal-cover-11.png",
  },
  {
    slug: "natural-stone-in-hardscape-projects",
    title: "Why We Keep Coming Back to Natural Stone",
    date: "October 1, 2025",
    category: "Hardscapes",
    readTime: 8,
    excerpt:
      "The argument for natural stone — beauty, durability, eco-credentials — and where it isn't the right choice.",
    body: [
      "Natural stone has the longest service life of any hardscape material we install. That alone would justify the cost premium for most clients. The other reasons are quieter, and they explain why stone is still the material we recommend on the projects where the budget allows it.",
      "Stone weathers to a finish you cannot fake. A flagstone patio at year ten is more beautiful than at year one. The mortar joints have settled, the surface has acquired a soft patina, the lichens and mosses that establish in the cooler joints make the patio feel like it has always been there. Pavers — even excellent ones — are at their best when they're brand new; their finish slowly degrades from there. Stone goes the other way.",
      "Stone is also genuinely sustainable. It is quarried from regional sources, not manufactured. There's no resin, no plastic, no surface paint that fades to chalk in twenty years. When a stone walk eventually does need rebuilding (typically after fifty-plus years of service), the stones themselves are reusable — pulled, cleaned, and re-set on a new base. The same is rarely true of pavers or stamped concrete.",
      "We work in five primary stone categories in Eastern NC: Tennessee fieldstone (a warm tan-brown sandstone, the most-used material in our region for walls and walks), Pennsylvania bluestone (the cool blue-gray slate-like stone that's standard for patios and treads), Georgia granite (cool gray, formal, used for steps and columns), Virginia or NC fieldstone (regional rounded river stone for naturalistic walls), and travertine (the warm cream Italian stone we use almost exclusively on pool decks).",
      "Cost runs higher than pavers but not by as much as homeowners expect. Pennsylvania bluestone laid as a patio runs $35 to $55 per square foot installed in our market, depending on stone selection (random vs. dimensional), pattern complexity, and base prep. A premium concrete paver installation lands at $25 to $40 per square foot. The difference — $10 to $20 per square foot, or roughly $5,000 to $10,000 on a 500-square-foot patio — is real money but proportional to the longer service life and the better aging.",
      "Stone fails differently than pavers. Pavers fail by settling (the base wasn't right) or by surface degradation (efflorescence, color fade). Stone fails by joint opening — typically after fifteen to twenty years of freeze-thaw. The fix is a re-pointing service, $4 to $8 per square foot, that restores the patio to like-new condition without disturbing the stones themselves. Most of our stone walks built in the early 2010s have not yet needed this service; when they do, it'll be a one-day job per several hundred square feet.",
      "Stone is not always the right choice. Driveways, large modern terraces, and pool decks often want a paver — for cost, for dimensional consistency, or for aesthetic reasons. We almost never specify natural stone in driveways (the cost and the susceptibility to oil staining argue against it). We rarely specify it for large modern terraces where the architecture wants the discipline of large-format dimensional units. We use it for pool decks only when the stone is specifically rated for chlorine and slip resistance (travertine is the standard).",
      "Selection matters more than budget. The same stone, in different selections, can read entirely differently. \"Random irregular bluestone\" reads informal and traditional. \"Thermal-finished dimensional bluestone\" reads modern and precise. \"Tumbled fieldstone\" reads cottage. The same patio can be designed in three different bluestone selections and produce three completely different finished projects. We bring physical samples to every consultation so the choice is made looking at the stone, not at a catalog photo.",
      "If natural stone is in your budget for one project on the property, the highest-impact place to spend it is the entry walk — the part of the property the eye reads most often, and where the long-term aging payoff is most visible. Patios, walls, and pool decks are also strong candidates. Driveways and large utility surfaces are usually not.",
    ],
    coverImage: "/journal/journal-cover-12.png",
  },
  {
    slug: "choosing-the-right-masonry-stone-brick-or-concrete",
    title: "Stone, Brick, or Concrete — Choosing Masonry that Lasts",
    date: "October 28, 2025",
    category: "Masonry",
    readTime: 8,
    excerpt:
      "Three materials, three personalities. A working field guide to the masonry choices that come up most often in our drawings.",
    body: [
      "Most masonry conversations begin with a single question: stone, brick, or concrete? The answer almost always depends on the house — its era, its existing material, the way light falls across the elevation in the late afternoon. Here's how we think about each, and where each one belongs.",
      "Natural stone is the longest-running of the three. Limestone, fieldstone, and flagstone weather to a finish that synthetic materials can only approximate. The trade-off is cost and unpredictability — stone arrives in the dimensions nature gave it, which means it has to be cut and fitted on site. A skilled mason can fit irregular stone in patterns that look effortless; an unskilled one produces walls that look cobbled together. The difference between the two is roughly the difference between a $35 per-square-foot installation and a $75 one.",
      "Stone fits homes whose architecture has weight — Southern brick colonials, stone or stucco-and-stone facades, Cape Cods with cedar siding, Tudor-style homes. It fits less well on builder-grade ranch houses or contemporary stucco, where a stone wall reads as decoration grafted onto architecture that doesn't need it. Material has to match the home's fundamental seriousness.",
      "Brick is the quiet workhorse of Eastern North Carolina. It matches a hundred years of local architecture, ages well in our humidity, and can be laid in patterns (running bond, herringbone, basketweave, soldier course) that change the entire personality of a walk or wall. We specify brick on the majority of our masonry projects — most of our region's homes are brick-veneer architecture, and the simplest path to a finished result is brick on brick.",
      "The detail that makes brick masonry succeed or fail is the mortar joint. A standard 3/8-inch concave joint in a color matched to the brick (usually dark gray or buff) reads as continuous architecture. A wider joint (1/2-inch or more), a contrasting color (white joint on red brick), or a sloppy strike line (uneven, unfinished joints) immediately reads as amateur. We specify mortar color from a ten-color palette to match the home's existing brick exactly.",
      "Brick selection is its own category of expertise. There are roughly 200 brick lines on the regional market — different colors, sizes, textures, blends. The brick that's right for a 1920s Williamsburg colonial is different from the brick that fits a 1950s ranch is different from the brick that suits a 2010 builder colonial. We bring brick samples on every site visit, set them against the home, and let the home tell us which one belongs.",
      "Concrete — particularly modern interlocking pavers and engineered cast stone — has come a long way. The newest products carry surface textures and color blends that read remarkably close to natural stone, at a fraction of the cost. We use them often in driveways and pool surrounds where the dimensional consistency matters and the budget for stone isn't there.",
      "Pavers from the better lines (Belgard Mega-Arbel, Techo-Bloc Blu Slate, Bristol Stone) are essentially indistinguishable from natural stone at six feet of viewing distance. Up close they're identifiable as pavers — the surface texture is more uniform than natural stone, the color blend repeats — but the trained-eye difference is small. The cost difference is large: a paver patio that approximates natural stone runs $25 to $40 per square foot installed, versus $35 to $75 for the equivalent in real stone.",
      "Where pavers fail to compete is in the long-aging finish. A paver installed in 2010 looks essentially the same in 2025 — the surface texture, the color blend, the dimensions. A natural-stone walk installed in 2010 looks better in 2025 than it did at install, because the stone has weathered, the joints have settled, and lichen has filled the cooler shadows. If the patio is meant to age into the property, stone wins. If the patio is meant to look as installed for as long as possible, pavers do.",
      "The honest answer to \"which one\" is usually \"walk the property and let's see.\" Material is a conversation with the house, not a catalog choice. We're happy to bring samples of all three — stone, brick, paver — to a consultation and walk you through the tradeoffs as they apply to your specific project, your specific home, and your specific budget.",
    ],
    coverImage: "/journal/journal-cover-13.png",
  },
  {
    slug: "the-art-of-uplighting",
    title: "The Art of Uplighting — How to Make a Landscape Shine",
    date: "November 22, 2025",
    category: "Lighting",
    readTime: 7,
    excerpt:
      "Uplighting is the most misused tool in outdoor lighting. Done right, it transforms a property after dark.",
    body: [
      "Uplighting fails when there are too many fixtures, too cool a color temperature, and no thought given to where the light is aimed. Done well — narrow beam, warm light, fewer fixtures — it draws the eye exactly where it should be and turns a property into something else after dark.",
      "The first principle: the fixture should be invisible; the lit object should be the only thing the eye sees. We bias toward 2700K, narrow-beam fixtures with internal louvers and shrouds to control glare. The wrong fixture (wide-beam, no shroud) lights the trunk of the tree, the mulch around it, and any walking eye that happens to glance at it. The right fixture (narrow-beam, fully shrouded) lights only the canopy, leaving the ground dark and the source unseen.",
      "Specific fixtures we use most often: FX Luminaire LF (PAR36 LED, 2700K, narrow 15-degree beam, fully louvered) for tree uplighting; Vista 5141 (MR16 LED, 12-degree beam, brass housing) for architectural up-lighting on facades and walls; Kichler 15384 (cast brass, fully shielded) for accent on specific architectural features. All three carry warranty coverage that matters when LEDs eventually fail.",
      "Beam selection is the single biggest variable. A 12 or 15-degree narrow beam reads as architectural lighting; a 38 or 60-degree wide beam reads as decoration. Most homeowner-installed systems use wide beams because they're cheaper and easier to aim. A professional install uses narrow beams selectively — usually 12 to 24 degrees on tree trunks, 36 to 60 degrees on broad architectural surfaces.",
      "Color temperature is non-negotiable: 2700K, every fixture, every project. Cooler temperatures (3000K, 4000K, 5000K) immediately read as commercial — a hospital walkway, a strip-mall parking lot, a gas station. 2700K reads as candlelight, which is what the eye expects after dark. We have replaced more 4000K landscape fixtures than any other single problem in our work; they cost less but produce a worse result.",
      "Fewer fixtures, better aim. A property with eighteen up-lights produces a busy, over-lit, decorative landscape. The same property with six well-placed up-lights — one on each of two specimen trees, one on each of two architectural columns, one on a focal wall, one on the address column — produces a composed, restrained, beautiful night scene. Editing is the design.",
      "The best subjects for uplighting in our region: large-trunk specimen trees (oak, sycamore, magnolia, mature crepe myrtle), architectural columns (especially brick or stone), exterior wall planes (especially textured brick or stone veneer), and water features (stone spillways, fountain bowls). The worst subjects: open lawn (no return on the investment), foundation shrub mass (lighting a hedge from below makes it look like a green wall, not a feature), and small ornamental trees (you can't uplight a 6-foot dwarf Japanese maple successfully).",
      "Glare control matters more than fixture quality. A $400 fixture with no glare control produces a worse-looking result than a $150 fixture with proper louvers and shrouds. The fixture has to be invisible from the angles where people walk and sit; if you can see the bulb from the patio, you've lost the effect. We aim every fixture during install and re-aim annually as planting matures.",
      "A well-uplit specimen tree at the corner of a lot can do more for a property's evening presence than ten ordinary path lights. We sometimes recommend that clients with limited lighting budgets put the entire allocation into three carefully-aimed up-lights and skip pathway fixtures entirely. The composition you get from three good up-lights is stronger than the composition you get from twelve average path lights.",
    ],
    coverImage: "/journal/journal-cover-14.png",
  },
  {
    slug: "the-benefits-of-drip-irrigation",
    title: "Drip Irrigation — Eight Reasons We Specify It",
    date: "December 16, 2025",
    category: "Irrigation",
    readTime: 8,
    excerpt:
      "Drip systems use a fraction of the water and produce healthier plants. Here's why they show up in almost every irrigation plan we draw.",
    body: [
      "Drip irrigation is, simply, the best way to water beds, vegetable gardens, and tree wells. We specify it on every project we touch with a planting plan, and we replace older spray-only systems with drip retrofits as a regular service. Here are the eight reasons.",
      "First, water efficiency. Drip irrigation uses 30 to 50 percent less water than spray irrigation because it puts water at the root rather than over the canopy. There's no overspray onto walks or driveways, no evaporation from leaves, no waste from hitting non-plant surfaces. On a typical residential property, the annual water savings from converting bed irrigation from spray to drip pays back the conversion cost in two to four years.",
      "Second, foliar disease reduction. Wet leaves are the start of most plant fungal problems — black spot on roses, powdery mildew on phlox, leaf spot on hydrangea. Drip irrigation puts water on the soil, never on the leaf. We've watched landscapes where chronic plant health problems simply disappeared after a spray-to-drip conversion, because the underlying issue was wet foliage at 4 AM, not anything wrong with the plants themselves.",
      "Third, weed reduction. Drip waters specifically the cultivated plants in the bed; the spaces between them stay dry. Weed seeds need water to germinate, and a bed that's only watered at the root zones of the wanted plants suppresses weeds substantially. Most of our drip-irrigated beds need a fraction of the weeding their spray-irrigated equivalents required.",
      "Fourth, precision. Drip can zone individual plants if their needs are different. A new tree planted into an established bed can run on its own quarter-inch supply line for the first two years, then be cut off the system once established — without disturbing the rest of the bed's irrigation. A vegetable garden can run a separate, shorter, daily-cycle drip zone alongside an ornamental bed running weekly. Spray irrigation can't make those distinctions.",
      "Fifth, it works in tight beds where a spray head would overshoot. A two-foot-wide foundation bed against the home is impossible to spray-irrigate without dumping water on the foundation, the siding, or the walk. Drip handles it easily — a single quarter-inch line with quarter-gallon-per-hour emitters at each plant.",
      "Sixth, invisibility. Drip lines lay under mulch and disappear from view. There are no spray heads popping up around the property, no over-spray patterns visible on hardscape, no fixtures to mow around. The system is essentially invisible — until you turn it on with the controller, in which case you might briefly see the soil darkening at each emitter location.",
      "Seventh, daytime operation. Spray irrigation has to run before dawn or after dusk to avoid evaporation losses. Drip can run any time — including the middle of the day — without significant water loss. This makes it possible to schedule supplemental watering during heat waves or after fertilization without scheduling around the evaporation cycle.",
      "Eighth, repair simplicity. A failed drip emitter is a $0.50 part that snaps in or out by hand. A failed spray head is a $15-30 part that requires digging up the head, unscrewing it from the riser, and re-screwing the new one — typically a 30-minute service call. Over twenty years of system life, the maintenance cost difference adds up substantially.",
      "There are still places where spray is correct — open lawn, large turf zones, bed shapes that drip can't economically cover (typical lawns over 1,500 square feet). But inside garden beds, foundation plantings, vegetable gardens, and tree wells, we very rarely draw spray. The water savings, the disease reduction, and the precision all argue against it.",
      "If your existing system is spray-only and was installed before 2015, a drip retrofit is one of the highest-return upgrades you can make. Budget runs $1,500 to $4,000 for a typical residential property to convert all bed irrigation to drip while keeping the existing lawn rotors. Annual water savings, depending on rates and consumption, typically run $300 to $700 — paying the retrofit back in three to five years and producing healthier plants for the duration.",
    ],
    coverImage: "/journal/journal-cover-15.png",
  },

  // ─────── New SEO-targeted posts (Jan – May 2026) ───────────────

  {
    slug: "when-to-plant-eastern-north-carolina",
    title: "When to Plant in Eastern North Carolina — A Month-by-Month Guide",
    date: "January 14, 2026",
    category: "Landscapes",
    readTime: 10,
    excerpt:
      "Pitt County sits in USDA Zone 8a. Here's a month-by-month plant-by-plant calendar for the Eastern NC growing year.",
    body: [
      "Eastern North Carolina sits primarily in USDA Hardiness Zone 8a, with the coastal counties touching 8b. That puts our average annual minimum temperature between 10°F and 15°F, our last frost between March 28 and April 8 most years, and our first fall frost between November 5 and 15. Those windows define the planting calendar for most of what goes in the ground in our region.",
      "January. The hardest month to plant in our climate, but not a no-go month. Bare-root fruit trees, dormant ornamentals (deciduous trees and shrubs available B&B at the nursery), and dormant grasses can go in the ground any time the soil isn't frozen — which in our region is almost always. The advantage of January planting is that the plant settles its roots before spring leaf-out, dramatically reducing transplant shock. The disadvantage is the visual flatness of a bare-stem winter planting.",
      "February. Our recommended month for the heaviest dormant planting work — fruit trees, shade trees, deciduous shrubs (hydrangea, lilac, viburnum), and perennial divisions of grasses (muhly, switchgrass, miscanthus). Soil is workable, root activity is starting just below the frost line, and the planting will be six weeks settled by leaf-out. Late February is also the cutoff for hard-pruning summer-blooming shrubs (butterfly bush, summer-blooming spirea, knock-out roses).",
      "March. The first major planting month for most perennials and cool-season annuals. Pansies, snapdragons, and dianthus go in beds. Cool-season lawn overseed (turf-type tall fescue) happens in early March. Vegetables in the cool-season family (lettuce, spinach, peas, broccoli, cabbage, carrots) can direct-seed mid-March in our region. Last hard pruning of crepe myrtles and any spring-flowering shrubs that bloom on new wood.",
      "April. The big planting month. After the last frost (typically the first week of April), virtually anything goes in the ground. Foundation shrubs, perennial beds, ornamental trees, warm-season annuals (begonias, impatiens, geraniums), tomatoes, peppers, summer vegetables. Soil temperatures are climbing into the 60s, root activity is at its annual peak, and rainfall is typically generous. We do roughly 30 percent of our annual planting volume in April.",
      "May. The last good month for most planting until fall. By late May, soil temperatures are rising fast, evaporation is high, and any plant going in the ground will need supplemental watering through summer to establish. Plant before May 20 if you can; after that, wait for fall. Late May is fine for established-from-pot tropicals (canna, hibiscus, tropical hibiscus), warm-season grasses, and any plant that thrives in heat (ornamental grasses, salvias, lantana, zinnias).",
      "June through August. Our slow planting season. Heat stress on new transplants is severe, and daily watering is required to establish anything planted. We typically do only emergency replacement work, container plantings, and tropical color rotation in these months. The exception: plants going into properly-irrigated beds with reliable drip systems can establish even in summer if watered carefully — but we steer most clients toward waiting for September.",
      "September. The other major planting month, often better than April for woody plants. Soil is still warm enough for active root growth (mid-70s into October), evaporation is dropping, and rainfall typically picks up. Trees and shrubs planted in September spend six to eight weeks growing roots before going dormant — a head start that April planting can't match. We typically do 25 percent of our annual planting volume in September and early October.",
      "October. The best month of the year for shrub and tree planting. Cool-season annuals (pansies, mums, ornamental cabbages and kales) go in. Cool-season lawn overseed happens late September into early October. Perennial divisions of warm-season ornamental grasses can be done late October once the foliage starts to brown.",
      "November. The transition month. Bulb planting (daffodils, tulips, alliums, hyacinths) hits its window mid-November. Last good month for tree planting before winter dormancy is fully set. Final lawn fertilization for cool-season fescue. We do most of our late-fall mulch refresh during November so beds are protected before the first frost cycle.",
      "December. Slow but not zero. Bare-root fruit trees, holiday containers (paperwhites, amaryllis, evergreen arrangements), and dormant deciduous trees can go in any time the ground isn't frozen. The major work in December is pruning evergreens, structural pruning of dormant deciduous trees, and bringing tropicals indoors before the first hard freeze.",
      "The single most important guidance: plant in seasons when the climate is doing the work for you (March-April, September-October), not when you're fighting it (June-August). Yardie does a property visit at no cost; if you have a planting project in mind, we'll help you plan the season for it.",
    ],
    coverImage: "/journal/journal-cover-16.png",
  },

  {
    slug: "best-plants-for-pitt-county-soil",
    title: "Best Plants for Pitt County Soil — A Local Field Guide",
    date: "February 11, 2026",
    category: "Landscapes",
    readTime: 11,
    excerpt:
      "Pitt County soil is mostly Norfolk and Goldsboro series — sandy loam over a clay subsoil, slightly acidic, moderately drained. Here's what thrives in it.",
    body: [
      "Most of Pitt County and the surrounding Eastern NC region sits on coastal-plain soil — predominantly Norfolk fine sandy loam, Goldsboro fine sandy loam, and Lynchburg silt loam in the lower spots. These are sandy-surfaced, slightly acidic (pH 5.5 to 6.5 typically), moderately well-drained over a clay subsoil at 12 to 36 inches. They are easy to dig, hold moisture moderately well, drain reasonably after rain, and respond well to organic amendment. They are also the soils that the regional native plant palette evolved in, which is why our regional natives generally outperform exotic alternatives in our gardens.",
      "Knowing what your soil actually is matters more than most homeowners realize. A plant rated for full sun in well-drained soil will struggle in a low spot in our region (where the silt loam holds water for days after rain). A plant rated for moist, rich woodland soil will struggle on a sandy ridge in the middle of the property. The single best $20 you can spend on a planting plan is a soil test from the NC Cooperative Extension — they're available through Pitt County Extension and turn around in two weeks.",
      "Below is the plant list we lean on most heavily for Pitt County properties, organized by category and tested in our region's actual soil.",
      "Foundation shrubs (evergreen, three to six feet, year-round structure). Boxwood (American 'Suffruticosa' or 'Green Velvet' — but watch for boxwood blight, which has hit our region hard since 2018), dwarf yaupon holly ('Schillings' or 'Bordeaux'), Japanese holly ('Soft Touch' or 'Helleri' — newer cultivars are blight-resistant), camellia (sasanqua varieties for fall bloom, japonica for winter), Indian hawthorn ('Eleanor Tabor' is the most reliable), dwarf cleyera, dwarf gardenia ('Daisy' or 'Frost Proof').",
      "Mid-size flowering shrubs (three to six feet, spring or summer bloom). Encore azalea (the modern reblooming series — more reliable than the traditional April-only varieties), hydrangea (oakleaf hydrangea is our top pick for native, with 'Snow Queen' being our default; bigleaf hydrangea works but needs more water), abelia ('Edward Goucher' or 'Kaleidoscope'), summersweet ('Hummingbird'), itea ('Henry's Garnet' — outstanding fall color, native, deer-resistant), gardenia (full-size 'August Beauty'), spirea ('Magic Carpet' for its color, 'Anthony Waterer' for traditional pink bloom).",
      "Large flowering shrubs and small trees (eight to fifteen feet). Crepe myrtle (the dwarf series — 'Acoma,' 'Hopi,' 'Catawba' — for smaller yards; full-size 'Natchez,' 'Muskogee,' 'Tuscarora' for grander spaces), dogwood (Cornus florida — our native flowering dogwood, prefers part shade), fringe tree (Chionanthus virginicus — native, white spring bloom, excellent in tight spaces), Chinese fringe tree (similar but more disease-resistant), redbud ('Forest Pansy' for the dark foliage, 'Rising Sun' for chartreuse), yaupon holly trained as multi-trunk specimen, eastern red cedar for screening.",
      "Shade trees (canopy, twenty to fifty feet). Live oak (slow-growing, ultimately enormous, the right tree for an ambitious property), willow oak (faster, smaller), tulip poplar (very fast, big eventual size, native), red maple (October Glory or Autumn Blaze for reliable fall color), American sycamore (riparian, not for tight lots), bald cypress (for wet sites — handles seasonal flooding beautifully), American beech (slow but spectacular in maturity).",
      "Ornamental grasses (low-maintenance, dramatic year-round form). Muhly grass (Muhlenbergia capillaris — pink fall bloom, native, outstanding in mass plantings), switchgrass ('Heavy Metal' for blue-gray foliage, 'Northwind' for upright form), little bluestem ('Standing Ovation' for size), feather reed grass ('Karl Foerster' is the classic), Mexican feather grass for finer texture, miscanthus ('Morning Light,' 'Adagio,' or 'Gracillimus' depending on size needs).",
      "Perennials (mid-size flowering, three-season interest). Coneflower (Echinacea — native, the new cultivar series 'Cheyenne Spirit' and 'Sombrero' are reliable), black-eyed Susan (Rudbeckia 'Goldsturm' for the standard, 'Henry Eilers' for the unusual quill petal), salvia (perennial varieties — 'May Night,' 'Caradonna,' Salvia leucantha), catmint ('Walker's Low' is our default), Russian sage ('Little Spire' for dwarf, full-size for larger beds), liriope (used as ground cover or border edge), perennial geranium ('Rozanne' is unmatched for season-long bloom).",
      "Ground covers (low, spreading, weed-suppressing). Mondo grass (dwarf 'Nana' for tight spaces, regular for larger), liriope (Big Blue or Variegated for foliage interest), creeping juniper (for slopes and tough sites), ajuga ('Catlin's Giant' or 'Burgundy Glow'), creeping sedum (for sunny dry spots), pachysandra (for shaded areas — but slow to establish in our heat).",
      "Plants we've moved away from in Pitt County: Bradford pear (storm-fragile and now considered invasive in NC), most azaleas of the older non-Encore varieties (one bloom cycle, then plain green for ten months), traditional rose hybrids (constant disease and pest pressure in our humidity), most Japanese maples in full sun (they scorch — keep them in part shade), Leyland cypress (overplanted, prone to canker disease in our humidity), Bermuda grass in front yards (invasive into beds, hard to control without herbicide).",
      "Plants we wish more people would plant: Itea ('Henry's Garnet'), oakleaf hydrangea, beautyberry (Callicarpa americana — native, magenta fall berries, deer-resistant), inkberry holly (better than Japanese holly for blight resistance), native viburnum (Viburnum nudum 'Winterthur' is outstanding), American hornbeam (for shade gardens), serviceberry (Amelanchier — beautiful four-season tree most homeowners overlook).",
      "If you're starting a planting plan and want help matching specific plants to your soil and exposures, we offer property visits at no cost — we'll walk the site, take soil readings, and recommend a plant palette specific to what your property actually has.",
    ],
    coverImage: "/journal/journal-cover-17.png",
  },

  {
    slug: "pool-deck-materials-compared",
    title: "Pool Deck Materials Compared — Travertine, Bluestone, Pavers, Concrete",
    date: "March 10, 2026",
    category: "Hardscapes",
    readTime: 11,
    excerpt:
      "Four common pool-deck materials, compared side by side on cost, maintenance, slip resistance, heat retention, and how they age in the Eastern NC climate.",
    body: [
      "Pool decks live a hard life. They're underwater half the summer, in chlorine spray the other half, baking in 90°F sun for three months a year, and walked on by bare wet feet that don't tolerate slippery or sharp surfaces. Choosing the right deck material for an Eastern NC pool is one of the most consequential decisions in the project — get it wrong and you live with it for the next twenty years.",
      "Four materials cover the vast majority of pool decks we install: travertine, bluestone, concrete pavers, and poured concrete. Below is a side-by-side comparison on the factors that actually matter.",
      "Travertine is our most-recommended pool deck material in Eastern NC. It's a natural sedimentary limestone, warm cream to walnut color, with a naturally textured surface that grips bare feet. The defining feature is heat behavior: travertine stays measurably cooler underfoot than any other hardscape material in direct sun. On a 90°F day with full sun, travertine surface temperature is typically 95-105°F; concrete pavers in the same conditions are 115-130°F; poured concrete is 110-125°F. The bare-foot difference is enormous.",
      "Travertine cost runs $25 to $45 per square foot installed in our market for the standard French-pattern layout. Material runs $4-8 per square foot wholesale; the rest is base prep, layout, cutting, and pointing. Service life is 30+ years with minimal maintenance — annual sealing every five to seven years is recommended to slow patina, but unsealed travertine ages handsomely on its own.",
      "Travertine's downsides: it's the most expensive of the four common deck materials, and it stains. Iron in pool water can leave rust spots; sunscreen drips can leave dark patches; oil from grills can stain permanently. Most stains lift with poultice cleaning ($150-300 per service call), but the susceptibility is real. We seal travertine on installation and recommend resealing every five years for stain resistance.",
      "Bluestone is the second-most-recommended pool deck material in our region. Pennsylvania bluestone (Cardinal cut for thermal-finished or natural cleft for textured) holds up beautifully to chlorine, has natural slip resistance when textured, and ages to a deep blue-gray patina over time. Bluestone cost runs $35 to $55 per square foot installed for thermal-finished, $30 to $45 for natural cleft.",
      "Bluestone's heat behavior is its weakness. The dark blue-gray surface absorbs solar heat aggressively; on a 90°F sunny day, surface temperature can reach 130°F or higher — uncomfortable to walk on barefoot. We typically recommend bluestone only for shaded pool decks, mostly-pool-house pools, or pools with abundant tree cover. For a full-sun pool deck in Eastern NC, the heat is a real consideration.",
      "Concrete pavers are the value option that competes well in many cases. Premium paver lines (Belgard Mega-Lafitt, Techo-Bloc Blu Slate, Pavestone Anchor Highland) carry surface textures and color blends specifically engineered for pool decks. Cost runs $20 to $40 per square foot installed depending on paver line. Heat behavior is acceptable in lighter colors (cream, tan) and poor in darker colors (gray, charcoal); we recommend selecting from the lighter palette for sunny pool decks.",
      "Pavers' great strengths are repairability and dimensional consistency. A failed paver can be lifted and replaced in under an hour without disturbing the surrounding deck — a critical advantage when pool plumbing eventually needs to be excavated or when a paver chips from accidental impact. Service life is 25-30 years with proper base prep; the most common failure mode is settling caused by inadequate subgrade compaction, which is why base prep matters more than paver selection.",
      "Poured concrete is the budget option, and we recommend it least often for pool decks. Cost runs $12 to $20 per square foot for plain broom-finished, $18 to $30 for stamped or stained. Service life is 15-20 years before color fade, surface scaling, or panel cracking becomes visible. The defining failure mode is crack propagation: a poured-concrete pool deck installed today will develop visible cracks within 5-10 years, and there's no way to repair the cracks invisibly — a cracked panel typically gets replaced rather than patched.",
      "Poured concrete's other weakness is that it can't be lifted to access pool plumbing. When pool equipment fails or skimmer lines need replacing, the concrete deck has to be sawcut, removed, repaired, and replaced — a $1,500-3,500 service call that doesn't restore the deck to original appearance. Pavers don't have this problem; you lift the affected pavers, do the plumbing work, and re-set the same pavers when done.",
      "If we had to recommend one material for an Eastern NC pool deck without knowing anything else about the property: travertine, in the standard French pattern, sealed at install. The cool-foot performance is unmatched, the stone ages beautifully, and the long-horizon cost is competitive when you factor in poured concrete's eventual replacement.",
      "If budget is the constraint: a quality concrete paver in a light color, with a textured surface specifically rated for pool deck use, properly installed on a deep base. The result is 80 percent of travertine's performance at 60 percent of the cost, and the pavers can be lifted for any future pool plumbing work without destroying the deck.",
      "The choice that's almost always wrong: poured stamped concrete. It looks acceptable on day one, looks tired by year five, and has visible cracks by year ten. The savings at install evaporate over the deck's life. We've replaced more aging stamped concrete pool decks than any other category of pool deck failure.",
    ],
    coverImage: "/journal/journal-cover-18.png",
  },

  {
    slug: "outdoor-kitchen-cost-eastern-nc",
    title: "How Much Does an Outdoor Kitchen Cost in Eastern NC?",
    date: "April 8, 2026",
    category: "Hardscapes",
    readTime: 10,
    excerpt:
      "A range from $15,000 to $90,000+ depending on appliances, masonry, and utilities. Here's what actually drives the cost — and what we recommend at each tier.",
    body: [
      "Outdoor kitchen cost is one of the most-asked questions on our property visits, and one of the most-misunderstood numbers in the residential outdoor industry. The honest range in Eastern NC for the projects we install in 2026 runs from about $15,000 at the entry tier to $90,000+ for a full masonry kitchen with high-end appliances and a covered structure overhead.",
      "Below is what actually drives the cost, what we recommend at each budget tier, and where to spend versus where to save.",
      "Tier 1 — Counter and Grill ($15,000 to $25,000 installed). The minimum useful outdoor kitchen is a built-in stainless grill (Lynx, Hestan, or Coyote — $2,500 to $5,000 for the appliance), set into a masonry cabinet box (typically stainless or marine-grade aluminum frame, clad in stone or brick veneer), with six to eight feet of stone counter on each side of the grill (typically $40-80 per linear foot installed). No refrigeration, no side burner, no pizza oven, no overhead structure. This tier serves the family who grills three to four times a week and wants a finished installation rather than a freestanding cart on a patio.",
      "What's included at Tier 1: built-in grill, stainless cabinet box, stone or brick masonry surround, honed stone or sealed concrete counter, gas-line stub-up to the grill (typically $1,200-2,500 of plumbing work), and proper ventilation if recessed. Permits are often not required at this tier, depending on jurisdiction and whether the grill is freestanding-into-island vs. truly built-in.",
      "Tier 2 — Working Kitchen ($25,000 to $45,000 installed). The next step adds a side burner, an outdoor refrigerator (True or U-Line dedicated outdoor fridge — $1,800-3,500), a small prep sink with hot and cold water, and additional counter run for actual cooking work. Total counter typically expands to 14-18 linear feet. Cabinet detailing usually adds storage doors and drawers below the counter for grilling tools, propane tanks, and gas grill accessories.",
      "Tier 2 utilities are more complex. Water service requires a hot/cold supply run from the home, a freeze-protected shutoff, and a sanitary drain line — typically $2,500-4,500 of plumbing work depending on distance from the home. Electrical adds a dedicated 20-amp circuit for refrigeration plus a GFCI receptacle. Gas line is sized for both grill and side burner BTU loads. Permits are usually required at this tier in Pitt County and surrounding jurisdictions.",
      "Tier 3 — Destination Kitchen ($45,000 to $75,000 installed). The destination kitchen adds a pizza oven (gas-fired Forno Bravo or wood-fired Mugnaini — $4,000-12,000 for the appliance, plus masonry chimney work), a beverage center or kegerator, a bar with seating, and significant additional counter and cabinet work. Layout typically becomes L-shaped or U-shaped with a working triangle (cook zone, prep zone, hosting zone) deliberately composed.",
      "At Tier 3, masonry detailing becomes a serious cost driver. A full stone-veneer or hand-laid brick exterior on a 20-foot-perimeter cabinet run runs $8,000-18,000 just in masonry work. Counter material upgrades to honed granite, soapstone, or sealed bluestone ($60-120 per square foot installed). The kitchen typically gets dedicated lighting on its own dimmer circuit and a stereo speaker tap.",
      "Tier 4 — Full Pavilion Kitchen ($75,000 to $130,000+). The full version is a U-shaped masonry kitchen with grill, side burner, pizza oven, prep sink, refrigeration, and bar seating, set inside a roofed pavilion or pergola with electrical lighting, ceiling fan, and structural framing. The pavilion alone runs $20,000-40,000 depending on materials (cedar timber, stone columns, metal roof). The kitchen inside it adds another $50,000-90,000 depending on appliances, masonry detailing, and counter selection.",
      "What drives cost most. In our experience the four highest-leverage cost drivers are (1) appliance package — Lynx and Hestan run roughly 50 percent more than Coyote or Blaze for comparable BTU output and warranty coverage; (2) masonry skin — full stone veneer runs 2-3x the cost of stucco or paint-grade stucco-on-CMU; (3) covered structure overhead — a pavilion or pergola overhead easily doubles the project budget; (4) utility distance from the home — a kitchen 50 feet from the home with no existing utility lines requires substantial trenching and run that doesn't materially affect the finished product.",
      "Where to spend. The appliances and the masonry skin. A grill that lasts 20 years versus 6 years is the difference between Hestan ($5,000) and a big-box brand ($1,200) — three replacements of the cheap grill costs more than one of the good one and produces a worse experience throughout. Masonry skin matters because it's what every guest sees and what the kitchen will be photographed against for the next two decades.",
      "Where to save. The pizza oven (most homeowners use them less than five times a year — a high-quality grill is more practical), the beverage center (an interior fridge twenty feet away does the same job for free), and the side burner (a one-burner butane camping stove can do most of what a built-in side burner does, for $80 instead of $1,800).",
      "What permits to expect. Pitt County and the Greenville municipal jurisdiction both require building permits for permanent outdoor cooking structures with utility connections. Mechanical permits cover gas-line work; plumbing permits cover water and drain; electrical permits cover dedicated circuits. Permit costs typically run $400-900 total. We carry permitting on every kitchen we install at Tier 2 and above as part of the project scope.",
      "Yardie offers no-cost property visits for outdoor-kitchen projects. We bring appliance-line samples, masonry samples, and counter samples; walk the site to scope utility runs; and provide a written design fee and itemized build estimate after the visit. Most clients are surprised by the range — both how affordable a Tier 1 install can be and how quickly cost can climb at Tier 3 and 4.",
    ],
    coverImage: "/journal/journal-cover-19.png",
  },

  {
    slug: "how-to-choose-a-landscape-designer-greenville-nc",
    title: "How to Choose a Landscape Designer in Greenville, NC",
    date: "May 1, 2026",
    category: "Studio",
    readTime: 9,
    excerpt:
      "Twelve questions to ask, four red flags to watch for, and the credentials and references that matter when hiring an exterior designer in Eastern NC.",
    body: [
      "Choosing a landscape designer is one of the higher-stakes decisions a homeowner makes — the work is expensive, it lives outside in plain sight, and the results either compound in beauty over a decade or look tired in five years. The right designer costs more than the wrong one upfront and saves more than the difference over the life of the project.",
      "Below is the framework we encourage homeowners to use when interviewing any landscape designer or design-build contractor in the Greenville area, including Yardie. The goal is a fair comparison.",
      "Twelve questions to ask any designer at the property visit. (1) How many properties have you designed in Pitt County or Eastern NC specifically — and can you walk us through three of them? Local experience matters because regional soil, climate, plant performance, and architectural patterns vary enormously. A designer who's done 200 projects in Raleigh has experience that doesn't fully transfer to our coastal-plain conditions.",
      "(2) Who actually does the design work — the person we're talking to, or someone else in your office? Many design-build operations sell the relationship through the principal but hand the design to a junior staffer once the contract is signed. The honest answer is one or the other; the answer to watch out for is a vague \"the team works on it together.\"",
      "(3) Who actually does the install — your own crews, or subcontractors? In-house crews offer continuity from drawing to install (the designer is on site at every milestone, the crews understand the design intent, problems get caught early). Subcontracted installs can produce excellent work but require the designer to manage trades they don't directly employ. Both models exist; the answer should be specific.",
      "(4) What's your design fee, and what does it include? A real design fee in our market runs $1,500 to $7,500 for a residential property depending on scope, and should include site analysis, hand or CAD plans, material specifications, plant lists with quantities and sizes, and a written budget estimate for the build. \"Free design\" usually means the design cost is buried in inflated install pricing — there are no free designs in this industry.",
      "(5) How do you handle change orders? Projects always change as they're built — a tree that has to come out, a buried line that wasn't on the survey, a material that's gone out of stock. Ask how change orders are priced, who approves them, and whether the original budget includes contingency. A good designer will name a 5-10 percent contingency in the original budget for unforeseen field conditions.",
      "(6) Who maintains what we install, and at what cost? The best landscapes are designed knowing how they'll be maintained — by what crew, on what schedule, at what annual cost. A designer who hands you a finished landscape and disappears is a designer whose work won't look the same in five years.",
      "(7) Do you carry general liability and workers' comp insurance, and can you provide a current certificate? Legitimate operations carry both ($1M+ general liability, full workers' comp on all employees and subs). Ask for the certificate before signing anything; the carrier's contact information should match what they tell you. This is non-negotiable.",
      "(8) What's your typical project timeline from contract to completion? An honest answer for a typical residential project (full property landscape with hardscape, planting, lighting, and irrigation) is 8 to 16 weeks of construction following 4 to 8 weeks of design and permitting. Timelines shorter than this are usually unrealistic; significantly longer suggests scheduling problems.",
      "(9) Can we see drawings from a recent comparable project? A real designer has plans they can show you — site plans, planting plans, hardscape details. The level of drawing detail directly correlates with how the project will be built. A contractor who shows you a hand sketch on a napkin and starts work next week will produce work consistent with that level of planning.",
      "(10) How do you select plants and materials? The honest answer involves walking the property, reading soil and exposure, considering the architecture, and specifying for long-term performance. A weak answer is \"we use what looks good\" or \"whatever's in stock at the supplier.\"",
      "(11) Will you work with our other contractors — pool builder, electrician, irrigation contractor, builder? Most exterior projects involve multiple trades. The designer's willingness and ability to coordinate with them is a quality signal. Designers who refuse to work with anyone but their own crews are often hiding limitations.",
      "(12) Can we talk to three references? Specifically: the most recent project completed, a project from 3-5 years ago (so we can see how it's aged), and a project that had a problem during construction (so we can see how it was handled). The designer who can't supply all three is the designer whose work or process has gaps.",
      "Four red flags. (a) Pressure to sign quickly or pay a large deposit before seeing a design. Real design work takes weeks, and a 10 percent design retainer is standard; anything beyond 25-30 percent of total project budget paid upfront is unusual. (b) No physical address or established office. A designer with no place of business is a designer who can disappear. (c) Vague or evasive answers about insurance, licensing, or permitting. These are basic infrastructure for a legitimate operation. (d) Significantly lower bid than competitors with no clear explanation. The labor and materials cost in this region are roughly the same for every contractor; an outlier low bid usually reflects a missed scope item, an unrealistic schedule, or work that won't be done to standard.",
      "Credentials that matter. NC General Contractor's license (required for projects above certain value thresholds — most landscape designers carry it). Membership in regional or national professional organizations (NCNLA, North Carolina Nursery and Landscape Association, is the most relevant locally). Certified Plant Professional (CPP) or NC Certified Plant Professional credentials for plant expertise. State irrigation contractor's license (required for irrigation system installation in NC). Current insurance certificates available on request.",
      "Yardie has been working in Greenville and Eastern NC since 2004. We hold all the relevant licenses and insurance, do all design work in-house with our principal designer involved on every project, run our own install crews, and are happy to provide references from any decade of our work. The first property visit is at no cost and includes site analysis, conversation about goals and budget, and an honest answer on whether we're the right fit for your project. Call (252) 756-7788 or email hello@yardiedesign.com to schedule.",
    ],
    coverImage: "/journal/journal-cover-20.png",
  },
];

// ─── Aggregated FAQs (used on /faq) ─────────────────────────
export interface FAQ { q: string; a: string }
export const faqsByCategory: { category: string; items: FAQ[] }[] = [
  { category: "Getting Started",
    items: [
      { q: "Do you offer free consultations?",
        a: "Yes. The first conversation is at no cost — we walk the property, listen, and let you know whether we're the right fit before any design fee." },
      { q: "How do I get started on a project?",
        a: "Use the Schedule a Consultation button at the top of any page, or email hello@yardiedesign.com. We'll set up a property visit and an initial conversation within the week." },
      { q: "What does design cost?",
        a: "Design fees vary with project scope. We share an itemized design proposal after the first property visit so you know exactly what you're committing to before signing." },
      { q: "Do you serve my area?",
        a: "We work primarily in Greenville, Winterville, Ayden, Farmville, Washington, Kinston, New Bern, Goldsboro, Wilson, and Rocky Mount. Contact us for projects further afield." },
    ] },
  { category: "Landscape Design",
    items: services.find((s) => s.slug === "landscapes")!.faqs },
  { category: "Patios & Pavers",
    items: services.find((s) => s.slug === "patios-pavers")!.faqs },
  { category: "Walkways & Driveways",
    items: services.find((s) => s.slug === "walkways-driveways")!.faqs },
  { category: "Stone & Brick Masonry",
    items: services.find((s) => s.slug === "masonry")!.faqs },
  { category: "Retaining Walls",
    items: services.find((s) => s.slug === "retaining-walls")!.faqs },
  { category: "Outdoor Kitchens",
    items: services.find((s) => s.slug === "outdoor-kitchens")!.faqs },
  { category: "Fire Features",
    items: services.find((s) => s.slug === "fire-features")!.faqs },
  { category: "Pergolas & Pavilions",
    items: services.find((s) => s.slug === "pergolas-pavilions")!.faqs },
  { category: "Pool Decks & Surrounds",
    items: services.find((s) => s.slug === "pool-decks")!.faqs },
  { category: "Water Features",
    items: services.find((s) => s.slug === "water-features")!.faqs },
  { category: "Outdoor Lighting",
    items: services.find((s) => s.slug === "lighting")!.faqs },
  { category: "Irrigation Systems",
    items: services.find((s) => s.slug === "irrigation")!.faqs },
];

// ─── Hero slides for homepage ───────────────────────────────
//   (Note: app/page.tsx defines its own heroSlides for the homepage
//   from photos.* aliases; this list is exported for any other page
//   that wants a default rotator.)
export const heroSlides = [
  { src: "/projects/landscapes/may-blvd-overview-01.jpg",            alt: "Composed rear yard with multi-level stone terrace at golden hour." },
  { src: "/projects/facades/williamsburg-106-front-elevation-01.jpg", alt: "Southern brick home with lighted entry columns and brick walkway." },
  { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg", alt: "Stone retaining wall with bluestone steps and layered planting." },
  { src: "/projects/pools/autumn-lakes-water-feature-03.jpg",   alt: "Waterfront stone terrace with composed planting." },
];

// ─── Partner / Material brands referenced on the site ───────
//   `logo` points at a local SVG wordmark in /public/brand/partners/.
//   We render these in PartnerLogos as <img> rather than text so the
//   carousel reads as a logo wall.
export const partners = [
  { name: "Belgard",      blurb: "Premium pavers and outdoor living materials.",      logo: "/brand/partners/belgard.svg" },
  { name: "Techo-Bloc",   blurb: "Architectural-grade pavers, walls, and slabs.",     logo: "/brand/partners/techo-bloc.svg" },
  { name: "Hunter",       blurb: "Smart irrigation controllers and rotor systems.",   logo: "/brand/partners/hunter.svg" },
  { name: "Rain Bird",    blurb: "Drip and spray irrigation specialty equipment.",    logo: "/brand/partners/rain-bird.svg" },
  { name: "FX Luminaire", blurb: "Architectural landscape lighting.",                 logo: "/brand/partners/fx-luminaire.svg" },
  { name: "Kichler",      blurb: "Outdoor lighting fixtures and integrated systems.", logo: "/brand/partners/kichler.svg" },
  { name: "Lynx",         blurb: "Premium outdoor kitchen appliances.",               logo: "/brand/partners/lynx.svg" },
];
