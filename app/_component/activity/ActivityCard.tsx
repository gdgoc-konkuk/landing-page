'use client';

import React, { useState } from 'react';
import ActivityIcon from '@/app/_component/activity/ActivityIcon';

interface ActivityCardProps {
  title: string;
  colors: IconColors;
  description: string;
  backgroundImage: string;
}

function ActivityCard ({
  title,
  colors,
  description,
  backgroundImage,
} : ActivityCardProps ) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-[300px] h-[320px] perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >

        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center gap-12 p-12 bg-white rounded-[25px] shadow-[0px_2px_2px_1px_rgba(0,0,0,0.25)]">
          <ActivityIcon colors={colors} />
          <div className="self-stretch text-center justify-start text-google-Title text-3xl font-google tracking-tight">
            {title}
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[25px] shadow-[0px_4px_40px_0px_rgba(251,188,4,0.73)] isolate">
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

          <div className="relative z-10 p-9 flex flex-col justify-start items-start">
            <div className="text-white text-2xl font-semibold font-opensans leading-10 break-keep">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;