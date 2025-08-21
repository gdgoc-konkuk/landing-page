import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig).theme.colors.google;

export const ACTIVITY_DATA = [
  {
    title: 'Study',
    colors: {
      topLeft: fullConfig.gray,
      topRight: fullConfig.gray,
      bottomLeft: fullConfig.gray,
      bottomRight: fullConfig.gray,
    },
    description:
      '관심 기술을 <br/>함께 학습하며 <br/>지식을 나누는 <br/>소규모 모임',
    backgroundImage: '/images/activity/activity-study.webp',
  },
  {
    title: 'Tech Talk',
    colors: {
      topLeft: fullConfig.gray,
      topRight: fullConfig.gray,
      bottomLeft: fullConfig.red,
      bottomRight: fullConfig.gray,
    },
    description:
      '개발자들이 <br/>인사이트와 경험을 <br/>공유하고 발표하는 <br/>기술 중심 세미나',
    backgroundImage: '/images/activity/activity-tech-talk.webp',
  },
  {
    title: 'Hands-on',
    colors: {
      topLeft: fullConfig.blue,
      topRight: fullConfig.gray,
      bottomLeft: fullConfig.red,
      bottomRight: fullConfig.gray,
    },
    description: '실습 중심 워크숍으로 <br/>직접 체험해보는 세미나',
    backgroundImage: '/images/activity/activity-hands-on.webp',
  },
  {
    title: 'Networking',
    colors: {
      topLeft: fullConfig.blue,
      topRight: fullConfig.gray,
      bottomLeft: fullConfig.red,
      bottomRight: fullConfig.green,
    },
    description:
      '다양한 배경의 <br/>참가자들과 교류하며 <br/>커뮤니티를 확장하는 시간',
    backgroundImage: '/images/activity/activity-networking.webp',
  },
  {
    title: 'Community',
    colors: {
      topLeft: fullConfig.blue,
      topRight: fullConfig.yellow,
      bottomLeft: fullConfig.red,
      bottomRight: fullConfig.green,
    },
    description:
      '팀워크와 재미를 <br/>동시에 느낄 수 있는 <br/>커뮤니티 중심 이벤트',
    backgroundImage: '/images/activity/activity-community.webp',
  },
];
