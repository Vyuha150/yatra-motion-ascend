import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Zap, Activity, Smartphone, Leaf, AlertTriangle, Settings, Clock, MousePointer, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import InnovationCard from '@/components/InnovationCard';

const InnovationTech = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const innovationsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('.innovation-card'));
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (innovationsRef.current) {
      observer.observe(innovationsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const innovations = [
    {
      icon: Zap,
      title: "Smart Elevators (AI + IoT)",
      description: "At Yatra, we are reshaping the future of vertical mobility through smart elevators propelled by Artificial Intelligent and IoT. Yatra elevators offer more advanced and elevating technological functionality where the Intelligent System goes beyond traditional functionality by learning passenger adaptability, optimizing data through real-time data Analysis, predicting & performing Systematic approach enabling voice prediction System.",
      features: ['AI-driven algorithms', 'IoT-enabled connectivity', 'Real-time data analysis', 'Voice prediction system'],
      benefits: 'Every consultation is featured for comfort, hygiene, and user-friendly experience with AI–driven algorithms and IoT–enabled connectivity.',
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      icon: Leaf,
      title: "Energy Efficiency & Regenerative Drives",
      description: "At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. This not only talks about electricity and power but it is standard for building infrastructure. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills and energy, and meticulously prolonged operation.",
      features: ['LED power integration', 'Heavy-duty commercial engineering', 'Maximum capability motors', 'Protected cabins'],
      benefits: 'Created with protected cabins, maximum capability motors, moreover tailor made interiors, our service elevators enable magnanimous vertical transport of goods without compromising safety or adaptability.',
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      icon: Activity,
      title: "Noise & Vibration Control",
      description: "At Yatra Elevators, Yatra's Passenger Elevators are comprehensively designed to serve serene, calm and most significant vertical mobility in diverse architectural environments to provide smooth, safe, and energy-effective vertical mobility for residential and commercial buildings.",
      features: ['Noise-optimized control systems', 'Precision sensors', 'Vibration detection system', 'Advanced monitoring devices'],
      benefits: 'Established with user eye-catching design, stylistic appeal, appearance standards by integrating motor and precision, sensors and noise detection system, control systems, monitoring devices.',
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "Anti-Microbial Features for Safety",
      description: "At Yatra Elevators, safety is first and foremost essential to maintain hygiene, Anti-microbial Features for safety, eradicating microbial creatures through biodegradable chemicals. Our Elevators not only provide elegant and good feel, but also deliver safety by enhancing the ability to handle any problem regarding safety issues.",
      features: ['Antimicrobial surfaces', 'Biodegradable chemicals', 'Hygiene maintenance', 'Safety enhancement'],
      benefits: 'Going beyond the safety measures we focus on healthy and powerful life to lead, uplift and engross many good lifestyles.',
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Systems",
      description: "Yatra elevators offer incredible and highly advanced response systems, though it is not just for the purpose of safety but also for security and incorporating accountability by yatra's intelligent sensor–based effortless alerts and connectivity for emergency Response Systems.",
      features: ['Intelligent sensor-based alerts', 'Emergency connectivity', 'Water alert regulatory system', 'Control system coordination'],
      benefits: 'These response Systems protect precious lives. Our Intelligent response System coordinates the control system and acts as an emergency System also equipped with water alert regulatory System.',
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop"
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration for Users",
      description: "At Yatra Elevators, we understand people to give convenience and comfortness by integrating Mobile app technology for users. Technology has evolved drastically in this developing era where everything has digitalized, that's why convenience mobile and charging points and energy saving Systems.",
      features: ['Mobile app technology', 'Convenience features', 'Charging points', 'Energy saving systems'],
      benefits: 'Whether you are a resident or builder, everyone should have to utilize technology in day to day life professionally. This System Mobile App Integration for Users from Yatra transforms lives from underprivileged communities to Sophisticated Communities where every futuristic goal can be accomplished.',
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "Fire-Resistant Design Options",
      description: "We at Yatra Elevators, light up many lives through our programs, deliverability, and systematic approach. These facilities are ideal for safety and moreover diminishes life threat in any place. These fire-resistant design Options aim at clearing out the fear of uncertainty and provide peace of mind through protection and effortless evacuation and safe places.",
      features: ['Fire-resistant materials', 'Safety protection systems', 'Effortless evacuation features', 'Safe place provisions'],
      benefits: 'At Yatra our products are designed in such a way that they safeguard lives with exceptional protection and security. We strongly believe that the real progress is not just quantified by technological innovation, but, by the positive influence and enhancement we create in the communities we serve.',
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop"
    }
  ];

  const safetyFeatures = [
    {
      title: "Safety First Approach",
      description: "At Yatra Elevators, safety is non-negotiable and a strong foundational thing. Our First approach towards Safety precautions and guidelines energized to bring up the mindset of protection. We strongly endeavored to follow up the national and international safety standards, making sure each one of the elevators and escalators are reliable, safely designed with advanced technology.",
      icon: Shield
    },
    {
      title: "Regulatory Compliance (BIS, BEE, NBC)",
      description: "Yatra Elevators offer unwavering support and unshakable desire to go the extra mile in life. Certifications is not just about qualification, However, it is global standards of recognition CE(Conformité Européenne), and BIS (Bureau of Indian Standards), enabling our Yatra elevators to become reliable, efficient and most security standards.",
      icon: Settings
    },
    {
      title: "Fire Safety and Seismic Compliance",
      description: "Yatra Elevators & Escalators are fabricated and designed with the latest fire safety and seismic compliance, Regulatory Compliance (BIS, BEE, NBC) other global benchmarks. We infuse fire-rated materials, smoke-resistant cabin features, and automatic recall systems that redirect elevators to the nearest safe floor in case of fire.",
      icon: AlertTriangle
    },
    {
      title: "Safety Mechanisms in Yatra Products",
      description: "Each & every yatra product is designed with great safety mechanisms, Initially combined with hardware products and brake protection and anti–microbial protection, roll back escalators. We made these exceptional systems that include ARD (Automatic rescue devices) to drive the lift towards the safety floor.",
      icon: Shield
    },
    {
      title: "Emergency & Rescue Procedures",
      description: "At Yatra our elevators will have the power backup System in order to store the energy, rescue procedures that make every ride secured. Our elevators are not only designed for elegance, static visual appearance but also for powerful and exceptional safety mechanisms and security.",
      icon: AlertTriangle
    },
    {
      title: "Child & Senior Safety Features",
      description: "At Yatra our elevators transform many lives in a way that is unrecognizable and impeccable through skill development programs, performing new challenging activities, accelerating education for the youth, supporting women empowerment, and championing sustainable practices across all our operations.",
      icon: Clock
    }
  ];


  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.6 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <PageLayout>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: isHovering ? 2 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-blue-400/20 rotate-45"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-white mb-6 font-montserrat tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              {splitText("INNOVATION")}
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
                {splitText("& TECHNOLOGY")}
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-source font-light max-w-4xl mx-auto">
              Leading the future of vertical mobility with cutting-edge technology, smart integration, 
              and sustainable solutions that redefine elevator and escalator experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl">
              <Eye className="mr-2 h-5 w-5" />
              Explore Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Innovation Grid */}
      <motion.section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-8"
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 font-montserrat"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              TECHNOLOGICAL <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                INNOVATIONS
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto font-source leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how our advanced technologies are revolutionizing vertical transportation 
              with smart, efficient, and sustainable solutions.
            </motion.p>
          </motion.div>
          
          <motion.div 
            ref={innovationsRef} 
            className="grid lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {innovations.map((innovation, index) => (
              <motion.div 
                key={index} 
                className="innovation-card group"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -20, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                onHoverStart={() => {
                  setHoveredCard(index);
                  setIsHovering(true);
                }}
                onHoverEnd={() => {
                  setHoveredCard(null);
                  setIsHovering(false);
                }}
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full transform-gpu transition-all duration-500 hover:shadow-2xl">
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${innovation.image})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <motion.div 
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <innovation.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                        {innovation.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <motion.p 
                      className="text-gray-600 leading-relaxed font-source text-sm line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {innovation.description}
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 font-poppins flex items-center">
                        <motion.div
                          className="w-2 h-2 bg-blue-600 rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        Key Features
                      </h4>
                      {innovation.features.slice(0, 3).map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 font-source">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100">
                      <h4 className="font-semibold text-blue-700 mb-2 font-poppins text-sm">
                        Impact & Benefits
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed font-source">
                        {innovation.benefits}
                      </p>
                    </div>

                    {/* Interactive Button */}
                    <motion.div 
                      className="pt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 font-semibold"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <MousePointer className="mr-2 h-4 w-4" />
                        Learn More
                        <motion.div
                          className="ml-2"
                          animate={{ x: hoveredCard === index ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Safety & Compliance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-8">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Safety & <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Safety is our top priority. Every Yatra product meets the highest international 
              standards and incorporates multiple layers of protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group text-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-red-500 to-red-600 mx-auto group-hover:w-16 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Innovation by Numbers</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our technological advancements deliver measurable improvements in performance, 
              efficiency, and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-white/80">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-white/80">Reduced Wait Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Reliability Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Smart Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Experience the Future Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Ready to implement cutting-edge vertical mobility solutions? Let our experts help you 
            choose the right technology for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline">
                Explore Smart Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InnovationTech;
