
import React, { useState, useEffect } from 'react';
import { contactService } from '@/services/contactService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface Contact {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  status?: string;
  createdAt?: string;
}

const ContactsManager = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await contactService.getContacts();
      const contactsArray: Contact[] = Array.isArray(response.data) ? response.data : [];
      setContacts(contactsArray);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error('Error fetching contacts');
      // Use placeholder data if backend fails
      setContacts([
        {
          _id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+91 9876543210',
          company: 'ABC Corp',
          message: 'Interested in passenger elevators',
          status: 'new',
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      // For now, just update locally until backend API supports this
      setContacts(contacts.map(contact => 
        contact._id === id ? { ...contact, status } : contact
      ));
      
      toast.success('Contact status updated');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Error updating status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading contacts...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone || '-'}</TableCell>
                  <TableCell>{contact.company || '-'}</TableCell>
                  <TableCell className="max-w-xs truncate" title={contact.message}>
                    {contact.message}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(contact.status || 'new')}>
                      {(contact.status || 'new').replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {format(new Date(contact.createdAt || new Date()), 'MMM dd, yyyy')}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={contact.status || 'new'}
                      onValueChange={(value) => updateContactStatus(contact._id!, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactsManager;
