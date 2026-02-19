import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'Saola — Vietnamese Design Lighting',
    template: '%s | Saola',
  },
  description: 'Design-led Vietnamese lifestyle brand bringing artisan-crafted lighting, furniture, and café culture to your home. Discover stunning lamps made with ceramic, bamboo, terrazzo, and traditional Vietnamese craftsmanship.',
  keywords: ['Vietnamese lighting', 'designer lamps', 'ceramic lamps', 'bamboo lighting', 'terrazzo lamp', 'Vietnam design', 'artisan lighting', 'home decor Vietnam'],
  authors: [{ name: 'Saola' }],
  creator: 'Saola',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'vi_VN',
    siteName: 'Saola',
    title: 'Saola — Vietnamese Design Lighting',
    description: 'Artisan-crafted lighting celebrating Vietnamese craftsmanship',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
