'use client';

import { useIsMobile } from '../../../hooks/useIsMobile';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedWords from './StyledWords';
import {
  applyButtonVariants,
  applyContainerVariants,
  applyTextVariants,
} from '@/app/animations';

const DEFAULT_BLUR_COLOR = '#52a868';
const BLUR_OPACITY = '33';
const BLUR_RADIUS = 600;

const Apply = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blurColor, setBlurColor] = useState(DEFAULT_BLUR_COLOR);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleWordHover = (color: string | null) => {
    setBlurColor(color || DEFAULT_BLUR_COLOR);
  };

  const handleApplyClick = () => {
    window.open('https://forms.gle/FafiUro9V6uw4tgq9', '_blank');
  };

  const backgroundStyle = {
    background: `radial-gradient(${BLUR_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, ${blurColor}${BLUR_OPACITY}, transparent 80%)`,
  };

  return (
    <motion.section
      id="apply"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={applyContainerVariants}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-google-white"
      style={backgroundStyle}
    >
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <motion.h1
          variants={applyTextVariants}
          whileHover={{
            scale: 1.05,
            filter: 'drop-shadow(0px 0px 20px rgba(52, 168, 83, 0.4))',
          }}
          className={`font-bold text-google-green mb-6 break-keep ${
            isMobile ? 'text-3xl' : 'text-5xl'
          }`}
        >
          GDGoC Konkuk
        </motion.h1>

        <div
          className={`mb-16 break-keep ${isMobile ? 'text-base' : 'text-xl'}`}
        >
          <AnimatedWords
            hoverHandler={handleWordHover}
            text="Google Developer Groups on Campus Konkuk 에서 함께 성장해요."
          />
        </div>

        <motion.h2
          variants={applyTextVariants}
          className={`font-bold text-google-Subtitle mb-12 leading-relaxed break-keep font-google ${
            isMobile ? 'text-xl' : 'text-3xl'
          }`}
        >
          함께 배우고, 함께 나누는 25-26기 여정을 시작해보세요.
        </motion.h2>

        <motion.button
          variants={applyTextVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98, rotate: -1 }}
          className={`relative overflow-hidden rounded-full bg-google-green font-bold text-google-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-google-green-darker hover:shadow-2xl ${
            isMobile ? 'px-10 py-4 text-base' : 'px-16 py-5 text-xl'
          }`}
          onClick={handleApplyClick}
        >
          <motion.span
            className="relative z-10 flex items-center justify-center gap-2"
            variants={applyButtonVariants.content}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            지원하기
            <motion.span
              className="inline-block"
              variants={applyButtonVariants.arrow}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </motion.span>

          {/* Shine effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            variants={applyButtonVariants.shine}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Apply;
