import React from 'react';
import { Users, Target, Award, Clock, Building, Leaf, Heart, Factory } from 'lucide-react';
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

  const coreValues = [
    {
      icon: Award,
      title: "Brilliance",
      description: "We strive for excellence in every product and service we deliver, maintaining the highest standards of quality and innovation."
    },
    {
      icon: Heart,
      title: "Righteousness", 
      description: "We conduct business with integrity, transparency, and ethical practices that benefit our customers and society."
    },
    {
      icon: Users,
      title: "Customer-First Thinking",
      description: "Every decision we make is centered around delivering exceptional value and service to our customers."
    }
  ];

  const csrInitiatives = [
    {
      title: "Education Support",
      description: "Providing educational resources and infrastructure to underprivileged communities",
      impact: "500+ students benefited"
    },
    {
      title: "Skill Development",
      description: "Technical training programs for youth to enhance employability in elevator industry",
      impact: "200+ trained annually"
    },
    {
      title: "Women Empowerment",
      description: "Supporting women entrepreneurs and providing employment opportunities",
      impact: "30% female workforce"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About YATRA ELEVATORS</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Part of the prestigious ICONIC Group, we combine over 15 years of excellence with 
            innovation, sustainability, and quality to elevate everyday living.
          </p>
        </div>
      </section>

      {/* Our Legacy - ICONIC Group */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold">Our Legacy – ICONIC Group</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  With over 15 years of excellence, ICONIC Group has evolved from real estate into 
                  diversified industries including elevators, ensuring eco-friendly and inclusive 
                  innovation across every vertical. Our journey represents a commitment to sustainable 
                  growth and technological advancement.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The group's expansion into vertical mobility solutions was a natural progression, 
                  driven by our vision to create comprehensive infrastructure solutions that enhance 
                  quality of life while maintaining environmental responsibility.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">15+ Years of Excellence</h4>
                  <p className="text-blue-700">From real estate to diversified industries, ensuring eco-friendly and inclusive innovation</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                alt="ICONIC Group Legacy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Elevators & Escalators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Elevators & Escalators?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Yatra was born from the need for sustainable and smart vertical mobility. With rapid urban growth, 
                we recognized the critical importance of elevators that are energy-efficient, safe, and tailored to modern lifestyles.
              </p>
              <p className="text-lg text-gray-700">
                Our entry into vertical transportation addresses the growing demand for reliable, smart, and 
                eco-conscious mobility solutions that seamlessly integrate with contemporary architecture and urban planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-4">
                To elevate everyday living through innovation, sustainability, and quality. Every Yatra 
                product aims to enhance mobility with safety and eco-conscious design.
              </p>
              <p className="text-gray-600">
                We are committed to delivering world-class vertical transportation solutions that exceed 
                customer expectations while contributing to sustainable urban development.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-4">
                Yatra envisions a future where design meets purpose. We strive to be the leading 
                elevator company recognized for innovation, quality, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Our vision encompasses creating smart, sustainable vertical mobility solutions that 
                seamlessly integrate with modern architecture and urban planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Vision & Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core values—brilliance, righteousness, and customer-first thinking—guide every product and decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <Icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A visionary leadership team drives Yatra with expertise and integrity, delivering solutions 
              with long-term societal and environmental value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & R&D */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Factory className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold">Manufacturing & R&D</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Using advanced machinery and eco-friendly methods, Yatra's production meets global standards. 
                  Our state-of-the-art manufacturing facility combines precision engineering with sustainable practices.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our R&D department constantly innovates for safety, sustainability, and smart mobility, 
                  ensuring that every Yatra product incorporates the latest technological advancements and industry best practices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Advanced Manufacturing</h4>
                    <p className="text-blue-700 text-sm">Precision machinery with eco-friendly processes</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Continuous Innovation</h4>
                    <p className="text-green-700 text-sm">R&D for safety and smart mobility solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565515636369-81322ad8e9da?w=600&h=400&fit=crop" 
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Green Practices */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-12 w-12 text-green-600 mr-4" />
              <h2 className="text-4xl font-bold">Sustainability & Green Practices</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Yatra leads with green innovation, practicing zero-waste manufacturing, energy-efficient drives, 
              and integrating with green certifications like LEED and IGBC.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero-Waste Manufacturing</h3>
              <p className="text-gray-700">
                Implementing circular economy principles with minimal waste generation and maximum resource utilization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Energy-Efficient Drives</h3>
              <p className="text-gray-700">
                Regenerative drives and low-consumption systems that significantly reduce carbon footprints.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Green Certifications</h3>
              <p className="text-gray-700">
                Integration with LEED and IGBC standards for sustainable building certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">CSR Initiatives</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Yatra invests in community upliftment through education, skill development, and women empowerment, 
              ensuring real progress beyond technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {csrInitiatives.map((initiative, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-bold text-blue-600">{initiative.impact}</p>
                </div>
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
            Join us in our mission to create sustainable, safe, and smart vertical mobility solutions 
            that enhance quality of life for communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50">
                Get in Touch
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
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
