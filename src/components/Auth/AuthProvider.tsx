
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
          console.log('User found, fetching profile for:', session.user.id);
          await fetchProfile(session.user.id);
        } else {
          console.log('No user, clearing profile');
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
      console.log('fetchProfile: Starting fetch for user:', userId);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      console.log('fetchProfile: Query result - data:', data, 'error:', error);

      if (error && error.code !== 'PGRST116') {
        console.error('fetchProfile: Database error:', error);
        throw error;
      }

      if (data) {
        console.log('fetchProfile: Profile found:', data);
        setProfile(data);
      } else {
        console.log('fetchProfile: No profile found, creating one');
        
        // Get user data to extract email
        const { data: userData, error: userError } = await supabase.auth.getUser();
        console.log('fetchProfile: User data:', userData, 'error:', userError);
        
        if (userError) {
          console.error('fetchProfile: Error getting user data:', userError);
          throw userError;
        }

        const userEmail = userData.user?.email;
        console.log('fetchProfile: User email:', userEmail);
        
        // Determine role based on email
        const role: 'admin' | 'user' = userEmail === 'admin@yatraelevators.com' ? 'admin' : 'user';
        console.log('fetchProfile: Assigned role:', role);
        
        const newProfileData = {
          id: userId,
          email: userEmail,
          first_name: userEmail === 'admin@yatraelevators.com' ? 'Admin' : 'User',
          last_name: userEmail === 'admin@yatraelevators.com' ? 'User' : 'Account',
          role: role
        };

        console.log('fetchProfile: Creating profile with data:', newProfileData);
        
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert(newProfileData)
          .select()
          .single();
          
        if (insertError) {
          console.error('fetchProfile: Error creating profile:', insertError);
          // Set a default profile even if insert fails
          setProfile({
            id: userId,
            email: userEmail,
            first_name: newProfileData.first_name,
            last_name: newProfileData.last_name,
            phone: null,
            role: role as any,
            showroom_id: null,
            employee_id: null,
            bulk_buyer_id: null,
          });
        } else {
          console.log('fetchProfile: Profile created successfully:', newProfile);
          setProfile(newProfile);
        }
      }
    } catch (error) {
      console.error('fetchProfile: Unexpected error:', error);
      // Set a minimal default profile
      setProfile({
        id: userId,
        email: null,
        first_name: 'User',
        last_name: 'Account',
        phone: null,
        role: 'user',
        showroom_id: null,
        employee_id: null,
        bulk_buyer_id: null,
      });
    } finally {
      console.log('fetchProfile: Setting loading to false');
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
