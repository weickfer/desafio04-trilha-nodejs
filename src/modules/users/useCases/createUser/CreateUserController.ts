import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  public handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    const user = this.createUserUseCase.execute({ email, name });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
