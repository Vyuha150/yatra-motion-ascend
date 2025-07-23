import React from 'react';
import { Shield, Zap, Activity, Smartphone, Leaf, AlertTriangle, Settings, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const InnovationTech = () => {
  const innovations = [
    {
      icon: Zap,
      title: "Smart Elevators (AI + IoT)",
      description: "At Yatra, we are reshaping the future of vertical mobility through smart elevators propelled by Artificial Intelligent and IoT. Yatra elevators offer more advanced and elevating technological functionality where the Intelligent System goes beyond traditional functionality by learning passenger adaptability, optimizing data through real-time data Analysis, predicting & performing Systematic approach enabling voice prediction System.",
      features: ['AI-driven algorithms', 'IoT-enabled connectivity', 'Real-time data analysis', 'Voice prediction system'],
      benefits: 'Every consultation is featured for comfort, hygiene, and user-friendly experience with AI–driven algorithms and IoT–enabled connectivity.'
    },
    {
      icon: Leaf,
      title: "Energy Efficiency & Regenerative Drives",
      description: "At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. This not only talks about electricity and power but it is standard for building infrastructure. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills and energy, and meticulously prolonged operation.",
      features: ['LED power integration', 'Heavy-duty commercial engineering', 'Maximum capability motors', 'Protected cabins'],
      benefits: 'Created with protected cabins, maximum capability motors, moreover tailor made interiors, our service elevators enable magnanimous vertical transport of goods without compromising safety or adaptability.'
    },
    {
      icon: Activity,
      title: "Noise & Vibration Control",
      description: "At Yatra Elevators, Yatra's Passenger Elevators are comprehensively designed to serve serene, calm and most significant vertical mobility in diverse architectural environments to provide smooth, safe, and energy-effective vertical mobility for residential and commercial buildings.",
      features: ['Noise-optimized control systems', 'Precision sensors', 'Vibration detection system', 'Advanced monitoring devices'],
      benefits: 'Established with user eye-catching design, stylistic appeal, appearance standards by integrating motor and precision, sensors and noise detection system, control systems, monitoring devices.'
    },
    {
      icon: Shield,
      title: "Anti-Microbial Features for Safety",
      description: "At Yatra Elevators, safety is first and foremost essential to maintain hygiene, Anti-microbial Features for safety, eradicating microbial creatures through biodegradable chemicals. Our Elevators not only provide elegant and good feel, but also deliver safety by enhancing the ability to handle any problem regarding safety issues.",
      features: ['Antimicrobial surfaces', 'Biodegradable chemicals', 'Hygiene maintenance', 'Safety enhancement'],
      benefits: 'Going beyond the safety measures we focus on healthy and powerful life to lead, uplift and engross many good lifestyles.'
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Systems",
      description: "Yatra elevators offer incredible and highly advanced response systems, though it is not just for the purpose of safety but also for security and incorporating accountability by yatra's intelligent sensor–based effortless alerts and connectivity for emergency Response Systems.",
      features: ['Intelligent sensor-based alerts', 'Emergency connectivity', 'Water alert regulatory system', 'Control system coordination'],
      benefits: 'These response Systems protect precious lives. Our Intelligent response System coordinates the control system and acts as an emergency System also equipped with water alert regulatory System.'
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration for Users",
      description: "At Yatra Elevators, we understand people to give convenience and comfortness by integrating Mobile app technology for users. Technology has evolved drastically in this developing era where everything has digitalized, that's why convenience mobile and charging points and energy saving Systems.",
      features: ['Mobile app technology', 'Convenience features', 'Charging points', 'Energy saving systems'],
      benefits: 'Whether you are a resident or builder, everyone should have to utilize technology in day to day life professionally. This System Mobile App Integration for Users from Yatra transforms lives from underprivileged communities to Sophisticated Communities where every futuristic goal can be accomplished.'
    },
    {
      icon: Shield,
      title: "Fire-Resistant Design Options",
      description: "We at Yatra Elevators, light up many lives through our programs, deliverability, and systematic approach. These facilities are ideal for safety and moreover diminishes life threat in any place. These fire-resistant design Options aim at clearing out the fear of uncertainty and provide peace of mind through protection and effortless evacuation and safe places.",
      features: ['Fire-resistant materials', 'Safety protection systems', 'Effortless evacuation features', 'Safe place provisions'],
      benefits: 'At Yatra our products are designed in such a way that they safeguard lives with exceptional protection and security. We strongly believe that the real progress is not just quantified by technological innovation, but, by the positive influence and enhancement we create in the communities we serve.'
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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Innovation & Technology</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Leading the future of vertical mobility with cutting-edge technology, smart integration, 
            and sustainable solutions that redefine elevator and escalator experiences.
          </p>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Technological Innovations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our advanced technologies are revolutionizing vertical transportation 
              with smart, efficient, and sustainable solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <div key={index} className="bg-card rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-card-foreground">{innovation.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {innovation.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-card-foreground">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {innovation.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Impact:</h4>
                        <p className="text-muted-foreground text-sm">{innovation.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Safety & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Safety is our top priority. Every Yatra product meets the highest international 
              standards and incorporates multiple layers of protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center bg-card p-8 rounded-2xl shadow-lg border border-border">
                  <Icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
