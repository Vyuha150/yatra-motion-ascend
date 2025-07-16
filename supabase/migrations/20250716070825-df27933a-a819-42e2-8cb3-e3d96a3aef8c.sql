-- Update roles for sample test accounts
-- This assumes you've already signed up with the test email addresses

UPDATE public.profiles 
SET role = 'admin',
    first_name = 'Test',
    last_name = 'Manager',
    employee_id = 'MGR001'
WHERE email = 'manager@test.com';

UPDATE public.profiles 
SET role = 'showroom_employee',
    first_name = 'John',
    last_name = 'Employee', 
    employee_id = 'EMP001'
WHERE email = 'employee1@test.com';

UPDATE public.profiles 
SET role = 'showroom_employee',
    first_name = 'Jane',
    last_name = 'Employee',
    employee_id = 'EMP002' 
WHERE email = 'employee2@test.com';

-- Create a sample showroom if it doesn't exist
INSERT INTO public.showrooms (name, location, address, phone, email)
VALUES ('Main Showroom', 'Mumbai', '123 Business District, Mumbai', '+91-9999999999', 'showroom@test.com')
ON CONFLICT DO NOTHING;

-- Assign employees to the showroom
UPDATE public.profiles 
SET showroom_id = (SELECT id FROM public.showrooms WHERE name = 'Main Showroom' LIMIT 1)
WHERE email IN ('employee1@test.com', 'employee2@test.com');