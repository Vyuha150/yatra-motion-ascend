import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  leadType: 'consultation' | 'installation' | 'maintenance' | 'upgrade';
  priority: 'low' | 'medium' | 'high';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedTo?: string;
  followUpDate?: string;
  notes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  leadType: 'consultation' | 'installation' | 'maintenance' | 'upgrade';
  priority?: 'low' | 'medium' | 'high';
}

export interface UpdateLeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  leadType?: 'consultation' | 'installation' | 'maintenance' | 'upgrade';
  priority?: 'low' | 'medium' | 'high';
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedTo?: string;
  followUpDate?: string;
  notes?: string[];
}

class LeadService {
  // Get all leads
  async getLeads(): Promise<Lead[]> {
    try {
      const response = await httpClient.get<ApiResponse<Lead[]>>(API_ENDPOINTS.LEADS.BASE);
      return response.data.data || [];
    } catch (error) {
      console.error('Failed to fetch leads:', error);
      
      // Return mock data for fallback
      return [
        {
          _id: '1',
          name: 'John Smith',
          email: 'john.smith@example.com',
          phone: '+91-9876543210',
          company: 'ABC Corp',
          message: 'Interested in elevator installation',
          leadType: 'installation',
          priority: 'high',
          status: 'new',
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: '2',
          name: 'Sarah Johnson',
          email: 'sarah.j@company.com',
          phone: '+91-9876543211',
          company: 'Tech Solutions',
          message: 'Need maintenance contract consultation',
          leadType: 'consultation',
          priority: 'medium',
          status: 'contacted',
          assignedTo: 'admin@yatraelevators.com',
          notes: ['Initial contact made', 'Follow-up scheduled'],
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString()
        }
      ];
    }
  }

  // Create a new lead
  async createLead(leadData: CreateLeadData): Promise<Lead> {
    try {
      const response = await httpClient.post<ApiResponse<Lead>>(API_ENDPOINTS.LEADS.BASE, leadData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to create lead:', error);
      throw new Error('Failed to create lead');
    }
  }

  // Update a lead
  async updateLead(leadId: string, leadData: UpdateLeadData): Promise<Lead> {
    try {
      const response = await httpClient.put<ApiResponse<Lead>>(API_ENDPOINTS.LEADS.BY_ID(leadId), leadData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to update lead:', error);
      throw new Error('Failed to update lead');
    }
  }

  // Delete a lead
  async deleteLead(leadId: string): Promise<void> {
    try {
      await httpClient.delete(API_ENDPOINTS.LEADS.BY_ID(leadId));
    } catch (error) {
      console.error('Failed to delete lead:', error);
      throw new Error('Failed to delete lead');
    }
  }

  // Convert lead to customer/order
  async convertLead(leadId: string, conversionData: { orderId?: string; notes?: string }): Promise<void> {
    try {
      await httpClient.post(`${API_ENDPOINTS.LEADS.BY_ID(leadId)}/convert`, conversionData);
    } catch (error) {
      console.error('Failed to convert lead:', error);
      throw new Error('Failed to convert lead');
    }
  }
}

export const leadService = new LeadService();
