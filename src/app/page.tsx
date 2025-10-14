'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  
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

  const nextBlogSlide = () => {
    setCurrentBlogSlide((prev) => (prev + 1) % Math.ceil(blogPosts.length / 3));
  };

  const prevBlogSlide = () => {
    setCurrentBlogSlide((prev) => (prev - 1 + Math.ceil(blogPosts.length / 3)) % Math.ceil(blogPosts.length / 3));
  };

  const getVisibleBlogPosts = () => {
    const startIndex = currentBlogSlide * 3;
    return blogPosts.slice(startIndex, startIndex + 3);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We Research the Next Generation of{' '}
              <span className="text-green-600">Sustainable Cups</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At SipandGrow, we design and test bio-based materials, seed-infused linings, 
              and regenerative cup technologies that turn single-use into growth
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Growing Cup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Growing Cup
              </h2>
              <p className="text-2xl text-green-600 font-semibold mb-4">
                Drink. Dispose. Grow.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship innovation, The Growing Cup, is a biodegradable paper cup with an embedded seed capsule at the base. 
                After use, simply plant it in soil — as the cup naturally decomposes, the seeds germinate, 
                giving life to native plants.
              </p>
              <p className="text-gray-700 mb-8">
                <strong>Why it matters:</strong> Every cup turns daily waste into greenery, supporting reforestation 
                and reducing landfill impact. Designed for both hot and cold drinks, it combines sustainability, 
                science, and innovation in every sip.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    100% compostable materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Embedded, heat-resistant seed capsule
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Supports native plant growth
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Designed for hot & cold beverages
                  </li>
                </ul>
              </div>

              <Link 
                href="/contact" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Plant Your Cup
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 flex items-center h-full">
              <div className="w-full h-auto relative -mt-8">
        <Image
                  src="/SipAndGrowProtoType.jpeg"
                  alt="The Growing Cup - biodegradable cup with embedded seeds"
                  width={500}
                  height={375}
                  className="object-contain w-full h-auto rounded-lg max-w-md mx-auto"
          priority
        />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sustainability First
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/sustainability" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsible Materials</h3>
              <p className="text-gray-600">
                Chosen for durability and recyclability, ensuring every component serves a purpose in the circular economy.
              </p>
            </Link>
            
            <Link href="/sustainability" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modular Design</h3>
              <p className="text-gray-600">
                Parts can be replaced instead of discarded, extending product life and reducing waste generation.
              </p>
            </Link>
            
            <Link href="/sustainability" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-of-Life Program</h3>
              <p className="text-gray-600">
                Take-back program planned for true circularity, ensuring every cup returns to the cycle of renewal.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest from our blog
            </h2>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevBlogSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:border-2 hover:border-green-500 hover:scale-110 hover:bg-green-50 transition-all duration-300 z-10 group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextBlogSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:border-2 hover:border-green-500 hover:scale-110 hover:bg-green-50 transition-all duration-300 z-10 group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
              {getVisibleBlogPosts().map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  
                  <p className="text-sm text-gray-500">{post.date}</p>
                </Link>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(blogPosts.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBlogSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentBlogSlide === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-green-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Stay in the loop</h2>
              <p className="text-green-100 mb-8">
                Get updates on our research and development progress.
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
                  {isSubscribing ? 'Subscribing...' : 'Notify me'}
                </button>
              </form>
            </div>
          </section>
    </div>
  );
}
