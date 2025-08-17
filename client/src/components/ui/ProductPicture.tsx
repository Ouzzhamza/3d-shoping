"use client"

import React from "react";
import Image from "next/image";
import { Html } from "@react-three/drei";
import { ProductProps } from "@/types/global";
import { PiEye } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { useProductsStore } from "@/zustand/store";
import { handleTransitionClick } from "@/lib/utils";


function ProductPicture({ product }: ProductProps) {

  const { setProductById } = useProductsStore();
    const router = useRouter();
    const pathname = usePathname();
    const lastSegment = pathname.slice(pathname.lastIndexOf("/"));

   const handleViewMore = (id: number) => {
     console.log("details");
     setProductById(id);
     handleTransitionClick("/details", lastSegment, router);
     
   };


  return (
    <div className="relative w-full h-full">
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
      <div className="w-full h-full flex flex-col relative z-20">
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
                className="w-6 h-6 rounded-full border-2 transition-all duration-200 relative group pointer-events-none"
                style={{ backgroundColor: color.color }}
                tabIndex={-1} // Prevents keyboard focus too
                aria-disabled="true"
              ></button>
            ))}
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* Only this div can receive pointer events */}
            <div className="bg-black/50 inline-flex text-white px-2 py-1 rounded-full text-sm w-min pointer-events-auto cursor-pointer">
              <PiEye size={20} onClick={() => handleViewMore(product.id)} />
            </div>
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
              {product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductPicture;
