
import React, { useEffect, useState } from 'react';
import { authService, User, LoginCredentials, RegisterData, ProfileUpdateData, ChangePasswordData } from '@/services/authService';
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

  const updateProfile = async (data: ProfileUpdateData) => {
    setLoading(true);
    console.log('Updating profile with data:', data);
    try {
      const response = await authService.updateProfile(data);
      console.log('Profile update response:', response);
      if (response && response.success && response.data) {
        setUser(response.data);
      } else {
        throw new Error(response?.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      // Re-throw the original error to preserve the message
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (data: ChangePasswordData) => {
    setLoading(true);
    try {
      const response = await authService.changePassword(data);
      if (!response.success) {
        throw new Error(response.message || 'Failed to change password');
      }
    } catch (error) {
      console.error('Password change error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const response = await authService.getProfile();
      if (response && response.success && response.data) {
        setUser(response.data);
        localStorage.setItem('yatra_user', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Profile refresh error:', error);
    } finally {
      setLoading(false);
    }
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
    updateProfile,
    changePassword,
    refreshProfile,
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
