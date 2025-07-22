
import React, { useState, useEffect } from 'react';

const AnimatedHighlights = () => {
  const highlights = [
    "50+ Lift Installations Across South India",
    "MRL Lifts Available - Space Saving Technology", 
    "ISI Certified & Energy Efficient Solutions",
    "24/7 Customer Support & Lifetime Service",
    "Innovation, Safety, and Customer-Focused Solutions",
    "Tailor-Made Designs with Global Standards",
    "Efficient Post-Sales Service & Real-Time Monitoring"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-6 flex items-center justify-center">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-sm font-medium transition-all duration-1000 transform ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : index === (currentIndex - 1 + highlights.length) % highlights.length
                  ? 'opacity-0 -translate-y-6'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedHighlights;
