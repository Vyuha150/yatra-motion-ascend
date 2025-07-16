import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuth from './HeaderAuth';

const CommonHeader = () => {
  return (
    <div className="absolute top-16 left-0 right-0 z-20 flex justify-between items-center p-4">
      {/* Empty space where logo was */}
      <div className="flex items-center">
      </div>
      
      {/* Auth component in top right */}
      <div>
        <HeaderAuth />
      </div>
    </div>
  );
};

export default CommonHeader;