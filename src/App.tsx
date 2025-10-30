import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import ProfessionalService from './components/ProfessionalService';

function App(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <ProfessionalService />
    </div>
  );
}

export default App;
