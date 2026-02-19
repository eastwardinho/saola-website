import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProductCard } from '@/components/ui/ProductCard'
import { collections, getProductsByCollection, type Collection } from '@/lib/products'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = collections[slug as Collection]
  
  if (!collection) return { title: 'Collection Not Found' }

  return {
    title: `${collection.name} Collection`,
    description: collection.description,
  }
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const collectionKey = slug as Collection
  const collection = collections[collectionKey]

  if (!collection) {
    notFound()
  }

  const products = getProductsByCollection(collectionKey)

  return (
    <div className="min-h-screen bg-white">
      {/* Collection Header */}
      <div 
        className="py-16 md:py-24"
        style={{
          background: `linear-gradient(135deg, ${collection.gradientFrom}20 0%, ${collection.gradientTo}30 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/collections" 
            className="inline-flex items-center text-brand-charcoal/60 hover:text-brand-coral transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Collections
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {collection.keywords.map((keyword) => (
                <span 
                  key={keyword}
                  className="text-xs uppercase tracking-wider text-brand-charcoal/50 bg-white/50 px-3 py-1"
                >
                  {keyword}
                </span>
              ))}
            </div>
            
            <h1 className="mb-4">{collection.name}</h1>
            <p className="text-xl text-brand-charcoal/60 italic mb-4">
              "{collection.tagline}"
            </p>
            <p className="text-brand-charcoal/70 leading-relaxed max-w-2xl">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <p className="text-brand-charcoal/60">{products.length} products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
