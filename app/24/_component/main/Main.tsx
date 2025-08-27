import ApplyButton from '@/app/24/_component/ui/ApplyButton';
import Logo from './Logo';
import LogoImage from '../../../public/images/main/main-logo.webp';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="text-nowrap xl:h-screen h-[850px] w-screen flex justify-center items-center">
      <div className="flex flex-col xl:flex-row xl:w-[80%] w-full">
        <Image
          src={LogoImage}
          alt="logo"
          width={575}
          height={295}
          className="xl:hidden mb-[106px]"
          unoptimized
        />
        <div className="flex flex-col flex-1 px-[24px] xl:px-0 w-full items-center xl:items-start">
          <div>
            <div className="flex flex-col w-[300px]">
              <h1 className="text-[#000] text-[45px] xl:text-[96px] font-bold leading-[55px] xl:leading-[120px]">
                GDSC
              </h1>
              <h1 className="text-[#C7C7C7] text-[45px] xl:text-[96px] font-bold leading-[55px] xl:leading-[120px]">
                Konkuk univ.
              </h1>
            </div>
            <p className="mt-[17px] xl:mt-[30px] text-[#3E3E3E] font-suite text-[16px] xl:text-[32px] font-light leading-[19px] xl:leading-10">
              Google Developer
              <br />
              Student club on Konkuk
            </p>
            <ApplyButton className="mt-[23px] xl:mt-[56px]" />
          </div>
        </div>
        <div className="hidden flex-1 xl:flex mt-[160px] ml-[50px]">
          <Logo />
        </div>
      </div>
    </div>
  );
}
