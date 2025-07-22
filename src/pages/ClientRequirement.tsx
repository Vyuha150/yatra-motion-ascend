import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import PageLayout from '@/components/PageLayout';
import { useToast } from '@/hooks/use-toast';
import { Loader2, FileText, Send } from 'lucide-react';
import { clientRequirementService } from '@/services/clientRequirementService';

interface ClientRequirementData {
  // Contact Details
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  bestTimeToContact: string;
  
  // Project Information
  buildingType: string[];
  otherBuildingType: string;
  numberOfFloors: string;
  footTraffic: string;
  timeline: string;
  
  // Service Type
  serviceType: string[];
  
  // Elevator/Escalator Type
  equipmentType: string[];
  
  // Special Requirements
  specialRequirements: string[];
  
  // Budget and Notes
  budgetRange: string;
  additionalNotes: string;
}

const ClientRequirement = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ClientRequirementData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    bestTimeToContact: '',
    buildingType: [],
    otherBuildingType: '',
    numberOfFloors: '',
    footTraffic: '',
    timeline: '',
    serviceType: [],
    equipmentType: [],
    specialRequirements: [],
    budgetRange: '',
    additionalNotes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof ClientRequirementData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await clientRequirementService.createClientRequirement(formData);
      
      toast({
        title: "Requirement Submitted Successfully!",
        description: "Thank you for your submission. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        location: '',
        bestTimeToContact: '',
        buildingType: [],
        otherBuildingType: '',
        numberOfFloors: '',
        footTraffic: '',
        timeline: '',
        serviceType: [],
        equipmentType: [],
        specialRequirements: [],
        budgetRange: '',
        additionalNotes: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-12">
              <div className="relative mb-6">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
                <div className="absolute inset-0 h-12 w-12 border-2 border-blue-200 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Submitting Your Requirement</h3>
                <p className="text-gray-600">Please wait while we process your request...</p>
                <div className="flex justify-center space-x-1 mt-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-600 rounded-full">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Requirement Form</h1>
              <p className="text-xl text-gray-600">
                Please fill out the form to help us understand your specific needs for elevator or escalator solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">1. Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Company name (if applicable)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location (City/State) *</Label>
                      <Input
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bestTimeToContact">Best Time to Contact</Label>
                      <Select value={formData.bestTimeToContact} onValueChange={(value) => handleInputChange('bestTimeToContact', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">2. Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Type of Building *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Residential',
                        'Commercial',
                        'Hospital/Healthcare',
                        'Mall/Retail',
                        'Industrial/Warehouse',
                        'Educational Institution',
                        'Government/Public Infrastructure'
                      ].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.buildingType.includes(type)}
                            onCheckedChange={(checked) => handleCheckboxChange('buildingType', type, checked as boolean)}
                          />
                          <Label htmlFor={type}>{type}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other"
                          checked={formData.buildingType.includes('Other')}
                          onCheckedChange={(checked) => handleCheckboxChange('buildingType', 'Other', checked as boolean)}
                        />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                    {formData.buildingType.includes('Other') && (
                      <Input
                        className="mt-2"
                        value={formData.otherBuildingType}
                        onChange={(e) => handleInputChange('otherBuildingType', e.target.value)}
                        placeholder="Please specify"
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="numberOfFloors">Number of Floors *</Label>
                      <Input
                        id="numberOfFloors"
                        required
                        value={formData.numberOfFloors}
                        onChange={(e) => handleInputChange('numberOfFloors', e.target.value)}
                        placeholder="e.g., 10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="footTraffic">Estimated Foot Traffic (per day)</Label>
                      <Input
                        id="footTraffic"
                        value={formData.footTraffic}
                        onChange={(e) => handleInputChange('footTraffic', e.target.value)}
                        placeholder="e.g., 500 people"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline for Project *</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="3months">Within 3 months</SelectItem>
                          <SelectItem value="3-6months">3–6 months</SelectItem>
                          <SelectItem value="6+months">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Type Required */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">3. Service Type Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'New Installation',
                      'Modernization/Upgrade',
                      'Maintenance/AMC',
                      'Customized Lift Solutions',
                      'Smart Elevator Integration (AI, IoT)',
                      'Consultancy Only'
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.serviceType.includes(service)}
                          onCheckedChange={(checked) => handleCheckboxChange('serviceType', service, checked as boolean)}
                        />
                        <Label htmlFor={service}>{service}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Elevator/Escalator Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">4. Elevator/Escalator Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Passenger Elevator',
                      'Home Elevator',
                      'Hospital/Bed Elevator',
                      'Freight/Service Elevator',
                      'Capsule (Panoramic) Elevator',
                      'Machine-Room Less (MRL)',
                      'Hydraulic Elevator',
                      'Commercial Escalator',
                      'Public Transport Escalator',
                      'Travelators/Moving Walkways'
                    ].map((equipment) => (
                      <div key={equipment} className="flex items-center space-x-2">
                        <Checkbox
                          id={equipment}
                          checked={formData.equipmentType.includes(equipment)}
                          onCheckedChange={(checked) => handleCheckboxChange('equipmentType', equipment, checked as boolean)}
                        />
                        <Label htmlFor={equipment}>{equipment}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">5. Special Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Anti-Microbial Features',
                      'Fire-Resistant Design',
                      'Seismic Compliance',
                      'Child & Senior Safety Features',
                      'Energy Efficiency / Regenerative Drives',
                      'Remote Monitoring Dashboard',
                      'Mobile App Integration'
                    ].map((requirement) => (
                      <div key={requirement} className="flex items-center space-x-2">
                        <Checkbox
                          id={requirement}
                          checked={formData.specialRequirements.includes(requirement)}
                          onCheckedChange={(checked) => handleCheckboxChange('specialRequirements', requirement, checked as boolean)}
                        />
                        <Label htmlFor={requirement}>{requirement}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget and Additional Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">6. Budget & Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5L">Under ₹5 Lakhs</SelectItem>
                        <SelectItem value="5L-10L">₹5 - ₹10 Lakhs</SelectItem>
                        <SelectItem value="10L-25L">₹10 - ₹25 Lakhs</SelectItem>
                        <SelectItem value="25L-50L">₹25 - ₹50 Lakhs</SelectItem>
                        <SelectItem value="50L-1Cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="above-1Cr">Above ₹1 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes or Specifications</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      placeholder="Please provide any additional details, specific requirements, or questions you may have..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Requirement
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClientRequirement;
