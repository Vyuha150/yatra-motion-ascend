
import React from 'react';
import { useAuth } from './Auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAuth = () => {
  const { user, profile, signOut } = useAuth();
  
  // Debug logging
  console.log('HeaderAuth - User:', user?.id);
  console.log('HeaderAuth - Profile:', profile);
  console.log('HeaderAuth - Role:', profile?.role);

  if (user) {
    return (
      <div className="flex items-center space-x-2 h-12">
        {/* Admin Panel Button - Light Blue for Admin Users */}
        {(['admin', 'super_admin'].includes(profile?.role || '')) && (
          <Link to="/admin">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white border border-blue-300 shadow-lg"
              title="Admin Panel"
            >
              <Shield className="h-4 w-4 mr-1" />
              Admin Panel
            </Button>
          </Link>
        )}
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
