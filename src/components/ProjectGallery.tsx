
import React, { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Bangalore",
      type: "Passenger Lift",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Premium passenger lifts for a 25-story residential tower with advanced safety features."
    },
    {
      id: 2,
      title: "Corporate Office Building",
      location: "Chennai",
      type: "High-Speed Lift",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "High-speed elevators for efficient vertical transportation in commercial complex."
    },
    {
      id: 3,
      title: "Shopping Mall Complex",
      location: "Hyderabad",
      type: "Freight & Passenger",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Multiple elevator systems for large-scale retail and entertainment complex."
    },
    {
      id: 4,
      title: "Hospital Facility",
      location: "Coimbatore",
      type: "Hospital Lift",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Specialized hospital elevators with stretcher compatibility and emergency features."
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      location: "Mysore",
      type: "Freight Lift",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Heavy-duty freight elevators for efficient material handling in industrial facility."
    },
    {
      id: 6,
      title: "Premium Villa",
      location: "Kochi",
      type: "Home Lift",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Elegant home elevator with glass cabin design for luxury residential property."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our portfolio of successful elevator installations across South India. 
            Each project reflects our commitment to quality, safety, and customer satisfaction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-slate-800 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 p-0 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full w-10 h-10 p-0 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-sm font-medium rounded-full mb-3 min-w-fit">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-2 min-h-[1.25rem]">
                  📍 {project.location}
                </p>
                
                <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 line-clamp-3 min-h-[4rem]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
