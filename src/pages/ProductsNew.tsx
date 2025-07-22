import React, { useState, useEffect } from 'react';
import { Home, Users, Truck, Zap, Settings, Wrench, RefreshCw, Loader2, Building, Hospital, ShoppingCart, Car, Eye, Cog, Droplets, Activity, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { productService, Product } from '@/services/productService';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Comprehensive product categories with detailed descriptions
  const productCategories = [
    {
      id: 'passenger_elevators',
      icon: Users,
      title: 'Passenger Elevators',
      description: 'Smooth, stylish, and safe elevators for residential and commercial spaces with noise control and smart safety features.',
      features: ['Noise Control Technology', 'Smart Safety Features', 'Energy Efficient', 'Modern Design'],
      applications: ['Residential Buildings', 'Commercial Complexes', 'Office Buildings'],
      image: 'https://images.unsplash.com/photo-1571783002906-58dffa1ab604?w=400&h=300&fit=crop'
    },
    {
      id: 'home_elevators',
      icon: Home,
      title: 'Home/Residential Elevators',
      description: 'Custom-fit lifts for villas and duplexes, featuring compact design, hygiene-focused surfaces, and modern aesthetics.',
      features: ['Compact Design', 'Hygiene-Focused Surfaces', 'Modern Aesthetics', 'Space Optimized'],
      applications: ['Private Villas', 'Duplex Homes', 'Multi-story Residences'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
    },
    {
      id: 'hospital_elevators',
      icon: Hospital,
      title: 'Hospital/Bed Elevators',
      description: 'Designed for patient comfort and hygiene, these elevators ensure smooth, silent, and medically safe transport.',
      features: ['Patient Comfort', 'Hygiene Priority', 'Silent Operation', 'Medical Safety'],
      applications: ['Hospitals', 'Medical Centers', 'Healthcare Facilities'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop'
    },
    {
      id: 'freight_elevators',
      icon: Truck,
      title: 'Freight/Service Elevators',
      description: 'Built for durability and high load capacity, ideal for industrial use with secure, energy-efficient systems.',
      features: ['High Load Capacity', 'Durable Construction', 'Energy Efficient', 'Industrial Grade'],
      applications: ['Warehouses', 'Industrial Facilities', 'Service Buildings'],
      image: 'https://images.unsplash.com/photo-1586772002851-b0d22b31f33a?w=400&h=300&fit=crop'
    },
    {
      id: 'capsule_elevators',
      icon: Eye,
      title: 'Capsule Elevators',
      description: 'Panoramic lifts offering a 360-degree view, perfect for luxury settings with strong design and safety focus.',
      features: ['360-Degree Views', 'Luxury Design', 'Panoramic Experience', 'Premium Safety'],
      applications: ['Luxury Hotels', 'Shopping Malls', 'Premium Buildings'],
      image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=400&h=300&fit=crop'
    },
    {
      id: 'mrl_elevators',
      icon: Cog,
      title: 'MRL (Machine-Room Less) Elevators',
      description: 'Space-saving, highly efficient systems without a machine room, suited for architectural flexibility.',
      features: ['Space Saving', 'No Machine Room', 'Architectural Flexibility', 'High Efficiency'],
      applications: ['Modern Buildings', 'Space-Constrained Projects', 'Green Buildings'],
      image: 'https://images.unsplash.com/photo-1571783002906-58dffa1ab604?w=400&h=300&fit=crop'
    },
    {
      id: 'hydraulic_elevators',
      icon: Droplets,
      title: 'Hydraulic Elevators',
      description: 'Ideal for buildings with limited space, providing smooth mobility and top-tier safety.',
      features: ['Smooth Operation', 'Space Efficient', 'Top-Tier Safety', 'Reliable Performance'],
      applications: ['Low-Rise Buildings', 'Limited Space Projects', 'Retrofit Applications'],
      image: 'https://images.unsplash.com/photo-1571783002906-58dffa1ab604?w=400&h=300&fit=crop'
    },
    {
      id: 'commercial_escalators',
      icon: Activity,
      title: 'Commercial Escalators',
      description: 'Durable and customizable escalators with advanced safety for malls, offices, and public spaces.',
      features: ['Advanced Safety', 'Customizable Design', 'Durable Construction', 'Energy Efficient'],
      applications: ['Shopping Malls', 'Office Buildings', 'Public Spaces'],
      image: 'https://images.unsplash.com/photo-1555617981-dac3880e7ee5?w=400&h=300&fit=crop'
    },
    {
      id: 'transport_escalators',
      icon: Car,
      title: 'Public Transport Escalators',
      description: 'High-speed, energy-efficient escalators with smart sensors designed for large foot traffic in transport hubs.',
      features: ['High Speed', 'Smart Sensors', 'Heavy Traffic Capacity', 'Energy Efficient'],
      applications: ['Metro Stations', 'Airports', 'Railway Stations'],
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop'
    },
    {
      id: 'travelators',
      icon: ArrowRight,
      title: 'Travelators (Moving Walkways)',
      description: 'Streamlined walkways for airports and malls with anti-slip design and energy-saving tech.',
      features: ['Anti-Slip Design', 'Energy Saving', 'Streamlined Operation', 'High Capacity'],
      applications: ['Airports', 'Shopping Centers', 'Long Corridors'],
      image: 'https://images.unsplash.com/photo-1571783002906-58dffa1ab604?w=400&h=300&fit=crop'
    }
  ];

  // Comprehensive solutions based on the provided content
  const solutions = [
    {
      icon: Settings,
      title: "New Installations",
      description: "End-to-end elevator and escalator installation with safety compliance and modern design.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
      features: ['Complete Project Management', 'Safety Compliance', 'Modern Design Integration', 'Quality Assurance']
    },
    {
      icon: RefreshCw,
      title: "Modernization & Upgrades",
      description: "Revamping old systems into modern, energy-efficient, and user-friendly solutions.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
      features: ['System Upgrades', 'Energy Efficiency', 'User Experience Enhancement', 'Technology Integration']
    },
    {
      icon: Wrench,
      title: "Maintenance & AMC",
      description: "Annual contracts with 24/7 support, preventive checks, and real-time monitoring ensure reliability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      features: ['24/7 Support', 'Preventive Maintenance', 'Real-time Monitoring', 'Annual Contracts']
    },
    {
      icon: Cog,
      title: "Customized Lift Solutions",
      description: "Bespoke elevators for architects, builders, and institutions, solving technical and design challenges.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
      features: ['Bespoke Design', 'Technical Solutions', 'Architect Collaboration', 'Custom Engineering']
    },
    {
      icon: Zap,
      title: "Smart Integration (AI, IoT, Monitoring)",
      description: "AI and IoT-based solutions with remote error detection, automation, and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      features: ['AI Integration', 'IoT Connectivity', 'Predictive Maintenance', 'Remote Monitoring']
    }
  ];

  // Industries we serve based on provided content
  const industries = [
    {
      icon: Home,
      title: "Residential",
      description: "Elegant and efficient elevators tailored for homes and apartments.",
      examples: ['Apartment Complexes', 'Private Villas', 'Residential Towers']
    },
    {
      icon: Building,
      title: "Commercial",
      description: "High-speed elevators built for malls, offices, and public venues with heavy traffic.",
      examples: ['Office Buildings', 'Shopping Malls', 'Business Centers']
    },
    {
      icon: Hospital,
      title: "Hospitals",
      description: "Silent and hygienic lifts ensuring safety and comfort for patients and medical staff.",
      examples: ['Hospitals', 'Clinics', 'Medical Centers']
    },
    {
      icon: Car,
      title: "Transport Hubs",
      description: "Efficient systems for airports and stations designed to handle large crowds with ease.",
      examples: ['Airports', 'Metro Stations', 'Bus Terminals']
    },
    {
      icon: ShoppingCart,
      title: "Retail Chains",
      description: "Smooth-functioning, visually appealing systems for shopping centers and large stores.",
      examples: ['Shopping Centers', 'Departmental Stores', 'Retail Complexes']
    },
    {
      icon: Truck,
      title: "Warehouses",
      description: "Heavy-duty elevators for logistics and industrial storage with durable components.",
      examples: ['Warehouses', 'Distribution Centers', 'Industrial Facilities']
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getProducts();
        setProducts(response.data.products);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'home_elevators':
        return Home;
      case 'passenger_elevators':
        return Users;
      case 'freight_elevators':
        return Truck;
      default:
        return Zap;
    }
  };

  const formatPrice = (price: number, currency: string = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Products & Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Comprehensive vertical mobility solutions designed for safety, efficiency, and modern lifestyles. 
            From passenger elevators to smart escalators, we deliver excellence across all applications.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Product Portfolio</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our comprehensive range of elevators, escalators, and vertical mobility solutions 
              designed to meet diverse architectural and operational requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.applications.slice(0, 2).map((app, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Solutions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From new installations to smart integrations, we provide comprehensive solutions 
              that cover every aspect of vertical transportation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                    <div className="mb-6">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <Icon className="h-12 w-12 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="text-left">
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our versatile solutions cater to diverse industries, ensuring optimal performance 
              and safety across various applications and environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <Icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3">Typical Applications:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {industry.examples.map((example, idx) => (
                        <span key={idx} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Database Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading products...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-600">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4"
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No products available at the moment.</p>
              <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const IconComponent = getCategoryIcon(product.category);
                return (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {product.images && product.images[0] && (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <IconComponent className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-500 capitalize">
                          {product.category.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {formatPrice(product.price, product.currency)}
                        </span>
                        {product.availability && (
                          <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                            Available
                          </span>
                        )}
                      </div>

                      {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Specs:</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize">{key.replace('_', ' ')}:</span>
                                <span>{String(value)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button className="w-full" size="sm">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert consultation and customized solutions for your vertical transportation needs. 
            Our team is ready to help you choose the perfect elevator or escalator system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
