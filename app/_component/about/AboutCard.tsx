'use client';

import React from 'react';
import Image from 'next/image';

interface AboutCardProps {
  title: string;
  image: string;
  description: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  image,
  description,
  index,
}) => {
  const colors = ['#ea4335', '#f9ab00', '#34a853']; // Google red, yellow, green
  const borderColor = colors[index];

  return (
    <div
      className="group relative w-80 h-80 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.95) 100%)`,
      }}
    >
      {/* Hover border effect */}
      <div
        className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, ${borderColor}, ${borderColor}80, ${borderColor})`,
        }}
      >
        <div
          className="w-full h-full rounded-[14px]"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.95) 100%)`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 w-full h-full flex flex-col p-6">
        {/* Title */}
        <div className="text-black text-2xl md:text-3xl font-google tracking-tight mb-4 text-center">
          {title}
        </div>

        {/* Image */}
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden shadow-md">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Description */}
        <p className="text-google-Contents text-sm font-pretendard text-center leading-relaxed break-keep flex-1 flex items-center justify-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
