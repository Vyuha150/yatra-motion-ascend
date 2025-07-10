import React from 'react';
import { Phone, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

interface ContactCTAProps {
  onDownloadBrochure: () => void;
  onEmergencyCall: () => void;
}

const ContactCTA = ({ onDownloadBrochure, onEmergencyCall }: ContactCTAProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <ContactModal buttonText="Get a Quote">
        <Button size="lg" className="elevator-button px-8 py-4 text-lg font-semibold rounded-full">
          <Phone className="mr-2 h-5 w-5" />
          Get a Quote
        </Button>
      </ContactModal>
      
      <Button 
        variant="outline" 
        size="lg"
        className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
        onClick={onDownloadBrochure}
      >
        <Download className="mr-2 h-5 w-5" />
        Download Brochure
      </Button>
      
      <Button 
        variant="ghost" 
        size="lg"
        className="text-accent hover:text-accent-foreground hover:bg-accent/20 px-8 py-4 text-lg font-semibold rounded-full"
        onClick={onEmergencyCall}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Request Call Back
      </Button>
    </div>
  );
};

export default ContactCTA;