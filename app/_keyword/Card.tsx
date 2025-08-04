import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  card: {
    subtitle: string;
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number; 
}

const Card: React.FC<CardProps> = ({ card,index }) => {
  const textColor = ['#ea4335', '#33b540', '#fbbc04'];
  const [opacity, setOpacity] = useState(1);
  const [currentCard, setCurrentCard] = useState(card);

  useEffect(() => {
    if (card !== currentCard) {
      setOpacity(0);
      const timer = setTimeout(() => {
        setCurrentCard(card);
        setOpacity(1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [card, currentCard]);
  return (
    <div
      className="flex items-center transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="flex-col">
      <div 
          className={`text-[22px] font-semibold font-suite leading-9`} 
          style={{ color: textColor[index % textColor.length] }} 
        >
          {currentCard.subtitle}
        </div>
        <h2 className="text-5xl font-bold mt-[12px] relative">
          {currentCard.title}
        </h2>
        <div className="w-[306px] h-[120px] text-[#606060] text-[28px] font-normal font-suite leading-10 mt-[23.12px]">
          {currentCard.description}
        </div>
      </div>
      <Image
        src={currentCard.image}
        alt={currentCard.title}
        className="w-[714px] h-[574.12px] relative ml-[102px]"
      />
    </div>
  );
};

export default Card;
