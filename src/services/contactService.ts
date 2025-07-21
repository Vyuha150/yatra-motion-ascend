import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  type: 'inquiry' | 'quote_request' | 'support' | 'complaint' | 'feedback';
  status: 'new' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  responses: Array<{
    respondedBy: string;
    message: string;
    date: string;
    attachments?: string[];
  }>;
  tags: string[];
  source: 'website' | 'phone' | 'email' | 'chat';
  metadata: {
    userAgent?: string;
    ipAddress?: string;
    referrer?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactCreateData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  type: 'inquiry' | 'quote_request' | 'support' | 'complaint' | 'feedback';
  source?: 'website' | 'phone' | 'email' | 'chat';
}

export interface ContactFilters {
  status?: string;
  type?: string;
  priority?: string;
  assignedTo?: string;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface ContactsResponse {
  contacts: Contact[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface ContactResponse {
  message: string;
  attachments?: string[];
}

class ContactService {
  async createContact(contactData: ContactCreateData): Promise<ApiResponse<Contact>> {
    return await httpClient.post<Contact>(API_ENDPOINTS.CONTACTS.BASE, contactData);
  }

  async getContacts(
    page: number = 1,
    limit: number = 10,
    filters?: ContactFilters
  ): Promise<ApiResponse<ContactsResponse>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    return await httpClient.get<ContactsResponse>(`${API_ENDPOINTS.CONTACTS.BASE}?${params.toString()}`);
  }

  async getContact(id: string): Promise<ApiResponse<Contact>> {
    return await httpClient.get<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id));
  }

  async updateContact(id: string, contactData: Partial<Contact>): Promise<ApiResponse<Contact>> {
    return await httpClient.put<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id), contactData);
  }

  async deleteContact(id: string): Promise<ApiResponse<{ message: string }>> {
    return await httpClient.delete<{ message: string }>(API_ENDPOINTS.CONTACTS.BY_ID(id));
  }

  async addResponse(id: string, response: ContactResponse): Promise<ApiResponse<Contact>> {
    return await httpClient.post<Contact>(API_ENDPOINTS.CONTACTS.RESPONSES(id), response);
  }

  async assignContact(id: string, assignedTo: string): Promise<ApiResponse<Contact>> {
    return await httpClient.put<Contact>(API_ENDPOINTS.CONTACTS.ASSIGN(id), { assignedTo });
  }

  async updateStatus(id: string, status: string): Promise<ApiResponse<Contact>> {
    return await httpClient.put<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id), { status });
  }

  async updatePriority(id: string, priority: string): Promise<ApiResponse<Contact>> {
    return await httpClient.put<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id), { priority });
  }
}

export const contactService = new ContactService();
export default contactService;
