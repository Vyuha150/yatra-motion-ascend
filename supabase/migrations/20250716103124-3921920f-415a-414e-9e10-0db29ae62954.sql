-- Since the user is already authenticated (manager@test.com), 
-- let's create the profile for the existing auth user
-- The auth logs show user ID: accd7a45-cb6a-4c9b-87af-4988c455dffa

-- Insert profile for the currently authenticated user
INSERT INTO public.profiles (
  id, 
  email, 
  first_name, 
  last_name, 
  role, 
  employee_id,
  created_at,
  updated_at
) VALUES (
  'accd7a45-cb6a-4c9b-87af-4988c455dffa',
  'manager@test.com',
  'Test',
  'Manager', 
  'admin',
  'MGR001',
  now(),
  now()
) ON CONFLICT (id) DO UPDATE SET
  role = 'admin',
  first_name = 'Test',
  last_name = 'Manager',
  email = 'manager@test.com',
  employee_id = 'MGR001',
  updated_at = now();