-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('super_admin', 'admin', 'showroom_employee', 'bulk_buyer', 'user');

-- First, add new columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN showroom_id UUID,
ADD COLUMN employee_id TEXT,
ADD COLUMN bulk_buyer_id UUID;

-- Drop the existing role check constraint
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;

-- Create a new role column with the enum type
ALTER TABLE public.profiles ADD COLUMN new_role user_role DEFAULT 'user'::user_role;

-- Update the new_role column with converted values from the old role column
UPDATE public.profiles SET new_role = 
CASE 
  WHEN role = 'admin' THEN 'admin'::user_role
  WHEN role = 'user' THEN 'user'::user_role
  ELSE 'user'::user_role
END;

-- Drop the old role column and rename the new one
ALTER TABLE public.profiles DROP COLUMN role;
ALTER TABLE public.profiles RENAME COLUMN new_role TO role;

-- Set NOT NULL constraint on role
ALTER TABLE public.profiles ALTER COLUMN role SET NOT NULL;

-- Create showrooms table
CREATE TABLE public.showrooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    email TEXT,
    manager_id UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leads table
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT,
    lead_type TEXT CHECK (lead_type IN ('website', 'showroom', 'referral', 'bulk')),
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'converted', 'lost')),
    assigned_to UUID REFERENCES public.profiles(id),
    showroom_id UUID REFERENCES public.showrooms(id),
    estimated_value DECIMAL(12,2),
    follow_up_date DATE,
    source TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create AMC contracts table
CREATE TABLE public.amc_contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    customer_phone TEXT,
    property_address TEXT NOT NULL,
    elevator_model TEXT,
    elevator_serial_number TEXT,
    contract_start_date DATE NOT NULL,
    contract_end_date DATE NOT NULL,
    annual_amount DECIMAL(12,2) NOT NULL,
    payment_frequency TEXT CHECK (payment_frequency IN ('monthly', 'quarterly', 'half_yearly', 'yearly')),
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled', 'pending_renewal')),
    assigned_technician UUID REFERENCES public.profiles(id),
    showroom_id UUID REFERENCES public.showrooms(id),
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create service tickets table
CREATE TABLE public.service_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_number TEXT UNIQUE NOT NULL,
    amc_contract_id UUID REFERENCES public.amc_contracts(id),
    customer_name TEXT NOT NULL,
    customer_phone TEXT,
    property_address TEXT NOT NULL,
    issue_description TEXT NOT NULL,
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    assigned_technician UUID REFERENCES public.profiles(id),
    resolution_notes TEXT,
    scheduled_date TIMESTAMP WITH TIME ZONE,
    completed_date TIMESTAMP WITH TIME ZONE,
    customer_rating INTEGER CHECK (customer_rating >= 1 AND customer_rating <= 5),
    showroom_id UUID REFERENCES public.showrooms(id),
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    customer_phone TEXT,
    customer_address TEXT NOT NULL,
    product_id UUID REFERENCES public.products(id),
    quantity INTEGER DEFAULT 1,
    unit_price DECIMAL(12,2) NOT NULL,
    total_amount DECIMAL(12,2) NOT NULL,
    discount_percentage DECIMAL(5,2) DEFAULT 0,
    final_amount DECIMAL(12,2) NOT NULL,
    order_type TEXT CHECK (order_type IN ('retail', 'bulk', 'showroom')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_production', 'delivered', 'installed', 'cancelled')),
    delivery_date DATE,
    installation_date DATE,
    assigned_to UUID REFERENCES public.profiles(id),
    showroom_id UUID REFERENCES public.showrooms(id),
    bulk_buyer_id UUID,
    special_requirements TEXT,
    attachments JSONB,
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create invoices table
CREATE TABLE public.invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_number TEXT UNIQUE NOT NULL,
    order_id UUID REFERENCES public.orders(id),
    amc_contract_id UUID REFERENCES public.amc_contracts(id),
    customer_name TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    invoice_date DATE NOT NULL,
    due_date DATE NOT NULL,
    subtotal DECIMAL(12,2) NOT NULL,
    tax_amount DECIMAL(12,2) DEFAULT 0,
    total_amount DECIMAL(12,2) NOT NULL,
    paid_amount DECIMAL(12,2) DEFAULT 0,
    balance_amount DECIMAL(12,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue', 'cancelled')),
    payment_method TEXT,
    payment_date DATE,
    invoice_type TEXT CHECK (invoice_type IN ('product', 'amc', 'service')),
    showroom_id UUID REFERENCES public.showrooms(id),
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bulk buyer contracts table
CREATE TABLE public.bulk_buyer_contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_number TEXT UNIQUE NOT NULL,
    buyer_id UUID REFERENCES public.profiles(id),
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    address TEXT NOT NULL,
    contract_start_date DATE NOT NULL,
    contract_end_date DATE NOT NULL,
    discount_percentage DECIMAL(5,2) DEFAULT 0,
    minimum_order_value DECIMAL(12,2),
    credit_limit DECIMAL(12,2),
    payment_terms TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'suspended', 'terminated')),
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT CHECK (type IN ('info', 'warning', 'error', 'success')),
    is_read BOOLEAN DEFAULT FALSE,
    action_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create brochure downloads table
