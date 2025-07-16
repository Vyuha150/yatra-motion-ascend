-- Check if auth users exist and create them if needed
-- Note: We can't directly insert into auth.users, but we can ensure the profiles are properly set up

-- First, let's make sure we have proper test data
-- Delete existing test profiles to start fresh
DELETE FROM profiles WHERE email IN ('manager@test.com', 'employee1@test.com');

-- We'll create the auth users through the application, but ensure profiles table is ready
-- Create a function to handle new user creation properly
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
    COALESCE(NEW.raw_user_meta_data ->> 'first_name', 'Admin'),
    COALESCE(NEW.raw_user_meta_data ->> 'last_name', 'User'),
    COALESCE((NEW.raw_user_meta_data ->> 'role')::user_role, 'user'::user_role)
  );
  RETURN NEW;
END;
$$;

-- Create trigger for auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Update existing profiles to ensure they work with the current system
-- Set proper admin role for the existing user
DO $$
BEGIN
  -- Check if the manager profile exists and update it
  IF EXISTS (SELECT 1 FROM profiles WHERE id = 'accd7a45-cb6a-4c9b-87af-4988c455dffa') THEN
    UPDATE profiles 
    SET 
      role = 'admin',
      first_name = 'Test',
      last_name = 'Manager',
      email = 'manager@test.com',
      employee_id = 'MGR001'
    WHERE id = 'accd7a45-cb6a-4c9b-87af-4988c455dffa';
  END IF;
END $$;