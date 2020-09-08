import express from 'express';
import { config } from 'dotenv';
import errorMiddleware from './middlewares/error-handling';
import routes from './routes';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.use(errorMiddleware);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
