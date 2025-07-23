
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPreview = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Projects Completed" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
    { icon: Award, number: "ISI", label: "Certified Products" },
    { icon: Shield, number: "100%", label: "Safety Guaranteed" }
  ];

  return (
    <section className="py-40 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Why Choose <span className="text-blue-600">Yatra Elevators?</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Choosing Yatra Elevators & Escalators means choosing responsibility, innovation, and a customer based approach. We have designed to offer advanced vertical mobility solutions that conglomerate advanced technology with powerful engineering, promising safety, efficiency, and comfort in every ride.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                From Tailor made designs to accurate installations and responsive post sales support, we are committed to delivering excellence at each and every stage. Our deep analysing of market needs, matching to global standards and a passion for quality set us to be unique.
              </p>
              
              <p className="text-lg text-blue-700 leading-relaxed font-medium">
                At Yatra, we don't just move people, we inspire them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn About Us
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
