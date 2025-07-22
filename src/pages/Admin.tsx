
import React from 'react';
import { useAuth } from '../components/Auth/useAuth';
import AdminLayout from '../components/Admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  
  // Check if user is admin by email or role
  const isUserAdmin = isAdmin || user?.email === 'admin@yatraelevators.com';
  
  // Debug logging
  console.log('Admin Page - User:', user?._id);
  console.log('Admin Page - User Role:', user?.role);
  console.log('Admin Page - isAdmin:', isAdmin);
  console.log('Admin Page - isUserAdmin:', isUserAdmin);
  console.log('Admin Page - Loading:', loading);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <span className="text-2xl font-bold text-primary animate-[logo-spin_2s_ease-in-out_infinite]" style={{
                filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.3))'
              }}>
                Y
              </span>
            </div>
          </div>
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              You need to be logged in to access the admin panel.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isUserAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              You don't have admin privileges to access this panel.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <AdminLayout />;
};

export default Admin;
