import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Depth, LayerMaterial, Noise } from "lamina";
import * as THREE from "three"

export function CommonScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        // autoRotate
        autoRotateSpeed={3}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />
      <hemisphereLight color="#cfd8dc" groundColor="#444444" intensity={0.8} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, -3, 5]} intensity={0.6} color="#ffd1b3" />
      <ambientLight intensity={0.35} />
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
    </>
  );
}

