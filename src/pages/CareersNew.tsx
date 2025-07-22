import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Target, Heart, Award, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageLayout from '@/components/PageLayout';

const Careers = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const jobOpenings = [
    {
      title: "Senior Elevator Technician",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead installation and maintenance of elevator systems with expertise in modern technology and safety standards.",
      requirements: ["5+ years in elevator/lift technology", "Electrical engineering background", "Safety certifications", "Problem-solving skills"]
    },
    {
      title: "Sales Manager",
      department: "Sales", 
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales growth and build relationships with clients across South India, focusing on vertical mobility solutions.",
      requirements: ["3+ years B2B sales experience", "Construction industry knowledge", "Strong communication skills", "Results-driven approach"]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Hyderabad", 
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee elevator installation projects from planning to completion, ensuring quality and timely delivery.",
      requirements: ["PMP certification preferred", "Construction project management", "Team leadership experience", "Quality assurance knowledge"]
    },
    {
      title: "Customer Support Executive",
      department: "Support",
      location: "Kochi",
      type: "Full-time", 
      experience: "1+ years",
      description: "Provide exceptional customer service and technical support to clients with 24/7 availability.",
      requirements: ["Technical communication skills", "Customer service experience", "Multi-language proficiency", "Problem resolution abilities"]
    },
    {
      title: "R&D Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "2+ years",
      description: "Innovate and develop next-generation elevator technologies focusing on AI, IoT, and sustainability.",
      requirements: ["Engineering degree", "IoT/AI knowledge", "Innovation mindset", "Research experience"]
    },
    {
      title: "Quality Control Specialist",
      department: "Quality",
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years", 
      description: "Ensure all products meet international quality standards and safety regulations.",
      requirements: ["Quality management experience", "BIS/CE certification knowledge", "Attention to detail", "Audit experience"]
    }
  ];

  const workCulture = [
    {
      icon: Target,
      title: "Purpose-Driven Work",
      description: "Contribute to urban mobility solutions that enhance quality of life for communities across India."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with diverse, talented teams in an inclusive environment that values every perspective."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Access continuous learning opportunities, certifications, and career advancement paths."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits that support your personal well-being."
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Performance-based incentives", 
    "Health insurance for family",
    "Professional development programs",
    "Flexible working hours",
    "Annual performance bonuses",
    "Travel allowances",
    "Skill enhancement training"
  ];

  const internshipPrograms = [
    {
      title: "Technical Internship",
      duration: "6 months",
      description: "Hands-on experience in elevator technology, installation, and maintenance processes."
    },
    {
      title: "Sales & Marketing Internship", 
      duration: "3 months",
      description: "Learn business development, client relations, and market analysis in the elevator industry."
    },
    {
      title: "Engineering Internship",
      duration: "6 months", 
      description: "Work with R&D teams on innovative projects involving IoT, AI, and sustainable technologies."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { formData, resumeFile });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Careers at Yatra</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-300">
            Join our mission to elevate everyday living through innovation, sustainability, and quality. 
            Build your career with a company that values excellence, integrity, and customer-first thinking.
          </p>
        </div>
      </section>

      {/* Life at Yatra */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Life at Yatra</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience a collaborative, innovative work culture with purpose-driven growth opportunities 
              in a company that's shaping the future of vertical mobility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workCulture.map((culture, index) => {
              const Icon = culture.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                  <Icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{culture.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {culture.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Current Openings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover exciting career opportunities across various departments and locations. 
              Find the perfect role that matches your skills and aspirations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.experience}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full" onClick={() => document.getElementById('application-form')?.scrollIntoView()}>
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships & Training */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Internships & Training</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hands-on industry exposure for students and young professionals. Start your career 
              journey with comprehensive training and mentorship programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{program.duration}</p>
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Employee Benefits</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits 
              that support both professional growth and personal well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Submit Your Resume</h2>
              <p className="text-lg text-gray-700">
                Upload your resume and let our team review your qualifications. 
                We'll respond quickly with relevant opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Interested Position</Label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>{job.title}</option>
                      ))}
                      <option value="general">General Application</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                        {resumeFile && (
                          <p className="mt-2 text-sm text-blue-600">{resumeFile.name}</p>
                        )}
                      </div>
                      <input id="resume" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                    </label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us why you'd be a great fit for Yatra Elevators..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join a company that's not just building elevators, but building the future of vertical mobility. 
            Your journey with Yatra starts here.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50" onClick={() => document.getElementById('application-form')?.scrollIntoView()}>
            Apply Today
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
