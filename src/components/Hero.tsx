
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommonHeader from './CommonHeader';
import ContactModal from './ContactModal';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  }, []);

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
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Common Header */}
      <CommonHeader />

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block mb-2">YATRA</span>
            <span className="text-steel-accent">ELEVATORS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-4 animate-fade-in delay-300 drop-shadow-lg">
            Reliable. Safe. Smart.
          </p>
          
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto animate-fade-in delay-500 drop-shadow-lg">
            Premium elevator solutions with lifetime service commitment. 
            Experience excellence in vertical transportation across South India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <ContactModal buttonText="Get a Quote">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>
            </ContactModal>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleDownloadBrochure}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-steel-accent hover:text-white hover:bg-steel-medium/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={handleCallRequest}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Yatra Elevator Service
            </Button>
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
