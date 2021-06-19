import express from 'express';
import health from './health/controller.js';
import posts from './post/controller.js';
import category from './category/controller.js';

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

app.use('/health', health);
app.use('/posts', posts);
app.use('/post', posts);
app.use('/category', category);

export default app;
