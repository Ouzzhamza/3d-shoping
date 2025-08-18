"use client";

import React, { Suspense } from "react";
import {
  OrbitControls,

  Environment,
  PerspectiveCamera,

} from "@react-three/drei";

import dynamic from "next/dynamic";

import { Spinner3D } from "./Spinner3D";

// Dynamic import for T-shirt component
const Model3D = dynamic(
  () => import("@/components/canvas/models/Model3D").then((mod) => mod.Model3D),
  {
    ssr: false,
    loading: () => <Spinner3D size={50} />,
  }
);

const NoBgCommonScene = dynamic(
  () =>
    import("@/components/canvas/controls/NoBgCommon").then((mod) => mod.NoBgCommon),
  {
    ssr: true,
  }
);


function Hero3D() {

  return (
      <Suspense fallback={<Spinner3D size={50} />}>
        <NoBgCommonScene/>
        <Model3D
          scale={3}
          position={[0, -0.5, 0]}
          path={"/glbs/Hero.glb"}
          speed={0}
        />
      </Suspense>
  );
}

export default Hero3D;
