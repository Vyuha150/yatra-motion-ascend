
import React, { useEffect, useState } from 'react';
import { authService, User, LoginCredentials, RegisterData } from '@/services/authService';
import { AuthContext, AuthContextType } from './useAuth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const checkAuthStatus = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        // Clear any invalid token
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    try {
      console.log('Attempting login with:', credentials.email);
      const response = await authService.login(credentials);
      console.log('Login response:', response);
      
      if (response && response.success && response.data) {
        // The authService already handles token storage
        console.log('Setting user:', response.data.user);
        setUser(response.data.user);
      } else {
        console.error('Invalid response structure:', response);
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setLoading(true);
    try {
      const response = await authService.register(userData);
      if (response && response.success && response.data) {
        // The authService already handles token storage
        setUser(response.data.user);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin' || user?.role === 'super_admin';
  const isSuperAdmin = user?.role === 'super_admin';

  const value: AuthContextType = {
    profile: user as User, // profile is the same as user for compatibility
    user,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isSuperAdmin,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
