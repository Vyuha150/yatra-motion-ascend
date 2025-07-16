
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

const PreLoader = ({ onLoadComplete }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Professional elevator doors animation - realistic opening from center
  const elevatorDoorsAnimation = {
    v: "5.7.4",
    fr: 24,
    ip: 0,
    op: 60,
    w: 1920,
    h: 1080,
    nm: "Professional Elevator Doors",
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
          p: {
            a: 1,
            k: [
              { i: { x: [0.2], y: [1] }, o: { x: [0.3], y: [0] }, t: 20, s: [480, 540] },
              { t: 60, s: [-240, 540] }
            ]
          },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [960, 1080] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.65, 0.68, 0.72, 1] },
                o: { a: 0, k: 100 }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.4, 0.43, 0.47, 1] },
                o: { a: 0, k: 80 },
                w: { a: 0, k: 2 }
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
          p: {
            a: 1,
            k: [
              { i: { x: [0.2], y: [1] }, o: { x: [0.3], y: [0] }, t: 20, s: [1440, 540] },
              { t: 60, s: [2160, 540] }
            ]
          },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [960, 1080] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.65, 0.68, 0.72, 1] },
                o: { a: 0, k: 100 }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.4, 0.43, 0.47, 1] },
                o: { a: 0, k: 80 },
                w: { a: 0, k: 2 }
              }
            ]
          }
        ]
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Door Frame",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [960, 540] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [1920, 1080] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.45, 0.48, 0.52, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // Professional timing: 2.5 seconds total for smooth experience
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 500); // Smooth fade out
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      {/* Centered logo with professional lighting while doors are closed */}
      <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-700 ${
        animationComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center relative">
          {/* Professional spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/15 via-white/5 to-transparent blur-2xl scale-150" />
          <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-primary/20 blur-xl" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
                alt="Yatra Elevators Logo" 
                className="w-40 h-auto mx-auto drop-shadow-2xl animate-[pulse_2.5s_ease-in-out_infinite]"
              />
            </div>
            <div className="bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20 shadow-2xl">
              <h2 className="text-white text-xl font-bold tracking-wider drop-shadow-lg">
                YATRA ELEVATORS
              </h2>
              <p className="text-white/80 text-sm mt-1 tracking-wide">
                Premium Vertical Transportation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional elevator doors animation */}
      <div className="absolute inset-0 z-20">
        <Lottie
          animationData={elevatorDoorsAnimation}
          loop={false}
          autoplay={true}
          onComplete={() => setAnimationComplete(true)}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #71717a 0%, #52525b 50%, #3f3f46 100%)'
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
            hideOnTransparent: true
          }}
        />
        
        {/* Realistic brushed metal texture overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px),
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)
          `
        }} />
        
        {/* Subtle elevator door shadows for depth */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/20 to-transparent" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
          <div className="absolute left-1/2 top-0 w-1 h-full bg-black/40 transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
