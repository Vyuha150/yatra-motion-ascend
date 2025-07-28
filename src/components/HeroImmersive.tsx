import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Download, Calendar, FileText, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommonHeader from './CommonHeader';
import ContactModal from './ContactModal';
import ElevatorCabin3D from './ElevatorCabin3D';
import ParticleField from './ParticleField';
import ElevatorViewer3D from './ElevatorViewer3D';
import TypewriterText from './TypewriterText';

const HeroImmersive = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showFullViewer, setShowFullViewer] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yPos = useTransform(scrollY, [0, 1000], [0, -100]);
  const yPosParticles = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    // Door opening sequence
    const doorTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 1000);

    // Content reveal sequence
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Voice-over effect (optional)
    if (audioEnabled) {
      const utterance = new SpeechSynthesisUtterance(
        "Welcome to Yatra Elevators – Redefining Vertical Mobility."
      );
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(contentTimer);
      speechSynthesis.cancel();
    };
  }, [audioEnabled]);

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Yatra_Elevators_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Split text animation variants
  const splitTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const splitTextVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleViewCabin = () => {
    setShowFullViewer(true);
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    if (!audioEnabled) {
      speechSynthesis.cancel();
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Blue Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-blue-600 text-white text-center py-3 text-sm font-medium">
        MRL Lifts Available - Space Saving Technology
      </div>
      
      {/* Common Header */}
      <CommonHeader />

      {/* 3D Scene with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yPos }}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={doorsOpen ? 0.4 : 0.2} />
            <directionalLight position={[5, 5, 5]} intensity={doorsOpen ? 1.2 : 0.8} />
            <pointLight position={[-5, 5, 5]} intensity={0.6} color="#3b82f6" />
            
            {/* Particle Field */}
            <ParticleField />
            
            {/* Elevator Cabin */}
            <ElevatorCabin3D 
              doorsOpen={doorsOpen} 
              enableInteraction={false}
              isFullscreen={false}
            />
            
            {/* Camera Controls */}
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-5" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {showContent && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Split Animation Title */}
              <div className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins tracking-tight">
                <motion.div 
                  className="block mb-2"
                  variants={splitTextVariants}
                  initial="hidden"
                  animate={showContent ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  YATRA
                </motion.div>
                <motion.div 
                  className="text-blue-400"
                  variants={splitTextVariantsRight}
                  initial="hidden"
                  animate={showContent ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  ELEVATORS
                </motion.div>
              </div>
              
              {/* Typewriter Effect Subtitle */}
              <motion.div 
                className="text-xl md:text-2xl text-white mb-4 drop-shadow-lg font-inter font-medium"
                variants={itemVariants}
              >
                {showContent && (
                  <TypewriterText
                    text="Experience the Future of Vertical Mobility"
                    speed={80}
                    delay={1000}
                    onComplete={() => setShowSubtitle(true)}
                  />
                )}
              </motion.div>
              
              <motion.p 
                className="text-lg text-white mb-12 max-w-2xl mx-auto drop-shadow-lg font-inter font-normal leading-relaxed"
                variants={itemVariants}
              >
                Step into tomorrow with our intelligent elevator systems featuring IoT control, 
                unmatched safety, and lifetime service commitment.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={handleViewCabin}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 font-poppins group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="relative z-10 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      View Cabin
                    </motion.div>
                  </Button>
                </motion.div>
                
                <Link to="/client-requirement">
                  <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 font-poppins"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Get Free Quote
                    </Button>
                  </motion.div>
                </Link>
                
                <ContactModal buttonText="Book Service">
                  <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 font-poppins"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Service
                    </Button>
                  </motion.div>
                </ContactModal>
              </motion.div>
              
              {/* Audio Control & Secondary CTA */}
              <motion.div 
                className="mt-8 flex flex-col items-center gap-4"
                variants={itemVariants}
              >
                {/* Audio Toggle */}
                <Button
                  onClick={toggleAudio}
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white hover:bg-white/10"
                >
                  {audioEnabled ? (
                    <>
                      <Volume2 className="mr-2 h-4 w-4" />
                      Voice Guide On
                    </>
                  ) : (
                    <>
                      <VolumeX className="mr-2 h-4 w-4" />
                      Enable Voice Guide
                    </>
                  )}
                </Button>

                {/* Feedback Link */}
                <Link to="/feedback">
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 underline text-base"
                  >
                    Share Your Experience & Feedback
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Enhanced Scroll Indicator */}
        {showSubtitle && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-white/60 text-sm font-medium">Scroll to Explore</div>
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.8)",
                    "0 0 10px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full p-2 bg-white/10 backdrop-blur-sm"
              >
                <ChevronDown className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

      {/* Fullscreen 3D Viewer */}
      <ElevatorViewer3D 
        isOpen={showFullViewer}
        onClose={() => setShowFullViewer(false)}
      />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroImmersive;