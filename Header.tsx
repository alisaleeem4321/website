'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
            AliGenix
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <Link href="#about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#services" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="#portfolio" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="#contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}