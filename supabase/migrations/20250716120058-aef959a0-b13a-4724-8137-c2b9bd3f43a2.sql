-- Add sample test data for admin panel

-- Sample contacts
INSERT INTO public.contacts (name, email, phone, company, message, status) VALUES
('John Smith', 'john.smith@example.com', '+91-9876543210', 'ABC Construction Ltd', 'Interested in installing 10 elevators for our new residential complex. Please contact us for quotation.', 'new'),
('Sarah Johnson', 'sarah.j@techcorp.com', '+91-9876543211', 'TechCorp Offices', 'Need elevator maintenance service for our 15-floor office building. Urgent requirement.', 'in_progress'),
('Rajesh Kumar', 'rajesh.kumar@builders.com', '+91-9876543212', 'Kumar Builders', 'Looking for premium elevator solutions for luxury apartments. Budget is flexible.', 'responded'),
('Maria Garcia', 'maria@hotel.com', '+91-9876543213', 'Grand Plaza Hotel', 'Require high-speed elevators for 20-floor hotel. Please schedule a meeting.', 'new'),
('David Chen', 'david.chen@mall.com', '+91-9876543214', 'City Shopping Mall', 'Emergency elevator repair needed. One elevator is completely down.', 'closed');

-- Sample leads
INSERT INTO public.leads (name, email, phone, company, message, status, lead_type, source, estimated_value, follow_up_date) VALUES
('Priya Sharma', 'priya.sharma@residential.com', '+91-9876543215', 'Sharma Residency', 'Interested in home elevators for villa', 'new', 'residential', 'website', 500000, '2025-07-20'),
('Michael Brown', 'mike@commercial.com', '+91-9876543216', 'Brown Commercial', 'Need freight elevators for warehouse', 'qualified', 'commercial', 'referral', 1200000, '2025-07-18'),
('Anita Patel', 'anita@healthcare.com', '+91-9876543217', 'Patel Hospital', 'Hospital bed elevators required', 'converted', 'healthcare', 'cold_call', 800000, NULL),
('James Wilson', 'james@retail.com', '+91-9876543218', 'Wilson Retail Chain', 'Multiple store locations need elevators', 'follow_up', 'retail', 'advertisement', 2000000, '2025-07-25'),
('Sunita Reddy', 'sunita@apartments.com', '+91-9876543219', 'Reddy Apartments', 'Maintenance contract for existing elevators', 'new', 'maintenance', 'website', 300000, '2025-07-22');

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

-- Sample showrooms (needed for other data)
INSERT INTO public.showrooms (name, location, address, phone, email) VALUES
('Yatra Elevators - Bangalore Main', 'Bangalore', '123 MG Road, Bangalore - 560001', '+91-80-12345678', 'bangalore@yatraelevators.com'),
('Yatra Elevators - Chennai Branch', 'Chennai', '456 Anna Salai, Chennai - 600002', '+91-44-87654321', 'chennai@yatraelevators.com'),
('Yatra Elevators - Hyderabad Office', 'Hyderabad', '789 Banjara Hills, Hyderabad - 500034', '+91-40-11223344', 'hyderabad@yatraelevators.com');

-- Sample users with different roles
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

-- Sample orders
INSERT INTO public.orders (order_number, customer_name, customer_email, customer_phone, customer_address, product_id, quantity, unit_price, total_amount, final_amount, status, order_type, delivery_date, installation_date) VALUES
('ORD20250001', 'ABC Construction Ltd', 'orders@abcconstruction.com', '+91-9876543230', '123 Construction Site, Bangalore', (SELECT id FROM public.products WHERE name = 'Premium Passenger Elevator' LIMIT 1), 4, 1200000, 4800000, 4560000, 'confirmed', 'bulk', '2025-08-15', '2025-09-01'),
('ORD20250002', 'Sharma Residency', 'contact@sharmaresidency.com', '+91-9876543231', '456 Villa Street, Chennai', (SELECT id FROM public.products WHERE name = 'Home Villa Elevator' LIMIT 1), 1, 600000, 600000, 600000, 'in_production', 'retail', '2025-07-30', '2025-08-15'),
('ORD20250003', 'City Hospital', 'procurement@cityhospital.com', '+91-9876543232', '789 Medical District, Hyderabad', (SELECT id FROM public.products WHERE name = 'Hospital Bed Elevator' LIMIT 1), 2, 1400000, 2800000, 2660000, 'delivered', 'institutional', '2025-06-20', '2025-07-05'),
('ORD20250004', 'Grand Mall Complex', 'admin@grandmall.com', '+91-9876543233', '321 Shopping District, Mumbai', (SELECT id FROM public.products WHERE name = 'Freight Cargo Elevator' LIMIT 1), 3, 1800000, 5400000, 5130000, 'pending', 'commercial', '2025-09-10', '2025-10-01'),
('ORD20250005', 'Luxury Hotels Group', 'projects@luxuryhotels.com', '+91-9876543234', '654 Hotel Avenue, Pune', (SELECT id FROM public.products WHERE name = 'Panoramic Glass Elevator' LIMIT 1), 6, 2200000, 13200000, 12540000, 'confirmed', 'hospitality', '2025-08-25', '2025-09-20');

