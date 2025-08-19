import { ColorOption } from "@/types/global";
import React, { useState } from "react";
import ProductOptionsSkelton from "../ui/ProductOptionsSkelton";
import Review from "../ui/Review";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import { useTranslations } from "next-intl";
import QuantitySelector from "./QuantitySelector";

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

  const t = useTranslations("Details");
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
    return <ProductOptionsSkelton/>
  
  }

  // If price exists, render real content
  return (
    <div className="h-full p-6 flex flex-col justify-center space-y-8 z-10">
      {/* Review Section */}
      <Review />

      {/* Color Selection - Only render if colors exist */}
      {colors && colors.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">{t("Color")}:</h3>
          <ColorSelection
            colors={colors}
            selectedColor={selectedColor}
            onClick={handleColorChange}
            className="w-8 h-8"
          />
        </div>
      )}

      {/* Size Selection - Only render if sizes exist */}
      {sizes && sizes.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">{t("Size")}:</h3>
          <SizeSelection
            sizes={sizes}
            selectedSize={selectedSize}
            onClick={handleSizeChange}
            className="text-base"
          />
        </div>
      )}
      {/* Quantity display */}

      {/* Price Display */}
      <div className="flex items-center justify-between">
        <div
          className="text-2xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {price}
        </div>
        {/* <div className=" h-full"> */}
        <QuantitySelector/>
        {/* </div> */}
        <button
          onClick={handleAddToCart}
          className="py-3 px-6 rounded-full font-medium transition-colors duration-200 flex-shrink-0 cursor-pointer"
          style={{
            backgroundColor: "var(--color-bg-dark)",
            color: "var(--color-primary)",
          }}
        >
          {t("AddToCart")}
        </button>
      </div>

    </div>
  );
}

export default ProductOptions;
