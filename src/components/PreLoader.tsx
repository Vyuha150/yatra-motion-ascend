
import React, { useState, useEffect } from 'react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    // Start door animation after brief delay
    const startTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 500);

    // Complete loading after doors finish opening
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 2500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
      
      {/* Centered logo with professional lighting while doors are closed */}
      <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-1000 ${
        doorsOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center relative">
          {/* Professional spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-white/10 to-transparent blur-3xl scale-150" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
                alt="Yatra Elevators Logo" 
                className="w-48 h-auto mx-auto drop-shadow-2xl animate-bounce"
              />
            </div>
            <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md rounded-xl px-8 py-4 border border-white/30 shadow-2xl">
              <h2 className="text-white text-2xl font-bold tracking-wider drop-shadow-lg">
                YATRA ELEVATORS
              </h2>
              <p className="text-white/90 text-base mt-1 tracking-wide">
                Premium Vertical Transportation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Elevator Doors */}
      <div className="absolute inset-0 z-20">
        {/* Left Door */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full transform transition-transform duration-[2000ms] ease-out ${
            doorsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #6b7280 0%, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #6b7280 100%)',
            boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.3), inset 10px 0 20px rgba(255,255,255,0.1)'
          }}
        >
          {/* Brushed metal texture */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px
                ),
                repeating-linear-gradient(0deg, 
                  transparent, transparent 2px, 
                  rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px
                )`
            }}
          />
          {/* Door edge highlight */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-white/30" />
        </div>

        {/* Right Door */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full transform transition-transform duration-[2000ms] ease-out ${
            doorsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #6b7280 0%, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #6b7280 100%)',
            boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.3), inset -10px 0 20px rgba(255,255,255,0.1)'
          }}
        >
          {/* Brushed metal texture */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px
                ),
                repeating-linear-gradient(0deg, 
                  transparent, transparent 2px, 
                  rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px
                )`
            }}
          />
          {/* Door edge highlight */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-white/30" />
        </div>

        {/* Center divider */}
        <div className="absolute top-0 left-1/2 w-2 h-full bg-slate-900 transform -translate-x-1/2 shadow-lg" />
      </div>
    </div>
  );
};

export default PreLoader;
