-- First, let's make sure email confirmation is disabled for testing
-- Also, let's check our RLS policies to ensure they're not blocking anything

-- Make sure the handle_new_user function exists and works properly
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'first_name', 'User'),
    COALESCE(NEW.raw_user_meta_data ->> 'last_name', 'Account'),
    'user'::user_role
  );
  RETURN NEW;
END;
$$;

-- Make sure trigger exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Update RLS policies to be more permissive for testing
-- Allow users to insert their own profiles
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" 
ON profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Allow profile updates by owner or admin
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE 
USING (auth.uid() = id OR role IN ('admin', 'super_admin'));

-- Let's also create some sample data for the admin panel to show
-- Insert some sample contacts
INSERT INTO contacts (name, email, phone, company, message, status) VALUES
('John Doe', 'john@example.com', '+91-9876543210', 'ABC Corp', 'Interested in elevator installation for our new building', 'new'),
('Jane Smith', 'jane@example.com', '+91-9876543211', 'XYZ Ltd', 'Need maintenance service for existing elevators', 'in_progress'),
('Mike Johnson', 'mike@example.com', '+91-9876543212', 'Tech Solutions', 'Bulk order inquiry for multiple projects', 'resolved')
ON CONFLICT DO NOTHING;

-- Insert some sample leads
INSERT INTO leads (name, email, phone, company, message, lead_type, status, estimated_value, source) VALUES
('Alice Brown', 'alice@example.com', '+91-9876543213', 'Metro Mall', 'Looking for passenger elevators', 'website', 'new', 500000, 'website'),
('Bob Wilson', 'bob@example.com', '+91-9876543214', 'City Heights', 'Residential elevator project', 'showroom', 'contacted', 300000, 'showroom'),
('Carol Davis', 'carol@example.com', '+91-9876543215', 'Business Tower', 'Commercial elevator installation', 'referral', 'quoted', 800000, 'referral')
ON CONFLICT DO NOTHING;