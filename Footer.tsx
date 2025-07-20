'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-3xl font-bold text-blue-400 mb-4 block" style={{ fontFamily: 'var(--font-pacifico)' }}>
                AliGenix
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering businesses to thrive in the digital age through innovative SEO strategies and cutting-edge AI prompt engineering solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-white"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</Link></li>
                <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Content Strategy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Prompt Engineering</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">AI Chatbot Tuning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Technical SEO</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 AliGenix. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}