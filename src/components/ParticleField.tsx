import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = Math.random() * 10 - 5; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const y = i * 3 + 1;
        positions[y] += 0.01; // Upward movement
        
        // Reset particle when it goes too high
        if (positions[y] > 5) {
          positions[y] = -5;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

export default ParticleField;