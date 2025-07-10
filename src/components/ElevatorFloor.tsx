import React from 'react';

interface ElevatorFloorProps {
  children: React.ReactNode;
  floorNumber: number;
  isActive?: boolean;
  className?: string;
}

const ElevatorFloor = ({ children, floorNumber, isActive = false, className = '' }: ElevatorFloorProps) => {
  return (
    <div 
      id={`floor-${floorNumber}`}
      className={`min-h-screen relative ${isActive ? 'floor-transition' : ''} ${className}`}
    >
      {/* Elevator Cabin Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Side Rails */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-border/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-border/20 to-transparent" />
        
        {/* Top Rail */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-border/30 to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-4 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Floor Content with Glass Effect */}
      <div className="relative z-10 backdrop-blur-[0.5px]">
        {children}
      </div>
    </div>
  );
};

export default ElevatorFloor;