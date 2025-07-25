import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import CommonHeader from './CommonHeader';

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const floatingText = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 cursor-none">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm"
        >
          <AnimatedText 
            text="ᴇʟᴇᴠᴀᴛᴇ ʏᴏᴜʀ ᴊᴏᴜʀɴᴇʏ" 
            className="text-white/80 text-sm tracking-[0.2em] font-light"
            delay={1}
          />
        </motion.div>
      </div>

      <div className="absolute top-10 right-10 z-20">
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="px-6 py-3 rounded-full border border-blue-400/30 backdrop-blur-sm bg-blue-500/10"
        >
          <AnimatedText 
            text="ᴇxᴘᴇʀɪᴇɴᴄᴇ ᴛʜᴇ ғᴜᴛᴜʀᴇ" 
            className="text-blue-300 text-sm tracking-[0.2em] font-light"
            delay={1.2}
          />
        </motion.div>
      </div>

      {/* Common Header */}
      <CommonHeader />

      {/* Background Slider with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentSlide ? 0.4 : 0,
              scale: index === currentSlide ? 1 : 1.1 
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </motion.div>
        ))}
        
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-purple-900/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title with Stylized Font */}
          <motion.div variants={floatingText} className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6">
              <span className="block mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                𝒴𝒜𝒯𝑅𝒜
              </span>
              <span className="text-blue-300 tracking-wider text-5xl md:text-6xl lg:text-7xl">
                ELEVATORS
              </span>
            </h1>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div variants={floatingText} className="mb-6">
            <AnimatedText 
              text="ʀᴇʟɪᴀʙʟᴇ • sᴀғᴇ • sᴍᴀʀᴛ"
              className="text-2xl md:text-3xl text-blue-200 font-light tracking-[0.3em] mb-4"
              delay={0.5}
            />
          </motion.div>

          {/* Description */}
          <motion.div variants={floatingText} className="mb-12">
            <AnimatedText 
              text="Premium vertical mobility solutions with lifetime service commitment. Experience excellence in engineering across India's most prestigious developments."
              className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
              delay={0.8}
            />
          </motion.div>

          {/* CTA Buttons with Enhanced Design */}
          <motion.div 
            variants={floatingText}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/client-requirement">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-400/30"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Premium Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/products">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-white/50 text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                Explore Solutions
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div 
            variants={floatingText}
            className="mt-8"
          >
            <Link to="/feedback">
              <Button 
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 underline underline-offset-4 text-sm tracking-wide"
              >
                Share Your Experience & Feedback
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
};

export default EnhancedHero;