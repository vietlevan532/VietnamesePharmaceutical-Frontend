module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope' : 0,
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    'jsx-a11y/label-has-associated-control': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }]
  },
}
