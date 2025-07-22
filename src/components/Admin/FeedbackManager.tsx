import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/components/Auth/useAuth';
import { Search, Star, Eye, MessageSquare, Loader2, Calendar, User, Mail, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { customerFeedbackService, CustomerFeedback } from '@/services/customerFeedbackService';
import { useToast } from '@/hooks/use-toast';

interface FeedbackWithAverage extends CustomerFeedback {
  averageRating: number;
}

const FeedbackManager = () => {
  const { isAdmin, isSuperAdmin } = useAuth();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<FeedbackWithAverage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [error, setError] = useState<string | null>(null);

  const fetchFeedback = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const filters = {
        search: searchTerm || undefined,
        status: statusFilter === 'all' ? undefined : statusFilter,
        rating: ratingFilter === 'all' ? undefined : ratingFilter,
        page: 1,
        limit: 50
      };

      const response = await customerFeedbackService.getCustomerFeedback(filters);
      
      if (response.data) {
        // Calculate average rating for each feedback
        const feedbackWithAverage = (Array.isArray(response.data) ? response.data : []).map((item: CustomerFeedback) => {
          const ratings = item.ratings || {};
          const validRatings = Object.values(ratings).filter((rating): rating is number => 
            typeof rating === 'number' && rating > 0
          );
          const averageRating = validRatings.length > 0 
            ? validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length 
            : 0;
          
          return {
            ...item,
            averageRating
          };
        });
        setFeedback(feedbackWithAverage);
      } else {
        setFeedback([]);
      }
    } catch (error) {
      console.error('Failed to fetch feedback:', error);
      setError('Failed to load customer feedback');
      setFeedback([]);
      toast({
        title: "Error",
        description: "Failed to load customer feedback",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [searchTerm, statusFilter, ratingFilter, toast]);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  const updateFeedbackStatus = async (feedbackId: string, newStatus: string) => {
    try {
      await customerFeedbackService.updateFeedbackStatus(feedbackId, newStatus);
      setFeedback(feedback.map(fb => 
        fb._id === feedbackId ? { 
          ...fb, 
          status: newStatus as CustomerFeedback['status']
        } : fb
      ));
      toast({
        title: "Status Updated",
        description: "Feedback status has been updated successfully",
      });
    } catch (error) {
      console.error('Error updating feedback status:', error);
      toast({
        title: "Error",
        description: "Failed to update feedback status",
        variant: "destructive",
      });
    }
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'reviewed': return 'secondary';
      case 'responded': return 'outline';
      case 'closed': return 'destructive';
      default: return 'default';
    }
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
          <CardContent className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-4">
              <Loader2 className="h-6 w-6 animate-spin" />
              <p>Loading feedback...</p>
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
      {/* Header with Statistics */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Feedback</h2>
        <div className="flex space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{feedback.length}</div>
            <div className="text-sm text-muted-foreground">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="flex items-center space-x-1">
              <div className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</div>
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search & Filter</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search by customer name, email, or project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="high">High (4+ stars)</SelectItem>
                <SelectItem value="medium">Medium (3-4 stars)</SelectItem>
                <SelectItem value="low">Low (&lt;3 stars)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Project & Service</TableHead>
                  <TableHead>Ratings</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-12">
                      <div className="flex flex-col items-center space-y-4">
                        <AlertCircle className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">No Feedback Found</h3>
                          <p className="text-muted-foreground">
                            {error ? error : (searchTerm || statusFilter !== 'all' || ratingFilter !== 'all') 
                              ? "No feedback matches your current filters." 
                              : "No customer feedback has been submitted yet."
                            }
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredFeedback.map((fb) => (
                    <TableRow key={fb._id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {fb.name}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {fb.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{fb.projectName}</div>
                          <Badge variant="outline" className="text-xs">
                            {fb.serviceType}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-1">
                            {renderStarRating(Math.round(fb.averageRating))}
                            <span className="text-sm font-medium ml-2">
                              {fb.averageRating.toFixed(1)}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Quality: {fb.ratings?.productQuality || 'N/A'}/5 | 
                            Service: {fb.ratings?.teamProfessionalism || 'N/A'}/5
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={fb.wouldRecommend === 'yes' ? 'default' : 
                                  fb.wouldRecommend === 'maybe' ? 'secondary' : 'destructive'}
                        >
                          {fb.wouldRecommend || 'Not specified'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select 
                          value={fb.status} 
                          onValueChange={(value) => updateFeedbackStatus(fb._id, value)}
                          disabled={!isAdmin && !isSuperAdmin}
                        >
                          <SelectTrigger className="w-32">
                            <Badge variant={getStatusBadgeVariant(fb.status)}>
                              {fb.status}
                            </Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="reviewed">Reviewed</SelectItem>
                            <SelectItem value="responded">Responded</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(fb.createdAt)}
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
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackManager;
