import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.use('/api/*', cors({
  origin: '*', // or '*' to allow all origins
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
