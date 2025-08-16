interface ApplyKeywordsProps {
  isMobile: boolean;
}

export default function ApplyKeywords({ isMobile }: ApplyKeywordsProps) {  return (
    <div
      className={`relative overflow-hidden font-bold ${
        isMobile
          ? 'h-[36px] w-[107px] px-[2px] py-[1px] text-[18px]'
          : 'h-[80px] w-[236px] px-5 py-[6px] text-[50px]'
      }`}
    >
      <div
        className={`absolute inset-0 flex h-full w-full animate-slide-4 items-center justify-center ${
          isMobile ? 'rounded-[12px]' : 'rounded-[24px]'
        } bg-[#4285F4]`}
      >
        도전하기
      </div>
      <div
        className={`absolute inset-0 flex h-full w-full animate-slide-2 items-center justify-center ${
          isMobile ? 'rounded-[12px]' : 'rounded-[24px]'
        } bg-[#34A853]`}
      >
        함께하기
      </div>
      <div
        className={`absolute inset-0 flex h-full w-full animate-slide-0 items-center justify-center ${
          isMobile ? 'rounded-[12px]' : 'rounded-[24px]'
        } bg-[#FBBC04]`}
      >
        성장하기
      </div>
    </div>
  );
}
