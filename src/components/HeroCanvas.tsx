"use client";

import { useRef, useMemo, useCallback, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Interactive Cube ─── */
function InteractiveCube({
  position,
  size,
  color,
  mousePos,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(new THREE.Vector3(...position));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Mouse influence
    const mx = mousePos.current.x * 5;
    const my = mousePos.current.y * 5;
    const dx = mx - initialPos.current.x;
    const dy = my - initialPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // Tighter hover response: divide by 1.5 instead of 4
    const influence = Math.max(0, 1 - dist / 1.5);

    // Push away from mouse
    const pushX = influence * -dx * 0.15;
    const pushY = influence * -dy * 0.15;

    // Gentle float
    const floatX = Math.sin(t * 0.5 + initialPos.current.x) * 0.08;
    const floatY = Math.cos(t * 0.4 + initialPos.current.y) * 0.08;

    // Target position
    const targetX = initialPos.current.x + pushX + floatX;
    const targetY = initialPos.current.y + pushY + floatY;
    const targetZ = initialPos.current.z + influence * 0.8;

    // Smooth interpolation
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.06;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.06;
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.06;

    // Rotation reacts to mouse proximity
    meshRef.current.rotation.x += (0.005 + influence * 0.03);
    meshRef.current.rotation.y += (0.003 + influence * 0.02);

    // Scale pulse on proximity
    const targetScale = 1 + influence * 0.3;
    meshRef.current.scale.setScalar(
      meshRef.current.scale.x + (targetScale - meshRef.current.scale.x) * 0.08
    );
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.15}
        metalness={0.05}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

/* ─── Wireframe Cube ─── */
function WireframeCube({
  position,
  size,
  mousePos,
}: {
  position: [number, number, number];
  size: number;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    const mx = mousePos.current.x * 5;
    const my = mousePos.current.y * 5;
    const dx = mx - initialPos.current.x;
    const dy = my - initialPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // Tighter hover response: divide by 2 instead of 5
    const influence = Math.max(0, 1 - dist / 2);

    const floatX = Math.sin(t * 0.3 + initialPos.current.x * 2) * 0.1;
    const floatY = Math.cos(t * 0.35 + initialPos.current.y * 2) * 0.1;

    const targetX = initialPos.current.x + floatX - influence * dx * 0.1;
    const targetY = initialPos.current.y + floatY - influence * dy * 0.1;

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.04;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.04;

    meshRef.current.rotation.x += 0.003 + influence * 0.02;
    meshRef.current.rotation.y += 0.004 + influence * 0.015;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color="#a3a3a3" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

/* ─── Scene ─── */
function Scene({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const cubes = useMemo(() => {
    const items: {
      pos: [number, number, number];
      size: number;
      color: string;
      type: "solid" | "wire";
    }[] = [];

    // Solid cubes — warm neutral colors
    const colors = ["#e0d5c8", "#d4c4b0", "#c8b39a", "#f5f0eb", "#e8dfd2", "#d9cebb"];
    for (let i = 0; i < 14; i++) {
      items.push({
        pos: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4 - 1,
        ],
        size: Math.random() * 0.5 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: "solid",
      });
    }

    // Wireframe cubes
    for (let i = 0; i < 8; i++) {
      items.push({
        pos: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 3 - 2,
        ],
        size: Math.random() * 0.8 + 0.4,
        color: "#a3a3a3",
        type: "wire",
      });
    }

    return items;
  }, []);

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[8, 8, 5]} intensity={0.7} color="#faf8f5" />
      <pointLight position={[-5, -5, 3]} intensity={0.3} color="#e0d5c8" />

      {cubes.map((cube, i) =>
        cube.type === "solid" ? (
          <InteractiveCube
            key={`solid-${i}`}
            position={cube.pos}
            size={cube.size}
            color={cube.color}
            mousePos={mousePos}
          />
        ) : (
          <WireframeCube
            key={`wire-${i}`}
            position={cube.pos}
            size={cube.size}
            mousePos={mousePos}
          />
        )
      )}
    </>
  );
}

/* ─── Canvas Wrapper ─── */
export default function HeroCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mousePos.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
