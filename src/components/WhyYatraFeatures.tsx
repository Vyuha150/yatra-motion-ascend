import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Shield, Smartphone, Clock, Award } from "lucide-react";

const WhyYatraFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  const shouldReduceMotion = useReducedMotion();

  const [counters, setCounters] = useState({
    uptime: 0,
    trips: 0,
    customers: 0,
    years: 0,
  });

  const features = [
    {
      icon: Smartphone,
      title: "IoT Smart Control",
      description:
        "Advanced IoT integration for predictive maintenance and real-time monitoring",
      metric: "99.9%",
      metricLabel: "Uptime",
      color: "from-blue-600 to-blue-800",
      direction: "left",
    },
    {
      icon: Shield,
      title: "Ultimate Safety",
      description:
        "Multi-layered safety systems with emergency protocols and backup power",
      metric: "30,000+",
      metricLabel: "Safe Trips Daily",
      color: "from-green-600 to-green-800",
      direction: "right",
    },
    {
      icon: Clock,
      title: "Lifetime Service",
      description:
        "Comprehensive maintenance and 24/7 support for the entire product lifecycle",
      metric: "5,000+",
      metricLabel: "Happy Customers",
      color: "from-purple-600 to-purple-800",
      direction: "left",
    },
    {
      icon: Award,
      title: "15+ Years Legacy",
      description:
        "Proven track record with ICONIC Group's engineering excellence and innovation",
      metric: "15+",
      metricLabel: "Years of Excellence",
      color: "from-orange-600 to-orange-800",
      direction: "right",
    },
  ];

  // Animate counters when in view
  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      const targetValues = {
        uptime: 99.9,
        trips: 30000,
        customers: 5000,
        years: 15,
      };

      const animateCounter = (
        key: keyof typeof counters,
        target: number,
        duration: number
      ) => {
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: current }));
        }, 16);
      };

      animateCounter("uptime", targetValues.uptime, 2000);
      animateCounter("trips", targetValues.trips, 2500);
      animateCounter("customers", targetValues.customers, 2200);
      animateCounter("years", targetValues.years, 1800);
    }
  }, [isInView, shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = (direction: string) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Blueprint Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='blueprint' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,50 L50,0 M25,50 L50,25 M0,25 L25,0' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23blueprint)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Parallax Elevator Shaft */}
      <motion.div
        className="absolute right-0 top-0 w-32 h-full bg-gradient-to-b from-slate-200 to-slate-400 opacity-20"
        style={{
          transform: isInView ? "translateY(-10%)" : "translateY(0%)",
          transition: "transform 0.8s ease-out",
        }}
      >
        {/* Elevator shaft lines */}
        <div className="absolute left-4 top-0 w-px h-full bg-slate-600 opacity-30" />
        <div className="absolute right-4 top-0 w-px h-full bg-slate-600 opacity-30" />

        {/* Floor indicators */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-2 w-6 h-px bg-slate-600 opacity-20"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
            Why Choose <span className="text-blue-600">Yatra?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Discover what sets us apart in the world of vertical mobility
            solutions
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants(feature.direction)}
              className="group relative"
              whileHover={{
                scale: shouldReduceMotion ? 1 : 1.02,
                rotateY: shouldReduceMotion ? 0 : 2,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6 font-inter leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Metric */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 font-poppins">
                        {feature.metric}
                      </div>
                      <div className="text-sm text-slate-500 font-inter">
                        {feature.metricLabel}
                      </div>
                    </div>

                    {/* Pulse indicator */}
                    <div className="relative">
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full`}
                      />
                      <div
                        className={`absolute inset-0 w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full animate-ping opacity-20`}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                  style={{ padding: "2px" }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Statistics Banner */}
        <motion.div
          className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 font-poppins">
                {shouldReduceMotion ? "99.9" : counters.uptime.toFixed(1)}%
              </div>
              <div className="text-sm text-blue-200 font-inter">
                System Uptime
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 font-poppins">
                {shouldReduceMotion
                  ? "30,000"
                  : Math.floor(counters.trips).toLocaleString()}
                +
              </div>
              <div className="text-sm text-blue-200 font-inter">
                Daily Trips
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 font-poppins">
                {shouldReduceMotion
                  ? "5,000"
                  : Math.floor(counters.customers).toLocaleString()}
                +
              </div>
              <div className="text-sm text-blue-200 font-inter">
                Satisfied Customers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 font-poppins">
                {shouldReduceMotion ? "15" : Math.floor(counters.years)}+
              </div>
              <div className="text-sm text-blue-200 font-inter">
                Years of Excellence
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyYatraFeatures;
