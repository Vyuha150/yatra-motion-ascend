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
    { label: 'Get Quote', href: '/client-requirement' },
    { label: 'Feedback', href: '/feedback' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 font-source shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 font-montserrat tracking-tight">
              Yatra Elevators
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 font-source ${
                  location.pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
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
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-4 w-4" />
                  <span className="text-sm">
                    {user?.firstName || user?.email || 'User'}
                    {user?.role && (
                      <span className="ml-1 text-xs text-blue-600">
                        ({user.role})
                      </span>
                    )}
                  </span>
                </div>

                {/* Settings */}
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                  <Settings className="h-4 w-4" />
                </Button>

                {/* Sign Out */}
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
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