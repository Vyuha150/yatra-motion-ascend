import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { serviceTicketService, ServiceTicket as ApiServiceTicket } from '@/services/serviceTicketService';
import { useAuth } from '@/components/Auth/useAuth';
import { Search, Plus, Eye, Edit } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface ServiceTicketDisplay {
  id: string;
  ticketId: string;
  customerName: string;
  customerPhone: string;
  propertyAddress: string;
  issueDescription: string;
  priority: string;
  status: string;
  createdAt: string;
}

const ServiceTicketsManager = () => {
  const { isAdmin, isSuperAdmin } = useAuth();
  const [tickets, setTickets] = useState<ServiceTicketDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await serviceTicketService.getServiceTickets();
      if (response.success && response.data) {
        // Transform API data to display format
        const transformedTickets = response.data.tickets.map((ticket: ApiServiceTicket) => ({
          id: ticket._id || '',
          ticketId: ticket.ticketId,
          customerName: ticket.customer.name,
          customerPhone: ticket.customer.phone,
          propertyAddress: ticket.elevator.building,
          issueDescription: ticket.issue.description,
          priority: ticket.issue.priority,
          status: ticket.status,
          createdAt: ticket.timeline.createdAt
        }));
        setTickets(transformedTickets);
      } else {
        // Use mock data if API fails
        setTickets([
          {
            id: '1',
            ticketId: 'ST-2025-001',
            customerName: 'John Doe',
            customerPhone: '+91 9876543210',
            propertyAddress: 'ABC Tower, Floor 5',
            issueDescription: 'Elevator making unusual noise',
            priority: 'high',
            status: 'open',
            createdAt: new Date().toISOString()
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching service tickets:', error);
      toast.error('Error fetching service tickets');
      // Use mock data on error
      setTickets([
        {
          id: '1',
          ticketId: 'ST-2025-001',
          customerName: 'John Doe',
          customerPhone: '+91 9876543210',
          propertyAddress: 'ABC Tower, Floor 5',
          issueDescription: 'Elevator making unusual noise',
          priority: 'high',
          status: 'open',
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateTicketStatus = async (ticketId: string, newStatus: string) => {
    try {
      const response = await serviceTicketService.updateServiceTicketStatus(ticketId, newStatus);
      if (response.success) {
        setTickets(tickets.map(ticket => 
          ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
        ));
        toast.success('Ticket status updated successfully');
      } else {
        toast.error('Error updating ticket status');
      }
    } catch (error) {
      console.error('Error updating ticket status:', error);
      toast.error('Error updating ticket status');
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'open': return 'destructive';
      case 'in_progress': return 'secondary';
      case 'resolved': return 'default';
      case 'closed': return 'outline';
      default: return 'default';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.propertyAddress.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Service Tickets</h2>
        </div>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Service Tickets</h2>
        {(isAdmin || isSuperAdmin) && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Service Ticket
          </Button>
        )}
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
                  placeholder="Search tickets..."
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
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Tickets ({filteredTickets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket #</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.ticketId}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{ticket.customerName}</div>
                        {ticket.customerPhone && (
                          <div className="text-muted-foreground">{ticket.customerPhone}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {ticket.propertyAddress}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {ticket.issueDescription}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityBadgeVariant(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Select 
                        value={ticket.status} 
                        onValueChange={(value) => updateTicketStatus(ticket.id, value)}
                        disabled={!isAdmin && !isSuperAdmin}
                      >
                        <SelectTrigger className="w-32">
                          <Badge variant={getStatusBadgeVariant(ticket.status)}>
                            {ticket.status.replace('_', ' ')}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      {format(new Date(ticket.createdAt), 'MMM dd, yyyy')}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {(isAdmin || isSuperAdmin) && (
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceTicketsManager;