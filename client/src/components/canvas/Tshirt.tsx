import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Tshirt(props: any) {
  // Properly type the ref for a THREE.Group or THREE.Object3D
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/Tshirt.glb");

  useFrame((state) => {
    // Check if ref.current exists before using it
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.set(
        // Math.cos(t / 4) / 8,
        // Math.sin(t / 3) / 4,
        0,
        Math.sin(t / 3) / 4,
        0
        // 0.15 + Math.sin(t / 2) / 8
      );
      // ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
    }
  });

  return <primitive object={scene} {...props} ref={ref} />;
}
