const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // setupFilesAfterEnv is an array of module paths that are run before each test file.
    // In this case, '@testing-library/jest-dom/extend-expect' is run before each test file.
    // '@testing-library/jest-dom/extend-expect' extends Jest's expect() with custom matchers from jest-dom.
    // This means you can use matchers like toBeInTheDocument() in your tests.
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}', '!src/components/**/*.{types,stories,constants,test,spec}.{js,jsx,ts,tsx}'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
