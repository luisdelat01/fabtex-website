import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import ProfessionalService from './components/ProfessionalService';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';

function App(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <ProfessionalService />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}

export default App;
