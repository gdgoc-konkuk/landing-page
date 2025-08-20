import React from 'react';
import { aboutData } from '@/config/about.config';
import AboutCard from './AboutCard';

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12">
      <div className="text-center">
        <h1 className="text-google-green text-2xl md:text-5xl font-google font-bold tracking-wide">
          GDGoC Konkuk
        </h1>
        <p className="text-google-Contents text-sm md:text-lg font-robotomono font-regular mt-4 leading-relaxed break-keep">
          GDGoC Konkuk에서 경험할 수 있는 활동을 소개합니다!
          <br />
          다양한 활동을 통해 함께 성장할 수 있어요.
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
