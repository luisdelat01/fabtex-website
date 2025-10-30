// Hero section - Deep purple background with headline, value props, and CTA
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-purple min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The CRM Built for Textile Manufacturing
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-mint-teal leading-relaxed">
              AI-powered intelligence that helps your team sell smarter, makes your factory stand out with professional service, and shifts your operation from reactive to proactive.
            </p>
            
            {/* Three Quick Wins */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-teal flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">
                  Get visibility into your sales operation so you can take action based on real data
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-teal flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">
                  AI coaches your reps to make smart selections and ask the right questions
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-teal flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">
                  Shift your team to proactive with AI prompts for who to contact and when
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-vibrant-teal hover:bg-link-teal text-brand-purple font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Book a Demo
              </button>
            </div>
          </div>
          
          {/* Right Column - Dashboard Screenshot Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-vibrant-teal/20 to-mint-teal/10 rounded-2xl border-2 border-vibrant-teal/30 aspect-[4/3] flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-3 p-8">
                <div className="w-20 h-20 mx-auto bg-vibrant-teal/30 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium">
                  Dashboard Screenshot
                </p>
                <p className="text-white/60 text-xs max-w-xs">
                  Replace with: Deal pipeline with AI insights highlighted
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden-amber/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-vibrant-teal/20 rounded-full blur-2xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
