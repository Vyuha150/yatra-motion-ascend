import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Plane, Text, Html } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import * as THREE from 'three';

interface ElevatorCabin3DProps {
  doorsOpen: boolean;
  onDoorClick?: () => void;
  scrollY?: number;
}

const ElevatorCabin3D: React.FC<ElevatorCabin3DProps> = ({ doorsOpen, onDoorClick, scrollY = 0 }) => {
  const groupRef = useRef<Group>(null);
  const leftDoorRef = useRef<Mesh>(null);
  const rightDoorRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState(false);
  const { camera, viewport } = useThree();

  // Auto-rotate and parallax animation
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Parallax motion based on scroll
      const parallaxY = (scrollY * 0.002);
      groupRef.current.position.y = parallaxY;
      
      // Scale based on viewport for responsiveness
      const scale = Math.min(viewport.width / 8, viewport.height / 6, 1);
      groupRef.current.scale.setScalar(scale);
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

  const handleDoorClick = () => {
    setClicked(true);
    onDoorClick?.();
    setTimeout(() => setClicked(false), 200);
  };

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

      {/* Control Panel with Tooltip */}
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
      
      {/* IoT Panel Tooltip */}
      {hovered === 'control' && (
        <Html position={[1.5, 1.5, 0.8]} center distanceFactor={10}>
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-blue-400/30 pointer-events-none">
            IoT Smart Control Panel
          </div>
        </Html>
      )}

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

      {/* Elevator Doors - Interactive */}
      <Plane 
        ref={leftDoorRef}
        args={[1.9, 2.8]} 
        position={[0, 0, 1.5]}
        onClick={handleDoorClick}
        onPointerOver={() => setHovered('door')}
        onPointerOut={() => setHovered(null)}
      >
        <meshStandardMaterial 
          color={hovered === 'door' ? "#ecf0f1" : "#bdc3c7"} 
          metalness={0.9} 
          roughness={0.1}
          emissive={clicked ? "#3498db" : "#000000"}
        />
      </Plane>
      
      <Plane 
        ref={rightDoorRef}
        args={[1.9, 2.8]} 
        position={[0, 0, 1.5]}
        onClick={handleDoorClick}
        onPointerOver={() => setHovered('door')}
        onPointerOut={() => setHovered(null)}
      >
        <meshStandardMaterial 
          color={hovered === 'door' ? "#ecf0f1" : "#bdc3c7"} 
          metalness={0.9} 
          roughness={0.1}
          emissive={clicked ? "#3498db" : "#000000"}
        />
      </Plane>
      
      {/* Door Tooltip */}
      {hovered === 'door' && (
        <Html position={[0, 2, 2]} center distanceFactor={10}>
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-blue-400/30 pointer-events-none">
            Click to open/close doors
          </div>
        </Html>
      )}

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

      {/* LED Display with Tooltip */}
      <Box 
        args={[0.4, 0.2, 0.05]} 
        position={[0, 2, 1.48]}
        onPointerOver={() => setHovered('display')}
        onPointerOut={() => setHovered(null)}
      >
        <meshStandardMaterial 
          color="#000000" 
          emissive={hovered === 'display' ? "#00ff00" : "#003300"}
        />
      </Box>
      
      {hovered === 'display' && (
        <Html position={[0, 2.5, 1.8]} center distanceFactor={10}>
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-green-400/30 pointer-events-none">
            LED Floor Display
          </div>
        </Html>
      )}

      {/* Braking System Indicator */}
      <Box 
        args={[0.2, 0.2, 0.1]} 
        position={[-1.5, -1.2, 0.8]}
        onPointerOver={() => setHovered('brake')}
        onPointerOut={() => setHovered(null)}
      >
        <meshStandardMaterial 
          color={hovered === 'brake' ? "#e74c3c" : "#c0392b"} 
          metalness={0.8} 
          roughness={0.2}
          emissive={hovered === 'brake' ? "#8b0000" : "#000000"}
        />
      </Box>
      
      {hovered === 'brake' && (
        <Html position={[-1.5, -0.8, 1.2]} center distanceFactor={10}>
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-red-400/30 pointer-events-none">
            Emergency Braking System
          </div>
        </Html>
      )}
    </group>
  );
};

export default ElevatorCabin3D;