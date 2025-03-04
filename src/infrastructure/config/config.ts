import * as dotenv from 'dotenv';
import path from 'path';
import {
    ConfigInterface,
    DatabaseConfig,
    LoggingConfig,
    ServerConfig,
} from './interfaces';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

class Config implements ConfigInterface {
    private static instance: Config;

    public readonly db: DatabaseConfig;
    public readonly logging: LoggingConfig;
    public readonly server: ServerConfig;

    private constructor() {
        // Validate and load environment variables
        this.db = {
            host: this.getEnvVariable('DB_HOST'),
            port: parseInt(this.getEnvVariable('DB_PORT'), 10),
            username: this.getEnvVariable('DB_USERNAME'),
            password: this.getEnvVariable('DB_PASSWORD'),
            database: this.getEnvVariable(
                process.env.NODE_ENV === 'test' ? 'DB_DATABASE_TEST' : 'DB_DATABASE'
            ),
            dialect: "postgres",
        };

        this.logging = {
            level: this.getEnvVariable('LOG_LEVEL'),
            file: this.getEnvVariable('LOG_FILE'),
        };

        this.server = {
            port: parseInt(this.getEnvVariable('PORT'), 10),
            env: this.getEnvVariable('NODE_ENV'),
        };
    }

    /**
     * Get the value of an environment variable.
     * Throws an error if the variable is not defined.
     */
    private getEnvVariable(name: string): string {
        const value = process.env[name];
        if (value === undefined) {
            throw new Error(`Environment variable ${name} is not defined.`);
        }
        return value;
    }

    /**
     * Get the singleton instance of the Config class.
     */
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}

// Export the singleton instance of the Config class
export const config = Config.getInstance();