CREATE TABLE public.brochure_downloads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    visitor_name TEXT,
    visitor_email TEXT,
    visitor_phone TEXT,
    product_id UUID REFERENCES public.products(id),
    brochure_name TEXT NOT NULL,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all new tables
ALTER TABLE public.showrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.amc_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bulk_buyer_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brochure_downloads ENABLE ROW LEVEL SECURITY;

-- Create function to check user role
CREATE OR REPLACE FUNCTION public.check_user_role(user_id UUID, required_role user_role)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id AND role = required_role
  );
$$;

-- Create function to check if user is admin or super admin
CREATE OR REPLACE FUNCTION public.is_admin_or_super()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  );
$$;

-- Create function to get user showroom
CREATE OR REPLACE FUNCTION public.get_user_showroom()
RETURNS UUID
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT showroom_id FROM public.profiles WHERE id = auth.uid();
$$;

-- Create function to generate unique numbers
CREATE OR REPLACE FUNCTION public.generate_contract_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
    new_number TEXT;
    counter INTEGER := 1;
BEGIN
    LOOP
        new_number := 'AMC' || TO_CHAR(CURRENT_DATE, 'YYYY') || LPAD(counter::TEXT, 4, '0');
        IF NOT EXISTS (SELECT 1 FROM public.amc_contracts WHERE contract_number = new_number) THEN
            EXIT;
        END IF;
        counter := counter + 1;
    END LOOP;
    RETURN new_number;
END;
$$;

CREATE OR REPLACE FUNCTION public.generate_ticket_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
    new_number TEXT;
    counter INTEGER := 1;
BEGIN
    LOOP
        new_number := 'TKT' || TO_CHAR(CURRENT_DATE, 'YYYY') || LPAD(counter::TEXT, 4, '0');
        IF NOT EXISTS (SELECT 1 FROM public.service_tickets WHERE ticket_number = new_number) THEN
            EXIT;
        END IF;
        counter := counter + 1;
    END LOOP;
    RETURN new_number;
END;
$$;

CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
    new_number TEXT;
    counter INTEGER := 1;
BEGIN
    LOOP
        new_number := 'ORD' || TO_CHAR(CURRENT_DATE, 'YYYY') || LPAD(counter::TEXT, 4, '0');
        IF NOT EXISTS (SELECT 1 FROM public.orders WHERE order_number = new_number) THEN
            EXIT;
        END IF;
        counter := counter + 1;
    END LOOP;
    RETURN new_number;
END;
$$;

CREATE OR REPLACE FUNCTION public.generate_invoice_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
    new_number TEXT;
    counter INTEGER := 1;
BEGIN
    LOOP
        new_number := 'INV' || TO_CHAR(CURRENT_DATE, 'YYYY') || LPAD(counter::TEXT, 4, '0');
        IF NOT EXISTS (SELECT 1 FROM public.invoices WHERE invoice_number = new_number) THEN
            EXIT;
        END IF;
        counter := counter + 1;
    END LOOP;
    RETURN new_number;
END;
$$;

