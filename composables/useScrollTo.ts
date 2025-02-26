import { useMediaQuery } from '@vueuse/core';

export function useScrollTo() {
  return {
    // Scroll to the element with a given id
    scrollTo(id: string) {
      const element = document.getElementById(id);
      if (element) {
        const isMobile = useMediaQuery('(max-width: 768px)');

        const targetOffset = isMobile ? 80 : 120;

        window.scrollTo({
          top: element.offsetTop - targetOffset,
          behavior: 'smooth',
        });
      }
    },
  };
}
