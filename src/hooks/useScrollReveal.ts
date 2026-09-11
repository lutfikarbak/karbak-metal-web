import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function getRevealClasses(isVisible: boolean, direction: 'up' | 'down' | 'left' | 'right' = 'up') {
  const baseClasses = 'transition-all duration-700 ease-out';
  
  const directionClasses = {
    up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    down: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12',
    left: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    right: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
  };

  return `${baseClasses} ${directionClasses[direction]}`;
}
