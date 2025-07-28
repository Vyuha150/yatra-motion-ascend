import React from 'react';
import { motion } from 'framer-motion';

interface TopFloorIndicatorProps {
  currentFloor: number;
  floorName: string;
  floors: { id: number; name: string; sectionId: string }[];
  onFloorChange: (floor: number) => void;
}

const TopFloorIndicator = ({ 
  currentFloor, 
  floorName, 
  floors,
  onFloorChange 
}: TopFloorIndicatorProps) => {
  
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

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50">
      {/* Horizontal Floor Indicator */}
      <motion.div 
        className="bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-600/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-2">
          {/* Current Floor Display */}
          <div className="flex items-center space-x-3">
            <div className="text-center">
              <div className="text-white/70 text-xs font-medium tracking-wider mb-1">
                FLOOR
              </div>
              <div className="bg-black/80 rounded-md px-2 py-1 border border-green-400/30">
                <div className="text-green-400 font-mono text-sm font-bold tracking-wider drop-shadow-[0_0_6px_rgb(34,197,94)]">
                  {currentFloor}
                </div>
              </div>
            </div>
            
            {/* Floor Name */}
            <div className="text-center">
              <div className="text-white/70 text-xs font-medium tracking-wider mb-1">
                SECTION
              </div>
              <div className="text-white font-medium text-xs tracking-wide">
                {floorName.toUpperCase()}
              </div>
            </div>

            {/* Floor Dots */}
            <div className="flex items-center space-x-1.5">
              {floors.map((floor) => (
                <motion.button
                  key={floor.id}
                  onClick={() => scrollToSection(floor.sectionId, floor.id)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentFloor === floor.id
                      ? 'bg-green-400 shadow-[0_0_6px_rgb(34,197,94)] w-2 h-2'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={floor.name}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopFloorIndicator;