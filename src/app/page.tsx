import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Leaf, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { CollectionCard } from '@/components/ui/CollectionCard'
import { getFeaturedProducts, collections, type Collection } from '@/lib/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4)
  const collectionKeys = Object.keys(collections) as Collection[]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-peach/30 via-white to-brand-blush/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="small-caps text-brand-coral">Vietnamese Design Lighting</p>
                <h1 className="text-balance">
                  Illuminate your home with Vietnamese craftsmanship
                </h1>
                <p className="text-lg text-brand-charcoal/70 max-w-lg">
                  Artisan-crafted lighting celebrating tradition and innovation. 
                  Each piece tells a story of Vietnamese heritage.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/shop" size="lg">
                  Shop Now
                </Button>
                <Button href="/collections" variant="outline" size="lg">
                  Explore Collections
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-brand-charcoal/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-coral" />
                  <span>Handcrafted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-brand-teal" />
                  <span>Sustainable Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-brand-pink" />
                  <span>Made in Vietnam</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-square lg:aspect-[4/5] animate-slide-up">
              <div className="absolute inset-[5%] bg-gradient-to-br from-brand-coral/10 to-brand-golden-yellow/10 rounded-3xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Placeholder for hero product image */}
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-brand-peach to-brand-blush rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl">✦</span>
                    </div>
                    <p className="text-brand-charcoal/40 text-sm">Hero Product Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="small-caps text-brand-coral mb-2">Curated Selection</p>
              <h2>Featured Products</h2>
            </div>
            <Link 
              href="/shop" 
              className="hidden md:flex items-center text-brand-coral hover:text-brand-rust transition-colors"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showCollection />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button href="/shop" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section bg-brand-peach/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="small-caps text-brand-coral mb-2">Four Unique Styles</p>
            <h2>Explore Our Collections</h2>
            <p className="mt-4 text-brand-charcoal/70 max-w-2xl mx-auto">
              From playful and bold to refined and sophisticated — find the collection 
              that matches your personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {collectionKeys.map((key, index) => (
              <CollectionCard 
                key={key} 
                collectionKey={key} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="section bg-brand-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="small-caps text-brand-coral">Exclusive Benefits</p>
              <h2 className="text-white">
                Join the Saola Membership
              </h2>
              <p className="text-white/70 text-lg">
                Get your premium metal mug and unlock 10% off for life — on everything 
                from coffee to furniture.
              </p>
              
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral mt-1">✦</span>
                  <span>Premium insulated metal mug (yours to keep)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-golden-yellow mt-1">✦</span>
                  <span>10% discount on all F&B — for life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral mt-1">✦</span>
                  <span>10% off all products — lighting & furniture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-golden-yellow mt-1">✦</span>
                  <span>Early access to new collections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral mt-1">✦</span>
                  <span>Member-only events & birthday perks</span>
                </li>
              </ul>

              <Button href="/membership" variant="secondary" size="lg">
                Become a Member
              </Button>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-[10%] bg-gradient-to-br from-brand-coral/20 to-brand-golden-yellow/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-40 mx-auto bg-gradient-to-b from-brand-coral to-brand-rust rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl text-white">☕</span>
                  </div>
                  <p className="text-white/50 text-sm">Metal Mug Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Café Experience */}
      <section className="section bg-gradient-to-br from-brand-blush/30 to-brand-peach/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-caramel/20 to-brand-peach/40 rounded-2xl flex items-center justify-center order-2 lg:order-1">
              <div className="text-center p-8">
                <p className="text-brand-charcoal/40">Café Interior Image</p>
                <p className="text-sm text-brand-charcoal/30 mt-2">Showroom experience</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <p className="small-caps text-brand-coral">The Saola Experience</p>
              <h2>See, Touch, Feel</h2>
              <p className="text-brand-charcoal/70 text-lg">
                Visit our café showrooms to experience our products in person. 
                Every piece has a QR code — scan to explore the full range and 
                have your favorites delivered home.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-3xl font-light text-brand-coral mb-1">65+</p>
                  <p className="text-sm text-brand-charcoal/60">Unique Designs</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-3xl font-light text-brand-coral mb-1">4</p>
                  <p className="text-sm text-brand-charcoal/60">Collections</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-3xl font-light text-brand-coral mb-1">100%</p>
                  <p className="text-sm text-brand-charcoal/60">Handcrafted</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-3xl font-light text-brand-coral mb-1">🇻🇳</p>
                  <p className="text-sm text-brand-charcoal/60">Made in Vietnam</p>
                </div>
              </div>

              <Button href="/experience">
                Plan Your Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12 bg-white border-y border-brand-peach/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-brand-charcoal rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white grid grid-cols-3 gap-[2px] p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`${Math.random() > 0.5 ? 'bg-brand-charcoal' : 'bg-white'}`} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-1">Scan any product in our café</h3>
              <p className="text-brand-charcoal/60">
                QR codes on every display — browse, save, and buy from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
