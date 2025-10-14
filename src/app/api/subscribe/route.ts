import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  console.log('🚀 Subscribe API called');
  
  try {
    // Parse the request body
    const body = await request.json();
    const { email } = body;

    console.log('📧 Received email:', email);

    // Validate email is provided
    if (!email || email.trim() === '') {
      console.log('❌ Validation failed: Email is required');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email is required' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.log('❌ Validation failed: Invalid email format');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please enter a valid email address' 
        },
        { status: 400 }
      );
    }

    // Normalize email (trim and lowercase)
    const normalizedEmail = email.trim().toLowerCase();
    console.log('📧 Normalized email:', normalizedEmail);

    // Check if email already exists
    console.log('🔍 Checking for existing email...');
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', normalizedEmail)
      .single();

    // Log the check result
    if (checkError) {
      console.log('🔍 Check error (this might be normal if no record exists):', checkError.message);
      console.log('🔍 Check error code:', checkError.code);
    } else {
      console.log('🔍 Found existing subscriber:', existingSubscriber);
    }

    // If email already exists (and no error occurred), return error
    if (existingSubscriber && !checkError) {
      console.log('❌ Email already exists');
      return NextResponse.json(
        { 
          success: false, 
          error: 'This email is already subscribed' 
        },
        { status: 409 }
      );
    }

    // Insert the new email
    console.log('💾 Attempting to insert email...');
    const { data: newSubscriber, error: insertError } = await supabase
      .from('subscribers')
      .insert([
        { email: normalizedEmail }
      ])
      .select()
      .single();

    // Log the insert result
    if (insertError) {
      console.error('❌ Insert failed:', insertError);
      console.error('❌ Insert error message:', insertError.message);
      console.error('❌ Insert error code:', insertError.code);
      console.error('❌ Insert error details:', insertError.details);
      console.error('❌ Insert error hint:', insertError.hint);
      
      // Return specific error messages based on the error
      let errorMessage = 'Failed to save email subscription';
      
      if (insertError.code === '23505') {
        errorMessage = 'This email is already subscribed';
      } else if (insertError.code === '42501') {
        errorMessage = 'Permission denied. Please check your database policies.';
      } else if (insertError.message.includes('duplicate key')) {
        errorMessage = 'This email is already subscribed';
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: errorMessage,
          debug: {
            code: insertError.code,
            message: insertError.message,
            details: insertError.details
          }
        },
        { status: 500 }
      );
    }

    console.log('✅ Insert successful:', newSubscriber);
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter!',
        email: normalizedEmail
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Unexpected error in subscribe API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve all subscribers (for admin purposes)
export async function GET() {
  console.log('📋 GET subscribers called');
  
  try {
    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('id, email, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching subscribers:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to retrieve subscribers',
          debug: error
        },
        { status: 500 }
      );
    }

    console.log('✅ Retrieved subscribers:', subscribers?.length || 0);
    return NextResponse.json(
      { 
        success: true, 
        subscribers: subscribers || [],
        count: subscribers?.length || 0
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('💥 Unexpected error in GET subscribers:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}