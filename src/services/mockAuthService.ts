import { User, LoginCredentials, RegisterData, ProfileUpdateData, ChangePasswordData, VerifyOtpAndRegisterData } from './authService';

// Mock users database
const MOCK_USERS: User[] = [
  {
    _id: 'admin1',
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@yatraelevators.com',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    profile: {
      company: 'Yatra Elevators',
      designation: 'Administrator'
    },
    preferences: {
      notifications: true,
      newsletter: true
    }
  },
  {
    _id: 'user1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'user@example.com',
    role: 'user',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    preferences: {
      notifications: true,
      newsletter: false
    }
  }
];

// Mock passwords (in real app, these would be hashed)
const MOCK_PASSWORDS: Record<string, string> = {
  'admin@yatraelevators.com': 'admin123',
  'user@example.com': 'user123'
};

// Mock OTP storage
const MOCK_OTPS: Record<string, { otp: string; timestamp: number; userData?: VerifyOtpAndRegisterData }> = {};

class MockAuthService {
  private generateToken(): string {
    return btoa(JSON.stringify({
      timestamp: Date.now(),
      random: Math.random()
    }));
  }

  async login(credentials: LoginCredentials): Promise<{ success: boolean; data?: { user: User; token: string }; message?: string }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const user = MOCK_USERS.find(u => u.email === credentials.email);
    const password = MOCK_PASSWORDS[credentials.email];
    
    if (!user || password !== credentials.password) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
    
    const token = this.generateToken();
    
    // Store token and user
    localStorage.setItem('yatra_auth_token', token);
    localStorage.setItem('yatra_user', JSON.stringify(user));
    
    return {
      success: true,
      data: { user, token }
    };
  }

  async register(userData: RegisterData): Promise<{ success: boolean; data?: { user: User; token: string }; message?: string }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user already exists
    if (MOCK_USERS.find(u => u.email === userData.email)) {
      return {
        success: false,
        message: 'User with this email already exists'
      };
    }
    
    // Create new user
    const newUser: User = {
      _id: `user_${Date.now()}`,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role || 'user',
      isEmailVerified: false,
      isActive: true,
      createdAt: new Date().toISOString(),
      preferences: {
        notifications: true,
        newsletter: false
      }
    };
    
    // Add to mock database
    MOCK_USERS.push(newUser);
    MOCK_PASSWORDS[userData.email] = userData.password;
    
    const token = this.generateToken();
    
    // Store token and user
    localStorage.setItem('yatra_auth_token', token);
    localStorage.setItem('yatra_user', JSON.stringify(newUser));
    
    return {
      success: true,
      data: { user: newUser, token }
    };
  }

  async getProfile(): Promise<{ success: boolean; data?: User; message?: string }> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const token = localStorage.getItem('yatra_auth_token');
    if (!token) {
      return {
        success: false,
        message: 'Not authenticated'
      };
    }
    
    const userStr = localStorage.getItem('yatra_user');
    if (!userStr) {
      return {
        success: false,
        message: 'User data not found'
      };
    }
    
    try {
      const user = JSON.parse(userStr);
      return {
        success: true,
        data: user
      };
    } catch {
      return {
        success: false,
        message: 'Invalid user data'
      };
    }
  }

  async updateProfile(data: ProfileUpdateData): Promise<{ success: boolean; data?: User; message?: string }> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userStr = localStorage.getItem('yatra_user');
    if (!userStr) {
      return {
        success: false,
        message: 'User not found'
      };
    }
    
    try {
      const user = JSON.parse(userStr);
      
      // Update user data
      const updatedUser = {
        ...user,
        ...data,
        profile: {
          ...user.profile,
          ...data.profile
        },
        preferences: {
          ...user.preferences,
          ...data.preferences
        },
        updatedAt: new Date().toISOString()
      };
      
      // Update in mock database
      const userIndex = MOCK_USERS.findIndex(u => u._id === user._id);
      if (userIndex !== -1) {
        MOCK_USERS[userIndex] = updatedUser;
      }
      
      // Update localStorage
      localStorage.setItem('yatra_user', JSON.stringify(updatedUser));
      
      return {
        success: true,
        data: updatedUser
      };
    } catch {
      return {
        success: false,
        message: 'Failed to update profile'
      };
    }
  }

  async changePassword(data: ChangePasswordData): Promise<{ success: boolean; message: string }> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userStr = localStorage.getItem('yatra_user');
    if (!userStr) {
      return {
        success: false,
        message: 'User not found'
      };
    }
    
    try {
      const user = JSON.parse(userStr);
      const currentPassword = MOCK_PASSWORDS[user.email];
      
      if (currentPassword !== data.currentPassword) {
        return {
          success: false,
          message: 'Current password is incorrect'
        };
      }
      
      // Update password
      MOCK_PASSWORDS[user.email] = data.newPassword;
      
      return {
        success: true,
        message: 'Password changed successfully'
      };
    } catch {
      return {
        success: false,
        message: 'Failed to change password'
      };
    }
  }

  logout(): void {
    localStorage.removeItem('yatra_auth_token');
    localStorage.removeItem('yatra_user');
  }

  async sendOtp(email: string): Promise<{ success: boolean; data?: { message: string }; message?: string }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP with timestamp (expires in 10 minutes)
    MOCK_OTPS[email] = {
      otp,
      timestamp: Date.now()
    };
    
    // In a real app, this would send an email
    console.log(`Mock OTP for ${email}: ${otp}`);
    
    return {
      success: true,
      data: { message: 'OTP sent successfully to your email' }
    };
  }

  async verifyOtpAndRegister(data: VerifyOtpAndRegisterData): Promise<{ success: boolean; data?: { user: User; token: string }; message?: string }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const otpData = MOCK_OTPS[data.email];
    
    if (!otpData) {
      return {
        success: false,
        message: 'OTP not found or expired. Please request a new OTP.'
      };
    }
    
    // Check if OTP is expired (10 minutes)
    if (Date.now() - otpData.timestamp > 10 * 60 * 1000) {
      delete MOCK_OTPS[data.email];
      return {
        success: false,
        message: 'OTP has expired. Please request a new OTP.'
      };
    }
    
    // Verify OTP
    if (otpData.otp !== data.otp) {
      return {
        success: false,
        message: 'Invalid OTP. Please try again.'
      };
    }
    
    // Check if user already exists
    if (MOCK_USERS.find(u => u.email === data.email)) {
      return {
        success: false,
        message: 'User with this email already exists'
      };
    }
    
    // Create new user
    const newUser: User = {
      _id: `user_${Date.now()}`,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role || 'user',
      isEmailVerified: true, // Email is verified through OTP
      isActive: true,
      createdAt: new Date().toISOString(),
      preferences: {
        notifications: true,
        newsletter: false
      }
    };
    
    // Add to mock database
    MOCK_USERS.push(newUser);
    MOCK_PASSWORDS[data.email] = data.password;
    
    // Clear OTP
    delete MOCK_OTPS[data.email];
    
    const token = this.generateToken();
    
    // Store token and user
    localStorage.setItem('yatra_auth_token', token);
    localStorage.setItem('yatra_user', JSON.stringify(newUser));
    
    return {
      success: true,
      data: { user: newUser, token }
    };
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
    return !!localStorage.getItem('yatra_auth_token') && !!this.getCurrentUser();
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

  async deleteAccount(): Promise<{ success: boolean; data: { message: string } }> {
    // Mock delete account - simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear user data
    this.logout();
    
    return {
      success: true,
      data: { message: 'Account deleted successfully' }
    };
  }
}

export const mockAuthService = new MockAuthService();
