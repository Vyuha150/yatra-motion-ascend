import React, { useEffect, useRef } from 'react';
import { Building2, RefreshCw, Shield, Settings, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SolutionsShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.solution-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Building2,
      title: "New Installations",
      description: "End-to-end installation solutions with maximum safety guidelines and configured security protocols. From advisory sessions to final implementation.",
      features: [
        "Complete site assessment and planning",
        "Custom design and engineering",
        "Professional installation team",
        "Safety compliance certification",
        "Post-installation support",
        "Quality assurance testing"
      ],
      highlight: "Zero compromise on safety standards",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: RefreshCw,
      title: "Modernization & Upgrades",
      description: "Transform legacy systems into high-performance, future-ready mobility solutions with cutting-edge technology integration.",
      features: [
        "Smart technology integration",
        "Energy efficiency improvements",
        "Enhanced safety features",
        "Minimal operational disruption",
        "Extended equipment lifespan",
        "Future-proof solutions"
      ],
      highlight: "Up to 50% energy savings guaranteed",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Maintenance & AMC",
      description: "Comprehensive maintenance services with 24/7 support, real-time monitoring, and proactive maintenance protocols.",
      features: [
        "24/7 technical support",
        "Preventive maintenance schedules",
        "Real-time monitoring systems",
        "Emergency response team",
        "Genuine spare parts guarantee",
        "Performance optimization"
      ],
      highlight: "99.9% uptime reliability",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailor-made solutions for architects, builders, and institutions with unique requirements and specialized applications.",
      features: [
        "Architectural integration",
        "Load-specific customization",
        "Aesthetic customization",
        "Space optimization",
        "Special environment adaptation",
        "Compliance consulting"
      ],
      highlight: "Unlimited design possibilities",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Smart Integration",
      description: "IoT, AI, and mobile app integration for intelligent vertical mobility with predictive maintenance and user convenience.",
      features: [
        "AI-powered predictive analytics",
        "IoT connectivity and monitoring",
        "Mobile app control",
        "Energy optimization algorithms",
        "User behavior analytics",
        "Remote diagnostics"
      ],
      highlight: "Next-generation smart mobility",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl mb-8">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Featured Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive vertical mobility solutions designed to meet every requirement, 
            from new installations to smart integrations
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`solution-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden ${index < 2 ? 'xl:col-span-1' : index === 2 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
            >
              <CardHeader className="relative pb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-5`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </CardTitle>
                  <Badge variant="outline" className={`bg-gradient-to-r ${solution.color} text-white border-0 text-xs`}>
                    {solution.highlight}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${solution.color} hover:shadow-lg transition-all duration-300 border-0`}
                  size="lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary via-blue-600 to-primary rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Solutions by Numbers</h3>
            <p className="text-xl text-white/90">Delivering excellence across every project</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;