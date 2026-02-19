import { Metadata } from 'next'
import { ProductCard } from '@/components/ui/ProductCard'
import { getAllProducts, collections, type Collection } from '@/lib/products'
import { ShopFilters } from './ShopFilters'

export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse our complete collection of artisan-crafted Vietnamese lighting. Table lamps, floor lamps, pendants, and mood lighting made with ceramic, bamboo, terrazzo, and more.',
}

interface ShopPageProps {
  searchParams: Promise<{
    collection?: Collection
    sort?: string
    type?: string
  }>
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams
  const allProducts = getAllProducts()
  
  // Filter by collection if specified
  let filteredProducts = params.collection 
    ? allProducts.filter(p => p.collection === params.collection)
    : allProducts

  // Sort products
  if (params.sort === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (params.sort === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (params.sort === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name))
  }

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
          activeCollection={params.collection}
          activeSort={params.sort}
          productCount={filteredProducts.length}
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
