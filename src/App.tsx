import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import AudienceSection from './components/AudienceSection';
import ProfessionalService from './components/ProfessionalService';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Problem />
        <Features />
        <AudienceSection />
        <ProfessionalService />
        <SocialProof />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;