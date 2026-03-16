// ─── Projects ───────────────────────────────────────────────────────────────

export type ServiceTag =
  | "Landscapes"
  | "Hardscapes"
  | "Masonry"
  | "Lighting"
  | "Irrigation";

export interface Project {
  slug: string;
  name: string;
  location: string;
  date: string;
  services: ServiceTag[];
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  challenge?: string;
  approach?: string;
  materials?: string[];
}

export const projects: Project[] = [
  {
    slug: "windsor",
    name: "Windsor",
    location: "Greenville, NC",
    date: "2024",
    services: ["Landscapes", "Hardscapes", "Masonry", "Lighting", "Irrigation"],
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    shortDescription:
      "A complete exterior transformation uniting landscape, stone, and light into a seamless living environment.",
    fullDescription:
      "Windsor represents the full breadth of what Yardie designs. The project began as a blank slate — a newly constructed home in Greenville with a yard that held enormous potential but lacked any character or definition. Working closely with the homeowners, we developed a comprehensive exterior vision that wove together every discipline we offer.\n\nThe landscape design introduces layered planting beds anchored by native species — crepe myrtles, ornamental grasses, and seasonal perennials that ensure visual interest year-round. A custom hardscaping plan established the structure: a generous rear patio in tumbled concrete pavers, a curved walkway from drive to entry, and tiered retaining walls that solved an existing drainage concern while adding architectural dimension.\n\nMasonry work defines the property's edges and focal points: a low stone perimeter wall along the front elevation, stone-capped columns flanking the entry, and a built-in masonry seating wall around the rear fire pit area. The irrigation system keeps every planting zone optimally hydrated with a smart controller that adjusts to local weather data. As evening arrives, a layered lighting design takes over — path lights, uplighting through the tree canopy, and warm accent fixtures on the masonry columns transform Windsor into something that looks as beautiful at night as it does by day.",
    challenge:
      "A featureless new construction lot with poor drainage, no privacy, and no connection between the home and its surrounding landscape.",
    approach:
      "A fully integrated design — masonry anchors, layered planting, structured hardscape, smart irrigation, and architectural lighting — conceived as a single unified environment rather than separate elements.",
    materials: [
      "Tumbled concrete pavers",
      "Dry-stacked limestone",
      "Native ornamental grasses",
      "Crepe myrtles",
      "LED landscape lighting",
      "Smart irrigation controller",
    ],
  },
  {
    slug: "106-williamsburg",
    name: "106 Williamsburg",
    location: "Greenville, NC",
    date: "May 2024",
    services: ["Hardscapes", "Landscapes", "Lighting", "Masonry"],
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    shortDescription:
      "A harmonious blend of Southern charm and refined craftsmanship, drawing inspiration from the rich character of Greenville.",
    fullDescription:
      "Taking inspiration from the rich architectural character of Greenville's historic neighborhoods, 106 Williamsburg is a study in restraint and refinement. The brief was clear: honor the home's traditional bones while introducing design details that feel elevated and considered, not merely decorative.\n\nThe approach centered on materiality. We selected red brick — laid in a running bond pattern — as the primary hardscape material, connecting the new work directly to the home's existing brick façade. A gently curved pathway leads from the street to the front door, flanked by lighted brick columns that mark the entry with quiet ceremony. The brick coursework on the columns was constructed by hand, each course leveled with precision before the next was laid.\n\nPlanting design was kept intentional rather than abundant: a curated selection of azaleas, boxwood hedging, and seasonal annuals frames the home without obscuring its architecture. Downlights mounted within each column throw a warm pool of light across the pathway at night, while uplight fixtures trained on the flanking dogwood trees add depth and drama to the front elevation after dark.",
    challenge:
      "An existing front elevation lacking cohesion between the home's traditional architecture and the surrounding landscape.",
    approach:
      "Material continuity — using red brick as the connective thread between hardscape, masonry, and planted areas — to create a front exterior that reads as intentionally composed.",
    materials: [
      "Traditional red brick",
      "Mortar-set brick pathway",
      "Boxwood hedging",
      "Azaleas",
      "Downlight column fixtures",
      "Tree uplights",
    ],
  },
  {
    slug: "6047-may-blvd",
    name: "6047 May Blvd",
    location: "Farmville, NC",
    date: "November 2024",
    services: ["Landscapes", "Hardscapes", "Masonry", "Lighting", "Irrigation"],
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1599619870888-2d31fdda2e1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    shortDescription:
      "A complete exterior makeover — a seamless blend of modern design and timeless craftsmanship across every outdoor discipline.",
    fullDescription:
      "May Blvd is the project that best demonstrates Yardie's full-service capability. From a bare, undefined lot, we developed and executed a comprehensive exterior environment that now reads as the natural extension of the home itself.\n\nThe landscape plan introduced lush, layered planting: native ornamental trees provide structure and canopy while perennial borders establish seasonal color. Ground-level planting masses give the beds a sense of depth and natural movement rather than the rigid, symmetrical plantings typical of residential landscapes.\n\nCustom hardscaping establishes the functional zones: a large rear patio in textured concrete pavers creates the primary entertainment area, connected by a curved flagstone pathway to a secondary lawn space and garden zone. Masonry work defines the property: dry-stacked stone walls step with the natural grade, functioning as both retaining structures and sculptural elements. A grill surround and outdoor prep area in matching stone complete the rear living environment.\n\nA smart irrigation system keeps every zone perfectly hydrated. Lighting design was the finishing touch — architectural uplights on the masonry walls, path lighting along every walkway, and warm ambient fixtures on the patio structure create an exterior that comes alive after sunset.",
    challenge:
      "A completely unfinished lot with no existing landscape, hardscape, or drainage infrastructure.",
    approach:
      "Ground-up exterior design — treating the entire property as a single architectural composition from curb to rear boundary.",
    materials: [
      "Textured concrete pavers",
      "Flagstone pathway",
      "Dry-stacked natural stone",
      "Native ornamental trees",
      "Perennial border plantings",
      "Smart irrigation system",
      "Architectural LED fixtures",
    ],
  },
  {
    slug: "109-williamsburg",
    name: "109 Williamsburg",
    location: "Greenville, NC",
    date: "May 2024",
    services: ["Landscapes", "Hardscapes", "Lighting", "Irrigation", "Masonry"],
    heroImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1599619870888-2d31fdda2e1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    shortDescription:
      "A lush residential transformation anchored by considered planting design, structured hardscape, and evening lighting.",
    fullDescription:
      "109 Williamsburg called for a transformation that balanced privacy and openness — creating a defined, beautiful exterior environment while preserving the sense of space that makes the lot special.\n\nThe landscape design focused on structure through planting: a line of Nellie Stevens hollies along the northern property boundary creates a year-round privacy screen while remaining architecturally refined. Ornamental planting beds frame the home's foundation with layers of texture — fine-leaf ornamental grasses, broadleaf evergreens, and seasonal flowering shrubs.\n\nThe hardscape plan added a rear patio with a natural stone sitting wall defining its perimeter. Masonry pillars at the entry gate echo the home's architecture. An automated irrigation system with individual zone control ensures every planting area receives precise hydration. Landscape lighting completes the transformation — tree uplights, path-flanking fixtures, and patio ambient lighting create an evening atmosphere that extends outdoor use well past sunset.",
    challenge:
      "Creating privacy and definition in a lot surrounded by neighboring properties while maintaining an open, welcoming feel.",
    approach:
      "Using planting structure — not fencing — as the primary privacy tool, supported by masonry definition and evening lighting to create a complete exterior environment.",
    materials: [
      "Nellie Stevens hollies",
      "Ornamental grasses",
      "Natural stone sitting wall",
      "Masonry entry pillars",
      "Automated irrigation",
      "Path and uplighting fixtures",
    ],
  },
  {
    slug: "emma-cannon",
    name: "Emma Cannon",
    location: "Greenville, NC",
    date: "2024",
    services: ["Hardscapes", "Lighting", "Masonry"],
    heroImage:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    shortDescription:
      "A focused hardscape and masonry intervention that elevated a residential exterior with architectural precision.",
    fullDescription:
      "The Emma Cannon project is an exercise in restraint — a focused exterior upgrade that proves you don't need a full-property renovation to achieve a dramatic result. The homeowner's goal was to modernize the front and rear hardscape while adding a sense of permanence and quality that the existing concrete surfaces lacked.\n\nWe replaced the front entry walkway with a herringbone-pattern brick pathway — a material choice that immediately connects the home to its neighborhood while feeling more considered and handcrafted than poured concrete. Masonry work added capped stone columns flanking the entry steps, and a low stone knee wall defines the planting beds along the front elevation.\n\nA rear patio expansion in large-format stone pavers created a more generous entertainment area. The entire perimeter of the new patio is defined by a dry-stacked masonry border — a detail that gives the space a finished, architectural quality. Landscape lighting was added to both the front entry columns and rear patio, ensuring the masonry work reads with the same quality after dark as it does by day.",
    challenge:
      "Aging concrete surfaces and an undefined exterior lacking architectural character.",
    approach:
      "A targeted masonry and hardscape intervention — focused, precise, and high-quality — that elevated the entire exterior character without a full-property redesign.",
    materials: [
      "Herringbone-pattern brick",
      "Dry-stacked stone knee wall",
      "Large-format stone pavers",
      "Capped stone columns",
      "Entry and patio lighting",
    ],
  },
];

