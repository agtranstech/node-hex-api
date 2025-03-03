import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { tenantRoutes } from './interfaces/routes/tenantRoutes';
import { logger } from './infrastructure/logging/logger';
import { errorHandler } from './utils/exceptions/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

// Register tenant routes
app.use('/api', tenantRoutes);

// Error handling middleware
app.use(errorHandler);

export { app };