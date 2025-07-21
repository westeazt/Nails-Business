"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full p-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold text-pink-500">
          YVD NAILS
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#services" className="text-gray-600 hover:text-pink-500 transition-colors">
            Services
          </Link>
          <Link href="/#gallery" className="text-gray-600 hover:text-pink-500 transition-colors">
            Gallery
          </Link>

          {/* Login and Signup Buttons */}
          <div className="flex items-center gap-4 ml-4">
            <Link href="/login" className="text-gray-600 hover:text-pink-500 transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button (we can add functionality later) */}
        <div className="md:hidden">
            <button className="text-gray-600 hover:text-pink-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </nav>
    </header>
  );
}