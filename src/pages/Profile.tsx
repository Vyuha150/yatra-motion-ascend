import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/components/Auth/useAuth';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Shield, 
  Building, 
  MapPin,
  Edit3,
  Save,
  X,
  Key,
  Loader2,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Send
} from 'lucide-react';
import { toast } from 'sonner';
import PageLayout from '@/components/PageLayout';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { authService } from '@/services/authService';

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, updateProfile, changePassword, refreshProfile, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(false);
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    preferences: {
      notifications: true,
      newsletter: true
    }
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  // Initialize form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        company: user.profile?.company || '',
        designation: user.profile?.designation || '',
        address: {
          street: user.profile?.address?.street || '',
          city: user.profile?.address?.city || '',
          state: user.profile?.address?.state || '',
          pincode: user.profile?.address?.pincode || '',
          country: user.profile?.address?.country || 'India'
        },
        preferences: {
          notifications: user.preferences?.notifications ?? true,
          newsletter: user.preferences?.newsletter ?? true
        }
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else if (name.startsWith('preferences.')) {
      const prefField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefField]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.firstName.trim()) {
      toast.error('First name is required');
      setLoading(false);
      return;
    }

    if (!formData.lastName.trim()) {
      toast.error('Last name is required');
      setLoading(false);
      return;
    }

    try {
      await updateProfile({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        profile: {
          company: formData.company.trim(),
          designation: formData.designation.trim(),
          address: {
            street: formData.address.street.trim(),
            city: formData.address.city.trim(),
            state: formData.address.state.trim(),
            pincode: formData.address.pincode.trim(),
            country: formData.address.country.trim() || 'India'
          }
        },
        preferences: formData.preferences
      });

      toast.success('Profile updated successfully!');
      setIsEditing(false);
      // Refresh the profile to get the latest data
      await refreshProfile();
    } catch (error: unknown) {
      console.error('Profile update error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to update profile. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!passwordData.currentPassword) {
      toast.error('Please enter your current password');
      return;
    }

    if (!passwordData.newPassword) {
      toast.error('Please enter a new password');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters long');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });

      toast.success('Password changed successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error: unknown) {
      console.error('Password change error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to change password. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSendVerificationEmail = async () => {
    if (!user?.email) {
      toast.error('No email address found');
      return;
    }

    setEmailVerificationLoading(true);

    try {
      await authService.sendVerificationOTP(user.email);
      toast.success('Verification email sent! Please check your inbox.');
    } catch (error: unknown) {
      console.error('Email verification error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send verification email. Please try again.';
      toast.error(errorMessage);
    } finally {
      setEmailVerificationLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) {
      toast.error('No user found');
      return;
    }

    setDeleteAccountLoading(true);

    try {
      await authService.deleteAccount();
      toast.success('Account deleted successfully');
      logout();
      navigate('/');
    } catch (error: unknown) {
      console.error('Delete account error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete account. Please try again.';
      toast.error(errorMessage);
    } finally {
      setDeleteAccountLoading(false);
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'destructive';
      case 'admin':
        return 'default';
      case 'showroom_employee':
        return 'secondary';
      case 'bulk_buyer':
        return 'outline';
      case 'user':
      default:
        return 'secondary';
    }
  };

  const formatRole = (role: string) => {
    return role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (authLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl">
                {user.firstName} {user.lastName}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Badge variant={getRoleBadgeVariant(user.role)}>
                  <Shield className="h-3 w-3 mr-1" />
                  {formatRole(user.role)}
                </Badge>
                {user.isEmailVerified ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Email Verified
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Email Not Verified
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mt-2 flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                Member since {new Date(user.createdAt || '').toLocaleDateString()}
              </p>
              {user.updatedAt && (
                <p className="text-muted-foreground text-sm mt-1 flex items-center justify-center gap-2">
                  Last updated: {new Date(user.updatedAt).toLocaleDateString()}
                </p>
              )}
            </CardHeader>
          </Card>

          {/* Profile Details */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="account">Account Details</TabsTrigger>
              <TabsTrigger value="security">Security Settings</TabsTrigger>
              <TabsTrigger value="danger" className="text-red-600">Danger Zone</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Profile Information</CardTitle>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    size="sm"
                    onClick={() => {
                      if (isEditing) {
                        // Reset form data
                        setFormData({
                          firstName: user.firstName || '',
                          lastName: user.lastName || '',
                          email: user.email || '',
                          phone: user.phone || '',
                          company: user.profile?.company || '',
                          designation: user.profile?.designation || '',
                          address: {
                            street: user.profile?.address?.street || '',
                            city: user.profile?.address?.city || '',
                            state: user.profile?.address?.state || '',
                            pincode: user.profile?.address?.pincode || '',
                            country: user.profile?.address?.country || 'India'
                          },
                          preferences: {
                            notifications: user.preferences?.notifications ?? true,
                            newsletter: user.preferences?.newsletter ?? true
                          }
                        });
                      }
                      setIsEditing(!isEditing);
                    }}
                  >
                    {isEditing ? (
                      <>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          disabled={true} // Email should not be editable
                          className="pl-10"
                          placeholder="Email address"
                        />
                        {user?.isEmailVerified ? (
                          <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                        ) : (
                          <AlertTriangle className="absolute right-3 top-3 h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Email cannot be changed. Contact support if needed.
                        </p>
                        {!user?.isEmailVerified && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleSendVerificationEmail}
                            disabled={emailVerificationLoading}
                            className="text-xs"
                          >
                            {emailVerificationLoading ? (
                              <>
                                <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="mr-1 h-3 w-3" />
                                Verify Email
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                      {!user?.isEmailVerified && (
                        <div className="flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <p className="text-xs text-yellow-700">
                            Your email address is not verified. Click "Verify Email" to send a verification link.
                          </p>
                        </div>
                      )}
                      {user?.isEmailVerified && (
                        <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-md">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <p className="text-xs text-green-700">
                            Your email address has been verified.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="pl-10"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          placeholder="Enter your designation"
                        />
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <Label className="text-base font-semibold">Address</Label>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address.street">Street Address</Label>
                        <Input
                          id="address.street"
                          name="address.street"
                          value={formData.address.street}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          placeholder="Enter your street address"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address.city">City</Label>
                          <Input
                            id="address.city"
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Enter your city"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address.state">State</Label>
                          <Input
                            id="address.state"
                            name="address.state"
                            value={formData.address.state}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Enter your state"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address.pincode">PIN Code</Label>
                          <Input
                            id="address.pincode"
                            name="address.pincode"
                            value={formData.address.pincode}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Enter your PIN code"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address.country">Country</Label>
                          <Input
                            id="address.country"
                            name="address.country"
                            value={formData.address.country}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Enter your country"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Label className="text-base font-semibold">Preferences</Label>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="preferences.notifications"
                            name="preferences.notifications"
                            checked={formData.preferences.notifications}
                            onCheckedChange={(checked) => {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  notifications: checked as boolean
                                }
                              }));
                            }}
                            disabled={!isEditing}
                          />
                          <Label htmlFor="preferences.notifications" className="text-sm font-normal">
                            Receive notifications about orders and updates
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="preferences.newsletter"
                            name="preferences.newsletter"
                            checked={formData.preferences.newsletter}
                            onCheckedChange={(checked) => {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  newsletter: checked as boolean
                                }
                              }));
                            }}
                            disabled={!isEditing}
                          />
                          <Label htmlFor="preferences.newsletter" className="text-sm font-normal">
                            Subscribe to newsletter and promotional content
                          </Label>
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex justify-end">
                        <Button type="submit" disabled={loading}>
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Updating...
                            </>
                          ) : (
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Save Changes
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Account Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground">User ID</Label>
                        <p className="text-sm font-mono bg-muted p-2 rounded">{user._id}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground">Account Status</Label>
                        <div className="flex items-center gap-2">
                          <Badge variant={user.isActive !== false ? "default" : "secondary"}>
                            {user.isActive !== false ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground">Email Verification</Label>
                        <div className="flex items-center gap-2">
                          <Badge variant={user.isEmailVerified ? "default" : "outline"}>
                            {user.isEmailVerified ? "Verified" : "Pending"}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground">User Role</Label>
                        <Badge variant={getRoleBadgeVariant(user.role)}>
                          <Shield className="h-3 w-3 mr-1" />
                          {formatRole(user.role)}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Timestamps */}
                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-muted-foreground">Account Created</Label>
                          <p className="text-sm">{new Date(user.createdAt || '').toLocaleString()}</p>
                        </div>
                        
                        {user.updatedAt && (
                          <div className="space-y-2">
                            <Label className="text-sm font-semibold text-muted-foreground">Last Modified</Label>
                            <p className="text-sm">{new Date(user.updatedAt).toLocaleString()}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Current Preferences Display */}
                    <div className="border-t pt-4">
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-muted-foreground">Current Preferences</Label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Notifications</span>
                            <Badge variant={user.preferences?.notifications ? "default" : "secondary"}>
                              {user.preferences?.notifications ? "Enabled" : "Disabled"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Newsletter</span>
                            <Badge variant={user.preferences?.newsletter ? "default" : "secondary"}>
                              {user.preferences?.newsletter ? "Subscribed" : "Unsubscribed"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Change Password
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter your current password"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter new password (min. 6 characters)"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm your new password"
                        required
                      />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Changing Password...
                        </>
                      ) : (
                        'Change Password'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="danger">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    Danger Zone
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    These actions are irreversible. Please proceed with caution.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email Verification Status */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Email Verification Status</h3>
                      {user?.isEmailVerified ? (
                        <Badge variant="default" className="bg-green-500">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Not Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {user?.isEmailVerified 
                        ? 'Your email address has been verified and your account is fully activated.'
                        : 'Your email address needs to be verified to ensure account security and enable all features.'
                      }
                    </p>
                    {!user?.isEmailVerified && (
                      <Button
                        onClick={handleSendVerificationEmail}
                        disabled={emailVerificationLoading}
                        variant="outline"
                        size="sm"
                      >
                        {emailVerificationLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Verification Email...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Verification Email
                          </>
                        )}
                      </Button>
                    )}
                  </div>

                  {/* Delete Account Section */}
                  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Trash2 className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-red-600">Delete Account</h3>
                    </div>
                    <p className="text-sm text-red-700 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                      All your orders, preferences, and profile information will be lost forever.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-red-600 font-medium">
                        Before deleting your account, please ensure:
                      </p>
                      <ul className="text-xs text-red-600 list-disc list-inside space-y-1">
                        <li>You have downloaded any important data</li>
                        <li>You have completed or cancelled any pending orders</li>
                        <li>You understand this action is irreversible</li>
                      </ul>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="mt-4"
                          disabled={deleteAccountLoading}
                        >
                          {deleteAccountLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Deleting Account...
                            </>
                          ) : (
                            <>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete My Account
                            </>
                          )}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex items-center gap-2 text-red-600">
                            <AlertTriangle className="h-5 w-5" />
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="space-y-2">
                            <p>
                              This will permanently delete your account for <strong>{user?.email}</strong> 
                              and remove all your data from our servers.
                            </p>
                            <p className="text-red-600 font-medium">
                              This action cannot be undone. All your:
                            </p>
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>Profile information and preferences</li>
                              <li>Order history and tracking data</li>
                              <li>Saved addresses and payment methods</li>
                              <li>Account settings and customizations</li>
                            </ul>
                            <p className="text-red-600 font-medium">
                              will be permanently lost.
                            </p>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={handleDeleteAccount}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Yes, Delete My Account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
