const config = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'ui', // UI or style changes
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'fix', // A bug fix
        'chore', // Changes to the build process or auxiliary tools and libraries
        'docs', // Documentation only changes (e.g., README, CI workflow)
        'init', // Initial project setup
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
