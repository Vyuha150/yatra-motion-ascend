import React, { useEffect, useState } from 'react';
import { authService, User } from '@/services';
import { AuthContext } from './useAuth';
import { AuthContextType } from './types';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProviderBackend = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser();
          if (currentUser) {
            // Verify token is still valid by fetching profile
            const response = await authService.getProfile();
            if (response.success && response.data) {
              setUser(response.data);
            } else {
              // Token is invalid, logout
              authService.logout();
              setUser(null);
            }
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        authService.logout();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await authService.login({ email, password });
      
      if (response.success && response.data) {
        setUser(response.data.user);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: { 
    firstName: string; 
    lastName: string; 
    email: string; 
    password: string; 
    phone: string 
  }): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await authService.register(userData);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user ? ['admin', 'super_admin'].includes(user.role) : false,
    isSuperAdmin: user?.role === 'super_admin',
    hasRole: (roles: string | string[]) => {
      if (!user) return false;
      const rolesArray = Array.isArray(roles) ? roles : [roles];
      return rolesArray.includes(user.role);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
