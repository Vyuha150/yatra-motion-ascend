
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .animation-delay-75 {
          animation-delay: 0.075s;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
      <PageLayout>
      <AnimatedHighlights />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Get in touch with our team of experts. We're here to help you with 
            all your elevator needs and provide the best solutions for your project.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              {/* Office Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" 
                  alt="Our office" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-end space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight">Phone</h3>
                    <p className="text-gray-700 leading-relaxed">+91 9876543210</p>
                    <p className="text-gray-700 leading-relaxed">+91 8765432109</p>
                  </div>
                </div>

                <div className="flex items-end space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight">Email</h3>
                    <p className="text-gray-700 leading-relaxed">info@yatraelevators.com</p>
                    <p className="text-gray-700 leading-relaxed">support@yatraelevators.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 " >
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      123 Business District,<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight">Business Hours</h3>
                    <p className="text-gray-700 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 leading-relaxed">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700 leading-relaxed">Sunday: Closed</p>
                    <p className="text-sm text-blue-600 mt-2 leading-relaxed">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="relative mb-6">
                      {/* Outer spinning ring */}
                      <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
                      {/* Inner spinning dot */}
                      <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                      {/* Center dot */}
                      <div className="absolute top-6 left-6 w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">Sending your message...</h3>
                      <p className="text-gray-600">Please wait while we process your request</p>
                      <div className="flex justify-center space-x-1 mt-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="installation">Installation Service</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className={`w-full py-4 transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="relative">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <div className="absolute top-0 left-0 w-6 h-6 border-2 border-transparent border-t-blue-200 rounded-full animate-spin animation-delay-75"></div>
                      </div>
                      <span className="text-lg">Sending Message...</span>
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-lg">Message Sent Successfully!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span className="text-lg">Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map will be integrated here</p>
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
};

export default ContactUs;
