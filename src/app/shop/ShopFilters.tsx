'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { type Collection } from '@/lib/products'

interface ShopFiltersProps {
  collections: Record<Collection, { name: string }>
  activeCollection?: Collection
  activeSort?: string
  productCount: number
}

export function ShopFilters({ 
  collections, 
  activeCollection, 
  activeSort,
  productCount 
}: ShopFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/shop?${params.toString()}`)
  }

  const collectionKeys = Object.keys(collections) as Collection[]

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-8 border-b border-brand-peach/30">
      {/* Collection Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateFilter('collection', null)}
          className={`px-4 py-2 text-sm transition-colors ${
            !activeCollection 
              ? 'bg-brand-charcoal text-white' 
              : 'bg-brand-peach/20 text-brand-charcoal hover:bg-brand-peach/40'
          }`}
        >
          All
        </button>
        {collectionKeys.map((key) => (
          <button
            key={key}
            onClick={() => updateFilter('collection', key)}
            className={`px-4 py-2 text-sm transition-colors ${
              activeCollection === key 
                ? 'bg-brand-charcoal text-white' 
                : 'bg-brand-peach/20 text-brand-charcoal hover:bg-brand-peach/40'
            }`}
          >
            {collections[key].name}
          </button>
        ))}
      </div>

      {/* Sort & Count */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-brand-charcoal/60">
          {productCount} products
        </span>
        <select
          value={activeSort || ''}
          onChange={(e) => updateFilter('sort', e.target.value || null)}
          className="px-3 py-2 text-sm bg-white border border-brand-peach/30 text-brand-charcoal focus:outline-none focus:border-brand-coral"
        >
          <option value="">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>
    </div>
  )
}
