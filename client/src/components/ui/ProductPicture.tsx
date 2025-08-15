import React from "react";
import Image from "next/image";
import { Html } from "@react-three/drei";

function ProductPicture({
  id,
  productImg,
}: {
  id: number;
  productImg: string;
}) {
  return (
    <Html fullscreen className="relative w-full h-full" zIndexRange={[10, 0]}>
      <Image
        key={id}
        src={productImg}
        alt="productImg"
        fill
        priority
        className="object-cover object-left"
        sizes="50vw"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </Html>
  );
}

export default ProductPicture;
