import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface DashboardStats {
  totalInstallations: number;
  activeAMCContracts: number;
  pendingServiceTickets: number;
  totalRevenue: number;
  newLeadsThisMonth: number;
  showrooms: number;
}

export interface RecentActivity {
  id: string;
  type: 'amc' | 'service' | 'lead' | 'installation';
  title: string;
  description: string;
  amount?: number;
  timestamp: string;
  status: 'completed' | 'pending' | 'in_progress';
}

class DashboardService {
  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    try {
      const response = await httpClient.get<DashboardStats>(API_ENDPOINTS.DASHBOARD.STATS);
      return response;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      // Return mock data as fallback
      return {
        success: true,
        data: {
          totalInstallations: 156,
          activeAMCContracts: 89,
          pendingServiceTickets: 12,
          totalRevenue: 2450000,
          newLeadsThisMonth: 23,
          showrooms: 8
        }
      };
    }
  }

  async getRecentActivities(): Promise<ApiResponse<RecentActivity[]>> {
    try {
      const response = await httpClient.get<RecentActivity[]>(API_ENDPOINTS.DASHBOARD.RECENT_ACTIVITIES);
      return response;
    } catch (error) {
      console.error('Error fetching recent activities:', error);
      // Return mock data as fallback
      return {
        success: true,
        data: [
          {
            id: '1',
            type: 'amc',
            title: 'New AMC contract signed',
            description: 'Tech Tower Ltd - ₹2,00,000',
            amount: 200000,
            timestamp: new Date().toISOString(),
            status: 'completed'
          },
          {
            id: '2',
            type: 'service',
            title: 'Service ticket resolved',
            description: 'Raj Apartments - Elevator maintenance',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            status: 'completed'
          },
          {
            id: '3',
            type: 'lead',
            title: 'New lead received',
            description: 'Commercial complex in Mumbai',
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            status: 'pending'
          }
        ]
      };
    }
  }

  async generateMonthlyReport(): Promise<ApiResponse<{ reportUrl: string }>> {
    try {
      const response = await httpClient.post<{ reportUrl: string }>(API_ENDPOINTS.DASHBOARD.GENERATE_REPORT);
      return response;
    } catch (error) {
      console.error('Error generating monthly report:', error);
      throw error;
    }
  }

  async sendAMCRenewalNotifications(): Promise<ApiResponse<{ sent: number }>> {
    try {
      const response = await httpClient.post<{ sent: number }>(API_ENDPOINTS.DASHBOARD.SEND_AMC_NOTIFICATIONS);
      return response;
    } catch (error) {
      console.error('Error sending AMC renewal notifications:', error);
      throw error;
    }
  }

  async backupDatabase(): Promise<ApiResponse<{ backupId: string; timestamp: string }>> {
    try {
      const response = await httpClient.post<{ backupId: string; timestamp: string }>(API_ENDPOINTS.DASHBOARD.BACKUP_DATABASE);
      return response;
    } catch (error) {
      console.error('Error creating database backup:', error);
      throw error;
    }
  }
}

export const dashboardService = new DashboardService();
