import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  moduleNameMapper: {
    '^axios$': '<rootDir>/node_modules/axios',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
