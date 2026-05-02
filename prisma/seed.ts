import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter, log: ['error'] });

async function main() {
  // ── Admin user ─────────────────────────────────────────────────────────────
  const email = process.env.ADMIN_EMAIL ?? 'admin@yardiedesign.com';
  const password = process.env.ADMIN_PASSWORD ?? 'change-me-immediately';

  const passwordHash = await bcrypt.hash(password, 12);
  const existing = await db.adminUser.findUnique({ where: { email } });
  if (!existing) {
    await db.adminUser.create({ data: { email, passwordHash, role: 'admin' } });
    console.log(`✓ Admin user created: ${email}`);
  } else {
    await db.adminUser.update({ where: { email }, data: { passwordHash } });
    console.log(`✓ Admin password updated: ${email}`);
  }


  // ── Blog Posts ─────────────────────────────────────────────────────────────
  const posts = [
    {
      title: 'Choosing the Right Masonry for Your Home',
      slug: 'choosing-the-right-masonry',
      excerpt: 'Stone, brick, or poured concrete — the material you choose shapes the character of your exterior for decades. Here\'s how to think about it.',
      content: `Masonry is one of the most permanent investments you can make in your exterior. Unlike plantings that evolve over time, or lighting that can be updated with a fixture swap, masonry choices are foundational — they define the character of a space for decades.\n\nSo the decision deserves careful thought. Here's how we approach it with clients.\n\n## Start with the architecture\n\nThe first question isn't what you prefer — it's what your home's architecture calls for. A colonial with brick detailing wants masonry that speaks the same language: tumbled brick, bluestone, or dressed limestone. A modern farmhouse might call for dry-stacked ledgestone or raw concrete block. A craftsman bungalow wants river stone or irregular fieldstone.\n\nThe goal is coherence, not matching. You don't need to replicate what's already there — you need to extend the conversation the architecture is already having.\n\n## Consider the maintenance reality\n\nDifferent materials age differently. Bluestone develops a natural patina over time that most people find beautiful. Brick requires periodic repointing as mortar erodes. Concrete pavers can shift and settle over time and occasionally need releveling. Dry-stacked stone walls move with frost heave in northern climates (less of a concern in Eastern NC, but still worth knowing).\n\nBe honest with yourself about how much maintenance you're willing to do. The most beautiful material is the one you'll actually maintain.\n\n## Think in terms of scale\n\nMasonry has visual weight. A large format paver (24x24 or larger) makes a small patio look bigger and more refined. A small cobblestone or brick pattern adds texture and warmth but can read as busy in an expansive space.\n\nWe always mock up material choices at scale on the actual site before finalizing anything. Photos in a catalog are almost useless for this decision.\n\n## The honest answer on budget\n\nNatural stone costs more than concrete pavers, which cost more than poured concrete. That's true. But the lifespan and aesthetic longevity of natural stone — properly installed — generally justifies the premium. The cheapest option is rarely the most economical over a 20-year horizon.\n\nOur advice: if you have to choose between a larger project in a cheaper material and a smaller, more focused project in a material you'll love forever, choose the latter. Get the firepit area right in bluestone rather than doing the whole yard in concrete pavers you'll want to replace in ten years.`,
      featuredImage: '/DSC03765.jpg',
      category: 'Masonry',
      author: 'Scott Baldwin',
      publishDate: new Date('2024-12-04'),
      publishStatus: 'published',
      readTime: '6 min read',
    },
    {
      title: 'How Masonry Enhances Curb Appeal',
      slug: 'masonry-curb-appeal',
      excerpt: 'The right stone work doesn\'t just add visual interest — it changes how your home reads from the street. A look at what masonry actually does for property value and presence.',
      content: `There's a reason stone has been used in residential and civic architecture for thousands of years: it communicates permanence, care, and intention in a way that almost no other material can.\n\nAt the street level — the first 30 feet of a property that a visitor or passerby actually registers — masonry details make an outsized impact relative to their cost.\n\n## The psychology of a stone wall\n\nA low perimeter wall does something simple but profound: it defines the boundary of a property as intentional. Without it, the transition from sidewalk to yard is ambiguous. With it — even a 12-inch dry-stacked limestone wall — the property has an edge, a presence, a sense that someone thought carefully about how it meets the world.\n\nThis is why entry columns, perimeter walls, and stone-capped retaining walls consistently show up in high-value residential exterior work. They're not decoration. They're structure — visual and literal.\n\n## Entry sequences matter most\n\nIf you're allocating a masonry budget, concentrate it at the entry. A stone path from driveway to front door, flanked by stone-capped columns or a low retaining wall, does more for curb appeal than the same investment spread across the rear yard.\n\nFirst impressions in residential real estate work the same way they work everywhere else: you don't get a second chance, and the entry sequence is the first impression.\n\n## Return on investment\n\nProfessionally installed masonry features consistently return a high percentage of their cost at resale. More importantly, they make a property significantly easier to sell — buyers respond viscerally to well-executed outdoor work in a way they don't to interior updates.\n\nThe data on this is consistent across price points: exterior improvements, particularly masonry and landscape work, outperform kitchen and bath renovations in return-on-investment studies. The exterior is what makes someone want to see the interior.`,
      featuredImage: '/DSC03806.jpg',
      category: 'Masonry',
      author: 'Scott Baldwin',
      publishDate: new Date('2024-11-30'),
      publishStatus: 'published',
      readTime: '5 min read',
    },
    {
      title: '5 Ways to Boost Curb Appeal with Landscaping',
      slug: 'curb-appeal-landscaping',
      excerpt: 'Practical, design-led improvements that make a real difference — not the generic advice you\'ve seen a hundred times.',
      content: `Most curb appeal advice is generic to the point of uselessness. "Add color." "Keep it tidy." "Power wash the driveway." We can do better than that.\n\nHere are five landscape-specific moves that actually change how a property reads from the street.\n\n## 1. Anchor with structure, then add softness\n\nThe mistake most homeowners make is starting with plants. Plants are soft — they fill, drift, and change with the seasons. A yard that starts with plants and no structure looks different every month and never quite feels resolved.\n\nStart with structure: defined bed edges, a stone or metal border, a specimen tree or large shrub in a considered location. Then layer softness around that structure. The result is a planting that looks intentional and holds up across seasons.\n\n## 2. Edit before you add\n\nNinety percent of the curb appeal improvements we make involve removing something before we add anything. Overgrown foundation plantings that obscure windows. Mixed plantings with no coherent palette. Dying or diseased material that's been left in place.\n\nClear the board first. A clean, simple bed with good soil and fresh mulch already looks better than a cluttered bed with expensive new plantings dropped in.\n\n## 3. The 60-foot rule\n\nStep back 60 feet from your front elevation. That's roughly what a driver or pedestrian sees. At that distance, individual plant varieties disappear — you see mass, color, and structure. Design from that vantage point, not from up close.\n\nLarge, bold masses of the same plant almost always read better at this scale than a diverse collection of individual specimens. One large drift of ornamental grass says more than five different cultivars mixed together.\n\n## 4. Light what you've built\n\nOutdoor landscape lighting is one of the highest-leverage investments in curb appeal — the house looks completely different after dark, and that's often when it matters most (coming home, arriving for dinner parties, drive-by impressions at night).\n\nA simple uplighting scheme — three or four well-placed fixtures washing the front elevation and silhouetting a specimen tree or two — transforms the nighttime street presence of a home completely. The investment is modest. The impact is not.\n\n## 5. Address the transition zone\n\nThe zone between your home's foundation and the street — the area that includes the walk, any front steps, the entry planting, and the transition to the lawn — is where most curb appeal lives or dies.\n\nA clean, level walk in an appropriate material. A defined entry planting with clear edges. Steps that are proportioned to the scale of the house. These details, done well, do more for a property's street presence than anything in the rear yard.`,
      featuredImage: '/DSC03551.jpg',
      category: 'Landscapes',
      author: 'Scott Baldwin',
      publishDate: new Date('2024-12-01'),
      publishStatus: 'published',
      readTime: '7 min read',
    },
  ];

  for (const post of posts) {
    const exists = await db.post.findUnique({ where: { slug: post.slug } });
    if (!exists) {
      await db.post.create({ data: post });
      console.log(`✓ Post: ${post.title}`);
    } else {
      console.log(`  Post exists: ${post.title}`);
    }
  }

  // ── Hero Slides ─────────────────────────────────────────────────────────────
  const heroSlides = [
    { imageUrl: '/IMG_8148.jpg', altText: 'Beautifully landscaped outdoor living space by Yardie Design, Greenville NC', sortOrder: 1 },
    { imageUrl: '/DSC03765.jpg', altText: 'Custom masonry and stonework by Yardie Design, Greenville NC', sortOrder: 2 },
    { imageUrl: '/DSC03551.jpg', altText: 'Lush landscape planting design by Yardie Design, Eastern NC', sortOrder: 3 },
    { imageUrl: '/DSC00044.jpg', altText: 'Outdoor patio and hardscape design by Yardie Design, Greenville NC', sortOrder: 4 },
  ];

  const existingSlides = await db.heroSlide.count();
  if (existingSlides === 0) {
    for (const slide of heroSlides) {
      await db.heroSlide.create({ data: slide });
    }
    console.log(`✓ Hero slides seeded: ${heroSlides.length}`);
  } else {
    console.log(`  Hero slides exist: ${existingSlides}`);
  }

  console.log('\n✓ Seed complete');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
