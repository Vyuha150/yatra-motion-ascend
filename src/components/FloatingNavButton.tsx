
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  onToggle: (isOpen: boolean) => void;
  isNavOpen: boolean;
}

const FloatingNavButton = ({ onToggle, isNavOpen }: FloatingNavButtonProps) => {
  const handleClick = () => {
    onToggle(!isNavOpen);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isNavOpen ? (
          <ArrowDown className="h-6 w-6" />
        ) : (
          <ArrowUp className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingNavButton;
