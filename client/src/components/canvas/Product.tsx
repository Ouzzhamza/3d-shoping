import {
  OrbitControls,
  Environment,
  useTexture,
  PerspectiveCamera,
  Float,
  ContactShadows,
} from "@react-three/drei";
import * as Three from "three";
import { useMemo, useState } from "react";
import { Tshirt } from "./models/Tshirt";
import dynamic from "next/dynamic";
import { ViewSceneProps } from "@/types/global";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";


const Hero3D = dynamic(
  () => import("@/components/canvas/models/Tshirt").then((mod) => mod.Tshirt),
  {
    ssr: false,
  }
);

interface ProductProps {
  Path: string;
}

function Product({ Path }: ProductProps) {
  const [isLoading, setIsLoading] = useState(true);
  const map = useTexture("/textures/texture3.png");

  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 0, 6]} /> */}
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <Environment preset="night" background map={map} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.4} />
      <group>
        {/* <Float
          position={[0, 0, 0]}
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        > */}
          <Hero3D
            scale={2}
            position={[0, 0, 0]}
            path={Path}
            onLoad={() => setIsLoading(false)}
            speed={0.2}
          />
        {/* </Float> */}
        <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
      </group>
      <Environment background resolution={64}>
        {/* <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} /> */}
        {/* <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} /> */}
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Depth color="blue" alpha={0.5} mode="multiply" />
            <Depth
              colorA="#ff0000"
              colorB="#00aaff"
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
    </>
  );
}

export default Product;
