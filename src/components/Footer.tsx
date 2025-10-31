// Footer component - 3 columns with links, social media, and copyright
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Content - Stack on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-teal">Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-teal">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-teal">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#privacy" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#cookie" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="#security" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-teal">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#blog" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#help" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#docs" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  className="link-underline text-white/80 hover:text-white transition-colors duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 icon-hover" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 icon-hover" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 icon-hover" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 icon-hover" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} FabTex. All rights reserved.
            </p>
            <p className="text-white/70 text-sm text-center md:text-right">
              Built for export-focused manufacturers
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
