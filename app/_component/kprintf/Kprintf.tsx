'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { heroConfig } from '../../../config/kprintf.config';
import KprintfHero from './KprintfHero';
import KprintfCarousel from './carousel/KprintfCarousel';
import { containerVariants } from '@/app/animations';

const Kprintf = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <KprintfHero
        title={heroConfig.title}
        description={heroConfig.description}
        image={heroConfig?.image}
      />

      {/* Timeline Section */}
      <motion.section
        className="py-15 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={containerVariants}
      >
        <KprintfCarousel />
      </motion.section>
    </div>
  );
};

export default Kprintf;
