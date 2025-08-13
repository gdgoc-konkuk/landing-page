import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config'

const fullConfig = resolveConfig(tailwindConfig);

export const ACTIVITY_DATA = [
  {
    title: 'Study',
    colors: {
      topLeft: fullConfig.theme.colors.google.gray,
      topRight: fullConfig.theme.colors.google.gray,
      bottomLeft: fullConfig.theme.colors.google.gray,
      bottomRight: fullConfig.theme.colors.google.gray,
    },
    description:
      '관심 기술을 <br/>함께 학습하며 <br/>지식을 나누는 <br/>소규모 모임',
    backgroundImage: '/images/activity/activity-study.jpg',
  },
  {
    title: 'Tech Talk',
    colors: {
      topLeft: fullConfig.theme.colors.google.gray,
      topRight: fullConfig.theme.colors.google.gray,
      bottomLeft: fullConfig.theme.colors.google.red,
      bottomRight: fullConfig.theme.colors.google.gray,
    },
    description:
      '개발자들이 <br/>인사이트와 경험을 <br/>공유하고 발표하는 <br/>기술 중심 세미나',
    backgroundImage: '/images/activity/activity-teck-talk.jpg',
  },
  {
    title: 'Hands-on',
    colors: {
      topLeft: fullConfig.theme.colors.google.blue,
      topRight: fullConfig.theme.colors.google.gray,
      bottomLeft: fullConfig.theme.colors.google.red,
      bottomRight: fullConfig.theme.colors.google.gray,
    },
    description: '실습 중심 워크숍으로 <br/>직접 체험해보는 세미나',
    backgroundImage: '/images/activity/activity-hands-on.jpg',
  },
  {
    title: 'Networking',
    colors: {
      topLeft: fullConfig.theme.colors.google.blue,
      topRight: fullConfig.theme.colors.google.gray,
      bottomLeft: fullConfig.theme.colors.google.red,
      bottomRight: fullConfig.theme.colors.google.green,
    },
    description:
      '다양한 배경의 <br/>참가자들과 교류하며 <br/>커뮤니티를 확장하는 시간',
    backgroundImage: '/images/activity/activity-networking.jpg',
  },
  {
    title: 'Community',
    colors: {
      topLeft: fullConfig.theme.colors.google.blue,
      topRight: fullConfig.theme.colors.google.yellow,
      bottomLeft: fullConfig.theme.colors.google.red,
      bottomRight: fullConfig.theme.colors.google.green,
    },
    description:
      '팀워크와 재미를 <br/>동시에 느낄 수 있는 <br/>커뮤니티 중심 이벤트',
    backgroundImage: '/images/activity/activity-community.jpg',
  },
];