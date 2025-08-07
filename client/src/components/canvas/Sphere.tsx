import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import * as Three from "three";
import { useMemo, useState } from "react";
import { Tshirt } from "./models/Tshirt";
import dynamic from "next/dynamic";


const Hero3D = dynamic(
  () => import("@/components/canvas/models/Tshirt").then((mod) => mod.Tshirt),
  {
    ssr: false,
  }
);

function Sphere() {

   const [isLoading, setIsLoading] = useState(true);
  const map = useTexture("/textures/texture.png");

 

  return (
    <group>
      <ambientLight intensity={1.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      
      <Hero3D
        scale={2}
        position={[0, 0, 0]}
        path="/Tshirt.glb"
        onLoad={() => setIsLoading(false)}
        speed={0.2}
      />
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={map} side={Three.BackSide} roughness={5} />
      </mesh>
    </group>
  );
}

export default Sphere;
