/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
module.exports = {
    moduleFileExtensions: [
      "js",
      "json",
      "ts"
    ],
    rootDir: "",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    collectCoverageFrom: [
      "**/*.(t|j)s"
    ],
    collectCoverageFrom: ["src/**/*.ts"],
    coveragePathIgnorePatterns: ["test-data"],
    coverageReporters: ['lcov'],
    coverageDirectory: "coverage",
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
  };