
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <PageLayout>
      <AnimatedHighlights />
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 font-source"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-black mb-6 font-montserrat tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto font-source font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in touch with our team of experts. We're here to help you with 
            all your elevator needs and provide the best solutions for your project.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <motion.section 
        className="py-20 font-source"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-montserrat tracking-tight">Head Office & Branch Locations</h2>
              <p className="text-gray-600 mb-6 font-source">
                Kindly Find out with Sai Sir and fill up these details
              </p>
              
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
                    <h3 className="font-bold text-lg mb-1 leading-tight font-montserrat">Phone</h3>
                    <p className="text-gray-700 leading-relaxed font-source">+91 9876543210</p>
                    <p className="text-gray-700 leading-relaxed font-source">+91 8765432109</p>
                  </div>
                </div>

                <div className="flex items-end space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight font-montserrat">Email</h3>
                    <p className="text-gray-700 leading-relaxed font-source">info@yatraelevators.com</p>
                    <p className="text-gray-700 leading-relaxed font-source">support@yatraelevators.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 " >
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight font-montserrat">Head Office Address</h3>
                    <p className="text-gray-700 leading-relaxed font-source">
                      (To be filled by Sai Sir)<br />
                      Bangalore, Karnataka<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight font-montserrat">Business Hours</h3>
                    <p className="text-gray-700 leading-relaxed font-source">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 leading-relaxed font-source">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700 leading-relaxed font-source">Sunday: Closed</p>
                    <p className="text-sm text-blue-600 mt-2 leading-relaxed font-source">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              {/* Emergency Help Line */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-lg text-red-800 mb-2 font-montserrat">Emergency Help Line</h3>
                <p className="text-red-700 font-source">For any kind of emergencies, please call on <strong>__________________</strong></p>
              </div>
            </motion.div>

            {/* Contact Form (Sales & Support) */}
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
              
              <h2 className="text-3xl font-bold mb-6 text-black font-montserrat tracking-tight">Contact Form (Sales & Support)</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="_______________________________"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="_______________________________"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="______________________________"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location:</label>
                  <input
                    type="text"
                    name="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="______________________________"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Suitable Time to Call:</label>
                  <input
                    type="text"
                    name="callTime"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="____________________"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
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
                    <option value="sales">Sales Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
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
      </motion.section>

      {/* Additional Contact Forms */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dealer/Distributor Enquiry */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 font-montserrat text-black tracking-tight">Dealer Distributor Enquiry</h2>
              <p className="text-gray-600 mb-6 font-source">
                Yatra Elevators & Escalators is actively looking for positive and growth oriented dealers and distributors to join our huge network. If you are powered by excellence and are looking to join a trusted brand in vertical transportation, we would surely invite you to partner with us.
              </p>
              <p className="text-gray-600 mb-8 font-source">
                As a Yatra dealer or distributor, you will gain entry to high quality products, sophisticated support, competitive pricing, and marketing resources to help increase your business.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail:</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact:</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Suitable Time to Call:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Partnership Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 font-montserrat text-black tracking-tight">Become a Partner</h2>
              <p className="text-gray-600 mb-6 font-source">
                At Yatra Elevators & Escalators, we trust in developing together through strong, systematic partnerships. If you are into business or a contractor, architect, or industry professional looking to associate with a trustworthy and innovative elevator and escalator company, we welcome you to join hands with us.
              </p>
              <p className="text-gray-600 mb-8 font-source">
                As a Yatra partner, you'll benefit from our technical expertise, quality products, timely support, and a shared promise to customer satisfaction.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profession:</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Profession</option>
                    <option value="architect">Architect</option>
                    <option value="contractor">Contractor</option>
                    <option value="builder">Builder</option>
                    <option value="developer">Developer</option>
                    <option value="consultant">Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail:</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact:</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Suitable Time to Call:</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Submit Partnership Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-montserrat tracking-tight">Find Us</h2>
          <p className="text-center text-gray-600 mb-8 font-source">Tell the technical team to tag the location and integrate the map</p>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map will be integrated here</p>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
};

export default ContactUs;
