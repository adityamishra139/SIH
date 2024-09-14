// src/components/Typewriter.js
import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, displayText, speed]);

  return <div>{displayText}</div>;
};

export default Typewriter;
