'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError(null);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  subject: '',
                  message: ''
                });
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to join the sustainable packaging revolution? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">Send us a message</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Error sending message
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      {submitError}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="">Select a subject</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="product">Product Information</option>
                <option value="media">Media Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our Growing Cups
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How long does it take for the cup to decompose?",
                answer: "Our Growing Cups typically decompose within 3-6 months under proper composting conditions, depending on environmental factors like temperature and moisture."
              },
              {
                question: "What types of seeds are included?",
                answer: "We use native plant seeds that are specifically selected for each region to ensure they support local ecosystems and biodiversity."
              },
              {
                question: "Can I use these cups for hot beverages?",
                answer: "Yes! Our cups are designed to safely hold hot beverages up to 95°C without compromising the embedded seeds or cup integrity."
              },
              {
                question: "How do I plant the cup?",
                answer: "Simply place the entire cup in soil, cover with a thin layer of dirt, and water regularly. The cup will decompose naturally while the seeds germinate and grow."
              },
              {
                question: "Are the cups safe for food contact?",
                answer: "Absolutely! All materials used in our Growing Cups are food-safe and meet strict safety standards for beverage containers."
              },
              {
                question: "What happens if I don't plant the cup?",
                answer: "If not planted, the cup will still decompose naturally in a landfill, though it won't contribute to plant growth. We encourage planting for maximum environmental benefit."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${
                    openFAQs.includes(index) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQs.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
