# Supabase Email Subscription Setup

This guide will help you set up the email subscription functionality using Supabase.

## 1. Supabase Setup

### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Wait for the project to be set up (usually takes 1-2 minutes)

### Create the Subscribers Table
1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Click **Create a new table**
4. Name the table: `subscribers`
5. Add the following columns:

| Column Name | Type | Default Value | Constraints |
|-------------|------|---------------|-------------|
| id | uuid | gen_random_uuid() | Primary Key |
| email | text | - | Unique, Not Null |
| created_at | timestamp | now() | - |

6. Click **Save** to create the table

### Get Your Supabase Credentials
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key

## 2. Environment Variables

Create a `.env.local` file in your project root with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 3. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to your homepage or blog page
3. Try subscribing with an email address
4. Check your Supabase dashboard → Table Editor → subscribers table to see the new entry

## 4. Features

### What the system does:
- ✅ Validates email format
- ✅ Prevents duplicate subscriptions
- ✅ Stores emails in Supabase database
- ✅ Shows success/error messages
- ✅ Handles network errors gracefully

### API Endpoints:
- `POST /api/subscribe` - Subscribe to newsletter
- `GET /api/subscribe` - Get all subscribers (for admin use)

## 5. Database Schema

The `subscribers` table structure:
```sql
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 6. Security Notes

- The anon key is safe to use in client-side code
- Row Level Security (RLS) is not enabled by default
- Consider enabling RLS for production use
- Never expose your service role key in client-side code
