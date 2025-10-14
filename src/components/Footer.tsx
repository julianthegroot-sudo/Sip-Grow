import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 p-2">
              <Image
                src="/Sipandgrowlogo2.png"
                alt="Sip&Grow Logo"
                width={240}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We research the next generation of sustainable cups. Biodegradable paper cups with embedded seed capsules that turn single-use into growth.
            </p>
            <p className="text-gray-400 text-sm">
              © Sip&Grow Made with care for the planet
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-green-400 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
