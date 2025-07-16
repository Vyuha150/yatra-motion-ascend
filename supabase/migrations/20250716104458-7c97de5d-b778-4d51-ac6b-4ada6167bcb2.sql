-- Fix the user_role enum and trigger function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Ensure user_role enum exists with all values
DROP TYPE IF EXISTS public.user_role CASCADE;
CREATE TYPE public.user_role AS ENUM ('super_admin', 'admin', 'showroom_employee', 'bulk_buyer', 'user');

-- Recreate the handle_new_user function with proper error handling
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
    CASE 
      WHEN NEW.email = 'admin@yatraelevators.com' THEN 'admin'::user_role
      ELSE 'user'::user_role
    END
  );
  RETURN NEW;
EXCEPTION 
  WHEN OTHERS THEN
    -- Log the error but don't block user creation
    RAISE WARNING 'Failed to create profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create test admin user directly in profiles if it doesn't exist
INSERT INTO public.profiles (
  id, 
  email, 
  first_name, 
  last_name, 
  role,
  created_at,
  updated_at
) VALUES (
  'admin-test-user-id'::uuid,
  'admin@yatraelevators.com',
  'Admin',
  'User',
  'admin'::user_role,
  now(),
  now()
) ON CONFLICT (id) DO NOTHING;