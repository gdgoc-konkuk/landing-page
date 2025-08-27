'use client';

import React from 'react';
import SlidingCard from './SlidingCard';
import { useMediaQuery } from 'react-responsive';

export default function Review({ }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1280px)' });

  if (isMobile) {
    // 모바일 화면용 레이아웃
    return (
      <div className="xl:h-screen h-[650px] w-screen flex flex-col justify-center items-center ">
        <div className="w-[80%] flex justify-center text-center items-center">
          <div>
            <div className="text-[#EA4335] text-[30px] font-normal font-gangwon">
              <span className="tracking-wide">REVIE</span>
              <span className="tracking-wider">W</span>
            </div>
            <div className="text-[#606060] text-[15px] mt-[16px] font-normal font-suite ">
              <p>GDSC Konkuk에서 경험할 수 있는 활동을 소개합니다!</p>
              <p>다양한 활동을 통해 함께 성장할 수 있어요.</p>
            </div>
            <div className="flex justify-center text-center items-center mt-[50px]">
              <SlidingCard />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen min-h-[850px] w-screen flex justify-center items-center">
      <div className="w-[80%}] text-center">
        <div>
          <div>
            <div className="text-[#EA4335] text-[64px] font-normal font-gangwon">
              <span className="tracking-wide">REVIE</span>
              <span className="tracking-wider">W</span>
            </div>
            <div className="text-[#606060] text-[28px] mt-[16px] font-normal font-suite leading-10">
              <p>GDSC Konkuk에서 경험할 수 있는 활동을 소개합니다!</p>
              <p>다양한 활동을 통해 함께 성장할 수 있어요.</p>
            </div>
            <div className="mt-[135px]">
              <SlidingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}