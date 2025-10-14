'use client';

import { useState } from 'react';

// Email subscription form component
export default function EmailSubscriptionForm() {
  // State management
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form submission
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 Form submitted with email:', email);
    
    // Clear previous status
    setStatus({ type: null, message: '' });
    
    // Validate email
    if (!email.trim()) {
      setStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubscribing(true);

    try {
      console.log('📤 Sending request to API...');
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      console.log('📥 Response received:', response.status);
      
      const data = await response.json();
      console.log('📥 Response data:', data);

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Successfully subscribed!'
        });
        setEmail(''); // Clear the input on success
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.'
        });
        
        // Log debug info if available
        if (data.debug) {
          console.error('🐛 Debug info:', data.debug);
        }
      }
    } catch (error) {
      console.error('💥 Network error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Status Messages */}
      {status.type && (
        <div className={`mb-4 p-4 rounded-lg ${
          status.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {status.type === 'success' ? (
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                {status.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Email Subscription Form */}
      <form onSubmit={handleSubscribe} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubscribing}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubscribing}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubscribing ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
      </form>
    </div>
  );
}

// Alternative: Hook for use in existing forms
export function useEmailSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 Hook: Form submitted with email:', email);
    
    setStatus({ type: null, message: '' });
    
    if (!email.trim()) {
      setStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubscribing(true);

    try {
      console.log('📤 Hook: Sending request to API...');
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      console.log('📥 Hook: Response received:', response.status);
      
      const data = await response.json();
      console.log('📥 Hook: Response data:', data);

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Successfully subscribed!'
        });
        setEmail('');
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.'
        });
        
        if (data.debug) {
          console.error('🐛 Hook: Debug info:', data.debug);
        }
      }
    } catch (error) {
      console.error('💥 Hook: Network error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return {
    email,
    setEmail,
    isSubscribing,
    status,
    handleSubscribe
  };
}
