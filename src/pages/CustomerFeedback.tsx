import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageLayout from '@/components/PageLayout';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Star, Send, MessageSquare } from 'lucide-react';
import { customerFeedbackService } from '@/services/customerFeedbackService';

interface FeedbackData {
  // Contact Information
  name: string;
  email: string;
  projectName: string;
  serviceCompletionDate: string;
  
  // Service Type
  serviceType: string;
  otherServiceType: string;
  
  // Ratings
  productQuality: string;
  installationExecution: string;
  teamProfessionalism: string;
  communicationSupport: string;
  safetyStandards: string;
  
  // Feedback
  likedMost: string;
  improvements: string;
  wouldRecommend: string;
  additionalComments: string;
}

const CustomerFeedback = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    projectName: '',
    serviceCompletionDate: '',
    serviceType: '',
    otherServiceType: '',
    productQuality: '',
    installationExecution: '',
    teamProfessionalism: '',
    communicationSupport: '',
    safetyStandards: '',
    likedMost: '',
    improvements: '',
    wouldRecommend: '',
    additionalComments: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await customerFeedbackService.createCustomerFeedback(formData);
      
      toast({
        title: "Feedback Submitted Successfully!",
        description: "Thank you for your valuable feedback. We appreciate your time and input.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectName: '',
        serviceCompletionDate: '',
        serviceType: '',
        otherServiceType: '',
        productQuality: '',
        installationExecution: '',
        teamProfessionalism: '',
        communicationSupport: '',
        safetyStandards: '',
        likedMost: '',
        improvements: '',
        wouldRecommend: '',
        additionalComments: ''
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

  const StarRating = ({ name, value, onChange }: { name: string; value: string; onChange: (value: string) => void }) => {
    return (
      <RadioGroup value={value} onValueChange={onChange} className="flex flex-row space-x-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center space-x-1">
            <RadioGroupItem value={rating.toString()} id={`${name}-${rating}`} className="sr-only" />
            <Label
              htmlFor={`${name}-${rating}`}
              className="cursor-pointer flex items-center"
            >
              <Star
                className={`h-6 w-6 ${
                  parseInt(value) >= rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
              <span className="ml-1 text-sm">{rating}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    );
  };

  if (isSubmitting) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-12">
              <div className="relative mb-6">
                <Loader2 className="h-12 w-12 animate-spin text-green-600" />
                <div className="absolute inset-0 h-12 w-12 border-2 border-green-200 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Submitting Your Feedback</h3>
                <p className="text-gray-600">Thank you for taking the time to share your experience...</p>
                <div className="flex justify-center space-x-1 mt-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-600 rounded-full">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Feedback Form</h1>
              <p className="text-xl text-gray-600">
                We value your feedback. Please take a moment to tell us about your experience with Yatra Elevators & Escalators.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">1. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
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
                      <Label htmlFor="projectName">Project/Location Name *</Label>
                      <Input
                        id="projectName"
                        required
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="Project or location name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="serviceCompletionDate">Date of Service Completion</Label>
                      <Input
                        id="serviceCompletionDate"
                        type="date"
                        value={formData.serviceCompletionDate}
                        onChange={(e) => handleInputChange('serviceCompletionDate', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Type of Service Used */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">2. Type of Service Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-installation">New Installation</SelectItem>
                      <SelectItem value="modernization">Modernization</SelectItem>
                      <SelectItem value="amc-maintenance">AMC / Maintenance</SelectItem>
                      <SelectItem value="consultancy">Consultancy</SelectItem>
                      <SelectItem value="custom-lift">Custom Lift Solution</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.serviceType === 'other' && (
                    <Input
                      className="mt-2"
                      value={formData.otherServiceType}
                      onChange={(e) => handleInputChange('otherServiceType', e.target.value)}
                      placeholder="Please specify the service type"
                    />
                  )}
                </CardContent>
              </Card>

              {/* Ratings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">3. How would you rate the following?</CardTitle>
                  <p className="text-sm text-gray-600">(1 = Poor, 5 = Excellent)</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-2 block">Product Quality</Label>
                    <StarRating
                      name="productQuality"
                      value={formData.productQuality}
                      onChange={(value) => handleInputChange('productQuality', value)}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium mb-2 block">Installation/Execution</Label>
                    <StarRating
                      name="installationExecution"
                      value={formData.installationExecution}
                      onChange={(value) => handleInputChange('installationExecution', value)}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium mb-2 block">Team Professionalism</Label>
                    <StarRating
                      name="teamProfessionalism"
                      value={formData.teamProfessionalism}
                      onChange={(value) => handleInputChange('teamProfessionalism', value)}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium mb-2 block">Communication & Support</Label>
                    <StarRating
                      name="communicationSupport"
                      value={formData.communicationSupport}
                      onChange={(value) => handleInputChange('communicationSupport', value)}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium mb-2 block">Safety Standards</Label>
                    <StarRating
                      name="safetyStandards"
                      value={formData.safetyStandards}
                      onChange={(value) => handleInputChange('safetyStandards', value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">4. Your Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="likedMost">What did you like most about Yatra?</Label>
                    <Textarea
                      id="likedMost"
                      value={formData.likedMost}
                      onChange={(e) => handleInputChange('likedMost', e.target.value)}
                      placeholder="Tell us what impressed you the most..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="improvements">What can we improve?</Label>
                    <Textarea
                      id="improvements"
                      value={formData.improvements}
                      onChange={(e) => handleInputChange('improvements', e.target.value)}
                      placeholder="Share your suggestions for improvement..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium mb-3 block">Would you recommend us to others?</Label>
                    <RadioGroup
                      value={formData.wouldRecommend}
                      onValueChange={(value) => handleInputChange('wouldRecommend', value)}
                      className="flex flex-row space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="recommend-yes" />
                        <Label htmlFor="recommend-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maybe" id="recommend-maybe" />
                        <Label htmlFor="recommend-maybe">Maybe</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="recommend-no" />
                        <Label htmlFor="recommend-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalComments">Any Additional Comments</Label>
                    <Textarea
                      id="additionalComments"
                      value={formData.additionalComments}
                      onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                      placeholder="Share any additional thoughts or comments..."
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
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Feedback
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CustomerFeedback;
