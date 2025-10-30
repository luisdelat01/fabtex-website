import React from 'react';
import Navigations from './components/Navigations';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import ProfessionalService from './components/ProfessionalService';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navigations />
      <div className="pt-20">
        <Hero />
        <Problem />
        <Features />
        <ProfessionalService />
        <SocialProof />
        <FinalCTA />
      </div>
    </div>
  );
}

export default App;