
import React from 'react';
import { X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from './Auth/useAuth';
import { Link } from 'react-router-dom';

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
  const { user } = useAuth();

  const handleClick = () => {
    onToggle(!isNavOpen);
  };

  return (
    <div className="fixed right-4 top-16 z-50 flex items-center gap-2">
      {/* Auth button - only show Sign In for unauthenticated users */}
      {!user && (
        <Link to="/auth">
          <Button
            size="sm"
            className="h-12 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 backdrop-blur-sm flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            <span className="text-xs">Sign In</span>
          </Button>
        </Link>
      )}

      {/* Menu button */}
      <Button
        onClick={handleClick}
        size="lg"
        className="w-16 h-16 rounded-full bg-steel-dark hover:bg-steel-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-steel-accent flex flex-col items-center justify-center gap-1"
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
