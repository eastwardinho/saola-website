import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="small-caps text-brand-coral mb-4">404 Error</p>
        <h1 className="mb-4">Page not found</h1>
        <p className="text-brand-charcoal/60 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/shop" variant="outline">Shop Products</Button>
        </div>
      </div>
    </div>
  )
}
