import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, Target, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import AnimatedHighlights from '@/components/AnimatedHighlights';

const Careers = () => {
  const navigate = useNavigate();

  const jobOpenings = [
    {
      id: "senior-elevator-technician",
      title: "Senior Elevator Technician",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead installation and maintenance of elevator systems with expertise in modern technology and safety standards.",
      requirements: ["5+ years in elevator/lift technology", "Electrical engineering background", "Safety certifications", "Problem-solving skills"]
    },
    {
      id: "sales-manager",
      title: "Sales Manager",
      department: "Sales", 
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales growth and build relationships with clients across South India, focusing on vertical mobility solutions.",
      requirements: ["3+ years B2B sales experience", "Construction industry knowledge", "Strong communication skills", "Results-driven approach"]
    },
    {
      id: "project-manager",
      title: "Project Manager",
      department: "Operations",
      location: "Hyderabad", 
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee elevator installation projects from planning to completion, ensuring quality and timely delivery.",
      requirements: ["PMP certification preferred", "Construction project management", "Team leadership experience", "Quality assurance knowledge"]
    },
    {
      id: "customer-support-executive",
      title: "Customer Support Executive",
      department: "Support",
      location: "Kochi",
      type: "Full-time", 
      experience: "1+ years",
      description: "Provide exceptional customer service and technical support to clients with 24/7 availability.",
      requirements: ["Technical communication skills", "Customer service experience", "Multi-language proficiency", "Problem resolution abilities"]
    },
    {
      id: "rd-engineer",
      title: "R&D Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "2+ years",
      description: "Innovate and develop next-generation elevator technologies focusing on AI, IoT, and sustainability.",
      requirements: ["Engineering degree", "IoT/AI knowledge", "Innovation mindset", "Research experience"]
    },
    {
      id: "quality-control-specialist",
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
      title: "Innovation & Excellence",
      description: "Work on cutting-edge projects involving AI, IoT, and smart elevator technologies. Lead industry innovation with R&D initiatives that shape the future of vertical mobility."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join cross-functional teams where engineering meets creativity. Experience inclusive leadership, knowledge sharing, and mentorship programs that foster professional growth."
    },
    {
      icon: Award,
      title: "Professional Development",
      description: "Access international certifications, technical training programs, and leadership development. Participate in industry conferences and continuous skill enhancement initiatives."
    },
    {
      icon: Heart,
      title: "Employee Well-being",
      description: "Comprehensive health insurance, performance bonuses, flexible working hours, and work-life balance initiatives that prioritize your personal and professional satisfaction."
    }
  ];

  const benefits = [
    "Competitive salary packages with industry-leading compensation structures",
    "Performance-based incentives and annual bonus programs", 
    "Comprehensive health insurance coverage for employee and family members",
    "Professional development programs including international certifications and training",
    "Flexible working hours and hybrid work arrangements for better work-life balance",
    "Annual performance bonuses tied to individual and company achievements",
    "Travel allowances for field assignments and business development activities",
    "Skill enhancement training in latest technologies (AI, IoT, Smart Systems)",
    "Employee wellness programs including mental health support and fitness benefits",
    "Retirement planning assistance and provident fund contributions",
    "Educational assistance for children and professional course sponsorships",
    "Team building activities, recreational facilities, and celebration events"
  ];

  const internshipPrograms = [
    {
      title: "Technical Engineering Internship",
      duration: "6 months",
      description: "Hands-on experience in elevator technology, installation, maintenance processes, and IoT integration. Work with senior engineers on real projects involving smart elevator systems and safety protocols."
    },
    {
      title: "Sales & Business Development Internship", 
      duration: "3-6 months",
      description: "Learn comprehensive business development strategies, client relationship management, market analysis, and proposal development in the vertical mobility industry. Gain exposure to B2B sales processes."
    },
    {
      title: "Research & Development Internship",
      duration: "6 months", 
      description: "Collaborate with R&D teams on innovative projects involving AI integration, energy-efficient systems, and sustainable technologies. Contribute to next-generation elevator and escalator innovations."
    },
    {
      title: "Digital Marketing & Communications Internship",
      duration: "3 months",
      description: "Work on digital marketing campaigns, content creation, social media strategy, and brand communications. Gain experience in B2B marketing for technical products and services."
    },
    {
      title: "Quality Assurance & Compliance Internship",
      duration: "4 months",
      description: "Learn quality control processes, BIS/CE compliance standards, safety auditing, and testing procedures. Understand international quality frameworks and certification processes."
    }
  ];

  return (
    <PageLayout>
      <AnimatedHighlights />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Life at Yatra Elevators</h1>
          <p className="text-xl max-w-4xl mx-auto animate-fade-in delay-300 mb-6">
            Join a team that's passionate about elevating lives through innovation, quality, and excellence. At Yatra Elevators, 
            we believe in creating a workplace where talent thrives, ideas flourish, and every individual contributes to our 
            mission of transforming vertical mobility solutions across India.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Innovation-Driven</h3>
                <p className="text-sm opacity-90">Work with cutting-edge technologies including AI, IoT, and sustainable solutions</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Growth-Focused</h3>
                <p className="text-sm opacity-90">Continuous learning opportunities and career advancement programs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Purpose-Driven</h3>
                <p className="text-sm opacity-90">Make a real impact by improving mobility and accessibility for millions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Yatra */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Work Culture & Values</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Experience a dynamic, inclusive work environment where innovation meets tradition. We foster a culture of continuous learning, 
              collaboration, and excellence where every team member is empowered to contribute to our mission of transforming vertical mobility 
              across India. Our workplace promotes creativity, technical expertise, and professional growth in a supportive ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workCulture.map((culture, index) => {
              const Icon = culture.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                  <Icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{culture.title}</h3>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Current Openings</h2>
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
                  <h4 className="font-semibold mb-2 text-gray-900">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full" onClick={() => navigate(`/careers/apply/${job.id}`)}>
                  Apply for this Position
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Internships & Professional Training Programs</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Launch your career in the vertical mobility industry with our comprehensive internship and training programs. 
              Gain hands-on experience working with cutting-edge technologies, learn from industry experts, and develop 
              skills that will accelerate your professional journey. Our programs combine theoretical knowledge with 
              practical applications in real-world projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{program.title}</h3>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive Employee Benefits</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At Yatra Elevators, we understand that exceptional talent deserves exceptional benefits. Our comprehensive package 
              goes beyond traditional compensation to include wellness programs, professional development opportunities, 
              and support systems that nurture both your career growth and personal well-being.
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

      {/* General Application Section */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">Don't See Your Perfect Role?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
                We're always looking for talented individuals to join our team. Submit a general application 
                and we'll keep you in mind for future opportunities that match your skills and interests.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Apply for a Specific Position Above</h3>
                <p className="text-blue-200">
                  Click "Apply for this Position" on any job listing above to submit a targeted application 
                  with job-specific requirements and tailored questions.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">General Application</h3>
              <p className="text-blue-100 mb-6">
                Send us your resume and we'll reach out when we have opportunities that match your background.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl"
                onClick={() => navigate('/careers/apply/general-application')}
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Career with Yatra?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join India's leading elevator and escalator company where innovation meets tradition. Be part of a team that's 
            transforming vertical mobility solutions across the nation. Experience professional growth, cutting-edge technology, 
            and the satisfaction of making a difference in millions of lives. Your journey with Yatra starts here - let's elevate together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50" onClick={() => navigate('/careers/apply/general-application')}>
              Submit General Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              Download Career Brochure
            </Button>
          </div>
          <div className="mt-8 text-blue-200">
            <p>🌟 Join 500+ Professionals Already Building the Future with Yatra Elevators</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
