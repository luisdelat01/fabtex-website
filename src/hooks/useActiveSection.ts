import { useEffect, useState } from 'react';

type SectionId =
  | 'hero'
  | 'problem'
  | 'features'
  | 'audience'
  | 'service'
  | 'social-proof'
  | 'cta';

interface SectionConfig {
  id: SectionId;
  selector: string;
  navbarBg: string;
  navbarTextColor: string;
  logoSrc: string;
  iconSrc: string;
}

const SECTION_CONFIGS: SectionConfig[] = [
  {
    id: 'hero',
    selector: '.bg-brand-purple.min-h-screen',
    navbarBg: 'rgba(46, 26, 71, 0.85)',
    navbarTextColor: 'text-white',
    logoSrc: '/Images/Logo/logo-white.png',
    iconSrc: '/Images/Logo/icon-white.png',
  },
  {
    id: 'problem',
    selector: '#how-it-works',
    navbarBg: 'rgba(178, 245, 234, 0.85)',
    navbarTextColor: 'text-brand-purple',
    logoSrc: '/Images/Logo/logo-violet.png',
    iconSrc: '/Images/Logo/icon-violet.png',
  },
  {
    id: 'features',
    selector: '#features',
    navbarBg: 'rgba(255, 255, 255, 0.85)',
    navbarTextColor: 'text-dark-slate',
    logoSrc: '/Images/Logo/logo-color.png',
    iconSrc: '/Images/Logo/icon-color.png',
  },
  {
    id: 'audience',
    selector: '#audience',
    navbarBg: 'rgba(46, 26, 71, 0.85)',
    navbarTextColor: 'text-white',
    logoSrc: '/Images/Logo/logo-white.png',
    iconSrc: '/Images/Logo/icon-white.png',
  },
  {
    id: 'service',
    selector: '.bg-light-gray',
    navbarBg: 'rgba(249, 250, 251, 0.85)',
    navbarTextColor: 'text-dark-slate',
    logoSrc: '/Images/Logo/logo-violet.png',
    iconSrc: '/Images/Logo/icon-violet.png',
  },
  {
    id: 'social-proof',
    selector: '#testimonials',
    navbarBg: 'rgba(255, 255, 255, 0.85)',
    navbarTextColor: 'text-dark-slate',
    logoSrc: '/Images/Logo/logo-color.png',
    iconSrc: '/Images/Logo/icon-color.png',
  },
  {
    id: 'cta',
    selector: '#contact',
    navbarBg: 'rgba(46, 26, 71, 0.85)',
    navbarTextColor: 'text-white',
    logoSrc: '/Images/Logo/logo-white.png',
    iconSrc: '/Images/Logo/icon-white.png',
  },
];

export const useActiveSection = (): SectionConfig => {
  const [activeSection, setActiveSection] = useState<SectionConfig>(SECTION_CONFIGS[0]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingSection = SECTION_CONFIGS.find((section) =>
            entry.target.matches(section.selector),
          );

          if (matchingSection) {
            setActiveSection(matchingSection);
          }
        }
      });
    }, observerOptions);

    const observedElements: Element[] = [];

    SECTION_CONFIGS.forEach((config) => {
      const elements = document.querySelectorAll(config.selector);
      elements.forEach((element) => {
        observer.observe(element);
        observedElements.push(element);
      });
    });

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return activeSection;
};
