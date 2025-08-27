import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  imageUrl,
  title,
  description,
  githubUrl,
}: SolutionChallengeData) => {
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
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm md:text-xl font-semibold text-black tracking-tight truncate flex-1">
            {title}
          </h3>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            <Image
              src="/images/footer/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </Link>
        </div>
        <p className="mt-1 text-xs md:text-base text-gray-600 tracking-tight line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
