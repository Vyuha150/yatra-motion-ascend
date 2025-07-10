import React from 'react';

interface FloorIndicatorProps {
  currentFloor: number;
  floorName: string;
  isTransitioning?: boolean;
}

const FloorIndicator = ({ currentFloor, floorName, isTransitioning = false }: FloorIndicatorProps) => {
  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
      {/* LED-style Elevator Display */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-center space-x-6">
          {/* Floor Number - LED Style */}
          <div className={`bg-black rounded-md px-4 py-2 border border-slate-500 ${isTransitioning ? 'animate-pulse' : ''}`}>
            <div className="text-green-400 font-mono text-4xl font-bold tracking-wider drop-shadow-[0_0_8px_rgb(34,197,94)]">
              {currentFloor}
            </div>
          </div>
          
          {/* Floor Name */}
          <div className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
            FLOOR: {floorName.toUpperCase()}
          </div>
          
          {/* Floor Indicators */}
          <div className="flex flex-col space-y-1">
            {[5, 4, 3, 2, 1].map((floor) => (
              <div
                key={floor}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  floor === currentFloor 
                    ? 'bg-green-400 shadow-[0_0_6px_rgb(34,197,94)] animate-pulse' 
                    : 'bg-slate-600'
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