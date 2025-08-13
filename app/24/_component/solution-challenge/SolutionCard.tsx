import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionCardProps {
  title: string;
  description: string[];
  imageSrc: string;
  link: string;
  className?: string;
  isMobile?: boolean;
}

export default function SolutionCard({
  title,
  description,
  imageSrc,
  link,
  className,
  isMobile,
}: SolutionCardProps) {
  if (isMobile) {
    return (
      <Card className="flex h-full w-full justify-center">
        <CardContent className="h-[413px] flex justify-center items-center">
          <div className="flex h-[351px] w-[265px] flex-col items-center justify-center gap-5 rounded-[9px] bg-white p-6 px-4 py-6 shadow-lg">
            <h1 className="self-start font-gangwon text-[20px] tracking-[1px]">
              {title}
            </h1>
            <Image
              src={imageSrc}
              alt="pathpal"
              width={229}
              height={140}
              className="h-[140px] w-[229px] object-cover"
            />
            <p className="w-[229px] font-suite text-[13px] leading-[25px]">
              {description.join(' ')}
            </p>
            <p className="self-start font-suite text-[14px] text-black font-semibold">
              <Link href={link}>{'-> '}자세히보기</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div
      className={cn(
        'w-[1194px] h-[581px] bg-white rounded-[22px] flex gap-[70px] justify-center items-center shadow-xl absolute -translate-x-1/2',
        className,
      )}
    >
      <div className="flex flex-col">
        <h1 className="font-gangwon text-[48px] tracking-[1px]">{title}</h1>
        <div className="mt-[23px] font-suite text-[22px] text-[#606060]">
          {description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
        <p className="mt-[66px] font-suite text-[20px]">
          <Link href={link}>{'-> '}자세히보기</Link>
        </p>
      </div>
      <div className="relative h-[442px] w-[715px]">
        <Image
          fill
          src={imageSrc}
          alt="pathpal"
          className="rounded-[24px] border-[2px] border-[#E4E4E4] object-cover"
        />
      </div>
    </div>
  );
}
