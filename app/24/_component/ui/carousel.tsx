'use client'; // Next.js의 서버-클라이언트 렌더링 구분을 위해 사용

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'; // embla-carousel-react에서 필요한 모듈과 타입을 임포트
import { ArrowLeft, ArrowRight } from 'lucide-react'; // 화살표 아이콘 임포트

import { cn } from '@/lib/utils'; // 클래스 이름을 조합하는 유틸리티 함수 임포트
import { Button } from '@/app/24/_component/ui/button'; // 버튼 컴포넌트 임포트

type CarouselApi = UseEmblaCarouselType[1]; // Embla Carousel API 타입 정의
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>; // useEmblaCarousel의 파라미터 타입 정의
type CarouselOptions = UseCarouselParameters[0]; // Carousel 옵션 타입 정의
type CarouselPlugin = UseCarouselParameters[1]; // Carousel 플러그인 타입 정의

type CarouselProps = {
  opts?: CarouselOptions; // Carousel 옵션
  plugins?: CarouselPlugin; // Carousel 플러그인
  orientation?: 'horizontal' | 'vertical'; // Carousel 방향 설정
  setApi?: (api: CarouselApi) => void; // Carousel API를 설정하는 콜백 함수
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]; // Carousel의 참조 요소
  api: ReturnType<typeof useEmblaCarousel>[1]; // Carousel API
  scrollPrev: () => void; // 이전 슬라이드로 스크롤하는 함수
  scrollNext: () => void; // 다음 슬라이드로 스크롤하는 함수
  canScrollPrev: boolean; // 이전 슬라이드로 스크롤 가능한지 여부
  canScrollNext: boolean; // 다음 슬라이드로 스크롤 가능한지 여부
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null); // Carousel Context 생성

export function useCarousel() {
  const context = React.useContext(CarouselContext); // Carousel Context를 사용

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />'); // Carousel Context가 없으면 에러 발생
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal', // 기본 방향은 horizontal
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y', // orientation에 따라 axis 설정
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false); // 이전 슬라이드로 스크롤 가능한지 여부 상태
    const [canScrollNext, setCanScrollNext] = React.useState(false); // 다음 슬라이드로 스크롤 가능한지 여부 상태

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev()); // 이전 슬라이드로 스크롤 가능한지 상태 업데이트
      setCanScrollNext(api.canScrollNext()); // 다음 슬라이드로 스크롤 가능한지 상태 업데이트
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev(); // 이전 슬라이드로 스크롤
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext(); // 다음 슬라이드로 스크롤
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev(); // 왼쪽 화살표 키로 이전 슬라이드로 스크롤
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext(); // 오른쪽 화살표 키로 다음 슬라이드로 스크롤
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api); // Carousel API 설정
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api); // Carousel 선택 이벤트 설정
      api.on('reInit', onSelect); // 재초기화 이벤트 설정
      api.on('select', onSelect); // 선택 이벤트 설정

      return () => {
        api?.off('select', onSelect); // 이벤트 클린업
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown} // 키 다운 이벤트 캡처
          className={cn('relative', className)} // 클래스 이름 설정
          role="region" // 역할은 region
          aria-roledescription="carousel" // 역할 설명은 carousel
          {...props}
        >
          {children} {/* Carousel의 자식 요소들 */}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel'; // 컴포넌트 이름 설정

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel(); // Carousel Context에서 carouselRef와 orientation 가져오기

  return (
    <div ref={carouselRef} className="overflow-x-auto scrollbar-hide">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', // 방향에 따른 클래스 설정
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent'; // 컴포넌트 이름 설정

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel(); // Carousel Context에서 orientation 가져오기

  return (
    <div
      ref={ref}
      role="group" // 역할은 group
      aria-roledescription="slide" // 역할 설명은 slide
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full', // 슬라이드 스타일 설정
        orientation === 'horizontal' ? 'pl-4' : 'pt-4', // 방향에 따른 스타일 설정
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem'; // 컴포넌트 이름 설정

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel(); // Carousel Context에서 필요한 값들 가져오기

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute  h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90', // 방향에 따른 위치 설정
        className,
      )}
      disabled={!canScrollPrev} // 이전 슬라이드로 스크롤 가능 여부에 따른 비활성화 설정
      onClick={scrollPrev} // 이전 슬라이드로 스크롤
      {...props}
    >
      <ArrowLeft className="h-4 w-4" /> {/* 왼쪽 화살표 아이콘 */}
      <span className="sr-only">Previous slide</span>{' '}
      {/* 스크린 리더 전용 텍스트 */}
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious'; // 컴포넌트 이름 설정

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel(); // Carousel Context에서 필요한 값들 가져오기

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90', // 방향에 따른 위치 설정
        className,
      )}
      disabled={!canScrollNext} // 다음 슬라이드로 스크롤 가능 여부에 따른 비활성화 설정
      onClick={scrollNext} // 다음 슬라이드로 스크롤
      {...props}
    >
      <ArrowRight className="h-4 w-4" /> {/* 오른쪽 화살표 아이콘 */}
      <span className="sr-only">Next slide</span>{' '}
      {/* 스크린 리더 전용 텍스트 */}
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext'; // 컴포넌트 이름 설정

export {
  type CarouselApi, // Carousel API 타입 익스포트
  Carousel, // Carousel 컴포넌트 익스포트
  CarouselContent, // CarouselContent 컴포넌트 익스포트
  CarouselItem, // CarouselItem 컴포넌트 익스포트
  CarouselPrevious, // CarouselPrevious 컴포넌트 익스포트
  CarouselNext, // CarouselNext 컴포넌트 익스포트
};
