import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useSpring } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Wrench, Star, CheckCircle, Home, Building2, Hospital, Truck, ShoppingCart, Plane, Users, Clock, Eye, MousePointer } from 'lucide-react';

const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Advanced animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.23, 1, 0.320, 1]
      }
    })
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateY: -15
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1]
      }
    }),
    hover: {
      y: -20,
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.320, 1]
      }
    }
  };

  const magneticVariants = {
    default: { x: 0, y: 0 },
    hover: (mousePos: { x: number, y: number }) => ({
      x: (mousePos.x - window.innerWidth / 2) * 0.02,
      y: (mousePos.y - window.innerHeight / 2) * 0.02
    })
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0
    },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.320, 1]
      }
    }
  };

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={letterVariants}
        custom={i}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  const elevatorTypes = [
    {
      title: "Passenger Elevators",
      description: "Yatra's Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike. Established with user attractive design, stylistic appeal, appearance standards and we envisioned the long term journey carried in our minds.",
      features: ["Advanced technology", "Noise-optimized control systems", "Customizable cabin finishes", "Safety protocols", "Hygiene scintillating interiors", "Stellar lifestyle driving"],
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop",
      capacity: "5-30 persons",
      speed: "0.5-4.0 m/s",
      load: "375-2000 kg",
      applications: ["Office buildings", "Residential complexes", "Hotels", "Shopping centers"]
    },
    {
      title: "Home/Residential Elevators",
      description: "Yatra's Elevators promote jubilant, elegant and enhancing incredible environments into your residence. These are fabricated with cutting-edge technology and modern stylish appearance versatility, these elevators smoothly get adjusted into villas, duplexes and multi story residences.",
      features: ["Capacity monitoring", "High tech mobility solutions", "Backup system", "Pathogen resistance", "Customizable finishes", "Compact dynamic shafts"],
      icon: Home,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      capacity: "3-8 persons",
      speed: "0.15-0.6 m/s",
      load: "250-630 kg",
      applications: ["Private homes", "Villas", "Apartments", "Duplex houses"]
    },
    {
      title: "Hospital/Bed Elevators",
      description: "Yatra's Hospital/Bed Elevators instituted with quiet, controlled acoustic environments, structural integrity, and advanced medical equipment and accommodations that prioritizes patient convenience and safety and security. Designed with meticulous determination to patient needs, these elevators provide whisper-quiet operation and exceptional stability.",
      features: ["Emergency power bank", "Safety practices", "Physically untouched control systems", "Hygiene and cleanliness", "Critical operations enhancement", "Stretcher compatibility"],
      icon: Hospital,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      capacity: "13-21 persons",
      speed: "1.0-1.75 m/s",
      load: "1000-1600 kg",
      applications: ["Hospitals", "Medical centers", "Nursing homes", "Rehabilitation centers"]
    },
    {
      title: "Freight/Service Elevators",
      description: "Yatra's Freight and Service Elevators are designed for maximum potential, solidity and firmness, and flawless performance in rigorous environments. Specifically engineered for heavy-duty commercial use, these elevators cope with substantial loads, bulky advanced equipment, and meticulously prolonged operation.",
      features: ["Fortified cabins", "Maximum capability motors", "Customizable interiors", "Energy effective drives", "Safety and secured functions", "Long-term proactiveness"],
      icon: Truck,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      capacity: "Up to 5000 kg",
      speed: "0.25-1.0 m/s",
      load: "1000-5000 kg",
      applications: ["Hotels", "Warehouses", "Hospitals", "Shopping centres", "Professional buildings"]
    },
    {
      title: "Capsule Elevators (Panoramic)",
      description: "Yatra's Capsule Elevators are a meritorious blend of scintillating and elegance, constructed to elevate both momentum and across all architectural beauty. Significant for advanced residential high-towers, premiere hotels, malls, and commercial areas, these comprehensive elevators put forward a 360-degree angle bird-eye view.",
      features: ["360-degree panoramic view", "Advanced safety operations", "Energy effective capability", "Architectural beauty enhancement", "Futuristic feel", "Glass cabin design"],
      icon: Star,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      capacity: "6-20 persons",
      speed: "0.5-2.5 m/s",
      load: "450-1600 kg",
      applications: ["Shopping malls", "Hotels", "Office towers", "Tourist attractions"]
    },
    {
      title: "Machine-Room Less (MRL) Elevators",
      description: "Yatra's Machine-Room Less (MRL) Elevators are developed with advanced, sophisticated infrastructure where the space consumption is minimized. Designed in such a way that without the necessity of a traditional mechanical room, these elevators provide strong installation, reduced consumption, and enhanced architectural flexibility.",
      features: ["No machine room required", "Space optimization", "Advanced technology", "Durability and versatility", "Superior striking interiors", "Architectural flexibility"],
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      capacity: "8-16 persons",
      speed: "0.5-1.75 m/s",
      load: "630-1275 kg",
      applications: ["Hotels", "Restaurants", "Office buildings", "Residential complexes"]
    },
    {
      title: "Hydraulic Elevators",
      description: "Yatra's Hydraulic Elevators are developed for positioning them as the perfect choice of residence with uncluttered and expansive optimisation. These are engineered with perfect energy optimisation and compact home space area with safety and impenetrable security, tamper-proof protection.",
      features: ["Energy optimization", "Compact space design", "Safety and security", "Tamper-proof protection", "Uncompromisable protection", "Perfect for low-rise buildings"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      capacity: "5-15 persons",
      speed: "0.15-0.5 m/s",
      load: "375-1200 kg",
      applications: ["Residential complexes", "Low-rise buildings", "Business properties", "Small commercial spaces"]
    }
  ];

  const escalatorTypes = [
    {
      title: "Commercial Escalators",
      description: "Yatra's Commercial Escalators designed for people and users where those deal with high Standards visuals and uncompromisable Security Systems. Developed for malls, office complexes, convention centres, and public spaces, our elevators and escalators are equipped with durability and lift mobility, Advanced Sensors, and Safety Features.",
      features: ["High Standards visuals", "Uncompromisable Security Systems", "Durability and lift mobility", "Advanced Sensors", "Safety Features", "Optional Customizations"],
      icon: ShoppingCart,
      capacity: "6,750-10,000 persons/hour",
      angle: "30° or 35°",
      speed: "0.5-0.65 m/s",
      applications: ["Shopping malls", "Office complexes", "Convention centres", "Public spaces"]
    },
    {
      title: "Public Transport Escalators",
      description: "Yatra's public transport Escalators are reliable, moreover, It has high energy efficient resources to strive for innovation, with customizable speed ranges (up to 2.5 m/s), intelligent door operation, and superior leveling accuracy developed for malls, office complexes, convention centres, and public spaces.",
      features: ["High energy efficient resources", "Customizable speed ranges", "Intelligent door operation", "Superior leveling accuracy", "Advanced Sensors", "Cozy walkways and transport system"],
      icon: Plane,
      capacity: "9,000-13,500 persons/hour",
      angle: "30° or 35°",
      speed: "0.5-2.5 m/s",
      applications: ["Airports", "Metro stations", "Railway terminals", "Large public venues"]
    },
    {
      title: "Travelators / Moving Walkways",
      description: "Yatra's Travelators, which are also known as moving walkways, are created to provide perfect horizontal transportation across large spaces such as airports, malls, transit hubs, and exhibition centers. Designed with user friendly and safety in mind, these systems offer smooth and energy-efficient movement for pedestrians, luggage carts, and trolleys.",
      features: ["Perfect horizontal transportation", "User friendly and safety focused", "Smooth and energy-efficient movement", "Anti-slip surfaces", "Tailored speed controls", "Superior travel experience"],
      icon: Users,
      capacity: "4,500-9,000 persons/hour",
      angle: "0° to 12°",
      speed: "0.5-0.75 m/s",
      applications: ["Airports", "Large shopping centers", "Transit hubs", "Exhibition centers"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Drive Systems",
      items: [
        "Gearless traction systems",
        "Regenerative drives",
        "Variable frequency controls",
        "Energy recovery systems"
      ]
    },
    {
      category: "Safety Features",
      items: [
        "Emergency braking systems",
        "Overspeed governors", 
        "Safety gear mechanisms",
        "Door protection systems"
      ]
    },
    {
      category: "Control Systems",
      items: [
        "Destination dispatch",
        "Smart card access",
        "Touch screen interfaces",
        "Mobile app integration"
      ]
    },
    {
      category: "Compliance Standards",
      items: [
        "EN 81-1/81-2 European standards",
        "ASME A17.1 American standards",
        "IS 15259 Indian standards",
        "CE marking compliance"
      ]
    }
  ];

  return (
    <PageLayout>
      <AnimatedHighlights />
      
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

      <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden font-source">
        {/* Hero Section with Parallax */}
        <motion.section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
            variants={pulseVariants}
            animate="animate"
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-blue-400/20 rotate-45"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-black text-white mb-6 font-montserrat tracking-tight"
                variants={textRevealVariants}
              >
                {splitText("OUR")}
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
                  {splitText("PRODUCTS")}
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-source font-light max-w-3xl mx-auto">
                Experience the future of vertical mobility with our comprehensive range of 
                cutting-edge elevators and escalators
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.2
                  }
                }
              }}
            >
              {["24/7 Support", "Safety Certified", "Energy Efficient"].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <Badge variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10 px-6 py-3 text-sm font-medium">
                    {text}
                  </Badge>
                </motion.div>
              ))}
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
                Explore Our Range
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

        {/* Elevators Section */}
        <motion.section 
          className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto">
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
                <Building2 className="h-10 w-10 text-white" />
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-gray-900 mb-6 font-montserrat"
                variants={textRevealVariants}
              >
                ELEVATOR <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">SOLUTIONS</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-4xl mx-auto font-source leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                From residential homes to industrial facilities, our comprehensive elevator range provides 
                safe, efficient, and reliable vertical transportation solutions
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              {elevatorTypes.map((elevator, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => {
                    setHoveredCard(index);
                    setIsHovering(true);
                  }}
                  onHoverEnd={() => {
                    setHoveredCard(null);
                    setIsHovering(false);
                  }}
                  className="group"
                >
                  <Card className="h-full bg-white border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                    {/* Image Header with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${elevator.image})` }}
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
                        <elevator.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>

                      {/* Animated Title Overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                          {elevator.title}
                        </h3>
                        <div className="flex gap-2">
                          <Badge className="bg-blue-600 text-white border-0">
                            {elevator.capacity}
                          </Badge>
                          <Badge className="bg-cyan-600 text-white border-0">
                            {elevator.speed}
                          </Badge>
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <motion.p 
                        className="text-gray-600 leading-relaxed font-source text-sm line-clamp-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {elevator.description}
                      </motion.p>

                      {/* Animated Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 font-poppins flex items-center">
                          <motion.div
                            className="w-2 h-2 bg-blue-600 rounded-full mr-3"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          Key Features
                        </h4>
                        {elevator.features.slice(0, 3).map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 font-source">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Interactive Button */}
                      <motion.div 
                        className="pt-4"
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Escalators Section */}
        <motion.section 
          className="py-16 px-4 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-10 w-10 inline-block mr-3 text-blue-600 rotate-45" />
                </motion.div>
                Escalator & Moving Walkway Solutions
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
                Efficient horizontal and inclined transportation systems designed for high-traffic environments with superior safety and reliability
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {escalatorTypes.map((escalator, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                      <CardTitle className="flex items-center text-xl text-gray-900 font-poppins font-semibold">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <escalator.icon className="w-8 h-8 text-blue-600 mr-3" />
                        </motion.div>
                        {escalator.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6">
                      <p className="text-gray-600 leading-relaxed font-inter text-sm">{escalator.description}</p>
                      
                      <motion.div 
                        className="grid grid-cols-1 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Badge variant="secondary" className="justify-center bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium">
                          <Users className="w-3 h-3 mr-1" />
                          {escalator.capacity}
                        </Badge>
                        <Badge variant="secondary" className="justify-center bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium">
                          <Zap className="w-3 h-3 mr-1" />
                          {escalator.speed}
                        </Badge>
                      </motion.div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-900 font-poppins">Key Features:</h4>
                        {escalator.features.slice(0, 4).map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 font-inter">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 font-poppins">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {escalator.applications.map((app, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge variant="outline" className="text-xs border-gray-300 text-gray-600 font-medium">
                                {app}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" variant="default">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Technical Specifications Section */}
        <motion.section 
          className="py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Technical Excellence
              </motion.h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {technicalSpecs.map((spec, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                      <CardTitle className="text-lg text-gray-900 font-poppins font-semibold">{spec.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {spec.items.map((item, idx) => (
                          <motion.div 
                            key={idx} 
                            className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg font-inter"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ 
                              backgroundColor: "#f3f4f6",
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section 
          className="py-16 px-4 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Why Choose Yatra Elevators?
              </motion.h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-poppins">Safety First Approach</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      At Yatra Elevators, safety is non-negotiable and a strong foundational thing. Our First approach towards Safety precautions and guidelines energized to bring up the mindset of protection. We strongly endeavored to follow up the national and international safety standards, making sure each one of the elevators and escalators are reliable, safely designed with advanced technology.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-poppins">Energy Efficiency & Regenerative Drives</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills and energy, enabling magnanimous vertical transport of goods without compromising safety or adaptability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-poppins">24/7 Customer Support</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      At Yatra Escalators and Elevators, our commitment to customer satisfaction is quite promising. Our well trained professional customer support team is available around the clock to take the service requests, emergencies, and all technical issues with jet speed and proficiency. Whether it's a general query or an urgent breakdown, we deliver accurate assistance to reduce downtime.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-16 px-4 bg-blue-600 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Ready to Elevate Your Building?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/90 font-inter leading-relaxed"
              variants={itemVariants}
            >
              Contact us today for a customized vertical transportation solution that meets your specific requirements
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 font-semibold">
                  Download Brochure
                </Button>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-white/80 text-sm font-inter"
              variants={itemVariants}
            >
              Join thousands of satisfied customers who trust Yatra for their vertical transportation needs
            </motion.p>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Products;