-- Sample invoices
INSERT INTO public.invoices (invoice_number, customer_name, customer_address, invoice_date, due_date, subtotal, tax_amount, total_amount, paid_amount, balance_amount, status, payment_method, invoice_type, order_id) VALUES
('INV20250001', 'ABC Construction Ltd', '123 Construction Site, Bangalore', '2025-07-10', '2025-08-10', 4560000, 820800, 5380800, 2000000, 3380800, 'partial_paid', 'bank_transfer', 'sales', (SELECT id FROM public.orders WHERE order_number = 'ORD20250001')),
('INV20250002', 'Sharma Residency', '456 Villa Street, Chennai', '2025-07-08', '2025-08-08', 600000, 108000, 708000, 708000, 0, 'paid', 'credit_card', 'sales', (SELECT id FROM public.orders WHERE order_number = 'ORD20250002')),
('INV20250003', 'City Hospital', '789 Medical District, Hyderabad', '2025-06-15', '2025-07-15', 2660000, 478800, 3138800, 3138800, 0, 'paid', 'bank_transfer', 'sales', (SELECT id FROM public.orders WHERE order_number = 'ORD20250003')),
('INV20250004', 'Grand Mall Complex', '321 Shopping District, Mumbai', '2025-07-12', '2025-08-12', 5130000, 923400, 6053400, 0, 6053400, 'pending', NULL, 'sales', (SELECT id FROM public.orders WHERE order_number = 'ORD20250004')),
('INV20250005', 'Monthly AMC - Tech Tower', '999 IT Park, Bangalore', '2025-07-01', '2025-07-31', 25000, 4500, 29500, 29500, 0, 'paid', 'bank_transfer', 'amc', NULL);

-- Sample AMC contracts
INSERT INTO public.amc_contracts (contract_number, customer_name, customer_email, customer_phone, property_address, elevator_model, elevator_serial_number, contract_start_date, contract_end_date, annual_amount, payment_frequency, status, showroom_id) VALUES
('AMC20250001', 'Tech Tower Management', 'maintenance@techtower.com', '+91-9876543240', '999 IT Park, Bangalore', 'Premium Passenger Elevator', 'YE-2024-001', '2025-01-01', '2025-12-31', 300000, 'monthly', 'active', (SELECT id FROM public.showrooms WHERE name LIKE '%Bangalore%' LIMIT 1)),
('AMC20250002', 'Residential Complex A', 'admin@residentialA.com', '+91-9876543241', '111 Residential Area, Chennai', 'Home Villa Elevator', 'YE-2024-002', '2025-03-01', '2026-02-28', 180000, 'quarterly', 'active', (SELECT id FROM public.showrooms WHERE name LIKE '%Chennai%' LIMIT 1)),
('AMC20250003', 'City Mall Management', 'facility@citymall.com', '+91-9876543242', '222 Shopping District, Hyderabad', 'Freight Cargo Elevator', 'YE-2024-003', '2024-12-01', '2025-11-30', 450000, 'half_yearly', 'active', (SELECT id FROM public.showrooms WHERE name LIKE '%Hyderabad%' LIMIT 1)),
('AMC20250004', 'Grand Hospital', 'maintenance@grandhospital.com', '+91-9876543243', '333 Medical Center, Mumbai', 'Hospital Bed Elevator', 'YE-2024-004', '2025-06-01', '2026-05-31', 240000, 'monthly', 'active', (SELECT id FROM public.showrooms WHERE name LIKE '%Bangalore%' LIMIT 1)),
('AMC20250005', 'Luxury Apartments', 'admin@luxuryapts.com', '+91-9876543244', '444 Premium District, Pune', 'Panoramic Glass Elevator', 'YE-2024-005', '2025-04-01', '2026-03-31', 360000, 'quarterly', 'pending', (SELECT id FROM public.showrooms WHERE name LIKE '%Chennai%' LIMIT 1));

