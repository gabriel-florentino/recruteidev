import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { registerSchema } from '../validators/auth.validator';
import { registerService } from '../services/auth.service';

export async function registerController(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const data = registerSchema.parse(req.body);

    const user = await registerService(data);

    return res.status(201).json({
      id: user.id,
      email: user.email,
      tipo: user.tipo,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(400).json({ error: 'Erro ao cadastrar usuário' });
  }
}
