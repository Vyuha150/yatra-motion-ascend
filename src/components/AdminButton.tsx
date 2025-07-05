
import React from 'react';
import { useAuth } from './Auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminButton = () => {
  const { isAdmin, user } = useAuth();

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <Link to="/admin">
      <Button variant="outline" size="sm">
        <Shield className="h-4 w-4 mr-2" />
        Admin
      </Button>
    </Link>
  );
};

export default AdminButton;
