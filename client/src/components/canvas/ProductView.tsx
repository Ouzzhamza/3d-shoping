import { View } from "@react-three/drei";
import React, { Suspense } from "react";
import Hero3D from "./Hero3D";
import AnimatedModel from "./AnimatedProduct";
import { Spinner3D } from "./Spinner3D";

function ProductView({
  id,
  path,
}: {
  id?: number;
  path?: string;
}) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      {/* Glowing Circle Container */}
      <div className="relative h-[300px] w-[300px] flex justify-center items-center">
        {/* Main Circle with Gradient */}
        <div
          className="absolute h-[280px] w-[280px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 25%, transparent) 0%, color-mix(in srgb, var(--color-primary) 10%, transparent) 50%, transparent 70%)",
            boxShadow:
              "0 0 40px color-mix(in srgb, var(--color-primary) 30%, transparent), 0 0 80px color-mix(in srgb, var(--color-primary) 10%, transparent)",
          }}
        />

        <div
          className="absolute h-[300px] w-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, transparent 10%, color-mix(in srgb, var(--color-primary) 30%, transparent) 70%, transparent 90%)",
            boxShadow:
              "0 0 60px color-mix(in srgb, var(--color-primary) 60%, transparent)",
          }}
        />
      </div>

      <View
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
          <AnimatedModel path={path} />
      </View>
    </div>
  );
}

export default ProductView;
