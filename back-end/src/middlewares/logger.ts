// src/middlewares/logger.ts
import pinoHttp from 'pino-http';
import { logger } from '../shared/utils/logger';

export const httpLogger = pinoHttp({ logger });
