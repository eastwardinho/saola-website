# Saola Website Rebuild Brief

## Context
Saola is a Vietnamese designer lighting brand with 65 products across 4 collections. The current website has 38 products but most show placeholder.svg instead of real images. We have renders and product data that needs integrating.

## Priority 1: Fix Product Images (Critical)
35/38 products show `/images/placeholder.svg`.

### Available Real Images (in public/images/products/):
Renders exist in collection subfolders AND root. Map these to products:

- `Wander` → 210831 Wander.29.jpg, .31.jpg, .32.jpg, .33.jpg (4 images!)
- `Lotus` → 220217-Lotus.3.jpg, .4.jpg, .5.jpg (3 images)
- `Clove` → 220217-Clove.7.jpg, .8.jpg, .9.jpg (3 images)
- `Marshmallow` → 220215 Marshmallow_colorful.45.jpg, _white.44.jpg (2 images)
- `Geode Floor` → Geode FL - 01 (2).jpg, 02.jpg, 03.jpg (3 images)
- `Geode Table` → Geode-TL-Black.jpg, Geode-TL-Green.jpg (2 images)
- `Dodeca` → Dodeca-TL-Brown.jpg (1 image)

### Tasks:
1. Flatten all images from collection subfolders into public/images/products/ with clean filenames (no spaces, lowercase, kebab-case)
2. Update src/lib/products.ts to map correct image paths for products that have real renders
3. For products that have multiple renders, add ALL of them to the images array
4. For products WITHOUT renders, create a nicer branded placeholder page (Saola star on warm-gray)

## Priority 2: Richer Product Pages
Current product pages (src/app/product/[slug]/page.tsx) are thin.

### Enhance:
1. Image Gallery — Show ALL available images with main image + thumbnail strip
2. Materials Section — Expand descriptions (not just "Resin" but explain the craftsmanship)
3. Add `weight`, `lightSource`, and `care` fields to Product type and pages
4. Keep Day/Night toggle — excellent feature

## Priority 3: Homepage
1. Bestsellers section — prioritize products with real images (Wander, Lotus, Geode, Marshmallow, Clove)
2. Featured collection — make sure it shows real product images

## Priority 4: Collection Pages
Each should display its products with real images where available.

## Brand
- Saola Orange: #FFA400
- Star logo SVG already inline throughout
- Base path: /saola-website/ (GitHub Pages)

## DO NOT:
- Add e-commerce (no real checkout)
- Change brand identity
- Remove Day/Night toggle, wishlist, cart UI
- Add external dependencies

## Git
- Work on branch `rebuild-v2`
- Commit frequently
- Push to origin when done

When completely finished, run:
openclaw system event --text "Done: Saola website rebuild — product images mapped, pages enhanced" --mode now
