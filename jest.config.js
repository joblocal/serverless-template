module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/config/jest.js",
  collectCoverageFrom: ["src/**/*.{js}", "!src/**/*.(test|spec).js"],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
  },
};
