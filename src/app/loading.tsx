export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 border-2 border-brand-coral border-t-transparent rounded-full animate-spin" />
        <p className="text-brand-charcoal/60">Loading...</p>
      </div>
    </div>
  )
}
