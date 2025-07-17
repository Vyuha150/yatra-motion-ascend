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
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('ORD20240005', 'Sunrise Apartments', 'info@sunrise.com', '+91-98765-43214', '202 Sunrise Complex, Chennai',
   1200000, 1, 1200000, 8, 1104000, 'installed', 'retail', '2024-06-20', '2024-06-25',
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
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('INV20240006', 'Sunrise Apartments', '202 Sunrise Complex, Chennai', '2024-06-25', '2024-07-25',
   1104000, 198720, 1302720, 1302720, 0, 'paid', 'bank_transfer', 'product',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1));

-- Insert sample service tickets with correct status values
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
   'Routine maintenance check required', 'low', 'open', '2024-07-22 09:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240004', 'Luxury Residences Pvt Ltd', '+91-98765-11111', '88 Premium Heights, Delhi',
   'Elevator stops between floors occasionally', 'high', 'open', '2024-07-23 11:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240005', 'Metro Showroom Delhi', '+91-98765-43213', '101 Metro Center, Delhi',
   'Annual maintenance service completed successfully', 'low', 'closed', '2024-07-10 09:00:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1)),
   
  ('TKT20240006', 'Sunrise Apartments', '+91-98765-43214', '202 Sunrise Complex, Chennai',
   'Emergency repair for stuck elevator resolved', 'high', 'resolved', '2024-06-15 15:30:00',
   (SELECT id FROM profiles WHERE email = 'admin@yatraelevators.com' LIMIT 1));