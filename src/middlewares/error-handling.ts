import { Request, Response } from 'express';
import HTTPError from '../errors/http-error';

export default function errorMiddleware(
  error: HTTPError,
  request: Request,
  response: Response,
): void {
  const status = error.status || 500;
  const message = error.userMessage || 'Unexpected internal server error occured!';

  if (status === 500) {
    console.log(error.stack);
  }

  response.status(status).send({
    status,
    message,
  });
}
