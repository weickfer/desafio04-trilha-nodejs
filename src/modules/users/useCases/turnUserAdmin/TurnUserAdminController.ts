import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  public handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.turnUserAdminUseCase.execute({ user_id });

    return response.json(user);
  }
}

export { TurnUserAdminController };
