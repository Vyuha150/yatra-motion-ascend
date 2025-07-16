-- Update the trigger function to handle admin role creation properly
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  -- Special handling for admin accounts
  IF NEW.email = 'admin@yatraelevators.com' THEN
    INSERT INTO public.profiles (id, email, first_name, last_name, role)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data ->> 'first_name', 'Admin'),
      COALESCE(NEW.raw_user_meta_data ->> 'last_name', 'User'),
      'admin'::user_role
    );
  ELSE
    INSERT INTO public.profiles (id, email, first_name, last_name, role)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data ->> 'first_name', 'User'),
      COALESCE(NEW.raw_user_meta_data ->> 'last_name', 'Account'),
      COALESCE((NEW.raw_user_meta_data ->> 'role')::user_role, 'user'::user_role)
    );
  END IF;
  RETURN NEW;
END;
$$;