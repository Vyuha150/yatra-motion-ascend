import React from 'react';

interface FloorIndicatorProps {
  currentFloor: number;
  floorName: string;
  isTransitioning?: boolean;
}

const FloorIndicator = ({ currentFloor, floorName, isTransitioning = false }: FloorIndicatorProps) => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="steel-texture glass-reflection rounded-xl border border-border px-8 py-4 shadow-xl">
        <div className="flex items-center space-x-4">
          {/* Floor Number Display */}
          <div className={`glass-reflection rounded-lg border border-border px-4 py-2 ${isTransitioning ? 'animate-floor-transition' : ''}`}>
            <div className="text-primary font-mono text-3xl font-bold">
              {currentFloor}
            </div>
          </div>
          
          {/* Floor Name */}
          <div className="text-foreground font-medium text-lg">
            {floorName}
          </div>
          
          {/* Status Indicators */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorIndicator;