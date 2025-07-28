import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home, Users, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Home Lifts",
      description:
        "Elegant residential elevators designed for modern homes with space-efficient MRL technology.",
      icon: Home,
      image: "/lovable-uploads/4bc2b65c-ae8a-4184-8946-8bb3e3d75cff.png",
      features: ["Space Efficient", "Energy Saving", "Quiet Operation"],
    },
    {
      id: 2,
      title: "Passenger Lifts",
      description:
        "Commercial grade elevators for office buildings, malls, and high-rise structures.",
      icon: Users,
      image: "/lovable-uploads/d2edc3c3-d4f3-438c-bcfc-4ed2fa9766df.png",
      features: ["High Capacity", "Fast Speed", "Safety Certified"],
    },
    {
      id: 3,
      title: "Freight Lifts",
      description:
        "Heavy-duty cargo elevators built for industrial and commercial material handling.",
      icon: Truck,
      image: "/lovable-uploads/f7e2cdad-09c2-44bc-adbb-3e625122b25d.png",
      features: ["Heavy Load", "Durable Build", "Industrial Grade"],
    },
    {
      id: 4,
      title: "Service & Maintenance",
      description:
        "Comprehensive lifetime service with 24/7 support and preventive maintenance programs.",
      icon: Wrench,
      image: "/lovable-uploads/6963d42c-2dcd-46bb-b7c2-12e60ea70829.png",
      features: ["24/7 Support", "Preventive Care", "Expert Technicians"],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-inter">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Wrench className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Our <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed">
            From residential homes to commercial complexes, we provide complete
            elevator solutions with unmatched quality and lifetime service
            commitment.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group cursor-pointer border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative overflow-hidden h-56">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 p-3 bg-blue-600 rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 shadow-lg">
                      <product.icon className="h-6 w-6" />
                    </div>

                    {/* Product Type Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.title}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 font-poppins">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-1 font-inter">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          <span className="font-medium font-inter">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-poppins">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Elevate Your Space?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed font-inter">
              Discover our complete range of elevator solutions tailored to your
              needs.
            </p>
            <Link to="/innovation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-poppins"
              >
                Explore All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
