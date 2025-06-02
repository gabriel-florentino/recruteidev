import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { httpLogger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';
import { corsMiddleware } from './middlewares/cors';
import { rateLimiter } from './middlewares/rateLimiter'; // <- aqui
import routes from './routes';

const app = express();

// Segurança básica
app.use(helmet());

// CORS com whitelist dinâmica
app.use(corsMiddleware);

// Rate Limiting global
app.use(rateLimiter); // <- usando o seu limiter modular

// Middlewares globais
app.use(express.json());
app.use(cookieParser());
app.use(httpLogger); // substitui morgan

// Rotas
app.use(routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Handler global de erros
app.use(errorHandler);

export default app;
