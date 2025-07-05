
import React, { useState } from 'react';
import { MapPin, Calendar, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Phoenix Mall Bangalore",
      category: "commercial",
      location: "Bangalore, Karnataka",
      year: "2023",
      elevators: "8 Passenger Elevators",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "High-speed passenger elevators for premium shopping mall"
    },
    {
      id: 2,
      title: "Prestige Residence",
      category: "residential",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      elevators: "4 Home Elevators",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      description: "Luxury home elevators for premium residential complex"
    },
    {
      id: 3,
      title: "Tech Park Hyderabad",
      category: "commercial",
      location: "Hyderabad, Telangana",
      year: "2022",
      elevators: "12 High-Speed Elevators",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "Modern office complex with smart elevator systems"
    },
    {
      id: 4,
      title: "Manufacturing Unit",
      category: "industrial",
      location: "Coimbatore, Tamil Nadu",
      year: "2022",
      elevators: "6 Freight Elevators",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      description: "Heavy-duty freight elevators for industrial facility"
    },
    {
      id: 5,
      title: "Medical Center",
      category: "healthcare",
      location: "Kochi, Kerala",
      year: "2023",
      elevators: "5 Hospital Elevators",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
      description: "Specialized elevators with hospital-grade requirements"
    },
    {
      id: 6,
      title: "Luxury Villa",
      category: "residential",
      location: "Mysore, Karnataka",
      year: "2023",
      elevators: "2 Home Elevators",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Custom-designed home elevators for luxury villa"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'residential', label: 'Residential' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'healthcare', label: 'Healthcare' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Showcasing our expertise across diverse sectors with innovative elevator 
            installations that set new standards in vertical transportation.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`px-6 py-2 ${
                  activeFilter === filter.key 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-blue-600" />
                      {project.elevators}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Project Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Total Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Commercial Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Residential Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Industrial Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your elevator requirements and create a custom solution 
            that perfectly fits your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4"
            >
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
