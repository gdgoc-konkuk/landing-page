'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WaveBackground from '../WaveBackground';
import WaterDropCursor from '../WaterDropCursor';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

interface HomeSectionProps {
  children?: React.ReactNode;
}

const HomeSection = ({ children }: HomeSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      <WaterDropCursor />
      <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 xl:p-20">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row items-center justify-center mb-8 w-full max-w-6xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 md:mb-0 md:mr-8 lg:mr-12 flex-shrink-0"
          >
            <Image
              src="/images/main/GDG_logo.webp"
              alt="GDGoC Konkuk University Logo"
              width={180}
              height={80}
              priority
            />
          </motion.div>
          <div className="flex flex-col text-center md:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-google text-gray-800 leading-tight"
              variants={itemVariants}
            >
              Google Developer Groups
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-google text-google-green mt-1 md:mt-2"
              variants={itemVariants}
            >
              Konkuk University
            </motion.h2>
          </div>
        </motion.div>
      </div>
      {children && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          {children}
        </div>
      )}
    </section>
  );
};

export default HomeSection;
