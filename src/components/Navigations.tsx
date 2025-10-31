// Navigation bar - Sticky header with adaptive logo
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Full wordmark on desktop, icon only on mobile */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center transition-transform duration-200 hover:scale-105"
            >
              {/* Desktop Logo - Full Wordmark */}
              <img 
                src="/Images/Logo/logo-color.png" 
                alt="FabTex" 
                className="hidden md:block h-12 w-auto"
              />
              {/* Mobile Logo - Icon Only */}
              <img 
                src="/Images/Logo/icon-color.png" 
                alt="FabTex" 
                className="md:hidden h-10 w-10 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Show on >= 768px */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200"
            >
              Testimonials
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-vibrant-teal hover:bg-link-teal text-brand-purple font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md min-h-[44px] border-2 border-transparent hover:border-golden-amber hover:shadow-[0_0_20px_rgba(232,167,101,0.4)]"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button - Show only on < 768px */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-purple hover:bg-brand-purple/10 transition-colors min-h-[44px] min-w-[44px]"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200 py-3 min-h-[44px]"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200 py-3 min-h-[44px]"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-dark-slate hover:text-brand-purple font-medium transition-colors duration-200 py-3 min-h-[44px]"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="bg-vibrant-teal hover:bg-link-teal text-brand-purple font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 text-center min-h-[44px] border-2 border-transparent hover:border-golden-amber hover:shadow-[0_0_20px_rgba(232,167,101,0.4)]"
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;