"use client";

import { ObjectProps } from "@/types/global";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Spinner3D } from "../Spinner3D";

export function Model3D({ path, ...restProps }: ObjectProps) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path, true);


  return <primitive object={scene} {...restProps} ref={ref} />;
}
