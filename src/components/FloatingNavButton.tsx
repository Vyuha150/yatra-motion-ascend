
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  onToggle: (isOpen: boolean) => void;
  isNavOpen: boolean;
}

const ElevatorIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    {/* Elevator cabin */}
    <rect x="6" y="4" width="12" height="16" stroke="currentColor" strokeWidth="2" fill="none" rx="1"/>
    {/* Top floor indicator */}
    <rect x="8" y="6" width="2" height="1" fill="currentColor"/>
    <rect x="11" y="6" width="2" height="1" fill="currentColor"/>
    <rect x="14" y="6" width="2" height="1" fill="currentColor"/>
    {/* Door split line */}
    <line x1="12" y1="9" x2="12" y2="17" stroke="currentColor" strokeWidth="1"/>
    {/* Door handles */}
    <circle cx="10" cy="13" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="13" r="0.5" fill="currentColor"/>
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
        className="w-14 h-14 rounded-full bg-steel-dark hover:bg-steel-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-steel-accent"
      >
        {isNavOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <ElevatorIcon />
        )}
      </Button>
    </div>
  );
};

export default FloatingNavButton;
