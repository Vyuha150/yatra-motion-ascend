import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, Eye, EyeOff, Lock, Mail, User, LogIn, UserPlus, Shield } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { authService } from '@/services/authService';
import { useAuth } from '@/components/Auth/useAuth';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });

  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }

    if (isSignUp && (!formData.firstName || !formData.lastName)) {
      setError('First name and last name are required for registration');
      return false;
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (isSignUp && otpSent && !formData.otp) {
      setError('Please enter the OTP sent to your email');
      return false;
    }

    return true;
  };

  const sendOtp = async () => {
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields before requesting OTP');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await authService.sendOtp(formData.email);
      setOtpSent(true);
      setSuccess('OTP sent to your email. Please check your inbox.');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send OTP. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (isSignUp) {
        if (!otpSent) {
          // First step: send OTP
          await sendOtp();
          return;
        } else {
          // Second step: verify OTP and register
          await authService.verifyOtpAndRegister({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            otp: formData.otp
          });
          setSuccess('Registration successful! Redirecting to home page...');
          setTimeout(() => navigate('/'), 2000);
        }
      } else {
        // Use the authLogin from useAuth hook which will update the global state
        await authLogin({
          email: formData.email,
          password: formData.password
        });
        // Navigate immediately after successful login
        navigate('/', { replace: true });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setSuccess('');
    setOtpSent(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      otp: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-blue-50 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto mb-6">
              {isSignUp ? (
                otpSent ? (
                  <Shield className="h-8 w-8 text-white" />
                ) : (
                  <UserPlus className="h-8 w-8 text-white" />
                )
              ) : (
                <LogIn className="h-8 w-8 text-white" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
              {isSignUp ? (otpSent ? 'Verify Email' : 'Create Account') : 'Welcome Back'}
            </CardTitle>
            <p className="text-gray-600 mt-2 font-inter">
              {isSignUp 
                ? (otpSent ? 'Enter the OTP sent to your email' : 'Join ICONIC Group and start your journey')
                : 'Sign in to access your account'
              }
            </p>
            
            
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {error && (
              <Alert className="mb-6 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <AlertCircle className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-700">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && !otpSent && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-inter">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter"
                        required={isSignUp}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-inter">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter"
                        required={isSignUp}
                      />
                    </div>
                  </div>
                </>
              )}

              {(!isSignUp || !otpSent) && (
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-inter">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter"
                      required
                      disabled={isSignUp && otpSent}
                    />
                  </div>
                </div>
              )}

              {isSignUp && otpSent && (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-sm font-medium text-gray-700 font-inter">
                    Enter OTP
                  </Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="otp"
                      name="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter text-center tracking-widest"
                      maxLength={6}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 font-inter">
                    Didn't receive the code? 
                    <button 
                      type="button" 
                      onClick={sendOtp}
                      className="ml-1 text-primary hover:text-primary/80 font-medium"
                      disabled={loading}
                    >
                      Resend OTP
                    </button>
                  </p>
                </div>
              )}

              {(!isSignUp || !otpSent) && (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 font-inter">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {isSignUp && !otpSent && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 font-inter">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary font-inter"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] font-poppins"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>
                      {isSignUp 
                        ? (otpSent ? 'Verifying...' : 'Sending OTP...') 
                        : 'Signing In...'
                      }
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    {isSignUp ? (
                      otpSent ? (
                        <Shield className="h-5 w-5" />
                      ) : (
                        <Mail className="h-5 w-5" />
                      )
                    ) : (
                      <LogIn className="h-5 w-5" />
                    )}
                    <span>
                      {isSignUp 
                        ? (otpSent ? 'Verify & Create Account' : 'Send OTP') 
                        : 'Sign In'
                      }
                    </span>
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              {!otpSent && (
                <p className="text-sm text-gray-600 font-inter">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="ml-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-200 font-poppins"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              )}
              
              {isSignUp && otpSent && (
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-sm text-gray-600 hover:text-gray-800 font-inter"
                >
                  ← Back to Sign Up
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
