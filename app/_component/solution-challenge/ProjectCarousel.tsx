import { solutionChallengeImages } from '@/config/solution.config';
import React from 'react';

// dummy duplicated images
const duplicatedImages = [
  ...solutionChallengeImages,
  ...solutionChallengeImages,
];

const ProjectCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex animate-carousel w-max">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="w-40 md:w-64 aspect-[346/231] flex-shrink-0 rounded-[25px] shadow-lg bg-center bg-cover mx-4"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
