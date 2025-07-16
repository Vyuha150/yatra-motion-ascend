
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import AdminButton from './AdminButton';

const HeaderAuth = () => {
  const { user, profile, signOut } = useAuth();

  if (user) {
    return (
      <div className="flex items-center space-x-3 h-12">
        <span className="text-sm text-white whitespace-nowrap drop-shadow-lg">
          Welcome, {profile?.first_name || 'User'}
        </span>
        <AdminButton />
        <Button
          onClick={signOut}
          variant="outline"
          size="sm"
          className="border-white text-white hover:bg-white hover:text-slate-900 h-10"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return null;
};

export default HeaderAuth;
