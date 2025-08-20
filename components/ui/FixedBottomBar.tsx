'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FixedBottomBarProps {
  targetDate: string;
}

const FixedBottomBar = ({ targetDate }: FixedBottomBarProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkApplyComponentVisibility = () => {
      const applyElement = document.querySelector('#apply');
      const rect = applyElement!.getBoundingClientRect();
      const isApplyVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisible(!isApplyVisible);
    };

    checkApplyComponentVisibility();

    window.addEventListener('scroll', checkApplyComponentVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', checkApplyComponentVisibility);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]}
        {interval === 'days' && '일 '}
        {interval === 'hours' && '시간 '}
        {interval === 'minutes' && '분 '}
        {interval === 'seconds' && '초'}
      </span>,
    );
  });

  const handleApplyClick = () => {
    window.open('https://forms.gle/FafiUro9V6uw4tgq9', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-200 px-3 py-2 flex justify-between items-center lg:max-w-2xl lg:rounded-full lg:shadow-2xl lg:border-transparent pointer-events-auto lg:mb-5 lg:px-6 lg:py-3"
        >
          <div className="flex items-center">
            {timerComponents.length > 0 ? (
              <span className="text-sm text-google-yellow lg:text-lg font-semibold whitespace-nowrap">
                25-26 멤버 지원하기
              </span>
            ) : (
              <span className="text-sm text-google-green lg:text-lg font-semibold whitespace-nowrap">
                다음 기수에서 만나요👋
              </span>
            )}
            <span className="ml-2 text-xs lg:text-base font-light">
              {timerComponents.length ? timerComponents : null}
            </span>
          </div>
          <button
            onClick={handleApplyClick}
            className="relative overflow-hidden rounded-full bg-google-green text-white font-bold shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl px-4 py-2 text-sm lg:px-8 lg:py-3 lg:text-base disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:shadow-lg"
            disabled={!timerComponents.length}
          >
            지원하기
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedBottomBar;
