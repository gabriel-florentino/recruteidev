// src/app.ts

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import routes from './routes';

const app = express();

// Segurança básica
app.use(helmet());

// CORS (você pode ajustar a whitelist depois)
app.use(cors({
  origin: ['http://localhost:5173'], // ajuste depois com seu frontend
  credentials: true,
}));

// Middlewares globais
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Rate Limiting (ajustável por rota depois se quiser)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite por IP
});
app.use(limiter);

// Rotas
app.use(routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

export default app;
