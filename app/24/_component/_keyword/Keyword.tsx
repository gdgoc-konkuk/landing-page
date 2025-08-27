'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';
import Dot from './Dot';

import keywordTogether from '../../public/images/keyword/keywordTogether.webp';
import keywordSharing from '../../public/images/keyword/keywordSharing.webp';
import keywordChallenge from '../../public/images/keyword/keywordChallenge.webp';
import mobileTogether from '../../public/images/keyword/mobileTogether.webp';
import mobileSharing from '../../public/images/keyword/mobileSharing.webp';
import mobileChallenge from '../../public/images/keyword/mobileChallenge.webp';
import { StaticImageData } from 'next/image';

interface CardData {
  subtitle: string;
  title: string;
  description: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
}

const cards: CardData[] = [
  {
    image: keywordTogether,
    mobileImage: mobileTogether,
    subtitle: '함께',
    title: 'Together',
    description:
      'GDSC Konkuk에서는 혼자 얻을 수 없는 소중한 가치를 함께 창출할 수 있습니다.',
  },
  {
    image: keywordSharing,
    mobileImage: mobileSharing,
    subtitle: '공유',
    title: 'Sharing',
    description:
      'GDSC Konkuk은 공유를 통해 서로의 지식을 나누고 함께 성장하는 커뮤니티 입니다.',
  },
  {
    image: keywordChallenge,

    mobileImage: mobileChallenge,
    subtitle: '도전',
    title: 'Challenge',
    description: 'GDSC Konkuk에서 열정을 가지고 도전하며 발전할 수 있습니다.',
  },
];

const Keyword: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const textColor = ['#ea4335', '#33b540', '#fbbc04'];
  if (isMobile) {
    return (
      <div className="flex  xl:h-screen h-[1200px] w-screen justify-center items-center mt-[169.02px] xl:w-[80%]">
        <div className="flex flex-col ">
          {cards.map((card, index) => (
            <div key={index}>
              {/* subtitle 색상을 activeIndex에 맞춰 변경 */}
              <div
                className="text-[14px] font-suite mt-[50px]"
                style={{ color: textColor[index % textColor.length] }}
              >
                {card.subtitle}
              </div>
              <div className="text-5xl font-bold mt-[4px] relative">
                {card.title}
              </div>
              <div className="flex flex-row justify-center items-center space-x-[16px] mt-[17px] ">
                <div className="h-[255px] w-[2px] bg-[#AFAFAF] mx-auto rounded-full "></div>
                <div>
                  <img
                    src={card.mobileImage.src}
                    alt={card.subtitle}
                    className="w-[280px] h-[194px] mt-[17px]"
                  />
                  <div className="w-[270px] h-[48px] text-[#606060] text-[14px] font-normal font-suite mt-[20px]">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const smallCircle = ['bg-[#ea4335]', 'bg-[#33b540]', 'bg-[#fbbc04]'];
  const bigCircleColor = [
    'bg-[rgba(234,67,53,0.4)]', // color opacity 40%
    'bg-[rgba(51,181,64,0.4)]',
    'bg-[rgba(251,188,4,0.4)]',
  ];

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex items-center">
        <div className="space-y-[40px] relative">
          {cards.map((_, index) => (
            <React.Fragment key={index}>
              <Dot
                smallCircle={
                  activeIndex === index ? smallCircle[index] : 'bg-[#A1A1A1]'
                } // dark gray color for small Circle
                bigCircleColor={
                  activeIndex === index ? bigCircleColor[index] : 'bg-[#D9D9D9]'
                } // light gray color for big Circle
                onHover={() => setActiveIndex(index)}
                onLeave={() => { }}
              />
              {index < cards.length - 1 && (
                <div className="h-[173px] w-[1px] bg-[#6C6C6C] mx-auto rounded-full"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="ml-[41px] hidden xl:block">
          <Card card={cards[activeIndex]} index={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default Keyword;
