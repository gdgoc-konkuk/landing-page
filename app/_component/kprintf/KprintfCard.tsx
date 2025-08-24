'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { KprintfCardData } from '../../../config/kprintf.config';

const cardVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
} as const;

interface KprintfCardProps {
  card: KprintfCardData;
}

const KprintfCard = ({ card }: KprintfCardProps) => {
  return (
    <motion.div
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:cursor-pointer"
      variants={cardVariants}
      whileHover="hover"
    >
      <div
        className={`h-64 ${card.bgColor} flex items-center justify-center relative`}
      >
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            loading="eager"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
          {card.title}
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-google-Contents">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default KprintfCard;
