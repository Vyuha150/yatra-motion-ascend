
import React from 'react';
import { X, Home, User, Package, Briefcase, Phone, Users, ShoppingCart, Settings, Shield, BarChart3, FileText, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './Auth/AuthProvider';

interface VerticalNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerticalNavbar = ({ isOpen, onClose }: VerticalNavbarProps) => {
  const location = useLocation();
  const { user, profile } = useAuth();
  
  const navItems = [
    { icon: Home, label: 'Home', href: '/', color: 'text-blue-400 glow-blue' },
    { icon: User, label: 'About Us', href: '/about', color: 'text-blue-400 glow-blue' },
    { icon: Package, label: 'Products & Services', href: '/products', color: 'text-blue-400 glow-blue' },
    { icon: Briefcase, label: 'Projects', href: '/projects', color: 'text-blue-400 glow-blue' },
    { icon: Phone, label: 'Contact Us', href: '/contact', color: 'text-blue-400 glow-blue' },
    { icon: Users, label: 'Careers', href: '/careers', color: 'text-blue-400 glow-blue' },
    { icon: ShoppingCart, label: 'Cart', href: '#cart', color: 'text-blue-400 glow-blue' },
  ];

  // Enhanced admin section with infographics
  const getAdminItems = () => {
    console.log('VerticalNavbar - User:', user?.id);
    console.log('VerticalNavbar - Profile:', profile);
    console.log('VerticalNavbar - Role:', profile?.role);
    
    if (!user) {
      return [{ icon: Shield, label: 'Admin Login', href: '/auth', color: 'text-blue-400 glow-blue', isAdminLogin: true }];
    }
    
    
    // Show admin items for admin roles
    if (profile?.role && ['super_admin', 'admin'].includes(profile.role)) {
      console.log('✅ Admin access granted for role:', profile.role);
      return [
        { icon: Settings, label: 'Admin Dashboard', href: '/admin', color: 'text-blue-400 glow-blue', isAdmin: true },
        { icon: BarChart3, label: 'Analytics', href: '/admin#analytics', color: 'text-blue-400 glow-blue', isAdmin: true },
        { icon: FileText, label: 'Reports', href: '/admin#reports', color: 'text-blue-400 glow-blue', isAdmin: true },
        { icon: Wrench, label: 'System Tools', href: '/admin#tools', color: 'text-blue-400 glow-blue', isAdmin: true },
      ];
    }
    
    return [];
  };

  const adminItems = getAdminItems();
  const allNavItems = [...navItems, ...adminItems];

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
        className={`fixed right-0 top-0 h-full w-80 bg-steel-dark shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
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

          {/* Navigation Items */}
          <div className="flex-1 py-6">
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

              {/* Admin Section */}
              {adminItems.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-steel-accent">
                  <h3 className="text-xs font-semibold text-steel-light uppercase tracking-wide mb-3">
                    {user ? 'Admin Tools' : 'Authentication'}
                  </h3>
                  {adminItems.map((item, index) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={handleItemClick}
                      className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-steel-dark/20 hover:text-white transition-all duration-300 transform hover:translate-x-2 group text-white ${
                        isOpen ? 'animate-fade-in' : ''
                      } ${location.pathname === item.href ? 'bg-steel-dark/30 text-white border-l-4 border-yellow-400' : ''} ${
                        item.isAdmin ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20' : ''
                      }`}
                      style={{
                        animationDelay: isOpen ? `${(navItems.length + index) * 100}ms` : '0ms',
                      }}
                    >
                      <item.icon className={`h-5 w-5 group-hover:scale-110 transition-transform duration-200 ${item.color}`} />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.label}</span>
                        {item.isAdmin && (
                          <span className="text-xs text-steel-light">Manager Access</span>
                        )}
                      </div>
                      {item.isAdmin && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
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
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
