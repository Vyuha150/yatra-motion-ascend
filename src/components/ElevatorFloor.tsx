import React, { useEffect, useState } from 'react';

interface ElevatorFloorProps {
  floorNumber: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isActive: boolean;
  direction?: 'up' | 'down' | 'stationary';
  onTransitionComplete?: () => void;
}

const ElevatorFloor = ({ 
  floorNumber, 
  title, 
  subtitle, 
  children, 
  isActive, 
  direction,
  onTransitionComplete 
}: ElevatorFloorProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        onTransitionComplete?.();
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive, onTransitionComplete]);

  if (!isActive && !isVisible) {
    return null;
  }

  return (
    <div 
      className={`min-h-screen cabin-bg relative overflow-hidden transition-all duration-800 ${
        isActive 
          ? direction === 'up' 
            ? 'animate-floor-up' 
            : direction === 'down' 
              ? 'animate-floor-down' 
              : ''
          : 'opacity-0'
      }`}
    >
      {/* Elevator Cabin Frame */}
      <div className="absolute inset-4 steel-panel rounded-lg border border-accent/30 shadow-inner">
        <div className="absolute inset-2 glass-overlay rounded-lg"></div>
      </div>

      {/* Floor Header */}
      <div className="relative z-10 pt-20 px-8">
        <div className="text-center mb-8">
          <div className="steel-panel inline-block px-6 py-3 rounded-lg border border-accent/40 mb-4">
            <div className="led-display text-2xl font-mono font-bold">
              FLOOR {floorNumber.toString().padStart(2, '0')}
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-wide">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Floor Content */}
      <div className="relative z-10 px-8 pb-20">
        {children}
      </div>

      {/* Cabin Details */}
      <div className="absolute bottom-4 left-4 steel-panel px-4 py-2 rounded-lg border border-accent/30">
        <div className="led-display text-xs">CABIN STATUS: OPERATIONAL</div>
      </div>

      <div className="absolute bottom-4 right-4 steel-panel px-4 py-2 rounded-lg border border-accent/30">
        <div className="led-display text-xs">YATRA ELEVATORS</div>
      </div>

      {/* Cabin Lighting */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
    </div>
  );
};

export default ElevatorFloor;