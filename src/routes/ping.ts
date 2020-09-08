import { Router } from 'express';
import PingController from '../controllers/ping-controller';

const PingRouter = Router();

PingRouter.get('/time', PingController.ping);
PingRouter.get('/random', PingController.random);

export default PingRouter;
