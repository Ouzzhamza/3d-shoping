"use client";

import { ColorOption, ProductDetailsProps } from "@/types/global";
import { useProductsStore } from "@/zustand/store";
import { Html } from "@react-three/drei";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PiEye } from "react-icons/pi";

function ProductDetails({ product, setCurrentPath }: ProductDetailsProps) {
  const { setSelectedProduct } = useProductsStore();
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    product.colors[0]
  );

  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
    const newPath = color.path || product.path;
    if (setCurrentPath) setCurrentPath(newPath);
  };

  const handleViewMore = (id: number) => {
    setSelectedProduct(product);
    router.push("/details");
  };

  return (
    <Html
      fullscreen
      className="absolute inset-0 flex flex-col bg-opacity-50 z-30 "
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 flex items-start justify-between p-4">
          <h4 className="h4 bold-15 line-clamp-1 bg-black/50 text-white px-3 py-1 rounded-full">
            {product.name}
          </h4>
        </div>
        <div className="flex-1 flex items-end justify-between p-4">
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorChange(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 relative group cursor-pointer ${
                  selectedColor.id === color.id
                    ? "border-gray-800 scale-110"
                    : "border-gray-300 hover:border-gray-500 hover:scale-105"
                }`}
                style={{ backgroundColor: color.color }}
              >
                {selectedColor.id === color.id && (
                  <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner"></div>
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-end gap-4 ">
            <button className="bg-black/50 inline-flex text-white px-2 py-1 rounded-full text-sm w-min cursor-pointer">
              <PiEye size={20} onClick={() => handleViewMore(product.id)} />
            </button>
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {product.price}
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export default ProductDetails;
