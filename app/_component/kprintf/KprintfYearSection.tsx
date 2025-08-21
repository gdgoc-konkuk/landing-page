'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { KprintfCardData } from '../../../config/kprintf.config';
import KprintfCarousel from './KprintfCarousel';

interface KprintfYearSectionProps {
  cardData: KprintfCardData[];
  itemVariants: Variants;
  cardVariants: Variants;
}

const KprintfYearSection = ({
  cardData,
  itemVariants,
  cardVariants,
}: KprintfYearSectionProps) => {
  return (
    <motion.div className="mb-5 py-10" variants={itemVariants}>
      <KprintfCarousel
        cards={cardData}
        options={{ align: 'start', loop: true }}
        cardVariants={cardVariants}
      />
    </motion.div>
  );
};

export default KprintfYearSection;
