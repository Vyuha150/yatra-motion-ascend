import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: 'user' | 'admin' | 'super_admin' | 'showroom_employee' | 'bulk_buyer';
  isEmailVerified: boolean;
  profile?: {
    avatar?: string;
    company?: string;
    designation?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      pincode?: string;
      country?: string;
    };
  };
  preferences?: {
    notifications: boolean;
    newsletter: boolean;
  };
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role?: 'user' | 'admin' | 'super_admin' | 'showroom_employee' | 'bulk_buyer';
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface ProfileUpdateData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  profile?: {
    avatar?: string;
    company?: string;
    designation?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      pincode?: string;
      country?: string;
    };
  };
  preferences?: {
    notifications?: boolean;
    newsletter?: boolean;
  };
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> {
    const response = await httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
    
    if (response.success && response.data) {
      // Store token and user data
      httpClient.setToken(response.data.token);
      localStorage.setItem('yatra_user', JSON.stringify(response.data.user));
    }
    
    return response;
  }

  async register(userData: RegisterData): Promise<ApiResponse<LoginResponse>> {
    const response = await httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.REGISTER, userData);
    
    if (response.success && response.data) {
      // Store token and user data
      httpClient.setToken(response.data.token);
      localStorage.setItem('yatra_user', JSON.stringify(response.data.user));
    }
    
    return response;
  }

  async getProfile(): Promise<ApiResponse<User>> {
    return await httpClient.get<User>(API_ENDPOINTS.AUTH.PROFILE);
  }

  async updateProfile(data: ProfileUpdateData): Promise<ApiResponse<User>> {
    const response = await httpClient.put<User>(API_ENDPOINTS.AUTH.PROFILE, data);
    
    if (response.success && response.data) {
      // Update stored user data
      localStorage.setItem('yatra_user', JSON.stringify(response.data));
    }
    
    return response;
  }

  async changePassword(data: ChangePasswordData): Promise<ApiResponse<{ message: string }>> {
    return await httpClient.put<{ message: string }>(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, data);
  }

  logout(): void {
    httpClient.removeToken();
    localStorage.removeItem('yatra_user');
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('yatra_user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return httpClient.isAuthenticated() && !!this.getCurrentUser();
  }

  hasRole(roles: string | string[]): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    const rolesArray = Array.isArray(roles) ? roles : [roles];
    return rolesArray.includes(user.role);
  }

  isAdmin(): boolean {
    return this.hasRole(['admin', 'super_admin']);
  }

  isSuperAdmin(): boolean {
    return this.hasRole('super_admin');
  }
}

export const authService = new AuthService();
export default authService;
