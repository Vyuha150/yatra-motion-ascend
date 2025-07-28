import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Cpu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import elevatorControls from "@/assets/elevator-controls.jpg";

const ProductsModern = () => {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "passenger",
      title: "Passenger Elevators",
      subtitle: "Smooth. Safe. Sophisticated.",
      description:
        "Experience seamless vertical mobility with our premium passenger elevators. Engineered for comfort, designed for elegance.",
      features: [
        "Whisper-quiet operation",
        "Energy-efficient drives",
        "Premium cabin finishes",
        "Smart controls",
      ],
      icon: Zap,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "freight",
      title: "Freight Solutions",
      subtitle: "Heavy-duty. Reliable. Powerful.",
      description:
        "Built for the toughest demands. Our freight elevators handle maximum loads with unwavering precision and reliability.",
      features: [
        "Heavy load capacity",
        "Reinforced construction",
        "Industrial-grade motors",
        "24/7 operation ready",
      ],
      icon: Shield,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: "smart",
      title: "Smart Technology",
      subtitle: "AI-powered. IoT-enabled. Future-ready.",
      description:
        "Intelligence meets vertical transportation. Our smart elevators learn, adapt, and optimize every journey.",
      features: [
        "AI optimization",
        "Predictive maintenance",
        "Mobile integration",
        "Real-time monitoring",
      ],
      icon: Cpu,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "green",
      title: "Eco Solutions",
      subtitle: "Sustainable. Efficient. Responsible.",
      description:
        "Green technology that doesn't compromise on performance. Reducing carbon footprint while maximizing efficiency.",
      features: [
        "Regenerative drives",
        "LED lighting",
        "Eco-friendly materials",
        "Energy monitoring",
      ],
      icon: Leaf,
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="min-h-screen bg-blue-50 relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Products that <span className="text-primary">elevate</span> every
            experience.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From residential homes to industrial complexes, our comprehensive
            range of elevator solutions delivers unmatched performance, safety,
            and innovation.
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeProduct === index
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-white text-black"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {product.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${products[activeProduct].color} flex items-center justify-center mb-6`}
                >
                  {React.createElement(products[activeProduct].icon, {
                    className: "h-10 w-10 text-blue-500",
                  })}
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  {products[activeProduct].title}
                </h3>

                <p className="text-lg text-primary mb-6">
                  {products[activeProduct].subtitle}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {products[activeProduct].description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {products[activeProduct].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-black">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  onClick={() => navigate("/products")}
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-full font-semibold"
                >
                  Explore Range
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={elevatorControls}
                  alt={products[activeProduct].title}
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} mix-blend-overlay`}
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                <Zap className="h-12 w-12 text-primary" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <div className="flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProduct === index
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ProductsModern;