// ─── Services ────────────────────────────────────────────────────────────────

export interface ServiceSpecialty {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubline: string;
  intro: string;
  heroImage: string;
  featureImage: string;
  specialties: ServiceSpecialty[];
  whyYardie: { heading: string; body: string }[];
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    slug: "landscapes",
    name: "Landscapes",
    tagline: "The living canvas of your home.",
    heroHeadline: "The Living Canvas\nof Your Home",
    heroSubline:
      "Thoughtful planting design, lawn care, and seasonal stewardship — creating outdoor environments that grow more beautiful with time.",
    intro:
      "Landscape design is where art meets horticulture. At Yardie, we approach every landscape as a composition — one that considers not just what looks beautiful today, but how it will evolve through every season, every year. We work with your property's natural character, selecting plants that thrive in Eastern North Carolina's climate while creating the aesthetic environment you envision.",
    heroImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=85",
    featureImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    specialties: [
      {
        title: "Custom Landscape Design",
        description:
          "A comprehensive design that considers your property's architecture, light conditions, and your personal aesthetic — from broad structure to final plant selection.",
      },
      {
        title: "Lawn Care & Maintenance",
        description:
          "Consistent, professional care keeps your landscape performing at its best. We manage mowing, edging, fertilization, and seasonal upkeep with attention to detail.",
      },
      {
        title: "Garden Design & Planting",
        description:
          "Curated planting plans featuring azaleas, camellias, crepe myrtles, and drought-tolerant perennials selected for beauty and climate-appropriateness.",
      },
      {
        title: "Seasonal Cleanup & Enhancement",
        description:
          "Leaf removal, mulching, pruning, and planting bed refreshes timed to each season — keeping your landscape sharp through the full calendar year.",
      },
      {
        title: "Sod Installation",
        description:
          "Professional sod installation for an immediately lush lawn — precisely graded, properly installed, and set up for long-term success.",
      },
      {
        title: "Tree & Shrub Care",
        description:
          "Expert pruning, shaping, and health treatments that maintain the structural integrity and visual quality of your existing trees and shrubs.",
      },
    ],
    whyYardie: [
      {
        heading: "Designed for Eastern NC",
        body: "We know what grows here. Our plant selections are rooted in deep familiarity with the Pitt County climate, soil conditions, and seasonal patterns — so your landscape doesn't just look good at installation. It thrives.",
      },
      {
        heading: "From Concept to Stewardship",
        body: "We design the landscape and remain invested in its success. Ongoing maintenance services, seasonal guidance, and trusted local referrals mean your investment continues to be protected well after installation day.",
      },
      {
        heading: "Detail as a Standard",
        body: "The difference between a good landscape and a great one is often in the details — the precise edge of a planting bed, the right mulch depth, the plant that finishes a composition perfectly. We notice these things because we care about them.",
      },
    ],
    relatedProjects: ["windsor", "106-williamsburg", "6047-may-blvd"],
  },
  {
    slug: "hardscapes",
    name: "Hardscapes",
    tagline: "Structure, beauty, and purpose — built to last.",
    heroHeadline: "Structure, Beauty,\nand Purpose",
    heroSubline:
      "Custom patios, walkways, walls, and outdoor living structures designed with precision and built to endure.",
    intro:
      "Hardscaping is the architecture of your outdoor environment. It creates the structure that landscape and lighting inhabit — defining spaces, managing grade, and establishing the permanent elements that shape how your property feels and functions. At Yardie, we design and build hardscape features that are as considered in their aesthetics as they are in their engineering.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
    featureImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    specialties: [
      {
        title: "Custom Patios",
        description:
          "Patios designed around how you live — for dining, entertaining, relaxing, or all three — in materials that complement your home's architecture.",
      },
      {
        title: "Walkways & Pathways",
        description:
          "Crafted pathways in stone, brick, or pavers that guide movement through your property with both visual and functional intention.",
      },
      {
        title: "Retaining Walls",
        description:
          "Engineered retaining walls that solve grade challenges while adding architectural character — built for structural permanence and visual quality.",
      },
      {
        title: "Outdoor Kitchens & Fire Features",
        description:
          "Complete outdoor kitchen designs and fire pit or fireplace installations — the anchors of a true outdoor living space.",
      },
      {
        title: "Driveways & Entryways",
        description:
          "First impressions start at the curb. We design and install driveways and entry sequences that make an immediate statement of quality.",
      },
      {
        title: "Water Features",
        description:
          "Fountains, waterfalls, and water elements that introduce sound, movement, and tranquility as living design elements in your landscape.",
      },
    ],
    whyYardie: [
      {
        heading: "Engineered and Aesthetic",
        body: "Beautiful hardscape is built right. We approach every project with the same attention to structural integrity as to visual composition — proper base preparation, correct drainage slopes, and materials selected for long-term performance.",
      },
      {
        heading: "Material Knowledge",
        body: "From tumbled concrete pavers to dry-stacked limestone, natural flagstone to traditional brick — we know how each material behaves over time in Eastern NC's climate and help you choose what will perform and look best for your project.",
      },
      {
        heading: "Integrated Design",
        body: "Hardscape never exists in isolation. We design every structural element in relationship to the landscape planting, lighting, and architecture it will inhabit — so the whole reads as a cohesive environment.",
      },
    ],
    relatedProjects: ["windsor", "6047-may-blvd", "109-williamsburg"],
  },
  {
    slug: "masonry",
    name: "Masonry",
    tagline: "Timeless craftsmanship in stone and brick.",
    heroHeadline: "Timeless Craftsmanship\nin Stone and Brick",
    heroSubline:
      "Hand-built masonry work — walls, columns, steps, veneers, and outdoor living structures — crafted to stand for generations.",
    intro:
      "Masonry is the oldest and most permanent form of exterior design. Stone and brick, laid by skilled hands, create features that a home grows into over time — features that become more beautiful as they settle into the landscape. At Yardie, our masonry work is defined by craft: precise jointing, considered material selection, and the kind of hand-building that mass production cannot replicate.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85",
    featureImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    specialties: [
      {
        title: "Stone Patios",
        description:
          "Natural stone patio installations — flagstone, bluestone, and granite — laid to complement your home's architecture and age gracefully.",
      },
      {
        title: "Garden Walls & Borders",
        description:
          "Masonry walls and edging that frame planting beds, define spaces, and add structural permanence to the landscape composition.",
      },
      {
        title: "Stone Veneers",
        description:
          "High-quality stone veneer application for exterior walls, columns, and architectural features that add texture and material richness.",
      },
      {
        title: "Steps & Staircases",
        description:
          "Hand-laid stone or brick steps that integrate seamlessly with grade changes and connect different zones of the exterior environment.",
      },
      {
        title: "Outdoor Kitchens & Bars",
        description:
          "Custom masonry countertops, pizza oven surrounds, and grill enclosures — built in stone and brick for permanence and character.",
      },
      {
        title: "Seating Walls",
        description:
          "Built-in masonry seating walls around patios, fire pits, and gathering spaces — adding function and architectural weight to outdoor living areas.",
      },
    ],
    whyYardie: [
      {
        heading: "Built by Hand",
        body: "Masonry is handcraft. Every course, every joint, every stone placement is a deliberate decision made by a skilled mason. We take pride in workmanship that's visible — where the quality of execution is as apparent as the quality of the materials.",
      },
      {
        heading: "Material Fluency",
        body: "Natural stone, brick, cultured stone, concrete block — we work in all masonry materials and have the expertise to help you choose what best suits your home's style, your project goals, and your investment horizon.",
      },
      {
        heading: "Permits, Handled",
        body: "Masonry structures often require permits. We are familiar with local Pitt County and Greenville municipal regulations and manage the permitting process on your behalf — ensuring your project is fully compliant from the first day to the last.",
      },
    ],
    relatedProjects: ["106-williamsburg", "windsor", "109-williamsburg"],
  },
  {
    slug: "lighting",
    name: "Lighting",
    tagline: "Your outdoor space, after dark.",
    heroHeadline: "Your Outdoor Space,\nAfter Dark",
    heroSubline:
      "Architectural landscape lighting that transforms how your home looks and feels from sunset to sunrise.",
    intro:
      "Outdoor lighting is a design discipline of its own. It shapes how architecture reads at night, creates intimacy in outdoor spaces, and makes your investment in landscape and hardscape visible through every hour of the day. At Yardie, we approach lighting design the way an architect approaches a building — with careful attention to hierarchy, material, and the emotional experience of moving through a lit environment.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=85",
    featureImage:
      "https://images.unsplash.com/photo-1599619870888-2d31fdda2e1a?w=1200&q=80",
    specialties: [
      {
        title: "Landscape Lighting Design",
        description:
          "A complete photometric plan — deciding what to illuminate, at what intensity, with what fixture type — to create a cohesive nocturnal environment.",
      },
      {
        title: "Pathway & Walkway Lighting",
        description:
          "Discreet, well-placed path lighting that provides safe navigation while contributing to the overall lighting composition.",
      },
      {
        title: "Deck & Patio Lighting",
        description:
          "Warm ambient lighting that extends the useful hours of your outdoor entertainment and living spaces.",
      },
      {
        title: "Uplighting for Trees & Shrubs",
        description:
          "Grazing and uplighting techniques that reveal the natural form of your trees and plantings — dramatic, beautiful, and surprisingly subtle.",
      },
      {
        title: "Accent Lighting for Architecture",
        description:
          "Focused accent lighting on masonry columns, architectural details, and structural features that gives your home's exterior depth and dimension after dark.",
      },
      {
        title: "Outdoor Security Lighting",
        description:
          "Motion-sensor and floodlight installations that provide genuine security without compromising the aesthetic quality of the overall lighting design.",
      },
    ],
    whyYardie: [
      {
        heading: "Design-Led, Not Product-Led",
        body: "We start with the lighting composition — the hierarchy of what's illuminated and how it relates to the surrounding environment — not with a fixture catalog. The right products follow from the right design thinking.",
      },
      {
        heading: "Energy-Efficient by Default",
        body: "All our lighting installations use LED technology. Smart controllers allow remote management and automatic scheduling — so your lighting is never on when it shouldn't be and never off when you want it.",
      },
      {
        heading: "Long-Term Performance",
        body: "Quality outdoor lighting requires quality installation. We bury conduit properly, use weatherproof connections, and stand behind our work with maintenance services that keep your system performing for years.",
      },
    ],
    relatedProjects: ["windsor", "106-williamsburg", "6047-may-blvd"],
  },
  {
    slug: "irrigation",
    name: "Irrigation",
    tagline: "Every garden's most essential investment.",
    heroHeadline: "Every Garden's Most\nEssential Investment",
    heroSubline:
      "Smart, efficient irrigation systems that keep your landscape healthy and thriving — and your water usage optimized.",
    intro:
      "An irrigation system is the foundation beneath every beautiful landscape. Without consistent, precise hydration, even the most beautifully designed planting plan will underperform. At Yardie, we design irrigation systems that deliver exactly what each zone of your property needs — efficiently, automatically, and in harmony with Eastern North Carolina's variable rainfall patterns.",
    heroImage:
      "https://images.unsplash.com/photo-1599619870888-2d31fdda2e1a?w=1600&q=85",
    featureImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
    specialties: [
      {
        title: "Custom Irrigation System Design",
        description:
          "Zone-by-zone irrigation design based on your specific landscape layout, plant water requirements, and property drainage characteristics.",
      },
      {
        title: "Smart Irrigation Systems",
        description:
          "Weather-responsive smart controllers that automatically adjust watering schedules based on rainfall, temperature, and evapotranspiration data.",
      },
      {
        title: "Sprinkler System Installation",
        description:
          "Professional rotary and fixed-head sprinkler installations for lawns and large planted areas — precision coverage without overspray.",
      },
      {
        title: "Drip Irrigation",
        description:
          "Low-volume drip systems for planting beds, borders, and containers — delivering water directly to the root zone with minimal waste.",
      },
      {
        title: "System Repair & Maintenance",
        description:
          "Seasonal startup and winterization, head replacement, leak repair, and controller updates — keeping your existing system in peak condition.",
      },
      {
        title: "Rainwater Harvesting",
        description:
          "Collection and storage systems that capture roof runoff for reuse in your irrigation system — reducing municipal water use and utility costs.",
      },
    ],
    whyYardie: [
      {
        heading: "Precision Over Volume",
        body: "Overwatering is as harmful as underwatering. We design systems that deliver precisely what each zone needs — not a blanket schedule that wastes water and stresses plants. Efficiency and plant health go together.",
      },
      {
        heading: "Integrated with Your Landscape Design",
        body: "Irrigation is most effective when it's designed alongside — not after — the landscape plan. When Yardie manages both, your irrigation system is perfectly calibrated to every planting zone from day one.",
      },
      {
        heading: "Smarter Systems, Lower Bills",
        body: "Smart controllers, weather sensors, and drip technology reduce water consumption significantly compared to traditional timer-based systems. The investment in a well-designed irrigation system typically pays for itself in water savings within a few years.",
      },
    ],
    relatedProjects: ["windsor", "6047-may-blvd", "109-williamsburg"],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yardie completely transformed our backyard into an outdoor space we actually live in. Every detail — the stone work, the lighting, the plantings — was executed with a level of care we didn't expect.",
    name: "Chris McGill",
    context: "Backyard transformation, Greenville",
  },
  {
    quote:
      "From the first consultation to the last stone being placed, working with Yardie was seamless. Our front yard is now the most striking on the street, and we get comments from neighbors constantly.",
    name: "Dave Myers",
    context: "Front elevation redesign, Greenville",
  },
  {
    quote:
      "We now have the perfect space for entertaining. The patio, the lighting, the masonry — it all feels like it was designed by someone who understood exactly what we wanted, even when we couldn't quite articulate it.",
    name: "Logan Williams",
    context: "Full exterior redesign, Greenville",
  },
  {
    quote:
      "The masonry work Yardie did on our entry is extraordinary. The brick columns and pathway look like they've always been there — they feel like part of the home, not an addition.",
    name: "Sarah Patel",
    context: "Entry masonry and hardscape, Winterville",
  },
  {
    quote:
      "Our irrigation system and landscape renovation were handled in one integrated project. The planting beds look fantastic and the system keeps everything healthy without any effort from us.",
    name: "James & Melissa Thorn",
    context: "Landscape + irrigation, Farmville",
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: ServiceTag;
  items: FAQItem[];
}

