import { config } from "../../infrastructure/config/config";

describe('Config', () => {
    it('should load development configuration', () => {
        expect(config.server.env).toBe('development');
        expect(config.db.database).toBe('your_database');
    });

    it('should load test configuration when NODE_ENV is test', () => {
        process.env.NODE_ENV = 'test';
        process.env.DB_DATABASE_TEST = 'your_database_test';

        // Reload the config to reflect the new environment variables
        const testConfig = require('../../src/infrastructure/config/config').config;

        expect(testConfig.server.env).toBe('test');
        expect(testConfig.db.database).toBe('your_database_test');
    });
});