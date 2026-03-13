// ─── Location Types ───────────────────────────────────────────────────────────

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;          // "Winterville"
  fullName: string;      // "Winterville, NC"
  county: string;        // "Pitt County"
  distanceNote: string;  // "7 miles from our Winterville base"
  tagline: string;       // Short headline tagline for cards/lists
  heroHeadline: string;
  heroSubline: string;
  heroImage: string;
  featureImage: string;
  introHeading: string;
  introBody: string[];   // paragraphs
  localStatement: string; // Pull-quote for photo break section
  servicesIntro: string;
  whyYardie: { heading: string; body: string }[];
  faqItems: LocationFAQ[];
  nearbyAreas: { name: string; slug: string }[];
  metaTitle: string;
  metaDescription: string;
}

// ─── Location Data ────────────────────────────────────────────────────────────

export const locations: Location[] = [
  // ── Winterville, NC ─────────────────────────────────────────────────────────
  {
    slug: 'winterville-nc',
    name: 'Winterville',
    fullName: 'Winterville, NC',
    county: 'Pitt County',
    distanceNote: '7 miles from our base',
    tagline: 'New-construction landscape and outdoor living design for Pitt County\'s fastest-growing community.',
    heroHeadline: 'Outdoor Living Design\nFor Winterville\'s Best Properties.',
    heroSubline:
      'Winterville is growing faster than any community in Pitt County. Yardie has been here since the beginning — and we know how to take a new-build lot or an established property and turn it into the outdoor environment it was always meant to be.',
    heroImage: '/DSC03546.jpg',
    featureImage: '/DSC00044.jpg',
    introHeading: 'Pitt County\'s Fastest-Growing Community Deserves Its Best-Designed Properties',
    introBody: [
      'Winterville has transformed over the past two decades from a quiet crossroads into one of Eastern North Carolina\'s most sought-after addresses. The growth along Firetower Road and the corridors branching off US-11 has brought with it a new generation of homeowners — people who have invested seriously in their homes and expect their outdoor spaces to match.',
      'Yardie has worked in Winterville since our founding. We understand the soil conditions, the drainage patterns that come with Pitt County\'s flat topography, and the plant material that performs well in this climate. For new-construction clients, we design and install complete outdoor environments from bare ground up — landscape, hardscape, irrigation, and lighting designed as a unified system. For homeowners in established neighborhoods, we refresh and elevate what\'s already there. Either way, the process starts the same: a conversation, a detailed visual plan, and no surprises.',
    ],
    localStatement:
      'Seven miles from our door — Winterville gets the same crew, the same care, and the same standards as our Greenville work. No exceptions.',
    servicesIntro:
      'New-construction landscape establishment, complete outdoor living systems, irrigation for Pitt County\'s growing season, hardscape and masonry — our full capability is available to Winterville homeowners.',
    whyYardie: [
      {
        heading: 'We work alongside Winterville\'s builders',
        body: 'New-build projects require coordination between landscape designers and the general contractor — scheduling irrigation before the driveway goes in, coordinating grading before the lawn is seeded. We\'ve done this many times in Winterville\'s newer developments and know how to keep a new-build project moving without rework.',
      },
      {
        heading: 'Design before a shovel turns',
        body: 'Every Yardie project begins with a complete visual plan. You see your outdoor space — accurately rendered — before any material is ordered or any ground is broken. That means you invest in exactly the result you\'ve approved, and there are no field decisions made without your input.',
      },
      {
        heading: 'We know this land',
        body: 'Pitt County\'s soils, drainage patterns, and seasonal conditions are things we\'ve learned through two decades of actual projects here — not textbooks. That knowledge informs every plant selection, every grading decision, and every irrigation zone we design in Winterville.',
      },
    ],
    faqItems: [
      {
        question: 'We\'re building a new home in Winterville. When should we bring Yardie in?',
        answer:
          'As early as possible — ideally before the builder has finished grading. Getting the landscape designer involved during construction allows us to coordinate irrigation rough-in, influence final grading for drainage, and ensure the outdoor space is part of the project from the start rather than an afterthought. We regularly work directly with Winterville-area builders and can coordinate directly with your GC.',
      },
      {
        question: 'Our neighborhood was built in the 2000s and the landscape looks tired. Can Yardie refresh it?',
        answer:
          'This is one of the most common projects we do in Winterville. Builder-grade landscapes from that era typically used fast-growing plants that have either outgrown their spaces or never created a designed effect. We assess what\'s healthy and worth keeping, what should be replaced, and design a refreshed landscape around your property\'s current conditions and your aesthetic goals.',
      },
      {
        question: 'What irrigation services do you provide in Winterville?',
        answer:
          'We design and install complete zone-specific irrigation systems for new and established properties. For new builds, we can rough in the system before hardscape and lawn installation. For existing properties, we retrofit with minimal disruption to established plants. Every system we install is designed around your specific plant material and property layout — not a generic per-zone template.',
      },
      {
        question: 'What does a complete outdoor living project in Winterville look like?',
        answer:
          'Most of our comprehensive Winterville projects combine at least two disciplines: landscape and hardscape, or hardscape and irrigation, or lighting and landscape. A full outdoor living build might include a custom patio, planting design around the perimeter, an irrigation system, and architectural lighting — all designed together so the result feels cohesive. We scope each project individually and present a detailed plan before anything is built.',
      },
    ],
    nearbyAreas: [
      { name: 'Ayden', slug: 'ayden-nc' },
      { name: 'Farmville', slug: 'farmville-nc' },
    ],
    metaTitle: 'Exterior Design & Landscaping in Winterville, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves Winterville, NC with premium landscape design, hardscaping, masonry, outdoor lighting, and irrigation. New-build and established properties in Pitt County.',
  },

  // ── Ayden, NC ────────────────────────────────────────────────────────────────
  {
    slug: 'ayden-nc',
    name: 'Ayden',
    fullName: 'Ayden, NC',
    county: 'Pitt County',
    distanceNote: '15 miles from our base',
    tagline: 'Landscape and hardscape design that honors Ayden\'s traditional character and mature properties.',
    heroHeadline: 'Exterior Design That\nRespects Ayden\'s Character.',
    heroSubline:
      'Ayden\'s homes carry generations of care. When we design here, we design in dialogue with what\'s already standing — making properties feel more fully themselves, not more like somewhere else.',
    heroImage: '/DSC03571.jpg',
    featureImage: '/DSC03551.jpg',
    introHeading: 'Design That Deepens What Makes Ayden Distinctive',
    introBody: [
      'Ayden has its own identity — and it wears it without apology. The streets are shaded by trees that have been growing for half a century. The homes have real architectural character. The community has a genuine sense of place that you feel the moment you\'re here. Yardie brings an exterior design approach that works with that identity rather than over it.',
      'Most of our Ayden projects involve properties that have been lived in and loved for years — mature landscapes that need thoughtful renewal, hardscape additions that should look like they belong, masonry work that respects the material traditions already present on the property. We don\'t arrive with a template. We arrive with questions: what makes this property distinctive, and how does the design we develop make it more so? The answer is always specific to the site, and the result always feels like it was always meant to be there.',
    ],
    localStatement:
      'The best exterior designs in Ayden don\'t announce themselves — they make a property feel exactly, completely right.',
    servicesIntro:
      'In Ayden, we often combine landscape renewal with permanent masonry and hardscape features that give established properties a new level of refinement — designed to complement existing architecture and mature site conditions.',
    whyYardie: [
      {
        heading: 'We read what\'s already there',
        body: 'Ayden\'s most valuable properties have mature trees, established site lines, and decades of accumulated character. Before we design anything, we assess what exists — what\'s worth preserving, what\'s struggling, and how new planting and hardscape can be designed around those anchors rather than ignoring them.',
      },
      {
        heading: 'Traditional forms, precision craft',
        body: 'The design language that works in Ayden is rooted in traditional forms — brick and stone features, classic planting compositions, clean masonry edges. We execute those forms with the same precision we bring to contemporary work. The result looks appropriately traditional because it\'s built with genuine skill.',
      },
      {
        heading: 'Permanent features built for the long run',
        body: 'Masonry walls, brick steps, and stone edging in Ayden aren\'t decorative — they\'re structural investments in the property. We build them on proper bases, with premium materials, using traditional jointing techniques. Work that looks as right in twenty years as it does the day we finish.',
      },
    ],
    faqItems: [
      {
        question: 'We have mature trees and large established plantings. Can Yardie work around them?',
        answer:
          'Yes — and this is genuinely where we do some of our best work. Mature trees are often the most irreplaceable feature of a property. We design around them as anchors, preserve their root zones during any hardscape installation, and build the overall landscape composition to frame and complement them. Removing a mature tree is rarely the right answer, and we\'ll tell you honestly when it is and when it isn\'t.',
      },
      {
        question: 'Our landscape was installed in the 1990s and has outgrown itself. What can Yardie do?',
        answer:
          'A landscape from that era typically has shrubs that have grown into each other, plants in the wrong locations relative to where they are now, and a general sense of overgrowth rather than design. We approach these projects by editing first — selectively removing or relocating — before adding anything new. The goal is a fresh, designed landscape that doesn\'t feel like it was just planted.',
      },
      {
        question: 'What kinds of masonry features work well on Ayden properties?',
        answer:
          'Brick columns, stone retaining walls, brick edging for planting beds, garden steps, and low masonry seating walls are all very at-home in Ayden\'s architectural context. We use material that complements what\'s already on the property — matching brick if possible, or natural stone that echoes the home\'s palette. Every masonry feature we build is set on a proper base with appropriate drainage to prevent movement over time.',
      },
      {
        question: 'How long does a landscape refresh project typically take in Ayden?',
        answer:
          'A focused landscape refresh — removing overgrown plantings, redesigning beds, installing new plant material — typically runs two to three weeks from installation start to completion. Projects that include masonry or hardscape additions run longer, and we\'ll give you a clear schedule with your proposal so you can plan accordingly. Design and approval happens before any installation begins.',
      },
    ],
    nearbyAreas: [
      { name: 'Winterville', slug: 'winterville-nc' },
      { name: 'Kinston', slug: 'kinston-nc' },
    ],
    metaTitle: 'Landscape Design & Hardscaping in Ayden, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves Ayden, NC with premium landscape design, hardscaping, masonry, and outdoor lighting. Expert exterior design for established properties in Pitt County.',
  },

  // ── Farmville, NC ─────────────────────────────────────────────────────────────
  {
    slug: 'farmville-nc',
    name: 'Farmville',
    fullName: 'Farmville, NC',
    county: 'Pitt County',
    distanceNote: '15 miles from our base',
    tagline: 'Full-service exterior design for Farmville\'s larger properties — landscape, hardscape, and irrigation at scale.',
    heroHeadline: 'The Space to Design\nSomething Extraordinary.',
    heroSubline:
      'Farmville properties have room — and room is opportunity. Yardie brings the landscape, hardscape, and irrigation expertise to turn a generous lot into a complete, considered outdoor environment.',
    heroImage: '/DSC03575.jpg',
    featureImage: '/DSC03563.jpg',
    introHeading: 'When a Property Has Space, the Only Limit is Design Ambition',
    introBody: [
      'Farmville sits at the western edge of Pitt County — a community of established homes, larger lots, and properties that have the space to be genuinely extraordinary outdoor environments. Many of them aren\'t yet. That\'s where we come in.',
      'Yardie brings a design capability scaled for larger properties. We know how to proportion a landscape for a half-acre lot without it feeling sparse, how to design an outdoor living area that relates properly to a home with real setbacks, and how to install an irrigation system that covers every zone efficiently without waste. We also understand the soil and drainage conditions specific to Pitt County\'s western edge — what drains well and what doesn\'t, what plant material performs through the summer heat, and where the low spots on larger lots need careful grading attention. That knowledge is in every design we develop for Farmville.',
    ],
    localStatement:
      'Farmville properties have the space to be extraordinary outdoor environments. The difference between ordinary and extraordinary is always the same thing: intentional design.',
    servicesIntro:
      'Farmville\'s larger residential properties benefit especially from comprehensive landscape design, efficient zone-specific irrigation, and cohesive hardscape that creates defined outdoor spaces within a generous lot.',
    whyYardie: [
      {
        heading: 'Designing at the right scale',
        body: 'A landscape designed for a 6,000 square foot urban lot will look sparse and unresolved on a Farmville property. We\'re experienced at calibrating planting compositions, hardscape proportions, and open lawn areas to the actual scale of the site — so the design feels full, intentional, and proportional to the home it surrounds.',
      },
      {
        heading: 'Irrigation that earns its keep',
        body: 'Larger properties in Farmville represent significant landscape investments. Protecting that investment with well-designed irrigation isn\'t optional — it\'s foundational. We design zone-specific systems sized for your property\'s actual plant material and coverage areas, calibrated for Pitt County\'s seasonal conditions, and installed to minimize disruption to what\'s already established.',
      },
      {
        heading: 'One team across every phase',
        body: 'Larger projects that span multiple disciplines — landscape, hardscape, and irrigation together — require continuity. The designers who develop your plan and the craftsmen who install it are Yardie\'s own people. No handoffs to subcontractors, no translation loss between design intent and installed result. One team from brief to completion.',
      },
    ],
    faqItems: [
      {
        question: 'We have a large lot that\'s never been properly designed. Where do we start?',
        answer:
          'We start with a complimentary site visit and a wide-open conversation about how you want to use the property. For larger lots, we often develop a phased master plan — a complete vision for the full property, with a practical implementation sequence that allows you to begin with the highest-priority areas and continue in phases over time. That way you have a cohesive long-term plan even if the full project unfolds over several seasons.',
      },
      {
        question: 'What drainage issues should we plan for in Farmville?',
        answer:
          'Farmville\'s flat topography means that grading for drainage has to be deliberate. Low spots on larger lots can hold water after heavy rain, damaging plant material and creating soggy conditions. We assess drainage as part of every design — incorporating French drains, swales, or grading adjustments into the plan as needed. Addressing drainage at the design stage is far less expensive than dealing with it after installation.',
      },
      {
        question: 'Can Yardie design and install a complete outdoor living area on a larger Farmville lot?',
        answer:
          'Yes. Larger lots often give us the opportunity to design genuinely expansive outdoor living spaces — a patio large enough to function as an outdoor room, planting to define the space without enclosing it, fire features and seating walls, and lighting that extends the space into the evening hours. We design these as complete environments, not assemblies of separate features.',
      },
      {
        question: 'Do you offer any kind of phased or sequenced installation for larger projects?',
        answer:
          'Yes — phased installation is something we plan for on larger properties. We\'ll develop a complete design and a recommended installation sequence that prioritizes the most impactful work first. Irrigation and grading typically happen early because they\'re difficult to add later. Hardscape and planting can be phased. Lighting is often added in a subsequent phase once the hardscape is established. We\'ll give you a clear sequence with your proposal.',
      },
    ],
    nearbyAreas: [
      { name: 'Winterville', slug: 'winterville-nc' },
      { name: 'Kinston', slug: 'kinston-nc' },
    ],
    metaTitle: 'Landscaping & Exterior Design in Farmville, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves Farmville, NC with full-service landscape design, hardscaping, irrigation, and outdoor lighting. Premium exterior design for larger Pitt County properties.',
  },

  // ── Washington, NC ───────────────────────────────────────────────────────────
  {
    slug: 'washington-nc',
    name: 'Washington',
    fullName: 'Washington, NC',
    county: 'Beaufort County',
    distanceNote: '35 miles from our base',
    tagline: 'Exterior design for Washington\'s historic homes, Pamlico River waterfront properties, and Beaufort County estates.',
    heroHeadline: 'Design Worthy of\n"The Original Washington."',
    heroSubline:
      'America\'s first Washington carries two centuries of architectural intention. Yardie brings the design sensibility and craft to match — for properties along the Pamlico, in the historic district, and throughout Beaufort County.',
    heroImage: '/DSC03527.jpg',
    featureImage: '/DSC03765.jpg',
    introHeading: 'Exterior Design Worthy of North Carolina\'s Most Historic Waterfront City',
    introBody: [
      'Washington, North Carolina was the first city in the United States to be named in honor of George Washington — incorporated in 1775, before the Revolution had concluded. That identity runs through the city like the Pamlico River runs through its center: quietly, permanently, defining everything around it. The homes here reflect it. Federal-style and Victorian architecture line streets that have been carefully maintained across generations. The Pamlico waterfront brings a particular design challenge — and a particular reward.',
      'When Yardie works in Washington, we approach each property as a design problem with strong historical context. The architecture is the first reference. Material traditions, planting palettes, and hardscape forms that have worked here for a century and a half are the foundation we build on. We don\'t impose a contemporary landscape on a 19th-century home. We develop an exterior environment that makes the property feel more fully what it already is — more complete, more considered, more beautiful at every hour of the day.',
    ],
    localStatement:
      'Washington\'s homes carry two hundred years of architectural intention. The exterior design that surrounds them should carry the same weight.',
    servicesIntro:
      'In Washington, our work is informed by the city\'s architectural heritage — particularly architectural lighting for historic facades, masonry that echoes the city\'s material traditions, and landscape compositions that complement rather than compete with established property character.',
    whyYardie: [
      {
        heading: 'Historic fabric, thoughtful response',
        body: 'Working on a historic property in Washington requires more than taste — it requires a genuine understanding of architectural context. We study each property\'s period, materials, and existing conditions before proposing anything. Plant selections, masonry materials, and hardscape forms are all chosen to feel native to the property, not transplanted from somewhere else.',
      },
      {
        heading: 'Lighting that reveals two centuries of detail',
        body: 'Architectural outdoor lighting does something remarkable for a historic home: it makes the craftsmanship visible after dark that most people walk past during the day. Thoughtfully placed uplighting, facade washing, and garden accent lighting can reveal cornice details, column proportions, and garden structure that are invisible in flat daylight. Washington\'s historic homes are exceptional canvases for this work.',
      },
      {
        heading: 'Masonry for the long century',
        body: 'Washington has a masonry tradition — brick structures that have stood since the 18th and 19th centuries are part of the city\'s visual fabric. When we add masonry to a Washington property, we build it to the same standard: proper footings, quality materials, traditional technique. Work designed to look as though it has always been there, and built to outlast any seasonal planting around it.',
      },
    ],
    faqItems: [
      {
        question: 'We have a historic home in Washington\'s historic district. Can Yardie work within those design constraints?',
        answer:
          'This is the kind of project we genuinely seek out. Historic district properties in Washington require exterior design that respects existing architecture, period material conventions, and site character established over generations. Our approach is to design in service of the property\'s existing character — choosing plants, stone, and hardscape forms that feel like they belong rather than like recent additions. We\'re experienced navigating these sensitivities.',
      },
      {
        question: 'What kind of outdoor lighting works for a Federal or Victorian home in Washington?',
        answer:
          'For period homes, we typically design low-profile architectural uplighting that illuminates the facade without the fixtures being visible by day — LED uplights set close to the foundation, aimed at architectural features. We pair that with subtle pathway and garden lighting at a lower intensity. The goal is for the light to reveal the home\'s character after dark, not to announce the lighting system itself. All fixtures are chosen for minimal visual intrusion during daylight.',
      },
      {
        question: 'We have a waterfront property on the Pamlico River. What considerations are specific to that context?',
        answer:
          'Waterfront properties in Washington have specific design needs: salt tolerance for plant material near the water, hardscape that handles drainage toward the river without erosion, and lighting that creates ambiance on the water-facing side of the property. We also consider privacy screening from the water and the relationship between the home and its dock or waterfront access. These are design problems we\'ve worked through before.',
      },
      {
        question: 'How do you handle a project 35 miles from Greenville?',
        answer:
          'Washington is within our regular service area for the right projects. You receive the full Yardie process — in-person consultation at your Washington property, a complete visual design, and installation with our own crew. We don\'t subcontract work at distance or reduce our design standards for projects outside our immediate area. The drive is straightforward and the work is the same.',
      },
    ],
    nearbyAreas: [
      { name: 'New Bern', slug: 'new-bern-nc' },
      { name: 'Kinston', slug: 'kinston-nc' },
    ],
    metaTitle: 'Landscape Design & Outdoor Lighting in Washington, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves Washington, NC with exterior design, landscape, masonry, and architectural outdoor lighting — specializing in historic and Pamlico River waterfront properties in Beaufort County.',
  },

  // ── Kinston, NC ──────────────────────────────────────────────────────────────
  {
    slug: 'kinston-nc',
    name: 'Kinston',
    fullName: 'Kinston, NC',
    county: 'Lenoir County',
    distanceNote: '30 miles from our base',
    tagline: 'Outdoor living design for Kinston homeowners who are investing in their properties alongside a city rediscovering its potential.',
    heroHeadline: 'Kinston Is Investing\nIn Itself. Your Property Should Too.',
    heroSubline:
      'A decade of genuine cultural renaissance — new restaurants, new energy, growing property values — and the homeowners who are part of it are raising their standards across the board. Yardie builds the outdoor environments that belong on those properties.',
    heroImage: '/DSC00009.jpg',
    featureImage: '/DSC03727.jpg',
    introHeading: 'Design for a City Rediscovering Its Potential',
    introBody: [
      'Kinston\'s reinvention over the past decade has been real and earned. The food scene anchored by Chef & the Farmer, the growth of Mother Earth Brewing, the restoration projects downtown — these aren\'t cosmetic. They signal a city with genuine momentum. And the homeowners who are part of that story are investing at a different level: not just maintaining properties, but transforming them.',
      'Yardie brings the outdoor living design capability to match that ambition. We serve Kinston homeowners with our complete offering — landscape design, custom hardscaping, masonry, architectural lighting, and irrigation. Most of our Kinston projects are comprehensive: homeowners who want the outdoor environment to feel as considered as the interior they\'ve invested in. We bring the same design process we use in Greenville — a thorough consultation, a complete visual plan before construction begins, and a crew that builds what was designed — to every project in Lenoir County.',
    ],
    localStatement:
      'Kinston\'s revival isn\'t just happening inside restaurants and breweries. The best properties tell that story from the street.',
    servicesIntro:
      'Kinston homeowners increasingly want complete outdoor environments — hardscape and landscape designed together, with lighting and irrigation integrated from the start. That\'s exactly what Yardie designs and builds.',
    whyYardie: [
      {
        heading: 'Design that announces investment',
        body: 'A well-designed exterior is the first thing anyone sees — and in a city where property investment is accelerating, the exterior of your home communicates your standards before anyone walks through the door. We design outdoor environments that look intentional, finished, and worth noticing.',
      },
      {
        heading: 'Complete outdoor living, one team',
        body: 'Kinston\'s warm Eastern NC summers make outdoor space genuinely livable for nine months of the year. A well-designed patio, comfortable outdoor dining area, and a planting scheme that provides shade and privacy can transform how you use your property. We design these environments as complete systems — not assembled from separate contractors.',
      },
      {
        heading: 'Twenty years of Eastern NC craft',
        body: 'Yardie has designed and built outdoor environments across Eastern North Carolina for over two decades. That track record means tested processes, deeply experienced crew, and a team that has solved the design and construction challenges your property presents — in this climate, on these soils — many times before.',
      },
    ],
    faqItems: [
      {
        question: 'We want a complete outdoor transformation — patio, outdoor kitchen, planting, and lighting. How does Yardie approach a project like that?',
        answer:
          'Multi-discipline projects like this are where we do our most satisfying work. We begin with a thorough consultation at your property, listening to how you want to use the space and what the aesthetic vision is. We develop a complete design that integrates hardscape, landscape, lighting, and any masonry features into a single cohesive plan. You approve the design before we build anything. Then our crew — the same people who developed the plan — installs it. One design, one team, one result.',
      },
      {
        question: 'We\'re restoring an older Kinston home. Can Yardie help us design the outdoor spaces to match?',
        answer:
          'Yes — and this is rewarding work. Older homes in Kinston often have large lots, mature trees, and the bones of a beautiful property that hasn\'t been designed in decades. We assess what exists, identify what\'s worth preserving, and develop a landscape and hardscape plan that feels appropriate to the property\'s architectural era while giving it a level of quality and finish it may never have had.',
      },
      {
        question: 'What does Yardie\'s design process look like for a Kinston project?',
        answer:
          'We start with a complimentary consultation at your property — in person, so we can actually see the site, understand the conditions, and hear what you\'re hoping to achieve. We develop a detailed design proposal and present it visually so you can see the finished result before committing. We refine it with your input, confirm the plan, and install with our own crew. You\'re kept informed at every stage.',
      },
      {
        question: 'How do you handle a project 30 miles from Greenville?',
        answer:
          'Kinston is a regular part of our service area. We make the drive to Kinston regularly for consultations, design reviews, and installation supervision. You receive the same Yardie team and the same design standards as our local Greenville projects. There are no reduced service levels or added costs for Kinston.',
      },
    ],
    nearbyAreas: [
      { name: 'Farmville', slug: 'farmville-nc' },
      { name: 'Washington', slug: 'washington-nc' },
    ],
    metaTitle: 'Outdoor Living Design & Landscaping in Kinston, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves Kinston, NC with complete outdoor living design — landscape, hardscaping, masonry, lighting, and irrigation. Premium exterior design for Lenoir County homeowners.',
  },

  // ── New Bern, NC ─────────────────────────────────────────────────────────────
  {
    slug: 'new-bern-nc',
    name: 'New Bern',
    fullName: 'New Bern, NC',
    county: 'Craven County',
    distanceNote: '55 miles from our base',
    tagline: 'Premium exterior design for New Bern\'s historic homes, Neuse and Trent River waterfront properties, and Craven County estates.',
    heroHeadline: 'Premier Exterior Design\nFor North Carolina\'s First Capital.',
    heroSubline:
      'Founded in 1710. Home to Tryon Palace. Set at the confluence of the Neuse and Trent Rivers. New Bern\'s finest properties demand exterior design at the absolute highest standard — and that\'s the only standard we bring.',
    heroImage: '/DSC03544.jpg',
    featureImage: '/DSC03808---Copy.jpg',
    introHeading: 'North Carolina\'s First Colonial Capital Deserves Its Finest Exterior Design',
    introBody: [
      'New Bern was founded in 1710 by Swiss and German settlers — making it one of the oldest European settlements in North America and the first permanent capital of colonial North Carolina. Tryon Palace, built in 1770 as the governor\'s residence, stood as the most significant public building in the American colonies. That history isn\'t background noise here. It\'s the substance of what makes New Bern one of the most architecturally and culturally significant small cities in the Southeast.',
      'Yardie Design serves New Bern and Craven County homeowners who understand what that context demands of exterior design. Colonial, Federal, and antebellum homes on pollock Street and through the historic district; waterfront properties on the Neuse and Trent Rivers; larger estates throughout Craven County — these properties set a standard that the outdoor environment must meet. We bring the same design rigor, premium material specifications, and expert installation that defines our best Greenville work to every New Bern engagement. Our projects here tend to be comprehensive — because these properties deserve to be treated as complete environments, not properties where the interior is finished and the exterior is an afterthought.',
    ],
    localStatement:
      'A city that has stood since 1710 — home to North Carolina\'s first colonial palace — demands exterior design built to the same standard of permanence.',
    servicesIntro:
      'New Bern properties call for premium execution across every discipline: landscape design that respects the city\'s plant heritage, masonry and hardscape built at the level the architecture demands, architectural lighting that reveals historic facade detail, and precision irrigation.',
    whyYardie: [
      {
        heading: 'Design intelligence for landmark properties',
        body: 'New Bern\'s significant homes — colonial, Federal, and Victorian — are not generic canvases. They have architectural authority, historical context, and material traditions that inform every exterior design decision we make. We bring genuine design thinking to each engagement: not catalog selections or standard templates, but considered plans developed specifically for your property\'s architecture, scale, and setting.',
      },
      {
        heading: 'Premium materials, properly installed',
        body: 'A New Bern property deserves premium materials at every level — quality natural stone, professional-grade lighting fixtures, properly compacted hardscape bases, plant material selected for permanent landscape effect rather than fast establishment. We specify and install at the level the property warrants, and we back that work with the confidence that comes from twenty years of doing this at the highest standard.',
      },
      {
        heading: 'All five disciplines, one cohesive result',
        body: 'Most New Bern engagements involve multiple design disciplines working together — landscape and hardscape, masonry and lighting, irrigation and planting design. Our team has the expertise to execute at a high level across all of them, and the design process to ensure they all feel like one thing. That integration is the difference between a finished outdoor environment and an assembly of separately-contracted features.',
      },
    ],
    faqItems: [
      {
        question: 'We have a home in New Bern\'s historic district. How does Yardie approach historically sensitive exterior design?',
        answer:
          'Historic properties in New Bern are among the most rewarding projects we take on, and among the most requiring of careful judgment. Our approach treats the home\'s architecture as the primary design reference — plant material, stone, paving, and hardscape forms are all chosen to be in dialogue with what\'s already there, not to overlay a contemporary aesthetic on a historic property. We\'ve worked with historic properties extensively and understand how to navigate these sensitivities. The goal is always for the finished exterior to feel like it has always belonged to the property.',
      },
      {
        question: 'We have a waterfront property on the Neuse River. What does that context require in terms of design?',
        answer:
          'Neuse River waterfront properties present specific design considerations: plant material with appropriate salt and moisture tolerance, hardscape drainage that manages toward the water without erosion, and lighting that creates ambiance on the water-facing elevation. We also design carefully for the visual relationship between the home and the river — screening, framing, and transitional landscape that makes the most of the waterfront orientation while maintaining privacy and protecting the bank. These are design problems we have specific experience with.',
      },
      {
        question: 'What does a comprehensive exterior design engagement in New Bern typically include?',
        answer:
          'Our New Bern projects typically begin as full-property engagements: a complete landscape plan (planting design, lawn establishment or restoration, tree and shrub placement), custom hardscape (patio, walkways, steps, outdoor living structures), masonry features (walls, columns, garden structures), architectural lighting, and irrigation designed for the complete plant palette. We design these elements together as one outdoor environment — which is the only way to ensure they feel cohesive when built.',
      },
      {
        question: 'New Bern is 55 miles from Greenville. How does Yardie handle projects at that distance?',
        answer:
          'We take New Bern projects selectively — for engagements where the scope and the property make the distance worthwhile for both sides. When we commit to a New Bern project, we commit fully: in-person site visits, the same design process, and installation with our own crew. We don\'t sub out work at distance or reduce the design standard. Initial consultations are complimentary — reach out and we\'ll discuss your project to determine whether it\'s the right fit.',
      },
    ],
    nearbyAreas: [
      { name: 'Washington', slug: 'washington-nc' },
      { name: 'Kinston', slug: 'kinston-nc' },
    ],
    metaTitle: 'Luxury Landscape & Exterior Design in New Bern, NC | Yardie Design',
    metaDescription:
      'Yardie Design serves New Bern, NC with premium exterior design — landscape, hardscaping, masonry, architectural lighting, and irrigation for historic and waterfront properties in Craven County.',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function generateLocationSlugParams() {
  return locations.map((l) => ({ slug: l.slug }));
}
