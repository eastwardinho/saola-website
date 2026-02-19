import Link from 'next/link'
import Image from 'next/image'
import { type Product, formatPrice, collections } from '@/lib/products'

interface ProductCardProps {
  product: Product
  showCollection?: boolean
}

export function ProductCard({ product, showCollection = false }: ProductCardProps) {
  const collection = collections[product.collection]
  
  return (
    <Link 
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-peach/20 to-brand-blush/20 aspect-square mb-4">
        {/* Product image with 5% margin per brand rules */}
        <div className="absolute inset-[5%] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={product.images[0] || '/images/placeholder.svg'}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105 product-glow"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
        
        {/* New badge */}
        {product.new && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-brand-coral text-white text-xs uppercase tracking-wider">
            New
          </div>
        )}
        
        {/* Quick view on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-medium">Quick View</span>
        </div>
      </div>
      
      {/* Product info */}
      <div className="space-y-1">
        {showCollection && (
          <p className="small-caps text-brand-coral">{collection.name}</p>
        )}
        <h3 className="font-normal text-brand-charcoal group-hover:text-brand-coral transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-brand-gray">{product.material}</p>
        <p className="text-brand-charcoal font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
