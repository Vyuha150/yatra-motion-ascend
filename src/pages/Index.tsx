
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProjectGallery from '../components/ProjectGallery';
import AboutPreview from '../components/AboutPreview';
import ContactCTA from '../components/ContactCTA';
import FloatingChat from '../components/FloatingChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <ProductShowcase />
      <AboutPreview />
      <ProjectGallery />
      <ContactCTA />
      <FloatingChat />
    </div>
  );
};

export default Index;
