import Image from 'next/image';
import React from 'react';

const PodiumStand = ({ rankText, isTopThree, className }: PodiumStandProps) => {
  const containerClasses = `w-full mx-auto flex flex-col justify-center items-center bg-white p-1 ${className}`;

  return (
    <div className={containerClasses}>
      {isTopThree ? (
        <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <Image
              src="/icons/glyph.svg"
              alt="Top 3 Crown"
              fill
              sizes="(max-width: 640px) 15px, 48px"
            />
          </div>
          <span
            className="text-xl md:text-3xl font-bold  text-white"
            style={{ textShadow: '0px 2px 15px #F49600' }}
          >
            {rankText}
          </span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl">
          <span className="text-lg md:text-3xl font-bold text-black tracking-tight">
            {rankText}
          </span>
        </div>
      )}
    </div>
  );
};

export default PodiumStand;
