import React, { useState, useEffect } from 'react';

interface ElevatorDoorsProps {
  isOpen: boolean;
  onComplete: () => void;
  children?: React.ReactNode;
}

const ElevatorDoors = ({ isOpen, onComplete, children }: ElevatorDoorsProps) => {
  const [animationState, setAnimationState] = useState<'closed' | 'opening' | 'open'>('closed');

  useEffect(() => {
    if (isOpen && animationState === 'closed') {
      setAnimationState('opening');
      const timer = setTimeout(() => {
        setAnimationState('open');
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, animationState, onComplete]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left Door */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full steel-panel border-r-2 border-accent/30 transition-transform duration-[2000ms] ease-out ${
          animationState === 'open' ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="h-full w-full flex items-center justify-end pr-4">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40"></div>
        </div>
      </div>

      {/* Right Door */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full steel-panel border-l-2 border-accent/30 transition-transform duration-[2000ms] ease-out ${
          animationState === 'open' ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="h-full w-full flex items-center justify-start pl-4">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40"></div>
        </div>
      </div>

      {/* Content behind doors */}
      <div className={`w-full h-full ${animationState === 'open' ? 'visible' : 'invisible'}`}>
        {children}
      </div>

      {/* Door opening indicator */}
      {animationState === 'opening' && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
            <span className="text-accent text-sm font-mono">DOORS OPENING</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElevatorDoors;