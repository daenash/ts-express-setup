import { Router } from 'express';
import PingRouter from './ping';

const routes = Router();

routes.use('/ping', PingRouter);

export default routes;
