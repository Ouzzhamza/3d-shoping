import React, { Suspense } from "react";
import { Spinner3D } from "./Spinner3D";
import { Environment, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import dynamic from "next/dynamic";



const Sphere = dynamic(() => import("@/components/canvas/models/Model3D").then((mode) => mode.Model3D), {
    ssr: false,
    loading: () => <Spinner3D size={50}/>
});



function CollectionProduct() {

    // const map = useTexture("")
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
        {/* <Sphere scale={2} position={[0, 0, 0]} path={"/hdri/GoldenGalaxy.glb"} speed={0} /> */}
        {/* <Environment background resolution={64} preset="city"/> */}
      </Suspense>
    </group>
  );
}

export default CollectionProduct;
