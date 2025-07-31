import {
  forwardRef,
  Suspense,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Three } from "../helpers/Three";
import { useThree } from "@react-three/fiber";
import { PerspectiveCamera as PerspectiveCameraImpl } from "three";

type CameraData = {
  position: [number, number, number];
  rotation: [number, number, number];
  fov: number;
};

export const useCameraDataFromJSON = (jsonPath: string) => {
  const [cameraData, setCameraData] = useState<CameraData>({
    position: [0, 0, 6],
    rotation: [0, 0, 0],
    fov: 40,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCameraData = async () => {
      try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract camera coordinates from your JSON structure
        setCameraData({
          position: [data.location.x, data.location.z, data.location.y],
          rotation: [data.rotation.x, data.rotation.z, data.rotation.y],
          fov: data.fov || 40, // Default fov if not provided
          // frame: data.frame,
        });

        setLoading(false);
      } catch (err: any) {
        console.error("Error loading camera data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (jsonPath) {
      loadCameraData();
    }
  }, [jsonPath]);

  return { cameraData, loading, error };
};

export const Common = ({
  color,
  jsonPath,
  enableOrbitControls = true,
  enableZoom = true,
  lockVerticalOrbit = false,
}: {
  color: string;
  jsonPath: string;
  enableOrbitControls?: boolean;
  enableZoom?: boolean;
  lockVerticalOrbit?: boolean;
}) => {
  const { cameraData, loading, error } = useCameraDataFromJSON(jsonPath);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, -1.6, 0); // manually aim the camera
    }
  }, [cameraData]);

  if (loading) {
    return (
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
      </Suspense>
    );
  }

  if (error) {
    console.error("Camera data error:", error);
  }

  // Calculate light positions based on camera position
  const getLightPositions = (cameraPos: [number, number, number]) => {
    const [x, y, z] = cameraPos;

    // Main light: positioned relative to camera with some offset
    const mainLightPos: [number, number, number] = [x + 20, y, z + 20];

    // Secondary light: positioned on the opposite side for fill lighting
    const secondaryLightPos: [number, number, number] = [
      x - 10,
      y - 10,
      z - 10,
    ];

    return { mainLightPos, secondaryLightPos };
  };

    const { mainLightPos, secondaryLightPos } = getLightPositions(
      cameraData.position
    );


  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight />
      <pointLight
        position={mainLightPos}
        intensity={4}
        decay={0.2}
        color="blue"
      />
      <pointLight
        position={secondaryLightPos}
        color="blue"
        intensity={4}
        decay={0.2}
      />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={cameraData.fov}
        position={cameraData.position}
        rotation={cameraData.rotation}
      />
      {enableOrbitControls && (
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={false}
          target={[0, -1.6, 0]}
          minPolarAngle={!lockVerticalOrbit ? Math.PI / 2 : 0}
          maxPolarAngle={!lockVerticalOrbit ? Math.PI / 2 : Math.PI}
        />
      )}
    </Suspense>
  );
};

type ViewProps = {
  children?: React.ReactNode;
  orbit?: boolean;
  [key: string]: any;
};

const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef as React.RefObject<HTMLElement>}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    );
  }
);
View.displayName = "View";

export { View };
