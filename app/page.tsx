import ActivitySection from '@/app/_component/activity/ActivitySection';
import SolutionChallengeSection from '@/app/_component/solution-challenge/SolutionChallengeSection';
import Apply from './_component/apply/Apply';

export default function Home() {
  return (
    <div className="flex flex-col">
      <ActivitySection />
      <SolutionChallengeSection />
      <ActivitySection />
      <Apply />
    </div>
  );
}
