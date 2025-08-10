'use client';
import styles from './Apply25.module.css';
import { useIsMobile } from '../../../hooks/useIsMobile';

export default function Apply25() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        {/* Left Large Blob */}
        <div
          className={`absolute left-0 top-0 w-[400px] h-[600px] opacity-90 ${styles['animate-wave-slow']}`}
          style={{
            background: '#81C995',
            borderRadius: '50% 30% 40% 60% / 60% 40% 30% 50%',
            transform: 'translate(-150px, -100px) rotate(-15deg)',
          }}
        />

        {/* Right Large Blob */}
        <div
          className={`absolute right-0 bottom-0 w-[500px] h-[700px] opacity-90 ${styles['animate-wave-reverse']}`}
          style={{
            background: '#81C995',
            borderRadius: '40% 60% 30% 50% / 50% 30% 60% 40%',
            transform: 'translate(200px, 150px) rotate(20deg)',
          }}
        />

        {/* Additional smaller organic blobs for depth */}
        {!isMobile && (
          <>
            <div
              className={`absolute top-1/4 left-1/3 w-[150px] h-[200px] opacity-60 ${styles['animate-wave-medium']}`}
              style={{
                background: 'linear-gradient(135deg, #81C995, #6AB583)',
                borderRadius: '60% 40% 30% 70% / 40% 50% 60% 30%',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              className={`absolute bottom-1/3 right-1/4 w-[120px] h-[160px] opacity-50 ${styles['animate-wave-fast']}`}
              style={{
                background: 'linear-gradient(225deg, #81C995, #94D1A7)',
                borderRadius: '30% 70% 50% 40% / 60% 30% 40% 70%',
                transform: 'rotate(-30deg)',
              }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Header */}
        <h1
          className={`font-bold text-[#34A853] mb-6 ${
            isMobile ? 'text-3xl' : 'text-5xl'
          }`}
        >
          GDGoC Konkuk
        </h1>

        {/* Subtitle */}
        <p
          className={`text-gray-600 mb-16 ${styles['word-break-keep-all']} ${
            isMobile ? 'text-base' : 'text-xl'
          }`}
        >
          Google Developer Groups on Campus Konkuk에서 함께 성장해요.
        </p>

        {/* Main Message */}
        <h2
          className={`font-bold text-gray-800 mb-12 leading-relaxed ${styles['word-break-keep-all']} ${
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
