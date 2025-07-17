
import React from 'react';
import { useAuth } from '../components/Auth/AuthProvider';
import AdminLayout from '../components/Admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  const { user, isAdmin, loading, profile } = useAuth();
  
  // Check if user is admin by email or profile role
  const isUserAdmin = isAdmin || user?.email === 'admin@yatraelevators.com';
  
  // Debug logging
  console.log('Admin Page - User:', user?.id);
  console.log('Admin Page - Profile:', profile);
  console.log('Admin Page - isAdmin:', isAdmin);
  console.log('Admin Page - isUserAdmin:', isUserAdmin);
  console.log('Admin Page - Loading:', loading);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
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
