
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Download, MessageCircle, Settings, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EscalatorIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
  >
    <path 
      d="M7 14L12 9L17 14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17 10L12 15L7 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

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

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Navigation Button */}
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:text-blue-300 hover:bg-white/10 p-3"
          >
            <EscalatorIcon />
          </Button>

          {/* Admin Panel Button */}
          <Link to="/admin">
            <Button
              variant="ghost" 
              size="lg"
              className="text-white hover:text-blue-300 hover:bg-white/10 p-3"
            >
              <Settings className="h-8 w-8" />
            </Button>
          </Link>

          {/* Sign In Button */}
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 text-base font-semibold"
          >
            <User className="mr-2 h-5 w-5" />
            Sign In
          </Button>

          {/* Sign Up Button */}
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Sign Up
          </Button>
        </div>
      </header>

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block mb-2">YATRA</span>
            <span className="text-blue-300">ELEVATORS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in delay-300">
            Reliable. Safe. Smart.
          </p>
          
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            Premium elevator solutions with lifetime service commitment. 
            Experience excellence in vertical transportation across South India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-blue-300 hover:text-white hover:bg-blue-600/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Call Back
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
