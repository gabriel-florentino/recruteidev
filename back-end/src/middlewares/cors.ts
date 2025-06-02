import { Request, Response, NextFunction } from 'express';

import { env } from '../config/env';

const whitelist = env.CORS_WHITELIST;

export const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin;

  if (origin && whitelist.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    if (req.method === 'OPTIONS') {
      res.sendStatus(204);  // envia a resposta
      return;              // retorna void (sem valor)
    }

    next();
    return;  // retorna void
  }

  if (!origin) {
    next();
    return;  // retorna void
  }

  res.status(403).json({ error: 'CORS não autorizado' });
  return;  // retorna void
};

