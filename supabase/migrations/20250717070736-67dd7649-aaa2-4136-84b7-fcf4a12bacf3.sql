-- Insert sample orders with correct constraints
INSERT INTO public.orders (
  order_number, customer_name, customer_email, customer_phone, customer_address,
  unit_price, quantity, total_amount, discount_percentage, final_amount,
  status, order_type, delivery_date, installation_date,
  created_by
) VALUES 
  ('ORD20240001', 'Raj Hotels Pvt Ltd', 'raj@rajhotels.com', '+91-98765-43210', '12 Hotel Street, Delhi', 
   1500000, 2, 3000000, 10, 2700000, 'confirmed', 'bulk', '2024-08-15', '2024-08-20',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
  
  ('ORD20240002', 'Green Apartments', 'info@greenapartments.com', '+91-98765-43211', '45 Residential Complex, Mumbai',
   800000, 1, 800000, 5, 760000, 'pending', 'retail', '2024-08-25', '2024-09-01',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('ORD20240003', 'Tech Tower Corp', 'admin@techtower.com', '+91-98765-43212', '67 IT Park, Bangalore',
   2000000, 3, 6000000, 15, 5100000, 'in_production', 'bulk', '2024-09-10', '2024-09-15',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('ORD20240004', 'Metro Showroom Delhi', 'showroom@metro.com', '+91-98765-43213', '101 Metro Center, Delhi',
   500000, 1, 500000, 0, 500000, 'delivered', 'showroom', '2024-07-01', '2024-07-05',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1));

-- Insert sample invoices with correct constraints
INSERT INTO public.invoices (
  invoice_number, customer_name, customer_address, invoice_date, due_date,
  subtotal, tax_amount, total_amount, paid_amount, balance_amount,
  status, payment_method, invoice_type,
  created_by
) VALUES 
  ('INV20240001', 'Raj Hotels Pvt Ltd', '12 Hotel Street, Delhi', '2024-07-15', '2024-08-15',
   2700000, 486000, 3186000, 1593000, 1593000, 'pending', 'bank_transfer', 'product',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('INV20240002', 'Green Apartments', '45 Residential Complex, Mumbai', '2024-07-20', '2024-08-20',
   760000, 136800, 896800, 896800, 0, 'paid', 'cheque', 'product',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('INV20240003', 'Tech Tower Corp', '67 IT Park, Bangalore', '2024-07-25', '2024-08-25',
   5100000, 918000, 6018000, 0, 6018000, 'pending', NULL, 'product',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('INV20240004', 'Metro Showroom Delhi', '101 Metro Center, Delhi', '2024-06-30', '2024-07-30',
   500000, 90000, 590000, 590000, 0, 'paid', 'cash', 'product',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('INV20240005', 'City Mall Management', '100 Shopping Mall, Delhi', '2024-06-15', '2024-07-15',
   150000, 27000, 177000, 0, 177000, 'overdue', NULL, 'amc',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1));

-- Insert sample service tickets
INSERT INTO public.service_tickets (
  ticket_number, customer_name, customer_phone, property_address,
  issue_description, priority, status, scheduled_date,
  created_by
) VALUES 
  ('TKT20240001', 'City Mall Management', '+91-11-98765432', '100 Shopping Mall, Delhi',
   'Elevator making unusual noise during operation', 'high', 'open', '2024-07-18 10:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240002', 'Ocean View Towers', '+91-22-98765433', '200 Marine Drive, Mumbai',
   'Elevator door not closing properly on 5th floor', 'medium', 'in_progress', '2024-07-19 14:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240003', 'Tech Tower Corp', '+91-98765-43212', '67 IT Park, Bangalore',
   'Routine maintenance check required', 'low', 'scheduled', '2024-07-22 09:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240004', 'Luxury Residences Pvt Ltd', '+91-98765-11111', '88 Premium Heights, Delhi',
   'Elevator stops between floors occasionally', 'high', 'open', '2024-07-23 11:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240005', 'Metro Showroom Delhi', '+91-98765-43213', '101 Metro Center, Delhi',
   'Annual maintenance service due', 'low', 'completed', '2024-07-10 09:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1));

-- Add more leads data
INSERT INTO public.leads (
  name, email, phone, company, message, status, lead_type, source,
  estimated_value, follow_up_date
) VALUES 
  ('Priya Sharma', 'priya@luxuryresidences.com', '+91-98765-11111', 'Luxury Residences Pvt Ltd', 
   'Looking for premium elevators for our 30-story residential complex', 'new', 'residential', 'website',
   5000000, '2024-07-25'),
   
  ('Amit Kumar', 'amit@hospitalchain.com', '+91-98765-22222', 'MedCare Hospital Chain',
   'Need hospital-grade elevators with emergency features', 'qualified', 'commercial', 'referral',
   3500000, '2024-07-24'),
   
  ('Sneha Patel', 'sneha@retailmall.com', '+91-98765-33333', 'Retail Mall Developers',
   'Require freight and passenger elevators for shopping mall', 'proposal_sent', 'commercial', 'cold_call',
   4200000, '2024-07-26'),
   
  ('Rahul Gupta', 'rahul@constructionco.com', '+91-98765-44445', 'Metro Construction Co',
   'Looking for multiple elevators for our upcoming projects', 'follow_up', 'commercial', 'trade_show',
   7500000, '2024-07-28'),
   
  ('Nisha Agarwal', 'nisha@residentialgroup.com', '+91-98765-55556', 'Premium Residential Group',
   'Need elevators for 5 residential towers under construction', 'converted', 'residential', 'website',
   8500000, '2024-08-01');

-- Add more contact inquiries  
INSERT INTO public.contacts (
  name, email, phone, company, message, status
) VALUES 
  ('Rohit Verma', 'rohit@modernhomes.com', '+91-98765-44444', 'Modern Homes Builder',
   'Looking for cost-effective elevator solutions for mid-range housing projects', 'new'),
   
  ('Kavya Reddy', 'kavya@officecomplex.com', '+91-98765-55555', 'Corporate Office Complex',
   'Need quotation for high-speed elevators for 25-floor office building', 'responded'),
   
  ('Vikram Singh', 'vikram@hotelgroup.com', '+91-98765-66666', 'Heritage Hotel Group',
   'Interested in vintage-style elevators that match our heritage hotel theme', 'new'),
   
  ('Meera Joshi', 'meera@hospitalnetwork.com', '+91-98765-77777', 'City Hospital Network',
   'Urgent requirement for medical-grade elevators with stretcher capacity', 'new'),
   
  ('Arjun Nair', 'arjun@shoppingmalls.com', '+91-98765-88888', 'Premium Shopping Malls',
   'Planning elevator installation for 3 new malls opening next year', 'contacted'),
   
  ('Deepika Patel', 'deepika@apartmentchain.com', '+91-98765-99999', 'Apartment Chain Ltd',
   'Bulk order inquiry for 15 residential complexes', 'responded');