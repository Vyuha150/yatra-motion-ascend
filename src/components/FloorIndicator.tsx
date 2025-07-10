import React, { useState, useEffect } from 'react';

interface FloorIndicatorProps {
  currentFloor: number;
  totalFloors: number;
  direction?: 'up' | 'down' | 'stationary';
}

const FloorIndicator = ({ currentFloor, totalFloors, direction = 'stationary' }: FloorIndicatorProps) => {
  const [displayFloor, setDisplayFloor] = useState(currentFloor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayFloor(currentFloor);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentFloor]);

  const getDirectionIcon = () => {
    switch (direction) {
      case 'up':
        return '▲';
      case 'down':
        return '▼';
      default:
        return '●';
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="steel-panel px-6 py-3 rounded-lg border border-accent/30">
        <div className="flex items-center gap-4">
          {/* Floor Display */}
          <div className="text-center">
            <div className="led-display text-3xl font-mono font-bold animate-led-flicker">
              {displayFloor.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground mt-1">FLOOR</div>
          </div>

          {/* Direction Indicator */}
          <div className="text-center">
            <div className={`text-2xl ${direction !== 'stationary' ? 'animate-pulse' : ''}`}>
              <span className={`${direction === 'up' ? 'text-green-400' : direction === 'down' ? 'text-red-400' : 'text-accent'}`}>
                {getDirectionIcon()}
              </span>
            </div>
          </div>

          {/* Floor Progress */}
          <div className="flex flex-col items-center gap-1">
            {Array.from({ length: totalFloors }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  totalFloors - i <= displayFloor
                    ? 'bg-accent shadow-[0_0_8px_hsl(var(--accent))]'
                    : 'bg-muted/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorIndicator;