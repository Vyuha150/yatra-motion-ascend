import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface Invoice {
  _id: string;
  invoiceNumber: string;
  customerId?: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
  customerPhone: string;
  invoiceDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  paymentMethod?: string;
  paidDate?: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceStats {
  totalInvoices: number;
  paidInvoices: number;
  pendingInvoices: number;
  overdueInvoices: number;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
}

export interface CreateInvoiceData {
  customerId?: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
  customerPhone: string;
  dueDate: string;
  items: InvoiceItem[];
  notes?: string;
}

export interface UpdateInvoiceData {
  customerId?: string;
  customerName?: string;
  customerAddress?: string;
  customerEmail?: string;
  customerPhone?: string;
  dueDate?: string;
  items?: InvoiceItem[];
  status?: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  paymentMethod?: string;
  notes?: string;
}

class InvoiceService {
  // Get all invoices
  async getInvoices(): Promise<Invoice[]> {
    try {
      const response = await httpClient.get<ApiResponse<Invoice[]>>(API_ENDPOINTS.INVOICES.BASE);
      return response.data.data || [];
    } catch (error) {
      console.error('Failed to fetch invoices:', error);
      
      // Return mock data for fallback
      return [
        {
          _id: '1',
          invoiceNumber: 'INV-001',
          customerName: 'ABC Corporation',
          customerAddress: '123 Business Park, Mumbai',
          customerEmail: 'billing@abc-corp.com',
          customerPhone: '+91-9876543210',
          invoiceDate: new Date().toISOString(),
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          items: [
            {
              description: 'Elevator Installation - Model XYZ',
              quantity: 1,
              unitPrice: 500000,
              total: 500000
            },
            {
              description: 'Annual Maintenance Contract',
              quantity: 1,
              unitPrice: 25000,
              total: 25000
            }
          ],
          subtotal: 525000,
          taxAmount: 94500, // 18% GST
          totalAmount: 619500,
          status: 'sent',
          notes: 'Standard installation with AMC package',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: '2',
          invoiceNumber: 'INV-002',
          customerName: 'XYZ Builders',
          customerAddress: '456 Construction Ave, Delhi',
          customerEmail: 'accounts@xyz-builders.com',
          customerPhone: '+91-9876543211',
          invoiceDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
          items: [
            {
              description: 'Elevator Maintenance Service',
              quantity: 3,
              unitPrice: 8000,
              total: 24000
            }
          ],
          subtotal: 24000,
          taxAmount: 4320,
          totalAmount: 28320,
          status: 'paid',
          paymentMethod: 'Bank Transfer',
          paidDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          notes: 'Monthly maintenance for 3 elevators',
          createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];
    }
  }

  // Create a new invoice
  async createInvoice(invoiceData: CreateInvoiceData): Promise<Invoice> {
    try {
      const response = await httpClient.post<ApiResponse<Invoice>>(API_ENDPOINTS.INVOICES.BASE, invoiceData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to create invoice:', error);
      throw new Error('Failed to create invoice');
    }
  }

  // Update an invoice
  async updateInvoice(invoiceId: string, invoiceData: UpdateInvoiceData): Promise<Invoice> {
    try {
      const response = await httpClient.put<ApiResponse<Invoice>>(API_ENDPOINTS.INVOICES.BY_ID(invoiceId), invoiceData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to update invoice:', error);
      throw new Error('Failed to update invoice');
    }
  }

  // Delete an invoice
  async deleteInvoice(invoiceId: string): Promise<void> {
    try {
      await httpClient.delete(API_ENDPOINTS.INVOICES.BY_ID(invoiceId));
    } catch (error) {
      console.error('Failed to delete invoice:', error);
      throw new Error('Failed to delete invoice');
    }
  }

  // Mark invoice as paid
  async markInvoiceAsPaid(invoiceId: string, paymentData: { paymentMethod: string; paidDate?: string }): Promise<Invoice> {
    try {
      const response = await httpClient.post<ApiResponse<Invoice>>(API_ENDPOINTS.INVOICES.PAYMENT(invoiceId), paymentData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to mark invoice as paid:', error);
      throw new Error('Failed to process payment');
    }
  }

  // Get invoice statistics
  async getInvoiceStats(): Promise<InvoiceStats> {
    try {
      const response = await httpClient.get<ApiResponse<InvoiceStats>>(API_ENDPOINTS.INVOICES.STATS);
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch invoice stats:', error);
      return {
        totalInvoices: 0,
        paidInvoices: 0,
        pendingInvoices: 0,
        overdueInvoices: 0,
        totalAmount: 0,
        paidAmount: 0,
        pendingAmount: 0
      };
    }
  }
}

export const invoiceService = new InvoiceService();
