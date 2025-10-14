import { createClient } from '@supabase/supabase-js';

// Create Supabase client for server-side operations
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Database types for TypeScript support
export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}
