import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Wrench, Star, CheckCircle, Home, Building2, Hospital, Truck, ShoppingCart, Plane, Users, Clock } from 'lucide-react';

const Products = () => {
  const elevatorTypes = [
    {
      title: "Passenger Elevators",
      description: "Smooth, quiet, and reliable vertical transportation for buildings of all sizes. Engineered for comfort and efficiency.",
      features: ["Energy efficient drives", "Smart destination control", "Emergency communication", "Premium cabin finishes", "Anti-vandal buttons", "LED lighting systems"],
      icon: Building2,
      capacity: "5-30 persons",
      speed: "0.5-4.0 m/s",
      load: "375-2000 kg",
      applications: ["Office buildings", "Residential complexes", "Hotels", "Shopping centers"]
    },
    {
      title: "Freight Elevators",
      description: "Heavy-duty elevators designed for transporting goods, materials, and equipment with maximum reliability.",
      features: ["High load capacity", "Reinforced car construction", "Industrial-grade controls", "Bi-parting doors", "Manual loading doors", "Overload protection"],
      icon: Truck,
      capacity: "Up to 5000 kg",
      speed: "0.25-1.0 m/s",
      load: "1000-5000 kg",
      applications: ["Warehouses", "Manufacturing plants", "Logistics centers", "Industrial facilities"]
    },
    {
      title: "Home Elevators",
      description: "Compact and elegant elevators perfect for residential applications, combining luxury with space efficiency.",
      features: ["Space-saving design", "Whisper-quiet operation", "Easy installation", "Premium finishes", "Personalized controls", "Battery backup"],
      icon: Home,
      capacity: "3-8 persons",
      speed: "0.15-0.6 m/s",
      load: "250-630 kg",
      applications: ["Private homes", "Villas", "Apartments", "Duplex houses"]
    },
    {
      title: "Hospital Elevators",
      description: "Specialized elevators designed for medical facilities with enhanced hygiene and emergency features.",
      features: ["Anti-bacterial surfaces", "Stretcher compatibility", "Independent service", "Emergency power supply", "Smooth leveling", "Wide door openings"],
      icon: Hospital,
      capacity: "13-21 persons",
      speed: "1.0-1.75 m/s",
      load: "1000-1600 kg",
      applications: ["Hospitals", "Medical centers", "Nursing homes", "Rehabilitation centers"]
    },
    {
      title: "Service Elevators",
      description: "Dedicated service elevators for staff and maintenance operations in commercial buildings.",
      features: ["Durable construction", "Simple controls", "Easy maintenance", "Fire service operation", "Key switch controls", "Load weighing device"],
      icon: Wrench,
      capacity: "8-16 persons",
      speed: "0.5-1.75 m/s",
      load: "630-1275 kg",
      applications: ["Hotels", "Restaurants", "Office buildings", "Hospitals"]
    },
    {
      title: "Panoramic Elevators",
      description: "Glass-walled elevators offering scenic views and architectural elegance for premium installations.",
      features: ["Glass cabin walls", "LED mood lighting", "Weather resistant", "Scenic ride experience", "Architectural integration", "Custom glass options"],
      icon: Star,
      capacity: "6-20 persons",
      speed: "0.5-2.5 m/s",
      load: "450-1600 kg",
      applications: ["Shopping malls", "Hotels", "Office towers", "Tourist attractions"]
    }
  ];

  const escalatorTypes = [
    {
      title: "Commercial Escalators",
      description: "High-traffic escalators for shopping centers, airports, and public buildings with superior passenger flow.",
      features: ["High passenger capacity", "Energy-efficient drive", "Safety brush borders", "LED step lighting", "Automatic lubrication", "Glass balustrades"],
      icon: ShoppingCart,
      capacity: "6,750-10,000 persons/hour",
      angle: "30° or 35°",
      speed: "0.5-0.65 m/s",
      applications: ["Shopping malls", "Department stores", "Commercial complexes", "Exhibition halls"]
    },
    {
      title: "Heavy Duty Escalators",
      description: "Robust escalators designed for extreme high-traffic environments and continuous operation.",
      features: ["Reinforced truss structure", "Weather resistant design", "24/7 operation capability", "Advanced monitoring system", "High-grade materials", "Emergency stop systems"],
      icon: Plane,
      capacity: "9,000-13,500 persons/hour",
      angle: "30° or 35°",
      speed: "0.5-0.75 m/s",
      applications: ["Airports", "Metro stations", "Railway terminals", "Large public venues"]
    },
    {
      title: "Moving Walkways",
      description: "Horizontal and inclined moving walkways for convenient pedestrian transportation over long distances.",
      features: ["Smooth horizontal movement", "Anti-slip surfaces", "Variable speed control", "Safety sensors", "Weather protection", "Low maintenance design"],
      icon: Users,
      capacity: "4,500-9,000 persons/hour",
      angle: "0° to 12°",
      speed: "0.5-0.75 m/s",
      applications: ["Airports", "Large shopping centers", "Convention centers", "Long corridors"]
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
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Comprehensive range of elevators and escalators for every vertical transportation need
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Support
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Safety Certified
              </Badge>
              <Badge variant="outline" className="text-white border-white px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Energy Efficient
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Elevators Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Building2 className="h-10 w-10 inline-block mr-3 text-blue-500" />
                Elevator Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From residential homes to industrial facilities, our comprehensive elevator range provides safe, efficient, and reliable vertical transportation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {elevatorTypes.map((elevator, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <elevator.icon className="w-8 h-8 text-blue-500 mr-3" />
                      {elevator.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{elevator.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="secondary" className="justify-center">
                        <Users className="w-3 h-3 mr-1" />
                        {elevator.capacity}
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        <Zap className="w-3 h-3 mr-1" />
                        {elevator.speed}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {elevator.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {elevator.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
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

        {/* Escalators Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950/20 dark:to-blue-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <ArrowRight className="h-10 w-10 inline-block mr-3 text-purple-500 rotate-45" />
                Escalator & Moving Walkway Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Efficient horizontal and inclined transportation systems designed for high-traffic environments with superior safety and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {escalatorTypes.map((escalator, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <escalator.icon className="w-8 h-8 text-purple-500 mr-3" />
                      {escalator.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{escalator.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Badge variant="secondary" className="justify-center">
                        <Users className="w-3 h-3 mr-1" />
                        {escalator.capacity}
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        <Zap className="w-3 h-3 mr-1" />
                        {escalator.speed}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {escalator.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {escalator.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
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

        {/* Technical Specifications Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Excellence
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{spec.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {spec.items.map((item, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground p-2 bg-muted/50 rounded">
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Yatra Elevators?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Safety First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced safety systems including emergency brakes, overspeed governors, and comprehensive safety circuits ensure maximum passenger protection with multiple backup systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Zap className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Energy Efficient</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    State-of-the-art regenerative drives and LED lighting systems reduce energy consumption by up to 40% while maintaining optimal performance and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Clock className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">24/7 Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Round-the-clock maintenance and support services with remote monitoring, predictive maintenance, and emergency response teams ensure maximum uptime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Building?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a customized vertical transportation solution that meets your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Join thousands of satisfied customers who trust Yatra for their vertical transportation needs
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Products;
