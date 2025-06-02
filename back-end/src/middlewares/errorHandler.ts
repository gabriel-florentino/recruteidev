// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { logger } from '../shared/utils/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno no servidor',
  });
}
