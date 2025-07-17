-- Create sample showrooms if needed
INSERT INTO public.showrooms (name, location, address, email, phone) 
VALUES 
  ('Delhi Showroom', 'Delhi', '123 Main Street, Delhi', 'delhi@yatraelevators.com', '+91-11-12345678'),
  ('Mumbai Showroom', 'Mumbai', '456 Business District, Mumbai', 'mumbai@yatraelevators.com', '+91-22-87654321'),
  ('Bangalore Showroom', 'Bangalore', '789 Tech Park, Bangalore', 'bangalore@yatraelevators.com', '+91-80-11223344')
ON CONFLICT (name) DO NOTHING;

-- Get the current admin user ID for foreign key references
-- Insert sample orders
INSERT INTO public.orders (
  order_number, customer_name, customer_email, customer_phone, customer_address,
  unit_price, quantity, total_amount, discount_percentage, final_amount,
  status, order_type, delivery_date, installation_date,
  created_by, showroom_id
) VALUES 
  ('ORD20240001', 'Raj Hotels Pvt Ltd', 'raj@rajhotels.com', '+91-98765-43210', '12 Hotel Street, Delhi', 
   1500000, 2, 3000000, 10, 2700000, 'confirmed', 'commercial', '2024-08-15', '2024-08-20',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Delhi Showroom' LIMIT 1)),
  
  ('ORD20240002', 'Green Apartments', 'info@greenapartments.com', '+91-98765-43211', '45 Residential Complex, Mumbai',
   800000, 1, 800000, 5, 760000, 'pending', 'residential', '2024-08-25', '2024-09-01',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Mumbai Showroom' LIMIT 1)),
   
  ('ORD20240003', 'Tech Tower Corp', 'admin@techtower.com', '+91-98765-43212', '67 IT Park, Bangalore',
   2000000, 3, 6000000, 15, 5100000, 'in_progress', 'commercial', '2024-09-10', '2024-09-15',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Bangalore Showroom' LIMIT 1));

-- Insert sample invoices
INSERT INTO public.invoices (
  invoice_number, customer_name, customer_address, invoice_date, due_date,
  subtotal, tax_amount, total_amount, paid_amount, balance_amount,
  status, payment_method, invoice_type,
  created_by, showroom_id, order_id
) VALUES 
  ('INV20240001', 'Raj Hotels Pvt Ltd', '12 Hotel Street, Delhi', '2024-07-15', '2024-08-15',
   2700000, 486000, 3186000, 1593000, 1593000, 'partial_paid', 'bank_transfer', 'sales',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Delhi Showroom' LIMIT 1),
   (SELECT id FROM orders WHERE order_number = 'ORD20240001' LIMIT 1)),
   
  ('INV20240002', 'Green Apartments', '45 Residential Complex, Mumbai', '2024-07-20', '2024-08-20',
   760000, 136800, 896800, 896800, 0, 'paid', 'cheque', 'sales',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Mumbai Showroom' LIMIT 1),
   (SELECT id FROM orders WHERE order_number = 'ORD20240002' LIMIT 1));

-- Insert sample AMC contracts  
INSERT INTO public.amc_contracts (
  contract_number, customer_name, customer_email, customer_phone, property_address,
  elevator_model, elevator_serial_number, contract_start_date, contract_end_date,
  annual_amount, payment_frequency, status,
  created_by, showroom_id
) VALUES 
  ('AMC20240001', 'City Mall Management', 'maintenance@citymall.com', '+91-11-98765432', '100 Shopping Mall, Delhi',
   'Passenger Elevator PE-2000', 'YE2024001', '2024-01-01', '2024-12-31',
   150000, 'quarterly', 'active',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Delhi Showroom' LIMIT 1)),
   
  ('AMC20240002', 'Ocean View Towers', 'facilities@oceanview.com', '+91-22-98765433', '200 Marine Drive, Mumbai',
   'High Speed Elevator HS-3000', 'YE2024002', '2024-03-01', '2025-02-28',
   250000, 'monthly', 'active',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Mumbai Showroom' LIMIT 1));

-- Insert sample service tickets
INSERT INTO public.service_tickets (
  ticket_number, customer_name, customer_phone, property_address,
  issue_description, priority, status, scheduled_date,
  created_by, showroom_id, amc_contract_id
) VALUES 
  ('TKT20240001', 'City Mall Management', '+91-11-98765432', '100 Shopping Mall, Delhi',
   'Elevator making unusual noise during operation', 'high', 'open', '2024-07-18 10:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Delhi Showroom' LIMIT 1),
   (SELECT id FROM amc_contracts WHERE contract_number = 'AMC20240001' LIMIT 1)),
   
  ('TKT20240002', 'Ocean View Towers', '+91-22-98765433', '200 Marine Drive, Mumbai',
   'Elevator door not closing properly on 5th floor', 'medium', 'in_progress', '2024-07-19 14:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Mumbai Showroom' LIMIT 1),
   (SELECT id FROM amc_contracts WHERE contract_number = 'AMC20240002' LIMIT 1)),
   
  ('TKT20240003', 'Tech Tower Corp', '+91-98765-43212', '67 IT Park, Bangalore',
   'Routine maintenance check required', 'low', 'scheduled', '2024-07-22 09:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1),
   (SELECT id FROM showrooms WHERE name = 'Bangalore Showroom' LIMIT 1),
   NULL);

-- Add more leads data
INSERT INTO public.leads (
  name, email, phone, company, message, status, lead_type, source,
  estimated_value, follow_up_date, showroom_id
) VALUES 
  ('Priya Sharma', 'priya@luxuryresidences.com', '+91-98765-11111', 'Luxury Residences Pvt Ltd', 
   'Looking for premium elevators for our 30-story residential complex', 'new', 'residential', 'website',
   5000000, '2024-07-25', (SELECT id FROM showrooms WHERE name = 'Delhi Showroom' LIMIT 1)),
   
  ('Amit Kumar', 'amit@hospitalchain.com', '+91-98765-22222', 'MedCare Hospital Chain',
   'Need hospital-grade elevators with emergency features', 'qualified', 'commercial', 'referral',
   3500000, '2024-07-24', (SELECT id FROM showrooms WHERE name = 'Mumbai Showroom' LIMIT 1)),
   
  ('Sneha Patel', 'sneha@retailmall.com', '+91-98765-33333', 'Retail Mall Developers',
   'Require freight and passenger elevators for shopping mall', 'proposal_sent', 'commercial', 'cold_call',
   4200000, '2024-07-26', (SELECT id FROM showrooms WHERE name = 'Bangalore Showroom' LIMIT 1));

-- Add more contact inquiries
INSERT INTO public.contacts (
  name, email, phone, company, message, status
) VALUES 
  ('Rohit Verma', 'rohit@modernhomes.com', '+91-98765-44444', 'Modern Homes Builder',
   'Looking for cost-effective elevator solutions for mid-range housing projects', 'new'),
   
  ('Kavya Reddy', 'kavya@officecomplex.com', '+91-98765-55555', 'Corporate Office Complex',
   'Need quotation for high-speed elevators for 25-floor office building', 'responded'),
   
  ('Vikram Singh', 'vikram@hotelgroup.com', '+91-98765-66666', 'Heritage Hotel Group',
   'Interested in vintage-style elevators that match our heritage hotel theme', 'new');