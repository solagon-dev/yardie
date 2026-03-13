// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  heroImage: string;
  featureImage: string;
  heroHeadline: string;
  heroSubline: string;
  specialties: { title: string; description: string }[];
  whyYardie: { heading: string; body: string }[];
  relatedProjects: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: 'landscapes',
    name: 'Landscapes',
    tagline: 'Living environments designed to grow with you.',
    intro:
      'Great landscape design is never static. Yardie creates outdoor environments that evolve beautifully over time — thoughtfully planted, expertly maintained, and always in tune with the character of your home and property.',
    heroImage: '/DSC03563.jpg',
    featureImage: '/DSC03551.jpg',
    heroHeadline: 'Landscapes that\nlive and breathe.',
    heroSubline:
      'Thoughtful planting design, lawn care, and seasonal maintenance — all managed by one team who knows your property.',
    specialties: [
      {
        title: 'Custom Planting Design',
        description:
          'We select and arrange plants based on your soil, climate, light conditions, and the aesthetic you want to achieve — creating compositions that look intentional from day one and improve with every season.',
      },
      {
        title: 'Lawn Establishment & Care',
        description:
          'Whether starting from bare ground or restoring an overgrown lawn, we use proven methods for seeding, sodding, and ongoing maintenance to produce a dense, healthy turf.',
      },
      {
        title: 'Seasonal Colour & Refresh',
        description:
          'Annuals, perennials, and seasonal plantings keep your landscape looking vibrant year-round. We plan for colour at every stage of the growing season.',
      },
      {
        title: 'Tree & Shrub Placement',
        description:
          'Strategic placement of trees and shrubs provides structure, shade, screening, and long-term value to your property — decisions made with a ten-year view, not just today.',
      },
      {
        title: 'Mulching & Ground Cover',
        description:
          'Proper ground cover installation suppresses weeds, retains moisture, and gives your beds a clean, finished appearance that lasts through the season.',
      },
    ],
    whyYardie: [
      {
        heading: 'Designed for your specific site',
        body: 'We don\'t apply generic plans. Every landscape design starts with an analysis of your soil, light, drainage, and existing conditions — so plants thrive rather than just survive.',
      },
      {
        heading: 'One team, start to finish',
        body: 'The same crew that installs your landscape cares for it. No handoffs, no miscommunication — just consistent quality and a team that knows your property intimately.',
      },
      {
        heading: 'Long-term thinking',
        body: 'We design with maturity in mind. Every plant choice, every spacing decision is made considering what your landscape will look like in five and ten years, not just on installation day.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'hardscapes',
    name: 'Hardscapes',
    tagline: 'Structure and beauty in perfect balance.',
    intro:
      'A well-designed hardscape extends your living space outdoors — creating patios, pathways, retaining walls, and outdoor structures that are built to last and beautiful to look at. Yardie treats hardscaping as architecture: every element is designed in context, constructed with precision, and finished to the highest standard.',
    heroImage: '/DSC00004.jpg',
    featureImage: '/DSC03727.jpg',
    heroHeadline: 'Hardscapes built\nto last a lifetime.',
    heroSubline:
      'Patios, walkways, retaining walls, and outdoor living structures — designed as architecture, built to endure.',
    specialties: [
      {
        title: 'Patio Design & Installation',
        description:
          'From intimate courtyard patios to expansive outdoor entertaining areas, we design and install patios using pavers, natural stone, and concrete that complement your home\'s architecture.',
      },
      {
        title: 'Walkways & Pathways',
        description:
          'Functional and beautiful, our walkway designs guide movement through your property while adding visual interest and curb appeal.',
      },
      {
        title: 'Retaining Walls',
        description:
          'Engineered for both structure and aesthetics, our retaining walls manage grade changes while creating visual interest, planting terraces, and usable outdoor space.',
      },
      {
        title: 'Outdoor Living Structures',
        description:
          'Pergolas, arbors, outdoor kitchens, and seating walls that define and activate your outdoor living space — designed to integrate seamlessly with the surrounding landscape.',
      },
      {
        title: 'Steps & Transitions',
        description:
          'Grade transitions are an opportunity for design. Our steps and transitions are crafted to be safe, comfortable, and architecturally cohesive with the rest of your hardscape.',
      },
    ],
    whyYardie: [
      {
        heading: 'Built to engineering standards',
        body: 'Hardscaping is only as good as its base. We excavate properly, compact thoroughly, and install with the level of care that prevents settling, shifting, and premature failure.',
      },
      {
        heading: 'Material expertise',
        body: 'We work with Belgard, Techo-Bloc, and natural stone — giving you access to premium materials and the expertise to specify and install them correctly for your climate and use case.',
      },
      {
        heading: 'Integrated design',
        body: 'We don\'t design hardscapes in isolation. Every patio, wall, and path is considered in the context of your full property — ensuring a cohesive result that looks like it belongs.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'masonry',
    name: 'Masonry',
    tagline: 'Timeless craftsmanship in stone and brick.',
    intro:
      'Masonry is one of the oldest and most enduring building traditions — and when done well, it defines the character of a property for generations. Yardie\'s masonry work combines traditional craft with modern design sensibility to create features that are as beautiful as they are permanent.',
    heroImage: '/IMG_8140.jpg',
    featureImage: '/IMG_8148.jpg',
    heroHeadline: 'Masonry crafted\nto stand for generations.',
    heroSubline:
      'Stone walls, brick columns, outdoor kitchens, and built features that combine traditional craft with lasting beauty.',
    specialties: [
      {
        title: 'Natural Stone Walls',
        description:
          'Dry-stacked or mortared stone walls create definition, privacy, and a sense of permanence that no other material can replicate. We source from quality suppliers and build to last.',
      },
      {
        title: 'Brick Pathways & Features',
        description:
          'Classic brick brings warmth and character to exterior environments. Our brickwork is precise, consistent, and designed to age gracefully alongside your property.',
      },
      {
        title: 'Outdoor Kitchens & Fireplaces',
        description:
          'We design and build outdoor kitchens and fireplaces that become the heart of your outdoor living space — functional, beautiful, and built to endure years of use.',
      },
      {
        title: 'Columns & Pillars',
        description:
          'Stone and brick columns frame entrances, define property boundaries, and add architectural gravitas. We build them plumb, strong, and proportional to their surroundings.',
      },
      {
        title: 'Seating Walls & Fire Pit Surrounds',
        description:
          'Built-in seating walls and fire pit surrounds create gathering spaces that feel permanent and intentional — elevating your outdoor entertaining experience.',
      },
    ],
    whyYardie: [
      {
        heading: 'True craftspeople',
        body: 'Masonry is a skill built over years of practice. Our team approaches every stone and every joint with the attention to detail that separates enduring work from work that just looks good on day one.',
      },
      {
        heading: 'Premium material sourcing',
        body: 'We work with Buechel Stone and Bob Timberlake Stone for natural and cultured stone, ensuring you have access to beautiful, durable materials and the expertise to use them correctly.',
      },
      {
        heading: 'Built to integrate',
        body: 'Every masonry feature is designed in the context of your full property — scaled correctly, finished to match, and positioned to enhance rather than overpower your outdoor environment.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'lighting',
    name: 'Lighting',
    tagline: 'Your landscape, transformed after dark.',
    intro:
      'Landscape lighting is not just about safety or visibility — it\'s about transforming how your property looks and feels after dark. Yardie designs and installs architectural lighting systems that bring out the best in your landscape, hardscape, and home exterior in the evening hours.',
    heroImage: '/nav-menu-arch-1.png',
    featureImage: '/nav-menu-arch-3.png',
    heroHeadline: 'Outdoor lighting\nthat transforms the night.',
    heroSubline:
      'Architectural landscape lighting — uplighting, path lights, accent fixtures, and patio ambiance, all designed as a unified system.',
    specialties: [
      {
        title: 'Architectural Uplighting',
        description:
          'Strategically placed uplights bring drama and dimension to trees, walls, and architectural features — transforming your home\'s exterior into a striking nighttime presence.',
      },
      {
        title: 'Pathway & Step Lighting',
        description:
          'Safe, beautiful, and subtle — pathway and step lighting guides movement through your property while adding warmth and visual depth to the landscape.',
      },
      {
        title: 'Patio & Outdoor Living Lighting',
        description:
          'The right lighting makes outdoor entertaining spaces feel inviting and complete after dark. We design patio lighting systems that extend your living space into the evening.',
      },
      {
        title: 'Accent & Feature Lighting',
        description:
          'Sculpture, water features, specimen plants — we identify the elements worth highlighting and design accent lighting that draws the eye to what matters most.',
      },
      {
        title: 'Smart Lighting Systems',
        description:
          'Programmable timers, zone controls, and smart home integration give you effortless control over your outdoor lighting — the right light, in the right place, at the right time.',
      },
    ],
    whyYardie: [
      {
        heading: 'Designed as a system',
        body: 'We don\'t just place fixtures — we design a complete lighting plan. Every fixture, every beam angle, and every zone is considered together so the result is cohesive and intentional.',
      },
      {
        heading: 'FX Lighting products',
        body: 'We specify and install FX Lighting fixtures — a professional-grade product line trusted for reliability, aesthetics, and performance across all exterior lighting applications.',
      },
      {
        heading: 'Clean, concealed installation',
        body: 'Wiring, transformers, and conduit are installed cleanly and concealed carefully. A great lighting system should be invisible during the day and stunning at night.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'irrigation',
    name: 'Irrigation',
    tagline: 'The right water, in the right place, at the right time.',
    intro:
      'A properly designed irrigation system is the foundation of a healthy, low-maintenance landscape. Yardie designs, installs, and maintains irrigation systems that deliver water precisely where it\'s needed — protecting your investment in your landscape and eliminating the time cost of manual watering.',
    heroImage: '/DSC04294.jpg',
    featureImage: '/DSC00044.jpg',
    heroHeadline: 'Irrigation systems\nthat work as hard as you do.',
    heroSubline:
      'Custom-designed, efficiently installed irrigation that keeps your landscape healthy and eliminates the guesswork of manual watering.',
    specialties: [
      {
        title: 'System Design & Layout',
        description:
          'Every irrigation system we design begins with an analysis of your property\'s zones, soil type, water pressure, and plant material — ensuring coverage is complete and water is never wasted.',
      },
      {
        title: 'Drip Irrigation',
        description:
          'For planting beds, gardens, and areas where targeted delivery matters most, drip systems deliver water directly to root zones — maximizing efficiency and minimizing evaporation.',
      },
      {
        title: 'Rotor & Spray Heads',
        description:
          'For turf areas and larger zones, we design and install rotor and spray head systems sized and spaced for even, consistent coverage without over- or under-watering.',
      },
      {
        title: 'Smart Controllers',
        description:
          'Weather-responsive smart controllers adjust watering schedules automatically based on actual conditions — preventing overwatering during rain and compensating during heat.',
      },
      {
        title: 'Backflow Prevention & Maintenance',
        description:
          'Every system we install includes proper backflow prevention. We also offer seasonal start-up, winterization, and ongoing maintenance to keep your system operating at peak performance.',
      },
    ],
    whyYardie: [
      {
        heading: 'Zone-by-zone precision',
        body: 'Different plants, soils, and exposures have different water needs. We design irrigation zones that address each area individually — so nothing is overwatered and nothing is neglected.',
      },
      {
        heading: 'Installation by landscape experts',
        body: 'Because we also design and maintain the landscapes your irrigation serves, we understand plant water requirements at a level that a pure irrigation contractor cannot.',
      },
      {
        heading: 'Built for longevity',
        body: 'We use quality components and install them properly. Properly installed irrigation systems last for decades with minimal maintenance — protecting your landscape investment long-term.',
      },
    ],
    relatedProjects: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// ─── FAQs (no pricing information) ───────────────────────────────────────────

export const faqs: FAQCategory[] = [
  {
    category: 'Landscapes',
    items: [
      {
        question: 'How does the landscape design process work?',
        answer:
          'We start with a complimentary consultation to understand your goals, preferences, and property conditions. From there we develop a custom planting plan, walk you through it for feedback, and then install to the approved design. The process is collaborative throughout.',
      },
      {
        question: 'What is the best time of year to plant in Eastern NC?',
        answer:
          'Spring and fall are the ideal planting seasons in Eastern North Carolina. Cooler temperatures and more reliable rainfall help new plants establish strong root systems before summer heat or winter dormancy. That said, we can install and establish plantings year-round with the right care approach.',
      },
      {
        question: 'Do you offer ongoing maintenance after installation?',
        answer:
          'Yes. We offer seasonal maintenance programs that include mulching, pruning, fertilization, and general upkeep. Many clients find that having the same team maintain what we installed produces the best long-term results — we know your plants and what they need.',
      },
      {
        question: 'What plants do you recommend for the Greenville, NC area?',
        answer:
          'We work with plants well-suited to Eastern NC\'s climate — including native species, drought-tolerant perennials, and reliable shrubs that thrive in our heat and humidity. We\'ll always recommend species that are right for your specific site conditions rather than generic solutions.',
      },
      {
        question: 'How long does a landscape installation typically take?',
        answer:
          'Scope determines timeline. A single planting bed installation might take a day; a full-property landscape transformation can take several weeks. We\'ll give you a clear schedule before any work begins so you know exactly what to expect.',
      },
    ],
  },
  {
    category: 'Hardscapes',
    items: [
      {
        question: 'What hardscape materials do you work with?',
        answer:
          'We work with a range of premium materials including concrete pavers (Belgard and Techo-Bloc), natural stone, brick, and poured concrete. The right material depends on your design goals, how the space will be used, and the character of your home. We\'ll walk you through the options and help you make the best choice.',
      },
      {
        question: 'How long does hardscape installation take?',
        answer:
          'A patio installation typically takes between two and five days depending on size and complexity. Projects involving walls, drainage work, or multiple features take longer. We provide a detailed schedule before starting so you can plan accordingly.',
      },
      {
        question: 'Do I need a permit for a patio or retaining wall?',
        answer:
          'Permit requirements vary by municipality and project scope. Taller retaining walls and structures attached to the home often require permits; ground-level patios typically do not. We research requirements for your specific project and handle the permitting process when it\'s needed.',
      },
      {
        question: 'How do I care for my paver patio?',
        answer:
          'Concrete pavers are low-maintenance. We recommend annual cleaning and sealing to maintain colour and prevent weeds from establishing in the joints. We can walk you through a care routine — or handle it for you as part of an ongoing maintenance plan.',
      },
      {
        question: 'Can hardscaping be added to an existing landscape?',
        answer:
          'Absolutely. We regularly add patios, walkways, and walls to established properties. We take care to protect existing plantings and trees during construction and to integrate the new hardscape with what\'s already there.',
      },
    ],
  },
  {
    category: 'Masonry',
    items: [
      {
        question: 'What types of masonry work do you offer?',
        answer:
          'We build stone and brick walls, columns, steps, outdoor kitchens and fireplaces, seating walls, fire pit surrounds, and custom decorative features. If it involves stone, brick, or mortar, it\'s in our scope.',
      },
      {
        question: 'What stone and brick products do you use?',
        answer:
          'We work with Buechel Stone for natural stone, Bob Timberlake Stone for cultured stone, and a range of quality brick suppliers. We\'ll help you select materials that suit your design vision and complement your home\'s existing character.',
      },
      {
        question: 'How long does masonry work last?',
        answer:
          'Properly built masonry is essentially permanent. Stone and brick structures built on correct foundations with proper drainage can last generations with minimal maintenance. We build with longevity in mind from the base up.',
      },
      {
        question: 'Can you match existing masonry on my property?',
        answer:
          'In most cases, yes. We carefully assess your existing materials and work to source the closest available match. Where an exact match isn\'t possible, we design additions that complement rather than compete with what\'s already there.',
      },
      {
        question: 'Do outdoor kitchens and fireplaces require permits?',
        answer:
          'Built-in outdoor kitchens and gas fireplaces typically require permits and inspections. We manage this process for you — researching local requirements, submitting applications, and scheduling inspections — so you don\'t have to navigate it yourself.',
      },
    ],
  },
  {
    category: 'Lighting',
    items: [
      {
        question: 'What type of lighting do you install?',
        answer:
          'We design and install low-voltage LED landscape lighting systems — including uplights, path lights, accent fixtures, patio lights, and step lights. All of our systems use energy-efficient LED technology that provides years of reliable, beautiful performance.',
      },
      {
        question: 'How long does a lighting installation take?',
        answer:
          'Most residential lighting installations are completed in one day. Larger or more complex systems may take two days. We handle all wiring, transformer installation, and programming — leaving your property clean and your lighting fully operational.',
      },
      {
        question: 'Will the wiring be visible?',
        answer:
          'No. We route all wiring underground and conceal transformer and connection points carefully. The goal is for the system to be completely invisible during the day and seamlessly beautiful at night.',
      },
      {
        question: 'Can lighting be added after a landscape or hardscape is installed?',
        answer:
          'Yes, and we do this regularly. Retrofitting lighting to an existing landscape or hardscape is straightforward in most cases. We\'ll assess your property and design a system that works with what you have.',
      },
      {
        question: 'Do you offer smart lighting controls?',
        answer:
          'Yes. We offer programmable timer systems and smart controllers that can be integrated with most home automation platforms. Automated scheduling means your lighting comes on and off exactly when you want it, every day, without any manual intervention.',
      },
    ],
  },
  {
    category: 'Irrigation',
    items: [
      {
        question: 'How do I know if my property needs an irrigation system?',
        answer:
          'If you\'re spending significant time hand-watering, if areas of your lawn or garden are consistently struggling, or if you\'re planning a new landscape installation, an irrigation system is almost certainly worth considering. We\'ll assess your specific situation and give you an honest recommendation.',
      },
      {
        question: 'What is a smart irrigation controller?',
        answer:
          'A smart controller monitors local weather data and automatically adjusts your watering schedule based on actual conditions — skipping cycles after rain, watering more during heat waves. It eliminates overwatering and underwatering without any manual input on your part.',
      },
      {
        question: 'Do you offer irrigation maintenance and winterization?',
        answer:
          'Yes. We offer seasonal start-up and winterization services, as well as mid-season check-ups, head adjustments, and repairs. Proper winterization is especially important to prevent freeze damage to your system.',
      },
      {
        question: 'Will irrigation installation damage my existing landscape?',
        answer:
          'We take considerable care to minimize disturbance during installation. We use narrow trenching equipment and work methodically to protect established plants, turf, and hardscape. Any areas disturbed during installation are restored before we leave.',
      },
      {
        question: 'How many zones does my system need?',
        answer:
          'Zone count depends on your property size, plant types, and water pressure. Turf areas, planting beds, and drip zones each typically operate separately to allow tailored watering schedules. We design your system with the right number of zones for complete, efficient coverage.',
      },
    ],
  },
];

// ─── Projects (static reference for service pages) ────────────────────────────
// The full portfolio lives in the database. This list is a lightweight reference
// used by the ServicePage component to render related project thumbnails.
// Add slugs here as projects are published to the DB.

export interface ProjectRef {
  slug: string;
  name: string;
  heroImage: string;
  location: string;
}

export const projects: ProjectRef[] = [];

// ─── Posts (static reference for sitemap fallback) ────────────────────────────
// The sitemap now queries the DB directly. This export is kept for compatibility.

export interface PostRef {
  slug: string;
}

export const posts: PostRef[] = [];
