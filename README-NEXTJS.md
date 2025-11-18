# Messika Gift Selection - Next.js Implementation

Enterprise-grade Next.js + React + TypeScript implementation of the Messika luxury jewelry gift selection landing page, built from a pixel-accurate JSON specification.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

## 📋 Tech Stack

- **Framework:** Next.js 14.2+ (App Router)
- **Language:** TypeScript 5.6+
- **Styling:** Tailwind CSS 3.4+
- **Font Optimization:** Next.js Font (Google Fonts)
- **Image Optimization:** Next.js Image with AVIF/WebP
- **Runtime:** Node.js 18+

## 🎯 Key Features

- **Pixel-Perfect Accuracy:** All measurements match JSON spec exactly
- **Enterprise Performance:** 
  - Optimized fonts with swap strategy
  - Automatic image format negotiation (AVIF → WebP → JPEG)
  - Static generation (SSG) for instant page loads
  - Code splitting and tree shaking
- **Type Safety:** Full TypeScript coverage with strict mode
- **Accessibility:** WCAG 2.1 AA compliant
  - Semantic HTML
  - ARIA labels on interactive elements
  - Proper heading hierarchy
- **SEO Optimized:** Meta tags, Open Graph, structured data ready

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font loading
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── icons/
│   │   └── Icons.tsx       # SVG icon components
│   ├── layout/
│   │   └── Header.tsx      # Navigation header
│   └── sections/
│       └── Hero.tsx        # Hero section
└── types/
    └── specification.ts    # JSON spec type definitions
```

## 🎨 Design Specifications

### Viewport
- **Width:** 1440px
- **Height:** 900px
- **Device:** Desktop

### Color Palette
- **White:** `#FFFFFF`
- **Deep Purple:** `#381E55` (background)
- **Silver Reflection:** `#EFEFEF` (jewelry highlight)

### Typography
- **Body:** Montserrat (400, 500)
- **Display:** Oswald (700)
- **Base Size:** 14px

### Grid System
- **Columns:** 12
- **Gutter:** 20px
- **Margin:** 40px

## 📝 Implementation Notes

### Exact Measurements Applied
- Header padding: `25px 50px 0 50px`
- Hero title: `42px` font, `48px` line-height, `0.5px` letter-spacing
- CTA margin-bottom: `40px`
- Scroll dots: `3px × 3px` with `4px` gap
- All spacing values preserved from JSON specification

### Component Architecture
- **Atomic Design Pattern:**
  - Atoms: Icons (SVG components)
  - Molecules: Wishlist link (icon + text group)
  - Organisms: Header, Hero sections
  - Template: Page layout

### Z-Index Layering
- Background: `z-index: 0`
- Hero content: `z-index: 5`
- Header: `z-index: 10`

## 🔧 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
```

## 📦 Asset Management

### Hero Image
- **Location:** `/public/assets/messika_holiday_purple_hero.jpg`
- **Current:** SVG placeholder with purple gradient
- **Production:** Replace with high-res JPEG (2880×1800px minimum)
- **Alt Text:** "Messika silver bangle with three moving diamonds against glossy purple spherical balloons"

## ✅ QA Checklist

- [x] Header background is transparent and overlays image
- [x] 16px spacing between "GIFT SELECTION" and "DISCOVER"
- [x] "MESSIKA" logo perfectly centered
- [x] SVG stroke width consistent across all icons
- [x] Z-index layering correct (0 → 5 → 10)
- [x] All measurements match JSON spec exactly

## 🚀 Production Deployment

### Pre-deployment Checklist
1. Replace SVG placeholder with production image
2. Configure environment variables
3. Set up analytics (GA4, etc.)
4. Add error monitoring (Sentry)
5. Configure CSP headers
6. Run Lighthouse audit (target: 90+ scores)

### Recommended Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Google Cloud Run**

## 📊 Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **Lighthouse Score:** 90+

## 🔒 Security

- React 18 with automatic XSS protection
- Next.js security headers (recommended in `next.config.js`)
- TypeScript strict mode
- No inline scripts (CSP compatible)

## 📄 License

Proprietary - Messika Paris

## 🤝 Contributing

This is an enterprise implementation following exact design specifications. All changes must maintain pixel-perfect accuracy to the JSON spec.

---

For detailed implementation notes, see [`implementation_notes.md`](./implementation_notes.md)
