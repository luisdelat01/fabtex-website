// Audience Section - Tabbed section for Factories and Agents
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'factories' | 'agents'>('factories');
  
  // Animation refs
  const headingRef = useScrollAnimation();
  const tab1Ref = useScrollAnimation();
  const tab2Ref = useScrollAnimation();
  
  // Separate refs for factories and agents content
  const factoriesHeadlineRef = useScrollAnimation();
  const factoriesBenefit1Ref = useScrollAnimation();
  const factoriesBenefit2Ref = useScrollAnimation();
  const factoriesBenefit3Ref = useScrollAnimation();
  const factoriesCtaRef = useScrollAnimation();
  
  const agentsHeadlineRef = useScrollAnimation();
  const agentsBenefit1Ref = useScrollAnimation();
  const agentsBenefit2Ref = useScrollAnimation();
  const agentsBenefit3Ref = useScrollAnimation();
  const agentsCtaRef = useScrollAnimation();

  // Handle hash-based tab switching (for navbar links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#factories') {
        setActiveTab('factories');
      } else if (hash === '#agents') {
        setActiveTab('agents');
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const factoriesContent = {
    headline: "Scale Your Factory's Sales Intelligence",
    benefits: [
      "Coach your entire team to sell smarter with AI guidance",
      "Get complete visibility into your sales operation",
      "Stand out with professional, modern service"
    ],
    cta: "See How It Works →",
    ctaHref: "#features"
  };

  const agentsContent = {
    headline: "Manage More Clients, Win More Business",
    benefits: [
      "Track relationships across multiple factories",
      "Never miss a follow-up with AI prompts",
      "Impress buyers with organized presentations"
    ],
    cta: "Book a Demo →",
    ctaHref: "#contact"
  };

  const currentContent = activeTab === 'factories' ? factoriesContent : agentsContent;

  return (
    <section id="audience" className="bg-brand-purple text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 
            ref={headingRef.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up ${headingRef.isVisible ? 'visible' : ''}`}
          >
            Built for Factories and Agents
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            ref={tab1Ref.ref as React.RefObject<HTMLButtonElement>}
            onClick={() => setActiveTab('factories')}
            className={`relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-white hover:text-white/90 min-h-[44px] fade-in-up stagger-1 ${tab1Ref.isVisible ? 'visible' : ''} ${
              activeTab === 'factories'
                ? ''
                : 'opacity-75 hover:opacity-100'
            }`}
          >
            For Factories
            {activeTab === 'factories' && (
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-vibrant-teal rounded-full"></div>
            )}
          </button>
          
          <button
            ref={tab2Ref.ref as React.RefObject<HTMLButtonElement>}
            onClick={() => setActiveTab('agents')}
            className={`relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-white hover:text-white/90 min-h-[44px] fade-in-up stagger-1 ${tab2Ref.isVisible ? 'visible' : ''} ${
              activeTab === 'agents'
                ? ''
                : 'opacity-75 hover:opacity-100'
            }`}
          >
            For Agents
            {activeTab === 'agents' && (
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-vibrant-teal rounded-full"></div>
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="space-y-8">
              
              {/* Headline */}
              <h3 
                ref={activeTab === 'factories' 
                  ? factoriesHeadlineRef.ref as React.RefObject<HTMLHeadingElement>
                  : agentsHeadlineRef.ref as React.RefObject<HTMLHeadingElement>}
                key={`${activeTab}-headline`}
                className={`text-4xl font-bold mb-8 fade-in-up ${
                  activeTab === 'factories' 
                    ? (factoriesHeadlineRef.isVisible ? 'visible' : '')
                    : (agentsHeadlineRef.isVisible ? 'visible' : '')
                }`}
              >
                {currentContent.headline}
              </h3>

              {/* Benefits List */}
              <div className="space-y-4 pt-4">
                {currentContent.benefits.map((benefit, index) => {
                  const factoriesRefs = [factoriesBenefit1Ref, factoriesBenefit2Ref, factoriesBenefit3Ref];
                  const agentsRefs = [agentsBenefit1Ref, agentsBenefit2Ref, agentsBenefit3Ref];
                  const benefitRefs = activeTab === 'factories' ? factoriesRefs : agentsRefs;
                  const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3'];
                  const ref = benefitRefs[index];
                  
                  return (
                    <div 
                      key={`${activeTab}-${index}`}
                      ref={ref.ref as React.RefObject<HTMLDivElement>}
                      className={`flex items-start gap-3 mb-4 fade-in-up ${staggerClasses[index]} ${ref.isVisible ? 'visible' : ''}`}
                    >
                      <svg className="w-6 h-6 text-mint-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-lg text-white/90 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div 
                ref={activeTab === 'factories' 
                  ? factoriesCtaRef.ref as React.RefObject<HTMLDivElement>
                  : agentsCtaRef.ref as React.RefObject<HTMLDivElement>}
                className={`pt-6 fade-in-up stagger-4 ${
                  activeTab === 'factories' 
                    ? (factoriesCtaRef.isVisible ? 'visible' : '')
                    : (agentsCtaRef.isVisible ? 'visible' : '')
                }`}
              >
                <a 
                  href={currentContent.ctaHref}
                  className="inline-block bg-vibrant-teal px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {currentContent.cta}
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceSection;

