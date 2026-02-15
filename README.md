# Yardie - Exterior Design Website

A modern, SEO-optimized Next.js website for Yardie Exterior Design company, featuring beautiful UI/UX and professional design.

## Features

- ✨ Modern, responsive design with beautiful animations
- 🎨 Professional UI with earth-toned color palette
- 🚀 Built with Next.js 14 and TypeScript
- 💨 Tailwind CSS for styling
- 📱 Fully responsive across all devices
- 🔍 SEO optimized with metadata, sitemap, and robots.txt
- ♿ Accessibility-focused
- 🎭 Smooth animations and transitions
- 📧 Contact form with validation

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-actions
2. **Services** - Six core service offerings with icons and descriptions
3. **Portfolio** - Featured projects showcase with hover effects
4. **About** - Company story and statistics
5. **Contact** - Full contact form and information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Animations**: CSS animations with stagger delays

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd yardie-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
yardie-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles and animations
│   ├── sitemap.ts          # Sitemap generation
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── public/
│   └── robots.txt          # SEO robots file
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data ready
- Optimized images
- Fast loading times
- Mobile-first responsive design
- Sitemap.xml generation
- Robots.txt configuration

## Customization

### Colors

The color palette uses earth and moss tones defined in `tailwind.config.ts`. Modify the colors there to change the theme:

```typescript
colors: {
  earth: { ... },
  moss: { ... },
}
```

### Content

Update the content in `app/page.tsx`:
- Services array
- Portfolio projects
- Company information
- Contact details

### Images

Replace placeholder images with actual project photos. Update URLs in:
- Hero section background
- Portfolio items
- About section image

## Performance Optimization

- Lazy loading for images
- Optimized fonts with Google Fonts
- Minimal JavaScript bundle
- CSS-only animations where possible
- Responsive image sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting service

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

## Future Enhancements

- Blog section for landscaping tips
- Project gallery with filtering
- Client testimonials carousel
- Before/after image comparisons
- Service request calculator
- Integration with scheduling system

## License

Private - All rights reserved

## Contact

For questions or support, contact: info@yardiedesign.com

---

Built with ❤️ for Yardie Design
