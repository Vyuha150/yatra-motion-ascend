
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
      className={`fixed inset-0 z-[100] overflow-hidden bg-background ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500`}
    >
      {/* Centered logo animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative">
          {/* Animated logo */}
          <div className="mb-6 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 animate-pulse" />
            
            {/* Text-based logo with smooth animation */}
            <div className="w-32 h-32 mx-auto relative z-10 flex items-center justify-center animate-[logo-spin_3s_ease-in-out_infinite]">
              <span className="text-6xl font-bold text-primary" style={{
                filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))'
              }}>
                Yatra
              </span>
            </div>
            
            {/* Loading dots */}
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1.5s_ease-in-out_infinite] delay-0"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1.5s_ease-in-out_infinite] delay-75"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1.5s_ease-in-out_infinite] delay-150"></div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border shadow-lg">
            <h2 className="text-foreground text-xl font-bold tracking-wider">
              YATRA ELEVATORS
            </h2>
            <p className="text-muted-foreground text-sm mt-1 tracking-wide">
              Premium Vertical Transportation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
