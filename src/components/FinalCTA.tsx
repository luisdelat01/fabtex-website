// Final CTA section - Demo request form
import React, { useState } from 'react';

const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Thanks for your interest! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo" className="bg-gradient-to-br from-brand-purple via-brand-purple to-brand-purple/90 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Improve Your Sales Operation?
            </h2>
            <p className="text-xl text-mint-teal leading-relaxed">
              Join export-focused manufacturers who are standing out with AI-powered intelligence and professional service.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-purple mb-2">
                Book Your Demo
              </h3>
              <p className="text-soft-slate">
                See it work with real textile data • 30 minutes • No pressure
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
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
              <div>
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
              <div>
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
              <div>
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-vibrant-teal hover:bg-link-teal text-brand-purple font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Your Demo
              </button>

              {/* Trust Line */}
              <p className="text-center text-sm text-soft-slate pt-4">
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
