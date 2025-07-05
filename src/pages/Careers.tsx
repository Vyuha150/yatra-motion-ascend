
import React from 'react';
import { ArrowLeft, Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Elevator Technician",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead installation and maintenance of elevator systems with expertise in modern technology."
    },
    {
      title: "Sales Manager",
      department: "Sales",
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales growth and build relationships with clients across South India."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Hyderabad",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee elevator installation projects from planning to completion."
    },
    {
      title: "Customer Support Executive",
      department: "Support",
      location: "Kochi",
      type: "Full-time",
      experience: "1+ years",
      description: "Provide exceptional customer service and technical support to clients."
    }
  ];

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
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Build your career with Yatra Elevators. We offer exciting opportunities 
            for growth, innovation, and making a difference in vertical transportation.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Yatra Elevators?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Great Team</h3>
              <p className="text-gray-700">Work with passionate professionals who care about excellence.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-gray-700">Opportunities for professional development and advancement.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Great Locations</h3>
              <p className="text-gray-700">Work across major cities in South India with travel opportunities.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">Flexible working arrangements and comprehensive benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full lg:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-700">Submit your application through our online portal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Initial Screening</h3>
              <p className="text-gray-700">Our HR team reviews your application and qualifications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Interview</h3>
              <p className="text-gray-700">Technical and HR interviews with our team.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Welcome</h3>
              <p className="text-gray-700">Join our team and start your journey with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see a position that matches your skills? Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Send Resume
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              View All Openings
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
