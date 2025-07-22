import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface CustomerFeedback {
  _id: string;
  name: string;
  email: string;
  projectName: string;
  serviceCompletionDate?: string;
  serviceType: string;
  otherServiceType?: string;
  ratings: {
    productQuality?: number;
    installationExecution?: number;
    teamProfessionalism?: number;
    communicationSupport?: number;
    safetyStandards?: number;
  };
  likedMost?: string;
  improvements?: string;
  wouldRecommend?: string;
  additionalComments?: string;
  status: 'new' | 'reviewed' | 'responded' | 'closed';
  tags: string[];
  adminResponse?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerFeedbackCreateData {
  name: string;
  email: string;
  projectName: string;
  serviceCompletionDate?: string;
  serviceType: string;
  otherServiceType?: string;
  productQuality?: string;
  installationExecution?: string;
  teamProfessionalism?: string;
  communicationSupport?: string;
  safetyStandards?: string;
  likedMost?: string;
  improvements?: string;
  wouldRecommend?: string;
  additionalComments?: string;
}

export interface CustomerFeedbackFilters {
  page?: number;
  limit?: number;
  status?: string;
  serviceType?: string;
  rating?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface CustomerFeedbackStats {
  total: number;
  byStatus: Record<string, number>;
  byServiceType: Record<string, number>;
  averageRatings: {
    productQuality: number;
    installationExecution: number;
    teamProfessionalism: number;
    communicationSupport: number;
    safetyStandards: number;
    overall: number;
  };
  recentFeedback: CustomerFeedback[];
}

class CustomerFeedbackService {
  async createCustomerFeedback(data: CustomerFeedbackCreateData): Promise<ApiResponse<CustomerFeedback>> {
    try {
      const response = await httpClient.post<CustomerFeedback>(
        API_ENDPOINTS.CUSTOMER_FEEDBACK.BASE,
        data
      );
      return response;
    } catch (error) {
      console.error('Failed to create customer feedback:', error);
      throw error;
    }
  }

  async getCustomerFeedback(filters?: CustomerFeedbackFilters): Promise<ApiResponse<CustomerFeedback[]>> {
    try {
      const params = new URLSearchParams();
      
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            params.append(key, value.toString());
          }
        });
      }
      
      const queryString = params.toString();
      const url = queryString ? `${API_ENDPOINTS.CUSTOMER_FEEDBACK.BASE}?${queryString}` : API_ENDPOINTS.CUSTOMER_FEEDBACK.BASE;
      
      const response = await httpClient.get<CustomerFeedback[]>(url);
      return response;
    } catch (error) {
      console.error('Failed to fetch customer feedback:', error);
      
      // Return mock data as fallback
      const mockFeedback: CustomerFeedback[] = [
        {
          _id: 'fb1',
          name: 'John Smith',
          email: 'john.smith@example.com',
          projectName: 'Office Building Elevator Installation',
          serviceCompletionDate: '2024-01-15',
          serviceType: 'new-installation',
          ratings: {
            productQuality: 5,
            installationExecution: 4,
            teamProfessionalism: 5,
            communicationSupport: 4,
            safetyStandards: 5
          },
          likedMost: 'Professional team and quality installation',
          improvements: 'Better communication about timeline',
          wouldRecommend: 'yes',
          additionalComments: 'Overall great experience',
          status: 'reviewed',
          tags: ['satisfied', 'referral'],
          createdAt: '2024-01-16T10:30:00Z',
          updatedAt: '2024-01-16T10:30:00Z'
        },
        {
          _id: 'fb2',
          name: 'Sarah Johnson',
          email: 'sarah.j@company.com',
          projectName: 'Shopping Mall Escalator Maintenance',
          serviceCompletionDate: '2024-01-10',
          serviceType: 'amc-maintenance',
          ratings: {
            productQuality: 4,
            installationExecution: 4,
            teamProfessionalism: 5,
            communicationSupport: 5,
            safetyStandards: 4
          },
          likedMost: 'Quick response time and professional service',
          improvements: 'None, everything was perfect',
          wouldRecommend: 'yes',
          status: 'new',
          tags: ['maintenance', 'satisfied'],
          createdAt: '2024-01-11T14:20:00Z',
          updatedAt: '2024-01-11T14:20:00Z'
        }
      ];
      
      return {
        success: true,
        data: mockFeedback,
        message: 'Mock data loaded'
      };
    }
  }

  async getFeedbackById(id: string): Promise<ApiResponse<CustomerFeedback>> {
    try {
      const response = await httpClient.get<CustomerFeedback>(API_ENDPOINTS.CUSTOMER_FEEDBACK.BY_ID(id));
      return response;
    } catch (error) {
      console.error('Failed to fetch feedback:', error);
      throw error;
    }
  }

  async updateFeedbackStatus(id: string, status: string): Promise<ApiResponse<CustomerFeedback>> {
    try {
      const response = await httpClient.patch<CustomerFeedback>(
        API_ENDPOINTS.CUSTOMER_FEEDBACK.STATUS(id),
        { status }
      );
      return response;
    } catch (error) {
      console.error('Failed to update feedback status:', error);
      throw error;
    }
  }

  async addFeedbackResponse(id: string, response: string): Promise<ApiResponse<CustomerFeedback>> {
    try {
      const responseData = await httpClient.post<CustomerFeedback>(
        API_ENDPOINTS.CUSTOMER_FEEDBACK.RESPONSE(id),
        { response }
      );
      return responseData;
    } catch (error) {
      console.error('Failed to add feedback response:', error);
      throw error;
    }
  }

  async getFeedbackStats(): Promise<ApiResponse<CustomerFeedbackStats>> {
    try {
      const response = await httpClient.get<CustomerFeedbackStats>(API_ENDPOINTS.CUSTOMER_FEEDBACK.STATS);
      return response;
    } catch (error) {
      console.error('Failed to fetch feedback statistics:', error);
      
      // Return mock stats as fallback
      const mockStats: CustomerFeedbackStats = {
        total: 25,
        byStatus: {
          new: 8,
          reviewed: 12,
          responded: 4,
          closed: 1
        },
        byServiceType: {
          'new-installation': 10,
          'modernization': 6,
          'amc-maintenance': 8,
          'consultancy': 1
        },
        averageRatings: {
          productQuality: 4.2,
          installationExecution: 4.1,
          teamProfessionalism: 4.6,
          communicationSupport: 4.3,
          safetyStandards: 4.5,
          overall: 4.3
        },
        recentFeedback: []
      };
      
      return {
        success: true,
        data: mockStats,
        message: 'Mock statistics loaded'
      };
    }
  }
}

export const customerFeedbackService = new CustomerFeedbackService();
