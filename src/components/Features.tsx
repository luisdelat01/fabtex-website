// Features section - The 3 AI superpowers with alternating layouts
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Smart Selection & Request Intelligence",
      description: "AI reads buyer requests, prompts smart clarifying questions, and scores your catalog for relevance. Your reps present the RIGHT fabrics on the first try — whether they're experienced or not.",
      benefits: [
        "Understands vague requests and asks the right follow-up questions",
        "Scores every product in your catalog for relevance to buyer needs",
        "Suggests perfect fabrics even junior reps wouldn't think of",
        "Responds faster than competitors while being more accurate"
      ],
      placeholderText: "AI Question Prompts + Product Scoring",
      placeholderDescription: "Screenshot showing AI prompting clarifying questions and displaying product recommendations with relevance scores"
    },
    {
      title: "Email Intelligence & Decision Tracking",
      description: "All customer conversations in one place. AI extracts key decisions from email threads so nothing gets lost. Everyone on your team sees the full context.",
      benefits: [
        "Automatic email integration — no manual data entry",
        "AI highlights critical decisions, agreements, and commitments",
        "Complete conversation history accessible to entire team",
        "Never lose track of what was promised or decided"
      ],
      placeholderText: "Unified Inbox with Decision Tracking",
      placeholderDescription: "Screenshot of unified inbox interface with highlighted agreements and extracted decisions"
    },
    {
      title: "Proactive Relationship Management",
      description: "AI monitors 200+ relationships and tells reps exactly who to contact, when, and what to say. Turn your team from reactive to proactive.",
      benefits: [
        "AI identifies which customers need attention right now",
        "Suggests specific outreach actions with context",
        "Surfaces buying patterns and optimal contact timing",
        "Drafts personalized follow-ups based on customer history"
      ],
      placeholderText: "AI Action Prompts & Relationship Health",
      placeholderDescription: "Screenshot showing AI-generated contact prompts and relationship health indicators"
    }
  ];

  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-purple mb-6">
            Sales Intelligence Built for Textiles
          </h2>
          <p className="text-xl text-soft-slate leading-relaxed">
            AI-powered features that coach your team to sell like experts, make smart selections, and manage relationships proactively.
          </p>
        </div>

        {/* Feature Blocks - Alternating Layout */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Text Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  {/* Feature Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-vibrant-teal/10 text-vibrant-teal font-bold text-xl">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-purple">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-soft-slate leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-3 pt-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-teal/20 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-vibrant-teal" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-dark-slate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot Placeholder */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-brand-purple/5 to-vibrant-teal/5 rounded-2xl border-2 border-brand-purple/10 aspect-[4/3] flex items-center justify-center p-8">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 mx-auto bg-brand-purple/10 rounded-xl flex items-center justify-center">
                          <svg className="w-10 h-10 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-brand-purple font-semibold text-sm">
                          {feature.placeholderText}
                        </p>
                        <p className="text-soft-slate text-xs max-w-sm mx-auto">
                          {feature.placeholderDescription}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className={`absolute w-24 h-24 bg-vibrant-teal/10 rounded-full blur-2xl ${
                      isEven ? '-bottom-6 -right-6' : '-top-6 -left-6'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefit Callout */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-purple to-brand-purple/90 rounded-2xl p-10 text-white shadow-2xl">
            <p className="text-xl lg:text-2xl leading-relaxed">
              This is how you improve your sales operation — with intelligence that coaches your team, complete visibility to take action, and professional service that makes your factory stand out.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
