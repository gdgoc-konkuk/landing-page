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

export const kprintfData: KprintfCardData[] = [
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
    id: '2024-participants',
    title: 'Amazing Participants',
    subtitle: '참여해주신 개발자들',
    description: '함께 성장하는 개발자 커뮤니티',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: '👥',
  },
  {
    id: '2024-sessions',
    title: 'Tech Sessions',
    subtitle: '다양한 기술 세션',
    description: '최신 기술 트렌드와 개발 경험 공유',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    icon: '💡',
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
