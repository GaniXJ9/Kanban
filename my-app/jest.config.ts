import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
};

export default config;
