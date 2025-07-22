
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
      {/* Header - Logo removed for cleaner navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        {/* Logo removed - navigation handled by floating menu */}
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
