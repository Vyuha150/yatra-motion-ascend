import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Building2, 
  Hospital, 
  ShoppingCart, 
  Hotel,
  GraduationCap,
  Plane,
  Building,
  Factory,
  Home,
  Users,
  Star,
  CheckCircle,
  Target,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Commercial Buildings",
      description: "Comprehensive elevator solutions for office complexes, corporate headquarters, and business centers.",
      icon: Building2,
      color: "text-blue-500",
      applications: [
        "Office towers and corporate buildings",
        "Business centers and coworking spaces", 
        "Mixed-use developments",
        "Financial institutions and banks"
      ],
      features: [
        "High-speed passenger elevators",
        "Destination control systems",
        "Energy-efficient operations",
        "Advanced security integration"
      ],
      benefits: [
        "Enhanced productivity",
        "Professional aesthetics",
        "Reduced wait times",
        "Energy cost savings"
      ]
    },
    {
      title: "Healthcare Facilities",
      description: "Specialized elevator systems designed for hospitals, clinics, and medical facilities with strict hygiene requirements.",
      icon: Hospital,
      color: "text-red-500",
      applications: [
        "Hospitals and medical centers",
        "Nursing homes and care facilities",
        "Rehabilitation centers",
        "Research laboratories"
      ],
      features: [
        "Anti-bacterial surfaces and coatings",
        "Stretcher-compatible design",
        "Emergency power backup systems",
        "Smooth and precise leveling"
      ],
      benefits: [
        "Enhanced patient safety",
        "Infection control compliance",
        "Emergency preparedness",
        "Staff efficiency improvement"
      ]
    },
    {
      title: "Retail & Shopping Centers",
      description: "High-capacity escalators and elevators designed for busy retail environments and shopping complexes.",
      icon: ShoppingCart,
      color: "text-green-500",
      applications: [
        "Shopping malls and retail centers",
        "Department stores",
        "Supermarkets and hypermarkets",
        "Entertainment complexes"
      ],
      features: [
        "High-traffic capacity systems",
        "Aesthetic glass and LED lighting",
        "Energy-efficient drives",
        "Advanced safety sensors"
      ],
      benefits: [
        "Improved customer flow",
        "Enhanced shopping experience",
        "Operational cost reduction",
        "Brand image enhancement"
      ]
    },
    {
      title: "Hospitality & Hotels",
      description: "Premium elevator solutions for hotels, resorts, and hospitality establishments focusing on guest comfort.",
      icon: Hotel,
      color: "text-purple-500",
      applications: [
        "Luxury hotels and resorts",
        "Business hotels",
        "Convention centers",
        "Restaurants and dining establishments"
      ],
      features: [
        "Quiet operation technology",
        "Premium interior finishes",
        "Customizable lighting systems",
        "VIP and service elevator options"
      ],
      benefits: [
        "Enhanced guest experience",
        "Luxury brand positioning",
        "Operational efficiency",
        "Maintenance cost optimization"
      ]
    },
    {
      title: "Educational Institutions",
      description: "Safe and reliable vertical transportation for schools, colleges, and educational facilities.",
      icon: GraduationCap,
      color: "text-indigo-500",
      applications: [
        "Universities and colleges",
        "Schools and educational campuses",
        "Libraries and research centers",
        "Student accommodation buildings"
      ],
      features: [
        "Safety-first design philosophy",
        "Vandal-resistant components",
        "Emergency communication systems",
        "Energy-efficient operation"
      ],
      benefits: [
        "Student and staff safety",
        "Accessibility compliance",
        "Long-term reliability",
        "Educational budget optimization"
      ]
    },
    {
      title: "Transportation Hubs",
      description: "Heavy-duty escalators and moving walkways for airports, railway stations, and metro systems.",
      icon: Plane,
      color: "text-orange-500",
      applications: [
        "Airports and aviation terminals",
        "Railway and metro stations",
        "Bus terminals and transport hubs",
        "Port and maritime facilities"
      ],
      features: [
        "Extra-heavy duty construction",
        "Weather-resistant design",
        "24/7 continuous operation capability",
        "Advanced monitoring systems"
      ],
      benefits: [
        "Massive passenger capacity",
        "Minimal downtime",
        "Weather durability",
        "Operational excellence"
      ]
    },
    {
      title: "Residential Complexes",
      description: "Comfortable and efficient elevator solutions for apartments, condominiums, and residential developments.",
      icon: Home,
      color: "text-teal-500",
      applications: [
        "High-rise residential apartments",
        "Condominiums and co-housing",
        "Senior living communities",
        "Private residential buildings"
      ],
      features: [
        "Whisper-quiet operation",
        "Space-optimized designs",
        "Home automation integration",
        "Child safety features"
      ],
      benefits: [
        "Enhanced living comfort",
        "Property value increase",
        "Family safety assurance",
        "Energy efficiency savings"
      ]
    },
    {
      title: "Industrial Facilities",
      description: "Heavy-duty freight elevators and industrial lifts for manufacturing plants and warehouses.",
      icon: Factory,
      color: "text-yellow-600",
      applications: [
        "Manufacturing plants and factories",
        "Warehouses and distribution centers",
        "Mining and extraction facilities",
        "Automotive production plants"
      ],
      features: [
        "High load capacity design",
        "Industrial-grade controls",
        "Corrosion-resistant materials",
        "Explosion-proof options available"
      ],
      benefits: [
        "Heavy-duty reliability",
        "Production efficiency",
        "Workplace safety enhancement",
        "Operational cost reduction"
      ]
    }
  ];

  const industryStats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Industries Served", icon: Globe },
    { number: "95%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Target }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry-specific requirements and regulatory compliance standards.",
      icon: Award,
      color: "text-blue-500"
    },
    {
      title: "Customized Solutions",
      description: "Tailored elevator and escalator solutions designed to meet unique industry demands.",
      icon: Target,
      color: "text-green-500"
    },
    {
      title: "Proven Track Record",
      description: "Successful installations across diverse industries with satisfied customers worldwide.",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "End-to-End Service",
      description: "Complete lifecycle support from consultation and design to installation and maintenance.",
      icon: Users,
      color: "text-orange-500"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industries <span className="text-yellow-400">We Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Specialized vertical transportation solutions for every industry sector
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {industryStats.map((stat, index) => (
                <Badge key={index} variant="outline" className="text-white border-white px-4 py-2">
                  <stat.icon className="w-4 h-4 mr-2" />
                  {stat.number} {stat.label}
                </Badge>
              ))}
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Building2 className="h-10 w-10 inline-block mr-3 text-blue-500" />
                Comprehensive Industry Coverage
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From healthcare facilities to industrial plants, we provide specialized elevator and escalator solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <industry.icon className={`w-8 h-8 ${industry.color} mr-3`} />
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-3">Applications:</h4>
                      <div className="space-y-2">
                        {industry.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
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

        {/* Industry Statistics */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industry Leadership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industryStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <stat.icon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Yatra for Your Industry?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <reason.icon className={`w-16 h-16 ${reason.color} mx-auto mb-6`} />
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950/20 dark:to-blue-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Success Stories Across Industries
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped organizations across various industries achieve their vertical transportation goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Hospital className="w-16 h-16 text-red-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Healthcare Excellence</h3>
                  <p className="text-muted-foreground mb-6">
                    Installed specialized hospital elevators in India's leading medical facilities, improving patient care and operational efficiency.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <ShoppingCart className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Retail Innovation</h3>
                  <p className="text-muted-foreground mb-6">
                    Enhanced customer experience in premium shopping centers with high-capacity escalators and smart elevator systems.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Corporate Success</h3>
                  <p className="text-muted-foreground mb-6">
                    Deployed energy-efficient elevator solutions in major corporate headquarters, reducing operational costs by 35%.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our experts design the perfect vertical transportation solution for your specific industry needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Industry Guide
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Join industry leaders who have chosen Yatra for their vertical transportation needs
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Industries;
