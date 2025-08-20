'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, Variants } from 'framer-motion';
import { KprintfCardData } from '../../../config/kprintf.config';
import KprintfCard from './KprintfCard';

interface KprintfCarouselProps {
  cards: KprintfCardData[];
  options?: EmblaOptionsType;
  cardVariants: Variants;
}

const KprintfCarousel = ({
  cards,
  options,
  cardVariants,
}: KprintfCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="py-8 flex">
          {cards.map((card) => (
            <div
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-4"
              key={card.id}
            >
              <motion.div
                className="h-full mr-4"
                variants={cardVariants}
                whileHover="hover"
              >
                <KprintfCard card={card} variants={cardVariants} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex
                  ? 'bg-red-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default KprintfCarousel;
