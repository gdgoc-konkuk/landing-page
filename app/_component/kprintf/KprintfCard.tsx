'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { KprintfCardData } from '../../../config/kprintf.config';

interface KprintfCardProps {
  card: KprintfCardData;
  variants: Variants;
}

const KprintfCard = ({ card, variants }: KprintfCardProps) => {
  return (
    <motion.div
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:cursor-pointer"
      variants={variants}
      whileHover="hover"
    >
      <div
        className={`h-64 ${card.bgColor} flex items-center justify-center relative`}
      >
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        {/* Title overlay */}
        <div className="relative z-10 text-center p-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
            {card.title}
          </h3>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-sm md:text-base lg:text-lg text-google-Contents">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default KprintfCard;
