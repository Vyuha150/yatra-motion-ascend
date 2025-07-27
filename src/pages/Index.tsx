
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroModern from '../components/HeroModern';
import ProductsModern from '../components/ProductsModern';
import AboutModern from '../components/AboutModern';
import ProjectGallery from '../components/ProjectGallery';
import ContactCTA from '../components/ContactCTA';
import FloatingChat from '../components/FloatingChat';
import FloatingNavButton from '../components/FloatingNavButton';
import VerticalNavbar from '../components/VerticalNavbar';
import PreLoader from '../components/PreLoader';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Modern sections configuration
  const sections = useMemo(() => [
    { id: "hero", name: "Hero", component: <HeroModern /> },
    { id: "about", name: "About Us", component: <AboutModern /> },
    { id: "products", name: "Our Products", component: <ProductsModern /> },
    { id: "projects", name: "Our Projects", component: <ProjectGallery /> },
    { id: "contact", name: "Contact", component: <ContactCTA /> }
  ], []);

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleLoadComplete = () => {
    setShowLoader(false);
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          setCurrentFloor(i + 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning, sections]);

  if (showLoader) {
    return <PreLoader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Main Content - Modern scrolling sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          {section.component}
        </motion.section>
      ))}
      
      {/* Floating Elements */}
      <FloatingChat />
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default Index;
