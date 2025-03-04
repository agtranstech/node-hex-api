module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'], // Match test files in the `tests` directory
    collectCoverage: true, // Enable code coverage
    coverageDirectory: 'coverage', // Output directory for coverage reports
    coverageReporters: ['text', 'lcov'], // Generate text and lcov reports
    setupFilesAfterEnv: ['./src/tests/setup.ts'], // Run setup file before tests
};