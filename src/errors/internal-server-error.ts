import HTTPError from './http-error';

export default class InternalServerError extends HTTPError {
  constructor(message: string) {
    super(message, 500);
  }
}
