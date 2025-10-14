'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Sipandgrowlogo2.png"
              alt="Sip&Grow Logo"
              width={240}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-green-600 transition-colors">
              Sustainability
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/sustainability" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sustainability
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
