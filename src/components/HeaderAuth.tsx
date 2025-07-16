
import React from 'react';
import { useAuth } from './Auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAuth = () => {
  const { user, profile, signOut } = useAuth();

  if (user) {
    return (
      <div className="flex items-center space-x-2 h-12">
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
          </span>
        </div>
        
        {/* Admin Panel Button for Admin Users */}
        {(['admin', 'super_admin'].includes(profile?.role || '')) && (
          <Link to="/admin">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 hover:text-white h-10 px-3 mr-2"
              title="Admin Panel"
            >
              <Shield className="h-4 w-4" />
            </Button>
          </Link>
        )}
        
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

  return null;
};

export default HeaderAuth;
