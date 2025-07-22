import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from './config';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: string[];
}

class HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.baseURL,
      timeout: API_CONFIG.timeout,
      headers: API_CONFIG.headers,
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for handling errors
    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        // Ensure we're returning data in the expected format
        if (response.data && typeof response.data === 'object') {
          // If the response is already in our ApiResponse format, return it
          if ('success' in response.data) {
            return response;
          }
          // Otherwise, wrap it in our ApiResponse format
          return {
            ...response,
            data: {
              success: true,
              data: response.data,
            },
          };
        }
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized - remove token and redirect to login
          this.removeAuthToken();
          window.location.href = '/auth';
        }
        // Format error response
        const errorResponse = {
          success: false,
          message: error.response?.data?.message || 'An error occurred',
          error: error.response?.data?.error || error.message,
        };
        return Promise.reject(errorResponse);
      }
    );
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('yatra_auth_token');
  }

  private setAuthToken(token: string): void {
    localStorage.setItem('yatra_auth_token', token);
  }

  private removeAuthToken(): void {
    localStorage.removeItem('yatra_auth_token');
    localStorage.removeItem('yatra_user');
  }

  // Generic HTTP methods
  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.patch<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  private handleError<T = unknown>(error: unknown): ApiResponse<T> {
    console.error('API Error:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        console.error('Response data:', error.response.data);
        return error.response.data;
      } else if (error.request) {
        console.error('Request made but no response received:', error.request);
        return {
          success: false,
          message: 'Network error - no response from server',
          error: 'Network error'
        } as ApiResponse<T>;
      } else {
        console.error('Error setting up request:', error.message);
        return {
          success: false,
          message: error.message,
          error: error.message
        } as ApiResponse<T>;
      }
    }
    
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return {
      success: false,
      message: errorMessage,
      error: errorMessage
    } as ApiResponse<T>;
  }

  // Auth helper methods
  setToken(token: string): void {
    this.setAuthToken(token);
  }

  removeToken(): void {
    this.removeAuthToken();
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}

export const httpClient = new HttpClient();
export default httpClient;
