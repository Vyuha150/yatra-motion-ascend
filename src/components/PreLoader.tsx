
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Fallback elevator doors animation data (lightweight inline)
  const elevatorDoorsAnimation = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 60,
    w: 800,
    h: 600,
    nm: "Elevator Doors",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Left Door",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [200, 300] },
          a: { a: 0, k: [0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 30, s: [100, 100] },
              { t: 60, s: [0, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 600] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.7, 0.7, 0.75, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Right Door",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [600, 300] },
          a: { a: 0, k: [0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 30, s: [100, 100] },
              { t: 60, s: [0, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 600] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.7, 0.7, 0.75, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // Auto-start animation after 1 second, complete in ~2 seconds total
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 300); // Brief fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      {/* Logo with soft spotlight while doors are closed */}
      <div className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
        animationComplete ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="text-center">
          {/* Soft spotlight background */}
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl" />
          
          <div className="relative z-10">
            <img 
              src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
              alt="Yatra Elevators Logo" 
              className="w-32 h-auto mx-auto mb-3 drop-shadow-2xl animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
              <h2 className="text-white text-lg font-medium tracking-wide">YATRA ELEVATORS</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Lottie elevator doors animation */}
      <div className="absolute inset-0 z-20">
        <Lottie
          animationData={elevatorDoorsAnimation}
          loop={false}
          autoplay={!animationComplete}
          onComplete={() => setAnimationComplete(true)}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)',
            filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))'
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
            hideOnTransparent: true
          }}
        />
        
        {/* Brushed metal texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)`
        }} />
      </div>
    </div>
  );
};

export default PreLoader;
