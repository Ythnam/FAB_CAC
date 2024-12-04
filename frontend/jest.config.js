module.exports = {
    preset: 'jest-preset-angular',
    verbose: false,
    silent: true,
    roots: ['<rootDir>/src/'],
    moduleFileExtensions: ['ts', 'js', 'html'],
    modulePaths: ['<rootDir>'],
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    setupFilesAfterEnv: [
      "<rootDir>/setup-jest.ts",
    ],
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)'],
    clearMocks: true,
  }