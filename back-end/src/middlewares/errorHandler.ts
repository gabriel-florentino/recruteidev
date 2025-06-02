import { Request, Response, NextFunction } from 'express';
import { logger } from '../shared/utils/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  logger.error(err);

  if (err.message === 'CORS não autorizado') {
    res.status(403).json({ error: err.message });
    return;
  }

  const statusCode = typeof err.status === 'number' ? err.status : 500;
  const message = err.message || 'Erro interno no servidor';

  res.status(statusCode).json({ error: message });
}
