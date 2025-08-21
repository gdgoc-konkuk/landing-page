import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

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

// Get resolved Tailwind config
const fullConfig = resolveConfig(tailwindConfig);
const googleColors = fullConfig.theme.colors.google;

// Simple word to color mapping
const WORD_COLORS = {
  Google: googleColors.blue,
  Developer: googleColors.red,
  Groups: googleColors.yellow,
  Campus: googleColors.green,
  Konkuk: googleColors.green,
} as const;

const getWordColor = (word: string) => {
  // Check if word matches any key (case-insensitive)
  const matchedKey = Object.keys(WORD_COLORS).find((key) =>
    word.toLowerCase().includes(key.toLowerCase()),
  );

  return matchedKey
    ? WORD_COLORS[matchedKey as keyof typeof WORD_COLORS]
    : googleColors.Subtitle;
};

interface AnimatedWordsProps {
  text: string;
  hoverHandler: (color: string | null) => void;
}

const AnimatedWords = ({ text, hoverHandler }: AnimatedWordsProps) => {
  const words = text.split(' ');

  const handleWordHover = (word: string) => {
    const color = getWordColor(word);
    const isDefaultColor = color === googleColors.Subtitle;
    // Only pass color if it's not the default subtitle color
    hoverHandler(isDefaultColor ? null : color);
  };

  return (
    <motion.div variants={ITEM_VARIANTS} className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2 font-semibold font-google"
          style={{ color: getWordColor(word) }}
          whileHover={HOVER_ANIMATION}
          onMouseEnter={() => handleWordHover(word)}
          onMouseLeave={() => hoverHandler(null)}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
