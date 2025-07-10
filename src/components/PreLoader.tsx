
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
      }, 1500); // Wait for doors to open
    }, 2000); // Show loader for 2 seconds before opening doors

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500`}
    >
      {/* Elevator Cabin Background */}
      <div className="absolute inset-0 steel-texture bg-gradient-to-br from-secondary via-muted to-secondary">
        {/* Elevator Interior Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10" />
        
        {/* Side Panel Details */}
        <div className="absolute left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-border to-muted opacity-60" />
        <div className="absolute right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-border to-muted opacity-60" />
        
        {/* Floor Indicator at Top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 glass-reflection rounded-lg px-6 py-3 border border-border">
          <div className="text-primary font-mono text-2xl font-bold animate-pulse">
            G
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {/* Logo Container with Glass Effect */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto flex items-center justify-center glass-reflection rounded-2xl border border-border animate-scale-in">
              <img 
                src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
                alt="Yatra Elevators Logo" 
                className="w-32 h-auto animate-elevator-ding"
              />
            </div>
            
            {/* Elevator Shaft Lines */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
              <div className="w-1 h-24 bg-primary animate-slide-up opacity-80 rounded-full" />
            </div>
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
              <div className="w-1 h-24 bg-accent animate-slide-up opacity-60 rounded-full" style={{animationDelay: '0.2s'}} />
            </div>
          </div>

          {/* Company Name with Metallic Effect */}
          <div className="animate-fade-in mb-8" style={{animationDelay: '0.5s'}}>
            <h1 className="text-4xl font-bold text-foreground mb-2 tracking-wider">
              YATRA ELEVATORS
            </h1>
            <p className="text-muted-foreground font-medium text-lg">
              Reliable. Safe. Smart.
            </p>
          </div>

          {/* Loading Indicator - Elevator Panel Style */}
          <div className="flex justify-center">
            <div className="flex space-x-3 glass-reflection rounded-full px-6 py-3 border border-border">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full animate-pulse elevator-button"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Elevator Doors */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Left Door */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 border-r border-slate-400 transition-transform duration-1500 ease-out shadow-2xl ${
            doorsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* Enhanced Door Panel Details */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute right-6 top-1/3 w-8 h-12 bg-slate-800 rounded border border-slate-400 shadow-lg" />
          <div className="absolute right-6 bottom-1/3 w-8 h-12 bg-slate-800 rounded border border-slate-400 shadow-lg" />
          
          {/* Vertical Grooves */}
          <div className="absolute right-12 top-0 bottom-0 w-px bg-slate-400 opacity-60" />
          <div className="absolute right-16 top-0 bottom-0 w-px bg-slate-400 opacity-40" />
        </div>
        
        {/* Right Door */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-700 via-slate-600 to-slate-500 border-l border-slate-400 transition-transform duration-1500 ease-out shadow-2xl ${
            doorsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* Enhanced Door Panel Details */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute left-6 top-1/3 w-8 h-12 bg-slate-800 rounded border border-slate-400 shadow-lg" />
          <div className="absolute left-6 bottom-1/3 w-8 h-12 bg-slate-800 rounded border border-slate-400 shadow-lg" />
          
          {/* Vertical Grooves */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-slate-400 opacity-60" />
          <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-400 opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
