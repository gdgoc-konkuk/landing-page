import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-full xl:h-[196px] w-full px-[24px] xl:px-[54px] xl:pb-[76px] xl:pt-[60px] py-[30px]">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="w-full xl:hidden block bg-[#3B3B3B] h-[1px] mb-8"></div>
        <div className="flex flex-col xl:flex-row gap-[13px] xl:gap-[33px]">
          <div className="flex items-start gap-[9px]">
            <Image
              src="/images/header/header-symbol.png"
              alt="footer-symbol"
              width={40}
              height={19}
              className="h-[10px] xl:h-[19px] w-[21px] xl:w-[40px]"
            />
            <div className="flex flex-col">
              <h1 className="font-google text-[10px] xl:text-[20px] leading-none text-[#656C73] text-center">
                Google Developer Student Clubs
              </h1>
              <span className="font-google text-[8px] xl:text-[16px] text-[#656C73] text-center">
                Konkuk University
              </span>
            </div>
          </div>
          <div className="font-suite text-[8px] xl:text-[14px] leading-[10px] xl:leading-[18px] text-[#515151] text-center">
            Designer : Yeowon Kim, Yeonsu Lee
            <br />
            Developer :{' '}
            <Link href="https://github.com/MinboyKim" target="_blank">
              Dongmin Kim
            </Link>
            ,{' '}
            <Link href="https://github.com/clicelee" target="_blank">
              Jimin Lee
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[6px] xl:gap-[15px] mt-[16px] xl:mt-0">
          <Link href="https://www.instagram.com/gdsc.konkuk" target="_blank">
            <Image
              src="/images/footer/instagram.svg"
              alt="instagram"
              width={60}
              height={60}
              className="h-6 xl:h-[60px] w-6 xl:w-[60px]"
            />
          </Link>
          <Link href="https://github.com/gdsc-konkuk" target="_blank">
            <Image
              src="/images/footer/github.svg"
              alt="github"
              width={60}
              height={60}
              className="h-6 xl:h-[60px] w-6 xl:w-[60px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
