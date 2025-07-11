import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuth from './HeaderAuth';

const CommonHeader = () => {
  return (
    <div className="absolute top-12 left-0 right-0 z-20 flex justify-between items-center p-4">
      {/* Logo in top left */}
      <Link to="/" className="flex items-center">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30 shadow-xl hover:bg-black/40 transition-all duration-300">
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="h-16 w-auto drop-shadow-lg"
          />
        </div>
      </Link>
      
      {/* Auth component in top right */}
      <div>
        <HeaderAuth />
      </div>
    </div>
  );
};

export default CommonHeader;