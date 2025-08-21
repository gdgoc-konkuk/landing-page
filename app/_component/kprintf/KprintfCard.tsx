'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { KprintfCardData } from '../../../config/kprintf.config';

interface KprintfCardProps {
  card: KprintfCardData;
  variants: Variants;
}

const KprintfCard = ({ card, variants }: KprintfCardProps) => {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg"
      variants={variants}
      whileHover="hover"
    >
      <div className={`h-64 ${card.bgColor} flex items-center justify-center`}>
        <div className="text-center">
          {card.icon && (
            <div className="text-2xl md:text-3xl lg:text-4xl mb-2">
              {card.icon}
            </div>
          )}
          <h3
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 ${card.textColor || 'text-gray-800'}`}
          >
            {card.title}
          </h3>
          {card.subtitle && (
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              {card.subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
          {card.subtitle || card.title}
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-google-Contents">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default KprintfCard;
