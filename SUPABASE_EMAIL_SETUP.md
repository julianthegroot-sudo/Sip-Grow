# Complete Supabase Email Subscription Setup

This guide will help you set up a fully functional email subscription system using Supabase with Next.js.

## 🗄️ Database Setup

### 1. Create the Subscribers Table

Run this SQL in your **Supabase SQL Editor**:

```sql
-- Create the subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_created_at ON subscribers(created_at);
```

### 2. Set Up Row Level Security (RLS)

Run this SQL in your **Supabase SQL Editor**:

```sql
-- Enable RLS on the table
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert
CREATE POLICY "Allow anonymous inserts" ON subscribers
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow anonymous users to read
CREATE POLICY "Allow anonymous reads" ON subscribers
FOR SELECT 
TO anon
USING (true);
```

## 🔧 Environment Variables

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=https://lpggxoybknkptzgutixk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZ2d4b3lia25rcHR6Z3V0aXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDU3MTksImV4cCI6MjA3NjAyMTcxOX0.Sy43ydUNMpjwpV-4v-tJN-APsMvmjDmZKlhZ5aVkf_Q
```

## 🧪 Testing

### 1. Test the API Route

Visit: `http://localhost:3000/api/subscribe`

You should see a JSON response with subscriber data.

### 2. Test the Subscription Form

Visit: `http://localhost:3000/test-subscription`

Try subscribing with an email address and check the console for detailed logs.

### 3. Check Your Database

Go to your Supabase dashboard → Table Editor → subscribers table to see the collected emails.

## 📁 Files Created

1. **`/src/app/api/subscribe/route.ts`** - API route with comprehensive error handling
2. **`/email-subscription-form.tsx`** - Reusable form component and hook
3. **`/src/app/test-subscription/page.tsx`** - Test page for debugging

## 🔍 Debugging

The API route includes extensive logging. Check your terminal/console for:

- `🚀 Subscribe API called` - API route started
- `📧 Received email:` - Email received
- `🔍 Checking for existing email...` - Duplicate check
- `💾 Attempting to insert email...` - Insert attempt
- `✅ Insert successful:` - Success
- `❌ Insert failed:` - Error details

## 🚨 Common Issues

### Issue: "Failed to save email subscription"
**Solution**: Check that RLS policies are set up correctly (see step 2 above)

### Issue: "Permission denied"
**Solution**: Make sure the RLS policy allows anonymous users to insert

### Issue: "This email is already subscribed"
**Solution**: This is working correctly - it prevents duplicates

## 🎯 Usage in Your Existing Forms

### Option 1: Use the Complete Component

```tsx
import EmailSubscriptionForm from './email-subscription-form';

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <EmailSubscriptionForm />
    </div>
  );
}
```

### Option 2: Use the Hook in Existing Forms

```tsx
import { useEmailSubscription } from './email-subscription-form';

export default function MyPage() {
  const { email, setEmail, isSubscribing, status, handleSubscribe } = useEmailSubscription();

  return (
    <form onSubmit={handleSubscribe}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubscribing}
      />
      <button type="submit" disabled={isSubscribing}>
        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status.type && <div>{status.message}</div>}
    </form>
  );
}
```

## ✅ Features

- ✅ Email validation (client and server-side)
- ✅ Duplicate prevention
- ✅ Comprehensive error handling
- ✅ Debug logging
- ✅ Success/error messages
- ✅ Loading states
- ✅ RLS security
- ✅ TypeScript support

Your email subscription system is now fully functional!
