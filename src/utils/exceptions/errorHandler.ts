import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infrastructure/logging/logger';
// import { logger } from '../infrastructure/logging/logger';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
};