
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AuthForm from './AuthForm';
import { User, LogIn } from 'lucide-react';

interface AuthModalProps {
  children?: React.ReactNode;
}

const AuthModal = ({ children }: AuthModalProps) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [open, setOpen] = useState(false);

  const handleToggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <AuthForm mode={mode} onToggleMode={handleToggleMode} />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
