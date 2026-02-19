import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Coffee, QrCode, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'The Saola Experience',
  description: 'Visit our café showrooms in Ho Chi Minh City. See, touch, and experience our lighting in person. Enjoy great coffee while you browse.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-caramel/20 via-brand-peach/20 to-brand-blush/20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="small-caps text-brand-coral mb-4">Visit Us</p>
            <h1 className="mb-6">
              The Saola Experience
            </h1>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">
              More than a showroom, more than a café — it's where design meets daily ritual. 
              See our products in person, touch the materials, and feel the quality.
            </p>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-caramel/30 to-brand-peach/40 rounded-2xl flex items-center justify-center">
              <p className="text-brand-charcoal/40">Café interior image</p>
            </div>
            
            <div className="space-y-6">
              <h2>See. Touch. Feel.</h2>
              <p className="text-brand-charcoal/70 leading-relaxed">
                We know that lighting is personal. You need to see how the light falls, 
                feel the weight of the materials, and imagine it in your space. 
                That's why we created our café showrooms.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed">
                Every product on display has a QR code. Scan it to learn more, 
                save it to your wishlist, or buy it for delivery — the display stays, 
                and a fresh one arrives at your door.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Coffee className="h-5 w-5 text-brand-coral mt-1" />
                  <div>
                    <p className="font-medium">Great Coffee</p>
                    <p className="text-sm text-brand-charcoal/60">Specialty Vietnamese coffee</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <QrCode className="h-5 w-5 text-brand-coral mt-1" />
                  <div>
                    <p className="font-medium">Scan & Shop</p>
                    <p className="text-sm text-brand-charcoal/60">QR codes on every product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-brand-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="small-caps text-brand-coral mb-4">How It Works</p>
            <h2 className="text-white">Your Visit</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Visit', description: 'Walk into any Saola café and grab a coffee' },
              { step: '02', title: 'Explore', description: 'Browse our curated selection of lighting' },
              { step: '03', title: 'Scan', description: 'QR code on each product shows details & full range' },
              { step: '04', title: 'Order', description: 'Buy online, we deliver — display piece stays' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-light text-brand-coral/30 mb-4">{item.step}</div>
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="section bg-gradient-to-r from-brand-coral/10 to-brand-golden-yellow/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="small-caps text-brand-coral">Become a Member</p>
              <h2>Your Mug. Your Discount. For Life.</h2>
              <p className="text-brand-charcoal/70 leading-relaxed">
                Join our membership and receive a premium metal mug — yours to keep and use every visit. 
                Plus, enjoy 10% off all food, drinks, and products. Forever.
              </p>
              <ul className="space-y-3 text-brand-charcoal/70">
                <li className="flex items-center gap-2">
                  <span className="text-brand-coral">✓</span>
                  Premium insulated metal mug
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-coral">✓</span>
                  10% off all F&B — for life
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-coral">✓</span>
                  10% off all products
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-coral">✓</span>
                  Early access to new collections
                </li>
              </ul>
              <Button href="/membership">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="aspect-square bg-gradient-to-br from-brand-coral/20 to-brand-golden-yellow/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-40 mx-auto bg-gradient-to-b from-brand-coral to-brand-rust rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl text-white">☕</span>
                </div>
                <p className="text-brand-charcoal/40">Membership mug image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="small-caps text-brand-coral mb-4">Find Us</p>
            <h2>Our Locations</h2>
            <p className="mt-4 text-brand-charcoal/60">Coming soon to Ho Chi Minh City</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location Card - Coming Soon */}
            <div className="border border-brand-peach/30 p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-coral/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-brand-coral" />
              </div>
              <h3 className="text-xl mb-2">Thao Dien, District 2</h3>
              <p className="text-brand-charcoal/60 mb-4">Opening 2026</p>
              <div className="flex items-center justify-center gap-2 text-sm text-brand-charcoal/40">
                <Clock className="h-4 w-4" />
                <span>Hours TBA</span>
              </div>
            </div>

            <div className="border border-brand-peach/30 p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-coral/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-brand-coral" />
              </div>
              <h3 className="text-xl mb-2">District 1</h3>
              <p className="text-brand-charcoal/60 mb-4">Opening 2027</p>
              <div className="flex items-center justify-center gap-2 text-sm text-brand-charcoal/40">
                <Clock className="h-4 w-4" />
                <span>Hours TBA</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-charcoal/60 mb-4">
              Want to know when we open?
            </p>
            <Button href="#" variant="outline">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
