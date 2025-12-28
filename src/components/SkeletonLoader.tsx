export default function SkeletonLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-premium">
          <div className="animate-shimmer shimmer-bg h-6 w-3/4 rounded mb-4"></div>
          <div className="animate-shimmer shimmer-bg h-4 w-full rounded mb-2"></div>
          <div className="animate-shimmer shimmer-bg h-4 w-5/6 rounded"></div>
        </div>
      ))}
    </div>
  )
}
