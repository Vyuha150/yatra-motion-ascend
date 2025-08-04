import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ChevronDown, PhoneCall, Play, Zap, Shield, Users, Award } from 'lucide-react';

const HeroImmersive = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const backgroundImages = [
    "/lovable-uploads/39e306f2-9e81-4918-9dc9-d9fe97fe0d80.png",
    "/lovable-uploads/cbec866b-0d17-4145-8966-af7e73c66f28.png",
    "/lovable-uploads/add4b9a9-80ab-4015-b254-78ea9eab9b33.png",
    "/lovable-uploads/61867bfb-decc-45e6-903e-46ddec98756d.png",
    "/lovable-uploads/a2d245fa-76cb-48ab-9049-c0967f0e5959.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Zap, title: "Smart Technology", desc: "AI-powered control systems" },
    { icon: Shield, title: "Safety First", desc: "Advanced security protocols" },
    { icon: Users, title: "24/7 Support", desc: "Round-the-clock service" },
    { icon: Award, title: "Premium Quality", desc: "Industry-leading standards" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-cyan-500/10"
                animate={{
                  borderColor: ["rgba(6, 182, 212, 0.1)", "rgba(6, 182, 212, 0.3)", "rgba(6, 182, 212, 0.1)"]
                }}
                transition={{
                  duration: 3,
                  delay: (i % 12) * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === backgroundIndex ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />
      
      {/* Glowing Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-0 left-0 right-0 z-40 p-6"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">YATRA</div>
          <nav className="hidden md:flex space-x-8 text-white/80">
            {["About", "Products", "Services", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex items-center justify-center min-h-screen px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-white">Elevating India's</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Smart Buildings
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12"
          >
            Advanced elevators and escalators for residential towers, workspaces, malls, and hospitals – 
            powered by 24/7 service and future-ready tech.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold">
              <PhoneCall className="mr-2 h-5 w-5" />
              Request Quote
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg font-semibold">
              <Play className="mr-2 h-5 w-5" />
              See Our Range
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 bg-black/20 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-center space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-white/60 mb-8 text-lg">Trusted by India's Leading Builders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-12 w-24 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <span className="text-white/60 text-xs">Partner {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-cyan-400/80 cursor-pointer hover:text-cyan-400 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroImmersive;