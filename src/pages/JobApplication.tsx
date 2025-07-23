import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, Upload, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageLayout from '@/components/PageLayout';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: "senior-elevator-technician",
      title: "Senior Elevator Technician",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹6-8 LPA",
      description: "Lead installation and maintenance of elevator systems with expertise in modern technology and safety standards. Work with cutting-edge IoT-enabled elevator systems and ensure optimal performance across residential and commercial installations.",
      responsibilities: [
        "Lead installation teams for complex elevator projects",
        "Perform preventive maintenance and troubleshooting",
        "Ensure compliance with safety standards and regulations",
        "Train junior technicians and apprentices",
        "Coordinate with engineering teams for system upgrades",
        "Maintain detailed service records and reports"
      ],
      requirements: [
        "5+ years in elevator/lift technology",
        "Electrical engineering background",
        "Safety certifications (OSHA preferred)",
        "Problem-solving skills",
        "Leadership experience",
        "Knowledge of IoT and smart systems"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Health insurance for family",
        "Professional development opportunities",
        "Company vehicle for field work",
        "Flexible working hours"
      ]
    },
    {
      id: "sales-manager",
      title: "Sales Manager",
      department: "Sales",
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹5-7 LPA + Commission",
      description: "Drive sales growth and build relationships with clients across South India, focusing on vertical mobility solutions. Develop new business opportunities and maintain existing client relationships.",
      responsibilities: [
        "Develop and execute sales strategies for assigned territory",
        "Build and maintain client relationships",
        "Prepare and present proposals to potential clients",
        "Collaborate with technical teams for project solutions",
        "Achieve monthly and quarterly sales targets",
        "Attend industry events and trade shows"
      ],
      requirements: [
        "3+ years B2B sales experience",
        "Construction industry knowledge",
        "Strong communication skills",
        "Results-driven approach",
        "MBA preferred",
        "Proficiency in CRM tools"
      ],
      benefits: [
        "Attractive commission structure",
        "Travel allowances",
        "Performance incentives",
        "Health insurance",
        "Professional development programs"
      ]
    },
    {
      id: "project-manager",
      title: "Project Manager",
      department: "Operations",
      location: "Hyderabad",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹7-10 LPA",
      description: "Oversee elevator installation projects from planning to completion, ensuring quality and timely delivery. Manage cross-functional teams and coordinate with clients throughout the project lifecycle.",
      responsibilities: [
        "Plan and execute elevator installation projects",
        "Coordinate with design, engineering, and installation teams",
        "Manage project timelines and budgets",
        "Ensure quality standards and safety compliance",
        "Communicate with clients and stakeholders",
        "Prepare project reports and documentation"
      ],
      requirements: [
        "PMP certification preferred",
        "Construction project management",
        "Team leadership experience",
        "Quality assurance knowledge",
        "Strong analytical skills",
        "Proficiency in project management tools"
      ],
      benefits: [
        "Competitive salary package",
        "Performance bonuses",
        "Health insurance",
        "Professional certifications support",
        "Career advancement opportunities"
      ]
    },
    {
      id: "customer-support-executive",
      title: "Customer Support Executive",
      department: "Support",
      location: "Kochi",
      type: "Full-time",
      experience: "1+ years",
      salary: "₹3-4 LPA",
      description: "Provide exceptional customer service and technical support to clients with 24/7 availability. Handle customer inquiries, service requests, and emergency response coordination.",
      responsibilities: [
        "Handle customer service calls and emails",
        "Coordinate emergency service requests",
        "Maintain customer service records",
        "Follow up on service completion",
        "Provide technical guidance to customers",
        "Escalate complex issues to technical teams"
      ],
      requirements: [
        "Technical communication skills",
        "Customer service experience",
        "Multi-language proficiency",
        "Problem resolution abilities",
        "Computer proficiency",
        "Ability to work in shifts"
      ],
      benefits: [
        "Shift allowances",
        "Health insurance",
        "Skill development programs",
        "Performance incentives",
        "Career growth opportunities"
      ]
    },
    {
      id: "rd-engineer",
      title: "R&D Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹6-9 LPA",
      description: "Innovate and develop next-generation elevator technologies focusing on AI, IoT, and sustainability. Work on cutting-edge projects that shape the future of vertical mobility.",
      responsibilities: [
        "Research and develop innovative elevator technologies",
        "Design IoT and AI integration solutions",
        "Prototype and test new systems",
        "Collaborate with external research institutions",
        "Prepare technical documentation and patents",
        "Support product development initiatives"
      ],
      requirements: [
        "Engineering degree (Mechanical/Electrical/Computer Science)",
        "IoT/AI knowledge",
        "Innovation mindset",
        "Research experience",
        "Programming skills (Python, C++)",
        "Knowledge of sensors and automation"
      ],
      benefits: [
        "Research project bonuses",
        "Conference participation opportunities",
        "Patent filing support",
        "Health insurance",
        "Flexible working arrangements"
      ]
    },
    {
      id: "quality-control-specialist",
      title: "Quality Control Specialist",
      department: "Quality",
      location: "Chennai",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹5-7 LPA",
      description: "Ensure all products meet international quality standards and safety regulations. Conduct quality audits and implement improvement processes across all operations.",
      responsibilities: [
        "Conduct quality audits and inspections",
        "Implement quality control processes",
        "Ensure compliance with BIS/CE standards",
        "Train teams on quality procedures",
        "Prepare quality reports and documentation",
        "Coordinate with certification bodies"
      ],
      requirements: [
        "Quality management experience",
        "BIS/CE certification knowledge",
        "Attention to detail",
        "Audit experience",
        "Quality management system knowledge",
        "Statistical analysis skills"
      ],
      benefits: [
        "Certification support",
        "Performance bonuses",
        "Health insurance",
        "Professional development",
        "Travel allowances for audits"
      ]
    },
    {
      id: "general-application",
      title: "General Application",
      department: "Various",
      location: "Multiple Locations",
      type: "Full-time / Part-time",
      experience: "All Levels",
      salary: "As per experience",
      description: "Submit a general application to be considered for future opportunities at Yatra Elevators. We're always looking for talented individuals to join our team.",
      responsibilities: [
        "Be ready for various roles across different departments",
        "Contribute to company growth and innovation",
        "Adapt to new challenges and opportunities",
        "Collaborate with diverse teams",
        "Maintain professional excellence",
        "Support company values and mission"
      ],
      requirements: [
        "Strong communication skills",
        "Relevant educational background",
        "Passion for innovation and excellence",
        "Team collaboration abilities",
        "Adaptability and learning mindset",
        "Professional attitude and work ethic"
      ],
      benefits: [
        "Opportunities across multiple departments",
        "Career growth and development",
        "Competitive compensation based on role",
        "Comprehensive benefits package",
        "Professional training and development"
      ]
    }
  ];

  const selectedJob = jobOpenings.find(job => job.id === jobId);

  useEffect(() => {
    if (!selectedJob) {
      navigate('/careers');
    }
  }, [selectedJob, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    console.log('Form submitted:', { formData, resumeFile, selectedJob });
    setIsSubmitted(true);
    
    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate('/careers');
    }, 3000);
  };

  if (!selectedJob) {
    return null;
  }

  if (isSubmitted) {
    return (
      <PageLayout>
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
              <p className="text-xl text-gray-700 mb-6">
                Thank you for applying for the <strong>{selectedJob.title}</strong> position at Yatra Elevators.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Our HR team will review your application within 48 hours</li>
                  <li>• Shortlisted candidates will be contacted for initial screening</li>
                  <li>• Technical interview and final rounds will follow</li>
                  <li>• You'll receive updates via email and phone</li>
                </ul>
              </div>
              <p className="text-gray-600 mb-6">Redirecting to careers page in a few seconds...</p>
              <Button onClick={() => navigate('/careers')} className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => navigate('/careers')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Jobs
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{selectedJob.title}</h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                {selectedJob.department}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {selectedJob.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {selectedJob.experience}
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{selectedJob.type}</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">{selectedJob.salary}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Job Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedJob.description}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="text-gray-700 space-y-2">
                {selectedJob.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-medium mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white font-medium mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white font-medium mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-white font-medium mb-2 block">Years of Experience *</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20"
                    placeholder="e.g., 3 years"
                  />
                </div>

                <div>
                  <Label htmlFor="coverLetter" className="text-white font-medium mb-2 block">Why are you perfect for this role? *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    placeholder={`Tell us why you're the perfect fit for the ${selectedJob.title} position...`}
                  />
                </div>

                <div>
                  <Label htmlFor="resume" className="text-white font-medium mb-3 block">Upload Resume *</Label>
                  <label htmlFor="resume" className="group flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/40 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-3 bg-blue-500/20 rounded-full mb-3 group-hover:bg-blue-500/30 transition-all duration-300">
                        <Upload className="w-6 h-6 text-blue-300" />
                      </div>
                      <p className="text-sm font-semibold text-white mb-1">
                        <span className="text-blue-300">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-white/70">PDF, DOC, DOCX (MAX. 5MB)</p>
                      {resumeFile && (
                        <div className="mt-2 flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-lg">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <p className="text-xs text-green-300 font-medium">{resumeFile.name}</p>
                        </div>
                      )}
                    </div>
                    <input id="resume" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
                
                <p className="text-center text-white/60 text-sm">
                  We'll review your application and get back to you within 48 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobApplication;
