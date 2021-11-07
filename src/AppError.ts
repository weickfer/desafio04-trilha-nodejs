export class AppError {
  readonly message: string;
  readonly statusCode: number;

  constructor(message: string, code = 400) {
    this.message = message;
    this.statusCode = code;
  }
}
