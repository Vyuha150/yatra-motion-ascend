import React, { useState } from "react";
import { Eye, ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Bangalore",
      type: "Passenger Lift",
      image: "/1.png",
      description:
        "Premium passenger lifts for a 25-story residential tower with advanced safety features.",
    },
    {
      id: 2,
      title: "Corporate Office Building",
      location: "Chennai",
      type: "High-Speed Lift",
      image: "/2.png",
      description:
        "High-speed elevators for efficient vertical transportation in commercial complex.",
    },
    {
      id: 3,
      title: "Shopping Mall Complex",
      location: "Hyderabad",
      type: "Freight & Passenger",
      image: "/3.png",
      description:
        "Multiple elevator systems for large-scale retail and entertainment complex.",
    },
    {
      id: 4,
      title: "Hospital Facility",
      location: "Coimbatore",
      type: "Hospital Lift",
      image: "/4.png",
      description:
        "Specialized hospital elevators with stretcher compatibility and emergency features.",
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      location: "Mysore",
      type: "Freight Lift",
      image: "/5.png",
      description:
        "Heavy-duty freight elevators for efficient material handling in industrial facility.",
    },
    {
      id: 6,
      title: "Premium Villa",
      location: "Kochi",
      type: "Home Lift",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description:
        "Elegant home elevator with glass cabin design for luxury residential property.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Eye className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter">
            Discover our portfolio of successful elevator installations across
            South India. Each project reflects our commitment to quality,
            safety, and customer satisfaction.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:-translate-y-4 hover:scale-105 bg-white shadow-2xl border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-120"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white rounded-full w-12 h-12 p-0 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl border border-white/30"
                    >
                      <Eye className="h-5 w-5" />
                    </Button>

                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 p-0 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Project Info Card */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed mb-4 font-inter">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm font-inter">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2024</span>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold font-poppins"
                  >
                    View Details
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