-- Sample service tickets
INSERT INTO public.service_tickets (ticket_number, customer_name, customer_phone, property_address, issue_description, priority, status, amc_contract_id, scheduled_date, showroom_id) VALUES
('TKT20250001', 'Tech Tower Management', '+91-9876543240', '999 IT Park, Bangalore', 'Elevator making unusual noise during operation. Passengers complaining about jerky movement.', 'high', 'open', (SELECT id FROM public.amc_contracts WHERE contract_number = 'AMC20250001'), '2025-07-17 10:00:00', (SELECT id FROM public.showrooms WHERE name LIKE '%Bangalore%' LIMIT 1)),
('TKT20250002', 'Residential Complex A', '+91-9876543241', '111 Residential Area, Chennai', 'Elevator door not closing properly. Sometimes opens immediately after closing.', 'medium', 'in_progress', (SELECT id FROM public.amc_contracts WHERE contract_number = 'AMC20250002'), '2025-07-18 14:00:00', (SELECT id FROM public.showrooms WHERE name LIKE '%Chennai%' LIMIT 1)),
('TKT20250003', 'City Mall Management', '+91-9876543242', '222 Shopping District, Hyderabad', 'Elevator stopped between floors. Customers stuck for 10 minutes before manual rescue.', 'critical', 'resolved', (SELECT id FROM public.amc_contracts WHERE contract_number = 'AMC20250003'), '2025-07-15 09:00:00', (SELECT id FROM public.showrooms WHERE name LIKE '%Hyderabad%' LIMIT 1)),
('TKT20250004', 'Grand Hospital', '+91-9876543243', '333 Medical Center, Mumbai', 'Elevator moving slowly. Taking too much time between floors affecting patient transport.', 'high', 'open', (SELECT id FROM public.amc_contracts WHERE contract_number = 'AMC20250004'), '2025-07-19 11:00:00', (SELECT id FROM public.showrooms WHERE name LIKE '%Bangalore%' LIMIT 1)),
('TKT20250005', 'Premium Office Complex', '+91-9876543245', '555 Business District, Bangalore', 'Regular maintenance required. No specific issues reported.', 'low', 'scheduled', NULL, '2025-07-20 16:00:00', (SELECT id FROM public.showrooms WHERE name LIKE '%Bangalore%' LIMIT 1));

-- Sample notifications for admin user
INSERT INTO public.notifications (user_id, title, message, type, action_url, is_read) VALUES
((SELECT id FROM public.profiles WHERE email = 'admin@yatraelevators.com'), 'New High Priority Service Ticket', 'Critical elevator issue reported at City Mall. Immediate attention required.', 'alert', '/admin#service-tickets', false),
((SELECT id FROM public.profiles WHERE email = 'admin@yatraelevators.com'), 'Large Order Confirmed', 'Luxury Hotels Group confirmed order worth ₹1.25 Cr for 6 panoramic elevators.', 'success', '/admin#orders', false),
((SELECT id FROM public.profiles WHERE email = 'admin@yatraelevators.com'), 'Payment Overdue', 'ABC Construction Ltd has overdue payment of ₹33.8 Lakhs for Invoice INV20250001.', 'warning', '/admin#invoices', true),
((SELECT id FROM public.profiles WHERE email = 'admin@yatraelevators.com'), 'New Lead Generated', 'High-value lead from James Wilson for multiple retail locations worth ₹20 Lakhs.', 'info', '/admin#leads', false),
((SELECT id FROM public.profiles WHERE email = 'admin@yatraelevators.com'), 'Monthly Report Available', 'July 2025 monthly business report is ready for review.', 'info', '/admin#reports', true);