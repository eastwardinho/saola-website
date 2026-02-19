import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Users, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Saola',
  description: 'Saola is a design-led Vietnamese lifestyle brand celebrating artisan craftsmanship. Discover our story, values, and commitment to bringing beautiful, sustainable lighting to homes.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-peach/30 via-white to-brand-blush/20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="small-caps text-brand-coral mb-4">Our Story</p>
            <h1 className="mb-6">
              Illuminating Vietnamese craftsmanship
            </h1>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">
              Saola brings the rich heritage of Vietnamese artisan craftsmanship into modern homes. 
              We believe beautiful design should be accessible, sustainable, and tell a story.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2>Why Saola?</h2>
              <p className="text-brand-charcoal/70 leading-relaxed">
                The Saola — Vietnam's legendary "Asian Unicorn" — is one of the world's rarest 
                mammals, discovered only in 1992 in the Annamite Mountains. Like the Saola, 
                our designs are rare finds: unique pieces that bring something special to your space.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed">
                We work directly with Vietnamese artisans — ceramic masters in Binh Duong, 
                bamboo weavers in Dong Nai, wood turners in Binh Dinh — to create lighting 
                that honors tradition while embracing contemporary design.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed">
                Every lamp, pendant, and mood light is handcrafted with care. 
                No two pieces are exactly alike — that's not a flaw, it's a feature.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-caramel/20 to-brand-peach/40 rounded-2xl flex items-center justify-center">
              <p className="text-brand-charcoal/40">Artisan at work image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-brand-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="small-caps text-brand-coral mb-4">What We Believe</p>
            <h2 className="text-white">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-coral/20 flex items-center justify-center">
                <Heart className="h-8 w-8 text-brand-coral" />
              </div>
              <h3 className="text-xl text-white mb-2">Handcrafted</h3>
              <p className="text-white/60 text-sm">
                Every piece is made by skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-golden-yellow/20 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-brand-golden-yellow" />
              </div>
              <h3 className="text-xl text-white mb-2">Design-Led</h3>
              <p className="text-white/60 text-sm">
                We believe great design elevates everyday life. Our collections blend Vietnamese heritage with contemporary aesthetics.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-mint/20 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-brand-mint" />
              </div>
              <h3 className="text-xl text-white mb-2">Sustainable</h3>
              <p className="text-white/60 text-sm">
                From bamboo to terrazzo, we prioritize natural, sustainable materials that minimize environmental impact.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl text-white mb-2">Community</h3>
              <p className="text-white/60 text-sm">
                We support local artisan communities and believe in fair partnerships that benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section bg-brand-peach/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="small-caps text-brand-coral mb-4">Premium Materials</p>
            <h2>Crafted with Care</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ceramic', description: 'Traditional Vietnamese glazing techniques create stunning reactive finishes' },
              { name: 'Bamboo', description: 'Sustainably harvested and woven by master craftspeople in Dong Nai' },
              { name: 'Terrazzo', description: 'Colorful, playful, and uniquely Vietnamese in its bold combinations' },
              { name: 'Wood', description: 'Locally sourced hardwoods turned on traditional lathes for organic forms' },
            ].map((material) => (
              <div 
                key={material.name}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg mb-2">{material.name}</h3>
                <p className="text-sm text-brand-charcoal/60">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to find your light?</h2>
          <p className="text-brand-charcoal/70 max-w-xl mx-auto mb-8">
            Explore our collections and discover the perfect piece for your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/shop" size="lg">
              Shop Now
            </Button>
            <Button href="/experience" variant="outline" size="lg">
              Visit a Café
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
