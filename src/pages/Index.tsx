
import React, { useState, useEffect } from 'react';
import HeroImmersive from '../components/HeroImmersive';
import WhyYatraFeatures from '../components/WhyYatraFeatures';
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

  // Define all homepage sections as floors
  const floors = [
    { id: 1, name: 'Welcome', sectionId: 'hero' },
    { id: 2, name: 'Why Yatra', sectionId: 'why-yatra' },
    { id: 3, name: 'About Us', sectionId: 'about' },
    { id: 4, name: 'Products', sectionId: 'products' },
    { id: 5, name: 'Solutions', sectionId: 'products-modern' },
    { id: 6, name: 'Services', sectionId: 'solutions' },
    { id: 7, name: 'Projects', sectionId: 'projects' },
    { id: 8, name: 'Contact', sectionId: 'contact' }
  ];

  // Handle floor changes from scroll or navigation
  const handleFloorChange = (floor: number) => {
    if (floor !== currentFloor) {
      setIsTransitioning(true);
      setCurrentFloor(floor);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Scroll detection for floor changes
  useEffect(() => {
    const handleScroll = () => {
      const sections = floors.map(floor => ({
        ...floor,
        element: document.getElementById(floor.sectionId)
      }));

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      });

      if (currentSection && currentSection.id !== currentFloor) {
        handleFloorChange(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentFloor, floors]);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  // Get current floor name
  const currentFloorData = floors.find(f => f.id === currentFloor) || floors[0];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Enhanced Vertical Floor Indicator */}
      <FloorIndicator 
        currentFloor={currentFloor} 
        floorName={currentFloorData.name}
        isTransitioning={isTransitioning}
        floors={floors}
        onFloorChange={handleFloorChange}
      />

      {/* Hero Section */}
      <section id="hero">
        <HeroImmersive />
      </section>
      
      {/* Why Yatra Features */}
      <section id="why-yatra">
        <WhyYatraFeatures />
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
