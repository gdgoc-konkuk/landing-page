'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import pmCard from '../../../public/images/apply/pmCard.webp';
import designerCard from '../../../public/images/apply/designerCard.webp';
import developerCard from '../../../public/images/apply/developerCard.webp';
import mobileCard from '../../../public/images/apply/mobileCard.webp';
import 'animate.css'; //bounce animations library

export default function Popup() {
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1280); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (popupRef.current) {
      observer.observe(popupRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (popupRef.current) {
        observer.unobserve(popupRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex justify-center w-[382.05px] h-[278.69px] relative">
        <Image src={mobileCard} alt="Mobile Card" className="" />
      </div>
    );
  }

  return (

    <div
      className="flex flex-col items-center justify-center text-center"
      ref={popupRef}
    >
      <div
        className={`w-[1380px] h-[700px] overflow-hidden relative ${animate ? 'animate__animated animate__bounceInUp' : 'translate-y-0'}`}
        style={{
          animationDuration: '1s',
          animationTimingFunction: 'ease-in-out',
          animationDelay: '0.1s',
        }}
      >
        <Image
          src={pmCard}
          alt="PM Card"
          className="absolute top-0 left-[5%] w-[360px] h-[439px]"
        />
        <Image
          src={designerCard}
          alt="Designer Card"
          className="absolute left-[15%] right-[30%] w-[429px] h-[470px] z-10"
        />
        <Image
          src={developerCard}
          alt="Developer Card"
          className="absolute top-0 right-0 w-[385px] h-[452px]"
        />
      </div>
    </div>
  );
}
