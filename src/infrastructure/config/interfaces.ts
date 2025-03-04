export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    dialect: string;
}

export interface LoggingConfig {
    level: string;
    file: string;
}

export interface ServerConfig {
    port: number;
    env: string;
}

export interface ConfigInterface {
    db: DatabaseConfig;
    logging: LoggingConfig;
    server: ServerConfig;
}