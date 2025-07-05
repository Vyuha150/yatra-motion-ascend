
import React from 'react';
import { X } from 'lucide-react';

interface FloatingNavButtonProps {
  onToggle: (isOpen: boolean) => void;
  isNavOpen: boolean;
}

const EscalatorIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
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
    <div className="fixed right-4 top-4 z-50">
      <button
        onClick={handleClick}
        className="w-16 h-16 rounded-full text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        {isNavOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <EscalatorIcon />
        )}
      </button>
    </div>
  );
};

export default FloatingNavButton;
