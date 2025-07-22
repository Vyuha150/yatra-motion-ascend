import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface ClientRequirement {
  _id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  location: string;
  bestTimeToContact?: string;
  buildingType: string[];
  otherBuildingType?: string;
  numberOfFloors: string;
  footTraffic?: string;
  timeline: string;
  serviceType: string[];
  equipmentType: string[];
  specialRequirements: string[];
  budgetRange?: string;
  additionalNotes?: string;
  status: 'new' | 'in-progress' | 'contacted' | 'quoted' | 'converted' | 'closed';
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  notes: Array<{
    note: string;
    addedBy: string;
    addedAt: string;
  }>;
  followUpDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientRequirementData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  location: string;
  bestTimeToContact?: string;
  buildingType: string[];
  otherBuildingType?: string;
  numberOfFloors: string;
  footTraffic?: string;
  timeline: string;
  serviceType: string[];
  equipmentType: string[];
  specialRequirements: string[];
  budgetRange?: string;
  additionalNotes?: string;
}

export interface ClientRequirementStats {
  total: number;
  new: number;
  inProgress: number;
  contacted: number;
  quoted: number;
  converted: number;
  high: number;
  urgent: number;
  statusDistribution: Array<{ _id: string; count: number }>;
  priorityDistribution: Array<{ _id: string; count: number }>;
}

