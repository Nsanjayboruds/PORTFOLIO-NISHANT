import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const ref = useRef();
  
  // Generate random positions for 2000 stars
  const starsPositions = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle rotation
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starsPositions.length / 3}
          array={starsPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00f5ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const ProjectsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default ProjectsBackground;
