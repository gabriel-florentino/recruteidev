import { prisma } from '../../../prisma/client';
import bcrypt from 'bcrypt';
import { TipoUsuarioType } from '../../../types/user';

interface RegisterParams {
  email: string;
  senha: string;
  tipo: TipoUsuarioType;
}

export async function registerService({ email, senha, tipo }: RegisterParams) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Email já cadastrado');
  }

  const senha_hash = await bcrypt.hash(senha, 10);

  const user = await prisma.user.create({
    data: {
      email,
      senha_hash, // Aqui vai o campo certo do banco
      tipo,
    },
  });

  return user;
}
