"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PlaneProps {
  width: number;
  height: number;
  texture: string;
  active: boolean;
}

const Plane = ({ width, height, texture: textureUrl, active }: PlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const texture = useTexture(textureUrl);

  // Shader strings
  const vertexShader = /* glsl */ `
    varying vec2 vUv;
    uniform float uActive;
    
    void main() {
      vUv = uv;
      
      vec3 pos = position;
      
      // Add slight scale effect when active
      if (uActive > 0.5) {
        pos *= 1.05;
      }
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = /* glsl */ `
    uniform sampler2D uTex;
    uniform vec2 uRes;
    uniform vec2 uImageRes;
    uniform float uActive;
    
    // Background Cover UV function
    vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
      float rs = s.x / s.y; // Screen aspect ratio
      float ri = i.x / i.y; // Image aspect ratio
      
      vec2 st = rs < ri 
        ? vec2(i.x * s.y / i.y, s.y) 
        : vec2(s.x, i.y * s.x / i.x);
        
      vec2 o = rs < ri 
        ? vec2((st.x - s.x) / 2.0, 0.0) 
        : vec2(0.0, (st.y - s.y) / 2.0);
        
      return u * s / st + o / st;
    }

    varying vec2 vUv;
    
    void main() {
      vec2 uv = CoverUV(vUv, uRes, uImageRes);
      vec3 color = texture2D(uTex, uv).rgb;
      
      // Add brightness effect when active
      if (uActive > 0.5) {
        color *= 1.2; // Brighten when active
      }
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // Uniforms object
  const uniforms = useMemo(
    () => ({
      uTex: { value: texture },
      uRes: { value: new THREE.Vector2(viewport.width, viewport.height) },
      uImageRes: {
        value: new THREE.Vector2(
          texture.source.data.width,
          texture.source.data.height
        ),
      },
      uActive: { value: active ? 1.0 : 0.0 },
    }),
    [texture, viewport, active]
  );

  // Update resolution when viewport changes
  useEffect(() => {
    if (meshRef.current?.material) {
      const material = meshRef.current.material as any;
      if (material.uniforms?.uRes) {
        material.uniforms.uRes.value.set(viewport.width, viewport.height);
      }
    }
  }, [viewport]);

  // Animate active state
  useFrame((state, delta) => {
    if (meshRef.current?.material) {
      const material = meshRef.current.material as any;
      if (material.uniforms?.uActive) {
        const target = active ? 1.0 : 0.0;
        material.uniforms.uActive.value = THREE.MathUtils.lerp(
          material.uniforms.uActive.value,
          target,
          delta * 5
        );
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 30, 30]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default Plane;
