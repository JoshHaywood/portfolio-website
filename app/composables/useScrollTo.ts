import { useMediaQuery, usePreferredReducedMotion } from '@vueuse/core';

export function useScrollTo() {
  const preferredMotion = usePreferredReducedMotion();

  return {
    // Scroll to the element with a given id
    scrollTo(id: string) {
      const element = document.getElementById(id);
      if (element) {
        const isMobile = useMediaQuery('(max-width: 768px)');

        const targetOffset = isMobile.value ? 80 : 120;

        window.scrollTo({
          top: element.offsetTop - targetOffset,
          behavior: preferredMotion.value === 'reduce' ? 'auto' : 'smooth',
        });
      }
    },
  };
}
