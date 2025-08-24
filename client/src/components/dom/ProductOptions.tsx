"use client";

import { ColorOption, ProductsType } from "@/types/global";
import React, { useState } from "react";
import ProductOptionsSkelton from "../ui/ProductOptionsSkelton";
import Review from "../ui/Review";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import { useTranslations } from "next-intl";
import QuantitySelector from "./QuantitySelector";
import { useCartStore } from "@/zustand/CartStore";
import { useAuthStore, useDialogStore } from "@/zustand/AuthStore";

function ProductOptions({
  Product,
  setCurrentPath,
}: {
  Product: ProductsType | null;
  setCurrentPath?: (path: string) => void;
}) {
  const t = useTranslations("Details");
  const { isAuthenticated } = useAuthStore();
  const { openDialog } = useDialogStore();
  const { addToCart } = useCartStore();

  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(
    Product?.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    Product?.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  if (!Product) {
    return <ProductOptionsSkelton />;
  }

  const {
    colors,
    sizes,
    path,
    price,
    id: productId,
    name: productName,
    productImg,
  } = Product;

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
    const newPath = color.path || path || "";
    if (setCurrentPath) setCurrentPath(newPath);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      openDialog("login");
      return;
    }

    if (!productId || !productName || !price) {
      console.error("Missing required product information");
      return;
    }

    setIsAdding(true);

    try {
      // Parse price (remove currency symbols, etc.)
      const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));

      // Create cart item
      const cartItem = {
        id: productId,
        name: productName,
        price: numericPrice,
        color: selectedColor ?? undefined,
        size: selectedSize,
        quantity,
        image: productImg,
        path: selectedColor?.path || path,
      };

      // console.log(cartItem);
      // Add to cart
      addToCart(cartItem);

      // Show success feedback
      setJustAdded(true);

      // Reset quantity after adding
      setQuantity(1);

      console.log("Added to cart:", cartItem);

      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  // Render the component
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

      {/* Price Display */}
      <div className="flex items-center justify-between">
        <div
          className="text-2xl font-bold min-w-[140px]"
          style={{ color: "var(--color-primary)" }}
        >
          {price.replace(/[\d.]+/, (match) =>
            (parseFloat(match) * quantity).toFixed(2)
          )}
        </div>

        <QuantitySelector
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          disabled={isAdding}
        />

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`min-w-[140px] py-3 px-6 rounded-full font-medium transition-colors duration-200 flex-shrink-0 cursor-pointer
            ${
              isAdding
                ? "opacity-70 cursor-not-allowed bg-gray-400 text-white"
                : ""
            }
            ${
              justAdded
                ? "bg-green-600 text-white"
                : "bg-[var(--color-bg-dark)] text-[var(--color-primary)]"
            }
          `}
        >
          {isAdding ? t("Adding") : justAdded ? t("Added") : t("AddToCart")}
        </button>
      </div>
    </div>
  );
}

export default ProductOptions;
