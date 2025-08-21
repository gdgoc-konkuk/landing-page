import React from 'react';
import { aboutData } from '@/config/about.config';
import AboutCard from './AboutCard';

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12">
      <div className="text-center">
        <h1 className="text-google-green text-2xl md:text-5xl font-google font-bold ">
          GDGoC Konkuk
        </h1>
        <p className="text-google-Contents text-sm md:text-lg font-robotomono font-regular mt-4 leading-relaxed break-keep">
          GDGoC Konkuk는 협업, 공유, 도전의 기회를 제공합니다!
          <br />
          함께 성장하는 커뮤니티를 지향합니다.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-center items-center w-full">
        {aboutData.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
