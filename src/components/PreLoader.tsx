
import React, { useState, useEffect } from 'react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadComplete, 500); // Allow fade out animation to complete
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 bg-white z-[100] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto flex items-center justify-center animate-scale-in">
            <img 
              src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
              alt="Yatra Elevators Logo" 
              className="w-full h-auto animate-pulse"
            />
          </div>
          
          {/* Animated Elevator Lines */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-1 h-16 bg-blue-400 animate-slide-up opacity-80"></div>
          </div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-1 h-16 bg-blue-400 animate-slide-up opacity-60" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* Company Name */}
        <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">YATRA ELEVATORS</h1>
          <p className="text-slate-600 font-medium">Reliable. Safe. Smart.</p>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
