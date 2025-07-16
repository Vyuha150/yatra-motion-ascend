-- Add sample test data for admin panel (final corrected version)

-- Sample contacts (using valid status values: new, in_progress, resolved)
INSERT INTO public.contacts (name, email, phone, company, message, status) VALUES
('John Smith', 'john.smith@example.com', '+91-9876543210', 'ABC Construction Ltd', 'Interested in installing 10 elevators for our new residential complex. Please contact us for quotation.', 'new'),
('Sarah Johnson', 'sarah.j@techcorp.com', '+91-9876543211', 'TechCorp Offices', 'Need elevator maintenance service for our 15-floor office building. Urgent requirement.', 'in_progress'),
('Rajesh Kumar', 'rajesh.kumar@builders.com', '+91-9876543212', 'Kumar Builders', 'Looking for premium elevator solutions for luxury apartments. Budget is flexible.', 'resolved'),
('Maria Garcia', 'maria@hotel.com', '+91-9876543213', 'Grand Plaza Hotel', 'Require high-speed elevators for 20-floor hotel. Please schedule a meeting.', 'new'),
('David Chen', 'david.chen@mall.com', '+91-9876543214', 'City Shopping Mall', 'Emergency elevator repair needed. One elevator is completely down.', 'in_progress');

-- Sample leads (using valid status: new, contacted, quoted, converted, lost and lead_type: website, showroom, referral, bulk)
INSERT INTO public.leads (name, email, phone, company, message, status, lead_type, source, estimated_value, follow_up_date) VALUES
('Priya Sharma', 'priya.sharma@residential.com', '+91-9876543215', 'Sharma Residency', 'Interested in home elevators for villa', 'new', 'website', 'website', 500000, '2025-07-20'),
('Michael Brown', 'mike@commercial.com', '+91-9876543216', 'Brown Commercial', 'Need freight elevators for warehouse', 'quoted', 'bulk', 'referral', 1200000, '2025-07-18'),
('Anita Patel', 'anita@healthcare.com', '+91-9876543217', 'Patel Hospital', 'Hospital bed elevators required', 'converted', 'showroom', 'cold_call', 800000, NULL),
('James Wilson', 'james@retail.com', '+91-9876543218', 'Wilson Retail Chain', 'Multiple store locations need elevators', 'contacted', 'referral', 'advertisement', 2000000, '2025-07-25'),
('Sunita Reddy', 'sunita@apartments.com', '+91-9876543219', 'Reddy Apartments', 'Maintenance contract for existing elevators', 'new', 'website', 'website', 300000, '2025-07-22');

-- Sample products
INSERT INTO public.products (name, description, category, price_range, specifications, is_featured, image_url) VALUES
('Premium Passenger Elevator', 'High-speed passenger elevator with modern design and advanced safety features', 'passenger', '₹8,00,000 - ₹15,00,000', '{"capacity": "8-21 persons", "speed": "1.0-2.5 m/s", "floors": "up to 40", "drive": "Gearless traction"}', true, 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400'),
('Freight Cargo Elevator', 'Heavy-duty freight elevator for industrial and commercial use', 'freight', '₹12,00,000 - ₹25,00,000', '{"capacity": "1000-5000 kg", "speed": "0.25-1.0 m/s", "floors": "up to 20", "door": "Center opening"}', true, 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400'),
('Home Villa Elevator', 'Compact and elegant elevator perfect for residential villas', 'residential', '₹4,00,000 - ₹8,00,000', '{"capacity": "3-6 persons", "speed": "0.15-0.63 m/s", "floors": "up to 6", "drive": "Traction/Hydraulic"}', true, 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'),
('Hospital Bed Elevator', 'Specialized elevator for medical facilities with stretcher accommodation', 'medical', '₹10,00,000 - ₹18,00,000', '{"capacity": "2100kg", "speed": "1.0-1.6 m/s", "dimensions": "Large cabin", "features": "Emergency backup"}', false, 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400'),
('Panoramic Glass Elevator', 'Scenic elevator with glass walls for hotels and malls', 'scenic', '₹15,00,000 - ₹30,00,000', '{"capacity": "8-21 persons", "speed": "1.0-2.5 m/s", "features": "360° view", "design": "Architectural glass"}', true, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400');

-- Sample projects
INSERT INTO public.projects (title, description, client_name, location, project_type, status, start_date, completion_date, image_url) VALUES
('Skyline Towers Elevator Installation', 'Installation of 8 high-speed passenger elevators in a 30-floor residential complex', 'Skyline Developers', 'Bangalore', 'Residential Complex', 'completed', '2024-03-15', '2024-08-20', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500'),
('City Mall Modernization', 'Complete elevator modernization project including 12 passenger elevators and 2 freight elevators', 'City Mall Management', 'Chennai', 'Commercial Mall', 'in_progress', '2024-12-01', '2025-04-30', 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500'),
('Metro Hospital Medical Elevators', 'Installation of specialized medical elevators including bed elevators and service elevators', 'Metro Healthcare Group', 'Hyderabad', 'Healthcare', 'completed', '2024-01-10', '2024-06-15', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500'),
('Grand Palace Hotel Scenic Elevators', 'Luxury panoramic glass elevators with scenic city views for 5-star hotel', 'Grand Palace Hotels', 'Mumbai', 'Hospitality', 'planning', '2025-02-01', '2025-07-30', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500'),
('Tech Park Office Complex', 'High-speed elevator installation for modern office complex with 25 floors', 'Tech Innovations Ltd', 'Pune', 'Office Complex', 'in_progress', '2024-10-15', '2025-03-20', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500');

-- Sample showrooms
INSERT INTO public.showrooms (name, location, address, phone, email) VALUES
('Yatra Elevators - Bangalore Main', 'Bangalore', '123 MG Road, Bangalore - 560001', '+91-80-12345678', 'bangalore@yatraelevators.com'),
('Yatra Elevators - Chennai Branch', 'Chennai', '456 Anna Salai, Chennai - 600002', '+91-44-87654321', 'chennai@yatraelevators.com'),
('Yatra Elevators - Hyderabad Office', 'Hyderabad', '789 Banjara Hills, Hyderabad - 500034', '+91-40-11223344', 'hyderabad@yatraelevators.com');

-- Sample additional users with different roles
INSERT INTO public.profiles (id, email, first_name, last_name, role, phone, showroom_id) 
SELECT 
    gen_random_uuid(),
    email,
    first_name,
    last_name,
    role::public.user_role,
    phone,
    (SELECT id FROM public.showrooms LIMIT 1)
FROM (VALUES
    ('manager@yatraelevators.com', 'Rajesh', 'Manager', 'showroom_employee', '+91-9876543220'),
    ('technician@yatraelevators.com', 'Suresh', 'Technician', 'showroom_employee', '+91-9876543221'),
    ('sales@yatraelevators.com', 'Priya', 'Sales', 'showroom_employee', '+91-9876543222'),
    ('bulk.buyer@company.com', 'Corporate', 'Buyer', 'bulk_buyer', '+91-9876543223')
) AS t(email, first_name, last_name, role, phone);