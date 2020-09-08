import HTTPError from './http-error';

export default class BadRequestError extends HTTPError {
  constructor(message: string) {
    super(message, 400);
  }
}
