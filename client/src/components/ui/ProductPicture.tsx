import React from "react";
import Image from "next/image";
import { Html } from "@react-three/drei";
import { ProductProps } from "@/types/global";

function ProductPicture({ product }: ProductProps) {
  return (
    <div
      
      className="relative w-full h-full"
      // zIndexRange={[10, 0]}
    >
      <Image
        key={product.id}
        src={product.productImg}
        alt="productImg"
        fill
        priority
        className="object-cover"
        sizes="50vw"
      />
      <div className="absolute inset-0 bg-black/25 shadow-[inset_0_0_5px_5px_rgba(212,175,55,0.6)]" />
      <div className="w-full h-full flex flex-col relative z-20 pointer-events-auto">
        <div className="flex-1 flex items-start justify-between p-4">
          <h4 className="h4 bold-15 line-clamp-1 bg-black/50 text-white px-3 py-1 rounded-full">
            {product.name}
          </h4>
        </div>
        <div className="flex-1 flex items-end justify-between p-4">
          <div className="flex gap-2 pointer-events-auto">
            {product.colors.map((color) => (
              <button
                key={color.id}
                className="w-6 h-6 rounded-full border-2 transition-all duration-200 relative group"
                style={{ backgroundColor: color.color }}
              ></button>
            ))}
          </div>
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {product.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPicture;
