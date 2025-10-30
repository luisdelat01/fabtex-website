// Social Proof section - Testimonial and trust elements
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Testimonial Block */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-purple to-brand-purple/90 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-teal/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-golden-amber/10 rounded-full blur-3xl"></div>
            
            {/* Quote Icon */}
            <div className="relative mb-8">
              <svg className="w-16 h-16 text-vibrant-teal/30" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
              </svg>
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="relative">
              <p className="text-2xl lg:text-3xl text-white leading-relaxed font-medium mb-8">
                "FabTex understands textiles in a way Salesforce never did. Our reps use it because it actually helps them sell — the AI makes them better at their jobs. We're more proactive with customers and we look more professional."
              </p>
              
              {/* Attribution */}
              <footer className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-vibrant-teal/20 border-2 border-vibrant-teal/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <div className="text-white">
                  <div className="font-bold text-xl mb-1">Ricardo Silva</div>
                  <div className="text-mint-teal text-sm">
                    Commercial Director, Tintex
                  </div>
                  <div className="text-vibrant-teal/70 text-xs mt-1">
                    Export-focused factory serving Nike, Zara, Hugo Boss
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-teal/10 rounded-xl mb-4">
              <svg className="w-8 h-8 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Built by Textile Insiders</h3>
            <p className="text-soft-slate text-sm">
              Designed by people who understand export manufacturing and B2B textile sales
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-teal/10 rounded-xl mb-4">
              <svg className="w-8 h-8 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Seamless Integration</h3>
            <p className="text-soft-slate text-sm">
              Works with MacWin, ERP systems, and your existing workflows
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-teal/10 rounded-xl mb-4">
              <svg className="w-8 h-8 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Leading Manufacturers Trust Us</h3>
            <p className="text-soft-slate text-sm">
              Already helping export-focused factories compete globally
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProof;
