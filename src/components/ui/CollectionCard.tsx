import Link from 'next/link'
import { type Collection, collections, getProductsByCollection } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collectionKey: Collection
  featured?: boolean
}

export function CollectionCard({ collectionKey, featured = false }: CollectionCardProps) {
  const collection = collections[collectionKey]
  const products = getProductsByCollection(collectionKey)
  
  return (
    <Link 
      href={`/collections/${collectionKey}`}
      className={`group relative block overflow-hidden ${featured ? 'aspect-[2/1] md:aspect-[3/2]' : 'aspect-square'}`}
      style={{
        background: `linear-gradient(135deg, ${collection.gradientFrom}20 0%, ${collection.gradientTo}40 100%)`,
      }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${collection.gradientFrom}40 0%, ${collection.gradientTo}60 100%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
        <div className="space-y-2">
          <p className="small-caps text-brand-charcoal/60">{products.length} Products</p>
          <h3 className="text-2xl md:text-3xl font-light text-brand-charcoal">
            {collection.name}
          </h3>
          <p className="text-brand-charcoal/80 text-sm max-w-md">
            {collection.tagline}
          </p>
          <div className="flex items-center text-brand-coral font-medium text-sm pt-2 group-hover:translate-x-2 transition-transform duration-300">
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
      
      {/* Keywords */}
      <div className="absolute top-4 right-4 hidden md:flex flex-wrap gap-1 max-w-[200px] justify-end">
        {collection.keywords.slice(0, 3).map((keyword) => (
          <span 
            key={keyword}
            className="text-[10px] uppercase tracking-wider text-brand-charcoal/40 bg-white/50 px-2 py-1"
          >
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  )
}
