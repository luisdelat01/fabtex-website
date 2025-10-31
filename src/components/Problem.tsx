// Problem section - Explains why there's no good software for textile sales
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Problem: React.FC = () => {
  const headlineAnim = useScrollAnimation();
  const subtitleAnim = useScrollAnimation();
  const resultAnim = useScrollAnimation();

  const painPoints = [
    {
      title: "Generic CRMs Don't Understand Textiles",
      description: "Salesforce and similar platforms weren't built for fabric catalogs, buying DNA, or seasonal collections. They're designed for different industries.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    },
    {
      title: "ERP Systems Aren't Built for Sales",
      description: "Your ERP handles operations beautifully, but it provides no sales intelligence, relationship insights, or proactive prompts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "You're Competing With Better Tools",
      description: "Your global competitors may already be using purpose-built solutions. Limited visibility and reactive teams put you at a disadvantage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      )
    }
  ];

  const cardAnimations = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation()
  ];

  return (
    <section id="how-it-works" className="bg-mint-teal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={headlineAnim.ref as React.RefObject<HTMLHeadingElement>} className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-purple mb-6 fade-in-up ${headlineAnim.isVisible ? 'visible' : ''}`}>
            There's No Good Software Built for Textile Sales
          </h2>
          <p ref={subtitleAnim.ref as React.RefObject<HTMLParagraphElement>} className={`text-lg sm:text-lg md:text-xl text-soft-slate leading-relaxed fade-in-up stagger-1 ${subtitleAnim.isVisible ? 'visible' : ''}`}>
            Second and third-generation factory leaders already know this. You're managing complex relationships with tools built for different industries.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, index) => {
            const staggerClasses = ['stagger-2', 'stagger-3', 'stagger-4'];
            return (
            <div 
              key={index}
              ref={cardAnimations[index].ref as React.RefObject<HTMLDivElement>}
              className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default fade-in-up ${staggerClasses[index]} ${cardAnimations[index].isVisible ? 'visible' : ''}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-mint-teal/50 rounded-xl flex items-center justify-center text-brand-purple mb-6 border border-mint-teal/70">
                {point.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-brand-purple mb-4">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-soft-slate leading-relaxed">
                {point.description}
              </p>
            </div>
            );
          })}
        </div>

        {/* Result Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div ref={resultAnim.ref as React.RefObject<HTMLDivElement>} className={`bg-vibrant-teal rounded-2xl border-2 border-golden-amber/40 p-8 fade-in-up stagger-4 ${resultAnim.isVisible ? 'visible' : ''} relative overflow-hidden`}>
            {/* Golden amber accent border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-golden-amber/20 pointer-events-none"></div>
            <p className="text-lg text-dark-slate relative z-10">
              <span className="font-semibold text-brand-purple">The result:</span> Limited visibility into your sales operation, reactive teams waiting for buyers to reach out, and missed opportunities because you don't have the intelligence to stay ahead.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
