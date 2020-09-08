import moment from 'moment-timezone';
import { Request, Response } from 'express';

export default class PingController {
  static async ping(req: Request, res: Response): Promise<void> {
    res.status(200).send({ time: moment.utc().toISOString() });
  }

  static async random(req: Request, res: Response): Promise<void> {
    res.status(200).send({ number: Math.random() * 100_000_000 });
  }
}
