
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table for project management
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  client_name TEXT,
  location TEXT,
  project_type TEXT CHECK (project_type IN ('residential', 'commercial', 'industrial')),
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'in_progress', 'completed')),
  start_date DATE,
  completion_date DATE,
  image_url TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('passenger', 'freight', 'hospital', 'home')),
  specifications JSONB,
  price_range TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id AND role = 'admin'
  );
$$;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update all profiles" ON public.profiles
FOR UPDATE USING (public.is_admin(auth.uid()));

-- Contacts policies
CREATE POLICY "Anyone can insert contacts" ON public.contacts
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contacts" ON public.contacts
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update contacts" ON public.contacts
FOR UPDATE USING (public.is_admin(auth.uid()));

-- Projects policies
CREATE POLICY "Everyone can view projects" ON public.projects
FOR SELECT USING (true);

CREATE POLICY "Admins can manage projects" ON public.projects
FOR ALL USING (public.is_admin(auth.uid()));

-- Products policies
CREATE POLICY "Everyone can view products" ON public.products
FOR SELECT USING (true);

CREATE POLICY "Admins can manage products" ON public.products
FOR ALL USING (public.is_admin(auth.uid()));

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample data
INSERT INTO public.products (name, description, category, specifications, price_range, is_featured) VALUES
('Premium Passenger Elevator', 'High-speed passenger elevator with modern design', 'passenger', '{"capacity": "8-10 persons", "speed": "1.5 m/s", "floors": "up to 20"}', '₹8-12 Lakhs', true),
('Freight Elevator Heavy Duty', 'Industrial freight elevator for heavy loads', 'freight', '{"capacity": "2000-5000 kg", "speed": "0.5 m/s", "floors": "up to 15"}', '₹15-25 Lakhs', true),
('Hospital Bed Elevator', 'Specialized elevator for hospital use', 'hospital', '{"capacity": "hospital bed + 4 persons", "speed": "1.0 m/s", "floors": "up to 10"}', '₹10-18 Lakhs', false),
('Home Elevator Compact', 'Compact elevator for residential use', 'home', '{"capacity": "3-4 persons", "speed": "0.3 m/s", "floors": "2-4"}', '₹5-8 Lakhs', true);

INSERT INTO public.projects (title, description, client_name, location, project_type, status) VALUES
('Corporate Tower Elevators', 'Installation of 4 high-speed elevators in a 25-floor corporate building', 'Tech Solutions Pvt Ltd', 'Bangalore', 'commercial', 'completed'),
('Residential Complex Phase 2', 'Multiple elevator installation in luxury apartments', 'Green Valley Builders', 'Chennai', 'residential', 'in_progress'),
('Manufacturing Plant Freight System', 'Heavy duty freight elevators for industrial facility', 'Steel Industries Ltd', 'Coimbatore', 'industrial', 'planning');
