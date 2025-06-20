'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Fashion Store
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/men" className="text-gray-600 hover:text-gray-900">Men</Link>
            <Link href="/women" className="text-gray-600 hover:text-gray-900">Women</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/men" className="text-gray-600 hover:text-gray-900">Men</Link>
              <Link href="/women" className="text-gray-600 hover:text-gray-900">Women</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 