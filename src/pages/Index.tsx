
import React, { useState } from 'react';
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

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview */}
      <AboutPreview />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Products Modern - Keep this section */}
      <ProductsModern />
      
      {/* Solutions Showcase */}
      <SolutionsShowcase />
      
      {/* Project Gallery */}
      <ProjectGallery />
      
      {/* Contact CTA */}
      <ContactCTA />
      
      {/* Floating Elements */}
      <FloatingChat />
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default Index;
