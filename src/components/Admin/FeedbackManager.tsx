import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/components/Auth/useAuth';
import { Search, Star, Eye, MessageSquare, Loader2, Calendar, User, Mail } from 'lucide-react';
import { format } from 'date-fns';

interface CustomerFeedback {
  _id: string;
  name: string;
  email: string;
  projectName: string;
  serviceType: string;
  ratings: {
    productQuality: number;
    installationExecution: number;
    teamProfessionalism: number;
    communicationSupport: number;
    safetyStandards: number;
  };
  averageRating: number;
  wouldRecommend: string;
  likedMost: string;
  improvements: string;
  status: 'new' | 'reviewed' | 'responded' | 'archived';
  createdAt: string;
  updatedAt: string;
}

const FeedbackManager = () => {
  const { isAdmin, isSuperAdmin } = useAuth();
  const [feedback, setFeedback] = useState<CustomerFeedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      // Mock data for now - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockFeedback: CustomerFeedback[] = [
        {
          _id: '1',
          name: 'Amit Patel',
          email: 'amit.patel@email.com',
          projectName: 'Residential Complex - Phase 2',
          serviceType: 'new-installation',
          ratings: {
            productQuality: 5,
            installationExecution: 5,
            teamProfessionalism: 4,
            communicationSupport: 5,
            safetyStandards: 5
          },
          averageRating: 4.8,
          wouldRecommend: 'yes',
          likedMost: 'Excellent service quality and professional team. Installation was completed on time.',
          improvements: 'Could improve communication during weekends.',
          status: 'new',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          _id: '2',
          name: 'Sneha Reddy',
          email: 'sneha.reddy@company.com',
          projectName: 'Office Building Modernization',
          serviceType: 'modernization',
          ratings: {
            productQuality: 4,
            installationExecution: 4,
            teamProfessionalism: 5,
            communicationSupport: 4,
            safetyStandards: 4
          },
          averageRating: 4.2,
          wouldRecommend: 'yes',
          likedMost: 'Professional approach and quality work.',
          improvements: 'Installation took slightly longer than expected.',
          status: 'reviewed',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          _id: '3',
          name: 'Rahul Kumar',
          email: 'rahul.k@email.com',
          projectName: 'Shopping Mall Elevator Service',
          serviceType: 'amc-maintenance',
          ratings: {
            productQuality: 3,
            installationExecution: 3,
            teamProfessionalism: 4,
            communicationSupport: 3,
            safetyStandards: 4
          },
          averageRating: 3.4,
          wouldRecommend: 'maybe',
          likedMost: 'Regular maintenance schedule.',
          improvements: 'Response time for emergency calls could be faster.',
          status: 'responded',
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];
      
      setFeedback(mockFeedback);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateFeedbackStatus = async (feedbackId: string, newStatus: string) => {
    try {
      setFeedback(feedback.map(fb => 
        fb._id === feedbackId ? { 
          ...fb, 
          status: newStatus as 'new' | 'reviewed' | 'responded' | 'archived' 
        } : fb
      ));
    } catch (error) {
      console.error('Error updating feedback status:', error);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'reviewed': return 'secondary';
      case 'responded': return 'outline';
      case 'archived': return 'destructive';
      default: return 'default';
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className={`ml-2 font-medium ${getRatingColor(rating)}`}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      return format(date, 'MMM dd, yyyy');
    } catch {
      return 'Invalid date';
    }
  };

  const filteredFeedback = feedback.filter(fb => {
    const matchesSearch = fb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fb.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fb.projectName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || fb.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || 
                         (ratingFilter === 'high' && fb.averageRating >= 4) ||
                         (ratingFilter === 'medium' && fb.averageRating >= 3 && fb.averageRating < 4) ||
                         (ratingFilter === 'low' && fb.averageRating < 3);
    
    return matchesSearch && matchesStatus && matchesRating;
  });

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Customer Feedback</h2>
        </div>
        <Card>
          <CardContent className="flex justify-center items-center p-12">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Loader2 className="h-8 w-8 animate-spin text-green-600" />
                <div className="absolute inset-0 h-8 w-8 border-2 border-green-200 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-medium text-gray-800">Loading Feedback...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const averageRating = feedback.length > 0 
    ? feedback.reduce((sum, fb) => sum + fb.averageRating, 0) / feedback.length 
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Feedback</h2>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{averageRating.toFixed(1)}</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            <MessageSquare className="h-4 w-4 mr-1" />
            {filteredFeedback.length} Feedback
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search feedback..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="high">High (4+ stars)</SelectItem>
                <SelectItem value="medium">Medium (3-4 stars)</SelectItem>
                <SelectItem value="low">Low (&lt; 3 stars)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback ({filteredFeedback.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Service Type</TableHead>
                  <TableHead>Overall Rating</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.map((feedbackItem) => (
                  <TableRow key={feedbackItem._id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {feedbackItem.name}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {feedbackItem.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{feedbackItem.projectName}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {feedbackItem.serviceType.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {renderStars(feedbackItem.averageRating)}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          feedbackItem.wouldRecommend === 'yes' ? 'default' :
                          feedbackItem.wouldRecommend === 'maybe' ? 'secondary' : 'destructive'
                        }
                      >
                        {feedbackItem.wouldRecommend}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Select 
                        value={feedbackItem.status} 
                        onValueChange={(value) => updateFeedbackStatus(feedbackItem._id, value)}
                        disabled={!isAdmin && !isSuperAdmin}
                      >
                        <SelectTrigger className="w-32">
                          <Badge variant={getStatusBadgeVariant(feedbackItem.status)}>
                            {feedbackItem.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="reviewed">Reviewed</SelectItem>
                          <SelectItem value="responded">Responded</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(feedbackItem.createdAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {(isAdmin || isSuperAdmin) && (
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackManager;
