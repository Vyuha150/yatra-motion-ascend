import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Download,
  Calendar,
  FileText,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonHeader from "./CommonHeader";
import ContactModal from "./ContactModal";
import ElevatorCabin3D from "./ElevatorCabin3D";
import ParticleField from "./ParticleField";
import ElevatorSkeleton from "./ElevatorSkeleton";

const HeroImmersive = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [show3D, setShow3D] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Background images for slideshow
  const backgroundImages = [
    '/lovable-uploads/1a497235-d2f7-4a8b-a0fe-6201d849a5b7.png',
    '/lovable-uploads/c2a7d7fc-4049-432e-a070-026b5ed33e88.png',
    '/lovable-uploads/06e9374a-64ce-4ce9-87a4-45a2f6b3d541.png',
    '/lovable-uploads/2d685460-01d3-494e-9b9a-b0af2cf8cc17.png'
  ];

  useEffect(() => {
    // Door opening sequence
    const doorTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 1000);

    // Hide 3D scene after 4 seconds for smoother sequence
    const hide3DTimer = setTimeout(() => {
      setShow3D(false);
      // Content reveal sequence - starts only after 3D disappears
      setTimeout(() => {
        setShowContent(true);
      }, 500); // Slightly longer delay for smooth transition
    }, 4000);

    // Scroll listener for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(hide3DTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Background slideshow effect - starts when content shows
  useEffect(() => {
    if (!showContent) return;
    
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [showContent, backgroundImages.length]);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,";
    link.download = "Yatra_Elevators_Brochure.pdf";
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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dynamic Background Slideshow - Only shows when content is visible */}
      {showContent && (
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${image})`,
                zIndex: index === currentBgIndex ? 1 : 0,
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: index === currentBgIndex ? 1 : 0,
                scale: index === currentBgIndex ? 1 : 1.1
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Fallback gradient background for 3D scene */}
      {!showContent && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      )}
      {/* Blue Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-blue-600 text-white text-center py-3 text-sm font-medium">
        MRL Lifts Available - Space Saving Technology
      </div>

      {/* Common Header */}
      <CommonHeader />

      {/* 3D Scene - Centered, hidden after 4 seconds */}
      {show3D && (
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.8,
            y: -100
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={<ElevatorSkeleton />}>
              <Environment preset="city" />
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={1} />

              {/* Particle Field */}
              <ParticleField />

              {/* Elevator Cabin */}
              <ElevatorCabin3D
                doorsOpen={doorsOpen}
                onDoorClick={() => setDoorsOpen(!doorsOpen)}
                scrollY={scrollY}
              />

              {/* Camera Controls - Enhanced for mobile */}
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={5}
                maxDistance={12}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 3}
                autoRotate
                autoRotateSpeed={0.3}
                enableDamping
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
          <Loader />
        </motion.div>
      )}

      {/* Enhanced Gradient Overlay for better text visibility */}
      {showContent && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40 z-5" />
      )}

      {/* Hero Content - Centered after 3D disappears */}
      <div
        className={`relative z-20 flex flex-col justify-center h-full px-4 pt-20 transition-all duration-500 items-center text-center`}
      >
        <div className={`mx-auto transition-all duration-500 max-w-4xl`}>
          {showContent && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins tracking-tight drop-shadow-2xl"
                variants={itemVariants}
              >
                <motion.span 
                  className="block my-2 text-shadow-xl" 
                  variants={itemVariants}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  YATRA
                </motion.span>
                <motion.span 
                  className="text-blue-400 text-shadow-xl" 
                  variants={itemVariants}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  ELEVATORS
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white mb-4 drop-shadow-2xl font-inter font-medium"
                variants={itemVariants}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                Experience the Future of Vertical Mobility
              </motion.p>

              <motion.p
                className="text-lg text-white mb-12 max-w-2xl mx-auto drop-shadow-2xl font-inter font-normal leading-relaxed"
                variants={itemVariants}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                Step into tomorrow with our intelligent elevator systems
                featuring IoT control, unmatched safety, and lifetime service
                commitment.
              </motion.p>

              {/* CTA Buttons with enhanced animations */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 font-poppins group hover:glow"
                    style={{
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                    }}
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    View Cabin
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
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 font-poppins backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                      }}
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
                      className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 font-montserrat backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
                      }}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Service
                    </Button>
                  </motion.div>
                </ContactModal>
              </motion.div>

              {/* Secondary CTA for feedback */}
              <motion.div className="mt-8" variants={itemVariants}>
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

        {/* Scroll Indicator */}
        {showContent && !show3D && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-8 w-8 text-white opacity-70" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Enhanced Ambient Light Effects */}
      {showContent && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500" />
        </>
      )}
    </section>
  );
};

export default HeroImmersive;
