import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseScrollAnimationReturn {
  ref: RefObject<HTMLElement | null>;
  isVisible: boolean;
}

/**
 * Custom React hook for scroll animations using Intersection Observer
 * Triggers when element is 10% visible in the viewport
 * 
 * @returns {UseScrollAnimationReturn} Object containing ref and isVisible state
 * 
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation();
 * 
 * return (
 *   <div ref={ref} className={isVisible ? 'fade-in-up' : ''}>
 *     Content here
 *   </div>
 * );
 * ```
 */
export function useScrollAnimation(): UseScrollAnimationReturn {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility based on whether element is intersecting
          // When element enters viewport: set to true (triggers animation)
          // When element leaves viewport: set to false (allows re-animation)
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}

