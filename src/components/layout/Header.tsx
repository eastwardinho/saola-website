'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-peach/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden -ml-2 p-2 text-brand-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light tracking-tight text-brand-charcoal">
                Saola
              </span>
              <span className="ml-1 text-saola-orange text-2xl">✦</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-normal text-brand-charcoal hover:text-brand-coral transition-colors"
                style={{ letterSpacing: '0.05em' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 text-brand-charcoal hover:text-brand-coral transition-colors"
            >
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <Link
              href="/cart"
              className="p-2 text-brand-charcoal hover:text-brand-coral transition-colors relative"
            >
              <span className="sr-only">Cart</span>
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand-coral text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-peach/30 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-normal text-brand-charcoal hover:text-brand-coral transition-colors px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
