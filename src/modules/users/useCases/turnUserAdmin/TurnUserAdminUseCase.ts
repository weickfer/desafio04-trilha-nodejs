import { AppError } from "../../../../AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  public execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not exists!", 404);
    }

    const userWithAdmin = this.usersRepository.turnAdmin(user);

    return userWithAdmin;
  }
}

export { TurnUserAdminUseCase };
