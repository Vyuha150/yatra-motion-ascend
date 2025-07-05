
import React from 'react';
import { Menu, X } from 'lucide-react';
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
    <div className="fixed right-6 top-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isNavOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingNavButton;
