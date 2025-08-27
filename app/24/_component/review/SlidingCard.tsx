import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/24/_component/ui/card';
import LeftChevronIcon from '../../../public/icons/left-chevron.svg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/24/_component/ui/carousel';

import reviewCardDanggn from '../../../public/images/review/reviewCardDanggn.webp';
import reviewCardGraduation from '../../../public/images/review/reviewCardGraduation.webp';
import reviewCardRegularSeminar from '../../../public/images/review/reviewCardRegularSeminar.webp';
import reviewCardHanyang from '../../../public/images/review/reviewCardHanyang.webp';
import reviewCardBuildwithAI from '../../../public/images/review/reviewCardBuildwithAI.webp';
import reviewCardFlutter from '../../../public/images/review/reviewCardFlutter.webp';
import reviewCardGDSCGermany from '../../../public/images/review/reviewCardGDSCGermany.webp';
import reviewCardWRTN from '../../../public/images/review/reviewCardWRTN.webp';
import reviewCardKprintf from '../../../public/images/review/reviewCardKprintf.webp';
import reviewCardMTandTrip from '../../../public/images/review/reviewCardMTandTrip.webp';
import { useMediaQuery } from 'react-responsive';

const cards = [
  {
    image: reviewCardDanggn,
    title: '당근 현업 개발자 밋업',
    description:
      '당근 현직 안드로이드 개발자 분들과 만나 취업과 관련해서 궁금한 내용이나 안드로이드 개발 지식에 대해서 이야기를 나눠볼 수 있는 시간을 가질 수 있었어요',
  },
  {
    image: reviewCardGraduation,
    title: '수료식',
    description:
      '일년동안 모든 활동에 적극적으로 참여하고 함께해준 멤버들과 함께 그동안의 추억을 회상하며 마무리할 수 있는 시간을 가질 수 있었어요',
  },
  {
    image: reviewCardRegularSeminar,
    title: '정기세션 - 세미나',
    description:
      '활동 기간 동안 자유로운 주제의 세미나를 통해 각자 자신의 경험을 공유하거나 개발지식을 나눌 수 있었어요. 각 파트장의 강연, 파트원간의 지식 공유, 외부 연사 초청 등 다양한 세미나가 진행되었어요',
  },
  {
    image: reviewCardHanyang,
    title: '한양대학교',
    description:
      'GDSC 한양대 챕터의 멤버들과 커뮤니티 운영방식, 개발 지식 등을 공유하고 다른 챕터 개발자들과의 소중한 인연을 만들 수 있었어요',
  },
  {
    image: reviewCardBuildwithAI,
    title: 'Build with AI',
    description:
      'Google의 GenAI 트렌드와 제품에 대한 기술을 배우고 실제로 적용할 수 있도록 돕는 것을 목표로 행사에 참여하고 운영을 도울 수 있었어요',
  },
  {
    image: reviewCardFlutter,
    title: 'Flutter 핸즈온 랩 세션',
    description:
      '현직 개발자 선배님과 함께하는 Gemma와 Flutter로 나만의 on-device 자비스를 만들기를 진행할 수 있었어요',
  },
  {
    image: reviewCardGDSCGermany,
    title: 'GDSC 독일과의 만남',
    description:
      '독일의 Munich, Mannheim에 속한 GDSC 코어, 리드분들과 커뮤니티 운영방식, 개발 지식 등을 공유하고 다른 챕터 개발자들과의 소중한 인연을 만들 수 있었어요',
  },
  {
    image: reviewCardWRTN,
    title: 'Gen AI Onboarding 행사 with 뤼튼',
    description:
      '뤼튼과 함께 준비한 오픈 세션으로 GPT 잘 쓰는 법부터 현업 개발자와의 만남까지 경험해볼 수 있었어요',
  },
  {
    image: reviewCardKprintf,
    title: 'Kprintf',
    description:
      'GDSC는 최대 규모의 컨퍼런스인 Kprintf를 개최해 컨퍼런스 운영 경험과, 다양한 분야에 대한 세션을 통해 지식을 공유했어요',
  },
  {
    image: reviewCardMTandTrip,
    title: 'MT, 여행',
    description:
      'GDSC 멤버들과 롯데월드, MT 등 소중한 추억을 만들고 즐길 수 있었어요',
  },
];

export default function SlidingCard() {
  const isMobile = useMediaQuery({ query: '(max-width: 1280px)' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
    setShowDescription(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
    setShowDescription(false);
  };

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  if (isMobile) {
    return (
      <div className="relative w-[80%] flex justify-center items-center">
        <Card className=" w-[265px] h-[180px]" onClick={toggleDescription}>
          <CardContent>
            <Image
              src={cards[currentIndex].image}
              alt={`Review Card ${currentIndex + 1}`}
              className="w-full h-[180px] rounded-[22px]"
            />
            {showDescription && (
              <div className="absolute inset-0 flex flex-col text-left justify-between items-start bg-black bg-opacity-60 rounded-[22px]">
                <h3 className="text-white text-[14px] font-semibold font-suite leading-10  mt-[14px] ml-[14px]">
                  {cards[currentIndex].title}
                </h3>
                <p className="text-white text-[10px] font-suite p-[14px]">
                  {cards[currentIndex].description}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-[-40px] transform -translate-y-1/2"
        >
          <Image src={LeftChevronIcon} alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 rotate-180"
        >
          <Image src={LeftChevronIcon} alt="Next" width={24} height={24} />
        </button>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        dragFree: true, //More natural drag-MinboyKim tip
      }}
      className="select-none" //to prevent select text-MinboyKim tip
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            // className="md:basis-1/2 lg:basis-1/3">
            //flex-basis: auto"
            className="basis-auto"
          >
            <div className="p-1">
              <Card className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={card.image}
                    alt={`Review Card ${index + 1}`}
                    className="w-[552px] h-[371px] rounded-[22px] transition-all duration-300 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex flex-col text-left justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-[28px] font-semibold font-suite leading-10 tracking-wide mt-[28px] ml-[34px]">
                      {card.title}
                    </h3>
                    <p className="text-white text-xl font-suite leading-10 p-[34px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
