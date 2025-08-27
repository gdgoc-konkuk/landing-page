'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { containerVariants, itemVariants } from '@/app/animations';

interface KprintfHeroProps {
  title: string;
  description: string[];
  image?: string;
}

const KprintfHero = ({ title, description, image }: KprintfHeroProps) => {
  return (
    <motion.section
      className=" flex flex-col items-center justify-center px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-google-red text-2xl md:text-5xl font-google font-bold ">
            {title}
          </span>
        </motion.h1>

        <motion.p
          className="text-google-Contents font-robotomono text-base md:text-lg  font-regular mt-4 leading-relaxed break-keep"
          variants={itemVariants}
        >
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.p>

        {image && (
          <motion.div
            className="w-full max-w-lg mx-auto"
            variants={itemVariants}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default KprintfHero;
