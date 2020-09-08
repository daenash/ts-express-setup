export default class HTTPError extends Error {
  status: number;
  userMessage: string;

  constructor(message: string, status: number) {
    super(message);
    this.userMessage = message;
    this.status = status || 500;
  }
}
