import React from 'react';

const images = [
  'https://placehold.co/346x231/a78bfa/ffffff?text=Image+1',
  'https://placehold.co/346x231/f472b6/ffffff?text=Image+2',
  'https://placehold.co/346x231/60a5fa/ffffff?text=Image+3',
  'https://placehold.co/346x231/4ade80/ffffff?text=Image+4',
  'https://placehold.co/346x231/fbbf24/ffffff?text=Image+5',
  'https://placehold.co/346x231/f87171/ffffff?text=Image+6',
  'https://placehold.co/346x231/34d399/ffffff?text=Image+7',
];

const duplicatedImages = [...images, ...images];

const ProjectCarousel = () => {
  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="carousel-track flex animate-carousel">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="w-[346px] aspect-[346/231] flex-shrink-0 rounded-[45px] shadow-lg bg-center bg-cover mx-4"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
