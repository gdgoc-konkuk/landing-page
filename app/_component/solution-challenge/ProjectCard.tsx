import Image from 'next/image';

export default function ProjectCard({
  imageUrl,
  title,
  description,
}: SolutionChallengeData) {
  return (
    <div className="w-full mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
      <div className="relative w-full h-32 md:h-48">
        <Image
          src={imageUrl}
          alt={`${title} project image`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 33vw, 192px"
        />
      </div>
      <div className="p-2 sm:p-3 md:p-5">
        <h3 className="text-sm md:text-xl font-semibold text-black tracking-tight truncate">
          {title}
        </h3>
        <p className="mt-1 text-xs md:text-base text-gray-600 tracking-tight line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
