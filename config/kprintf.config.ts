export interface KprintfCardData {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  image: string;
}

export const kprintfData: KprintfCardData[] = [
  {
    id: '1',
    title: 'Kprintf 2024',
    description: '건국대학교에서 개최된 첫 번째 테크 컨퍼런스',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    image: '/images/kprintf/kprintf1.webp',
  },
  {
    id: '2',
    title: 'Kprintf 2025',
    description: '200여명의 학생 개발자들이 함께한 뜻깊은 시간',
    bgColor: 'bg-green-100',
    textColor: 'text-gray-800',
    image: '/images/kprintf/kprintf2.webp',
  },
  {
    id: '3',
    title: '다양한 기술 세션',
    description: '최신 기술 트렌드와 개발 경험 공유',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    image: '/images/kprintf/kprintf3.webp',
  },
  {
    id: '4',
    title: '연사자분들과 커피챗 기회',
    description: '선배 개발자와의 네트워킹 기회',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    image: '/images/kprintf/kprintf4.webp',
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
