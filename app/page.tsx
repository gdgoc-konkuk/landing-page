import ActivitySection from "@/app/_component/activity/ActivitySection";
import SolutionChallengeSection from '@/app/_component/solution-challenge/SolutionChallengeSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <ActivitySection />    
      <SolutionChallengeSection />
    </div>
  );
}