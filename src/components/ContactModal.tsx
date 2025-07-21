
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactService } from '@/services';
import { toast } from 'sonner';
import { MessageCircle } from 'lucide-react';

interface ContactModalProps {
  children?: React.ReactNode;
  buttonText?: string;
}

const ContactModal = ({ children, buttonText = 'Contact Us' }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: 'Website Contact Form',
        message: formData.message,
        type: 'inquiry' as const,
        source: 'website' as const
      };

      const response = await contactService.createContact(contactData);

      if (response.success) {
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setOpen(false);
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      toast.error('Error sending message: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Message *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
