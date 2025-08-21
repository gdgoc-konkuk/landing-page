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
    id: '1',
    title: 'Kprintf 2024',
    subtitle: 'Kprintf 2024',
    description: '건국대학교에서 개최된 첫 번째 테크 컨퍼런스',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: '2',
    title: 'Great Success',
    subtitle: 'Kprintf 2025',
    description: '200여명의 학생 개발자들이 함께한 뜻깊은 시간',
    bgColor: 'bg-green-100',
    textColor: 'text-gray-800',
    icon: '🎯',
  },
  {
    id: '3',
    title: 'Amazing Participants',
    subtitle: '다양한 기술 세션',
    description: '최신 기술 트렌드와 개발 경험 공유',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: '👥',
  },
  {
    id: '4',
    title: 'Tech Sessions',
    subtitle: '연사자분들과 커피챗 기회',
    description: '선배 개발자와의 네트워킹 기회',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    icon: '💡',
  },
];

export const heroConfig = {
  title: 'Kprintf',
  description: [
    'GDGoC Konkuk에서 주최하는 Kprintf를 소개합니다!',
    '건국대학교의 대표적인 개발자 컨퍼런스로 자리매김한 연례 행사예요.',
  ],
  image: '',
};
