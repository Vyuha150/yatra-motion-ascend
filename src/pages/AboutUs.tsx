import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield,
  Target,
  Eye,
  Leaf,
  Factory,
  Search,
  HandHeart,
  Building,
  Hotel,
  Truck,
  GraduationCap,
  Mountain,
  Utensils,
  Users2,
  Star,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const iconicVerticals = [
    { icon: Hotel, title: "Hotels & Resorts", color: "text-blue-500" },
    { icon: Building, title: "Ready Mix Concrete", color: "text-gray-500" },
    { icon: Building2, title: "Enterprises & Global Infrastructure", color: "text-purple-500" },
    { icon: Building2, title: "Elevators & Escalators", color: "text-green-500" },
    { icon: Utensils, title: "Food Products & Solutions", color: "text-orange-500" },
    { icon: Truck, title: "Highway Food Courts", color: "text-red-500" },
    { icon: Users2, title: "Women Empowerment Initiatives", color: "text-pink-500" },
    { icon: GraduationCap, title: "Education & IT Solutions", color: "text-indigo-500" },
    { icon: Mountain, title: "Mining Division", color: "text-yellow-500" }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence navigates us to excel expectations with each and every delivery.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Integrity designs how we function with honesty, impartiality, and respect for all stakeholders.",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "Our in-depth focus on the customer guarantees that we remain attentive to real needs, never compromising on quality or care.",
      color: "text-red-500"
    }
  ];

  const sustainabilityPractices = [
    "Usage of energy efficient machinery",
    "Mandatory Implementation of zero-waste protocols",
    "Water consumption in a more reducible way",
    "Procurement of sustainable raw materials whenever possible"
  ];

  return (
    <PageLayout>
      <AnimatedHighlights />
      <div className="min-h-screen bg-background font-source">
        {/* Hero Section */}
        <motion.section 
          className="relative py-24 px-4 text-center bg-gradient-to-br from-primary via-blue-600 to-primary overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="h-10 w-10 text-white" />
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-montserrat tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About <span className="text-white">ICONIC Group</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-source font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Fifteen years of excellence, trust, and innovation in shaping the future
            </motion.p>
            <motion.div 
              className="flex justify-center items-center mt-8 space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center space-x-2 text-white/90"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="h-5 w-5 text-white" />
                <span className="text-sm font-medium font-source">15+ Years</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-white/90"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="h-5 w-5 text-white" />
                <span className="text-sm font-medium font-source">1000+ Projects</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-white/90"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="h-5 w-5 text-white" />
                <span className="text-sm font-medium font-source">9 Verticals</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Legacy Section */}
        <motion.section 
          className="py-20 px-4 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
                Our Legacy: The <span className="text-primary">ICONIC Group</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
                Building dreams, creating futures, and establishing trust for over fifteen years
              </p>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="mb-12 shadow-lg bg-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-border">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">Our Journey</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      For more than fifteen years, ICONIC Group has addressed a reputation ingrained in brilliance, trust, and innovation. What initiated as a visionary vertical in shaping homes and office spaces from two to three-bedroom residences to expansive duplex and triplex villas, and also extensive materialistic interiors has grown into a hybrid legacy that touched numerous lives.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-primary rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">Our Promise</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      At ICONIC, each and every project is the journey of dreams shaping into reality. Our dedication to quality workmanship and client satisfaction has remained the milestone of our journey. As a matter of fact, our legacy speaks for itself. We were able to see this success because of thousands of satisfied customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ICONIC Group Verticals */}
            <Card className="mb-12 shadow-lg bg-card hover:shadow-xl transition-all duration-500 border border-border">
              <CardHeader className="pb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-card-foreground mb-4">
                    ICONIC Group Verticals
                  </CardTitle>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Throughout the years, our pioneering spirit has guided us to expand over innumerable industries. Today, the ICONIC Group pridefully operates in:
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {iconicVerticals.map((vertical, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center p-6 bg-muted/50 rounded-xl hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary hover:shadow-md transform hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all duration-300">
                        <vertical.icon className={`h-6 w-6 ${vertical.color} group-hover:text-white transition-colors duration-300`} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-foreground transition-colors">
                          {vertical.title}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary mr-2" />
                    <Leaf className="h-6 w-6 text-primary mr-2" />
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium italic">
                    Each vertical reflects our commitment in molding a better future - one that is Eco-Friendly, inclusive, and ingenious.
                  </p>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Elevators & Escalators Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg bg-card hover:shadow-xl transition-all duration-500 border border-border">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                  Why <span className="text-primary">Elevators & Escalators?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          At ICONIC Group, our growth has always originated from listening to the advancing needs of the globe around us. As contemporary infrastructure scales upward, the want for structured vertical mobility becomes more pivotal than ever.
                        </p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          Our journey into Elevators & Escalators is not just a supplement of our engineering potentiality, but a tactical move positioned with our mission to form forward-thinking surroundings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-4">
                          <Building2 className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Yatra Vision</h3>
                      </div>
                      <p className="text-muted-foreground font-medium mb-6 text-center">
                        More than a product, Yatra is a commitment to promote lives by:
                      </p>
                      <div className="space-y-4">
                        {[
                          "Simplifying day-to-day movement",
                          "Certifying accessibility for all age groups and abilities",
                          "Combining cutting-edge technology with accommodating design",
                          "Increasing user experience and operational dependability"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Mission & <span className="text-primary">Vision</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="shadow-lg bg-card hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      At ICONIC Group, our mission is to promote day-to-day living by designing innovative, forward-thinking spaces and solutions that encourage trust, innovation, and sustainability.
                    </p>
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                      <div className="flex items-center mb-4">
                        <Zap className="h-5 w-5 text-primary mr-2" />
                        <span className="font-semibold text-card-foreground">Our Commitment</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        With each and every project, from magnificent homes to contemporary infrastructure, we always aim to deliver incomparable quality and dedicated design that inspires communities and enhances lives.
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <p className="text-muted-foreground text-sm italic">
                        Through our multiple verticals, including our latest approach to Elevators & Escalators under the Yatra brand, we are accomplishing engineering progress that is approachable, structured, and impressive.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision & Values */}
              <Card className="shadow-lg bg-card hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-primary rounded-full mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Vision & Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Our vision is to become a life-changing force in each and every vertical we enter, preparing a well-planned future where architecture, motive, and liability synchronize consensually.
                    </p>
                    <div className="space-y-4">
                      {coreValues.map((value, index) => (
                        <div key={index} className="group p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-all duration-300 border border-border">
                          <div className="flex items-start space-x-4">
                            <div className={`w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all duration-300`}>
                              <value.icon className={`h-5 w-5 ${value.color} group-hover:text-white transition-colors duration-300`} />
                            </div>
                            <div>
                              <h4 className="font-bold text-card-foreground mb-1">{value.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                <span className="text-primary">Leadership</span> Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Visionary leaders driving innovation, excellence, and sustainable growth
              </p>
            </div>

            <Card className="shadow-lg bg-card hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-border">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-card-foreground mb-2">Innovation</h3>
                    <p className="text-muted-foreground text-sm">Pioneering new solutions and technologies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-card-foreground mb-2">Integrity</h3>
                    <p className="text-muted-foreground text-sm">Leading with honesty and transparency</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-card-foreground mb-2">Passion</h3>
                    <p className="text-muted-foreground text-sm">Dedicated to excellence in every endeavor</p>
                  </div>
                </div>

                <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex space-x-2">
                      <Star className="h-6 w-6 text-primary" />
                      <Star className="h-6 w-6 text-primary" />
                      <Star className="h-6 w-6 text-primary" />
                      <Star className="h-6 w-6 text-primary" />
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground text-center">
                    ICONIC Group has an inspiring and accomplished leadership team that navigates our mission with intention and integrity. With ingrained expertise across various industries, our leaders bring a futuristic approach that moulds innovation with responsibility. They not only direct our organization toward brilliance but also motivate us to create solutions that serve a better social cause. Led by their insight and steady commitment to values, we continue to build a legacy that delegates communities, supports sustainability, and designs a brighter, more comprehensive future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Manufacturing & R&D Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Manufacturing & <span className="text-primary">R&D</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Manufacturing */}
              <Card className="group shadow-lg bg-card hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Manufacturing Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-primary/20">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        At ICONIC Group, our manufacturing process is the foundation for our dedication to quality, capability, and innovation. With the latest facilities and a meticulous quality assurance framework, we guarantee that every elevator and escalator produced under the Yatra brand reaches the highest industry standards.
                      </p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                      <div className="flex items-center mb-4">
                        <Leaf className="h-5 w-5 text-primary mr-2" />
                        <span className="font-semibold text-card-foreground">Sustainable Production</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our production units are equipped with leading-edge machinery and follow environmentally conscious methodologies to reduce waste and energy use. From raw material selection to final assembly, every step indicates our dedication to resilience, safety, and performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* R&D */}
              <Card className="group shadow-lg bg-card hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Research & Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-primary/20">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Innovation is at the heart of our journey, and our R&D division is where ideas change into impressive solutions. At ICONIC Group, we invest in research and development to stay ahead of industry trends and review user experiences in vertical mobility.
                      </p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                      <div className="flex items-center mb-4">
                        <Zap className="h-5 w-5 text-primary mr-2" />
                        <span className="font-semibold text-card-foreground">Future Technologies</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our engineers and designers constantly prospect new technologies, sustainable systems, smart automation, and improving safety features. Whether it's adjustable control systems or eco-friendly materials, our R&D efforts enable us to create smarter, safer, and more sustainable mobility experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Sustainability & <span className="text-primary">Green Practices</span>
              </h2>
            </div>

            <Card className="mb-8 shadow-lg bg-card hover:shadow-xl transition-all duration-500 border border-border">
              <CardContent className="p-10">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-center">
                  At ICONIC Group, sustainability is not considered as secondary - in fact it stands as our primary focus and it is our focal point of our innovation and purpose. With fast-growing urbanization and an urgent need for conscious-oriented climate development, we are committed to build a greener tomorrow through each and every purpose, product, process, and partnership.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">Green Manufacturing Practices</h3>
                    </div>
                    <div className="space-y-4">
                      {sustainabilityPractices.map((practice, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg border border-border">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-primary rounded-full flex items-center justify-center mr-4">
                        <Leaf className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">Eco-Friendly Solutions</h3>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        Our vertical mobility solutions under the Yatra brand are directed towards a strong emphasis on designs that are eco-friendly, energy efficient, and environment friendly. From drives that are regenerative oriented that bring power to the grid, to less machine occupancy procedures that reduce space and resource consumption.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                  <div className="flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-primary mr-3" />
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-center text-card-foreground font-semibold text-lg">
                    "Our journey is focused on green because the future depends on it."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CSR Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6">
                <HandHeart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Corporate <span className="text-primary">Social Responsibility</span>
              </h2>
            </div>
            
            <Card className="shadow-lg bg-card hover:shadow-xl transition-all duration-500 border border-border">
              <CardContent className="p-10">
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At Yatra, elevators transform many lives in an impeccable way through skill development programs, performing new challenging activities, accelerating education for the youth, supporting women empowerment and championing sustainable practices across all our operations.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We firmly believe that real progress is not just quantified by technological innovation, but by the positive influence and enhancement we create in the communities we serve. Our attempts are strongly rooted in empathy, bringing out the potential of empowering leadership.
                  </p>
                  <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex space-x-3">
                        <Heart className="h-6 w-6 text-primary" />
                        <Users className="h-6 w-6 text-primary" />
                        <HandHeart className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-card-foreground font-semibold text-lg italic">
                      "As we create and rise in the vertical mobility sector, we are more focused on enhancing lifestyles and venturing on a new journey of chanceful opportunities exclusively in the world where we are building for our future generations."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary via-blue-600 to-primary text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Experience the <span className="text-white">ICONIC</span> Difference?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have trusted ICONIC Group for over fifteen years
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">9</div>
                <div className="text-white/80 text-sm">Industry Verticals</div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">1000+</div>
                <div className="text-white/80 text-sm">Satisfied Customers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white group-hover:text-white transition-colors">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
                <Leaf className="h-5 w-5 text-white" />
                <span className="text-white group-hover:text-white transition-colors">Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
                <Zap className="h-5 w-5 text-white" />
                <span className="text-white group-hover:text-white transition-colors">Innovation Driven</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