-- RLS Policies for showrooms
CREATE POLICY "Super admins can manage all showrooms" ON public.showrooms
FOR ALL USING (public.check_user_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admins can view all showrooms" ON public.showrooms
FOR SELECT USING (public.is_admin_or_super());

CREATE POLICY "Employees can view their showroom" ON public.showrooms
FOR SELECT USING (id = public.get_user_showroom());

-- RLS Policies for leads
CREATE POLICY "Admins can manage all leads" ON public.leads
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Employees can view showroom leads" ON public.leads
FOR SELECT USING (showroom_id = public.get_user_showroom());

CREATE POLICY "Employees can update assigned leads" ON public.leads
FOR UPDATE USING (assigned_to = auth.uid() OR showroom_id = public.get_user_showroom());

CREATE POLICY "Anyone can create leads" ON public.leads
FOR INSERT WITH CHECK (true);

-- RLS Policies for AMC contracts
CREATE POLICY "Admins can manage all AMC contracts" ON public.amc_contracts
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Employees can view showroom AMC contracts" ON public.amc_contracts
FOR SELECT USING (showroom_id = public.get_user_showroom());

CREATE POLICY "Technicians can view assigned contracts" ON public.amc_contracts
FOR SELECT USING (assigned_technician = auth.uid());

-- RLS Policies for service tickets
CREATE POLICY "Admins can manage all service tickets" ON public.service_tickets
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Employees can view showroom tickets" ON public.service_tickets
FOR SELECT USING (showroom_id = public.get_user_showroom());

CREATE POLICY "Technicians can manage assigned tickets" ON public.service_tickets
FOR ALL USING (assigned_technician = auth.uid());

CREATE POLICY "Anyone can create service tickets" ON public.service_tickets
FOR INSERT WITH CHECK (true);

-- RLS Policies for orders
CREATE POLICY "Admins can manage all orders" ON public.orders
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Employees can view showroom orders" ON public.orders
FOR SELECT USING (showroom_id = public.get_user_showroom());

CREATE POLICY "Bulk buyers can view their orders" ON public.orders
FOR SELECT USING (bulk_buyer_id::TEXT = auth.uid()::TEXT);

-- RLS Policies for invoices
CREATE POLICY "Admins can manage all invoices" ON public.invoices
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Employees can view showroom invoices" ON public.invoices
FOR SELECT USING (showroom_id = public.get_user_showroom());

-- RLS Policies for bulk buyer contracts
CREATE POLICY "Admins can manage all bulk buyer contracts" ON public.bulk_buyer_contracts
FOR ALL USING (public.is_admin_or_super());

CREATE POLICY "Bulk buyers can view their contracts" ON public.bulk_buyer_contracts
FOR SELECT USING (buyer_id = auth.uid());

-- RLS Policies for notifications
CREATE POLICY "Users can view their notifications" ON public.notifications
FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can create notifications" ON public.notifications
FOR INSERT WITH CHECK (public.is_admin_or_super());

CREATE POLICY "Users can update their notifications" ON public.notifications
FOR UPDATE USING (user_id = auth.uid());

-- RLS Policies for brochure downloads
CREATE POLICY "Admins can view all brochure downloads" ON public.brochure_downloads
FOR SELECT USING (public.is_admin_or_super());

CREATE POLICY "Anyone can create brochure download records" ON public.brochure_downloads
FOR INSERT WITH CHECK (true);

-- Create sample data
INSERT INTO public.showrooms (name, location, address, phone, email) VALUES
('Mumbai Central', 'Mumbai', '123 Business District, Mumbai, Maharashtra', '+91-9876543210', 'mumbai@yatraelevators.com'),
('Delhi NCR Hub', 'New Delhi', '456 Industrial Area, New Delhi', '+91-9876543211', 'delhi@yatraelevators.com'),
('Bangalore Tech Park', 'Bangalore', '789 Tech Valley, Bangalore, Karnataka', '+91-9876543212', 'bangalore@yatraelevators.com');

-- Update the handle_new_user function to support different user types
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    COALESCE((NEW.raw_user_meta_data ->> 'role')::user_role, 'user'::user_role)
  );
  RETURN NEW;
END;
$$;

-- Add some sample AMC contracts and service tickets
DO $$
DECLARE
    showroom1_id UUID;
    showroom2_id UUID;
BEGIN
    SELECT id INTO showroom1_id FROM public.showrooms WHERE name = 'Mumbai Central' LIMIT 1;
    SELECT id INTO showroom2_id FROM public.showrooms WHERE name = 'Delhi NCR Hub' LIMIT 1;
    
    INSERT INTO public.amc_contracts (contract_number, customer_name, customer_email, customer_phone, property_address, elevator_model, elevator_serial_number, contract_start_date, contract_end_date, annual_amount, payment_frequency, showroom_id) VALUES
    ('AMC20240001', 'Raj Apartments Society', 'raj.society@email.com', '+91-9876543220', 'Raj Apartments, Andheri West, Mumbai', 'Premium Passenger Elevator', 'PE2024001', '2024-01-01', '2024-12-31', 150000.00, 'yearly', showroom1_id),
    ('AMC20240002', 'Tech Tower Ltd', 'maintenance@techtower.com', '+91-9876543221', 'Tech Tower, Gurgaon, Haryana', 'High Speed Corporate Elevator', 'HS2024001', '2024-02-01', '2025-01-31', 200000.00, 'yearly', showroom2_id);
END $$;