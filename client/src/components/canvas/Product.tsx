"use client";

import React, { Suspense, useState } from "react";
import {
  OrbitControls,
  useTexture,
  Environment,
  PerspectiveCamera,
  ContactShadows,
  Html,
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

function Product({ path, name, price, colors }: ProductProps) {

  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0]);

   const [currentPath, setCurrentPath] = useState(() => {
     return colors[0]?.path || path;
   });

  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
       const newPath = color.path || path;
       setCurrentPath(newPath);
  }

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
        <ambientLight intensity={0.4} />
        <Model3D scale={3} position={[0, 0, 0]} path={currentPath} speed={0} />
        <Environment background resolution={64} preset="city">
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide} lighting="physical">
              <Depth color="black" alpha={0.9} mode="normal" />
              <Depth
                colorA="#c9b037"
                alpha={0.5}
                mode="normal"
                near={0}
                far={300}
                origin={[100, 100, 100]}
              />
              <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
            </LayerMaterial>
          </mesh>
        </Environment>
      </Suspense>
      <Html fullscreen className="pointer-events-none">
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 flex items-start justify-between p-4">
            <h4 className="h4 bold-15 line-clamp-1 bg-black/50 text-white px-3 py-1 rounded-full">
              {name}
            </h4>
          </div>
          <div className="flex-1 flex items-end justify-between p-4">
            <div className="flex gap-2 pointer-events-auto">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleColorChange(color)}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 relative group ${
                    selectedColor.id === color.id
                      ? "border-gray-800 scale-110"
                      : "border-gray-300 hover:border-gray-500 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.color }}
                >
                  {selectedColor.id === color.id && (
                    <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {price}
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}

export default Product;
