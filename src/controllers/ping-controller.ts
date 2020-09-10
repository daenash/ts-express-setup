import { Request, Response } from 'express';
import PingService from '../services/ping-service';

export default class PingController {
  static async ping(req: Request, res: Response): Promise<void> {
    res.status(200).send({ time: PingService.getTime() });
  }

  static async random(req: Request, res: Response): Promise<void> {
    res.status(200).send({ number: Math.random() * 100_000_000 });
  }
}
