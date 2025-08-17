import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const cardData = [
    {
      title: 'Together',
      image: '/images/keyword/mobileTogether.webp',
      description: 'GDGoC Konkuk에서는 혼자 얻을 수 없는 소중한 가치를 함께 창출할 수 있습니다.'
    },
    {
      title: 'Sharing',
      image: '/images/keyword/mobileSharing.webp',
      description: 'GDGoC Konkuk은 공유를 통해 서로의 지식을 나누고 함께 성장하는 커뮤니티입니다.'
    },
    {
      title: 'Challenge',
      image: '/images/keyword/mobileChallenge.webp',
      description: 'GDGoC Konkuk에서 열정을 가지고 도전하며 발전할 수 있습니다.'
    }
  ];

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
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-8 md:gap-0">
        {cardData.map((card, index) => {
          const colors = ['#ea4335', '#f9ab00', '#34a853']; // Google red, yellow, green
          const borderColor = colors[index];
          
          return (
            <div
              key={index}
              className="group relative w-80 h-80 px-6 py-6 bg-white rounded-[10px] shadow-[inset_0px_-1px_8px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-4 cursor-pointer transition-all duration-300"
            >
              {/* Shimmer border effect */}
              <div 
                className="absolute inset-0 rounded-[10px] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `conic-gradient(from 0deg, ${borderColor}, transparent, ${borderColor}, transparent, ${borderColor})`
                }}
              >
                <div className="w-full h-full bg-white rounded-[8px]" />
              </div>
              
              {/* Animated gradient border */}
              <div 
                className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"
                style={{
                  background: `linear-gradient(45deg, ${borderColor}40, transparent, ${borderColor}80, transparent, ${borderColor}40)`,
                  backgroundSize: '300% 300%'
                }}
              />
              
              {/* Card content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-start items-center gap-4"
              >
                <div className="text-black text-3xl font-bold font-['Pretendard'] flex-shrink-0">
                  {card.title}
                </div>
                <div className="w-64 h-40 relative flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-google-Contents text-sm font-['Pretendard'] text-center leading-relaxed break-keep flex-1 flex items-center">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;