"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <>
      {/* Main container for your UI content */}
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "auto",
          touchAction: "auto",
        }}
      >
        {children}
      </div>

      {/* Global Canvas - renders all View components */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={ref}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </>
  );
};

export { Layout };
