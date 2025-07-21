
import React, { useState, useEffect } from 'react';
import { Home, Users, Truck, Zap, Settings, Wrench, RefreshCw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { productService, Product } from '@/services/productService';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const services = [
    {
      icon: Settings,
      title: "Installation",
      description: "Professional installation services with quality assurance and timely completion.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to ensure optimal performance and safety.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop"
    },
    {
      icon: RefreshCw,
      title: "Modernization",
      description: "Upgrade your existing elevators with latest technology and safety features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
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
          
          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading products...</span>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600">{error}</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-red-600 hover:bg-red-700"
                >
                  Retry
                </Button>
              </div>
            </div>
          )}
          
          {!loading && !error && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products available at the moment.</p>
            </div>
          )}
          
          {!loading && !error && products.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product) => {
                const IconComponent = getCategoryIcon(product.category);
                const primaryImage = product.images?.find(img => img.isPrimary) || product.images?.[0];
                
                return (
                  <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={primaryImage?.url || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"} 
                        alt={primaryImage?.alt || product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                      <p className="text-gray-700 mb-4">{product.description}</p>
                      
                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Key Specifications:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            Capacity: {product.specifications?.capacity}
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            Speed: {product.specifications?.speed}
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            Floors: {product.specifications?.floors}
                          </li>
                        </ul>
                      </div>

                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pricing */}
                      {product.pricing && (
                        <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-800">
                            Starting from {formatPrice(product.pricing.basePrice, product.pricing.currency)}
                          </div>
                          <div className="text-sm text-blue-600">
                            Installation: {formatPrice(product.pricing.installationPrice, product.pricing.currency)}
                          </div>
                        </div>
                      )}

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
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
    </PageLayout>
  );
};

export default Products;
