import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ElevatorShaftBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Transform scroll into elevator movement
  const elevatorY = useTransform(scrollY, [0, 3000], [0, -300]);
  const cableY = useTransform(scrollY, [0, 3000], [0, -150]);
  
  return (
    <div className="fixed left-4 top-0 bottom-0 w-16 z-10 pointer-events-none">
      {/* Elevator Shaft Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/30 rounded-lg border-l-2 border-r-2 border-slate-600/30">
        
        {/* Floor Markers */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((floor) => (
          <div 
            key={floor}
            className="absolute left-0 right-0 h-px bg-slate-500/30"
            style={{ top: `${(floor - 1) * 12.5}%` }}
          >
            <div className="absolute -left-8 top-0 text-xs text-slate-400 font-mono">
              {floor}
            </div>
          </div>
        ))}
        
        {/* Moving Elevator Cabin */}
        <motion.div
          className="absolute left-1 right-1 h-12 bg-gradient-to-r from-blue-600/80 to-blue-700/80 rounded border border-blue-500/50 shadow-lg shadow-blue-500/25"
          style={{ y: elevatorY }}
          initial={{ top: '85%' }}
        >
          {/* Cabin Window */}
          <div className="absolute inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-sm border border-white/20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_4px_rgb(34,197,94)]"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Elevator Cables */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-px top-0 bottom-0"
          style={{ y: cableY }}
        >
          <div className="w-full h-full bg-gradient-to-b from-slate-400/60 to-slate-600/60"></div>
        </motion.div>
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 translate-x-1 w-px top-0 bottom-0"
          style={{ y: cableY }}
        >
          <div className="w-full h-full bg-gradient-to-b from-slate-400/40 to-slate-600/40"></div>
        </motion.div>
        
        {/* Shaft Lighting */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400/20 rounded-full blur-sm animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default ElevatorShaftBackground;