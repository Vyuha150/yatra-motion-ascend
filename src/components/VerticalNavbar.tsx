import React from 'react';
import { X, Home, User, Package, Briefcase, Phone, Users, ShoppingCart, Settings, Shield, BarChart3, FileText, Wrench, LogOut, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';

interface VerticalNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerticalNavbar = ({ isOpen, onClose }: VerticalNavbarProps) => {
  const location = useLocation();
  const { user, isAdmin, logout } = useAuth();
  
  const navItems = [
    { icon: Home, label: 'Home', href: '/', color: 'text-blue-400' },
    { icon: User, label: 'About Us', href: '/about', color: 'text-green-400' },
    { icon: Package, label: 'Products & Services', href: '/products', color: 'text-purple-400' },
    { icon: Zap, label: 'Innovation & Tech', href: '/innovation', color: 'text-indigo-400' },
    { icon: Briefcase, label: 'Projects', href: '/projects', color: 'text-orange-400' },
    { icon: Phone, label: 'Contact Us', href: '/contact', color: 'text-pink-400' },
    { icon: Users, label: 'Careers', href: '/careers', color: 'text-cyan-400' },
    { icon: ShoppingCart, label: 'Cart', href: '#cart', color: 'text-yellow-400' },
  ];

  const socialIcons = [
    { name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', href: '#', color: 'hover:text-red-600' },
  ];

  const handleItemClick = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
      )}

      {/* Vertical Navbar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-steel-dark shadow-2xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="min-h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-steel-accent">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full hover:bg-steel-medium text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Content */}
          <div className="py-6">
            <nav className="space-y-3 px-4">
              {/* Main Navigation */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-steel-light uppercase tracking-wide mb-3">Main Menu</h3>
                {navItems.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleItemClick}
                    className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-steel-dark/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white ${
                      isOpen ? 'animate-fade-in' : ''
                    } ${location.pathname === item.href ? 'bg-steel-dark/30 text-white border-l-4 border-white' : ''}`}
                    style={{
                      animationDelay: isOpen ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <item.icon className={`h-5 w-5 group-hover:scale-110 transition-transform duration-200 ${item.color}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="p-6 border-t border-steel-accent">
            <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md ${
                    isOpen ? 'animate-scale-in' : ''
                  }`}
                  style={{
                    animationDelay: isOpen ? `${(navItems.length + index) * 100}ms` : '0ms',
                  }}
                >
                  <span className="text-sm font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* User Actions Section */}
          {user && (
            <div className="p-6 border-t border-steel-accent">
              <h3 className="text-sm font-semibold text-white mb-4">Account</h3>
              <div className="space-y-3">
                {/* User Profile Button */}
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-steel-dark/20 text-white">
                  <div className="relative">
                    <User className="h-5 w-5 text-blue-400" />
                    {user?.role && ['admin', 'super_admin'].includes(user.role) && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-white">
                        <Settings className="h-2 w-2 text-slate-900 absolute top-0.5 left-0.5" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      {user?.firstName || user?.email || 'User'}
                    </span>
                    {user?.role && (
                      <span className="text-xs text-steel-light capitalize">
                        {user.role} Access
                      </span>
                    )}
                  </div>
                </div>

                {/* Profile Button */}
                <Link
                  to="/profile"
                  onClick={handleItemClick}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20"
                >
                  <Settings className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  <div className="flex flex-col">
                    <span className="font-medium">My Profile</span>
                    <span className="text-xs text-steel-light">Manage Account</span>
                  </div>
                </Link>

                {/* Admin Panel Button - Only for admin users */}
                {(isAdmin || user?.email === 'admin@yatraelevators.com') && (
                  <Link
                    to="/admin"
                    onClick={handleItemClick}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-500/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20"
                  >
                    <Shield className="h-5 w-5 text-red-400 group-hover:scale-110 transition-transform duration-200" />
                    <div className="flex flex-col">
                      <span className="font-medium">Admin Panel</span>
                      <span className="text-xs text-steel-light">Control Center</span>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    </div>
                  </Link>
                )}

                {/* Logout Button */}
                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-500/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white w-full text-left"
                >
                  <LogOut className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                  <div className="flex flex-col">
                    <span className="font-medium">Sign Out</span>
                    <span className="text-xs text-steel-light">Logout Account</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Login Button for Non-authenticated Users */}
          {!user && (
            <div className="p-6 border-t border-steel-accent">
              <h3 className="text-sm font-semibold text-white mb-4">Account</h3>
              <Link
                to="/auth"
                onClick={handleItemClick}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20"
              >
                <Shield className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <div className="flex flex-col">
                  <span className="font-medium">Sign In</span>
                  <span className="text-xs text-steel-light">Access Account</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
