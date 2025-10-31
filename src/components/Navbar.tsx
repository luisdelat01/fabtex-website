import { useEffect, useState, type MouseEvent } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAudienceScroll = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    window.location.hash = hash;

    const audienceSection = document.getElementById('audience');
    audienceSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDemoClick = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${activeSection.navbarTextColor}`}
      style={{
        backgroundColor: activeSection.navbarBg,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2.5" aria-label="FabTex home">
              <img
                src={activeSection.iconSrc}
                alt="Fabtex"
                className="h-8 w-8 transition-all duration-500"
              />
              <span className="text-xl font-bold uppercase tracking-tight">
                Fabtex
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="font-medium transition-all duration-200 hover:scale-105 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2"
            >
              Features
            </a>
            <a
              href="#factories"
              onClick={(event) => handleAudienceScroll(event, '#factories')}
              className="font-medium transition-all duration-200 hover:scale-105 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2"
            >
              For Factories
            </a>
            <a
              href="#agents"
              onClick={(event) => handleAudienceScroll(event, '#agents')}
              className="font-medium transition-all duration-200 hover:scale-105 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2"
            >
              For Agents
            </a>
            <button
              type="button"
              onClick={handleDemoClick}
              className="bg-vibrant-teal text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-link-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
