
import React, { useState, useEffect } from 'react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentFloor, setCurrentFloor] = useState(1);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Floor counter animation
    const floorInterval = setInterval(() => {
      setCurrentFloor((prev) => (prev % 10) + 1);
    }, 300);

    // Complete loading when progress reaches 100%
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(floorInterval);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-1000`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-white/10 rotate-45"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main loading container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative">
          
          {/* Elevator Shaft Visualization */}
          <div className="relative mb-8">
            {/* Elevator Shaft */}
            <div className="w-24 h-64 mx-auto relative bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl border-4 border-slate-600 shadow-2xl overflow-hidden">
              {/* Floor indicators */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute left-0 right-0 h-8 border-b border-slate-600" style={{ top: `${i * 32}px` }}>
                  <div className="absolute right-2 top-1 text-xs text-slate-400 font-mono">
                    {8 - i}
                  </div>
                </div>
              ))}
              
              {/* Moving Elevator */}
              <div 
                className="absolute left-2 right-2 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded shadow-lg transition-all duration-300 ease-in-out"
                style={{ 
                  top: `${240 - (progress * 2.2)}px`,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded animate-pulse"></div>
              </div>
            </div>
            
            {/* Glow effect around shaft */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
          </div>

          {/* Progress Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20 shadow-2xl">
            {/* Digital Display */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-black/50 rounded-lg px-4 py-2 border border-green-500/30">
                <span className="text-2xl font-mono text-green-400 animate-pulse">
                  {currentFloor.toString().padStart(2, '0')}
                </span>
              </div>
              <div className="text-white/70 text-sm">
                <div className="text-xs uppercase tracking-widest">Floor</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto mb-4">
              <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Loading Message */}
            <div className="text-white/80 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-0"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-xs tracking-wider uppercase">Initializing System</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PreLoader;
