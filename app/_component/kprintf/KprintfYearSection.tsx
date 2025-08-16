'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { KprintfYearData } from '../../../config/kprintf.config';
import KprintfCarousel from './KprintfCarousel';

interface KprintfYearSectionProps {
  yearData: KprintfYearData;
  itemVariants: Variants;
  cardVariants: Variants;
}

const KprintfYearSection = ({
  yearData,
  itemVariants,
  cardVariants,
}: KprintfYearSectionProps) => {
  return (
    <motion.div className="mb-5 py-10" variants={itemVariants}>
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold text-google-red">{yearData.year}</h2>
      </div>

      <KprintfCarousel
        cards={yearData.cards}
        options={{ align: 'start', loop: true }}
        cardVariants={cardVariants}
      />
    </motion.div>
  );
};

export default KprintfYearSection;
