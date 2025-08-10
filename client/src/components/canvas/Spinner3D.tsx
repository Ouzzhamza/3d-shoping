import { Html } from "@react-three/drei";
import { ImSpinner9 } from "react-icons/im";

export const Spinner3D = ({ size = 40 }: { size?: number }) => {
  return (
    <Html center className={`relative`}>
      <ImSpinner9 color="#FFD700" className="animate-spin-z" size={size} />
    </Html>
  );
};
