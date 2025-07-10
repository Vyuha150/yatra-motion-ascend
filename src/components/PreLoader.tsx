
import React, { useState, useEffect } from 'react';
import ElevatorDoors from './ElevatorDoors';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [stage, setStage] = useState<'loading' | 'doors' | 'complete'>('loading');

  useEffect(() => {
    // Loading stage
    const loadingTimer = setTimeout(() => {
      setStage('doors');
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleDoorsComplete = () => {
    setStage('complete');
    setTimeout(onLoadComplete, 300);
  };

  if (stage === 'complete') {
    return null;
  }

  return (
    <div className="fixed inset-0 cabin-bg z-[100] flex items-center justify-center">
      {stage === 'loading' ? (
        // Loading Stage - Elevator Cabin with Logo
        <div className="text-center animate-cabin-hum">
          {/* Elevator Cabin Frame */}
          <div className="relative cabin-bg rounded-lg border-2 border-accent/30 p-12 shadow-2xl">
            {/* Logo Container with Steel Panel Effect */}
            <div className="relative mb-8">
              <div className="steel-panel rounded-lg p-8 border border-accent/40">
                <div className="w-48 h-48 mx-auto flex items-center justify-center animate-scale-in">
                  <img 
                    src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
                    alt="Yatra Elevators Logo" 
                    className="w-full h-auto filter brightness-110"
                  />
                </div>
              </div>
              
              {/* Elevator Guide Rails */}
              <div className="absolute -right-6 top-0 bottom-0 w-2 steel-panel opacity-60"></div>
              <div className="absolute -left-6 top-0 bottom-0 w-2 steel-panel opacity-60"></div>
            </div>

            {/* Company Name with LED Effect */}
            <div className="animate-fade-in delay-500">
              <h1 className="text-4xl font-bold text-foreground mb-2 tracking-wider">
                YATRA ELEVATORS
              </h1>
              <p className="led-display text-lg font-medium animate-led-flicker">
                Reliable. Safe. Smart.
              </p>
            </div>

            {/* Elevator Status Display */}
            <div className="mt-8 steel-panel rounded-lg p-4 border border-accent/30">
              <div className="flex items-center justify-center gap-4">
                <div className="led-display text-sm">INITIALIZING</div>
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-accent rounded-full animate-button-pulse"
                      style={{
                        animationDelay: `${i * 0.3}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ambient Cabin Lights */}
          <div className="absolute top-4 left-4 w-4 h-4 bg-accent/40 rounded-full animate-button-pulse"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-accent/40 rounded-full animate-button-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-accent/40 rounded-full animate-button-pulse delay-500"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-accent/40 rounded-full animate-button-pulse delay-700"></div>
        </div>
      ) : (
        // Doors Opening Stage
        <ElevatorDoors isOpen={true} onComplete={handleDoorsComplete}>
          <div className="w-full h-full cabin-bg flex items-center justify-center">
            <div className="text-center">
              <div className="led-display text-2xl mb-4 animate-elevator-ding">
                WELCOME ABOARD
              </div>
              <div className="text-muted-foreground">Your vertical journey begins...</div>
            </div>
          </div>
        </ElevatorDoors>
      )}
    </div>
  );
};

export default PreLoader;
