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
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
      {/* Horizontal Floor Indicator */}
      <motion.div 
        className="bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-600/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-3">
          {/* Current Floor Display */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-white/70 text-xs font-medium tracking-wider mb-1">
                CURRENT FLOOR
              </div>
              <div className="bg-black/80 rounded-lg px-3 py-2 border border-green-400/30">
                <div className="text-green-400 font-mono text-lg font-bold tracking-wider drop-shadow-[0_0_6px_rgb(34,197,94)]">
                  {currentFloor}
                </div>
              </div>
            </div>
            
            {/* Floor Name */}
            <div className="text-center">
              <div className="text-white/70 text-xs font-medium tracking-wider mb-1">
                SECTION
              </div>
              <div className="text-white font-medium text-sm tracking-wide">
                {floorName.toUpperCase()}
              </div>
            </div>

            {/* Floor Dots */}
            <div className="flex items-center space-x-2">
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopFloorIndicator;