import { createContext, useContext } from 'react';
import { User, LoginCredentials, RegisterData, ProfileUpdateData, ChangePasswordData, LoginResponse } from '@/services/authService';
import { ApiResponse } from '@/services/httpClient';

export interface AuthContextType {
  profile: User;
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<ApiResponse<LoginResponse>>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: ProfileUpdateData) => Promise<void>;
  changePassword: (data: ChangePasswordData) => Promise<void>;
  refreshProfile: () => Promise<void>;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
