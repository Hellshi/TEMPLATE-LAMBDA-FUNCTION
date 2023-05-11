export default {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  setupFiles: ["dotenv/config"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
     "json",
     "text",
     "lcov",
     "clover"
   ],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: "50%",
  testEnvironment: "node",
};
