
import React from 'react';
import { ArrowRight, Home, Users, Truck, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Home Lifts",
      description: "Elegant residential elevators designed for modern homes with space-efficient MRL technology.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      features: ["Space Efficient", "Energy Saving", "Quiet Operation"]
    },
    {
      id: 2,
      title: "Passenger Lifts",
      description: "Commercial grade elevators for office buildings, malls, and high-rise structures.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      features: ["High Capacity", "Fast Speed", "Safety Certified"]
    },
    {
      id: 3,
      title: "Freight Lifts",
      description: "Heavy-duty cargo elevators built for industrial and commercial material handling.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      features: ["Heavy Load", "Durable Build", "Industrial Grade"]
    },
    {
      id: 4,
      title: "Service & Maintenance",
      description: "Comprehensive lifetime service with 24/7 support and preventive maintenance programs.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      features: ["24/7 Support", "Preventive Care", "Expert Technicians"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From residential homes to commercial complexes, we provide complete elevator solutions 
            with unmatched quality and lifetime service commitment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 p-3 bg-blue-600 rounded-full text-white transform transition-transform duration-300 group-hover:scale-110">
                    <product.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
