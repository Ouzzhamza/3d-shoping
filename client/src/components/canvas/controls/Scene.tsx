"use client";

import { Canvas } from "@react-three/fiber";
import { Loader, Preload, useGLTF } from "@react-three/drei";
import { r3f } from "../helpers/global";
import * as THREE from "three";

export default function Scene({ ...props }) {
  useGLTF.preload("/Tshirt.glb");
  // Everything defined in here will persist between route changes, only children are swapped
  return (

      <Canvas
        {...props}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      >
        <r3f.Out />
        <Preload all />
      </Canvas>
  );
}
