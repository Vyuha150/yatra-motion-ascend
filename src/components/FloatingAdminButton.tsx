import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';

const FloatingAdminButton = () => {
  // Handle auth safely - check if AuthProvider is available
  let isAdmin = false;
  
  try {
    const authContext = useAuth();
    isAdmin = authContext.isAdmin;
  } catch (error) {
    // AuthProvider not available yet, use defaults
    console.log('AuthProvider not available for FloatingAdminButton');
  }

  // Only show button for admin users
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="fixed right-4 top-32 z-50 animate-fade-in">
      <Link to="/admin">
        <Button
          size="lg"
          className="w-18 h-18 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-yellow-400 flex flex-col items-center justify-center gap-1"
          title="Admin Panel"
        >
          <Shield className="h-6 w-6" />
          <span className="text-xs font-medium">Admin</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingAdminButton;