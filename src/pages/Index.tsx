
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ProductShowcase from '../components/ProductShowcase';
import ProductsModern from '../components/ProductsModern';
import SolutionsShowcase from '../components/SolutionsShowcase';
import ProjectGallery from '../components/ProjectGallery';
import ContactCTA from '../components/ContactCTA';
import FloatingChat from '../components/FloatingChat';
import FloatingNavButton from '../components/FloatingNavButton';
import VerticalNavbar from '../components/VerticalNavbar';
import FloorIndicator from '../components/FloorIndicator';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Floor configuration
  const floors = [
    { id: 'hero', name: 'Welcome', floor: 1 },
    { id: 'about', name: 'About Us', floor: 2 },
    { id: 'products', name: 'Products', floor: 3 },
    { id: 'products-modern', name: 'Solutions', floor: 4 },
    { id: 'solutions', name: 'Services', floor: 5 },
    { id: 'projects', name: 'Projects', floor: 6 },
    { id: 'contact', name: 'Contact', floor: 7 }
  ];

  // Scroll detection for floor changes
  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section, div[id]');
      
      // Find current section
      for (let i = floors.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(floors[i].id);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          if (currentFloor !== floors[i].floor) {
            setIsTransitioning(true);
            setCurrentFloor(floors[i].floor);
            
            // Reset transition state after animation
            setTimeout(() => {
              setIsTransitioning(false);
            }, 500);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentFloor, isTransitioning, floors]);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  // Get current floor name
  const currentFloorData = floors.find(f => f.floor === currentFloor) || floors[0];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floor Indicators - Top Middle */}
      <FloorIndicator 
        currentFloor={currentFloor} 
        floorName={currentFloorData.name}
        isTransitioning={isTransitioning}
      />
      
      {/* Right Side Floor Indicator - Simple */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 p-4 shadow-2xl">
          <div className="text-white font-bold text-xs mb-3 text-center">FLOOR</div>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-black rounded border-2 border-slate-500 flex items-center justify-center">
              <div className="text-green-400 font-mono text-xl font-bold drop-shadow-[0_0_8px_rgb(34,197,94)]">
                {currentFloor}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Preview */}
      <section id="about">
        <AboutPreview />
      </section>
      
      {/* Product Showcase */}
      <section id="products">
        <ProductShowcase />
      </section>
      
      {/* Products Modern - Keep this section */}
      <section id="products-modern">
        <ProductsModern />
      </section>
      
      {/* Solutions Showcase */}
      <section id="solutions">
        <SolutionsShowcase />
      </section>
      
      {/* Project Gallery */}
      <section id="projects">
        <ProjectGallery />
      </section>
      
      {/* Contact CTA */}
      <section id="contact">
        <ContactCTA />
      </section>
      
      {/* Floating Elements */}
      <FloatingChat />
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default Index;
