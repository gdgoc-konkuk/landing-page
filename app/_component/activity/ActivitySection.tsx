import React from 'react';
import ActivityCard from '@/app/_component/activity/ActivityCard';
import { ACTIVITY_DATA } from '@/config/activity.config';

const ActivitySection = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 sm:px-24 md:px-24 lg:px-36 xl:px-64">
      <div className="text-center mb-16">
        <h1 className="text-google-yellow text-5xl md:text-5xl font-google font-bold tracking-wide">
          Activity
        </h1>
        <p className="text-google-Contents text-base md:text-lg font-robotomono font-regular mt-4 leading-relaxed break-keep">
          GDGoC Konkuk에서 <br className="md:hidden" />
          경험할 수 있는 활동을 소개합니다!
          <br />
          다양한 활동을 통해 함께 성장할 수 있어요.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16 md:gap-20">
        {ACTIVITY_DATA.map((activity, index) => (
          <div
            key={index}
            className="flex-[0_0_calc(33.333%-theme(space.10))] md:flex-[0_0_calc(33.333%-theme(space.20))] max-w-[320px]"
          >
            <ActivityCard
              key={index}
              title={activity.title}
              colors={activity.colors}
              description={activity.description}
              backgroundImage={activity.backgroundImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;


