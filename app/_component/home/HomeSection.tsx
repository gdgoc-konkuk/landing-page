import React from 'react';
import Image from 'next/image';
import WaveBackground from '../WaveBackground';
import WaterDropCursor from '../WaterDropCursor';

interface HomeSectionProps {
  children?: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({ children }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      <WaterDropCursor />
      <div className="relative z-10 flex items-center justify-center p-12 md:p-28 lg:p-40">
        <Image
          src="/images/GDGoC_Konkuk_logo.png"
          alt="GDGoC Konkuk University Logo"
          width={1457}
          height={288}
          priority
        />
      </div>
      {children && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          {children}
        </div>
      )}
    </section>
  );
};

export default HomeSection;