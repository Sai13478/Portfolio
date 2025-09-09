import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      // Use object literal instead of Typed.Options
      const options = {
        strings: ["Frontend Developer", "Software Developer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      };

      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return <span ref={el} />;
};

export default TypedText;
