import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ElevatorControlPanelProps {
  currentFloor: number;
  totalFloors: number;
  onFloorChange: (direction: 'up' | 'down') => void;
}

const ElevatorControlPanel = ({ currentFloor, totalFloors, onFloorChange }: ElevatorControlPanelProps) => {
  const handleFloorChange = (direction: 'up' | 'down') => {
    onFloorChange(direction);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      {/* Control Panel Background */}
      <div className="steel-texture glass-reflection rounded-2xl border border-border p-4 shadow-2xl">
        {/* Floor Display */}
        <div className="mb-6 text-center">
          <div className="glass-reflection rounded-lg border border-border p-3 mb-2">
            <div className="text-primary font-mono text-2xl font-bold">
              {currentFloor}
            </div>
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            FLOOR
          </div>
        </div>

        {/* Control Buttons */}
        <div className="space-y-3">
          {/* Up Button */}
          <button
            onClick={() => handleFloorChange('up')}
            disabled={currentFloor >= totalFloors}
            className={`w-12 h-12 elevator-button rounded-lg border border-border flex items-center justify-center transition-all duration-200 ${
              currentFloor >= totalFloors 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 hover:shadow-lg'
            }`}
          >
            <ChevronUp className="h-6 w-6 text-foreground" />
          </button>

          {/* Down Button */}
          <button
            onClick={() => handleFloorChange('down')}
            disabled={currentFloor <= 1}
            className={`w-12 h-12 elevator-button rounded-lg border border-border flex items-center justify-center transition-all duration-200 ${
              currentFloor <= 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 hover:shadow-lg'
            }`}
          >
            <ChevronDown className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Floor Indicator Lights */}
        <div className="mt-6 space-y-2">
          {Array.from({ length: totalFloors }, (_, i) => totalFloors - i).map((floor) => (
            <div
              key={floor}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                floor === currentFloor 
                  ? 'bg-primary animate-panel-glow' 
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElevatorControlPanel;