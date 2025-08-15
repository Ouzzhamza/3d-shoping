"use client";

import { ObjectProps } from "@/types/global";
import { useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { SkeletonUtils } from "three-stdlib";
import { useThree } from "@react-three/fiber";


export function Model3D({
  path,
  productId,
  onProgress,
  onError,
  ...Props
}: ObjectProps) {
  // Custom progress tracking
  const { scene, materials, nodes } = useGLTF(path, true, true, (loader) => {
    if (productId && onProgress) {
      loader.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
        const progress = (itemsLoaded / itemsTotal) * 100;
        onProgress(productId, progress);
      };

      loader.manager.onError = (url) => {
        if (onError) {
          onError(productId, `Failed to load: ${url}`);
        }
      };
    }
  });

  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Notify when loading is complete
  useEffect(() => {
    if (productId && onProgress && scene) {
      onProgress(productId, 100);
    }
  }, [scene, productId, onProgress]);

  return <primitive object={clonedScene} {...Props} />;
}
