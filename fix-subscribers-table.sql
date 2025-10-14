-- Complete fix for the subscribers table
-- Run this in your Supabase SQL Editor

-- First, let's check if the table exists and what policies are on it
SELECT * FROM pg_policies WHERE tablename = 'subscribers';

-- Drop the table if it exists (this will remove all data and policies)
DROP TABLE IF EXISTS subscribers CASCADE;

-- Recreate the table without RLS
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_created_at ON subscribers(created_at);

-- Insert a test record to verify it works
INSERT INTO subscribers (email) VALUES ('test@example.com');

-- Verify the insert worked
SELECT * FROM subscribers;
