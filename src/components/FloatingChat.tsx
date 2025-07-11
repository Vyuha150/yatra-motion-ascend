
import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <Card className="mb-4 w-80 shadow-2xl border-0 animate-scale-in">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold">Need Help?</h3>
                  <p className="text-blue-100 text-sm">We're here to assist you</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-white">
              <p className="text-slate-700 mb-4 text-sm">
                Get instant support for your elevator needs. Our experts are ready to help!
              </p>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white justify-start cursor-pointer"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open('https://wa.me/919876543210?text=Hello, I need help with elevator services.', '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start border-blue-200 text-blue-600 hover:bg-blue-50 cursor-pointer"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open('tel:+919876543210', '_self');
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +91 98765 43210
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open('mailto:info@yatraelevators.com?subject=Elevator Service Inquiry', '_self');
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700 font-medium">⚡ Quick Response</p>
                <p className="text-xs text-blue-600">Average response time: 2 minutes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={toggleChat}
        className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pulse"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Pulse animation indicator */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
      )}
    </div>
  );
};

export default FloatingChat;
