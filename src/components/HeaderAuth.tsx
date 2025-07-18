
import React from 'react';
import { useAuth } from './Auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAuth = () => {
  const { user, profile, signOut, isAdmin } = useAuth();
  
  // Check if user is admin by email or profile role
  const isUserAdmin = isAdmin || user?.email === 'admin@yatraelevators.com';
  
  // Debug logging
  console.log('HeaderAuth - User:', user?.id);
  console.log('HeaderAuth - Profile:', profile);
  console.log('HeaderAuth - Role:', profile?.role);
  console.log('HeaderAuth - isAdmin:', isAdmin);
  console.log('HeaderAuth - User Email:', user?.email);
  console.log('HeaderAuth - isUserAdmin:', isUserAdmin);

  if (user) {
    return (
      <div className="flex items-center space-x-2 h-12">
        {/* Admin Panel Button - Always visible for admin users */}
        {isUserAdmin && (
          <Link to="/admin">
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white border-2 border-yellow-400 shadow-lg font-bold px-4 py-2"
              title="Admin Panel"
            >
              <Shield className="h-4 w-4 mr-2" />
              ADMIN PANEL
            </Button>
          </Link>
        )}
        
        {/* User Icon with Role Badge */}
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-2">
          <div className="relative">
            <User className="h-6 w-6 text-white" />
            {profile?.role && ['admin', 'super_admin'].includes(profile.role) && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-white">
                <Settings className="h-2 w-2 text-slate-900 absolute top-0.5 left-0.5" />
              </div>
            )}
          </div>
          <span className="text-sm text-white font-medium">
            {profile?.first_name || 'User'} 
            {profile?.role && (
              <span className="text-xs text-blue-200 ml-1">({profile.role})</span>
            )}
          </span>
        </div>
        
        {/* Sign Out Button */}
        <Button
          onClick={signOut}
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
