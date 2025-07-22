import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Wrench, 
  Shield, 
  Clock, 
  Settings, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  Calendar,
  Hammer,
  RefreshCw,
  FileText,
  Zap,
  Search,
  Building2,
  Star,
  Award
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: "Installation Services",
      description: "Professional installation of elevators and escalators with precision engineering and safety compliance.",
      features: [
        "Site survey and assessment",
        "Custom installation planning",
        "Safety compliance verification",
        "Quality assurance testing",
        "Performance optimization",
        "Documentation and certification"
      ],
      icon: Hammer,
      color: "text-blue-500",
      benefits: [
        "Certified technicians",
        "Adherence to safety standards",
        "Minimal disruption",
        "Complete documentation"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance programs to ensure optimal performance, safety, and longevity of your equipment.",
      features: [
        "Preventive maintenance schedules",
        "24/7 emergency support",
        "Remote monitoring systems",
        "Predictive maintenance",
        "Performance diagnostics",
        "Spare parts management"
      ],
      icon: Wrench,
      color: "text-green-500",
      benefits: [
        "Extended equipment life",
        "Reduced downtime",
        "Cost-effective operations",
        "Enhanced safety"
      ]
    },
    {
      title: "Modernization",
      description: "Upgrade your existing elevators with latest technology for improved efficiency, safety, and user experience.",
      features: [
        "Technology upgrades",
        "Energy efficiency improvements",
        "Safety system enhancements",
        "Aesthetic upgrades",
        "Control system modernization",
        "Accessibility improvements"
      ],
      icon: RefreshCw,
      color: "text-purple-500",
      benefits: [
        "Improved performance",
        "Energy savings",
        "Enhanced safety",
        "Modern aesthetics"
      ]
    },
    {
      title: "Repair Services",
      description: "Quick and reliable repair services to restore your elevator or escalator to optimal working condition.",
      features: [
        "Emergency repair services",
        "Diagnostic troubleshooting",
        "Component replacement",
        "System restoration",
        "Performance testing",
        "Quality verification"
      ],
      icon: Wrench,
      color: "text-red-500",
      benefits: [
        "Rapid response",
        "Expert diagnosis",
        "Quality parts",
        "Guaranteed repairs"
      ]
    },
    {
      title: "Consultation & Design",
      description: "Expert consultation services for new projects including design, planning, and technical specifications.",
      features: [
        "Project planning and design",
        "Technical specifications",
        "Code compliance review",
        "Traffic analysis",
        "Energy efficiency planning",
        "Cost optimization"
      ],
      icon: FileText,
      color: "text-indigo-500",
      benefits: [
        "Expert guidance",
        "Optimized solutions",
        "Code compliance",
        "Cost efficiency"
      ]
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive safety inspections and certifications to ensure compliance with industry standards.",
      features: [
        "Statutory inspections",
        "Safety compliance audits",
        "Performance assessments",
        "Documentation and reporting",
        "Corrective action plans",
        "Certification services"
      ],
      icon: Shield,
      color: "text-orange-500",
      benefits: [
        "Regulatory compliance",
        "Safety assurance",
        "Risk mitigation",
        "Professional certification"
      ]
    }
  ];

  const specializedServices = [
    {
      category: "Emergency Services",
      services: [
        "24/7 emergency response",
        "Trapped passenger rescue",
        "Emergency power backup",
        "System failure diagnostics",
        "Rapid repair solutions"
      ],
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      category: "Remote Monitoring",
      services: [
        "IoT-based monitoring systems",
        "Real-time performance tracking",
        "Predictive analytics",
        "Automated alerts",
        "Performance reporting"
      ],
      icon: Search,
      color: "text-blue-500"
    },
    {
      category: "Energy Efficiency",
      services: [
        "Energy audit services",
        "Efficiency optimization",
        "LED lighting upgrades",
        "Regenerative drive installation",
        "Power consumption analysis"
      ],
      icon: Zap,
      color: "text-green-500"
    },
    {
      category: "Training Programs",
      services: [
        "Operator training",
        "Safety protocols training",
        "Emergency procedures",
        "Maintenance training",
        "Certification programs"
      ],
      icon: Award,
      color: "text-purple-500"
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Contact us via phone, email, or our online portal to discuss your requirements.",
      icon: Phone
    },
    {
      step: 2,
      title: "Assessment",
      description: "Our technical team conducts a thorough assessment of your needs and site conditions.",
      icon: Search
    },
    {
      step: 3,
      title: "Planning",
      description: "We develop a comprehensive service plan tailored to your specific requirements.",
      icon: FileText
    },
    {
      step: 4,
      title: "Execution",
      description: "Our certified technicians execute the service with precision and adherence to safety standards.",
      icon: Settings
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Thorough quality inspection and testing to ensure optimal performance and safety.",
      icon: CheckCircle
    },
    {
      step: 6,
      title: "Documentation",
      description: "Complete documentation and certification with ongoing support and maintenance scheduling.",
      icon: FileText
    }
  ];

  const maintenancePackages = [
    {
      name: "Basic Package",
      description: "Essential maintenance for standard operations",
      features: [
        "Monthly preventive maintenance",
        "Emergency repair service",
        "Basic spare parts coverage",
        "Performance reports"
      ],
      price: "Starting from ₹15,000/month",
      popular: false
    },
    {
      name: "Premium Package",
      description: "Comprehensive maintenance with enhanced features",
      features: [
        "Bi-weekly preventive maintenance",
        "24/7 emergency support",
        "Premium spare parts coverage",
        "Remote monitoring",
        "Energy efficiency reporting",
        "Modernization consultation"
      ],
      price: "Starting from ₹25,000/month",
      popular: true
    },
    {
      name: "Enterprise Package",
      description: "Full-service maintenance for commercial complexes",
      features: [
        "Weekly preventive maintenance",
        "Dedicated service engineer",
        "Complete spare parts coverage",
        "Advanced remote monitoring",
        "Energy optimization",
        "Annual modernization review",
        "Training programs"
      ],
      price: "Custom pricing",
      popular: false
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Comprehensive elevator and escalator services for complete peace of mind
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Emergency Support
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Safety Certified
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Expert Technicians
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Service <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Building2 className="h-10 w-10 inline-block mr-3 text-blue-500" />
                Comprehensive Service Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From installation to maintenance, we provide end-to-end services for all your vertical transportation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, idx) => (
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

        {/* Specialized Services */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950/20 dark:to-blue-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specialized Service Categories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach ensuring quality service delivery from initial contact to ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceProcess.map((process, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
                  <CardContent className="p-8">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                    </div>
                    <process.icon className="w-12 h-12 text-blue-500 mx-auto mb-4 mt-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{process.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Packages */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Maintenance Packages
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the maintenance package that best suits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {maintenancePackages.map((pkg, index) => (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow ${pkg.popular ? 'border-2 border-blue-500 transform scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{pkg.name}</CardTitle>
                    <p className="text-center text-muted-foreground">{pkg.description}</p>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    <Button className={`w-full mt-6 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                      Choose Package <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                24/7 Emergency Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Round-the-clock emergency response for critical situations. Our expert technicians are always ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Call Now</h3>
                  <p className="text-2xl font-bold text-red-600">1800-123-YATRA</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Response Time</h3>
                  <p className="text-2xl font-bold text-orange-600">&lt; 2 Hours</p>
                  <p className="text-sm text-muted-foreground">Average response</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Coverage</h3>
                  <p className="text-2xl font-bold text-green-600">Pan India</p>
                  <p className="text-sm text-muted-foreground">Service network</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Support
            </Button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your service requirements and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Service <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Quote
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Join thousands of satisfied customers who trust our expert service team
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Services;
