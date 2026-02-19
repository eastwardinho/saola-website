import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Share2, Truck, Shield, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { 
  getProductBySlug, 
  getProductsByCollection, 
  formatPrice, 
  collections,
  products 
} from '@/lib/products'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const collection = collections[product.collection]
  const relatedProducts = getProductsByCollection(product.collection)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-brand-charcoal/60">
          <Link href="/shop" className="hover:text-brand-coral transition-colors">Shop</Link>
          <span>/</span>
          <Link 
            href={`/collections/${product.collection}`} 
            className="hover:text-brand-coral transition-colors"
          >
            {collection.name}
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div 
              className="aspect-square relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${collection.gradientFrom}15 0%, ${collection.gradientTo}25 100%)`,
              }}
            >
              {/* 5% margin per brand rules */}
              <div className="absolute inset-[5%] flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={product.images[0] || '/images/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-contain product-glow"
                    priority
                  />
                </div>
              </div>
              
              {/* QR Code placeholder */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-brand-charcoal grid grid-cols-3 gap-[1px] p-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-brand-charcoal'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail strip placeholder */}
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 transition-colors ${
                    i === 1 ? 'border-brand-coral' : 'border-transparent hover:border-brand-peach'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${collection.gradientFrom}10 0%, ${collection.gradientTo}20 100%)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Link 
                href={`/collections/${product.collection}`}
                className="small-caps text-brand-coral hover:text-brand-rust transition-colors"
              >
                {collection.name}
              </Link>
              <h1 className="mt-2">{product.name}</h1>
              <p className="text-xl text-brand-charcoal/60 mt-2 italic">
                "{product.tagline}"
              </p>
            </div>

            <p className="text-3xl font-light text-brand-charcoal">
              {formatPrice(product.price)}
            </p>

            <p className="text-brand-charcoal/70 leading-relaxed">
              {product.description}
            </p>

            {/* Material */}
            <div className="py-4 border-y border-brand-peach/30">
              <p className="text-sm text-brand-charcoal/60 mb-1">Material</p>
              <p className="text-brand-charcoal">{product.material}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <button className="p-4 border border-brand-peach/50 hover:border-brand-coral hover:text-brand-coral transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-4 border border-brand-peach/50 hover:border-brand-coral hover:text-brand-coral transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-brand-peach/10 rounded">
                <Truck className="h-5 w-5 mx-auto mb-2 text-brand-coral" />
                <p className="text-xs text-brand-charcoal/60">Free Shipping</p>
                <p className="text-xs text-brand-charcoal/60">Orders $200+</p>
              </div>
              <div className="text-center p-4 bg-brand-peach/10 rounded">
                <Shield className="h-5 w-5 mx-auto mb-2 text-brand-coral" />
                <p className="text-xs text-brand-charcoal/60">2 Year</p>
                <p className="text-xs text-brand-charcoal/60">Warranty</p>
              </div>
              <div className="text-center p-4 bg-brand-peach/10 rounded">
                <Leaf className="h-5 w-5 mx-auto mb-2 text-brand-coral" />
                <p className="text-xs text-brand-charcoal/60">Sustainably</p>
                <p className="text-xs text-brand-charcoal/60">Made</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 pt-4 text-sm text-brand-charcoal/60">
              <span>Pay with:</span>
              <span className="px-2 py-1 bg-brand-peach/20 text-xs">Visa</span>
              <span className="px-2 py-1 bg-brand-peach/20 text-xs">Mastercard</span>
              <span className="px-2 py-1 bg-brand-peach/20 text-xs">MoMo</span>
              <span className="px-2 py-1 bg-brand-peach/20 text-xs">VNPay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-brand-peach/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl mb-8">More from {collection.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
