import {
  ReactNode,
  Suspense,
  useMemo,
  useRef,
} from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

// Rotating animation (kept for optional product rotation)
const RotatingGroup = ({
  children,
  speed = 0.5,
  axis = "y",
}: {
  children: ReactNode;
  speed?: number;
  axis?: "x" | "y" | "z";
}) => {
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation[axis] += speed * 0.01;
    }
  });
  return <group ref={ref}>{children}</group>;
};

interface CommonProps {
  enableOrbitControls?: boolean;
  enableZoom?: boolean;
  lockVerticalOrbit?: boolean;
  enableRotation?: boolean;
}

export const Common = ({
  enableOrbitControls = true,
  enableZoom = true,
  lockVerticalOrbit = false,
  enableRotation = false,
}: CommonProps) => {
  // Memoize lighting/camera setup to avoid recalculations
  const config = useMemo(
    () => ({
      environmentPreset: "sunset" as const,
      environmentBlur: 0.9,
      ambientIntensity: 1.1, // soft fill
      keyLight: {
        position: [3, 5, 8] as [number, number, number],
        intensity: 1,
        color: "#fff8e0", // soft warm white for natural skin/fabric
      },
      fillLight: {
        position: [-3, 2, 8] as [number, number, number],
        intensity: 1,
        color: "#e6f3ff", // cool fill, subtle
      },
      rimLight: {
        position: [0, 5, -5] as [number, number, number],
        intensity: 1,
        color: "#ffffff",
      },
      cameraPosition: [0, 0, 8] as [number, number, number],
    }),
    []
  );

  const SceneContent = () => (
    <>
      <Environment
        preset={config.environmentPreset}
        blur={config.environmentBlur}
        // background
      />
      {/* Soft ambient for base fill */}
      <ambientLight intensity={config.ambientIntensity} />
      {/* Three-point lighting */}
      <pointLight
        position={config.keyLight.position}
        intensity={config.keyLight.intensity}
        color={config.keyLight.color}
        decay={1}
      />
      <pointLight
        position={config.fillLight.position}
        intensity={config.fillLight.intensity}
        color={config.fillLight.color}
        decay={1}
      />
      <pointLight
        position={config.rimLight.position}
        intensity={config.rimLight.intensity}
        color={config.rimLight.color}
        decay={1}
      />
      <PerspectiveCamera
        makeDefault
        fov={36}
        position={config.cameraPosition}
        rotation={[0, 0, 0]}
      />
      {enableOrbitControls && (
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={false}
          target={[0, 0, 0]}
          minPolarAngle={lockVerticalOrbit ? Math.PI / 2 : 0}
          maxPolarAngle={lockVerticalOrbit ? Math.PI / 2 : Math.PI}
        />
      )}
    </>
  );

  // Optional product "turntable"/rotation animation
  const AnimatedContent = () =>
    enableRotation ? (
      <RotatingGroup speed={0.18}>{<SceneContent />}</RotatingGroup>
    ) : (
      <SceneContent />
    );

  return (
    <Suspense fallback={null}>
      <AnimatedContent />
    </Suspense>
  );
};
