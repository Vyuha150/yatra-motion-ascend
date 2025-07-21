import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface ServiceTicket {
  _id?: string;
  ticketId: string;
  customer: {
    userId?: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  elevator: {
    building: string;
    floor: string;
    serialNumber?: string;
    model?: string;
    installationDate?: string;
  };
  issue: {
    category: 'maintenance' | 'repair' | 'installation' | 'inspection' | 'emergency';
    type: 'electrical' | 'mechanical' | 'software' | 'safety' | 'other';
    priority: 'low' | 'medium' | 'high' | 'critical';
    title: string;
    description: string;
    attachments?: string[];
  };
  status: 'open' | 'assigned' | 'in_progress' | 'on_hold' | 'resolved' | 'closed';
  assignedTo?: string;
  estimatedResolution?: string;
  actualResolution?: string;
  communications: Array<{
    from: 'customer' | 'technician' | 'admin';
    message: string;
    timestamp: string;
    attachments?: string[];
  }>;
  feedback?: {
    rating: number;
    comment: string;
    submittedAt: string;
  };
  cost?: {
    laborCost: number;
    partsCost: number;
    totalCost: number;
    currency: string;
  };
  timeline: {
    createdAt: string;
    updatedAt: string;
    scheduledFor?: string;
    completedAt?: string;
  };
}

export interface ServiceTicketCreateData {
  customer: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  elevator: {
    building: string;
    floor: string;
    serialNumber?: string;
    model?: string;
  };
  issue: {
    category: 'maintenance' | 'repair' | 'installation' | 'inspection' | 'emergency';
    type: 'electrical' | 'mechanical' | 'software' | 'safety' | 'other';
    priority: 'low' | 'medium' | 'high' | 'critical';
    title: string;
    description: string;
    attachments?: string[];
  };
}

export interface ServiceTicketFilters {
  status?: string;
  priority?: string;
  category?: string;
  type?: string;
  search?: string;
  page?: number;
  limit?: number;
}

class ServiceTicketService {
  async getServiceTickets(filters?: ServiceTicketFilters): Promise<ApiResponse<{ tickets: ServiceTicket[]; total: number }>> {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, value.toString());
        }
      });
    }

    const queryString = params.toString();
    const url = queryString ? `${API_ENDPOINTS.SERVICE_TICKETS.BASE}?${queryString}` : API_ENDPOINTS.SERVICE_TICKETS.BASE;
    
    return httpClient.get(url);
  }

  async getServiceTicket(id: string): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.get(API_ENDPOINTS.SERVICE_TICKETS.BY_ID(id));
  }

  async createServiceTicket(data: ServiceTicketCreateData): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.post(API_ENDPOINTS.SERVICE_TICKETS.BASE, data);
  }

  async updateServiceTicket(id: string, data: Partial<ServiceTicket>): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.put(API_ENDPOINTS.SERVICE_TICKETS.BY_ID(id), data);
  }

  async updateServiceTicketStatus(id: string, status: string): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.put(API_ENDPOINTS.SERVICE_TICKETS.STATUS(id), { status });
  }

  async assignServiceTicket(id: string, assignedTo: string): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.put(API_ENDPOINTS.SERVICE_TICKETS.ASSIGN(id), { assignedTo });
  }

  async addCommunication(id: string, communication: {
    message: string;
    attachments?: string[];
  }): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.post(API_ENDPOINTS.SERVICE_TICKETS.COMMUNICATION(id), communication);
  }

  async addFeedback(id: string, feedback: {
    rating: number;
    comment: string;
  }): Promise<ApiResponse<ServiceTicket>> {
    return httpClient.post(API_ENDPOINTS.SERVICE_TICKETS.FEEDBACK(id), feedback);
  }

  async deleteServiceTicket(id: string): Promise<ApiResponse<void>> {
    return httpClient.delete(API_ENDPOINTS.SERVICE_TICKETS.BY_ID(id));
  }

  async getServiceTicketStats(): Promise<ApiResponse<{
    total: number;
    byStatus: Record<string, number>;
    byPriority: Record<string, number>;
    byCategory: Record<string, number>;
    recentTickets: ServiceTicket[];
  }>> {
    return httpClient.get(API_ENDPOINTS.SERVICE_TICKETS.STATS);
  }
}

export const serviceTicketService = new ServiceTicketService();
export default serviceTicketService;
