-- Add leads data with correct lead_type values
INSERT INTO public.leads (
  name, email, phone, company, message, status, lead_type, source,
  estimated_value, follow_up_date
) VALUES 
  ('Priya Sharma', 'priya@luxuryresidences.com', '+91-98765-11111', 'Luxury Residences Pvt Ltd', 
   'Looking for premium elevators for our 30-story residential complex', 'new', 'website', 'social_media',
   5000000, '2024-07-25'),
   
  ('Amit Kumar', 'amit@hospitalchain.com', '+91-98765-22222', 'MedCare Hospital Chain',
   'Need hospital-grade elevators with emergency features', 'qualified', 'referral', 'partner',
   3500000, '2024-07-24'),
   
  ('Sneha Patel', 'sneha@retailmall.com', '+91-98765-33333', 'Retail Mall Developers',
   'Require freight and passenger elevators for shopping mall', 'proposal_sent', 'showroom', 'walk_in',
   4200000, '2024-07-26'),
   
  ('Rahul Gupta', 'rahul@constructionco.com', '+91-98765-44445', 'Metro Construction Co',
   'Looking for multiple elevators for our upcoming projects', 'follow_up', 'bulk', 'trade_show',
   7500000, '2024-07-28'),
   
  ('Nisha Agarwal', 'nisha@residentialgroup.com', '+91-98765-55556', 'Premium Residential Group',
   'Need elevators for 5 residential towers under construction', 'converted', 'bulk', 'email',
   8500000, '2024-08-01'),
   
  ('Kiran Desai', 'kiran@techpark.com', '+91-98765-66667', 'Silicon Tech Park',
   'Planning elevator installation for new tech campus', 'new', 'website', 'search_engine',
   6200000, '2024-07-30'),
   
  ('Manoj Agrawal', 'manoj@corporatetower.com', '+91-98765-77778', 'Corporate Tower Ltd',
   'Express elevators needed for high-rise office building', 'qualified', 'showroom', 'appointment',
   4800000, '2024-08-02');

-- Add contact inquiries  
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
   'Bulk order inquiry for 15 residential complexes', 'responded'),
   
  ('Sanjay Kumar', 'sanjay@industrialpark.com', '+91-98765-10101', 'Industrial Park Development',
   'Freight elevator requirements for manufacturing facility', 'new'),
   
  ('Anita Mehta', 'anita@luxuryhotels.com', '+91-98765-12121', 'Luxury Hotels International',
   'Custom elevator design for premium hotel chain', 'contacted'),
   
  ('Rajesh Gupta', 'rajesh@smartcity.com', '+91-98765-13131', 'Smart City Infrastructure',
   'Smart elevator systems for upcoming smart city project', 'new'),
   
  ('Pooja Sharma', 'pooja@greentowers.com', '+91-98765-14141', 'Green Towers Development',
   'Eco-friendly elevator solutions for sustainable buildings', 'contacted');