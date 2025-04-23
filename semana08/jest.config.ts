import nextJest from 'next/jest.js'
import type {Config} from 'jest';



const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
 
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{test,spec}.{ts,tsx}'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

export default createJestConfig(config);
