
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/Auth/useAuth';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
}

const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, register, isAdmin } = useAuth();

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthText = (strength: number) => {
    if (strength < 2) return { text: 'Weak', color: 'text-red-500' };
    if (strength < 4) return { text: 'Fair', color: 'text-yellow-500' };
    if (strength < 5) return { text: 'Good', color: 'text-blue-500' };
    return { text: 'Strong', color: 'text-green-500' };
  };

  const validateForm = () => {
    if (mode === 'signup') {
      if (!firstName.trim()) {
        toast.error('Please enter your first name');
        return false;
      }
      if (!lastName.trim()) {
        toast.error('Please enter your last name');
        return false;
      }
      if (!phone.trim()) {
        toast.error('Please enter your phone number');
        return false;
      }
      // Phone number validation (basic check)
      const phoneRegex = /^[+]?[1-9]\d{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-()]/g, ''))) {
        toast.error('Please enter a valid phone number');
        return false;
      }
    }
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return false;
    }
    
    // Email format validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    
    if (!password.trim()) {
      toast.error('Please enter your password');
      return false;
    }
    
    if (mode === 'signup' && password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      if (mode === 'signup') {
        await register({
          firstName,
          lastName,
          email,
          password,
          phone
        });
        toast.success('Account created successfully! You can now sign in.');
        onToggleMode();
      } else {
        await login({
          email,
          password
        });
        
        // Check if user is admin and redirect accordingly
        if (isAdmin) {
          toast.success('Admin login successful! Redirecting to admin panel...');
          setTimeout(() => navigate('/admin'), 1000);
        } else {
          toast.success('Signed in successfully!');
          setTimeout(() => navigate('/'), 1000);
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</CardTitle>
        <CardDescription>
          {mode === 'signin' 
            ? 'Enter your credentials to access your account' 
            : 'Create a new account to get started'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
                <p className="text-xs text-gray-500 mt-1">Enter a valid phone number (e.g., +91-9876543210)</p>
              </div>
            </>
          )}
          
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            {mode === 'signup' && password && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Password strength:</span>
                  <span className={`font-medium ${getPasswordStrengthText(getPasswordStrength(password)).color}`}>
                    {getPasswordStrengthText(getPasswordStrength(password)).text}
                  </span>
                </div>
                <div className="mt-1 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded ${
                        level <= getPasswordStrength(password)
                          ? level <= 2 
                            ? 'bg-red-500' 
                            : level <= 4 
                            ? 'bg-yellow-500' 
                            : 'bg-green-500'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                {password.length > 0 && password.length < 6 && (
                  <p className="text-xs text-red-500 mt-1">Password must be at least 6 characters long</p>
                )}
              </div>
            )}
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
          </Button>
          
          <div className="text-center">
            <Button
              type="button"
              variant="link"
              onClick={onToggleMode}
              className="text-sm"
            >
              {mode === 'signin' 
                ? "Don't have an account? Sign up" 
                : 'Already have an account? Sign in'
              }
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
