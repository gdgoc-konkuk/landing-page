import ActivitySection from '@/app/_component/activity/ActivitySection';
import SolutionChallengeSection from '@/app/_component/solution-challenge/SolutionChallengeSection';
import Apply from './_component/apply/Apply';
import Kprintf from './_component/kprintf/Kprintf';

import HomeSection from './_component/home/HomeSection';
import AboutSection from './_component/about/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-72">
      <HomeSection />
      <AboutSection />

      <ActivitySection />
      <SolutionChallengeSection />
      <Kprintf />
      <Apply />
    </div>
  );
}
