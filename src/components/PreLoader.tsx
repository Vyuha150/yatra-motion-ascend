
import React, { useState, useEffect } from 'react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true); // Start opening doors animation
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(onLoadComplete, 500); // Allow fade out animation to complete
      }, 1800); // Wait for doors to open slowly
    }, 2000); // Show loader for 2 seconds before opening doors

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500`}
    >
      {/* Main Content - Logo centered during animation */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="w-40 h-auto mx-auto mb-4 drop-shadow-2xl"
          />
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-2 inline-block">
            <h2 className="text-white text-xl font-medium tracking-wide">YATRA ELEVATORS</h2>
          </div>
        </div>
      </div>

      {/* Clean Elevator Doors */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Left Door */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-steel-dark via-steel-medium to-steel-light border-r border-steel-accent transition-transform duration-[1400ms] ease-in-out shadow-2xl ${
            doorsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: `linear-gradient(to right, 
              hsl(var(--steel-dark)), 
              hsl(var(--steel-medium)) 50%, 
              hsl(var(--steel-light))),
              linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
          }}
        >
          {/* Vertical brushed metal texture lines */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
          }} />
          {/* Door edge detail */}
          <div className="absolute right-1 top-0 bottom-0 w-px bg-steel-accent shadow-inner" />
        </div>
        
        {/* Right Door */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-steel-dark via-steel-medium to-steel-light border-l border-steel-accent transition-transform duration-[1400ms] ease-in-out shadow-2xl ${
            doorsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            background: `linear-gradient(to left, 
              hsl(var(--steel-dark)), 
              hsl(var(--steel-medium)) 50%, 
              hsl(var(--steel-light))),
              linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
          }}
        >
          {/* Vertical brushed metal texture lines */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
          }} />
          {/* Door edge detail */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-steel-accent shadow-inner" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
