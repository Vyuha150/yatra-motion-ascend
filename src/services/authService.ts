import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';
import { mockAuthService } from './mockAuthService';

// Use mock service in development when backend is not available
const USE_MOCK_SERVICE = false; // Changed to false to use real backend for OTP

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

export interface VerifyOtpAndRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otp: string;
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

export interface OTPVerificationData {
  email: string;
  otp: string;
}

export interface ResetPasswordData {
  email: string;
  otp: string;
  newPassword: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.login(credentials);
    }
    
    try {
      const response = await httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
      
      if (response.success && response.data) {
        // Store token and user data
        httpClient.setToken(response.data.token);
        localStorage.setItem('yatra_user', JSON.stringify(response.data.user));
      }
      
      return response;
    } catch (error) {
      console.error('Backend login failed, falling back to mock service:', error);
      // Fallback to mock service if backend is unavailable
      return await mockAuthService.login(credentials);
    }
  }

  async register(userData: RegisterData): Promise<ApiResponse<LoginResponse>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.register(userData);
    }
    
    const response = await httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.REGISTER, userData);
    
    if (response.success && response.data) {
      // Store token and user data
      httpClient.setToken(response.data.token);
      localStorage.setItem('yatra_user', JSON.stringify(response.data.user));
    }
    
    return response;
  }

  async sendOtp(email: string): Promise<ApiResponse<{ message: string }>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.sendOtp(email);
    }
    
    try {
      const response = await httpClient.post<{ message: string }>(API_ENDPOINTS.AUTH.SEND_OTP, { email });
      return response;
    } catch (error) {
      console.error('Backend OTP request failed, falling back to mock service:', error);
      // Fallback to mock service if backend is unavailable
      return await mockAuthService.sendOtp(email);
    }
  }

  async verifyOtpAndRegister(data: VerifyOtpAndRegisterData): Promise<ApiResponse<LoginResponse>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.verifyOtpAndRegister(data);
    }
    
    try {
      const response = await httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.VERIFY_OTP_REGISTER, data);
      
      if (response.success && response.data) {
        // Store token and user data
        httpClient.setToken(response.data.token);
        localStorage.setItem('yatra_user', JSON.stringify(response.data.user));
      }
      
      return response;
    } catch (error) {
      console.error('Backend OTP verification failed, falling back to mock service:', error);
      // Fallback to mock service if backend is unavailable
      return await mockAuthService.verifyOtpAndRegister(data);
    }
  }

  async getProfile(): Promise<ApiResponse<User>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.getProfile();
    }
    
    return await httpClient.get<User>(API_ENDPOINTS.AUTH.PROFILE);
  }

  async updateProfile(data: ProfileUpdateData): Promise<ApiResponse<User>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.updateProfile(data);
    }
    
    const response = await httpClient.put<User>(API_ENDPOINTS.AUTH.PROFILE, data);
    
    if (response.success && response.data) {
      // Update stored user data
      localStorage.setItem('yatra_user', JSON.stringify(response.data));
    }
    
    return response;
  }

  async changePassword(data: ChangePasswordData): Promise<ApiResponse<{ message: string }>> {
    if (USE_MOCK_SERVICE) {
      return await mockAuthService.changePassword(data);
    }
    
    return await httpClient.put<{ message: string }>(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, data);
  }

  async sendVerificationOTP(email: string): Promise<ApiResponse<{ message: string; otp?: string }>> {
    if (USE_MOCK_SERVICE) {
      // Mock OTP service
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        success: true,
        data: { message: 'OTP sent successfully', otp: '123456' }
      };
    }
    
    return await httpClient.post<{ message: string; otp?: string }>(API_ENDPOINTS.AUTH.SEND_VERIFICATION_OTP, { email });
  }

  async verifyEmailOTP(data: OTPVerificationData): Promise<ApiResponse<{ message: string }>> {
    if (USE_MOCK_SERVICE) {
      // Mock OTP verification
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        success: data.otp === '123456',
        data: { message: data.otp === '123456' ? 'Email verified successfully' : 'Invalid OTP' }
      };
    }
    
    return await httpClient.post<{ message: string }>(API_ENDPOINTS.AUTH.VERIFY_EMAIL_OTP, data);
  }

  async forgotPassword(email: string): Promise<ApiResponse<{ message: string; otp?: string }>> {
    if (USE_MOCK_SERVICE) {
      // Mock forgot password
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        success: true,
        data: { message: 'Password reset OTP sent successfully', otp: '123456' }
      };
    }
    
    return await httpClient.post<{ message: string; otp?: string }>(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  }

  async resetPassword(data: ResetPasswordData): Promise<ApiResponse<{ message: string }>> {
    if (USE_MOCK_SERVICE) {
      // Mock reset password
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        success: data.otp === '123456',
        data: { message: data.otp === '123456' ? 'Password reset successfully' : 'Invalid OTP' }
      };
    }
    
    return await httpClient.post<{ message: string }>(API_ENDPOINTS.AUTH.RESET_PASSWORD, data);
  }

  logout(): void {
    if (USE_MOCK_SERVICE) {
      mockAuthService.logout();
      return;
    }
    
    httpClient.removeToken();
    localStorage.removeItem('yatra_user');
  }

  getCurrentUser(): User | null {
    if (USE_MOCK_SERVICE) {
      return mockAuthService.getCurrentUser();
    }
    
    const userStr = localStorage.getItem('yatra_user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    if (USE_MOCK_SERVICE) {
      return mockAuthService.isAuthenticated();
    }
    
    return httpClient.isAuthenticated() && !!this.getCurrentUser();
  }

  hasRole(roles: string | string[]): boolean {
    if (USE_MOCK_SERVICE) {
      return mockAuthService.hasRole(roles);
    }
    
    const user = this.getCurrentUser();
    if (!user) return false;
    
    const rolesArray = Array.isArray(roles) ? roles : [roles];
    return rolesArray.includes(user.role);
  }

  isAdmin(): boolean {
    if (USE_MOCK_SERVICE) {
      return mockAuthService.isAdmin();
    }
    
    return this.hasRole(['admin', 'super_admin']);
  }

  isSuperAdmin(): boolean {
    if (USE_MOCK_SERVICE) {
      return mockAuthService.isSuperAdmin();
    }
    
    return this.hasRole('super_admin');
  }
}

export const authService = new AuthService();
export default authService;
