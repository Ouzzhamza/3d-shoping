import React from "react";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

export function NoBgCommon() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        enableZoom={true}
        minDistance={4}
        maxDistance={8}
        enablePan={false}
        autoRotate
        autoRotateSpeed={3}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />
      <pointLight position={[0, 0, 2]} intensity={5} color="#ffffff" />
      <pointLight position={[0, 0, -2]} intensity={5} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <ambientLight intensity={2} />
      <Environment resolution={64} preset="night" />
    </>
  );
}

