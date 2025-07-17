
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  role: 'super_admin' | 'admin' | 'showroom_employee' | 'bulk_buyer' | 'user';
  showroom_id: string | null;
  employee_id: string | null;
  bulk_buyer_id: string | null;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isShowroomEmployee: boolean;
  isBulkBuyer: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to ensure loading state resolves
    const loadingTimeout = setTimeout(() => {
      console.log('Auth loading timeout - forcing loading to false');
      setLoading(false);
    }, 10000); // 10 second timeout

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
        clearTimeout(loadingTimeout);
      }
    }).catch((error) => {
      console.error('Error getting session:', error);
      setLoading(false);
      clearTimeout(loadingTimeout);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.id);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
        clearTimeout(loadingTimeout);
      }
    );

    return () => {
      subscription.unsubscribe();
      clearTimeout(loadingTimeout);
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle(); // Use maybeSingle to handle case where profile doesn't exist

      if (error) {
        console.error('Error fetching profile:', error);
        // Set a default profile if fetch fails
        setProfile({
          id: userId,
          email: null,
          first_name: null,
          last_name: null,
          phone: null,
          role: 'user',
          showroom_id: null,
          employee_id: null,
          bulk_buyer_id: null,
        });
      } else if (data) {
        console.log('Profile fetched successfully:', data);
        setProfile(data);
      } else {
        console.log('No profile found, creating default profile');
        // Profile doesn't exist, set a default one
        setProfile({
          id: userId,
          email: null,
          first_name: null,
          last_name: null,
          phone: null,
          role: 'user',
          showroom_id: null,
          employee_id: null,
          bulk_buyer_id: null,
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      // Set a default profile if anything goes wrong
      setProfile({
        id: userId,
        email: null,
        first_name: null,
        last_name: null,
        phone: null,
        role: 'user',
        showroom_id: null,
        employee_id: null,
        bulk_buyer_id: null,
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';
  const isSuperAdmin = profile?.role === 'super_admin';
  const isShowroomEmployee = profile?.role === 'showroom_employee';
  const isBulkBuyer = profile?.role === 'bulk_buyer';

  const value = {
    user,
    profile,
    session,
    loading,
    signOut,
    isAdmin,
    isSuperAdmin,
    isShowroomEmployee,
    isBulkBuyer
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
