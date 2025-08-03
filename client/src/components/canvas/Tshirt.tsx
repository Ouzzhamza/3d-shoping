import { ObjectProps } from "@/types/global";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Tshirt({ path, onLoad, speed, ...restProps }: ObjectProps) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path, true); // `true` for draco decode if needed

  // Call onLoad once the scene is ready
  useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);


  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed; // Adjust speed here (radians per second)
    }
  });

  return <primitive object={scene} {...restProps} ref={ref} />;
}

