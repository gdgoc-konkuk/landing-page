'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ActivityIcon from '@/app/_component/activity/ActivityIcon';

interface ActivityCardProps {
  title: string;
  colors: IconColors;
  description: string;
  backgroundImage: string;
}

function ActivityCard({
  title,
  colors,
  description,
  backgroundImage,
}: ActivityCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="group w-[195px] h-[208px] md:w-[300px] md:h-[320px] perspective-1000 cursor-pointer"
      onClick={handleFlip}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center gap-4 md:gap-12 p-12 bg-white rounded-[25px] shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ActivityIcon colors={colors} />
          <div className="self-stretch text-center justify-start text-google-Title text-lg md:text-3xl font-google tracking-tight">
            {title}
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[25px] shadow-xl isolate overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center rounded-[25px]"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />

          <div
            className={`absolute inset-0 w-full h-full bg-[#686868] rounded-[25px] transition-opacity duration-500 ${
              isFlipped ? 'opacity-70' : 'opacity-0'
            }`}
          />

          <motion.div
            className="relative z-10 p-7 md:p-9 flex flex-col justify-start items-start h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-white text-lg md:text-2xl font-semibold font-opensans leading-8 md:leading-10 break-keep">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ActivityCard;
