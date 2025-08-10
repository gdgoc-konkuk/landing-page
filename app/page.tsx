import ActivitySection from '@/app/_component/activity/ActivitySection';
import SolutionChallengeSection from '@/app/_component/solution-challenge/SolutionChallengeSection';
import Apply25 from './_component/apply/Apply25';

export default function Home() {
  return (
    <div className="flex flex-col">
      <ActivitySection />
      <SolutionChallengeSection />
      <ActivitySection />
      <Apply25 />
    </div>
  );
}
