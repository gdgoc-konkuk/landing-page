import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ApplyButtonProps {
  className?: string;
}

export default function ApplyButton({ className }: ApplyButtonProps) {
  return (
    <Link
      href="https://forms.gle/BNqAuEjTeUagPxgb6"
      className={cn(
        'text-[#000] font-suite xl:text-[28px] font-semibold w-[128px] h-[37px] xl:w-[270px] xl:h-[71px] rounded-[43px] bg-[#FBBC04] flex justify-center items-center',
        className,
      )}
    >
      지원하기
    </Link>
  );
}
