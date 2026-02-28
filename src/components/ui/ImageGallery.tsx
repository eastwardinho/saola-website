'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  productName: string
  gradientFrom: string
  gradientTo: string
}

export function ImageGallery({ images, productName, gradientFrom, gradientTo }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultiple = images.length > 1

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="aspect-square relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}15 0%, ${gradientTo}25 100%)`,
        }}
      >
        <div className="absolute inset-[5%] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[activeIndex] || '/images/placeholder.svg'}
              alt={`${productName}${hasMultiple ? ` - view ${activeIndex + 1}` : ''}`}
              fill
              className="object-contain product-glow"
              priority
            />
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {hasMultiple && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-20 h-20 flex-shrink-0 relative overflow-hidden border-2 transition-colors ${
                i === activeIndex ? 'border-brand-coral' : 'border-transparent hover:border-brand-peach'
              }`}
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}10 0%, ${gradientTo}20 100%)`,
              }}
            >
              <Image
                src={img}
                alt={`${productName} - thumbnail ${i + 1}`}
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
