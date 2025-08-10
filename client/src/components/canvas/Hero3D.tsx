"use client";

import React, { Suspense, useState } from "react";
import {
  OrbitControls,
  useTexture,
  Environment,
  PerspectiveCamera,
  ContactShadows,
  Html,
  Float,
} from "@react-three/drei";

import dynamic from "next/dynamic";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";
import { Spinner3D } from "./Spinner3D";
import { selector } from "gsap";

// Dynamic import for T-shirt component
const Model3D = dynamic(
  () => import("@/components/canvas/models/Model3D").then((mod) => mod.Model3D),
  {
    ssr: false,
    loading: () => <Spinner3D size={50} />,
  }
);

interface ColorOption {
  id: string;
  name: string;
  color: string;
  path?: string;
}

interface ProductProps {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  path: string;
  sizes: string[];
  colors: ColorOption[];
}

function Hero3D() {

  return (
    <group>
      <Suspense fallback={<Spinner3D size={50} />}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls
          enableZoom={false}
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

        <Model3D
          scale={3}
          position={[0, -0.5, 0]}
          path={"/glbs/Hero.glb"}
          speed={0}
        />
        <Environment resolution={64} preset="night" />
      </Suspense>
    </group>
  );
}

export default Hero3D;
