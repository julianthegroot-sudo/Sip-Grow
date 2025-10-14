'use client';

import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Materials",
    excerpt: "Exploring innovative materials that could revolutionize the cup industry and reduce environmental impact.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Innovation"
  },
  {
    id: 2,
    title: "Building a Circular Economy",
    excerpt: "How we're designing our cups to fit perfectly into a circular economy model.",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Our Design Process",
    excerpt: "Behind the scenes of creating a cup that's both beautiful and sustainable.",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Design"
  },
  {
    id: 4,
    title: "Seed Technology Innovation",
    excerpt: "How we developed heat-resistant seed capsules that survive the brewing process and thrive in soil.",
    date: "February 22, 2024",
    readTime: "7 min read",
    category: "Technology"
  },
  {
    id: 5,
    title: "The Science of Biodegradation",
    excerpt: "Understanding the chemical processes that make our cups decompose naturally while nourishing plant growth.",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Science"
  },
  {
    id: 6,
    title: "Community Impact Stories",
    excerpt: "Real stories from communities where our Growing Cups have created green spaces and environmental awareness.",
    date: "February 8, 2024",
    readTime: "5 min read",
    category: "Impact"
  },
  {
    id: 7,
    title: "Sustainable Manufacturing",
    excerpt: "Our commitment to zero-waste production processes and renewable energy in cup manufacturing.",
    date: "February 1, 2024",
    readTime: "8 min read",
    category: "Manufacturing"
  }
];

export default function Blog() {
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setSubscriptionStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscriptionStatus({
          type: 'success',
          message: data.message
        });
        setEmail(''); // Clear the input on success
      } else {
        setSubscriptionStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.'
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Insights, innovations, and stories from the forefront of sustainable packaging technology
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-green-100 mb-8">
            Get the latest insights on sustainable packaging and environmental innovation delivered to your inbox.
          </p>
          
          {/* Status Message */}
          {subscriptionStatus.type && (
            <div className={`mb-6 p-4 rounded-lg max-w-md mx-auto ${
              subscriptionStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {subscriptionStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribing}
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white focus:ring-2 focus:ring-green-300 focus:border-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
            <button 
              type="submit"
              disabled={isSubscribing}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
