import ProjectCard from '@/app/_component/solution-challenge/ProjectCard';
import PodiumStand from '@/app/_component/solution-challenge/PodiumStand';

interface PodiumProps {
  projects: solutionChallengeData[];
};

export default function Podium({ projects }: PodiumProps) {
  const [second, first, third] = projects;

  return (
    <div className="w-full py-4 md:py-8">
      <div className="container mx-auto px-1 md:px-4">
        {/* Desktop */}
        <div className="hidden md:flex flex-row items-end justify-center gap-1 md:gap-2">
          <div className="w-1/3 flex flex-col gap-4">
            <ProjectCard {...second} />
            <PodiumStand
              rankText="TOP 100"
              isTopThree={false}
              className="h-20 md:h-32 rounded-bl-2xl shadow-lg"
            />
          </div>

          <div className="w-1/3 flex flex-col">
            <div className="transform -translate-y-3 md:-translate-y-6">
              <ProjectCard {...first} />
              <PodiumStand
                rankText="TOP 3"
                isTopThree={true}
                className="h-28 md:h-48 mt-4 rounded-t-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-4">
            <ProjectCard {...third} />
            <PodiumStand
              rankText="TOP 100"
              isTopThree={false}
              className="h-20 md:h-32 rounded-br-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center md:hidden gap-4">
          <div className="w-1/2 max-w-sm">
            <ProjectCard {...first} />
            <PodiumStand
              rankText="TOP 3"
              isTopThree={true}
              className="h-24 mt-2 rounded-b-2xl shadow-2xl"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-row justify-center gap-2">
              <div className="w-1/2">
                <ProjectCard {...second} />
              </div>
              <div className="w-1/2">
                <ProjectCard {...third} />
              </div>
            </div>
            <PodiumStand
              rankText="TOP 100"
              isTopThree={false}
              className="h-20 mt-2 mx-auto rounded-b-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
