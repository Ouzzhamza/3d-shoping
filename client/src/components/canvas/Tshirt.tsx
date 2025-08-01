import { ObjectProps } from "@/types/global";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Tshirt({ path, onLoad, ...restProps }: ObjectProps) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path, true); // `true` for draco decode if needed
    console.log("Tshirt mounted", { path, onLoad });

  // Call onLoad once the scene is ready
  useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.set(0, Math.sin(t / 3) / 4, 0);
    }
  });

  return <primitive object={scene} {...restProps} ref={ref} />;
}

