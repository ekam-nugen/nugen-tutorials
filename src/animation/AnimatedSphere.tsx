"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface AnimatedSphereProps {
  color?: string;
  radius?: number;
  widthSegments?: number;
  heightSegments?: number;
}

function AnimatedSphere({
  color,
  radius = 2.15,
  widthSegments = 250,
  heightSegments = 100,
}: Readonly<AnimatedSphereProps>) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geometryRef = useRef<THREE.SphereGeometry>(null!);
  const noise = useMemo(() => new SimplexNoise(), []);
  const originalPositions = useRef<Float16Array>(new Float16Array());
  const scaleFactor = useRef(1);
  useEffect(() => {
    if (!geometryRef.current) return;
    const posAttr = geometryRef.current.attributes.position;
    originalPositions.current = Float16Array.from(posAttr.array);
  }, []);

  useFrame(() => {
    const time = performance.now() * 0.001;
    const posAttr = geometryRef.current?.attributes.position;

    if (!posAttr || !originalPositions.current) return;

    const positions = posAttr.array as Float32Array;
    const original = originalPositions.current;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];
      const oz = original[i + 2];

      // Ensure inputs to noise3d are valid numbers
      if (isNaN(ox) || isNaN(oy) || isNaN(oz)) continue;

      const nx = noise.noise3d(ox * 0.2, oy * 0.2, time * 0.5);
      const scale = 1 + 0.1 * nx;

      // Ensure scale is valid
      if (isNaN(scale)) continue;

      positions[i] = ox * scale;
      positions[i + 1] = oy * scale;
      positions[i + 2] = oz * scale;
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.002;
  });
  const triggerScaleEffect = () => {
    scaleFactor.current = 1.5; // Increase the scale temporarily
    setTimeout(() => {
      scaleFactor.current = 1; // Reset the scale after the animation
    }, 300); // Adjust the duration as needed
  };

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.18, 0]}
      onPointerDown={triggerScaleEffect}
      onPointerOver={triggerScaleEffect}
    >
      <sphereGeometry
        args={[radius, widthSegments, heightSegments]}
        ref={geometryRef}
      />
      <meshStandardMaterial
        color={color}
        emissive={new THREE.Color(color)}
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

export default function SphereAnimation({
  radius,
  widthSegments,
  heightSegments,
}: Readonly<AnimatedSphereProps>) {
  const color = "#eeb497";
  return (
    <div className="w-full h-full opacity-45">
      <Canvas
        dpr={window.devicePixelRatio}
        camera={{ position: [0, 0, 4], fov: 70 }}
      >
        <AnimatedSphere
          color={color}
          radius={radius}
          widthSegments={widthSegments}
          heightSegments={heightSegments}
        />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={1.3}
            intensity={0}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
