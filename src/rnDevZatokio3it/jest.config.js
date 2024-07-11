module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect', // Extiende expect de testing-library para React Native
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Transforma archivos JS/JSX usando Babel
    '\\.(ts|tsx)$': 'ts-jest', // Transforma archivos TypeScript usando ts-jest
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Patrón de búsqueda para archivos de prueba
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensiones de archivos que Jest debe reconocer
};