'use client';

import { useIsMobile } from '../../../hooks/useIsMobile';
import { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Apply() {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Effect to trigger animations when the component is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-google-white"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl px-6 text-center">
        {/* Header */}
        <motion.h1
          variants={itemVariants}
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

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`text-google-Contents mb-16 break-keep ${
            isMobile ? 'text-base' : 'text-xl'
          }`}
        >
          Google Developer Groups on Campus Konkuk에서 함께 성장해요.
        </motion.p>

        {/* Main Message */}
        <motion.h2
          variants={itemVariants}
          className={`font-bold text-google-Subtitle mb-12 leading-relaxed break-keep ${
            isMobile ? 'text-xl' : 'text-3xl'
          }`}
        >
          함께 배우고, 함께 나누는 25-26기 여정을 시작해보세요.
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{
            boxShadow: '0 8px 25px rgba(52, 168, 83, 0.25)',
          }}
          whileTap={{
            scale: 0.98,
            rotate: -1,
          }}
          className={`relative overflow-hidden rounded-full bg-google-green font-bold text-google-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-google-green300 ${
            isMobile ? 'px-10 py-4 text-base' : 'px-16 py-5 text-xl'
          }`}
        >
          <motion.span
            className="relative z-10 flex items-center justify-center gap-2"
            whileHover={{
              x: 3,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            지원하기
            <motion.span
              whileHover={{
                x: 5,
                rotate: 15,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 10,
              }}
            >
              →
            </motion.span>
          </motion.span>

          {/* Subtle shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </motion.section>
  );
}
