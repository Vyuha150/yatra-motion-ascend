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
      description: "Real-time data, AI-powered systems, and user behavior tracking redefine elevator intelligence.",
      features: ['Real-time Data Analytics', 'AI-Powered Optimization', 'User Behavior Tracking', 'Predictive Analytics'],
      benefits: 'Reduces wait times by 35% and optimizes energy consumption through intelligent scheduling.'
    },
    {
      icon: Leaf,
      title: "Energy Efficiency",
      description: "Regenerative drives and low-consumption systems lower carbon footprints significantly.",
      features: ['Regenerative Drives', 'Low-Power Motors', 'LED Lighting Systems', 'Smart Standby Modes'],
      benefits: 'Achieves up to 50% energy savings compared to conventional elevator systems.'
    },
    {
      icon: Activity,
      title: "Noise & Vibration Control",
      description: "Advanced technology ensures a peaceful and stable ride experience.",
      features: ['Sound Dampening Materials', 'Precision Engineering', 'Vibration Isolation', 'Quiet Motors'],
      benefits: 'Reduces noise levels to below 45dB for ultra-quiet operation in residential settings.'
    },
    {
      icon: Shield,
      title: "Anti-Microbial Features",
      description: "Biodegradable coatings ensure hygienic elevator cabins for health-conscious environments.",
      features: ['Antimicrobial Surfaces', 'Air Purification Systems', 'Touchless Controls', 'UV Sanitization'],
      benefits: 'Eliminates 99.9% of bacteria and viruses on elevator surfaces for enhanced safety.'
    },
    {
      icon: AlertTriangle,
      title: "Emergency Systems",
      description: "Smart alerts, rescue systems, and water detection enhance safety during emergencies.",
      features: ['Smart Alert Systems', 'Emergency Communication', 'Water Detection', 'Automatic Rescue'],
      benefits: 'Ensures passenger safety with 24/7 monitoring and immediate emergency response.'
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration",
      description: "Smartphone apps for control, diagnostics, and enhanced convenience.",
      features: ['Remote Control', 'Maintenance Alerts', 'Usage Analytics', 'Destination Selection'],
      benefits: 'Provides seamless user experience with personalized elevator control and monitoring.'
    },
    {
      icon: AlertTriangle,
      title: "Fire-Resistant Design",
      description: "Fire and seismic-compliant materials ensure safe evacuation and protection.",
      features: ['Fire-Rated Materials', 'Seismic Compliance', 'Emergency Evacuation', 'Heat-Resistant Components'],
      benefits: 'Meets all international fire safety standards for maximum protection during emergencies.'
    }
  ];

  const safetyFeatures = [
    {
      title: "Safety First Priority",
      description: "Every elevator adheres to strict global and national standards ensuring maximum safety.",
      icon: Shield
    },
    {
      title: "Regulatory Compliance",
      description: "Certified by BIS, CE, and NBC for safety, quality, and environmental standards.",
      icon: Settings
    },
    {
      title: "Built-in Safety Features",
      description: "Includes ARD, anti-roll mechanisms, microbial control, and advanced safety systems.",
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
            <h2 className="text-4xl font-bold mb-6 text-foreground">Technological Innovations</h2>
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
            <h2 className="text-4xl font-bold mb-6 text-foreground">Safety & Compliance</h2>
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
          <h2 className="text-4xl font-bold mb-6 text-primary">Experience the Future Today</h2>
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
