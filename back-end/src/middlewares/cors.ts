import cors from 'cors';

const whitelist = [process.env.FRONTEND_URL, process.env.APP_URL];
export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
});
