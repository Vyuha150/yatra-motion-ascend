
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  onToggle: (isOpen: boolean) => void;
  isNavOpen: boolean;
}

const MenuIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    {/* Menu lines */}
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FloatingNavButton = ({ onToggle, isNavOpen }: FloatingNavButtonProps) => {
  const handleClick = () => {
    onToggle(!isNavOpen);
  };

  return (
    <div className="fixed right-6 top-20 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-18 h-18 rounded-full bg-steel-dark hover:bg-steel-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-steel-accent flex flex-col items-center justify-center gap-1"
      >
        {isNavOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MenuIcon />
            <span className="text-xs font-medium">Menu</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default FloatingNavButton;
