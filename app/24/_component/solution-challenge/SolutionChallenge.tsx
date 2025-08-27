'use client';

import { useInView } from 'react-intersection-observer';
import SolutionCard from '@/app/24/_component/solution-challenge/SolutionCard';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/24/_component/ui/carousel';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useCarousel } from '@/app/24/_component/ui/carousel';
import Image from 'next/image';

const solutionData = [
  {
    title: 'PathPal',
    description: [
      'PathPal은 시각장애인의 안전하고',
      '독립적인 보행을 보장해, 그들의',
      '이동권과 사회적 편의를 제공합니다.',
    ],
    imageSrc: '/images/solution/pathpal.webp',
    link: 'https://github.com/GDSC-PathPal',
    className: 'z-50',
  },
  {
    title: 'Glow Alarm',
    description: [
      'Glow Alarm은 청각 장애인에게',
      '불리한 상황을 개선하고자',
      '개발된 시각 경보 시스템입니다.',
    ],
    imageSrc: '/images/solution/glowalarm.webp',
    link: 'https://github.com/sound-light',
    className: 'z-40 translate-y-[71px]',
  },
];

export default function SolutionChallenge() {
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
  });
  const [animation, setAnimation] = useState('');

  const isMobile = useIsMobile();

  const handleAnimation = (inView: boolean) => {
    inView
      ? setAnimation('animate-blow-up')
      : setAnimation('animate-blow-down');
  };

  useEffect(() => {
    handleAnimation(inView);
  }, [inView]);

  if (isMobile) {
    return (
      <div className="xl:h-screen h-[800px] w-screen bg-[#F3F5F7] flex justify-center items-center px-[24px]">
        <div className="flex flex-col w-full h-full justify-center">
          <h1 className="font-gangwon text-[21px] tracking-[1px] text-center">
            SOLUTION Challenge
            <br />
            TOP 100
          </h1>
          <Carousel
            opts={{
              loop: true,
            }}
            className="mt-[31px]"
          >
            <CarouselContent>
              <CarouselItem>
                <SolutionCard
                  title={solutionData[0].title}
                  description={solutionData[0].description}
                  imageSrc={solutionData[0].imageSrc}
                  link={solutionData[0].link}
                  isMobile
                />
              </CarouselItem>
              <CarouselItem>
                <SolutionCard
                  title={solutionData[1].title}
                  description={solutionData[1].description}
                  imageSrc={solutionData[1].imageSrc}
                  link={solutionData[1].link}
                  isMobile
                />
              </CarouselItem>
            </CarouselContent>
            <PreviousButton />
            <NextButton />
          </Carousel>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[1080px] w-screen items-start justify-center bg-[#F3F5F7] relative">
      <div className="flex flex-col items-center">
        <h1 className="mt-[157px] font-gangwon text-[54px] tracking-[1px]">
          SOLUTION Challenge TOP 100
        </h1>
        <div className="mt-[70px]">
          <SolutionCard
            title={solutionData[0].title}
            description={solutionData[0].description}
            imageSrc={solutionData[0].imageSrc}
            link={solutionData[0].link}
            className={`${solutionData[0].className} ${animation}`}
          />
          <SolutionCard
            title={solutionData[1].title}
            description={solutionData[1].description}
            imageSrc={solutionData[1].imageSrc}
            link={solutionData[1].link}
            className={solutionData[1].className}
          />
        </div>
      </div>
      <div
        className="opacity-0 absolute -bottom-0 w-[1px] h-[90px] bg-red-500"
        ref={inViewRef}
      ></div>
    </div>
  );
}

function PreviousButton() {
  const { scrollPrev } = useCarousel();
  return (
    <Image
      src="/icons/left-chevron.svg"
      alt="left-chevron"
      width={24}
      height={24}
      onClick={scrollPrev}
      className="absolute top-[175px] left-0"
    />
  );
}

function NextButton() {
  const { scrollNext } = useCarousel();
  return (
    <Image
      src="/icons/left-chevron.svg"
      alt="right-chevron"
      width={24}
      height={24}
      onClick={scrollNext}
      className="absolute top-[175px] right-0 transform rotate-180"
    />
  );
}
