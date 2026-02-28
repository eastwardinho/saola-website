'use client'

import { useState, useMemo } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { getAllProducts, collections, type Collection } from '@/lib/products'
import { ShopFilters } from './ShopFilters'

const allProducts = getAllProducts()

export default function ShopPage() {
  const [activeCollection, setActiveCollection] = useState<Collection | undefined>()
  const [activeSort, setActiveSort] = useState<string | undefined>()

  const filteredProducts = useMemo(() => {
    let result = activeCollection
      ? allProducts.filter(p => p.collection === activeCollection)
      : allProducts

    if (activeSort === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (activeSort === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (activeSort === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [activeCollection, activeSort])

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-brand-peach/20 to-brand-blush/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="small-caps text-brand-coral mb-3">Our Collection</p>
          <h1>Shop All Products</h1>
          <p className="mt-4 text-brand-charcoal/70 max-w-2xl mx-auto">
            Discover our complete range of artisan-crafted lighting.
            Each piece is handmade in Vietnam using traditional techniques and premium materials.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <ShopFilters
          collections={collections}
          activeCollection={activeCollection}
          activeSort={activeSort}
          productCount={filteredProducts.length}
          onCollectionChange={setActiveCollection}
          onSortChange={setActiveSort}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showCollection />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brand-charcoal/60">No products found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
