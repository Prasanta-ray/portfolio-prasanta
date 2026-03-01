"use client";

import { useRef, useMemo, Suspense, Component, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ── Deterministic node distribution using Halton sequence ── */
function halton(index: number, base: number) {
  let f = 1;
  let r = 0;
  let i = index;
  while (i > 0) {
    f /= base;
    r += f * (i % base);
    i = Math.floor(i / base);
  }
  return r;
}

function generateNodes(count: number, range: number): [number, number, number][] {
  const nodes: [number, number, number][] = [];
  for (let i = 1; i <= count; i++) {
    const x = (halton(i, 2) - 0.5) * range;
    const y = (halton(i, 3) - 0.5) * range;
    const z = (halton(i, 5) - 0.5) * range;
    nodes.push([x, y, z]);
  }
  return nodes;
}

/* ── Connection edges between nearby nodes ── */
function generateEdges(
  nodes: [number, number, number][],
  threshold: number,
): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dz = nodes[i][2] - nodes[j][2];
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < threshold) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

/* ── Mouse-follow parallax controller ── */
function MouseParallax({ children }: { children: ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useThree(({ gl }) => {
    const canvas = gl.domElement;
    const handler = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    canvas.addEventListener("pointermove", handler, { passive: true });
    return () => canvas.removeEventListener("pointermove", handler);
  });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetX = mouse.current.y * 0.15;
    const targetY = mouse.current.x * 0.2;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      delta * 2,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      delta * 2,
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

/* ── The neural-network cube ── */
function NeuralCube() {
  const cubeRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const NODE_COUNT = 20;
  const RANGE = 4;
  const EDGE_THRESHOLD = 2.4;

  const nodes = useMemo(() => generateNodes(NODE_COUNT, RANGE), []);
  const edges = useMemo(
    () => generateEdges(nodes, EDGE_THRESHOLD),
    [nodes],
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.08;
      cubeRef.current.rotation.y = t * 0.12;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = t * -0.15;
      coreRef.current.rotation.y = t * -0.1;
      coreRef.current.scale.setScalar(0.35 + Math.sin(t * 1.5) * 0.05);
    }
  });

  return (
    <group>
      {/* Outer wireframe cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[2.8, 2.8, 2.8]} />
        <meshStandardMaterial
          color="#0a0a0f"
          wireframe
          transparent
          opacity={0.25}
          emissive="#00ff88"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner glowing core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh ref={coreRef} scale={0.35}>
          <octahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={2}
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>
      </Float>

      {/* Neural nodes */}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={1.5}
            transparent
            opacity={0.9}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Connection lines between nearby nodes */}
      {edges.map(([a, b], i) => (
        <Line
          key={`edge-${i}`}
          points={[nodes[a], nodes[b]]}
          color="#00ff88"
          lineWidth={1}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  );
}

/* ── Scene with lighting & post-processing ── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} intensity={1.5} color="#00ff88" />
      <pointLight position={[-6, -6, 8]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[0, -8, -5]} intensity={0.4} color="#8b5cf6" />

      <MouseParallax>
        <NeuralCube />
      </MouseParallax>

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          intensity={1.4}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

/* ── Error boundary for WebGL failures ── */
class Hero3DErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyber-accent/20 via-cyber-cyan/10 to-transparent blur-3xl" />
        </div>
      );
    }
    return this.props.children;
  }
}

/* ── Shimmer fallback while Canvas loads ── */
function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-cyber-accent/10 animate-pulse" />
    </div>
  );
}

export default function Hero3D() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      role="presentation"
      id="hero-3d-canvas"
    >
      <Hero3DErrorBoundary>
        <Suspense fallback={<CanvasFallback />}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </Hero3DErrorBoundary>
    </div>
  );
}
