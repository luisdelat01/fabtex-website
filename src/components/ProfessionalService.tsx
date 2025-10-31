// Professional Service section - Modern service differentiation
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProfessionalService: React.FC = () => {
  // Animation refs
  const badgeRef = useScrollAnimation();
  const headingRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const feature1Ref = useScrollAnimation();
  const feature2Ref = useScrollAnimation();
  const feature3Ref = useScrollAnimation();
  const feature4Ref = useScrollAnimation();
  const visualExampleRef = useScrollAnimation();
  const bottomCalloutRef = useScrollAnimation();
  const serviceFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Beautiful Selection Presentations",
      description: "Replace scattered Excel sheets with professional selection links showing complete product information"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Organized Communication",
      description: "Complete conversation history and status updates accessible to everyone on your team"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast, Intelligent Responses",
      description: "AI helps your team respond quickly with relevant, complete details — no more keeping buyers waiting"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Professional Client Experience",
      description: "Look as modern and organized as the brands you serve — younger buyers expect better experiences"
    }
  ];

  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div 
            ref={badgeRef.ref as React.RefObject<HTMLDivElement>}
            className={`inline-flex items-center justify-center mb-6 fade-in-up ${badgeRef.isVisible ? 'visible' : ''}`}
          >
            <span className="bg-golden-amber/10 text-golden-amber font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wide border border-golden-amber/20">
              Service Excellence
            </span>
          </div>
          <h2 
            ref={headingRef.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-purple mb-6 fade-in-up stagger-1 ${headingRef.isVisible ? 'visible' : ''}`}
          >
            Modern Service That Makes Buyers Want to Work With You
          </h2>
          <p 
            ref={subtitleRef.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-lg sm:text-lg md:text-xl text-soft-slate leading-relaxed fade-in-up stagger-2 ${subtitleRef.isVisible ? 'visible' : ''}`}
          >
            When everyone has similar products, you differentiate through service. Professional, modern service matters — especially as buyers get younger and expect better experiences.
          </p>
        </div>

        {/* Service Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceFeatures.map((feature, index) => {
            const featureRefs = [feature1Ref, feature2Ref, feature3Ref, feature4Ref];
            const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];
            const ref = featureRefs[index];
            
            return (
            <div 
              key={index}
              ref={ref.ref as React.RefObject<HTMLDivElement>}
              className={`bg-white rounded-xl border border-gray-200 shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer fade-in-up ${staggerClasses[index]} ${ref.isVisible ? 'visible' : ''}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-golden-amber/10 rounded-lg flex items-center justify-center text-golden-amber">
                  {feature.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-purple mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-soft-slate leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Visual Example Placeholder */}
        <div 
          ref={visualExampleRef.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-5xl mx-auto fade-in-up stagger-4 ${visualExampleRef.isVisible ? 'visible' : ''}`}
        >
          <div className="bg-white rounded-2xl border-2 border-brand-purple/10 p-12 shadow-xl">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-brand-purple">
                Professional Selection Presentation Example
              </h3>
              <p className="text-soft-slate">
                Replace with: Screenshot of professional selection interface showing organized product info
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-vibrant-teal/5 to-mint-teal/5 rounded-xl aspect-[16/9] flex items-center justify-center border-2 border-dashed border-vibrant-teal/30">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-vibrant-teal/10 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-vibrant-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-vibrant-teal font-medium">
                  Selection Presentation Screenshot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div 
          ref={bottomCalloutRef.ref as React.RefObject<HTMLDivElement>}
          className={`mt-16 text-center max-w-4xl mx-auto fade-in-up stagger-4 ${bottomCalloutRef.isVisible ? 'visible' : ''}`}
        >
          <p className="text-xl text-dark-slate">
            <span className="font-semibold text-brand-purple">This is how you differentiate</span> when everyone has similar products — through modern, buyer-friendly service that makes you the easy choice.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalService;
