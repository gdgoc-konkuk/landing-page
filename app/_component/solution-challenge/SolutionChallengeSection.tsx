import React from 'react';
import ProjectCarousel from '@/app/_component/solution-challenge/ProjectCarousel';
import Podium from '@/app/_component/solution-challenge/Podium';
import { solutionChallengeData } from '@/config/solution.config';

const SolutionChallengeSection = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 gap-12 md:px-20 xl:px-48">
      <div className="text-center">
        <h1 className="text-google-blue text-2xl md:text-5xl font-google font-bold ">
          Solution Challenge
        </h1>
        <p className="text-google-Contents text-sm md:text-lg font-robotomono font-regular mt-4 leading-relaxed break-keep">
          GDGoC Konkuk에서 <br className="md:hidden" />
          세상을 바꾸는 도전을 시작하세요!
          <br />
          뛰어난 커뮤니티 멤버들과 협력하며 글로벌 프로젝트를 경험할 수 있어요.
        </p>
      </div>
      <div className="flex flex-col w-full justify-center">
        <Podium projects={solutionChallengeData} />
        {/* <ProjectCarousel /> */}
      </div>
    </section>
  );
};

export default SolutionChallengeSection;
