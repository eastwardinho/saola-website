import { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join the Saola membership program. Get your premium metal mug and enjoy 10% off all products and F&B for life.',
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-coral/20 via-brand-golden-yellow/10 to-brand-blush/20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="small-caps text-brand-coral mb-4">Join the Community</p>
          <h1 className="mb-6">Saola Membership</h1>
          <p className="text-xl text-brand-charcoal/70 max-w-2xl mx-auto">
            Your passport to exclusive benefits, lifetime discounts, and a community 
            of design-loving coffee enthusiasts.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-charcoal to-brand-dark-brown rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-white mb-2">Lifetime Membership</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-5xl font-light">$49</span>
              <span className="text-white/60">one-time</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-8 max-w-2xl mx-auto">
              {[
                'Premium insulated metal mug',
                '10% off all F&B — for life',
                '10% off all products',
                'Early access to new collections',
                'Member-only events',
                'Birthday perks & surprises',
                'Priority customer support',
                'Free gift wrapping',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-coral flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg">
              Become a Member
            </Button>

            <p className="text-white/50 text-sm mt-4">
              Available at any Saola café or online
            </p>
          </div>
        </div>
      </section>

      {/* The Mug */}
      <section className="section bg-brand-peach/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-brand-coral/20 to-brand-golden-yellow/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-52 mx-auto bg-gradient-to-b from-brand-coral to-brand-rust rounded-lg flex items-center justify-center mb-4">
                  <span className="text-5xl text-white">☕</span>
                </div>
                <p className="text-brand-charcoal/40">Metal mug render</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2>The Saola Mug</h2>
              <p className="text-brand-charcoal/70 leading-relaxed">
                Your membership comes with a premium insulated metal mug — designed by us, 
                made to last. It keeps your drinks hot for hours and cold all day.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed">
                Bring it to any Saola café, and we'll fill it with your favorite drink. 
                Better for the planet, better for your pocket (remember, 10% off!).
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-light text-brand-coral mb-1">350ml</p>
                  <p className="text-sm text-brand-charcoal/60">Perfect size</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-light text-brand-coral mb-1">6+ hrs</p>
                  <p className="text-sm text-brand-charcoal/60">Keeps hot</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-light text-brand-coral mb-1">12+ hrs</p>
                  <p className="text-sm text-brand-charcoal/60">Keeps cold</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-light text-brand-coral mb-1">♻️</p>
                  <p className="text-sm text-brand-charcoal/60">Eco-friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="small-caps text-brand-coral mb-4">Questions?</p>
            <h2>Frequently Asked</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does the membership last?',
                a: 'Your Saola membership is for life. Pay once, enjoy the benefits forever.',
              },
              {
                q: 'Can I use my membership at all locations?',
                a: 'Yes! Your membership works at any Saola café and on our website.',
              },
              {
                q: 'What if I lose my mug?',
                a: 'Your membership is tied to your account, not your mug. You can purchase a replacement mug at member pricing.',
              },
              {
                q: 'Can I gift a membership?',
                a: 'Absolutely! Memberships make wonderful gifts. Contact us for gift packaging options.',
              },
              {
                q: 'Is the 10% discount stackable with sales?',
                a: 'Yes, your member discount applies on top of any active promotions.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-brand-peach/30 pb-6">
                <h3 className="text-lg mb-2">{item.q}</h3>
                <p className="text-brand-charcoal/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-charcoal text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-4">Ready to join?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Sign up now and start enjoying your benefits immediately.
          </p>
          <Button variant="secondary" size="lg">
            Become a Member — $49
          </Button>
        </div>
      </section>
    </div>
  )
}
