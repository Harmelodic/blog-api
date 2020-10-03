import express from 'express';
import path from 'path';
import mustacheExpress from 'mustache-express';
import health from './routes/health';
import api from './routes/api';
import pages from './routes/pages';

const staticFiles = path.join(__dirname, 'client/public');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', `${staticFiles}/views`);
app.use(express.static(staticFiles));

app.use('/list', pages);
app.use('/post', pages);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/health', health);
app.use('/api', api);

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>
  res.render('index', {
    title: 'Scribbles by Harmelodic',
    description: `A blog by Harmelodic (a.k.a. Matt Smith)`,
  }));

export default app;
