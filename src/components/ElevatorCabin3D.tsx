import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Plane, Text, useTexture } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import * as THREE from 'three';

interface ElevatorCabin3DProps {
  doorsOpen: boolean;
}

const ElevatorCabin3D: React.FC<ElevatorCabin3DProps> = ({ doorsOpen }) => {
  const groupRef = useRef<Group>(null);
  const leftDoorRef = useRef<Mesh>(null);
  const rightDoorRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const { camera } = useThree();

  // Auto-rotate the cabin slightly
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  // Animate doors using useFrame for smooth animation
  useFrame(() => {
    if (leftDoorRef.current && rightDoorRef.current) {
      const targetX = doorsOpen ? -1.2 : 0;
      leftDoorRef.current.position.x = THREE.MathUtils.lerp(leftDoorRef.current.position.x, targetX, 0.1);
      rightDoorRef.current.position.x = THREE.MathUtils.lerp(rightDoorRef.current.position.x, -targetX, 0.1);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Elevator Cabin Frame */}
      <Box args={[4, 3, 3]} position={[0, 0, -1.5]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Floor */}
      <Plane args={[3.8, 2.8]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </Plane>

      {/* Ceiling */}
      <Plane args={[3.8, 2.8]} rotation={[Math.PI / 2, 0, 0]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.7} roughness={0.3} />
      </Plane>

      {/* Back Wall */}
      <Plane args={[3.8, 3]} position={[0, 0, -1.5]}>
        <meshStandardMaterial color="#34495e" metalness={0.5} roughness={0.4} />
      </Plane>

      {/* Side Walls */}
      <Plane args={[2.8, 3]} rotation={[0, Math.PI / 2, 0]} position={[-1.9, 0, -0.5]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.6} roughness={0.3} />
      </Plane>
      <Plane args={[2.8, 3]} rotation={[0, -Math.PI / 2, 0]} position={[1.9, 0, -0.5]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.6} roughness={0.3} />
      </Plane>

      {/* Control Panel */}
      <Box 
        args={[0.6, 1.2, 0.1]} 
        position={[1.5, 0.2, 0.8]}
        onPointerOver={() => setHovered('control')}
        onPointerOut={() => setHovered(null)}
      >
        <meshStandardMaterial 
          color={hovered === 'control' ? "#3498db" : "#1a1a1a"} 
          metalness={0.9} 
          roughness={0.1}
          emissive={hovered === 'control' ? "#1e3a8a" : "#000000"}
        />
      </Box>

      {/* Control Panel Buttons */}
      {[1, 2, 3, 4, 5].map((floor, index) => (
        <Box 
          key={floor}
          args={[0.08, 0.08, 0.02]} 
          position={[1.55, 0.6 - index * 0.15, 0.85]}
          onPointerOver={() => setHovered(`button-${floor}`)}
          onPointerOut={() => setHovered(null)}
        >
          <meshStandardMaterial 
            color={hovered === `button-${floor}` ? "#ffd700" : "#ffffff"} 
            emissive={hovered === `button-${floor}` ? "#ffb000" : "#000000"}
          />
        </Box>
      ))}

      {/* Elevator Doors */}
      <Plane 
        ref={leftDoorRef}
        args={[1.9, 2.8]} 
        position={[0, 0, 1.5]}
      >
        <meshStandardMaterial 
          color="#bdc3c7" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </Plane>
      
      <Plane 
        ref={rightDoorRef}
        args={[1.9, 2.8]} 
        position={[0, 0, 1.5]}
      >
        <meshStandardMaterial 
          color="#bdc3c7" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </Plane>

      {/* Interior Lighting */}
      <pointLight 
        position={[0, 1.2, 0]} 
        intensity={doorsOpen ? 0.8 : 0.3}
        color="#ffffff"
        distance={6}
      />
      
      {/* Ambient interior light */}
      <ambientLight intensity={doorsOpen ? 0.4 : 0.1} />

      {/* Door handles */}
      <Box args={[0.05, 0.3, 0.05]} position={[-0.8, 0, 1.52]}>
        <meshStandardMaterial color="#gold" metalness={1} roughness={0} />
      </Box>
      <Box args={[0.05, 0.3, 0.05]} position={[0.8, 0, 1.52]}>
        <meshStandardMaterial color="#gold" metalness={1} roughness={0} />
      </Box>
    </group>
  );
};

export default ElevatorCabin3D;