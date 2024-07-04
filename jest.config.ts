import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: { url: "https://www.url.com" },
              },
            },
          ],
        },
      },
    ],
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/*main.tsx",
    "!**/*App.tsx",
    "!**/*.stories.tsx",
    "!**/node_modules/**",
    "!<rootDir>/.storybook/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/src/themes/**",
    "!<rootDir>/src/constants/**",
    "!<rootDir>/src/types/**",
    "!<rootDir>/src/pages/**",
    "!<rootDir>/src/layout/**",
    "!<rootDir>/public/**",
    "!**/*.config.ts",
    "!**/*wdyr.ts",
  ],
  coveragePathIgnorePatterns: ["^.*index\\.ts$"],

  clearMocks: true,
};

export default config;
