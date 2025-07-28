import React from 'react';
import { Box } from '@react-three/drei';

const ElevatorSkeleton = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Cabin skeleton */}
      <Box args={[4, 3, 3]} position={[0, 0, -1.5]}>
        <meshBasicMaterial color="#374151" opacity={0.3} transparent />
      </Box>

      {/* Door skeletons */}
      <Box args={[1.8, 2.6, 0.1]} position={[-0.9, 0, 1.4]}>
        <meshBasicMaterial color="#4b5563" opacity={0.4} transparent />
      </Box>
      <Box args={[1.8, 2.6, 0.1]} position={[0.9, 0, 1.4]}>
        <meshBasicMaterial color="#4b5563" opacity={0.4} transparent />
      </Box>

      {/* Control panel skeleton */}
      <Box args={[0.5, 1.0, 0.08]} position={[1.4, 0.2, 0.7]}>
        <meshBasicMaterial color="#6b7280" opacity={0.5} transparent />
      </Box>

      {/* Simple ambient light for visibility */}
      <ambientLight intensity={0.4} />
    </group>
  );
};

export default ElevatorSkeleton;