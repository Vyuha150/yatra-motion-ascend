
import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProjectGallery from '../components/ProjectGallery';
import AboutPreview from '../components/AboutPreview';
import ContactCTA from '../components/ContactCTA';
import FloatingChat from '../components/FloatingChat';
import FloatingNavButton from '../components/FloatingNavButton';
import VerticalNavbar from '../components/VerticalNavbar';
import PreLoader from '../components/PreLoader';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleLoadComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <PreLoader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Main Content */}
      <Hero />
      <AboutPreview />
      <ProductShowcase />
      <ProjectGallery />
      <ContactCTA />
      
      {/* Floating Elements */}
      <FloatingChat />
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default Index;
