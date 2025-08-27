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
import { KprintfCardData, kprintfData } from '@/config/kprintf.config';
import KprintfCard from '../KprintfCard';

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

const KprintfCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <motion.div className="mb-5 py-10" variants={itemVariants}>
      <section className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="py-8 flex">
            {kprintfData.map((card) => (
              <div
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-4"
                key={card.id}
              >
                <div className="h-full mr-4">
                  <KprintfCard card={card} />
                </div>
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
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default KprintfCarousel;
