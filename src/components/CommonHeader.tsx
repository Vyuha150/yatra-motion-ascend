import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuth from './HeaderAuth';

const CommonHeader = () => {
  return (
    <div className="absolute top-16 left-0 right-0 z-20 flex justify-between items-center p-4">
      {/* Logo aligned with menu and floor indicator */}
      <Link to="/" className="flex items-center">
        <div className="bg-white/15 backdrop-blur-sm rounded-md px-4 py-2 border border-white/30 shadow-lg hover:bg-white/25 transition-all duration-300">
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            style={{ width: '238.59px', height: '65.2px' }}
            className="drop-shadow-lg"
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