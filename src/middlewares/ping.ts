import { Request, Response, NextFunction } from 'express';

export interface PingRequest extends Request {
  additionalData: string;
}

export function queryParser(req: PingRequest, res: Response, next: NextFunction): void {
  req.additionalData = 'halihóóó';
  next();
}
