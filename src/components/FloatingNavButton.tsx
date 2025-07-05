
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  onToggle: (isOpen: boolean) => void;
  isNavOpen: boolean;
}

const EscalatorIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    {/* Up Arrow */}
    <path 
      d="M7 14L12 9L17 14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Down Arrow */}
    <path 
      d="M17 10L12 15L7 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const FloatingNavButton = ({ onToggle, isNavOpen }: FloatingNavButtonProps) => {
  const handleClick = () => {
    onToggle(!isNavOpen);
  };

  return (
    <div className="fixed right-6 top-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isNavOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <EscalatorIcon />
        )}
      </Button>
    </div>
  );
};

export default FloatingNavButton;
