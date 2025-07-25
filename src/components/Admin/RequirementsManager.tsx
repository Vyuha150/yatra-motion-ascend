import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/components/Auth/useAuth';
import { Search, Plus, Eye, Edit, MessageSquare, Loader2, FileText, Phone, Mail, Building, Calendar, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { clientRequirementService } from '@/services/clientRequirementService';
import { useToast } from '@/hooks/use-toast';

interface ClientRequirement {
  _id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  location: string;
  buildingType: string[];
  numberOfFloors: string;
  timeline: string;
  serviceType: string[];
  budgetRange?: string;
  status: 'new' | 'in-progress' | 'contacted' | 'quoted' | 'converted' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

const RequirementsManager = () => {
  const { isAdmin, isSuperAdmin } = useAuth();
  const { toast } = useToast();
  const [requirements, setRequirements] = useState<ClientRequirement[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [error, setError] = useState<string | null>(null);

  const fetchRequirements = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const filters = {
        search: searchTerm || undefined,
        status: statusFilter === 'all' ? undefined : statusFilter,
        priority: priorityFilter === 'all' ? undefined : priorityFilter,
        page: 1,
        limit: 50
      };

      const response = await clientRequirementService.getClientRequirements(filters);
      
      if (response.data) {
        setRequirements(Array.isArray(response.data) ? response.data : []);
      } else {
        setRequirements([]);
      }
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
      setError('Failed to load requirements');
      setRequirements([]);
      toast({
        title: "Error",
        description: "Failed to load client requirements",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [searchTerm, statusFilter, priorityFilter, toast]);

  useEffect(() => {
    fetchRequirements();
  }, [fetchRequirements]);

  const updateRequirementStatus = async (requirementId: string, newStatus: string) => {
    try {
      await clientRequirementService.updateRequirementStatus(requirementId, newStatus);
      setRequirements(requirements.map(req => 
        req._id === requirementId ? { 
          ...req, 
          status: newStatus as 'new' | 'in-progress' | 'contacted' | 'quoted' | 'converted' | 'closed' 
        } : req
      ));
      toast({
        title: "Status Updated",
        description: "Requirement status has been updated successfully",
      });
    } catch (error) {
      console.error('Error updating requirement status:', error);
      toast({
        title: "Error",
        description: "Failed to update requirement status",
        variant: "destructive",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'in-progress': return 'secondary';
      case 'contacted': return 'outline';
      case 'quoted': return 'secondary';
      case 'converted': return 'default';
      case 'closed': return 'destructive';
      default: return 'default';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'low': return 'outline';
      case 'medium': return 'secondary';
      case 'high': return 'default';
      case 'urgent': return 'destructive';
      default: return 'default';
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      return format(date, 'MMM dd, yyyy');
    } catch {
      return 'Invalid date';
    }
  };

  const filteredRequirements = requirements.filter(req => {
    const matchesSearch = req.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (req.companyName && req.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         req.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || req.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Client Requirements</h2>
        </div>
        <Card>
          <CardContent className="flex justify-center items-center p-12">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <div className="absolute inset-0 h-8 w-8 border-2 border-blue-200 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-medium text-gray-800">Loading Requirements...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Client Requirements</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-3 py-1">
            <FileText className="h-4 w-4 mr-1" />
            {filteredRequirements.length} Requirements
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requirements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements ({filteredRequirements.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Project Details</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequirements.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12">
                      <div className="flex flex-col items-center space-y-4">
                        <AlertCircle className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">No Requirements Found</h3>
                          <p className="text-muted-foreground">
                            {error ? error : (searchTerm || statusFilter !== 'all' || priorityFilter !== 'all') 
                              ? "No requirements match your current filters." 
                              : "No client requirements have been submitted yet."
                            }
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRequirements.map((requirement) => (
                  <TableRow key={requirement._id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{requirement.fullName}</div>
                        {requirement.companyName && (
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Building className="h-3 w-3 mr-1" />
                            {requirement.companyName}
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {requirement.email}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {requirement.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{requirement.buildingType.join(', ')}</div>
                        <div className="text-sm text-muted-foreground">{requirement.numberOfFloors} floors</div>
                        <div className="text-sm text-muted-foreground">{requirement.location}</div>
                        <div className="text-xs text-muted-foreground">{requirement.serviceType.join(', ')}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        {requirement.timeline}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {requirement.budgetRange ? (
                        <Badge variant="secondary">{requirement.budgetRange}</Badge>
                      ) : (
                        <span className="text-muted-foreground">Not specified</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityBadgeVariant(requirement.priority)}>
                        {requirement.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Select 
                        value={requirement.status} 
                        onValueChange={(value) => updateRequirementStatus(requirement._id, value)}
                        disabled={!isAdmin && !isSuperAdmin}
                      >
                        <SelectTrigger className="w-32">
                          <Badge variant={getStatusBadgeVariant(requirement.status)}>
                            {requirement.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="quoted">Quoted</SelectItem>
                          <SelectItem value="converted">Converted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {formatDate(requirement.createdAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        {(isAdmin || isSuperAdmin) && (
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequirementsManager;
