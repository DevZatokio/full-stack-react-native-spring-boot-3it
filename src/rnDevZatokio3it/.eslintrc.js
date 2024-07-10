module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        printWidth: 150,
        tabWidth: 2,
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
};
