import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { collections, getProductsByCollection, type Collection } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Explore our four unique lighting collections: Colorful Creator, Experimental Rebel, Cosmopolitan Expert, and Pretty & Posh. Find your perfect style.',
}

export default function CollectionsPage() {
  const collectionKeys = Object.keys(collections) as Collection[]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-brand-peach/20 to-brand-blush/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="small-caps text-brand-coral mb-3">Four Unique Styles</p>
          <h1>Our Collections</h1>
          <p className="mt-4 text-brand-charcoal/70 max-w-2xl mx-auto">
            Each collection tells a different story — from playful and bold to 
            refined and sophisticated. Find the one that speaks to you.
          </p>
        </div>
      </div>

      {/* Collections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {collectionKeys.map((key, index) => {
            const collection = collections[key]
            const products = getProductsByCollection(key)
            const isEven = index % 2 === 0

            return (
              <section key={key} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image / Visual */}
                <div 
                  className={`aspect-[4/3] rounded-2xl flex items-center justify-center ${isEven ? '' : 'lg:order-2'}`}
                  style={{
                    background: `linear-gradient(135deg, ${collection.gradientFrom}30 0%, ${collection.gradientTo}50 100%)`,
                  }}
                >
                  <div className="text-center p-8">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {collection.keywords.map((keyword) => (
                        <span 
                          key={keyword}
                          className="text-xs uppercase tracking-wider text-brand-charcoal/50 bg-white/50 px-3 py-1"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <p className="text-brand-charcoal/40 text-sm">Collection Preview</p>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                  <div>
                    <p className="small-caps text-brand-coral mb-2">{products.length} Products</p>
                    <h2>{collection.name}</h2>
                  </div>
                  
                  <p className="text-lg text-brand-charcoal/60 italic">
                    "{collection.tagline}"
                  </p>
                  
                  <p className="text-brand-charcoal/70 leading-relaxed">
                    {collection.description}
                  </p>

                  <Link 
                    href={`/collections/${key}`}
                    className="btn-primary inline-flex items-center"
                  >
                    Explore {collection.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
