import React from 'react';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Hospital, Plane, ShoppingCart, GraduationCap, Briefcase, Factory, Shield, Users, Clock, Zap, CheckCircle, Settings } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Residential Buildings",
      description: "At Yatra, we aim to cater to the needs of Residential Spaces by enhancing, building infrastructure, lifestyle and safety protocols. We try to bring an elegant and enhancing environment into your residence. Designed with cutting-edge technology and modern stylish appearance versatility, these elevators smoothly get adjusted into villas, duplexes and multi story residences.",
      features: ["Cutting-edge technology", "Modern stylish appearance", "Capacity monitoring", "High tech mobility solutions", "Backup system", "Pathogen resistant", "Serene and calm mindful environment"],
      icon: Building2,
      applications: ["Villas", "Complexes", "Multi storied residences", "Duplex houses", "Apartment buildings", "Residential towers"],
      benefits: "Yatra's vertical mobility offers Capacity monitoring, high tech mobility solutions, backup system, pathogen resistant, serene and calm mindful environment.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
    },
    {
      title: "Commercial Complexes",
      description: "At Yatra Escalators and Elevators, we understand that commercial spaces require more than just vertical mobility in fact they require solutions that are jet speed, trustworthy and designed to handle maximum foot traffic with so much ease. Whether it's a shopping mall, office complex, airport or convention center, our elevators and escalators are designed to improve the flow of people efficiently while maintaining the best standards of safety and aesthetics.",
      features: ["Smart technology", "Energy efficiency", "Sleek designs", "Tailor made options", "Durability", "Less downtime", "Quick responsive maintenance"],
      icon: Briefcase,
      applications: ["Shopping malls", "Office complexes", "Airports", "Convention centers", "Commercial towers", "Business parks"],
      benefits: "Our commercial solutions conglomerate smart technology, energy efficiency and sleek designs to match the modern architecture of today's commercial buildings. We give tailor made options to suit your space requirements and branding, ensuring a perfect integration into your environment.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      title: "Hospitals & Healthcare",
      description: "In hospitals and Health care Industries, each and every minute is very valuable. There will be scenarios where patient lives count every single second and minute. Yatra Elevators are meticulously designed in such a way that the patient's needs and doctors' needs for vertical mobility are perfectly satisfied using the advanced equipment, infrastructure, and medical facilities.",
      features: ["Hygiene focused", "Calm and reduced noise", "AI technology deployment", "Acoustic operation", "Exceptional stability", "Medical equipment compatibility", "Emergency features"],
      icon: Hospital,
      applications: ["Hospitals", "Medical centers", "Healthcare facilities", "Emergency centers", "Nursing homes", "Rehabilitation centers"],
      benefits: "Crafted and engineered with hygiene, calm, reduced noise and deploying medical problems through AI technology, designed with meticulous determination to patient needs, yatra's Healthcare and hospitals provides acoustic operation and exceptional stability rather than insecure mobility, enabling that every journey is as soothing and assuring to the patients and their families.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop"
    },
    {
      title: "Airports & Transport Hubs",
      description: "At Yatra Elevators, we understand that more transportation facilities are required for passengers and people. Our elevators and escalators solutions ensure smooth, uninterrupted flow even during high edge travel hours, improving user experience for passengers, staff, and Exorbitent classes. Yatra's elevators unlock the high speed advanced, cozy transportation to go an extra mile.",
      features: ["High speed advanced systems", "Cozy transportation", "Flexible material", "Noise reduction System controls", "Global safety standards compliance", "Anti-skid step design", "Optional customizations"],
      icon: Plane,
      applications: ["Airports", "Railway stations", "Bus terminals", "Metro stations", "Transport hubs", "Transit centers"],
      benefits: "These are designed with flexible material, noise reduction System controls in compliance with global safety standards (ISO, BIS, EN), each unit undergoes rigorous testing for assured reliability and prolonged performance. Yatra designs scintillating and exceptional control systems, anti-skid step design, and optional customizations to enhance better commuter experience.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
    },
    {
      title: "Malls & Retail Chains",
      description: "At Yatra Escalators and Elevators, we understand the modern environment of malls and retail chains. Our elevators and escalators are crafted to balance high foot traffic with speed, safety, and efficiency. We created sleek, modern designs that highlight the latest retail architecture. Each system is designed for smooth operation and less downtime, ensuring customer convenience.",
      features: ["Sleek modern designs", "High foot traffic handling", "Speed and safety balance", "Intelligent control systems", "Less downtime", "Customer convenience", "Better shopping experience"],
      icon: ShoppingCart,
      applications: ["Shopping malls", "Retail chains", "Department stores", "Entertainment centers", "Food courts", "Shopping complexes"],
      benefits: "Our intelligent control systems upgrade performance during peak hours. With Yatra, you can have a better shopping experience while experiencing the engineering excellence of Yatra Escalators and elevators.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      title: "Industrial Warehouses",
      description: "In industrial settings, reliability and load capacity are the most critical factors and that's where Yatra excels. We provide robust freight elevators and vertical transport systems tailored for warehouse operations. Our installations are designed in such a way to withstand heavy usage and meet demanding safety standards. Whether you need movement between floors or to match the logistics, we deliver efficiency.",
      features: ["Heavy usage withstanding", "Demanding safety standards", "Logistics matching", "Long lasting components", "Long service life", "Less maintenance", "Efficiency delivery"],
      icon: Factory,
      applications: ["Warehouses", "Manufacturing plants", "Distribution centers", "Industrial facilities", "Storage facilities", "Logistics centers"],
      benefits: "Long lasting components guarantee long service life and less maintenance. Trust Yatra to maximize your warehouse workflow with engineered accuracy.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop"
    },
    {
      title: "Educational Institutions",
      description: "Safety, User friendly usage, educational based designs and the noise-less factors are most important in educational environments. Yatra designs elevators that are specifically suitable for schools, colleges, and universities. Our systems give access for easy mobility for students, staff, and visitors, including persons with disabilities. With user-friendly controls and simple mechanisms, classroom disturbances are minimized.",
      features: ["Safety priority", "User-friendly usage", "Educational based designs", "Noise-less operation", "Easy mobility", "Accessibility guidelines compliance", "Simple mechanisms"],
      icon: GraduationCap,
      applications: ["Schools", "Colleges", "Universities", "Educational complexes", "Research centers", "Academic buildings"],
      benefits: "We promise all our products meet strict and safety compliances and accessibility guidelines. Yatra brings smart vertical mobility solutions to the future generations.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
    },
    {
      title: "Government & Public Infrastructure",
      description: "Government constructions and public spaces require solutions that are reliable, secure, and very accessible. Yatra provides elevators and escalators that match the needs for municipal offices, transport hubs, hospitals, and civic centers. Our systems are crafted for continuous usage and built with resistant features. With sophisticated unification into public architecture, they improve crowd movement and reduce overcrowding.",
      features: ["Reliable and secure", "Accessible design", "Continuous usage capability", "Resistant features", "Crowd movement improvement", "Public architecture integration", "Overcrowding reduction"],
      icon: Shield,
      applications: ["Municipal offices", "Transport hubs", "Civic centers", "Public buildings", "Government facilities", "Administrative centers"],
      benefits: "Our Priority is to give accessibility for all, including senior citizens and the specially abled. Yatra delegates public infrastructure with world-class vertical mobility solutions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    }
  ];

  const whyChooseYatra = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of specific industry requirements and regulatory compliance",
      icon: Briefcase
    },
    {
      title: "Customized Solutions",
      description: "Tailor-made elevator and escalator systems designed for your industry needs",
      icon: Settings
    },
    {
      title: "Safety First",
      description: "Uncompromising safety standards across all industries and applications",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock maintenance and emergency support for all industries",
      icon: Clock
    }
  ];

  return (
    <PageLayout>
      <AnimatedHighlights />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary via-blue-600 to-primary">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industries We <span className="text-white">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Specialized vertical mobility solutions for diverse industries, ensuring optimal performance, safety, and user experience across all sectors
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                8 Major Industries
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Specialized Solutions
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Industry Compliance
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Explore Industries <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Industry Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From residential buildings to complex industrial facilities, we provide specialized solutions tailored to meet the unique requirements of each industry
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center text-white">
                      <industry.icon className="h-8 w-8 mr-3" />
                      <h3 className="text-xl font-bold">{industry.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="space-y-4 p-6">
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {industry.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                      <p className="text-muted-foreground text-sm">{industry.benefits}</p>
                    </div>

                    <Button className="w-full" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Yatra */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Yatra for Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our industry-specific expertise and commitment to excellence make us the preferred choice for vertical mobility solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseYatra.map((reason, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <reason.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Industry?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your industry-specific requirements and discover how our specialized solutions can enhance your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Industry Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Industry Guide
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Join industry leaders who trust Yatra for their vertical transportation needs
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Industries;
