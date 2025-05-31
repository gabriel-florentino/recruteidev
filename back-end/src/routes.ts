// src/routes.ts
import { Router } from 'express';

const router = Router();

// Rotas temporárias de teste
router.get('/', (req, res) => {
  res.send('API está viva 🚀');
});

export default router;
