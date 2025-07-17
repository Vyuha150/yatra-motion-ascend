
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
    }, 1000);

    // Complete loading after doors finish opening (slower animation)
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 4000);

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

      {/* Elevator Doors with Realistic Texture */}
      <div className="absolute inset-0 z-20">
        {/* Left Door */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full transform transition-transform duration-[3500ms] ease-in-out ${
            doorsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: `
              linear-gradient(90deg, 
                #4a5568 0%, #718096 15%, #a0aec0 25%, #e2e8f0 40%, 
                #f7fafc 50%, #e2e8f0 60%, #a0aec0 75%, #718096 85%, #4a5568 100%
              )`,
            boxShadow: `
              inset -15px 0 30px rgba(0,0,0,0.4), 
              inset 15px 0 30px rgba(255,255,255,0.15),
              0 0 50px rgba(0,0,0,0.3)
            `
          }}
        >
          {/* Realistic Steel Texture */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px,
                  transparent 2px, transparent 4px
                ),
                repeating-linear-gradient(90deg, 
                  transparent, transparent 8px, 
                  rgba(0,0,0,0.03) 8px, rgba(0,0,0,0.03) 16px
                ),
                repeating-linear-gradient(45deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px
                )`
            }}
          />
          {/* Door Panel Lines */}
          <div className="absolute inset-4 border border-gray-400/20 rounded-sm">
            <div className="absolute inset-2 border border-gray-300/10 rounded-sm">
              <div className="absolute inset-4 border border-gray-400/15 rounded-sm"></div>
            </div>
          </div>
          {/* Handle */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-16 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full shadow-lg"></div>
          {/* Door edge highlight */}
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/40 via-white/15 to-white/40 shadow-lg" />
        </div>

        {/* Right Door */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full transform transition-transform duration-[3500ms] ease-in-out ${
            doorsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: `
              linear-gradient(90deg, 
                #4a5568 0%, #718096 15%, #a0aec0 25%, #e2e8f0 40%, 
                #f7fafc 50%, #e2e8f0 60%, #a0aec0 75%, #718096 85%, #4a5568 100%
              )`,
            boxShadow: `
              inset 15px 0 30px rgba(0,0,0,0.4), 
              inset -15px 0 30px rgba(255,255,255,0.15),
              0 0 50px rgba(0,0,0,0.3)
            `
          }}
        >
          {/* Realistic Steel Texture */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px,
                  transparent 2px, transparent 4px
                ),
                repeating-linear-gradient(90deg, 
                  transparent, transparent 8px, 
                  rgba(0,0,0,0.03) 8px, rgba(0,0,0,0.03) 16px
                ),
                repeating-linear-gradient(45deg, 
                  transparent, transparent 1px, 
                  rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px
                )`
            }}
          />
          {/* Door Panel Lines */}
          <div className="absolute inset-4 border border-gray-400/20 rounded-sm">
            <div className="absolute inset-2 border border-gray-300/10 rounded-sm">
              <div className="absolute inset-4 border border-gray-400/15 rounded-sm"></div>
            </div>
          </div>
          {/* Handle */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full shadow-lg"></div>
          {/* Door edge highlight */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-white/40 via-white/15 to-white/40 shadow-lg" />
        </div>

        {/* Center divider with realistic design */}
        <div className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 transform -translate-x-1/2 shadow-2xl border-l border-r border-gray-600/30" />
      </div>

      {/* Landing Page Preview (visible as doors open) */}
      <div className={`absolute inset-0 z-10 transition-all duration-1000 ${
        doorsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 animate-pulse">
              <span className="block mb-2">YATRA</span>
              <span className="text-blue-400">ELEVATORS</span>
            </h1>
            <p className="text-xl opacity-80">Welcome to Premium Vertical Transportation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
