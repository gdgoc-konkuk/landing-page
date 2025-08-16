import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// Animation configurations
const HOVER_ANIMATION = {
  y: -2,
  scale: 1.05,
  transition: { type: 'spring' as const, stiffness: 300, damping: 10 },
};

const ITEM_VARIANTS: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

// Google brand colors mapping
const GOOGLE_COLORS = {
  Google: '#4285f4',
  Developer: '#ea4335',
  Groups: '#fbbc05',
  Campus: '#34a853',
  Konkuk: '#34a853',
} as const;

const DEFAULT_COLOR = '#3b3b3b';

const getWordColor = (word: string): string => {
  for (const [key, color] of Object.entries(GOOGLE_COLORS)) {
    if (word.includes(key)) {
      return color;
    }
  }

  return DEFAULT_COLOR;
};

const isGoogleColor = (color: string): boolean => {
  return color !== DEFAULT_COLOR;
};

interface AnimatedWordsProps {
  text: string;
}

const AnimatedWords = ({ text }: AnimatedWordsProps) => {
  const words = text.split(' ');
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  // Emit color change event for parent component
  useEffect(() => {
    const customEvent = new CustomEvent('wordHover', { detail: hoveredColor });
    window.dispatchEvent(customEvent);
  }, [hoveredColor]);

  const handleWordHover = (word: string) => {
    const color = getWordColor(word);
    setHoveredColor(isGoogleColor(color) ? color : null);
  };

  return (
    <motion.div variants={ITEM_VARIANTS} className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            color: getWordColor(word),
            display: 'inline-block',
            marginRight: '0.5rem',
          }}
          whileHover={HOVER_ANIMATION}
          onMouseEnter={() => handleWordHover(word)}
          onMouseLeave={() => setHoveredColor(null)}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
