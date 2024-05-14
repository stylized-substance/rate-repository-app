/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,
  
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  
  // A map from regular expressions to paths to transformers
  transform: {"^.+\\.jsx?$": "babel-jest"},
  
  //preset: "jest-expo",
  preset: "react-native",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-router-native)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],
  //"globals": { "__DEV__": true }
};

module.exports = config;
