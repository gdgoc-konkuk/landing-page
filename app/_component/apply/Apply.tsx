'use client';
import { useIsMobile } from '../../../hooks/useIsMobile';

export default function Apply() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Header */}
        <h1
          className={`font-bold text-[#34A853] mb-6 break-keep ${
            isMobile ? 'text-3xl' : 'text-5xl'
          }`}
        >
          GDGoC Konkuk
        </h1>

        {/* Subtitle */}
        <p
          className={`text-gray-600 mb-16 break-keep ${
            isMobile ? 'text-base' : 'text-xl'
          }`}
        >
          Google Developer Groups on Campus Konkuk에서 함께 성장해요.
        </p>

        {/* Main Message */}
        <h2
          className={`font-bold text-gray-800 mb-12 leading-relaxed break-keep ${
            isMobile ? 'text-xl' : 'text-3xl'
          }`}
        >
          함께 배우고, 함께 나누는 25-26기 여정을 시작해보세요.
        </h2>

        {/* CTA Button */}
        <button
          className={`bg-[#34A853] text-white font-bold rounded-full transition-all duration-300 hover:bg-[#6AB583] hover:scale-105 hover:shadow-xl shadow-lg ${
            isMobile ? 'px-10 py-4 text-base' : 'px-16 py-5 text-xl'
          }`}
        >
          지원하기
        </button>
      </div>
    </section>
  );
}
