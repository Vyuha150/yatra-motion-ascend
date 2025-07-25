
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProjectGallery from '../components/ProjectGallery';
import AboutPreview from '../components/AboutPreview';
import ContactCTA from '../components/ContactCTA';
import FloatingChat from '../components/FloatingChat';
import FloatingNavButton from '../components/FloatingNavButton';
import VerticalNavbar from '../components/VerticalNavbar';
import AnimatedHighlights from '../components/AnimatedHighlights';
import PreLoader from '../components/PreLoader';
import ElevatorControlPanel from '../components/ElevatorControlPanel';
import FloorIndicator from '../components/FloorIndicator';
import ElevatorFloor from '../components/ElevatorFloor';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Floor configuration
  const floors = useMemo(() => [
    { number: 1, name: "Welcome", component: <Hero /> },
    { number: 2, name: "About Us", component: <AboutPreview /> },
    { number: 3, name: "Our Products", component: <ProductShowcase /> },
    { number: 4, name: "Our Projects", component: <ProjectGallery /> },
    { number: 5, name: "Contact", component: <ContactCTA /> }
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

  const handleFloorChange = (direction: 'up' | 'down') => {
    const newFloor = direction === 'up' ? currentFloor + 1 : currentFloor - 1;
    
    if (newFloor >= 1 && newFloor <= floors.length) {
      setIsTransitioning(true);
      
      // Smooth scroll to the target floor
      const targetElement = document.getElementById(`floor-${newFloor}`);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      setTimeout(() => {
        setCurrentFloor(newFloor);
        setIsTransitioning(false);
      }, 800);
    }
  };

  // Update current floor based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = floors.length - 1; i >= 0; i--) {
        const floorElement = document.getElementById(`floor-${floors[i].number}`);
        if (floorElement && floorElement.offsetTop <= scrollPosition) {
          setCurrentFloor(floors[i].number);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning, floors]);

  if (showLoader) {
    return <PreLoader onLoadComplete={handleLoadComplete} />;
  }

  const currentFloorData = floors.find(floor => floor.number === currentFloor);

  return (
    <div className="min-h-screen bg-background relative steel-texture">
      {/* Elevator Cabin Lighting Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>
      
      {/* Floor Indicator */}
      <FloorIndicator 
        currentFloor={currentFloor}
        floorName={currentFloorData?.name || 'Unknown'}
        isTransitioning={isTransitioning}
      />
      
      {/* Animated Highlights Bar */}
      <AnimatedHighlights />
      
      {/* Main Content - Each section as an elevator floor */}
      {floors.map((floor, index) => (
        <ElevatorFloor 
          key={floor.number}
          floorNumber={floor.number}
          isActive={currentFloor === floor.number && isTransitioning}
        >
          {floor.component}
        </ElevatorFloor>
      ))}
      
      {/* Elevator Control Panel */}
      <ElevatorControlPanel
        currentFloor={currentFloor}
        totalFloors={floors.length}
        onFloorChange={handleFloorChange}
      />
      
      {/* Floating Elements */}
      <FloatingChat />
      <FloatingNavButton onToggle={handleNavToggle} isNavOpen={isNavOpen} />
      <VerticalNavbar isOpen={isNavOpen} onClose={handleNavClose} />
    </div>
  );
};

export default Index;
