-- Add basic sample test data (simplified and safe)

-- Sample contacts
INSERT INTO public.contacts (name, email, phone, company, message, status) VALUES
('John Smith', 'john.smith@example.com', '+91-9876543210', 'ABC Construction Ltd', 'Interested in installing 10 elevators for our new residential complex.', 'new'),
('Sarah Johnson', 'sarah.j@techcorp.com', '+91-9876543211', 'TechCorp Offices', 'Need elevator maintenance service for office building.', 'in_progress'),
('Rajesh Kumar', 'rajesh.kumar@builders.com', '+91-9876543212', 'Kumar Builders', 'Looking for premium elevator solutions.', 'resolved');

-- Sample leads
INSERT INTO public.leads (name, email, phone, company, message, status, lead_type, source, estimated_value, follow_up_date) VALUES
('Priya Sharma', 'priya.sharma@residential.com', '+91-9876543215', 'Sharma Residency', 'Interested in home elevators', 'new', 'website', 'website', 500000, '2025-07-20'),
('Michael Brown', 'mike@commercial.com', '+91-9876543216', 'Brown Commercial', 'Need freight elevators', 'quoted', 'bulk', 'referral', 1200000, '2025-07-18');

-- Sample products (using minimal valid data)
INSERT INTO public.products (name, description) VALUES
('Premium Passenger Elevator', 'High-speed passenger elevator with modern design'),
('Freight Cargo Elevator', 'Heavy-duty freight elevator for industrial use'),
('Home Villa Elevator', 'Compact elevator for residential villas');

-- Sample projects
INSERT INTO public.projects (title, description, client_name, location) VALUES
('Skyline Towers Installation', 'Installation of 8 passenger elevators', 'Skyline Developers', 'Bangalore'),
('City Mall Modernization', 'Complete elevator modernization project', 'City Mall Management', 'Chennai'),
('Metro Hospital Elevators', 'Medical elevator installation', 'Metro Healthcare', 'Hyderabad');

-- Sample showrooms
INSERT INTO public.showrooms (name, location, address, phone, email) VALUES
('Bangalore Main', 'Bangalore', '123 MG Road, Bangalore', '+91-80-12345678', 'bangalore@yatraelevators.com'),
('Chennai Branch', 'Chennai', '456 Anna Salai, Chennai', '+91-44-87654321', 'chennai@yatraelevators.com');