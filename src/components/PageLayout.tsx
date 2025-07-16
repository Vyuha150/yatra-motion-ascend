
import React, { useState } from 'react';
import FloatingNavButton from './FloatingNavButton';
import VerticalNavbar from './VerticalNavbar';
import HeaderAuth from './HeaderAuth';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Header with Logo and Auth */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        <img 
          src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
          alt="Yatra Elevators Logo" 
          className="h-16 w-auto"
        />
        <HeaderAuth />
      </div>

      {/* Page Content */}
      {children}
      
      {/* Floating Elements */}
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default PageLayout;
