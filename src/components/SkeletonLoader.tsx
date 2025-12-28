export default function SkeletonLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="biophilic-glass rounded-2xl p-6 shadow-biophilic">
          <div className="animate-shimmer shimmer-bg h-6 w-3/4 rounded-lg mb-4"></div>
          <div className="animate-shimmer shimmer-bg h-4 w-full rounded-lg mb-2"></div>
          <div className="animate-shimmer shimmer-bg h-4 w-5/6 rounded-lg"></div>
        </div>
      ))}
    </div>
  )
}
