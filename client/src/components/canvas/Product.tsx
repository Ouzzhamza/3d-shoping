"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Spinner3D } from "./Spinner3D";

const Model3D = dynamic(
  () => import("@/components/canvas/models/Model3D").then((mod) => mod.Model3D),
  {
    ssr: false,
    // loading: () => <Spinner3D size={50} />,
  }
);

const CommonScene = dynamic(
  () =>
    import("@/components/canvas/controls/Common").then(
      (mod) => mod.CommonScene
    ),
  {
    ssr: true,
    // loading: () => <Spinner3D size={50} />,
  }
);

interface ProductProps {
  currentPath: string;
  productId: number;
  onProgress: (productId: number, progress: number) => void;
  onError: (productId: number, error: string) => void;
}

function Product({
  currentPath,
  productId,
  onProgress,
  onError,
}: ProductProps) {
  return (
    <group>
      {/* <Suspense fallback={<Spinner3D size={50} />}> */}
        <CommonScene />
        <Model3D
          castShadow
          receiveShadow
          scale={3}
          position={[0, 0, 0]}
          path={currentPath}
          speed={0}
          productId={productId}
          onProgress={onProgress}
          onError={onError}
        />
      {/* </Suspense> */}
    </group>
  );
}

export default Product;
