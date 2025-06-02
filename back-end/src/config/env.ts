import fs from 'fs';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string().min(32),
  SENDGRID_API_KEY: z.string(),
  SENDGRID_SENDER_EMAIL: z.string().email(),
  SENDGRID_REPLY_TO: z.string().email(),
  FIREBASE_SERVICE_ACCOUNT_PATH: z.string(),
  FRONTEND_URL: z.string().url().optional(),
  APP_URL: z.string().url().optional(),
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables!', _env.error.format());
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;

export const firebaseServiceAccount = JSON.parse(
  fs.readFileSync(env.FIREBASE_SERVICE_ACCOUNT_PATH, 'utf-8')
);
