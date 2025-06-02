import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  senha: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
  tipo: z.enum(['DEV', 'EMPRESA']),
});

export type RegisterInput = z.infer<typeof registerSchema>;