import { ColorOption } from "@/types/global";
import React, { useState } from "react";

function ProductOptions({
  colors,
  sizes,
  price,
  setCurrentPath,
  path,
}: {
  colors?: ColorOption[];
  sizes?: string[];
  price?: string;
  setCurrentPath?: (path: string) => void;
  path?: string;
}) {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(
    colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes?.[0] || null
  );

   const handleColorChange = (color: ColorOption) => {
      setSelectedColor(color);
      const newPath = color.path || path || "";
      if (setCurrentPath) setCurrentPath(newPath);
    };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      color: selectedColor,
      size: selectedSize,
      price,
    });
    // Add your cart logic here
  };

  const skeletonClass = "bg-gray-300 animate-pulse rounded-md";

  // If no price, show skeleton for everything
  if (!price) {
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
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${skeletonClass}`}
              />
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

  // If price exists, render real content
  return (
    <div className="h-full p-6 flex flex-col justify-center space-y-8 z-10">
      {/* Review Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Review:</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">4.5 (60)</span>
        </div>
      </div>

      {/* Color Selection - Only render if colors exist */}
      {colors && colors.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Color:</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 relative group cursor-pointer ${
                  selectedColor?.id === color.id
                    ? "border-gray-800 scale-110"
                    : "border-gray-300 hover:border-gray-500 hover:scale-105"
                }`}
                style={{ backgroundColor: color.color }}
              >
                {selectedColor?.id === color.id && (
                  <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection - Only render if sizes exist */}
      {sizes && sizes.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Size:</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedSize === size
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price Display */}
      <div className="flex items-center justify-between">
        <div
          className="text-2xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {price}
        </div>

        <button
          onClick={handleAddToCart}
          className="py-3 px-6 rounded-full font-medium transition-colors duration-200 flex-shrink-0 cursor-pointer"
          style={{
            backgroundColor: "var(--color-bg-dark)",
            color: "var(--color-primary)",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductOptions;
