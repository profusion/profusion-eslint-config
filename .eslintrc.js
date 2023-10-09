module.exports = {
  env: {
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'filenames',
    'import',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    // typescript-eslint rules
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    
    // import rules
    'import/extensions': 'off',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['sibling', 'parent', 'internal', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'],
      },
    ],

    // general rules
    'filenames/match-regex': [
      'error',
      '^[a-zA-Z]+(-[a-z]+)*(\\.[a-z]+)?$',
      true,
    ],
    'func-names': [2, 'never'],
    'func-style': [
      2,
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    'global-require': 0,
    'no-process-env': 'error',
    'no-shadow': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-use-before-define': 'off',
    'require-await': ['error'],
    'strict': [0, 'global'],
  }
};
