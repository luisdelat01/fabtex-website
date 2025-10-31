import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - changes color based on scroll */}
          <div className="flex-shrink-0">
            <img 
              src={isScrolled ? "/Images/Logo/logo-color.png" : "/Images/Logo/logo-white.png"} 
              alt="FabTex Logo" 
              className="h-10 transition-all duration-300"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`transition-colors duration-300 ${
              isScrolled ? 'text-dark-slate hover:text-brand-purple' : 'text-white hover:text-mint-teal'
            }`}>
              Features
            </a>
            <a 
              href="#factories" 
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#factories';
                const element = document.getElementById('audience');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-dark-slate hover:text-brand-purple' : 'text-white hover:text-mint-teal'
              }`}
            >
              For Factories
            </a>
            <a 
              href="#agents" 
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#agents';
                const element = document.getElementById('audience');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-dark-slate hover:text-brand-purple' : 'text-white hover:text-mint-teal'
              }`}
            >
              For Agents
            </a>
            <button className="bg-vibrant-teal text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

