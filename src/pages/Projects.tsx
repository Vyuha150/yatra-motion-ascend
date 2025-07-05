
import React, { useState } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      category: "residential",
      location: "Bangalore",
      type: "Passenger Elevator",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      description: "Modern 8-story residential complex with high-speed passenger elevators."
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "commercial",
      location: "Chennai",
      type: "High-Speed Elevator",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "25-floor corporate tower with premium elevator systems."
    },
    {
      id: 3,
      title: "Shopping Mall",
      category: "commercial",
      location: "Hyderabad",
      type: "Passenger & Freight",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Multi-level shopping complex with passenger and freight elevators."
    },
    {
      id: 4,
      title: "Private Villa",
      category: "residential",
      location: "Coimbatore",
      type: "Home Elevator",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      description: "Luxury villa with custom-designed home elevator system."
    },
    {
      id: 5,
      title: "Hospital Complex",
      category: "healthcare",
      location: "Kochi",
      type: "Hospital Elevator",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
      description: "Multi-specialty hospital with specialized medical elevators."
    },
    {
      id: 6,
      title: "Industrial Warehouse",
      category: "industrial",
      location: "Pune",
      type: "Freight Elevator",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
      description: "Large-scale warehouse with heavy-duty freight elevator systems."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <img 
            src="/lovable-uploads/22858e12-9774-4bce-a712-396515a649a7.png" 
            alt="Yatra Elevators Logo" 
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Explore our portfolio of successful installations across South India. 
            From residential complexes to commercial towers, we deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-gray-600" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-blue-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Project With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to begin your elevator installation? Contact our team to discuss 
            your requirements and get a customized solution for your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
