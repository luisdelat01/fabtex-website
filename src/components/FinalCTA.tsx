// Final CTA section - Demo request form
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCTA: React.FC = () => {
  // Animation refs
  const headingRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const formTitleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const submitButtonRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-brand-purple to-brand-purple-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              ref={headingRef.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up ${headingRef.isVisible ? 'visible' : ''}`}
            >
              Ready to Improve Your Sales Operation?
            </h2>
            <p 
              ref={subtitleRef.ref as React.RefObject<HTMLParagraphElement>}
              className={`text-lg sm:text-lg md:text-xl text-mint-teal leading-relaxed fade-in-up stagger-1 ${subtitleRef.isVisible ? 'visible' : ''}`}
            >
              Join export-focused manufacturers who are standing out with AI-powered intelligence and professional service.
            </p>
          </div>

          {/* Form Card */}
          <div 
            ref={formRef.ref as React.RefObject<HTMLDivElement>}
            className={`bg-white rounded-2xl shadow-2xl p-4 md:p-8 fade-in-up stagger-2 ${formRef.isVisible ? 'visible' : ''}`}
          >
            
            <div className="text-center mb-8">
              <h3 
                ref={formTitleRef.ref as React.RefObject<HTMLHeadingElement>}
                className={`text-xl sm:text-xl md:text-2xl font-bold text-brand-purple mb-2 fade-in-up stagger-3 ${formTitleRef.isVisible ? 'visible' : ''}`}
              >
                Book Your Demo
              </h3>
              <p className="text-sm sm:text-base text-soft-slate">
                See it work with real textile data • 30 minutes • No pressure
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
              
              {/* Success Message - Full width */}
              {showSuccess && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 md:px-6 py-4 rounded-lg shadow-md md:col-span-2">
                  <p className="font-semibold">Thanks! We'll be in touch soon.</p>
                </div>
              )}
              
              {/* Name Field - Full width on mobile, grid on desktop */}
              <div className="md:col-span-1">
                <label htmlFor="name" className="block text-sm font-semibold text-brand-purple mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-vibrant-teal focus:outline-none transition-colors"
                  placeholder="Ricardo Silva"
                />
              </div>

              {/* Email Field */}
              <div className="md:col-span-1">
                <label htmlFor="email" className="block text-sm font-semibold text-brand-purple mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-vibrant-teal focus:outline-none transition-colors"
                  placeholder="ricardo@tintex.com"
                />
              </div>

              {/* Company Field */}
              <div className="md:col-span-1">
                <label htmlFor="company" className="block text-sm font-semibold text-brand-purple mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-vibrant-teal focus:outline-none transition-colors"
                  placeholder="Tintex"
                />
              </div>

              {/* Phone Field */}
              <div className="md:col-span-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-purple mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-vibrant-teal focus:outline-none transition-colors"
                  placeholder="+351 123 456 789"
                />
              </div>

              {/* Submit Button - Full width */}
              <div 
                ref={submitButtonRef.ref as React.RefObject<HTMLDivElement>}
                className={`md:col-span-2 fade-in-up stagger-4 ${submitButtonRef.isVisible ? 'visible' : ''}`}
              >
                <button
                  type="submit"
                  className="btn-primary w-full py-4 px-8 text-lg font-bold min-h-[44px] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Book Your Demo
                </button>
              </div>

              {/* Trust Line */}
              <p className="text-center text-sm text-soft-slate pt-4 md:col-span-2">
                See how FabTex can help your factory compete with better tools
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
