// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import todoRoutes from './routes/todo.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
// add cors middleware
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});