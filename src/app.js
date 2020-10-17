import express from 'express';
import health from './health/controller';
import posts from './posts/controller';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/health', health);
app.use('/posts', posts);

export default app;