export const faqs: FAQCategory[] = [
  {
    category: "Landscapes",
    items: [
      {
        question: "What types of plants do you recommend for Greenville, NC?",
        answer:
          "We design with plants that genuinely thrive in Eastern North Carolina's climate. Favorites include azaleas, camellias, crepe myrtles, Nellie Stevens holly, ornamental grasses, and a range of drought-tolerant perennials. During your consultation, we'll select plants suited to your property's specific light conditions, soil character, and aesthetic goals.",
      },
      {
        question: "Do you offer environmentally friendly landscaping options?",
        answer:
          "Yes. We provide sustainable landscape solutions including native plant installations, drought-tolerant designs, rain gardens, and eco-friendly irrigation systems. Using native species reduces ongoing maintenance demands and supports local ecology — and it often results in a more authentic, beautiful landscape.",
      },
      {
        question: "How long does a landscaping project take?",
        answer:
          "Timeline depends on scope. A focused planting bed installation might take two or three days. A full property landscape redesign, when combined with hardscape and irrigation, typically spans two to six weeks. We'll provide a clear, specific timeline during your consultation.",
      },
      {
        question: "Do you offer ongoing maintenance after installation?",
        answer:
          "We offer maintenance services to keep your landscape performing year-round — lawn care, pruning, mulching, and seasonal cleanups. We also connect clients with trusted local maintenance professionals for longer-term care programs.",
      },
      {
        question: "Are consultations free?",
        answer:
          "Yes. Our initial consultation is complimentary. We'll visit your property, discuss your vision and goals, assess your site conditions, and outline what's possible. There's no cost and no obligation.",
      },
    ],
  },
  {
    category: "Hardscapes",
    items: [
      {
        question: "What materials do you work with for hardscaping?",
        answer:
          "We work with natural stone (flagstone, bluestone, limestone, granite), traditional brick, concrete pavers (tumbled, textured, and smooth-faced), and wood. Material selection is guided by your aesthetic preferences, architectural context, and project budget — we'll walk you through the options and help you choose what works best.",
      },
      {
        question: "Are hardscapes durable in North Carolina's climate?",
        answer:
          "Absolutely, when designed and installed correctly. Eastern NC's humid summers and occasional frost cycles require specific base preparation and appropriate material selection. We engineer every hardscape project for long-term performance in this climate — including proper drainage slopes and frost-stable base depths.",
      },
      {
        question: "Can hardscapes increase my property value?",
        answer:
          "Well-designed hardscape features — particularly patios, driveways, and outdoor kitchen areas — consistently add measurable value to residential properties. Beyond resale value, they dramatically improve day-to-day livability. Both matter.",
      },
      {
        question: "How much does a hardscape project cost?",
        answer:
          "Costs vary significantly based on materials, scope, and complexity. A simple stone walkway is very different from a full outdoor kitchen and patio installation. We provide a detailed, itemized estimate during the consultation — no ambiguity, no surprises.",
      },
      {
        question: "How do I maintain hardscape surfaces?",
        answer:
          "Maintenance is generally low. Paver surfaces may benefit from periodic resealing and joint sand replenishment. Stone and brick surfaces need occasional cleaning to prevent biological growth. We provide specific care instructions for every material we install.",
      },
    ],
  },
  {
    category: "Masonry",
    items: [
      {
        question: "What masonry services does Yardie offer?",
        answer:
          "Our masonry work spans stone and brick walls, patios, walkways, columns, outdoor fireplaces and fire pits, seating walls, steps, stone veneers, and outdoor kitchen structures. We also handle masonry repairs and restoration on existing structures.",
      },
      {
        question: "Do masonry projects require permits?",
        answer:
          "Some do — particularly structural elements like retaining walls and outdoor fireplaces. We're familiar with local Greenville and Pitt County regulations and manage the permitting process on your behalf, ensuring everything is fully compliant.",
      },
      {
        question: "Can you match masonry to my home's existing style?",
        answer:
          "This is one of the things we do best. We have extensive experience selecting and working with materials that complement or deliberately contrast existing architecture — whether your home is traditional brick, stone veneer, or contemporary siding.",
      },
      {
        question: "How long does masonry work last?",
        answer:
          "Properly built masonry is among the most durable construction of any kind. Stone and brick structures built correctly can last generations. We stand behind the longevity of our work.",
      },
    ],
  },
  {
    category: "Lighting",
    items: [
      {
        question: "What types of outdoor lighting do you install?",
        answer:
          "We design and install landscape uplighting, pathway and walkway lighting, patio and deck ambient lighting, architectural accent lighting, tree and shrub uplights, and security lighting. Every installation begins with a lighting design plan, not just a fixture selection.",
      },
      {
        question: "Are your lighting systems energy-efficient?",
        answer:
          "All our lighting installations use LED technology — typically consuming 75–80% less energy than traditional incandescent fixtures. We also install smart controllers that allow scheduling and remote adjustment to minimize unnecessary use.",
      },
      {
        question: "How long does outdoor lighting last?",
        answer:
          "LED fixtures have typical lifespans of 25,000 hours or more. With proper installation and periodic maintenance, a well-designed lighting system should perform for 10–15 years before any significant component replacement is needed.",
      },
      {
        question: "Can lighting be added to an existing landscape?",
        answer:
          "Yes — retrofitting lighting into an established landscape is very common. We assess the existing plantings, hardscape, and architecture and develop a lighting plan that enhances what's already there. It's often one of the most impactful upgrades a homeowner can make.",
      },
    ],
  },
  {
    category: "Irrigation",
    items: [
      {
        question: "What type of irrigation system is right for my property?",
        answer:
          "The best system depends on your landscape's layout and plant types. Sprinkler systems are ideal for lawn areas; drip irrigation is better for planting beds and borders. Smart controller systems work well in both cases. During your consultation, we'll assess your property and recommend the most efficient solution.",
      },
      {
        question: "How does a smart irrigation system work?",
        answer:
          "Smart controllers connect to local weather data and automatically adjust your watering schedule based on current conditions — skipping irrigation after rain, reducing output during cool periods, and increasing it during heat. Many systems offer remote control via smartphone.",
      },
      {
        question: "Will an irrigation system reduce my water bill?",
        answer:
          "Smart and drip systems typically reduce water consumption significantly compared to manual or timer-based watering. The efficiency gains often translate directly to lower utility costs, particularly during the long Eastern NC summer.",
      },
      {
        question: "How often does irrigation need maintenance?",
        answer:
          "We recommend an annual inspection — ideally in spring before the growing season — to check heads, valves, controller settings, and connections. Seasonal adjustments and occasional repairs ensure optimal performance. We offer maintenance services for systems we install.",
      },
    ],
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  category: ServiceTag;
  date: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "choosing-the-right-masonry-for-your-home",
    title: "Choosing the Right Masonry for Your Home: Stone, Brick, or Concrete?",
    category: "Masonry",
    date: "December 4, 2024",
    readTime: "5 min read",
    excerpt:
      "Each masonry material has a distinct character, durability profile, and price point. Here's how to think through the decision for your specific project.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    content: `The choice between natural stone, brick, and concrete is one of the most significant decisions in any exterior design project. Each material brings a distinct set of qualities — aesthetic, structural, and financial — and the right choice depends on your home's architecture, your long-term goals, and your appetite for ongoing maintenance.

**Natural Stone**

Stone is the most organically beautiful masonry material. Limestone, flagstone, granite, and river rock each carry the kind of visual variation and textural richness that manufactured materials spend decades trying to replicate. Stone ages extraordinarily well — its surface weathers and develops character over time rather than degrading.

The trade-off is cost. Natural stone is premium-priced relative to brick or concrete, and its installation is labor-intensive. For homeowners prioritizing longevity and material authenticity, it's a worthwhile investment.

**Brick**

Traditional brick occupies the middle ground — more affordable than natural stone, more characterful than plain concrete. Brick's warm, familiar tone connects beautifully to traditional residential architecture, and it's one of the most versatile masonry materials we work with.

Brick requires slightly more maintenance over time: joints may need repointing after decades of exposure, and the surface can develop biological growth in humid conditions. But with reasonable care, brick structures endure for generations.

**Concrete**

Concrete — whether poured or in block form — is the most budget-accessible masonry option. Modern concrete products have improved significantly in aesthetic quality, and stamped or textured finishes can approximate the look of stone and brick at a lower cost.

The caveat is longevity under stress. Concrete is more susceptible to cracking under freeze-thaw cycles and ground movement. For structural applications like retaining walls in Eastern NC, we typically recommend natural stone or brick.

**How to Choose**

Consider your home's existing exterior material — the best masonry additions create continuity, not contrast. Consider your budget — stone for the most prominent feature, brick or concrete for secondary elements, is a smart allocation strategy. And consider your timeline — if you're planning to sell within five years, the ROI calculation is different than if you're designing for the next thirty.

We walk through this decision with every client during the consultation. The right material for your project is usually clear once we've considered all of these factors together.`,
  },
  {
    slug: "how-masonry-enhances-curb-appeal",
    title: "How Masonry Enhances Curb Appeal and Increases Property Value",
    category: "Masonry",
    date: "November 30, 2024",
    readTime: "4 min read",
    excerpt:
      "The relationship between quality masonry and property value is direct and well-documented. Here's why it's one of the highest-return exterior investments you can make.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    content: `Curb appeal matters more than most homeowners realize — not just for resale, but for the daily experience of coming home. And among all exterior design elements, masonry has one of the strongest relationships with perceived quality and property value.

**The Visual Weight of Permanence**

Stone and brick carry visual weight that other materials don't. A home with masonry features — a stone pathway, brick columns, a low perimeter wall — reads as more substantial, more permanent, more carefully considered than a home without them. Buyers and visitors register this quality immediately, even if they can't name exactly what they're responding to.

**Durability as a Value Driver**

Masonry features are categorically different from painted wood or composite materials in one key respect: they don't degrade in the same way. A well-built stone wall installed today will look substantially the same in 30 years. That durability is a genuine financial asset — prospective buyers factor it into their assessment of a property.

**Specific Features with the Highest ROI**

In our experience, the masonry features that deliver the strongest return on investment are:

Entry features — stone or brick columns, pilasters, and pathways that create a deliberate arrival experience. These are among the first things a visitor or potential buyer sees.

Hardscape patios — outdoor living space is consistently valued by buyers, and masonry patios communicate quality in a way that wood or composite decking does not.

Retaining walls — functional masonry that solves a grade or drainage problem while adding visual structure. These serve double duty.

**The Numbers**

Exterior design improvements consistently rank among the highest-ROI home investments in national remodeling cost-value reports. Masonry work, specifically, holds value exceptionally well because of its longevity and the consistent demand for quality exterior finishes in residential real estate.

If you're considering masonry work with resale in mind, we're happy to discuss which features are most valued in the Greenville and Pitt County market specifically.`,
  },
  {
    slug: "5-ways-to-boost-curb-appeal-with-landscaping",
    title: "5 Ways to Boost Curb Appeal with Landscaping",
    category: "Landscapes",
    date: "December 1, 2024",
    readTime: "4 min read",
    excerpt:
      "Curb appeal starts with your landscape — and these five focused improvements consistently deliver the most visual impact per dollar invested.",
    heroImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
    content: `Curb appeal improvements don't always require large budgets or multi-week projects. Some of the most impactful transformations in our portfolio came from focused, strategic changes to the landscape rather than wholesale renovations.

Here are five improvements that consistently deliver the most visual impact:

**1. Define Your Foundation Planting**

The planting directly around your home's foundation is the most visible landscape zone from the street. Undefined, overgrown, or poorly chosen foundation plants create visual chaos; curated, well-maintained foundation planting frames your home and gives it an architectural quality.

Focus on three things: consistent scale (plants that don't eventually obscure windows or overwhelm the elevation), year-round structure (include evergreens so the planting looks deliberate in winter), and a limited plant palette (three to five species, repeated, beats twenty different plants in no particular order).

**2. Add a Focused Focal Point**

Every great front yard has one strong focal element that draws the eye and gives the composition a center of gravity. This might be a specimen tree, a stone urn at the entry, a masonry column, or a distinctive planting mass. Without a focal point, the eye wanders and the yard reads as generic.

Choose one — then build the rest of the landscape around it.

**3. Upgrade the Entry Sequence**

The path from street or driveway to your front door is the most traversed exterior space on your property. It also makes the first physical impression on every visitor. A well-designed entry pathway — in stone, brick, or quality pavers — with considered lighting and flanking plants, immediately signals the quality of the home it leads to.

**4. Fix the Lawn**

A healthy, even lawn is the canvas everything else is painted on. Bare patches, weedy zones, and uneven edges undermine every other landscape improvement. Professional sod installation or a structured overseeding and fertilization program can transform a struggling lawn quickly and inexpensively.

**5. Add Lighting**

Evening curb appeal is equally important, and most homes ignore it. Two or three well-placed fixtures — uplights on a specimen tree, path lights along the entry walkway, accent lights on architectural elements — create an entirely different and often more striking impression than the same space looks by day.`,
  },
  {
    slug: "advantages-of-natural-stone-in-hardscape",
    title: "The Advantages of Using Natural Stone in Hardscape Projects",
    category: "Hardscapes",
    date: "December 3, 2024",
    readTime: "4 min read",
    excerpt:
      "Natural stone is premium-priced for good reason. Here's a clear-eyed look at what you get for the investment.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: `Natural stone — flagstone, bluestone, granite, limestone — is the material we most often recommend for premium hardscape applications. It's not the most affordable option. Here's why we think it's often the best one.

**Authenticity That Can't Be Manufactured**

Every piece of natural stone is unique. The variation in color, texture, and grain pattern means no two stone surfaces look exactly alike. This organic visual quality is something that manufactured concrete pavers — even excellent ones — spend decades trying to replicate. For homeowners who care deeply about material authenticity, there's no substitute.

**Durability That's Genuinely Exceptional**

Properly installed natural stone surfaces regularly outlast the homes they surround. Stone that was laid a century ago is often still in service today. This is a fundamentally different durability profile than most building materials.

**Low Maintenance Over Time**

Unlike wood (which needs staining and sealing), or certain concrete products (which can spall and deteriorate), natural stone requires very little ongoing intervention. Occasional cleaning and, for some applications, periodic joint sand replenishment is typically the full maintenance requirement.

**Value Retention**

Stone features hold value exceptionally well. In the residential real estate market, natural stone patios, pathways, and landscape walls are consistently noted as premium features by buyers and appraisers.

**Heat Resistance**

In Eastern NC's warm summers, stone surfaces stay significantly cooler underfoot than concrete, composites, or artificial materials. This matters for barefoot comfort on patios and around pool areas.

**When We Recommend Stone**

We recommend natural stone most strongly for entry pathways, feature patios, steps, and any masonry element that will be a prominent visual focal point. For secondary areas, quality pavers can be an excellent, more cost-effective alternative. We're always happy to walk through the trade-offs for your specific project.`,
  },
  {
    slug: "benefits-of-drip-irrigation",
    title: "The Benefits of Drip Irrigation for Your Garden",
    category: "Irrigation",
    date: "December 5, 2024",
    readTime: "5 min read",
    excerpt:
      "Drip irrigation is one of the most effective improvements you can make to a landscape — for plant health, water conservation, and long-term simplicity.",
    heroImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    content: `If you have planting beds, borders, or a kitchen garden, drip irrigation is one of the most effective landscape investments available. The efficiency gains are significant, and the improvement in plant health is often dramatic.

**Direct Root Zone Delivery**

Overhead sprinklers wet leaves, pathways, and mulch surfaces — most of which don't need to be wet. Drip systems deliver water directly to the root zone of individual plants, where it's actually needed. This precision reduces water loss to evaporation and ensures every liter of water applied is doing productive work.

**Healthier Plants**

Keeping foliage dry dramatically reduces the risk of fungal diseases, which are a significant problem in humid climates like Eastern North Carolina. Plants irrigated by drip systems consistently show lower incidence of leaf spot, powdery mildew, and other moisture-related diseases.

**Reduced Weed Pressure**

Wet soil grows weeds. Because drip irrigation wets only the area immediately around your planted specimens (rather than the entire bed surface), it reduces the soil moisture available for weed germination. Many clients report meaningfully less weeding effort after drip installation.

**Water Conservation**

Drip systems use water 30–50% more efficiently than overhead sprinklers for the same planted area. In combination with a smart controller that adjusts output based on weather data, the efficiency gains can be even more significant. Over a single growing season in Eastern NC, these savings add up.

**Minimal Disruption to Established Beds**

Installing drip irrigation in an established planting bed is minimally invasive. Emitter lines can be laid between existing plants and covered with mulch — essentially invisible once installed. This makes it practical to retrofit even mature, established landscapes.

**The Investment Case**

The cost of a professionally installed drip system for a typical residential planting area is modest. When weighed against annual water savings, reduced plant replacement costs, and lower maintenance time, the payback period is usually short. And the plants genuinely look better.`,
  },
  {
    slug: "modern-vs-traditional-outdoor-spaces",
    title: "Modern vs. Traditional: Finding the Right Style for Your Outdoor Space",
    category: "Landscapes",
    date: "November 20, 2024",
    readTime: "5 min read",
    excerpt:
      "The most enduring exterior designs aren't strictly one or the other — they're a considered synthesis of both. Here's how to find the right balance for your home.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    content: `The modern versus traditional question comes up in almost every client conversation. It's worth thinking through carefully — because the answer shapes every design decision that follows, from plant selection to paving material to lighting approach.

**What Modern Means in Exterior Design**

Modern exterior design is characterized by geometric clarity, deliberate restraint, and a preference for structure over abundance. Clean-edged planting beds. Limited plant palettes. Materials like concrete, steel, and smooth stone. Strong horizontal lines. The beauty is in the composition rather than the plant material itself.

Modern doesn't mean cold. Done well, a modern exterior landscape can be extraordinarily serene and elegant.

**What Traditional Means**

Traditional exterior design draws on the organic complexity of the natural world. Curved bed edges, abundant planting with layered texture and seasonal color change, traditional materials like brick and stone with irregular surfaces. The beauty here is in richness — the impression of a space that's been thoughtfully tended over years.

Traditional doesn't mean fussy or outdated. A beautifully designed traditional garden is one of the most timeless expressions of residential design.

**Finding the Balance**

The homes we find most inspiring rarely sit entirely in one camp. The most successful exterior designs we execute at Yardie tend to use a traditional material palette — brick, natural stone, established plantings — organized with a modern sense of structure and restraint.

A traditional brick pathway laid in a clean pattern. Abundant planting beds with clear, geometric edges. Stone walls with modern proportions. The warmth and richness of traditional materials, organized with the discipline of modern design thinking.

Your home's architecture is the guide. A Colonial or Craftsman home typically looks best with design language that honors its traditional roots. A contemporary home needs design that matches its sensibility. And many homes sit somewhere in the middle — which is, honestly, where the most interesting exterior design often happens.

When we work with a new client, understanding where on this spectrum their aesthetic sits is one of the first and most important conversations we have.`,
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);
