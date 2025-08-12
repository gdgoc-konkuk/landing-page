// tailwind.config.ts에 정의한 색상 값을 변수로 관리
export const G_COLORS = {
  BLUE: '#4285f4',
  RED: '#ea4335',
  YELLOW: '#f9ab00',
  GREEN: '#34a853',
  GRAY: '#f1f3f4',
};

export const ACTIVITY_DATA = [
  {
    title: 'Study',
    colors: {
      topLeft: G_COLORS.GRAY,
      topRight: G_COLORS.GRAY,
      bottomLeft: G_COLORS.GRAY,
      bottomRight: G_COLORS.GRAY,
    },
    description:
      '관심 기술을 <br/>함께 학습하며 <br/>지식을 나누는 <br/>소규모 모임',
    backgroundImage: '/images/activity/activity-study.jpg',
  },
  {
    title: 'Tech Talk',
    colors: {
      topLeft: G_COLORS.GRAY,
      topRight: G_COLORS.GRAY,
      bottomLeft: G_COLORS.RED,
      bottomRight: G_COLORS.GRAY,
    },
    description:
      '개발자들이 <br/>인사이트와 경험을 <br/>공유하고 발표하는 <br/>기술 중심 세미나',
    backgroundImage: '/images/activity/activity-teck-talk.jpg',
  },
  {
    title: 'Hands-on',
    colors: {
      topLeft: G_COLORS.BLUE,
      topRight: G_COLORS.GRAY,
      bottomLeft: G_COLORS.RED,
      bottomRight: G_COLORS.GRAY,
    },
    description: '실습 중심 워크숍으로 <br/>직접 체험해보는 세미나',
    backgroundImage: '/images/activity/activity-hands-on.jpg',
  },
  {
    title: 'Networking',
    colors: {
      topLeft: G_COLORS.BLUE,
      topRight: G_COLORS.GRAY,
      bottomLeft: G_COLORS.RED,
      bottomRight: G_COLORS.GREEN,
    },
    description:
      '다양한 배경의 <br/>참가자들과 교류하며 <br/>커뮤니티를 확장하는 시간',
    backgroundImage: '/images/activity/activity-networking.jpg',
  },
  {
    title: 'Community',
    colors: {
      topLeft: G_COLORS.BLUE,
      topRight: G_COLORS.YELLOW,
      bottomLeft: G_COLORS.RED,
      bottomRight: G_COLORS.GREEN,
    },
    description:
      '팀워크와 재미를 <br/>동시에 느낄 수 있는 <br/>커뮤니티 중심 이벤트',
    backgroundImage: '/images/activity/activity-community.jpg',
  },
];