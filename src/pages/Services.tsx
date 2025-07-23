import React from 'react';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, RefreshCw, Shield, Smartphone, Building2, Users, Clock, Zap, CheckCircle, Settings, Lightbulb, Cpu, Wifi } from 'lucide-react';

const Services = () => {
  const solutions = [
    {
      title: "New Installations",
      description: "Yatra's New Installations offers end to end installation solutions, durability with maximum safety guidelines along with configured security protocols. From Advisory Session to end enlisting, we make sure an effortless process combined with client requirements, constructional design requirements moreover safety and security norms.",
      features: ["End-to-end installation solutions", "Maximum safety guidelines", "Advisory sessions", "Client requirement analysis", "Construction design compliance", "Safety and security norms"],
      icon: Building2,
      benefits: "Although architectural apartments have immense residential necessity, Enabling new innovations in order to serve high standard lifestyle, Yatra provides vertical mobility systems that are most significant, with jubilant space and designed to last so that redefining and reshaping the momentum of life with modernisation, stability, benevolent and Substantial sustainability as its main agenda."
    },
    {
      title: "Modernization & Upgrades",
      description: "At Yatra, Elevators turn out to be sophisticated with advanced technology that are decommissioned with technical progress. Integrating new features, always intended to be updated, using smart and cool materials for elevating cutting-edge robust intrications.",
      features: ["Advanced technology integration", "Smart materials", "Cutting-edge robust intrications", "Minimal interruption", "High rate of influence", "Future-ready solutions"],
      icon: RefreshCw,
      benefits: "With minimal interruption and high rate of influence, we transform legacy systems into high-performance, future-ready mobility solutions. Enabling and ensuring wide changes in people's lifestyle, yatra's aims for a futuristic infrastructural bundle of opportunities venturing into the segment of vertical mobility."
    },
    {
      title: "Maintenance & AMC Services",
      description: "Yatra's Services doesn't serve a good advanced features, but it's only the initial stage of advancements. Our elevator Care & Protection Plan Maintenance and Annual Maintenance Contract (AMC) services are engineered to maintain that your elevators and escalators function uninterruptedly, safely, and effectively bound to system controls.",
      features: ["Qualified technicians", "Real-time sensors and monitoring", "Proactive planned maintenance", "24/7 technical support", "Performance checks", "Optimization services"],
      icon: Shield,
      benefits: "With a passionate and committed to excellence team of Qualified technicians, real-time sensors and monitoring systems, and proactive, planned maintenance activities, we minimize down line time and ensure to implement technical expertise so that the life of your vertical mobility solutions are smoothly taken care off."
    },
    {
      title: "Customized Lift Solutions",
      description: "At Yatra Elevators, we acknowledge that every area has its own comprehensive and unique character and functional requirements, especially when it comes to architectural vision, structural design, and user experience. That's why we offer Tailor Made Lift Solutions configured particularly for professionals, engineers, builders and Institutions.",
      features: ["Brilliant development expertise", "Intelligent automation", "Design flexibility", "Professional solutions", "Builder-specific requirements", "Institutional customization"],
      icon: Settings,
      benefits: "Yatra's elevators don't overlook the minute problems, they take immediate actions to eradicate them. With brilliant development expertise, intelligent automation and design flexibility, users can be given to design their own customized Lift Solutions addressing solutions and sorting out many technical problems by builders."
    },
    {
      title: "Smart Elevator Integration (IoT, AI, Remote Monitoring)",
      description: "At Yatra, we bring advanced technological revolution by combining Artificial intelligence, IoT, Innovational solutions, Robotics. With IoT connectivity we will expound our new disruption ideas through great communication.",
      features: ["AI automation", "IoT connectivity", "Instant error detection", "Drift technician deployment", "High efficient advanced technology", "Time priority values"],
      icon: Smartphone,
      benefits: "AI automation opens up many doors in the future, developing many significant things, saving insane timings. AI driven algorithms light up many lives through instant error detection, drift technician deployment, sourcing high efficient advanced technology by ensuring time priority values. With reliability and smart gadgets Yatra redefines and opens the way to many career opportunities."
    }
  ];

  const industries = [
    {
      title: "Residential Buildings",
      description: "At Yatra, we aim to cater to the needs of Residential Spaces by enhancing, building infrastructure, lifestyle and safety protocols. We try to bring an elegant and enhancing environment into your residence.",
      features: ["Cutting-edge technology", "Modern stylish appearance", "Capacity monitoring", "High tech mobility solutions", "Backup system", "Pathogen resistant environment"],
      icon: Building2,
      applications: ["Villas", "Complexes", "Multi storied residences", "Private homes"]
    },
    {
      title: "Commercial Complexes",
      description: "At Yatra Escalators and Elevators, we understand that commercial spaces require more than just vertical mobility in fact they require solutions that are jet speed, trustworthy and designed to handle maximum foot traffic with so much ease.",
      features: ["Smart technology", "Energy efficiency", "Sleek designs", "Tailor made options", "Durability", "Quick responsive maintenance"],
      icon: Building2,
      applications: ["Shopping malls", "Office complexes", "Airports", "Convention centers"]
    },
    {
      title: "Hospitals & Healthcare",
      description: "In hospitals and Health care Industries, each and every minute is very valuable. There will be scenarios where patient lives count every single second and minute. Yatra Elevators are meticulously designed in such a way that the patient's needs and doctors' needs for vertical mobility are perfectly satisfied.",
      features: ["Hygiene focused", "Calm and reduced noise", "AI technology deployment", "Acoustic operation", "Exceptional stability", "Medical equipment compatibility"],
      icon: Shield,
      applications: ["Hospitals", "Medical centers", "Healthcare facilities", "Emergency centers"]
    },
    {
      title: "Airports & Transport Hubs",
      description: "At Yatra Elevators, we understand that more transportation facilities are required for passengers and people. Our elevators and escalators solutions ensure smooth, uninterrupted flow even during high edge travel hours, improving user experience for passengers, staff, and Exorbitent classes.",
      features: ["High speed advanced systems", "Cozy transportation", "Flexible material", "Noise reduction System controls", "Global safety standards compliance", "Anti-skid step design"],
      icon: Zap,
      applications: ["Airports", "Railway stations", "Bus terminals", "Metro stations"]
    },
    {
      title: "Malls & Retail Chains",
      description: "At Yatra Escalators and Elevators, we understand the modern environment of malls and retail chains. Our elevators and escalators are crafted to balance high foot traffic with speed, safety, and efficiency.",
      features: ["Sleek modern designs", "High foot traffic handling", "Speed and safety balance", "Intelligent control systems", "Less downtime", "Better shopping experience"],
      icon: Users,
      applications: ["Shopping malls", "Retail chains", "Department stores", "Entertainment centers"]
    },
    {
      title: "Industrial Warehouses",
      description: "In industrial settings, reliability and load capacity are the most critical factors and that's where Yatra excels. We provide robust freight elevators and vertical transport systems tailored for warehouse operations.",
      features: ["Heavy usage withstanding", "Demanding safety standards", "Logistics matching", "Long lasting components", "Long service life", "Less maintenance"],
      icon: Wrench,
      applications: ["Warehouses", "Manufacturing plants", "Distribution centers", "Industrial facilities"]
    },
    {
      title: "Educational Institutions",
      description: "Safety, User friendly usage, educational based designs and the noise-less factors are most important in educational environments. Yatra designs elevators that are specifically suitable for schools, colleges, and universities.",
      features: ["Safety priority", "User-friendly usage", "Educational based designs", "Noise-less operation", "Easy mobility", "Accessibility guidelines compliance"],
      icon: Lightbulb,
      applications: ["Schools", "Colleges", "Universities", "Educational complexes"]
    },
    {
      title: "Government & Public Infrastructure",
      description: "Government constructions and public spaces require solutions that are reliable, secure, and very accessible. Yatra provides elevators and escalators that match the needs for municipal offices, transport hubs, hospitals, and civic centers.",
      features: ["Reliable and secure", "Accessible design", "Continuous usage capability", "Resistant features", "Crowd movement improvement", "Public architecture integration"],
      icon: Shield,
      applications: ["Municipal offices", "Transport hubs", "Civic centers", "Public buildings"]
    }
  ];

  const technologies = [
    {
      title: "Smart Elevators (AI + IoT)",
      description: "At Yatra, we are reshaping the future of vertical mobility through smart elevators propelled by Artificial Intelligent and IoT. Yatra elevators offer more advanced and elevating technological functionality where the Intelligent System goes beyond traditional functionality by learning passenger adaptability, optimizing data through real-time data Analysis, predicting & performing Systematic approach enabling voice prediction System.",
      features: ["AI-driven algorithms", "IoT-enabled connectivity", "Real-time data analysis", "Voice prediction system", "Passenger adaptability learning", "Systematic approach performance"],
      icon: Cpu
    },
    {
      title: "Energy Efficiency & Regenerative Drives",
      description: "At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills and energy.",
      features: ["LED power integration", "Heavy-duty commercial engineering", "Energy bill optimization", "Maximum capability motors", "Protected cabins", "Tailor made interiors"],
      icon: Zap
    },
    {
      title: "Anti-Microbial Features for Safety",
      description: "At Yatra Elevators, safety is first and foremost essential to maintain hygiene, Anti-microbial Features for safety, eradicating microbial creatures through biodegradable chemicals. Our Elevators not only provide elegant and good feel, but also deliver safety by enhancing the ability to handle any problem regarding safety issues.",
      features: ["Anti-microbial features", "Biodegradable chemicals", "Hygiene maintenance", "Safety enhancement", "Microbial eradication", "Healthy lifestyle promotion"],
      icon: Shield
    },
    {
      title: "Mobile App Integration for Users",
      description: "At Yatra Elevators, we understand people to give convenience and comfortness by integrating Mobile app technology for users. Technology has evolved drastically in this developing era where everything has digitalized, that's why convenience mobile and charging points and energy saving Systems.",
      features: ["Mobile app technology", "Convenience and comfort", "Digitalized solutions", "Charging points", "Energy saving systems", "Professional utilization"],
      icon: Smartphone
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
              Our <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Comprehensive solutions for all your vertical mobility needs - from installation to maintenance, modernization to smart integration
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                New Installations
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <RefreshCw className="w-4 h-4 mr-2" />
                Modernization
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                24/7 Maintenance
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Wrench className="h-10 w-10 inline-block mr-3 text-primary" />
                Our Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From new installations to smart integrations, we provide comprehensive solutions for all your vertical mobility requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <solution.icon className="w-8 h-8 text-primary mr-3" />
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                      <p className="text-muted-foreground text-sm">{solution.benefits}</p>
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

        {/* Industries We Serve Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Building2 className="h-10 w-10 inline-block mr-3 text-primary" />
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialized solutions tailored for diverse industry requirements, ensuring optimal performance and user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="text-center pb-4">
                    <industry.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-xs text-foreground">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation & Technology Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Cpu className="h-10 w-10 inline-block mr-3 text-primary" />
                Innovation & Technology
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technologies powering the future of vertical mobility with smart, efficient, and sustainable solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <tech.icon className="w-8 h-8 text-primary mr-3" />
                      {tech.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
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
              Ready to Transform Your Vertical Mobility?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your specific requirements and discover how our solutions can elevate your building's performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Join the future of vertical transportation with Yatra's innovative solutions
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Services;
