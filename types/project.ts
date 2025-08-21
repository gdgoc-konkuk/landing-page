type SolutionChallengeData = {
  rank: number;
  rankText: string;
  isTopThree: boolean;
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
};

type PodiumStandProps = {
  rankText: string;
  isTopThree: boolean;
  className?: string;
};
