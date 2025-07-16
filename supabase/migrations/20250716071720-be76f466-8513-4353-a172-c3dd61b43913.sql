-- First, let's create proper test accounts with admin access
-- Create admin user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  email_change,
  email_change_token_new,
  recovery_token,
  email_change_token_current,
  email_change_confirm_status,
  banned_until,
  reauthentication_token,
  reauthentication_sent_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  'accd7a45-cb6a-4c9b-87af-4988c455dffa',
  'authenticated',
  'authenticated',
  'manager@test.com',
  '$2a$10$5jfq9A6BNjQ5JQ.5fJ5YOuOkWF6t6D3fOhc.Y6BPp4fOLPQLlNX2e', -- password123
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"first_name": "Test", "last_name": "Manager"}',
  false,
  NOW(),
  NOW(),
  null,
  null,
  '',
  '',
  '',
  '',
  0,
  null,
  '',
  null
) ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  raw_user_meta_data = EXCLUDED.raw_user_meta_data;

-- Create employee 1
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  email_change,
  email_change_token_new,
  recovery_token,
  email_change_token_current,
  email_change_confirm_status,
  banned_until,
  reauthentication_token,
  reauthentication_sent_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  'd598df52-7c92-45df-ac46-106a01813cb7',
  'authenticated',
  'authenticated',
  'employee1@test.com',
  '$2a$10$5jfq9A6BNjQ5JQ.5fJ5YOuOkWF6t6D3fOhc.Y6BPp4fOLPQLlNX2e', -- password123
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"first_name": "John", "last_name": "Employee"}',
  false,
  NOW(),
  NOW(),
  null,
  null,
  '',
  '',
  '',
  '',
  0,
  null,
  '',
  null
) ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  raw_user_meta_data = EXCLUDED.raw_user_meta_data;

-- Create profiles for the test accounts
INSERT INTO public.profiles (id, email, first_name, last_name, role, employee_id)
VALUES 
  ('accd7a45-cb6a-4c9b-87af-4988c455dffa', 'manager@test.com', 'Test', 'Manager', 'admin', 'MGR001'),
  ('d598df52-7c92-45df-ac46-106a01813cb7', 'employee1@test.com', 'John', 'Employee', 'showroom_employee', 'EMP001')
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  role = EXCLUDED.role,
  employee_id = EXCLUDED.employee_id;

-- Create a sample showroom
INSERT INTO public.showrooms (id, name, location, address, phone, email)
VALUES ('550e8400-e29b-41d4-a716-446655440000', 'Main Showroom', 'Mumbai', '123 Business District, Mumbai', '+91-9999999999', 'showroom@test.com')
ON CONFLICT (id) DO NOTHING;

-- Assign employee to showroom
UPDATE public.profiles 
SET showroom_id = '550e8400-e29b-41d4-a716-446655440000'
WHERE email = 'employee1@test.com';