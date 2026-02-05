-- Insert sample admin user (password: admin123 - remember to hash in production)
INSERT INTO users (id, email, password_hash, role, full_name, phone)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'admin@bloodbank.com', '$2a$10$rOmUvVzXrNLqBqQXgE6vJOKDGwPJPXxKvH5xWqX5LqQPqXyWpxQPq', 'admin', 'System Admin', '+1234567890');

-- Insert sample blood banks
INSERT INTO users (id, email, password_hash, role, full_name, phone)
VALUES 
  ('00000000-0000-0000-0000-000000000002', 'central@bloodbank.com', '$2a$10$rOmUvVzXrNLqBqQXgE6vJOKDGwPJPXxKvH5xWqX5LqQPqXyWpxQPq', 'blood_bank', 'Central Blood Bank', '+1234567891'),
  ('00000000-0000-0000-0000-000000000003', 'city@bloodbank.com', '$2a$10$rOmUvVzXrNLqBqQXgE6vJOKDGwPJPXxKvH5xWqX5LqQPqXyWpxQPq', 'blood_bank', 'City Blood Bank', '+1234567892');

INSERT INTO blood_banks (user_id, name, address, city, state, pincode, phone, email, license_number, operating_hours, is_verified)
VALUES 
  ('00000000-0000-0000-0000-000000000002', 'AIIMS Blood Bank', 'Ansari Nagar East', 'New Delhi', 'Delhi', '110029', '+911126588500', 'aiims@bloodbank.com', 'BB-DL-001', '24/7', true),
  ('00000000-0000-0000-0000-000000000003', 'Tata Memorial Blood Bank', 'Dr. E Borges Road, Parel', 'Mumbai', 'Maharashtra', '400012', '+912224177000', 'tata@bloodbank.com', 'BB-MH-001', 'Mon-Sat 8AM-8PM', true);

-- Insert sample blood inventory
INSERT INTO blood_inventory (blood_bank_id, blood_type, units_available)
SELECT 
  bb.id,
  blood_type,
  floor(random() * 50 + 10)::integer
FROM 
  blood_banks bb,
  (VALUES ('A+'), ('A-'), ('B+'), ('B-'), ('AB+'), ('AB-'), ('O+'), ('O-')) AS bt(blood_type);
