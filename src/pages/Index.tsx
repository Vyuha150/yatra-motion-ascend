
import React, { useState } from 'react';
import PreLoader from '../components/PreLoader';
import FloorIndicator from '../components/FloorIndicator';
import ElevatorControlPanel from '../components/ElevatorControlPanel';
import ElevatorFloor from '../components/ElevatorFloor';
import FloatingChat from '../components/FloatingChat';
import { Phone, Download, MessageCircle, Building2, Wrench, Users, Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '../components/ContactModal';
import HeaderAuth from '../components/HeaderAuth';
import AdminButton from '../components/AdminButton';
import ContactCTA from '../components/ContactCTA';

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [direction, setDirection] = useState<'up' | 'down' | 'stationary'>('stationary');
  const totalFloors = 5;

  const handleLoadComplete = () => {
    setShowLoader(false);
  };

  const handleFloorChange = (floor: number, dir: 'up' | 'down') => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentFloor(floor);
      setTimeout(() => setDirection('stationary'), 1000);
    }, 200);
  };

  const handleEmergencyCall = () => {
    window.open('tel:+911234567890');
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Yatra_Elevators_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showLoader) {
    return <PreLoader onLoadComplete={handleLoadComplete} />;
  }

  const floors = [
    {
      number: 1,
      title: "Welcome Aboard",
      subtitle: "Journey Begins Here - Your Vertical Mobility Partner",
      content: (
        <div className="max-w-6xl mx-auto">
          {/* Header with Auth */}
          <div className="flex justify-between items-center mb-12">
            <div className="steel-panel px-6 py-3 rounded-lg border border-accent/40">
              <img 
                src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
                alt="Yatra Elevators Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <AdminButton />
              <HeaderAuth />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-foreground mb-6">
              <span className="block mb-2">YATRA</span>
              <span className="text-accent">ELEVATORS</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Premium elevator solutions with lifetime service commitment. 
              Experience excellence in vertical transportation across South India.
            </p>

            {/* CTA Buttons */}
            <ContactCTA 
              onDownloadBrochure={handleDownloadBrochure}
              onEmergencyCall={handleEmergencyCall}
            />
          </div>

          {/* Elevator Types Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Commercial", desc: "High-rise buildings & offices" },
              { icon: Users, title: "Residential", desc: "Apartments & condominiums" },
              { icon: Wrench, title: "Industrial", desc: "Freight & heavy-duty applications" }
            ].map((type, index) => (
              <div key={index} className="steel-panel p-6 rounded-lg border border-accent/30 text-center group hover:button-glow transition-all duration-300">
                <type.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Our Elevators",
      subtitle: "Premium Quality Sales - Built for Every Need",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Passenger Elevators", capacity: "8-15 persons", price: "₹8-15 Lakhs" },
              { name: "Freight Elevators", capacity: "1000-5000 kg", price: "₹12-25 Lakhs" },
              { name: "Hospital Elevators", capacity: "Bed + 4 persons", price: "₹10-18 Lakhs" },
              { name: "Home Elevators", capacity: "3-4 persons", price: "₹5-10 Lakhs" }
            ].map((elevator, index) => (
              <div key={index} className="steel-panel p-6 rounded-lg border border-accent/30 group hover:button-glow transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-3">{elevator.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="led-display">Capacity: {elevator.capacity}</div>
                  <div className="text-accent font-bold">{elevator.price}</div>
                </div>
                <Button className="w-full mt-4 elevator-button">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Lifetime Service",
      subtitle: "Round-the-Clock Support - Your Safety, Our Priority",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="steel-panel p-8 rounded-lg border border-accent/30 text-center">
              <div className="led-display text-3xl font-bold mb-4">24/7</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Emergency Support</h3>
              <p className="text-muted-foreground">Round-the-clock emergency response team</p>
            </div>
            <div className="steel-panel p-8 rounded-lg border border-accent/30 text-center">
              <div className="led-display text-3xl font-bold mb-4">AMC</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Maintenance Plans</h3>
              <p className="text-muted-foreground">Preventive maintenance & regular inspections</p>
            </div>
            <div className="steel-panel p-8 rounded-lg border border-accent/30 text-center">
              <div className="led-display text-3xl font-bold mb-4">IoT</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Smart Monitoring</h3>
              <p className="text-muted-foreground">Real-time performance tracking & alerts</p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Why Yatra?",
      subtitle: "Excellence in Every Vertical Journey",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Time-bound delivery guarantee",
                "IS:14665 safety compliance",
                "Customer-first policy",
                "Pan-India service network"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 steel-panel p-4 rounded-lg border border-accent/30">
                  <div className="w-3 h-3 bg-accent rounded-full animate-button-pulse"></div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="steel-panel p-8 rounded-lg border border-accent/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground mb-6">
                With over a decade of excellence, Yatra Elevators stands as South India's 
                trusted partner for vertical mobility solutions. Our commitment extends 
                beyond installation to lifetime support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="led-display text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="led-display text-2xl font-bold">99%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Get in Touch",
      subtitle: "Let's Elevate Your Space Together",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="steel-panel p-8 rounded-lg border border-accent/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-foreground">+91 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Contact className="h-5 w-5 text-accent" />
                    <span className="text-foreground">info@yatraelevators.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Building2 className="h-5 w-5 text-accent" />
                    <span className="text-foreground">Bangalore | Chennai | Coimbatore</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <ContactModal buttonText="Request Quote">
                    <Button className="w-full elevator-button">
                      <Phone className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </ContactModal>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={handleDownloadBrochure}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-accent hover:bg-accent/20"
                    onClick={handleEmergencyCall}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Emergency Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="cabin-bg relative overflow-hidden">
      {/* Floor Indicator */}
      <FloorIndicator 
        currentFloor={currentFloor} 
        totalFloors={totalFloors} 
        direction={direction}
      />

      {/* Elevator Control Panel */}
      <ElevatorControlPanel
        currentFloor={currentFloor}
        totalFloors={totalFloors}
        onFloorChange={handleFloorChange}
        onEmergencyCall={handleEmergencyCall}
      />

      {/* Floors */}
      {floors.map((floor) => (
        <ElevatorFloor
          key={floor.number}
          floorNumber={floor.number}
          title={floor.title}
          subtitle={floor.subtitle}
          isActive={currentFloor === floor.number}
          direction={direction}
        >
          {floor.content}
        </ElevatorFloor>
      ))}

      {/* Floating Chat */}
      <FloatingChat />
    </div>
  );
};

export default Index;