class ClientRequirementService {
  // Create new client requirement (public)
  async createClientRequirement(data: CreateClientRequirementData): Promise<ClientRequirement> {
    try {
      // For now, return mock data since backend might not be connected
      const mockRequirement: ClientRequirement = {
        _id: 'req_' + Date.now(),
        fullName: data.fullName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        location: data.location,
        bestTimeToContact: data.bestTimeToContact || 'anytime',
        buildingType: data.buildingType,
        otherBuildingType: data.otherBuildingType,
        numberOfFloors: data.numberOfFloors,
        footTraffic: data.footTraffic,
        timeline: data.timeline,
        serviceType: data.serviceType,
        equipmentType: data.equipmentType,
        specialRequirements: data.specialRequirements,
        budgetRange: data.budgetRange,
        additionalNotes: data.additionalNotes,
        status: 'new',
        priority: 'medium',
        notes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      return mockRequirement;
    } catch (error) {
      console.error('Failed to create client requirement:', error);
      throw error;
    }
  }

  // Get all client requirements (admin only)
  async getClientRequirements(params?: {
    page?: number;
    limit?: number;
    status?: string;
    priority?: string;
    assignedTo?: string;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{
    data: ClientRequirement[];
    pagination: { current: number; pages: number; total: number };
  }> {
    try {
      // Mock data for now
      const mockRequirements: ClientRequirement[] = [
        {
          _id: 'req_1',
          fullName: 'John Doe',
          companyName: 'ABC Corporation',
          email: 'john.doe@abc-corp.com',
          phone: '+91-9876543210',
          location: 'Mumbai, Maharashtra',
          bestTimeToContact: 'morning',
          buildingType: ['Commercial'],
          numberOfFloors: '15',
          footTraffic: '500 people/day',
          timeline: '3months',
          serviceType: ['New Installation'],
          equipmentType: ['Passenger Elevator'],
          specialRequirements: ['Energy Efficiency / Regenerative Drives'],
          budgetRange: '25L-50L',
          additionalNotes: 'Looking for energy efficient solution',
          status: 'new',
          priority: 'high',
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];

      return {
        data: mockRequirements,
        pagination: { current: 1, pages: 1, total: mockRequirements.length }
      };
    } catch (error) {
      console.error('Failed to fetch client requirements:', error);
      throw error;
    }
  }

  // Get single client requirement by ID
  async getClientRequirementById(id: string): Promise<ClientRequirement> {
    try {
      // Mock implementation
      const mockRequirement: ClientRequirement = {
        _id: id,
        fullName: 'John Doe',
        companyName: 'ABC Corporation',
        email: 'john.doe@abc-corp.com',
        phone: '+91-9876543210',
        location: 'Mumbai, Maharashtra',
        bestTimeToContact: 'morning',
        buildingType: ['Commercial'],
        numberOfFloors: '15',
        footTraffic: '500 people/day',
        timeline: '3months',
        serviceType: ['New Installation'],
        equipmentType: ['Passenger Elevator'],
        specialRequirements: ['Energy Efficiency / Regenerative Drives'],
        budgetRange: '25L-50L',
        additionalNotes: 'Looking for energy efficient solution',
        status: 'new',
        priority: 'high',
        notes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      return mockRequirement;
    } catch (error) {
      console.error('Failed to fetch client requirement:', error);
      throw error;
    }
  }

  // Update client requirement
  async updateClientRequirement(id: string, data: Partial<ClientRequirement>): Promise<ClientRequirement> {
    try {
      // Mock implementation - return updated requirement
      const mockRequirement: ClientRequirement = {
        _id: id,
        fullName: data.fullName || 'John Doe',
        companyName: data.companyName || 'ABC Corporation',
        email: data.email || 'john.doe@abc-corp.com',
        phone: data.phone || '+91-9876543210',
        location: data.location || 'Mumbai, Maharashtra',
        bestTimeToContact: data.bestTimeToContact || 'morning',
        buildingType: data.buildingType || ['Commercial'],
        numberOfFloors: data.numberOfFloors || '15',
        footTraffic: data.footTraffic || '500 people/day',
        timeline: data.timeline || '3months',
        serviceType: data.serviceType || ['New Installation'],
        equipmentType: data.equipmentType || ['Passenger Elevator'],
        specialRequirements: data.specialRequirements || ['Energy Efficiency / Regenerative Drives'],
        budgetRange: data.budgetRange || '25L-50L',
        additionalNotes: data.additionalNotes || 'Looking for energy efficient solution',
        status: data.status || 'new',
        priority: data.priority || 'high',
        notes: data.notes || [],
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      return mockRequirement;
    } catch (error) {
      console.error('Failed to update client requirement:', error);
      throw error;
    }
  }

  // Update status
  async updateRequirementStatus(id: string, status: string): Promise<ClientRequirement> {
    try {
      return this.updateClientRequirement(id, { 
        status: status as 'new' | 'in-progress' | 'contacted' | 'quoted' | 'converted' | 'closed' 
      });
    } catch (error) {
      console.error('Failed to update status:', error);
      throw error;
    }
  }

  // Assign requirement
  async assignRequirement(id: string, assignedTo: string): Promise<ClientRequirement> {
    try {
      return this.updateClientRequirement(id, { assignedTo });
    } catch (error) {
      console.error('Failed to assign requirement:', error);
      throw error;
    }
  }

  // Add note
  async addRequirementNote(id: string, note: string): Promise<ClientRequirement> {
    try {
      const requirement = await this.getClientRequirementById(id);
      requirement.notes.push({
        note,
        addedBy: 'current-user',
        addedAt: new Date().toISOString()
      });
      return requirement;
    } catch (error) {
      console.error('Failed to add note:', error);
      throw error;
    }
  }

  // Delete requirement
  async deleteRequirement(id: string): Promise<void> {
    try {
      // Mock implementation - just log for now
      console.log('Deleted requirement:', id);
    } catch (error) {
      console.error('Failed to delete requirement:', error);
      throw error;
    }
  }

  // Get statistics
  async getRequirementStats(): Promise<ClientRequirementStats> {
    try {
      // Mock statistics
      const mockStats: ClientRequirementStats = {
        total: 10,
        new: 5,
        inProgress: 2,
        contacted: 2,
        quoted: 1,
        converted: 0,
        high: 3,
        urgent: 1,
        statusDistribution: [
          { _id: 'new', count: 5 },
          { _id: 'in-progress', count: 2 },
          { _id: 'contacted', count: 2 },
          { _id: 'quoted', count: 1 }
        ],
        priorityDistribution: [
          { _id: 'low', count: 3 },
          { _id: 'medium', count: 3 },
          { _id: 'high', count: 3 },
          { _id: 'urgent', count: 1 }
        ]
      };
      
      return mockStats;
    } catch (error) {
      console.error('Failed to fetch statistics:', error);
      throw error;
    }
  }
}

export const clientRequirementService = new ClientRequirementService();
