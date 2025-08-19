import React from 'react'

function ProductOptionsSkelton() {

      const skeletonClass = "bg-gray-300 animate-pulse rounded-md";

  return (
    <div className="h-full p-6 flex flex-col justify-center space-y-8">
      {/* Review Skeleton */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className={`h-4 w-16 ${skeletonClass}`} />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-4 w-4 ${skeletonClass}`} />
            ))}
          </div>
          <div className={`h-4 w-12 ${skeletonClass}`} />
        </div>
      </div>

      {/* Color Skeleton */}
      <div className="space-y-3">
        <div className={`h-4 w-12 ${skeletonClass}`} />
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`w-8 h-8 rounded-full ${skeletonClass}`} />
          ))}
        </div>
      </div>

      {/* Size Skeleton */}
      <div className="space-y-3">
        <div className={`h-4 w-8 ${skeletonClass}`} />
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`h-10 ${skeletonClass}`} />
          ))}
        </div>
      </div>

      {/* Price Skeleton */}
      <div className="space-y-2">
        <div className={`h-8 w-24 ${skeletonClass}`} />
      </div>

      {/* Button Skeleton */}
      <div className={`h-12 w-full rounded-full ${skeletonClass}`} />
    </div>
  );
}

export default ProductOptionsSkelton