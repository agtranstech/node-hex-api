import winston from 'winston';
import { config } from '../config/config';

const logger = winston.createLogger({
    level: config.logging.level,
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: config.logging.file }),
    ],
});

export { logger };