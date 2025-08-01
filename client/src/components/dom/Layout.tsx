"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("../canvas/controls/Scene"), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
    
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: " 100%",
        height: "100%",
        overflow: "auto",
        touchAction: "auto",
      }}
    >
      {children}
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { Layout };
