import app from './app';
import { env } from './config/env';

app.listen(env.PORT, () => {
  console.log(`🚀 Server rodando em ${env.APP_URL ?? `http://localhost:${env.PORT}`}`);
});
