import Image from 'next/image';

export default function Header() {
  return (
    <header className="hidden xl:block absolute top-0 left-0 h-[66px] w-full pb-[18px] pl-[54px] pt-[19px]">
      <div className="flex items-center">
        <Image
          src="/images/header/header-symbol.png"
          alt="header-symbol"
          width={45}
          height={21}
          className="h-[21px] w-[45px]"
        />
        <h1 className="ml-[12px] mr-[8px] font-google text-[23px] font-bold leading-normal">
          GDSC
        </h1>
        <span className="text-[16px] text-[#7C7C7C]">Konkuk Univ.</span>
      </div>
    </header>
  );
}
