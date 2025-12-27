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
  ('00000000-0000-0000-0000-000000000002', 'Central Blood Bank', '123 Main Street', 'New York', 'NY', '10001', '+1234567891', 'central@bloodbank.com', 'BB-NY-001', '24/7', true),
  ('00000000-0000-0000-0000-000000000003', 'City Blood Bank', '456 Park Avenue', 'Los Angeles', 'CA', '90001', '+1234567892', 'city@bloodbank.com', 'BB-CA-001', 'Mon-Fri 9AM-6PM', true);

-- Insert sample blood inventory
INSERT INTO blood_inventory (blood_bank_id, blood_type, units_available)
SELECT 
  bb.id,
  blood_type,
  floor(random() * 50 + 10)::integer
FROM 
  blood_banks bb,
  (VALUES ('A+'), ('A-'), ('B+'), ('B-'), ('AB+'), ('AB-'), ('O+'), ('O-')) AS bt(blood_type);
