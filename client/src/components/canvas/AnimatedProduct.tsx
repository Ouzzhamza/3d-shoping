"use client";

import React, { Suspense } from "react";

import dynamic from "next/dynamic";
import { Spinner3D } from "./Spinner3D";



const Model3D = dynamic(
  () => import("@/components/canvas/models/Model3D").then((mod) => mod.Model3D),
  {
    ssr: false,
    // loading: () => <Spinner3D size={50} />,
  }
);


const NoBgCommon = dynamic(
  () =>
    import("@/components/canvas/controls/NoBgCommon").then(
      (mod) => mod.NoBgCommon
    ),
  {
    ssr: true,
  }
);


function AnimatedModel({
  path,
}: {path?: string}) {


  if (!path) {
    return null;
  }

  return (
    <Suspense fallback={<Spinner3D size={50} />}>
      <NoBgCommon />
      <Model3D scale={5} position={[0, 0, 0]} path={path} speed={0} />
    </Suspense>
  );
}

export default AnimatedModel;
