import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/components/Auth/useAuth';
import { Search, Plus, Eye, Edit, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

interface AMCContract {
  id: string;
  contract_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  property_address: string;
  elevator_model: string;
  annual_amount: number;
  status: string;
  contract_start_date: string;
  contract_end_date: string;
  created_at: string;
}

const AMCManager = () => {
  const { isAdmin, isSuperAdmin } = useAuth();
  const [contracts, setContracts] = useState<AMCContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      // TODO: Implement AMC API service
      // For now, showing placeholder data
      setContracts([
        {
          id: '1',
          contract_number: 'AMC-2024-001',
          customer_name: 'ABC Corporation',
          customer_email: 'contact@abccorp.com',
          customer_phone: '+91-9876543210',
          property_address: '123 Business District, Mumbai',
          elevator_model: 'YE-Passenger 1000',
          annual_amount: 250000,
          status: 'active',
          contract_start_date: '2024-01-01',
          contract_end_date: '2024-12-31',
          created_at: '2024-01-01'
        },
        {
          id: '2',
          contract_number: 'AMC-2024-002',
          customer_name: 'XYZ Residency',
          customer_email: 'admin@xyzresidency.com',
          customer_phone: '+91-8765432109',
          property_address: '456 Residential Complex, Delhi',
          elevator_model: 'YE-Home 500',
          annual_amount: 150000,
          status: 'pending_renewal',
          contract_start_date: '2024-02-01',
          contract_end_date: '2025-01-31',
          created_at: '2024-02-01'
        }
      ]);
    } catch (error) {
      console.error('Error fetching AMC contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContractStatus = async (contractId: string, newStatus: string) => {
    try {
      // TODO: Implement AMC status update API
      console.log(`Updating contract ${contractId} to status: ${newStatus}`);
      
      setContracts(contracts.map(contract => 
        contract.id === contractId ? { ...contract, status: newStatus } : contract
      ));
    } catch (error) {
      console.error('Error updating contract status:', error);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'pending_renewal': return 'secondary';
      case 'expired': return 'destructive';
      case 'cancelled': return 'outline';
      default: return 'default';
    }
  };

  const isExpiringSoon = (endDate: string) => {
    const today = new Date();
    const contractEnd = new Date(endDate);
    const diffTime = contractEnd.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
  };

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.contract_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.property_address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contract.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">AMC Contracts</h2>
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
        <h2 className="text-2xl font-bold">AMC Contracts</h2>
        {(isAdmin || isSuperAdmin) && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New AMC Contract
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
                  placeholder="Search contracts..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending_renewal">Pending Renewal</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AMC Contracts ({filteredContracts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contract #</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Elevator Model</TableHead>
                  <TableHead>Annual Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContracts.map((contract) => (
                  <TableRow key={contract.id}>
                    <TableCell className="font-medium">{contract.contract_number}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{contract.customer_name}</div>
                        {contract.customer_email && (
                          <div className="text-muted-foreground">{contract.customer_email}</div>
                        )}
                        {contract.customer_phone && (
                          <div className="text-muted-foreground">{contract.customer_phone}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate" title={contract.property_address}>
                      {contract.property_address}
                    </TableCell>
                    <TableCell>{contract.elevator_model || '-'}</TableCell>
                    <TableCell className="font-medium">
                      ₹{(contract.annual_amount / 100000).toFixed(1)}L
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Select 
                          value={contract.status} 
                          onValueChange={(value) => updateContractStatus(contract.id, value)}
                          disabled={!isAdmin && !isSuperAdmin}
                        >
                          <SelectTrigger className="w-32">
                            <Badge variant={getStatusBadgeVariant(contract.status)}>
                              {contract.status.replace('_', ' ')}
                            </Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="pending_renewal">Pending Renewal</SelectItem>
                            <SelectItem value="expired">Expired</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        {isExpiringSoon(contract.contract_end_date) && (
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {format(new Date(contract.contract_end_date), 'MMM dd, yyyy')}
                        {isExpiringSoon(contract.contract_end_date) && (
                          <div className="text-orange-600 text-xs">Expiring soon</div>
                        )}
                      </div>
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

export default AMCManager;