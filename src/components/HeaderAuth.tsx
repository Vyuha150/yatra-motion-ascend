
import React from 'react';
import { useAuth } from './Auth/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAuth = () => {
  const { user, logout, isAdmin } = useAuth();
  
  // Check if user is admin by email or role
  const isUserAdmin = isAdmin || user?.email === 'admin@yatraelevators.com';
  
  // Debug logging
  console.log('HeaderAuth - User:', user?._id);
  console.log('HeaderAuth - Role:', user?.role);
  console.log('HeaderAuth - isAdmin:', isAdmin);
  console.log('HeaderAuth - User Email:', user?.email);
  console.log('HeaderAuth - isUserAdmin:', isUserAdmin);

  if (user) {
    return (
      <div className="flex items-center space-x-2 h-12">
        {/* User Icon with Role Badge */}
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-2">
          <div className="relative">
            <User className="h-6 w-6 text-white" />
            {user?.role && ['admin', 'super_admin'].includes(user.role) && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-white">
                <Settings className="h-2 w-2 text-slate-900 absolute top-0.5 left-0.5" />
              </div>
            )}
          </div>
          <span className="text-sm text-white font-medium">
            {user?.firstName || user?.email || 'User'} 
            {user?.role && (
              <span className="text-xs text-blue-200 ml-1">({user.role})</span>
            )}
          </span>
        </div>
        
        {/* Sign Out Button */}
        <Button
          onClick={logout}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 hover:text-white h-10 px-3"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Show Login Button for non-logged-in users
  return (
    <div className="flex items-center space-x-2 h-12">
      <Link to="/auth">
        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default HeaderAuth;
