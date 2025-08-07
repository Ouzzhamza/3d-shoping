"use client"

import React from 'react'
import Title from './Title'
import { useTranslations } from 'next-intl';
import {
  OrbitControls,
  View,
  useTexture,
  Environment,
} from "@react-three/drei";
import Sphere from '@/components/canvas/Sphere';

// Type definitions
type Position3D = [number, number, number];

interface BoxProps {
  position?: Position3D;
  color?: string;
}

interface ViewSceneProps {
  boxColor: string;
  boxPosition?: Position3D;
}

// Simple Box component
function Box({ position = [0, 0, 0], color = "orange" }: BoxProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Individual View Scene component
function ViewScene({ boxColor, boxPosition = [0, 0, 0] }: ViewSceneProps) {
  return (
    <>
    <OrbitControls />
    <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Box position={boxPosition} color={boxColor} />
    </>
  );
}

export default function LineOfViews() {
      const t = useTranslations("PopularProducts");

  const viewData: Array<{ id: number; color: string; position: Position3D }> = [
    { id: 1, color: "#ff6b6b", position: [0, 0, 0] },
    { id: 2, color: "#4ecdc4", position: [0, 0, 0] },
    { id: 3, color: "#45b7d1", position: [0, 0, 0] },
    { id: 4, color: "#96ceb4", position: [0, 0, 0] },
    { id: 5, color: "#feca57", position: [0, 0, 0] },
  ];

  return (
    <section className="max-padd-container mt-32 h-[500px]">
      <div className="max-padd-container2 h-full">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

      {/* Container for all views */}
      <div className="w-full h-full flex gap-4 overflow-hidden ">
        {viewData.map((item) => (
            <View
            key={item.id}
            className="flex-1 h-full overflow-hidden flex justify-center items-center border-primary-2 rounded-lg"
            >
            <ViewScene boxColor={item.color} boxPosition={item.position} />
          </View>
        ))}
      </div>
        </div>
    </section>
  );
}