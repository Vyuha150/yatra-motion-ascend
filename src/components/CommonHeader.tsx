import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuth from './HeaderAuth';

const CommonHeader = () => {
  return (
    <div className="absolute top-12 left-0 right-0 z-20 flex justify-end items-center p-4">
      {/* Logo in top right */}
      <Link to="/" className="flex items-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/40 shadow-xl hover:bg-white/30 transition-all duration-300">
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="h-16 w-auto drop-shadow-lg"
          />
        </div>
      </Link>
      
      {/* Auth component in top left now */}
      <div className="absolute left-4 top-0">
        <HeaderAuth />
      </div>
    </div>
  );
};

export default CommonHeader;