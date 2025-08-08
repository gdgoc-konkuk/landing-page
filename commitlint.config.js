const config = {
  parserPreset: {
    parserOpts: {
      // 커스텀 파싱 패턴: [type]: description
      headerPattern: /^\[(\w+)\]: (.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 기능
        'ui', // 화면 디자인
        'refactor', // 기능 변경은 없이, 코드만 수정
        'fix', // 기능 문제 수정, 버그나 오류 수정
        'chore', // 주석, 들여쓰기
        'docs', // 문서작업, Readme, CI(workflow)
        'init', // 프로젝트 기초 세팅
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'header-min-length': [2, 'always', 10],
  },
};

export default config;
