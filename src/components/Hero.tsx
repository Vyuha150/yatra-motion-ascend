
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Download, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommonHeader from './CommonHeader';
import ContactModal from './ContactModal';
import { useAuth } from './Auth/useAuth';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Handle auth safely - check if AuthProvider is available
  let user = null;
  let isAdmin = false;
  
  try {
    const authContext = useAuth();
    user = authContext.user;
    isAdmin = authContext.isAdmin;
  } catch (error) {
    // AuthProvider not available yet, use defaults
    console.log('AuthProvider not available, using defaults');
  }

  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [heroImages.length]);

  const handleDownloadBrochure = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // You would put actual PDF data here
    link.download = 'Yatra_Elevators_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCallRequest = () => {
    window.open('tel:+911234567890');
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 font-inter">
      {/* Common Header */}
      <CommonHeader />

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 0.3 : 0 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              YATRA
            </motion.span>
            <motion.span 
              className="text-steel-accent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ELEVATORS
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-4 drop-shadow-lg font-inter font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Reliable. Safe. Smart.
          </motion.p>
          
          <motion.p 
            className="text-lg text-white mb-12 max-w-2xl mx-auto drop-shadow-lg font-inter font-normal leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Premium elevator solutions with lifetime service commitment. 
            Experience excellence in vertical transportation across South India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/client-requirement">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl font-poppins"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </motion.div>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-black hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 font-poppins"
                onClick={handleDownloadBrochure}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </motion.div>
            
            <ContactModal buttonText="Book Service">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-steel-accent text-steel-accent hover:bg-steel-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 font-montserrat"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Service
                </Button>
              </motion.div>
            </ContactModal>
          </motion.div>
          
          {/* Secondary CTA for feedback */}
          <div className="mt-6 animate-fade-in delay-1000">
            <Link to="/feedback">
              <Button 
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 underline"
              >
                Share Your Experience & Feedback
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
