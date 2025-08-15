import React from "react";
import Image from "next/image";
import { Html } from "@react-three/drei";
import { ProductsType } from "@/types/global";
import ProductDetails from "../canvas/ProductDetails";

function Loader({product}:{product: ProductsType}) {
  return (
    <Html fullscreen className="relative w-full h-full">
      <Image
        key={product.id}
        src={product.productImg}
        alt="productImg"
        fill
        priority
        className="object-cover object-left"
        sizes="50vw"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <ProductDetails product={product}/>
    </Html>
  );
}

export default Loader;
