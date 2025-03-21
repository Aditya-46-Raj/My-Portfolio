
import { useEffect, useRef, useState } from 'react';

// Hook to animate elements when they enter the viewport
export const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, options]);

  return { ref, isVisible };
};

// Hook to add a blur effect to images while they're loading
export const useImageLoad = () => {
  const [loaded, setLoaded] = useState(false);
  
  const onLoad = () => {
    setLoaded(true);
  };
  
  return { loaded, onLoad, className: `blur-load ${loaded ? 'loaded' : ''}` };
};

// Hook for smooth scroll
export const useSmoothScroll = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return { scrollTo };
};
