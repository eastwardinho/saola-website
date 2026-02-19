# Saola Website — Next.js v6

Premium e-commerce website for Saola, a design-led Vietnamese lifestyle brand.

## 🎨 Brand Compliance

This website strictly follows the **Saola Brand Bible v1.0**:

### Colors
- **Primary Orange #FFA400** — Brand assets ONLY (logo, wordmark). NOT for website CTAs!
- **CTA Colors** — Coral #FF7F32, Golden Yellow #FFB81C
- **Max 2 colors** per composition
- Full supporting palette of 22 colors available in `tailwind.config.ts`

### Typography
- **Headings** — Basel Classic Light, letter-spacing: -0.05em (-50)
- **Body** — Basel Classic Book, letter-spacing: 0.01em (+10)
- **Small Caps** — letter-spacing: 0.1em (+100)

Note: Currently using Inter as a fallback. Replace with actual Basel Classic font files in production.

### Product Photography Rules
- Product is ALWAYS the star
- **5% margin** around products (built into ProductCard component)
- Warm gradient backgrounds (max 2 colors)
- Products always illuminated, never dark

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop listing
│   ├── collections/       # Collections pages
│   │   └── [slug]/        # Individual collection
│   ├── product/           
│   │   └── [slug]/        # Product detail pages
│   ├── about/             # About page
│   ├── experience/        # Café experience page
│   ├── membership/        # Membership program
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Site header/navigation
│   │   └── Footer.tsx     # Site footer
│   └── ui/
│       ├── Button.tsx     # Brand-compliant buttons
│       ├── ProductCard.tsx # Product cards with 5% margin
│       └── CollectionCard.tsx
├── lib/
│   ├── products.ts        # Product data & utilities
│   └── utils.ts           # Helper functions
└── public/
    └── images/
        └── products/      # Product images go here
```

## 🖼️ Adding Product Images

1. Place product images in `public/images/products/`
2. Name them to match the product slug: `flamingo-table-lamp.jpg`
3. Images are referenced in `src/lib/products.ts`

## 🎯 Key Features

- **Next.js 14+ App Router** — Server Components by default
- **Tailwind CSS** — Custom config with exact brand colors
- **Mobile-first** — Responsive design throughout
- **4 Collections** — Colorful Creator, Experimental Rebel, Cosmopolitan Expert, Pretty & Posh
- **QR Code Integration** — Placeholders on product pages
- **Membership Section** — Metal mug + 10% for life concept
- **Vietnamese Payments** — MoMo, VNPay mentioned in footer/checkout

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript
- **Utilities:** clsx, tailwind-merge

## 📦 Adding to Shopify

This is a presentation/showcase site. For full e-commerce:

1. Connect to Shopify Storefront API
2. Add cart functionality
3. Implement checkout redirect to Shopify
4. Sync inventory via webhooks

## 🎨 Customization

### Brand Colors (tailwind.config.ts)
All brand colors are defined in the Tailwind config. Key ones:
- `brand-coral` — Primary CTA color
- `brand-golden-yellow` — Secondary CTA
- `saola-orange` — Brand assets only
- `brand-charcoal` — Text color

### Typography
CSS custom properties for fonts in `globals.css`. Replace with actual Basel Classic when available.

## 📝 Notes

- Product images are placeholders — replace with actual photography
- All product data is in `src/lib/products.ts`
- Membership pricing ($49) is a placeholder
- Café locations are marked as "Coming Soon"

---

Built with ❤️ for Saola by Frank (AI Assistant)
