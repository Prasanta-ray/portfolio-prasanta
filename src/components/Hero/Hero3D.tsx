"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t * 2) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * -0.1;
      innerRef.current.rotation.y = t * -0.15;
    }
  });

  const nodes = useMemo(() => {
    const n: [number, number, number][] = [];
    const seed = 42;
    const rnd = (i: number) => {
      const x = Math.sin(seed + i * 0.1) * 2;
      const y = Math.cos(seed + i * 0.15) * 2;
      const z = Math.sin(seed + i * 0.2) * 2;
      return [x, y, z] as [number, number, number];
    };
    for (let i = 0; i < 12; i++) n.push(rnd(i));
    return n;
  }, []);

  return (
    <group>
      {/* Outer wireframe cube - glass effect */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial
          color="#0a0a0f"
          wireframe={false}
          transparent
          opacity={0.15}
          emissive="#00ff88"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh ref={innerRef} scale={0.3}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.9} />
      </mesh>

      {/* Neural nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos} scale={0.03}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00d4ff" />
      <NeuralCube />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 min-h-[400px] md:min-h-[600px] w-full md:w-1/2 md:right-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
