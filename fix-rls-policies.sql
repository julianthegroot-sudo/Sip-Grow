-- Fix RLS policies for subscribers table
-- Run this in your Supabase SQL Editor

-- Step 1: Check current RLS status and policies
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'subscribers';

-- Step 2: Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'subscribers';

-- Step 3: Drop existing policies (if any)
DROP POLICY IF EXISTS "Inserts" ON subscribers;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON subscribers;
DROP POLICY IF EXISTS "Allow anonymous reads" ON subscribers;

-- Step 4: Create new policies that work with anon users
CREATE POLICY "Allow anonymous inserts" ON subscribers
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous reads" ON subscribers
FOR SELECT 
TO anon
USING (true);

-- Step 5: Verify the policies were created
SELECT * FROM pg_policies WHERE tablename = 'subscribers';

-- Step 6: Test insert to make sure it works
INSERT INTO subscribers (email) VALUES ('test@example.com');

-- Step 7: Verify the insert worked
SELECT * FROM subscribers;