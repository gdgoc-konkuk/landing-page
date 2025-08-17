'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { kprintfData, heroConfig } from '../../../config/kprintf.config';
import KprintfHero from './KprintfHero';
import KprintfYearSection from './KprintfYearSection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
} as const;

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 1,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
} as const;

const Kprintf = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <KprintfHero
        title={heroConfig.title}
        description={heroConfig.description}
        image={heroConfig?.image}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Timeline Section */}
      <motion.section
        className="py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={timelineVariants}
      >
        <div className="max-w-6xl mx-auto">
          {kprintfData.map((yearData) => (
            <KprintfYearSection
              key={yearData.year}
              yearData={yearData}
              itemVariants={itemVariants}
              cardVariants={cardVariants}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Kprintf;
