-- Create portfolios table
CREATE TABLE IF NOT EXISTS public.portfolios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  project_date DATE,
  client_name TEXT,
  location TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create service_packages table
CREATE TABLE IF NOT EXISTS public.service_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price_text TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_highlighted BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  phone TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read access for display data
CREATE POLICY "Portfolios are viewable by everyone"
  ON public.portfolios FOR SELECT
  USING (true);

CREATE POLICY "Testimonials are viewable by everyone"
  ON public.testimonials FOR SELECT
  USING (true);

CREATE POLICY "Service packages are viewable by everyone"
  ON public.service_packages FOR SELECT
  USING (true);

-- Contact submissions - anyone can insert, no one can view (admin only via direct database access)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_portfolios_display_order ON public.portfolios(display_order);
CREATE INDEX idx_testimonials_display_order ON public.testimonials(display_order);
CREATE INDEX idx_packages_display_order ON public.service_packages(display_order);
CREATE INDEX idx_contact_created ON public.contact_submissions(created_at DESC);

-- Insert sample portfolio data (10 items)
INSERT INTO public.portfolios (title, category, description, image_url, project_date, display_order) VALUES
('Villa Modern Minimalis', 'Residensial', 'Desain villa modern dengan konsep minimalis dan view pegunungan', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', '2024-03-15', 1),
('Corporate Office Tower', 'Komersial', 'Kantor perusahaan 15 lantai dengan fasilitas lengkap', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', '2024-02-20', 2),
('Boutique Hotel Bali', 'Hospitality', 'Hotel butik 25 kamar dengan nuansa tropis kontemporer', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', '2024-01-10', 3),
('Luxury Apartment Jakarta', 'Residensial', 'Apartemen mewah dengan interior elegan dan view kota', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', '2023-12-05', 4),
('Kafe Industrial Chic', 'Komersial', 'Desain kafe dengan tema industrial modern', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800', '2023-11-18', 5),
('Renovasi Rumah Kolonial', 'Renovasi', 'Restorasi dan modernisasi rumah kolonial bersejarah', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800', '2023-10-22', 6),
('Factory Complex', 'Industri', 'Kompleks pabrik dengan desain efisien dan ramah lingkungan', 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800', '2023-09-14', 7),
('Restoran Fine Dining', 'Hospitality', 'Interior restoran mewah dengan suasana intimate', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', '2023-08-30', 8),
('Smart Home Residence', 'Residensial', 'Rumah pintar dengan teknologi home automation terintegrasi', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', '2023-07-25', 9),
('Co-working Space', 'Komersial', 'Ruang kerja bersama modern dengan fasilitas premium', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', '2023-06-12', 10);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, text, rating, display_order) VALUES
('Budi Santoso', 'Pemilik Villa Modern', 'Ruangtiva Studio berhasil mewujudkan impian kami memiliki villa modern yang elegan. Tim sangat profesional dan detail dalam setiap aspek desain.', 5, 1),
('Sarah Wijaya', 'CEO Startup Tech', 'Desain kantor kami mencerminkan budaya perusahaan yang inovatif. Proses kolaborasi sangat menyenangkan dan hasilnya melebihi ekspektasi.', 5, 2),
('Ahmad Rahman', 'Pemilik Kafe', 'Interior kafe kami menjadi daya tarik tersendiri. Ruangtiva Studio memahami konsep yang kami inginkan dan mengeksekusinya dengan sempurna.', 5, 3),
('Diana Kusuma', 'Developer Properti', 'Kerjasama yang sangat baik dalam proyek apartemen kami. Perhitungan struktur akurat dan desain yang menarik untuk target pasar.', 5, 4);

-- Insert sample service packages
INSERT INTO public.service_packages (name, price_text, features, is_highlighted, display_order) VALUES
('Basic', 'Mulai 5 Juta', '["Konsultasi awal", "Konsep desain 2D", "2x revisi", "Gambar kerja dasar"]'::jsonb, false, 1),
('Professional', 'Mulai 12 Juta', '["Konsultasi mendalam", "Konsep desain 2D & 3D", "4x revisi", "Gambar kerja lengkap", "Perhitungan struktur", "Spesifikasi material"]'::jsonb, true, 2),
('Premium', 'Mulai 25 Juta', '["Konsultasi unlimited", "Konsep 2D & 3D detail", "Revisi unlimited", "Gambar kerja penuh", "Perhitungan struktur", "Pendampingan konstruksi", "Desain MEP"]'::jsonb, false, 3);