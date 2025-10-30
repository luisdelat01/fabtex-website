// Problem section - Explains why there's no good software for textile sales
import React from 'react';

const Problem: React.FC = () => {
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

  return (
    <section id="how-it-works" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-purple mb-6">
            There's No Good Software Built for Textile Sales
          </h2>
          <p className="text-xl text-soft-slate leading-relaxed">
            Second and third-generation factory leaders already know this. You're managing complex relationships with tools built for different industries.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center text-brand-purple mb-6">
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
          ))}
        </div>

        {/* Result Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-purple/5 to-vibrant-teal/5 rounded-2xl border-2 border-brand-purple/10 p-8">
            <p className="text-lg text-dark-slate">
              <span className="font-semibold text-brand-purple">The result:</span> Limited visibility into your sales operation, reactive teams waiting for buyers to reach out, and missed opportunities because you don't have the intelligence to stay ahead.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
