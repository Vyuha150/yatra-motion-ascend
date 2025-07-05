
import React from 'react';
import { ArrowLeft, Home, Users, Truck, Zap, Settings, Wrench, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Home,
      title: "Home Elevators",
      description: "Compact and stylish elevators designed for residential buildings and homes.",
      features: ["Space-efficient design", "Quiet operation", "Energy efficient", "Custom finishes"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Passenger Elevators",
      description: "High-capacity elevators for commercial buildings and public spaces.",
      features: ["High-speed operation", "Large capacity", "Advanced safety features", "Smooth ride quality"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
    },
    {
      icon: Truck,
      title: "Freight Elevators",
      description: "Heavy-duty elevators designed for transporting goods and materials.",
      features: ["Heavy load capacity", "Durable construction", "Industrial-grade components", "Reliable operation"],
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "MRL Elevators",
      description: "Machine Room-Less elevators that save space and energy.",
      features: ["No machine room required", "Energy efficient", "Space-saving design", "Modern technology"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    }
  ];

  const services = [
    {
      icon: Settings,
      title: "Installation",
      description: "Professional installation services with quality assurance and timely completion."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to ensure optimal performance and safety."
    },
    {
      icon: RefreshCw,
      title: "Modernization",
      description: "Upgrade your existing elevators with latest technology and safety features."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Products & Services</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Discover our comprehensive range of elevator solutions designed to meet 
            every vertical transportation need with precision and reliability.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                    <product.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts can design and build custom elevator solutions 
            tailored to your specific requirements and space constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Request Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
