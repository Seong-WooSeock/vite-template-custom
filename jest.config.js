module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
