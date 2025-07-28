import React from 'react';

interface FloorIndicatorProps {
  currentFloor: number;
  floorName: string;
  isTransitioning?: boolean;
  floors?: Array<{ id: string; name: string; floor: number }>;
  onFloorClick?: (floorId: string) => void;
}

const FloorIndicator = ({ 
  currentFloor, 
  floorName, 
  isTransitioning = false, 
  floors = [],
  onFloorClick 
}: FloorIndicatorProps) => {
  
  const scrollToFloor = (floorId: string) => {
    const element = document.getElementById(floorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onFloorClick?.(floorId);
    }
  };

  return (
    <>
      {/* Main Floor Display */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 px-4 py-2 shadow-2xl">
          <div className="flex items-center justify-center space-x-4">
            {/* Floor Number - LED Style */}
            <div className={`bg-black rounded-md px-3 py-1 border border-slate-500 ${isTransitioning ? 'animate-pulse' : ''}`}>
              <div className="text-green-400 font-mono text-2xl font-bold tracking-wider drop-shadow-[0_0_8px_rgb(34,197,94)]">
                {currentFloor}
              </div>
            </div>
            
            {/* Floor Name */}
            <div className="text-white font-bold text-sm tracking-wide drop-shadow-lg">
              FLOOR: {floorName.toUpperCase()}
            </div>
            
            {/* Current Floor Indicator */}
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgb(34,197,94)]"></div>
          </div>
        </div>
      </div>

      {/* Interactive Floor Navigation */}
      <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-600 p-2 shadow-xl">
          <div className="flex gap-1">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => scrollToFloor(floor.id)}
                className={`w-8 h-8 rounded border text-xs font-mono font-bold transition-all duration-200 ${
                  floor.floor === currentFloor
                    ? 'bg-green-400 text-black border-green-400 shadow-[0_0_8px_rgb(34,197,94)]'
                    : 'bg-black text-white border-slate-500 hover:border-green-400 hover:text-green-400'
                }`}
                title={`Go to ${floor.name}`}
              >
                {floor.floor}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorIndicator;