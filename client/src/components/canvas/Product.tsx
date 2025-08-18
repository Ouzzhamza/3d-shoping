"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Spinner3D } from "./Spinner3D";
import ProductDetails from "./ProductDetails";
import { ProductsType } from "@/types/global";

const Model3D = dynamic(
  () => import("@/components/canvas/models/Model3D").then((mod) => mod.Model3D),
  {
    ssr: false,
  }
);

const CommonScene = dynamic(
  () =>
    import("@/components/canvas/controls/Common").then((mod) => mod.CommonScene),
  {
    ssr: true,
  }
);

interface ProductProps {
  // onProgress: (productId: number, progress: number) => void;
  // onError: (productId: number, error: string) => void;
  product: ProductsType;
}

function Product({

  product,
}: ProductProps) {


  const [currentPath, setCurrentPath] = useState<string>(product.path);

  const handleSetCurrentPath = (path: string) => {
    setCurrentPath(path);
  };
  
  return (
    <Suspense fallback={<Spinner3D size={50} />}>
      <CommonScene />
      <Model3D
        castShadow
        receiveShadow
        scale={3}
        position={[0, 0, 0]}
        path={currentPath}
        speed={0}
        productId={product.id}
      />
      <ProductDetails
        product={product}
        setCurrentPath={(path) => handleSetCurrentPath(path)}
      />
    </Suspense>
  );
}

export default Product;
