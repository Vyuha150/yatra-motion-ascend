import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloorIndicatorProps {
  currentFloor: number;
  floorName: string;
  isTransitioning?: boolean;
  floors: { id: number; name: string; sectionId: string }[];
  onFloorChange: (floor: number) => void;
}

const FloorIndicator = ({ 
  currentFloor, 
  floorName, 
  isTransitioning = false, 
  floors,
  onFloorChange 
}: FloorIndicatorProps) => {
  
  const scrollToSection = (sectionId: string, floor: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      onFloorChange(floor);
    }
  };

  const goToNextFloor = () => {
    const nextFloor = currentFloor < floors.length ? currentFloor + 1 : 1;
    const nextSection = floors.find(f => f.id === nextFloor);
    if (nextSection) {
      scrollToSection(nextSection.sectionId, nextFloor);
    }
  };

  const goToPrevFloor = () => {
    const prevFloor = currentFloor > 1 ? currentFloor - 1 : floors.length;
    const prevSection = floors.find(f => f.id === prevFloor);
    if (prevSection) {
      scrollToSection(prevSection.sectionId, prevFloor);
    }
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      {/* Modern Vertical Floor Indicator */}
      <motion.div 
        className="bg-slate-900/95 backdrop-blur-sm rounded-2xl border border-slate-600/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Current Floor Display */}
        <div className="px-4 py-3 border-b border-slate-600/30">
          <div className="text-center">
            <div className="text-white/70 text-xs font-medium tracking-wider mb-1">
              FLOOR
            </div>
            <div className={`bg-black/80 rounded-lg px-3 py-2 border border-green-400/30 ${isTransitioning ? 'animate-pulse' : ''}`}>
              <div className="text-green-400 font-mono text-lg font-bold tracking-wider drop-shadow-[0_0_6px_rgb(34,197,94)]">
                {currentFloor}
              </div>
            </div>
            <div className="text-white font-medium text-xs mt-2 tracking-wide max-w-[100px] truncate">
              {floorName.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="px-2 py-3">
          {/* Up Button */}
          <motion.button
            onClick={goToPrevFloor}
            className="w-full p-2 text-white/70 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center justify-center mb-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-4 w-4" />
          </motion.button>

          {/* Floor Dots */}
          <div className="flex flex-col items-center space-y-2 py-2">
            {floors.map((floor) => (
              <motion.button
                key={floor.id}
                onClick={() => scrollToSection(floor.sectionId, floor.id)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentFloor === floor.id
                    ? 'bg-green-400 shadow-[0_0_8px_rgb(34,197,94)] w-3 h-3'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={floor.name}
              />
            ))}
          </div>

          {/* Down Button */}
          <motion.button
            onClick={goToNextFloor}
            className="w-full p-2 text-white/70 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center justify-center mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Active Status */}
        <div className="px-4 py-2 border-t border-slate-600/30">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <div className="text-green-400 text-xs font-medium tracking-wide">ACTIVE</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloorIndicator;