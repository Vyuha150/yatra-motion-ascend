
import React from 'react';
import { Users, Target, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Technical Director",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Arjun Patel",
      position: "Service Manager",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About YATRA ELEVATORS</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Your trusted partner in vertical transportation solutions across South India. 
            We combine innovation, reliability, and exceptional service to elevate your experience.
          </p>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Founded with a vision to revolutionize vertical transportation in South India, 
                  Yatra Elevators has been at the forefront of elevator technology and service excellence. 
                  Our journey began with a simple mission: to provide reliable, safe, and smart elevator solutions 
                  that exceed customer expectations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Over the years, we have successfully completed 50+ installations across South India, 
                  establishing ourselves as a trusted name in the elevator industry. Our commitment to 
                  quality, innovation, and customer satisfaction drives everything we do.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                alt="Modern office building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide world-class elevator solutions with uncompromising quality, 
                safety, and reliability while ensuring exceptional customer service and support.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading elevator company in South India, recognized for innovation, 
                quality, and customer satisfaction in vertical transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" 
                alt="Customer service" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-700">
                Every decision we make is centered around our customers' needs and satisfaction.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop" 
                alt="Quality excellence" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
              <p className="text-gray-700">
                We maintain the highest standards in products, services, and processes.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop" 
                alt="Reliability" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-700">
                Our commitment to dependable service and support you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your elevator needs and discover 
            how we can provide the perfect solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              >
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
