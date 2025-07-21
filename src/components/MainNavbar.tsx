import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';
import { Button } from '@/components/ui/button';
import { Shield, Settings, LogOut, User } from 'lucide-react';

const MainNavbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();

  // Debug logging
  console.log('MainNavbar - User:', user?._id);
  console.log('MainNavbar - User Role:', user?.role);
  console.log('MainNavbar - isAdmin:', isAdmin);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
              alt="Yatra Elevators" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Auth + Admin */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* User Info */}
                <div className="flex items-center space-x-2 text-white">
                  <User className="h-4 w-4" />
                  <span className="text-sm">
                    {user?.firstName || user?.email || 'User'}
                    {user?.role && (
                      <span className="ml-1 text-xs text-blue-400">
                        ({user.role})
                      </span>
                    )}
                  </span>
                </div>

                {/* Admin Panel Button - Show for ALL logged in users for debugging */}
                <Link to="/admin">
                  <Button
                    size="sm"
                    className={`${
                      isAdmin || user // Show for all users temporarily for debugging
                        ? 'bg-red-600 hover:bg-red-700 border border-yellow-400'
                        : 'bg-gray-600 hover:bg-gray-700'
                    } text-white`}
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Admin Panel
                  </Button>
                </Link>

                {/* Settings */}
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Settings className="h-4 w-4" />
                </Button>

                {/* Sign Out */}
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;