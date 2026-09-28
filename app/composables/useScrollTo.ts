import { useMediaQuery, usePreferredReducedMotion } from '@vueuse/core';

export function useScrollTo() {
  const preferredMotion = usePreferredReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return {
    // Scroll to the element with a given id
    scrollTo(id: string) {
      const element = document.getElementById(id);
      if (element) {
        const targetOffset = isMobile.value ? 72 : 88;

        window.scrollTo({
          top: element.offsetTop - targetOffset,
          behavior: preferredMotion.value === 'reduce' ? 'auto' : 'smooth',
        });
      }
    },
  };
}
