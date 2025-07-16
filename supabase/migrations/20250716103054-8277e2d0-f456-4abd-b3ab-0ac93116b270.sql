-- Create admin profile for the currently logged-in user
-- Based on auth logs, the user manager@test.com with ID accd7a45-cb6a-4c9b-87af-4988c455dffa is logged in

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

-- Also create an employee account profile for testing
-- Generate a UUID for employee
INSERT INTO public.profiles (
  id, 
  email, 
  first_name, 
  last_name, 
  role, 
  employee_id,
  showroom_id,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'employee1@test.com',
  'John',
  'Employee', 
  'showroom_employee',
  'EMP001',
  '550e8400-e29b-41d4-a716-446655440000',
  now(),
  now()
);