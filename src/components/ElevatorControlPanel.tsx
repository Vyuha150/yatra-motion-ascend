import React from 'react';
import { ChevronUp, ChevronDown, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ElevatorControlPanelProps {
  currentFloor: number;
  totalFloors: number;
  onFloorChange: (floor: number, direction: 'up' | 'down') => void;
  onEmergencyCall: () => void;
}

const ElevatorControlPanel = ({ 
  currentFloor, 
  totalFloors, 
  onFloorChange, 
  onEmergencyCall 
}: ElevatorControlPanelProps) => {
  const floors = Array.from({ length: totalFloors }, (_, i) => totalFloors - i);

  const handleFloorClick = (targetFloor: number) => {
    if (targetFloor === currentFloor) return;
    const direction = targetFloor > currentFloor ? 'up' : 'down';
    onFloorChange(targetFloor, direction);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="steel-panel p-4 rounded-2xl border border-accent/30 shadow-2xl min-w-[80px]">
        {/* Emergency Button */}
        <div className="mb-4">
          <Button
            onClick={onEmergencyCall}
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-full relative overflow-hidden group"
          >
            <AlertTriangle className="h-6 w-6 group-hover:animate-pulse" />
            <div className="absolute inset-0 bg-red-400/20 animate-ping rounded-full"></div>
          </Button>
          <div className="text-xs text-center mt-1 text-red-400 font-mono">EMERGENCY</div>
        </div>

        {/* Direction Controls */}
        <div className="flex flex-col gap-2 mb-4">
          <Button
            onClick={() => currentFloor < totalFloors && onFloorChange(currentFloor + 1, 'up')}
            disabled={currentFloor >= totalFloors}
            className="elevator-button h-12 w-full rounded-full disabled:opacity-30"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
          <Button
            onClick={() => currentFloor > 1 && onFloorChange(currentFloor - 1, 'down')}
            disabled={currentFloor <= 1}
            className="elevator-button h-12 w-full rounded-full disabled:opacity-30"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>

        {/* Floor Buttons */}
        <div className="space-y-2">
          {floors.map((floor) => (
            <Button
              key={floor}
              onClick={() => handleFloorClick(floor)}
              className={`w-full h-10 rounded-lg transition-all duration-300 ${
                floor === currentFloor
                  ? 'bg-accent text-accent-foreground shadow-[0_0_15px_hsl(var(--accent))] button-glow'
                  : 'elevator-button'
              }`}
            >
              <span className="font-mono font-bold">{floor}</span>
            </Button>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-4 pt-4 border-t border-accent/20">
          <Button
            onClick={onEmergencyCall}
            variant="ghost"
            className="w-full h-10 text-accent hover:bg-accent/10"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-xs">CALL</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElevatorControlPanel;