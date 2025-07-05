
import React, { useState } from 'react';
import FloatingNavButton from './FloatingNavButton';
import VerticalNavbar from './VerticalNavbar';

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
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
          alt="Yatra Elevators Logo" 
          className="h-16 w-auto"
        />
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
