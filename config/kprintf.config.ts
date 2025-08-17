export interface KprintfCardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bgColor: string;
  textColor?: string;
  image?: string;
  icon?: string;
}

export interface KprintfYearData {
  year: number;
  cards: KprintfCardData[];
}

export const kprintfData: KprintfYearData[] = [
  {
    year: 2025,
    cards: [
      {
        id: '2025-main',
        title: 'Kprintf2025',
        subtitle: 'A Developer Conference by GDSC Korea',
        description: '더 큰 규모로 준비되는 2025년 컨퍼런스',
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-800',
      },
      {
        id: '2025-speakers',
        title: 'Speaker Introduction',
        subtitle: 'Amazing Speakers',
        description: '업계 최고의 전문가들과 만나보세요',
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
      },
    ],
  },
  {
    year: 2024,
    cards: [
      {
        id: '2024-main',
        title: 'K-printf',
        subtitle: 'K-printf 2024',
        description: '성공적으로 개최된 첫 번째 컨퍼런스',
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
      },
      {
        id: '2024-success',
        title: 'Great Success',
        subtitle: '성공적인 개최',
        description: '많은 개발자들이 함께한 뜻깊은 시간',
        bgColor: 'bg-green-100',
        textColor: 'text-gray-800',
        icon: '🎯',
      },
      {
        id: '2024-success',
        title: 'Great Success',
        subtitle: '성공적인 개최',
        description: '많은 개발자들이 함께한 뜻깊은 시간',
        bgColor: 'bg-green-100',
        textColor: 'text-gray-800',
        icon: '🎯',
      },
      {
        id: '2024-success',
        title: 'Great Success',
        subtitle: '성공적인 개최',
        description: '많은 개발자들이 함께한 뜻깊은 시간',
        bgColor: 'bg-green-100',
        textColor: 'text-gray-800',
        icon: '🎯',
      },
    ],
  },
];

export const heroConfig = {
  title: 'K-printf',
  description: [
    'GDGoC Konkuk에서 주최하는 Kprintf를 소개합니다!',
    '수 많은 세션과 활동을 통해 개발자들이 함께 성장할 수 있는 기회를 제공합니다.',
  ],
  image: '',
};
