import React from 'react';

const ElevatorSkeleton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Cabin skeleton */}
        <div className="w-64 h-40 bg-slate-700/30 rounded-lg animate-pulse border-2 border-slate-600/50" />
        
        {/* Door skeletons */}
        <div className="absolute top-2 left-2 w-28 h-36 bg-slate-600/40 rounded animate-pulse" />
        <div className="absolute top-2 right-2 w-28 h-36 bg-slate-600/40 rounded animate-pulse" />
        
        {/* Control panel skeleton */}
        <div className="absolute top-4 right-4 w-8 h-16 bg-slate-500/50 rounded animate-pulse" />
        
        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="text-white/60 text-sm font-medium">
            Loading 3D Elevator...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorSkeleton;