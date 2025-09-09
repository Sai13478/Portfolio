import { useEffect, useState } from 'react';

const useScrollspy = (sectionIds: string[], offset: number = 150): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && 
              scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollspy;
    