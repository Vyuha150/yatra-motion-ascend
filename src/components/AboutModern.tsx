import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import elevatorMechanics from '@/assets/elevator-mechanics.jpg';

const AboutModern = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  const stats = [
    { number: "15+", label: "Years of Excellence", description: "ICONIC Group legacy" },
    { number: "1000+", label: "Projects Completed", description: "Across industries" },
    { number: "99.99%", label: "Uptime Guarantee", description: "Reliability promise" },
    { number: "24/7", label: "Support Available", description: "Always ready" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every component designed for perfect performance and long-lasting reliability."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your needs drive our innovation. Every solution is tailored to exceed expectations."
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Setting new standards in vertical transportation with cutting-edge technology."
    }
  ];

  return (
    <section className="min-h-screen bg-background relative overflow-hidden py-20">
      {/* Background Elements */}
      <motion.div 
        className="absolute right-0 top-1/4 w-1/2 h-3/4 opacity-10"
        style={{ y }}
      >
        <img 
          src={elevatorMechanics}
          alt="Elevator Mechanics"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Engineering{' '}
                <span className="text-primary">excellence</span>{' '}
                in every movement.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From the ICONIC Group's 15-year legacy comes Yatra — where precision meets innovation. 
                We don't just move people; we elevate experiences through cutting-edge technology, 
                uncompromising safety, and sustainable design.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate('/about')}
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-full font-semibold"
                >
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What drives us forward
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values aren't just words — they're the foundation of every elevator we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <value.icon className="h-10 w-10 text-primary" />
                </motion.div>
                
                <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default AboutModern;